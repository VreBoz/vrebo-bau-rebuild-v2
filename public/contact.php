<?php

declare(strict_types=1);

const CONTACT_FORM_RECIPIENT_PLACEHOLDER = 'TODO_RECIPIENT_EMAIL';
const CONTACT_FORM_RETURN_URL = '/kontakt';

function redirect_with_status(string $status): void
{
    $allowed = ['success', 'error', 'invalid'];

    if (!in_array($status, $allowed, true)) {
        $status = 'error';
    }

    header('Location: ' . CONTACT_FORM_RETURN_URL . '?status=' . rawurlencode($status) . '#anfrage', true, 303);
    exit;
}

function clean_single_line(string $value, int $maxLength): string
{
    $value = trim(str_replace(["\r", "\n"], ' ', $value));
    $value = preg_replace('/\s+/u', ' ', $value) ?? $value;

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function clean_message(string $value, int $maxLength): string
{
    $value = trim($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function normalized_length(string $value): int
{
    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? $value);

    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}

function is_placeholder_email(string $email): bool
{
    return $email === '' || $email === CONTACT_FORM_RECIPIENT_PLACEHOLDER || strncmp($email, 'TODO_', 5) === 0;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    redirect_with_status('error');
}

$recipientEmail = clean_single_line((string) (getenv('VREBO_CONTACT_TO') ?: CONTACT_FORM_RECIPIENT_PLACEHOLDER), 190);
$fromEmail = clean_single_line((string) (getenv('VREBO_CONTACT_FROM') ?: ''), 190);

// TODO before launch: set VREBO_CONTACT_TO on the hosting environment or replace the placeholder above.
if (is_placeholder_email($recipientEmail) || filter_var($recipientEmail, FILTER_VALIDATE_EMAIL) === false) {
    error_log('Vrebo contact form recipient email is not configured.');
    redirect_with_status('error');
}

if ($fromEmail === '' || filter_var($fromEmail, FILTER_VALIDATE_EMAIL) === false) {
    $fromEmail = $recipientEmail;
}

$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    redirect_with_status('success');
}

$startedAt = (int) ($_POST['started_at'] ?? 0);
if ($startedAt > 0) {
    $elapsed = time() - $startedAt;

    if ($elapsed >= 0 && $elapsed < 3) {
        redirect_with_status('invalid');
    }
}

$name = clean_single_line((string) ($_POST['name'] ?? ''), 120);
$email = clean_single_line((string) ($_POST['email'] ?? ''), 190);
$phone = clean_single_line((string) ($_POST['phone'] ?? ''), 80);
$service = clean_single_line((string) ($_POST['service'] ?? ''), 120);
$location = clean_single_line((string) ($_POST['location'] ?? ''), 180);
$message = clean_message((string) ($_POST['message'] ?? ''), 5000);

if (normalized_length($name) < 2) {
    redirect_with_status('invalid');
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    redirect_with_status('invalid');
}

if (normalized_length($message) < 10) {
    redirect_with_status('invalid');
}

preg_match_all('/https?:\/\/|www\./i', $message, $urlMatches);
if (count($urlMatches[0]) > 3) {
    redirect_with_status('invalid');
}

$submittedAt = date('Y-m-d H:i:s');
$host = clean_single_line((string) ($_SERVER['HTTP_HOST'] ?? '-'), 120);

$body = [
    'Neue Kontaktanfrage ueber vrebo-bau.de',
    '',
    'Name: ' . $name,
    'E-Mail: ' . $email,
    'Telefon: ' . ($phone !== '' ? $phone : '-'),
    'Leistung / Projektart: ' . ($service !== '' ? $service : '-'),
    'Ort / Objekt: ' . ($location !== '' ? $location : '-'),
    'Domain: ' . $host,
    'Zeitpunkt: ' . $submittedAt,
    '',
    'Nachricht:',
    $message,
    '',
    'Hinweis: Die Anfrage stammt aus dem Kontaktformular der Website.',
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Vrebo Bau Kontaktformular <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(
    $recipientEmail,
    'Neue Kontaktanfrage ueber vrebo-bau.de',
    implode("\n", $body),
    implode("\r\n", $headers)
);

if ($sent === false) {
    error_log('Vrebo contact form mail() failed.');
    redirect_with_status('error');
}

redirect_with_status('success');
