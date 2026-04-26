export type TrustItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const trustItems: TrustItem[] = [
  {
    title: 'Direkte Abstimmung',
    description: 'Kurze Wege, klare Rückmeldungen und eine persönliche Abstimmung zum nächsten Schritt.',
  },
  {
    title: 'Saubere Baustellen',
    description: 'Arbeitsbereiche werden vorbereitet, geschützt und nach vereinbartem Umfang ordentlich übergeben.',
  },
  {
    title: 'Regionale Nähe',
    description: 'Der Fokus liegt auf Freilassing, Bad Reichenhall und dem Berchtesgadener Land.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Anfrage',
    description: 'Projekt kurz schildern und erste Eckdaten oder Fotos bereitstellen.',
  },
  {
    title: 'Besichtigung',
    description: 'Umfang, Zustand und Ablauf werden vor Ort oder nach Abstimmung geklärt.',
  },
  {
    title: 'Abstimmung',
    description: 'Leistung, Reihenfolge und Zeitfenster werden nachvollziehbar festgehalten.',
  },
  {
    title: 'Ausführung',
    description: 'Die Arbeiten werden sauber koordiniert, begleitet und geordnet übergeben.',
  },
];

export const commonFaq: FaqItem[] = [
  {
    question: 'Welche Informationen helfen für die erste Einschätzung?',
    answer: 'Hilfreich sind Ort, Leistungsbereich, grober Umfang, gewünschtes Zeitfenster und vorhandene Fotos.',
  },
  {
    question: 'Sind auch kleinere Projekte möglich?',
    answer: 'Ja, wenn Umfang und Ablauf sinnvoll abgestimmt werden können. Eine kurze Beschreibung reicht für den ersten Einstieg.',
  },
  {
    question: 'In welcher Region ist Vrebo sichtbar?',
    answer: 'Der Schwerpunkt liegt auf Freilassing, Bad Reichenhall, dem Berchtesgadener Land und der nahen Salzburg Umgebung.',
  },
];
