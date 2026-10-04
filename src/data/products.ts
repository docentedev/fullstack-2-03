export interface Tag {
  name: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  tags: Tag[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "React Pro Boilerplate",
    description:
      "Plantilla avanzada con Vite, TypeScript, Tailwind y Wouter para iniciar aplicaciones escalables en segundos.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=React+Pro",
    tags: [
      { name: "React", url: "/tags/react" },
      { name: "Vite", url: "/tags/vite" },
      { name: "TypeScript", url: "/tags/typescript" },
    ],
  },
  {
    id: 2,
    name: "Tailwind UI Masterclass",
    description:
      "Colección de componentes UI altamente personalizables utilizando utilidades modernas y diseño responsive.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Tailwind+UI",
    tags: [
      { name: "CSS", url: "/tags/css" },
      { name: "Tailwind", url: "/tags/tailwind" },
      { name: "UI/UX", url: "/tags/ui-ux" },
    ],
  },
  {
    id: 3,
    name: "Node.js Microservices Kit",
    description:
      "Arquitectura backend modular lista para producción con NestJS, TypeORM y autenticación JWT.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=NestJS+API",
    tags: [
      { name: "Backend", url: "/tags/backend" },
      { name: "NodeJS", url: "/tags/nodejs" },
      { name: "API", url: "/tags/api" },
    ],
  },
  {
    id: 4,
    name: "Cloud Deploy Automator",
    description:
      "Scripts y flujos de trabajo en GitHub Actions para despliegue automatizado directo en instancias AWS EC2.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=AWS+Deploy",
    tags: [
      { name: "DevOps", url: "/tags/devops" },
      { name: "AWS", url: "/tags/aws" },
      { name: "CI/CD", url: "/tags/cicd" },
    ],
  },
  {
    id: 5,
    name: "Design System Tokens",
    description:
      "Sistema centralizado de tokens visuales sincronizados entre Figma y código frontend usando Style Dictionary.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Design+System",
    tags: [
      { name: "Figma", url: "/tags/figma" },
      { name: "Tokens", url: "/tags/tokens" },
      { name: "Frontend", url: "/tags/frontend" },
    ],
  },
  {
    id: 6,
    name: "TypeScript Utilities Hub",
    description:
      "Librería de tipos avanzados, utilidades genéricas y validadores estrictos para entornos de alta seguridad.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=TS+Utilities",
    tags: [
      { name: "TypeScript", url: "/tags/typescript" },
      { name: "Utils", url: "/tags/utils" },
    ],
  },
  {
    id: 7,
    name: "PostgreSQL Optimizer Pro",
    description:
      "Herramientas de diagnóstico y consultas optimizadas para bases de datos relacionales de alto tráfico.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=PostgreSQL",
    tags: [
      { name: "Database", url: "/tags/database" },
      { name: "SQL", url: "/tags/sql" },
    ],
  },
  {
    id: 8,
    name: "CSS Modules Visual Engine",
    description:
      "Metodología y configuración avanzada para encapsular estilos complejos sin conflictos de especificidad.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=CSS+Modules",
    tags: [
      { name: "CSS", url: "/tags/css" },
      { name: "Frontend", url: "/tags/frontend" },
    ],
  },
  {
    id: 9,
    name: "Wouter Router Extension",
    description:
      "Capas adicionales de middleware y protección de rutas para el enrutador ligero de aplicaciones SPA.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Wouter+Router",
    tags: [
      { name: "React", url: "/tags/react" },
      { name: "Routing", url: "/tags/routing" },
    ],
  },
  {
    id: 10,
    name: "Dockerized Dev Environment",
    description:
      "Contenedores Docker optimizados para desarrollo local multiplataforma con volúmenes persistentes.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Docker+Dev",
    tags: [
      { name: "DevOps", url: "/tags/devops" },
      { name: "Docker", url: "/tags/docker" },
    ],
  },
  {
    id: 11,
    name: "Vite Bundler Analyzer",
    description:
      "Plugin avanzado para monitorear el tamaño de los chunks y optimizar la carga inicial de tus assets.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Vite+Optimizer",
    tags: [
      { name: "Vite", url: "/tags/vite" },
      { name: "Performance", url: "/tags/performance" },
    ],
  },
  {
    id: 12,
    name: "Spring Boot Enterprise Core",
    description:
      "Estructura base enterprise con seguridad OAuth2, conectividad JPA y arquitectura orientada a dominios.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Spring+Boot",
    tags: [
      { name: "Java", url: "/tags/java" },
      { name: "Backend", url: "/tags/backend" },
    ],
  },
  {
    id: 13,
    name: "Kotlin Mobile Foundation",
    description:
      "Librerías compartidas y adaptadores multiplataforma para desarrollo móvil nativo de alto rendimiento.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Kotlin+Core",
    tags: [
      { name: "Mobile", url: "/tags/mobile" },
      { name: "Kotlin", url: "/tags/kotlin" },
    ],
  },
  {
    id: 14,
    name: "Python AI Agent Bridge",
    description:
      "Conector ligero para integrar modelos de lenguaje locales ejecutados mediante Ollama o endpoints personalizados.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Python+AI",
    tags: [
      { name: "AI", url: "/tags/ai" },
      { name: "Python", url: "/tags/python" },
    ],
  },
  {
    id: 15,
    name: "Prisma ORM Dashboard",
    description:
      "Panel de administración visual autogenerado para esquemas complejos en bases de datos relacionales.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Prisma+ORM",
    tags: [
      { name: "Database", url: "/tags/database" },
      { name: "Prisma", url: "/tags/prisma" },
    ],
  },
  {
    id: 16,
    name: "Kubernetes Cluster Manager",
    description:
      "Manifiestos y herramientas de orquestación para despliegues distribuidos en entornos cloud.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Kubernetes",
    tags: [
      { name: "DevOps", url: "/tags/devops" },
      { name: "Cloud", url: "/tags/cloud" },
    ],
  },
  {
    id: 17,
    name: "Azure Entra ID Connector",
    description:
      "Módulo de autenticación empresarial integrado con protocolos de identidad de Microsoft Azure.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Azure+Auth",
    tags: [
      { name: "Security", url: "/tags/security" },
      { name: "Azure", url: "/tags/azure" },
    ],
  },
  {
    id: 18,
    name: "Next.js SSR Booster",
    description:
      "Componentes optimizados para renderizado híbrido y estrategias avanzadas de caché incremental.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=NextJS+Boost",
    tags: [
      { name: "React", url: "/tags/react" },
      { name: "SSR", url: "/tags/ssr" },
    ],
  },
  {
    id: 19,
    name: "TypeORM Migration Suite",
    description:
      "Automatizador de migraciones y control de versiones para esquemas de bases de datos relacionales.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=TypeORM+Kit",
    tags: [
      { name: "Database", url: "/tags/database" },
      { name: "TypeScript", url: "/tags/typescript" },
    ],
  },
  {
    id: 20,
    name: "AWS API Gateway Proxy",
    description:
      "Configuraciones avanzadas de enrutamiento y políticas de seguridad para APIs expuestas en AWS.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=AWS+Gateway",
    tags: [
      { name: "AWS", url: "/tags/aws" },
      { name: "API", url: "/tags/api" },
    ],
  },
  {
    id: 21,
    name: "Supabase Realtime Sync",
    description:
      "Capas de abstracción para sincronización de datos en tiempo real mediante WebSockets.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Supabase+Sync",
    tags: [
      { name: "Database", url: "/tags/database" },
      { name: "Realtime", url: "/tags/realtime" },
    ],
  },
  {
    id: 22,
    name: "GitHub Actions CI Workflow",
    description:
      "Pipeline preconfigurado para pruebas unitarias, linting automático y análisis estático de código.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=CI+Workflow",
    tags: [
      { name: "DevOps", url: "/tags/devops" },
      { name: "Git", url: "/tags/git" },
    ],
  },
  {
    id: 23,
    name: "Responsive Grid Layouts",
    description:
      "Librería de utilidades de diseño adaptativo para interfaces complejas basadas en CSS Grid.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Grid+Layouts",
    tags: [
      { name: "CSS", url: "/tags/css" },
      { name: "UI", url: "/tags/ui" },
    ],
  },
  {
    id: 24,
    name: "State Management Lite",
    description:
      "Alternativa ultraligera basada en Hooks nativos para gestión de estado global sin sobrecarga.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=State+Manager",
    tags: [
      { name: "React", url: "/tags/react" },
      { name: "State", url: "/tags/state" },
    ],
  },
  {
    id: 25,
    name: "Web Performance Auditor",
    description:
      "Herramienta de diagnóstico para métricas Core Web Vitals en aplicaciones de página única.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Performance",
    tags: [
      { name: "Audit", url: "/tags/audit" },
      { name: "Vite", url: "/tags/vite" },
    ],
  },
  {
    id: 26,
    name: "OAuth2 Security Guard",
    description:
      "Filtros de seguridad y validación de tokens de acceso para arquitecturas distribuidas.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=OAuth2+Guard",
    tags: [
      { name: "Security", url: "/tags/security" },
      { name: "Backend", url: "/tags/backend" },
    ],
  },
  {
    id: 27,
    name: "UI Component Storybook",
    description:
      "Entorno aislado para desarrollo, documentación y pruebas visuales de componentes de React.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Storybook",
    tags: [
      { name: "React", url: "/tags/react" },
      { name: "Testing", url: "/tags/testing" },
    ],
  },
  {
    id: 28,
    name: "GraphQL Federation Hub",
    description:
      "Orquestador de múltiples esquemas de microservicios hacia una API unificada.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=GraphQL",
    tags: [
      { name: "API", url: "/tags/api" },
      { name: "Backend", url: "/tags/backend" },
    ],
  },
  {
    id: 29,
    name: "Tailwind Animation Suite",
    description:
      "Conjunto de transiciones y animaciones fluidas basadas en keyframes personalizados para Tailwind.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=Tailwind+Anim",
    tags: [
      { name: "Tailwind", url: "/tags/tailwind" },
      { name: "Animation", url: "/tags/animation" },
    ],
  },
  {
    id: 30,
    name: "Fullstack SaaS Boilerplate",
    description:
      "Plantilla integral monorepo con panel administrativo, pasarela de pagos y base de datos configurada.",
    imgUrl: "https://placehold.co/600x400/0f172a/38bdf8?text=SaaS+Boilerplate",
    tags: [
      { name: "Fullstack", url: "/tags/fullstack" },
      { name: "SaaS", url: "/tags/saas" },
    ],
  },
];
