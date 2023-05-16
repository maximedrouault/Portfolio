import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: '<Maxime DROUAULT />',
  title: "Bonjour, je suis Maxime,",
  description:
    "Je suis un développeur Web passionné ayant une expérience du développement Front-end avec HTML/CSS, JS et React, ainsi que du Back-end avec Express JS, Node JS et MongoDB. Je possède par ailleurs une expérience de plus d'une quinzaine d'années côté IT, en tant que technicien, administrateur réseaux et formateur.",
  resumeLink:
    "CV-DROUAULT-Maxime.pdf"
};

export const openSource = {
  githubUserName: 'maximedrouault',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://maxime-drouault.fr/',
  linkedin: 'https://www.linkedin.com/in/maximedrouault/',
  github: 'https://github.com/maximedrouault',
  instagram: 'https://www.instagram.com/drouaultmaxime/',
  facebook: 'https://www.facebook.com/maxime.drouault.7',
  twitter: 'https://twitter.com/MaximeDrouault',
};

export const skillsSection: SkillsSectionType = {
  title: 'Ce que je fais',
  subTitle: 'Je suis un développeur passionné pour changer le monde avec la technologie.',
  data: [
    {
      title: 'Front-end et Back-end',
      lottieAnimationFile: '/lottie/skills/skills.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Création d'applications à page unique (SPA) et également Responsive."
        ),
        emoji("⚡ Création de sites Web statiques et dynamiques."),
        emoji("⚡ Création d'API RESTful complètes, sous Express JS et Node JS."),
      ],
      softwareSkills: [
        {
          skillName: 'HTML 5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS 3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'React',
          fontAwesomeClassName: 'logos:react',
        },
        {
          skillName: 'React Router',
          fontAwesomeClassName: 'logos:react-router',
        },
        {
          skillName: 'Express JS',
          fontAwesomeClassName: 'skill-icons:expressjs-light',
        },
        {
          skillName: 'Node JS',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'VSCode',
          fontAwesomeClassName: 'devicon:vscode',
        },
        {
          skillName: 'Git - GitHub',
          fontAwesomeClassName: 'logos:github-icon',
        },
        {
          skillName: 'Reponsive Design',
          fontAwesomeClassName: 'mdi:responsive',
        }
      ],
    },
    {
      title: 'Cloud Infra-Architecture réseaux',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Expériences sur divers hébergements web et plateformes cloud.'),
        emoji(
          '⚡ Hébergement et maintenance de sites web avec intégration de base de données.'
        ),
        emoji(
          '⚡ Virtualisation de serveur via VMWare ESXi.'
        ),
        emoji(
          '⚡ Expérience de plus de 15 ans en infogérance de réseaux, parc informatiques, téléphonie IP et serveurs.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'OVH',
          fontAwesomeClassName: 'simple-icons:ovh',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'vscode-icons:file-type-apache',
        },
        {
          skillName: 'VWWare',
          fontAwesomeClassName: 'carbon:logo-vmware',
        },
        {
          skillName: 'Gestion de Serveur',
          fontAwesomeClassName: 'mdi:server-network',
        },
        {
          skillName: 'Gestion de Réseaux',
          fontAwesomeClassName: 'material-symbols:lan',
        },
        {
          skillName: 'Gestion de parc informatique',
          fontAwesomeClassName: 'mdi:lan-check',
        }
      ],
    },
    {
      title: 'Compétences annexes',
      lottieAnimationFile: '/lottie/skills/othersskills.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Connaissances des méthodes de gestion de projets Agile et en cascade.'
        ),
        emoji(
          '⚡ Connaissances des outils de gestion de projets, Trello et Asana.'
        ),
        emoji(
          "⚡ Connaissances sur l'outil de maquettage Figma."
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Agile',
          fontAwesomeClassName: 'iconoir:agile',
        },
        {
          skillName: 'Trello',
          fontAwesomeClassName: 'logos:trello',
        },
        {
          skillName: 'Asana',
          fontAwesomeClassName: 'logos:asana-icon',
        },
        {
          skillName: 'Gantt',
          fontAwesomeClassName: 'mdi:chart-gantt',
        },
        {
          skillName: 'Figma',
          fontAwesomeClassName: 'ph:figma-logo',
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Orienté vers les objectifs', //Insert stack or technology you have experience in
    // progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Collaboration',
    // progressPercentage: '90'
  },
  {
    Stack: 'Positivité',
    // progressPercentage: '85'
  },
  {
    Stack: 'Adaptabilité',
    // progressPercentage: '95'
  },
  {
    Stack: 'Persévérant',
    // progressPercentage: '100'
  },
  {
    Stack: 'Empathique',
    // progressPercentage: '100'
  },
  {
    Stack: 'Rigoureux',
    // progressPercentage: '100'
  }
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'OpenClassrooms',
    subHeader: 'Diplômé "Développeur intégrateur web"',
    duration: 'Décembre 2022 - Juin 2023',
    desc: 'Complétion de 8 projets professionnalisants.',
    grade: 'Niveau 5 / BAC+2',
    descBullets: [
      "Technologies abordées : HTML / CSS / JS / React / Git/GitHub / Node.js / Express.js / MongoDB / API Rest / Responsive Design.",
      "Compétences annexes abordées : Gestion de projets et méthodes Agile / Cascade.",
      "Responsive Design / SEO / Accessibilité."

    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Développeur Web',
    company: 'OpenClassrooms',
    companyLogo: '/img/icons/common/openclassrooms.jpg',
    date: 'Décembre 2022 – Juin 2023',
    desc: "J'ai réalisé la complétion de 8 projets me permettant de maîtriser les technologies et compétences suivantes :",
    descBullets: [
      "HTML / CSS / JS / React / Git/GitHub / NodeJS / ExpressJS / MongoDB / API Rest.",
      "Gestion de projets / Agile / Cascade.",
      "Responsive Design / SEO / Accessibilité."
    ]
  }
];

