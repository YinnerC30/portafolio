export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'es' as const;

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.studies': 'Estudios',
    'nav.certifications': 'Certificaciones',
    'experience.company': 'Empresa',
    'experience.type': 'Tipo de trabajo',
    'experience.duration': 'Duración',
    'experience.description': 'Descripción',
    'experience.functions': 'Funciones',
    'experience.achievements': 'Logros',
    'projects.images': 'Imágenes de ejemplo',
    'projects.demo': 'Video demo',
    'projects.technologies': 'Tecnologías utilizadas',
    'projects.description': 'Descripción',
    'projects.features': 'Funcionalidades',
    'studies.degree': 'Titulo otorgado',
    'studies.institution': 'Institución',
    'studies.graduation': 'Fecha de graduación',
    'studies.achievements': 'Logros',
    'certifications.institution': 'Institución',
    'certifications.date': 'Fecha de graduación',
  },
  en: {
    'nav.about': 'About me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.studies': 'Studies',
    'nav.certifications': 'Certifications',
    'experience.company': 'Company',
    'experience.type': 'Type job',
    'experience.duration': 'Duration',
    'experience.description': 'Description',
    'experience.functions': 'Functions',
    'experience.achievements': 'Achievements',
    'projects.images': 'Example Images',
    'projects.demo': 'Demo Video',
    'projects.technologies': 'Technologies Used',
    'projects.description': 'Description',
    'projects.features': 'Features',
    'studies.degree': 'Degree Awarded',
    'studies.institution': 'Institution',
    'studies.graduation': 'Graduation Date',
    'studies.achievements': 'Achievements',
    'certifications.institution': 'Institution',
    'certifications.date': 'Degree Awarded',
  },
} as const;

export type TranslationKey = keyof typeof ui.es; 