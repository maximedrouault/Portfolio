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

    Disponible dès à présent pour de nouvelles opportunités en développement, n’hésitez pas à me contacter.`,
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
      ]
    },
    {
      title: 'Cloud, Infra-Architecture réseaux et CI/CD',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Expérience sur divers hébergements web et plateformes Cloud.'),
        emoji(
          '⚡ Virtualisation et conteneurisation d’environnements.'
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
      ]
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
      ]
    }
  ]
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
    schoolName: 'Expert en développement logiciel',
    subHeader: 'Spécialité : Développeur Full-Stack Java et Angular',
    duration: '2024-2025',
    desc: 'Complétion de 13 projets professionnels.',
    grade: 'Niveau : BAC+5 - Master',
    descBullets: [
      "Technologies avancées : Java, Spring, Angular, JWT, WebSocket, CI/CD, Docker, AWS (S3, EC2, IAM, etc.).",
      "Qualité & tests : JUnit, Mockito, Jest, Cypress, intégration de Sonar et Quality Gate.",
      "Compétences annexes : Architecture logicielle, sécurité applicative, TDD/DDD/BDD, optimisation de performance, documentation Swagger/OpenAPI.",
      "Mise en pratique : Développement et déploiement d’applications robustes et sécurisées en environnement cloud-native."
    ]
  },
  {
    schoolName: 'Développeur concepteur logiciel',
    subHeader: 'Spécialité : Développeur dʼapplication Java',
    duration: '2023-2024',
    desc: 'Complétion de 9 projets professionnels.',
    grade: 'Niveau : BAC+3/4 - Licence',
    descBullets: [
      "Technologies abordées : Java, Spring, Hibernate/JPA, MySQL, PostgreSQL, MongoDB.",
      "Qualité & tests : JUnit, Mockito, WireMock, MockMVC, intégration continue avec GitHub Actions / GitLab CI.",
      "Compétences annexes : UML, conception de modèles relationnels, gestion de concurrence et parallélisation, API REST, Microservices.",
      "Mise en pratique : Réalisation d’applications métiers avec architecture MVC et bonnes pratiques de développement."
    ]
  },
  {
    schoolName: 'Développeur intégrateur web',
    subHeader: 'Spécialité : Développeur Web et Web mobile',
    duration: '2022-2023',
    desc: 'Complétion de 8 projets professionnels.',
    grade: 'Niveau : BAC+2',
    descBullets: [
      'Technologies abordées : HTML, CSS, JavaScript, React, Git/GitHub, Node.js, Express.js, MySQL, MongoDB, API REST.',
      'Compétences annexes : Gestion de projets, méthodes Agile et Cascade.',
      'Approches complémentaires : Responsive Design, SEO, Accessibilité.'
    ]
  },
  {
    schoolName: 'Autodidacte IT',
    subHeader: 'Formation continue sur divers sujets informatiques.',
    duration: "De 1996 à aujourd'hui",
    descBullets: [
      'Technologies abordées : VPN, VLAN, QoS, DHCP, DNS, LACP, Wifi, LAN, WAN, POE, MPLS, Routeur, Firewall.',
      'Hébergement, Nom de domaine, MX, DNS.',
      'Téléphonie IP Centrex (VoIP), Trunk SIP, RTC',
      'Compétences abordées : Administration réseaux et serveurs, maintenance informatique.'
    ]
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'Développement web et logiciel',
    company: '',
    companyLogo: 'img/icons/common/experiences-logo.png',
    date: '2022 – 2025',
    desc: 'Réalisation de 30 projets professionnels mettant en application concrète les technologies et compétences suivantes :',
    descBullets: [
      'Langages : Java, JavaScript, TypeScript, HTML, CSS',
      'Frameworks et Bibliothèques : Angular, React, Spring, Hibernate/JPA, Node.js, Express.js, Bootstrap, Thymeleaf',
      'Bases de Données : SQL (MySQL, PostgreSQL), NoSQL (MongoDB)',
      'Intégration / déploiement continue CI/CD : GitHub Actions, GitLab CI',
      'Cloud & Infrastructures : AWS, VPS, virtualisation (VM), conteneurisation (Docker)',
      'Outils et Environnements : Maven, Git/GitHub, IntelliJ, VSCode, Postman',
      'Documentation : Swagger/OpenAPI, JavaDoc',
      'Concepts & Architecture : Microservices, API-REST, MVC, WebSocket, UML, programmation concurrente/asynchrone, SOLID, TDD, DDD, BDD',
      'Sécurité & Qualité : Authentification & sécurité (JWT), Sonar, Quality Gate',
      'Tests : JUnit, Mockito, WireMock, MockMVC, Jest, Cypress',
      'Méthodologies : Agile (Scrum/Kanban), DevOps'
    ]
  },
  {
    role: 'Informaticien polyvalent',
    company: 'Serveurcom / Amix / Fatech / Medion / Carrefour',
    companyLogo: 'img/icons/common/experiences-logo.png',
    date: '2000 – 2017',
    desc: 'Missions diverses :',
    descBullets: [
      'Serveurcom : Responsable support technique revendeur (réseaux et télécoms N2/N3).',
      'Amix : Administrateur systèmes, réseaux et télécoms / Intégrateur logiciels métiers (médicaux/gestion).',
      'Fatech : Administrateur systèmes et réseaux.',
      'Medion : Technicien service d’assistance informatique.',
      'Carrefour : Technicien SAV matériels informatique.'
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Booki',
    desc: `Développement d’un site de réservation d’hébergements à partir d’une maquette Figma. Mise en place d’un design responsive permettant une navigation fluide sur desktop, tablette et mobile.

      Technos clés : HTML, CSS, Responsive Design.`,
    github: 'https://github.com/maximedrouault/Booki',
    link: 'https://maximedrouault.github.io/Booki/',
    projectsImg: 'img/booki.jpg'
  },
  {
    name: 'Portfolio Architecte Sophie-BLUEL',
    desc: `Création d’un site vitrine interactif pour présenter les projets d’une architecte. Intégration d’un espace administrateur sécurisé avec authentification par token, permettant la gestion dynamique des contenus.
      
      Technos clés : HTML, CSS, JavaScript, API, JWT.`,
    github: 'https://github.com/maximedrouault/Sophie-BLUEL-Architecte',
    projectsImg: 'img/portfolio-sophie-bluel-architecte.jpg'
  },
  {
    name: 'Nina CARDUCCI - Photographe',
    desc: `Optimisation et débogage complet d’un site vitrine pour une photographe professionnelle. Amélioration des performances, du référencement SEO, de l’accessibilité et correction des bugs afin d’offrir une meilleure expérience utilisateur.
      
      Technos clés : HTML, CSS, JavaScript, Lighthouse, WAVE, OpenGraph, Schema.org.`,
    github: 'https://github.com/maximedrouault/Nina-CARDUCCI-Photographe',
    link: 'https://maximedrouault.github.io/Nina-CARDUCCI-Photographe/',
    projectsImg: 'img/nina-carducci-photographe.jpg'
  },
  {
    name: 'KASA',
    desc: `Développement d’une application front-end en React pour la location d’hébergements, basée sur une maquette Figma. L’application propose une navigation fluide, la gestion des routes dynamiques et un affichage responsive optimisé pour web et mobile.
      
      Technos clés : React, React Router, HTML, CSS.`,
    github: 'https://github.com/maximedrouault/Kasa',
    link: 'https://maxime-drouault-kasa.vercel.app/',
    projectsImg: 'img/kasa.jpg'
  },
  {
    name: 'Mon Vieux Grimoire',
    desc:
      `Développement d’une API REST sécurisée permettant de gérer une bibliothèque collaborative en ligne. Les utilisateurs peuvent ajouter, consulter et noter des livres, avec un système de calcul automatique des notes moyennes.
      L’application intègre également la gestion des utilisateurs et la compression d’images pour optimiser le stockage.
      
      Technos clés : Node.js, Express, MongoDB, Mongoose, JWT, Multer, Sharp.`,
    github: 'https://github.com/maximedrouault/Mon-Vieux-Grimoire',
    projectsImg: 'img/mon-vieux-grimoire.jpg'
  },
  {
    name: 'PayMyBuddy',
    desc:
      `Application web de gestion de transactions entre amis développée avec Spring Boot et MySQL.
      Les utilisateurs peuvent créer un profil, ajouter des connexions, transférer de l’argent et suivre l’historique de leurs opérations. L’application intègre un système de wallet virtuel, la gestion des commissions et un espace d’administration sécurisé.
      
      Technos clés : Spring Boot, Spring Security, Hibernate/JPA, Thymeleaf, MySQL, Bootstrap.`,
    github: 'https://github.com/maximedrouault/PayMyBuddy',
    projectsImg: 'img/paymybuddy.jpg'
  },
  {
    name: 'MediLabo',
    desc:
      `Application basée sur une architecture microservices pour la gestion de données médicales (patients, notes et évaluations).
      Le système évalue le risque de diabète à partir des données et notes des patients, grâce à un moteur d’analyse dédié.
      L’architecture repose sur Spring Cloud (Config, Gateway, Eureka) avec des microservices conteneurisés sous Docker, et des bases PostgreSQL et MongoDB.

      Technos clés : Spring Boot, Spring Cloud, Eureka, Spring Security, PostgreSQL, MongoDB, Docker, Thymeleaf, Bootstrap.`,
    github: 'https://github.com/maximedrouault/MediLabo',
    projectsImg: 'img/mediLabo.jpg'
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Éric ALLAIN - Évaluateur',
    feedback:
      "Points forts : Maxime a réalisé un excellent travail sur ce projet en créant un code très bien optimisé et commenté pour chacune des différentes fonctionnalités implémentées. Maxime a réalisé une très bonne présentation en s'appuyant pour l'introduction sur un PowerPoint, puis l'ensemble de l'explication des différentes fonctionnalités implémentées ont été réalisés à partir de Visual Studio Code. Félicitations pour cet excellent travail et bonne chance pour la suite de ta formation développeur web.",
  },
  {
    name: 'Jean-Baptiste Schmidt - Évaluateur',
    feedback:
      `Points forts :
      -Livrables complets, clairs, cohérents et professionnels.
      -Excellente capacité de justification des choix fonctionnels et techniques.
      -Respect des standards d’architecture, de sécurité et de conformité.
      -Bonne anticipation des évolutions futures (microservices, internationalisation, RGPD).`,
  },
  {
    name: 'Bassam BOULACHEB - Évaluateur',
    feedback:
      'Points forts : Maxime a réalisé un excellent travail, tant au niveau du livrable que de la soutenance. Il a parfaitement respecté les critères d’évaluation pour la création du plan de sauvegarde des données et du plan de test, et a démontré une solide compréhension des concepts de qualité et de sécurité des opérations.',
  },
  {
    name: 'Christian FODOUP - Évaluateur',
    feedback:
      'Points forts : Bonne maîtrise de son travail. Explications claires. Bonne structuration des livrables.',
  },
  {
    name: 'Cédric TCHANA - Évaluateur',
    feedback:
      "Points forts : Rapport très bien monté. Soucis particuliers apporté aux graphiques représentatifs. L'étudiant a effectué une bonne présentation basée sur ses livrables.",
  },
  {
    name: 'Danielle PRISCA - Évaluateur',
    feedback:
      'Points forts : L’étudiant a bien su utiliser les props pour gérer ce qui change à chaque fois. Bonne organisation des composants dans différents fichiers. Code très bien indenté. Code très bien commenté.',
  },
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