export const projects: ProjectType[] = [
  {
    name: 'Booki',
    desc: "Réalisation complète d'un site de location d'hébergements à partir d'une maquette Figma. HTML / CSS / Responsive",
    github: 'https://github.com/maximedrouault/Booki',
    link: 'https://maximedrouault.github.io/Booki/',
    projectsImg: "img/booki.jpg"
  },
  {
    name: 'Portfolio Architecte Sophie-BLUEL',
    desc: "Création d'un site web pour présenter les divers projets de l'architecte, avec espace admin protégé par authentification pour leurs gestions. HTML / CSS / JS / API / Auth Token",
    github: 'https://github.com/maximedrouault/Sophie-BLUEL-Architecte',
    // link: 'https://github.com/maximedrouault/Sophie-BLUEL-Architecte',
    projectsImg: "img/portfolio-sophie-bluel-architecte.jpg"
  },
  {
    name: 'Nina CARDUCCI - Photographe',
    desc: "Debug et optimisation du site d'une photographe. Audit et amélioration, SEO, Meta Tags, accessibilité, performance et corrections des bugs. LIGHTHOUSE / WAVE / SEO / OPENGRAPH / GOOGLE RICH / SCHEMA.ORG / Responsive",
    github: 'https://github.com/maximedrouault/Nina-CARDUCCI-Photographe',
    link: 'https://maximedrouault.github.io/Nina-CARDUCCI-Photographe/',
    projectsImg: "img/nina-carducci-photographe.jpg"
  },
  {
    name: 'KASA',
    desc: "Réalisation complète en React d'un site de location d'hébergements à partir d'une maquette Figma.  HTML / CSS / REACT / REACT ROUTER / Responsive",
    github: 'https://github.com/maximedrouault/Kasa',
    // link: 'https://maximedrouault.github.io/Kasa/',
    projectsImg: "img/kasa.jpg"
  },
  {
    name: 'Mon Vieux Grimoire',
    desc: "Réalisation complète d'une API Rest (CRUD) avec gestion d'authentification, calcul de note moyenne et compression des images via Sharp. Express JS / Node JS / MongoDB / Mongoose / API / BCRYPT / JWT / MULTER / SHARP",
    github: 'https://github.com/maximedrouault/Mon-Vieux-Grimoire',
    // link: 'https://maximedrouault.github.io/Kasa/',
    projectsImg: "img/mon-vieux-grimoire.jpg"
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Mamadou OURY DIALLO - Évaluateur OC',
    feedback:
      "Points forts : Projet bien structuré. Code bien indenté. Utilisation des spécifications HTML/CSS. Le projet respecte le cahier de charge. Bonne présentation, bonnes réponses aux questions posées."
  },
  {
    name: 'Éric ALLAIN - Évaluateur OC',
    feedback:
      "Points forts : Maxime a réalisé un excellent travail sur ce projet en créant un code très bien optimisé et commenté pour chacune des différentes fonctionnalités implémentées. Maxime a réalisé une très bonne présentation en s'appuyant pour l'introduction sur un PowerPoint, puis l'ensemble de l'explication des différentes fonctionnalités implémentées ont été réalisés à partir de Visual Studio Code. Félicitations pour cet excellent travail et bonne chance pour la suite de ta formation développeur web.",
  },
  {
    name: 'Cédric TCHANA - Évaluateur OC',
    feedback:
      "Points forts : Rapport très bien monté. Soucis particuliers apporté aux graphiques représentatifs. L'étudiant a effectué une bonne présentation basée sur ses livrables.",
  },
  {
    name: 'Christian FODOUP - Évaluateur OC',
    feedback:
      "Points forts : Bonne maîtrise de son travail. Explications claires. Bonne structuration des livrables.",
  },
  {
    name: 'Danielle PRISCA - Évaluateur OC',
    feedback:
      "Points forts : L’étudiant a bien su utiliser les props pour gérer ce qui change à chaque fois. Bonne organisation des composants dans différents fichiers. Code très bien indenté. Code très bien commenté.",
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Maxime DROUAULT',
  description:
    'Un développeur passionné pour changer le monde avec la technologie.',
  author: 'Maxime DROUAULT',
  image: 'https://avatars.githubusercontent.com/u/119673669?v=4',
  url: 'https://maxime-drouault.fr',
  keywords: [
    'Maxime',
    'Maxime DROUAULT',
    '@MaximeDrouault',
    'drouaultmaxime',
    'Portfolio',
    'Maxime Portfolio ',
    'Maxime DROUAULT Portfolio',
  ],
};
