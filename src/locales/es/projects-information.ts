import type { ImageCarousel } from '../../components/Carousel';
import type { ProjectInformation } from '../../interfaces/ProjectInformation';

export const projectsES: ProjectInformation[] = [
  {
    projectName: 'Cropco: Solución De Control y seguimiento de Cultivos',
    descriptionProject:
      'La solución integral para gestionar la información de los cultivos de manera eficiente y efectiva, Registra y monitorea el progreso de los cultivos en tiempo real. Proporciona insights valiosos gracias a las herramientas de análisis avanzado.',
    stackTechnologies: [
      {
        name: 'React',
        backgroundColor: 'bg-blue-600',
      },
      { name: 'NestJS', backgroundColor: 'bg-pink-600' },
      { name: 'PostgreSQL', backgroundColor: 'bg-blue-600' },
      { name: 'Shadcn/ui', backgroundColor: 'bg-gray-600' },
    ],
    linkRepository: 'https://github.com/YinnerC30/frontend-cropco-app',
    linkPreview: 'https://cropco-dev.netlify.app/',
    features: [
      'Autenticación y autorización de usuarios mediante políticas',
      'Control y gestión de empleados clientes, cultivos, proveedores, insumos agrícolas, cosechas, ventas, compras y pagos',
      'Análisis y presentación de gráficos',
      'Generación de reportes en PDF',
      'Barras de búsqueda e filtrado de información avanzada',
      'Optimización de consultas almacenando datos en cache',
      'Sesión de usuario temporal y con capacidad de extenderla',
      'Registros tabulados y con paginado manual',
      'Orden de información por valores numéricos, fechas y alfabeto',
      'Barra de búsqueda de comandos de la aplicación',
      'Cambio de tema de la aplicación (modo oscuro y claro)',
    ],
    images: [],
    videoDemoURL:
      'https://www.youtube.com/embed/UXXsp_PqsHo?si=GNIZBMMfTT4QFWjb',
  },
];
