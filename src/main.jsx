import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Layers3,
  Lock,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import './styles.css';

const skills = [
  'Azure DevOps',
  'Terraform',
  'Kubernetes',
  'Docker',
  'Azure',
  'CI/CD',
  'Azure Pipelines',
  'YAML Pipelines',
  'Bicep',
  'Azure Key Vault',
  'Azure Networking',
  'Jenkins',
  'Linux',
  'Python',
  'SonarQube',
];

const azureServices = [
  'Azure App Service',
  'Azure Container Apps',
  'Azure Front Door',
  'Azure Functions',
  'Logic Apps',
  'API Management',
  'Azure Storage',
  'Application Insights',
  'Log Analytics',
  'VNet',
  'NSG',
  'Private Endpoint',
];

const projectCards = [
  {
    title: 'Portfolio Website',
    subtitle: 'React + GitHub Pages + GitHub Actions',
    status: 'Live foundation',
    icon: <Code2 />,
    description:
      'A personal engineering portfolio to showcase resume, certifications, architecture diagrams, DevOps project writeups, and CI/CD maturity.',
    bullets: [
      'React/Vite frontend with automated GitHub Pages deployment.',
      'Designed as a central hub for Azure DevOps, AKS, Terraform, and platform engineering projects.',
      'Can be mapped later to rohansirimalla.is-a.dev or a paid .com domain.',
    ],
  },
  {
    title: 'Project 1: AKS GitOps Platform',
    subtitle: 'AKS + Terraform + Helm + Argo CD + Monitoring',
    status: 'Build next',
    icon: <Layers3 />,
    description:
      'An AKS-focused platform engineering lab to demonstrate Kubernetes operations, GitOps deployment, self-healing, autoscaling, rollback, and observability.',
    bullets: [
      'Terraform modules for AKS, ACR, Key Vault, Log Analytics, identities, and networking.',
      'Helm-based sample application deployment with liveness/readiness probes and HPA.',
      'GitOps flow using Argo CD or Flux, with rollback and environment promotion documentation.',
    ],
  },
  {
    title: 'Project 2: Secure Azure Microservices Platform',
    subtitle: 'Front Door + Container Apps + Private APIM + SQL + Service Bus',
    status: 'Architecture + IaC',
    icon: <ShieldCheck />,
    description:
      'A production-style Azure platform design showing private backend architecture, secure ingress, managed identities, secrets, observability, and cost controls.',
    bullets: [
      'Frontend exposed through Azure Front Door Premium + WAF; APIM stays private inside the VNet.',
      'Backend services hosted on internal Azure Container Apps with Key Vault, SQL, and Service Bus integration.',
      'Terraform feature flags to deploy costly services only for short validation windows.',
    ],
  },
];

const experience = [
  {
    company: 'Paltech',
    role: 'DevOps Engineer',
    period: 'Oct 2023 – Present',
    points: [
      'Built and maintained Azure DevOps CI/CD pipelines across Dev, QA, UAT, and Production environments.',
      'Provisioned Azure environments using Terraform and Bicep to improve deployment consistency.',
      'Implemented Key Vault and RBAC-based secret management to remove hardcoded credentials.',
      'Supported deployments for Logic Apps, Azure App Service, Azure Functions, ADF, APIM, and Storage.',
      'Used Application Insights and Log Analytics for monitoring, troubleshooting, and production support.',
    ],
  },
  {
    company: 'EnergyTech Global',
    role: 'DevOps Engineer / Developer',
    period: 'Dec 2022 – Sep 2023',
    points: [
      'Built Azure DevOps automation for production data sanitization into non-production environments.',
      'Developed Python data masking workflows to remove PII before loading PostgreSQL test databases.',
      'Secured credentials using Azure Key Vault and staged sanitized datasets in Azure Storage.',
    ],
  },
];

const certifications = [
  'HashiCorp Certified: Terraform Associate (HCTA-003)',
  'Microsoft Certified: Azure Administrator Associate (AZ-104)',
  'Microsoft Certified: Azure Developer Associate (AZ-204)',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Microsoft Certified: Azure AI Fundamentals (AI-900)',
];

