import sreWebDevImg from '../assets/services/sre-web-development.png'
import lifestyleCoachingImg from '../assets/services/lifestyle-coaching.png'
import infraOptimizationImg from '../assets/services/infrastructure-optimization.png'
import digitalWellnessImg from '../assets/services/digital-wellness.png'
import abhijeetProfileImg from '../assets/about/abhijeet-profile.jpg'
import abhijeetAvatarImg from '../assets/about/abhijeet-avatar.jpg'

const ASSET_BASE = 'https://storage.googleapis.com/webild/default/templates/creative-portfolio'

export const siteContent = {
  brand: 'Abhijeet Mohanty',
  avatarSrc: abhijeetAvatarImg,

  nav: {
    logo: 'Abhijeet Mohanty',
    logoImageSrc: abhijeetAvatarImg,
    navItems: [
      { name: 'Work', href: '#work' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    ctaButton: { text: 'Get in Touch', href: '#contact' },
  },

  hero: {
    tag: 'SRE & Wellness Architect',
    title: 'Optimizing systems & websites.',
    titleHighlight: 'Transforming healthy lifestyles.',
    description: 'SRE Engineer building highly reliable websites for businesses and coaching individuals toward sustainable healthy living.',
    descriptionMuted:
      "I bridge the gap between high-availability tech infrastructure, performance-driven web development, and human wellness optimization. Let's make your systems scale and your health thrive.",
    primaryButton: {
      text: 'Connect with me',
      href: '#contact',
      avatarSrc: abhijeetAvatarImg,
      avatarLabel: 'Abhijeet',
    },
    sectionTag: 'Featured Projects',
    sectionTitle: 'High Availability Digital & Wellness Systems',
    sectionDescription:
      'A showcase of robust business infrastructure, high-performance web development, and structured lifestyle coaching frameworks.',
    items: [
      {
        title: 'Nova Scalable Business Platform',
        description: 'A highly reliable, automated business platform with automated CI/CD and optimized cloud infrastructure.',
        imageSrc: `${ASSET_BASE}/screen-1.webp`,
        tag: 'SRE & Web Dev',
      },
      {
        title: 'The Elite Lifestyle Transformation',
        description: 'A data-driven lifestyle and nutrition coaching system designed specifically for busy professionals.',
        imageSrc: `${ASSET_BASE}/screen-2.webp`,
        tag: 'Health & Wellness',
      },
      {
        title: 'System Performance & Web Audit',
        description: 'Achieved 99.9% uptime and sub-second load times for a high-traffic consulting web portal.',
        imageSrc: `${ASSET_BASE}/screen-3.webp`,
        tag: 'SRE / Cloud',
      },
    ],
    secondaryButton: { text: 'Explore my services', href: '#services' },
  },

  testimonial: {
    quote:
      "Abhijeet did an incredible job upgrading our cloud infrastructure and website performance. Simultaneously, his practical healthy lifestyle coaching helped me reclaim my daily energy and focus.",
    rating: 5,
    author: 'Sarah Jenkins — Tech Lead at Apex Agency',
    avatars: [{ name: 'Sarah Jenkins', imageSrc: 'https://randomuser.me/api/portraits/women/44.jpg' }],
  },

  about: {
    tag: 'About Me',
    quote: "Whether optimizing server responsiveness or refining daily metabolic health, reliability and consistency are key.",
    author: 'Abhijeet Mohanty',
    role: 'SRE Engineer & Wellness Coach',
    imageSrc: abhijeetProfileImg,
    socialLinks: [
      { icon: 'Linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijeet-mohanty/' },
      { icon: 'Twitter', label: 'Twitter', href: '#' },
      { icon: 'Instagram', label: 'Instagram', href: '#' },
    ],
  },

  services: {
    tag: 'Services',
    title: 'Dual Expertise, Singular Reliability',
    description:
      "Engineered systems for your business operations and tailored frameworks for your personal vitality.",
    features: [
      {
        title: 'SRE & Web Development',
        description:
          "High-performance website development backed by robust Site Reliability Engineering practices. Scalable, secure, and fast.",
        imageSrc: sreWebDevImg,
      },
      {
        title: 'Lifestyle Transformation Coaching',
        description:
          "Personalized healthy living coaching targeting nutrition, sustainable workouts, sleep hygiene, and habit formation.",
        imageSrc: lifestyleCoachingImg,
      },
      {
        title: 'Infrastructure & Cloud Optimization',
        description:
          "CI/CD pipelines, container orchestration, Kubernetes, and automated monitoring setups to ensure maximum uptime.",
        imageSrc: infraOptimizationImg,
      },
      {
        title: 'Digital Wellness Integration',
        description:
          "Building customized tech portals, habit trackers, and automated workflows for health/wellness businesses.",
        imageSrc: digitalWellnessImg,
      },
    ],
    ctaButton: {
      text: 'Schedule a call',
      href: '#contact',
      avatarSrc: abhijeetAvatarImg,
      avatarLabel: 'Abhijeet',
    },
  },

  faq: {
    tag: 'FAQ',
    title: 'Common Questions',
    description: 'Frequently asked questions about my engineering work and healthy lifestyle coaching.',
    categories: [
      {
        name: 'SRE & Tech',
        items: [
          {
            question: 'What technologies do you focus on for SRE and Dev?',
            answer:
              "I work with AWS, GCP, Docker, Kubernetes, Terraform, CI/CD tools (GitHub Actions, GitLab), and modern web frameworks like React, TypeScript, and Node.js.",
          },
          {
            question: 'Can you optimize our existing website and cloud setup?',
            answer:
              "Yes. I perform complete performance audits, load testing, cloud cost optimization, and set up robust monitoring/alerting systems.",
          },
        ],
      },
      {
        name: 'Lifestyle Transformation',
        items: [
          {
            question: 'How do you design healthy lifestyle transformations?',
            answer:
              "I focus on realistic habit-stacking, S.M.A.R.T goals, balanced nutrition planning, and customized fitness protocols that adapt to high-stress professional lifestyles.",
          },
          {
            question: 'Is this suitable for busy tech professionals?',
            answer:
              "Yes, it is specifically optimized for people with sedentary, high-stress desks jobs. We focus on low-friction, high-impact healthy changes.",
          },
        ],
      },
    ],
    cta: {
      imageSrc: abhijeetAvatarImg,
      name: 'Have specific questions?',
      role: 'abhijeet.mohanty.sre@gmail.com', // custom professional-looking email
      buttonText: 'Get in touch',
      buttonHref: '#contact',
    },
  },

  contact: {
    tag: 'Get in Touch',
    title: "Let's Connect",
    description: "Interested in boosting your website reliability or transforming your lifestyle? Drop me a message below.",
    inputs: [
      { name: 'name', type: 'text', placeholder: 'Your name', required: true },
      { name: 'email', type: 'email', placeholder: 'Your email', required: true },
    ],
    textarea: { name: 'message', placeholder: 'Describe your business scaling challenges or wellness coaching goals...', rows: 5, required: true },
    buttonText: 'Send Message',
    imageSrc: `${ASSET_BASE}/contact.webp`,
    ctaLinks: [{ icon: 'Linkedin', label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/abhijeet-mohanty/' }],
  },

  footer: {
    brand: 'Mohanty',
    copyright: '© 2026 Abhijeet Mohanty. All rights reserved.',
    socialLinks: [
      { icon: 'Linkedin', href: 'https://www.linkedin.com/in/abhijeet-mohanty/' },
      { icon: 'Twitter', href: '#' },
      { icon: 'Instagram', href: '#' },
    ],
  },
}
