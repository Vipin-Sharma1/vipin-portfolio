import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vipin",
  lastName: "Sharma",
  name: `Vipin Sharma`,
  role: "QA Automation Engineer & DevOps Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "vipinsharma.x86@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional writes on automation testing, DevOps practices, and CI/CD pipelines.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/YOUR_GITHUB_USERNAME", // 👈 Apna GitHub link yahan daalo
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME", // 👈 Apna LinkedIn link yahan daalo
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – QA Automation & DevOps`,
  description: `Portfolio of ${person.name} — Automation Testing Engineer specializing in Selenium, CI/CD pipelines, and DevOps practices.`,
  headline: <>Automation Testing Engineer & DevOps Enthusiast</>,
  featured: {
    display: true,
    title: (
      <Text onBackground="brand-medium" marginRight="4">
        Featured: Kubernetes Testing Platform →
      </Text>
    ),
    href: "/work/kubernetes-testing-platform",
  },
  subline: (
    <>
      I'm Vipin, a QA Automation Engineer based in{" "}
      <Text as="span" size="xl" weight="strong">Delhi, India</Text>
      , focused on building scalable test automation frameworks and reliable CI/CD pipelines.
      Currently open to freelance projects and full-time opportunities.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, QA Automation Engineer and DevOps Enthusiast based in Delhi, India.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}?subject=Let's Connect`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a QA Automation Engineer with a passion for DevOps and cloud technologies,
        based in Delhi, India. I specialize in building end-to-end test automation frameworks
        and integrating them with CI/CD pipelines to ensure software quality at scale.
        My goal is to bridge the gap between development speed and product reliability —
        so teams can ship fast without breaking things.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Your Company Name", // 👈 Apni company ka naam yahan daalo
        timeframe: "2024 – Present",
        role: "QA Automation Engineer",
        achievements: [
          <>
            Designed and implemented a <strong>Selenium + TestNG</strong> automation framework
            using Page Object Model architecture, reducing manual testing effort by 70%.
          </>,
          <>
            Built and maintained CI/CD pipelines using <strong>Jenkins</strong> and{" "}
            <strong>GitHub Actions</strong> for automated test triggering on every code push.
          </>,
          <>
            Containerized test environments using <strong>Docker</strong> to ensure consistent
            and reproducible execution across all environments.
          </>,
          <>
            Deployed scalable test infrastructure on <strong>Kubernetes</strong> clusters,
            enabling parallel test execution and faster feedback loops.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Your College Name", // 👈 Apna college naam yahan daalo
        description: <>B.Tech in Artificial Intelligence and Data Science — 2024</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Test Automation",
        description: (
          <>
            Proficient in building robust automation frameworks using{" "}
            <strong>Selenium</strong>, <strong>Playwright</strong>, and <strong>TestNG</strong>{" "}
            with Page Object Model and Data Driven patterns. Experienced with{" "}
            <strong>Allure Reports</strong> for test reporting.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "CI/CD & DevOps",
        description: (
          <>
            Hands-on experience with <strong>Jenkins</strong> and{" "}
            <strong>GitHub Actions</strong> for pipeline automation.
            Proficient in <strong>Docker</strong> and <strong>Kubernetes</strong>{" "}
            for containerized, scalable deployments.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: (
          <>
            Working knowledge of <strong>AWS</strong> (EC2, S3, IAM, EKS), infrastructure
            provisioning with <strong>Terraform</strong>, and configuration management
            with <strong>Ansible</strong>.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Programming",
        description: (
          <>
            Strong foundation in <strong>Python</strong> and <strong>Java</strong> for writing
            maintainable automation scripts, DevOps tooling, and API test suites.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about automation, DevOps & testing...",
  description: `Thoughts on test automation, CI/CD, and software quality by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Automation Testing and DevOps projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