function App() {
  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav">
          <div className="brand">RS</div>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Azure DevOps • Terraform • Kubernetes • CI/CD</p>
            <h1>Rohan Sirimalla</h1>
            <h2>Azure DevOps Engineer building cloud automation and platform engineering projects.</h2>
            <p className="hero-copy">
              I work on Azure DevOps pipelines, Terraform/Bicep infrastructure automation, secure secret management,
              monitoring, troubleshooting, and multi-environment deployment workflows across Azure platforms.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Projects <ArrowRight size={18} />
              </a>
              <a className="secondary-btn" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="metric">
              <span>Experience</span>
              <strong>3+ years</strong>
            </div>
            <div className="metric">
              <span>Primary cloud</span>
              <strong>Microsoft Azure</strong>
            </div>
            <div className="metric">
              <span>Core focus</span>
              <strong>CI/CD, IaC, Reliability</strong>
            </div>
            <div className="metric">
              <span>Location</span>
              <strong>Hyderabad, India</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell section-block">
        <div className="section-title">
          <p className="eyebrow">Technical Stack</p>
          <h2>Skills aligned to Azure DevOps and platform roles</h2>
        </div>
        <div className="pill-grid">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              <BadgeCheck size={16} /> {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell section-block split">
        <div className="info-card">
          <Cloud />
          <h3>Azure Services</h3>
          <p>{azureServices.join(' • ')}</p>
        </div>
        <div className="info-card">
          <ServerCog />
          <h3>DevOps Work</h3>
          <p>Azure Pipelines, YAML, release approvals, service connections, variable groups, artifacts, rollback support, and deployment troubleshooting.</p>
        </div>
        <div className="info-card">
          <Lock />
          <h3>Security</h3>
          <p>Key Vault, RBAC, secure service connections, secret management, private networking patterns, and SonarQube checks.</p>
        </div>
      </section>

      <section id="projects" className="section-shell section-block">
        <div className="section-title">
          <p className="eyebrow">Projects</p>
          <h2>Three separate portfolio tracks</h2>
        </div>
        <div className="project-grid">
          {projectCards.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-icon">{project.icon}</div>
                <span className="status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block architecture">
        <div className="section-title">
          <p className="eyebrow">Platform Thinking</p>
          <h2>Architecture areas I am documenting and implementing</h2>
        </div>
        <div className="architecture-grid">
          <div><Network /><span>Private networking, VNet, NSG, Private Endpoint</span></div>
          <div><GitBranch /><span>Branching, pull requests, YAML pipelines, approvals</span></div>
          <div><Blocks /><span>Terraform modules, remote state, reusable environments</span></div>
          <div><MonitorCog /><span>Application Insights, Log Analytics, alerts, KQL</span></div>
          <div><TerminalSquare /><span>Python, Bash, PowerShell automation</span></div>
          <div><ShieldCheck /><span>RBAC, Key Vault, secure CI/CD, least privilege</span></div>
        </div>
      </section>

      <section id="experience" className="section-shell section-block">
        <div className="section-title">
          <p className="eyebrow">Experience</p>
          <h2>Professional experience</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.company}>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company} • {item.period}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-block split two">
        <div className="info-card">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
        <div className="info-card">
          <h3>Education</h3>
          <p><strong>VNR VJIET, Hyderabad</strong></p>
          <p>B.Tech in Electronics & Communication Engineering</p>
          <p>CGPA: 8.5</p>
        </div>
      </section>

      <section id="contact" className="section-shell contact section-block">
        <p className="eyebrow">Contact</p>
        <h2>Open to Azure DevOps, Cloud DevOps, Platform Engineering, and SRE roles.</h2>
        <p>
          Add your email, LinkedIn, GitHub, and resume link here after the repository is live.
        </p>
        <div className="contact-actions">
          <a className="secondary-btn" href="https://github.com/rohansirimalla" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
