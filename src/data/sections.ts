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
    description: 'Kurze Wege, klare Rueckmeldungen und ein persoenlicher Ansprechpartner.',
  },
  {
    title: 'Saubere Baustellen',
    description: 'Arbeitsbereiche werden strukturiert vorbereitet und ordentlich uebergeben.',
  },
  {
    title: 'Regionale Naehe',
    description: 'Der Fokus liegt auf Freilassing und der umliegenden Region.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Anfrage',
    description: 'Projekt kurz schildern und erste Eckdaten oder Fotos bereitstellen.',
  },
  {
    title: 'Besichtigung',
    description: 'Umfang, Zustand und Ablauf werden vor Ort oder nach Abstimmung geklaert.',
  },
  {
    title: 'Angebot',
    description: 'Leistung, Zeitfenster und naechste Schritte werden nachvollziehbar festgehalten.',
  },
  {
    title: 'Ausfuehrung',
    description: 'Die Arbeiten werden sauber koordiniert und transparent begleitet.',
  },
];

export const commonFaq: FaqItem[] = [
  {
    question: 'Welche Informationen helfen fuer die erste Einschaetzung?',
    answer: 'Hilfreich sind Ort, Leistungsbereich, grober Umfang, gewuenschtes Zeitfenster und vorhandene Fotos.',
  },
  {
    question: 'Sind auch kleinere Projekte moeglich?',
    answer: 'Die Struktur ist fuer kleine und groessere Vorhaben vorbereitet; die fachliche Abgrenzung wird redaktionell konkretisiert.',
  },
  {
    question: 'In welcher Region ist Vrebo sichtbar?',
    answer: 'Die Website plant Freilassing, Bad Reichenhall, Berchtesgadener Land und die nahe Salzburg Umgebung als regionale Signale.',
  },
];
