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
  title: 'Développeur Java et Angular',
  description: `Avec 18 ans dʼexpérience dans lʼIT et diplômé dʼun Bac+5 en développement logiciel, jʼai choisi de me spécialiser en Java et Angular. Je maîtrise également Spring, lʼécosystème CI/CD et Cloud.

    Mon parcours en systèmes, réseaux et télécoms mʼapporte une vision globale des environnements IT.
    Jʼallie expertise technique, rigueur et capacité dʼadaptation pour contribuer efficacement à vos projets.

    Je suis actuellement ouvert aux opportunités professionnelles en tant que développeur, alors n'hésitez pas à me contacter afin d'échanger sur une possible future collaboration.`,
  resumeLink: 'CV - Maxime_DROUAULT - Développeur_Java_et_Angular.pdf',
};

export const openSource = {
  githubUserName: 'maximedrouault',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://maximedrouault.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/maximedrouault/',
  github: 'https://github.com/maximedrouault'
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
          "⚡ Création d'applications réactives (SPA) et responsives sous Angular."
        ),
        emoji("⚡ Création d'API-REST complètes en Java et Spring."),
        emoji("⚡ Modélisation et persistance de données en base de données SQL ou NoSQL."),
      ],
      softwareSkills: [
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'logos:typescript-icon',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'devicon:angularjs',
        },
        {
          skillName: 'React',
          fontAwesomeClassName: 'logos:react',
        },
        {
          skillName: 'BootStrap',
          fontAwesomeClassName: 'devicon:bootstrap',
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
          skillName: 'Java',
          fontAwesomeClassName: 'logos:java',
        },
        {
          skillName: 'Maven',
          fontAwesomeClassName: 'devicon:maven',
        },
        {
          skillName: 'Spring',
          fontAwesomeClassName: 'devicon:spring',
        },
        {
          skillName: 'JWT',
          fontAwesomeClassName: 'logos:jwt-icon',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'devicon:mysql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'Git - GitHub',
          fontAwesomeClassName: 'logos:github-icon',
        },
        {
          skillName: 'Responsive Design',
          fontAwesomeClassName: 'mdi:responsive',
        },
        {
          skillName: 'Swagger',
          fontAwesomeClassName: 'material-icon-theme:swagger',
        },
        {
          skillName: 'Sonar',
          fontAwesomeClassName: 'logos:sonarcloud-icon',
        },
        {
          skillName: 'JUnit',
          fontAwesomeClassName: 'devicon:junit',
        },
        {
          skillName: 'Jest',
          fontAwesomeClassName: 'logos:jest',
        },
        {
          skillName: 'Cypress',
          fontAwesomeClassName: 'logos:cypress-icon',
        }
      ],
    },
    {
      title: 'Cloud, Infra-Architecture réseaux et CI/CD',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Expérience sur divers hébergements web et plateformes Cloud.'),
        emoji(
          '⚡ Virtualisation de serveurs.'
        ),
        emoji(
          '⚡ Expérience de plus de 18 ans en infogérance de réseaux, parcs informatiques, téléphonie IP et serveurs.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Hébergement VPS',
          fontAwesomeClassName: 'solar:server-square-cloud-bold',
        },
        {
          skillName: 'Virtualisation',
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
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Cloud AWS',
          fontAwesomeClassName: 'logos:aws',
        }
      ],
    },
    {
      title: 'Compétences annexes',
      lottieAnimationFile: '/lottie/skills/othersskills.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Connaissance des méthodes de gestion de projets Agile (Scrum/Kanban).'
        ),
        emoji(
          "⚡ Connaissance des outils de gestion de projet."
        ),
        emoji(
          "⚡ Connaissance de l'outil de maquettage Figma."
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
  },
  {
    Stack: 'Rigoureux',
  },
  {
    Stack: 'Organisé',
  },
  {
    Stack: 'Esprit analytique',
  },
  {
    Stack: 'Collaboratif',
  },
  {
    Stack: 'Pédagogue',
  },
  {
    Stack: 'Adaptable',
  },
  {
    Stack: 'Persévérant',
  },
  {
    Stack: 'Empathique',
  },
  {
    Stack: 'Autonome',
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
  {
    schoolName: 'Autodidacte en informatique',
    subHeader: 'Formation continue sur divers sujets informatiques.',
    duration: "De 1996 à aujourd'hui",
    descBullets: [
      "Technologies abordées : VPN, VLAN, QoS, DHCP, DNS, LACP, Wifi, LAN, WAN, POE, MPLS, Routeur, Firewall.",
      "Hébergement, Nom de domaine, MX, DNS.",
      "Téléphonie IP Centrex (VoIP), Trunk SIP, RTC",
      "Compétences abordées : Administration réseaux et serveurs, maintenance informatique."
    ],
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'Développeur Web',
    company: 'OpenClassrooms',
    companyLogo: 'img/icons/common/openclassrooms.jpg',
    date: 'Décembre 2022 – Juin 2023',
    desc: "J'ai réalisé la complétion de 8 projets me permettant de maîtriser les technologies et compétences suivantes :",
    descBullets: [
      "HTML / CSS / JS / React / Git/GitHub / NodeJS / ExpressJS / MongoDB / API Rest.",
      "Gestion de projets / Agile / Cascade.",
      "Responsive Design / SEO / Accessibilité."
    ]
  },
  {
    role: 'Informaticien polyvalent',
    company: 'Serveurcom / Amix / Fatech / Medion',
    companyLogo: 'img/icons/common/experiences-logo.png',
    date: 'Septembre 2001 – Octobre 2016',
    desc: "Missions diverses :",
    descBullets: [
      "Serveurcom : Technicien Support N2 Réseaux et Télécoms, puis Responsable Support Technique.",
      "Amix : Technicien et administrateur systèmes et réseaux. Technicien / Formateur sur logiciels de gestions et médicaux.",
      "Fatech : Technicien et administrateur systèmes et réseaux. ",
      "Medion : Technicien d'assistance informatique."
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
    link: 'https://maxime-drouault-kasa.vercel.app/',
    projectsImg: "img/kasa.jpg"
  },
  {
    name: 'Mon Vieux Grimoire',
    desc: "Réalisation complète d'une API Rest (CRUD) avec gestion d'authentification, calcul de note moyenne et compression des images via Sharp. Express JS / Node JS / MongoDB / Mongoose / API / BCRYPT / JWT / MULTER / SHARP",
    github: 'https://github.com/maximedrouault/Mon-Vieux-Grimoire',
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
  url: 'https://maximedrouault.vercel.app/',
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
