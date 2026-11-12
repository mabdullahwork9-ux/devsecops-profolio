const projects = {
  tetris: {
    number:"01 / DEVSECOPS PIPELINE", title:"Tetris DevSecOps Platform",
    intro:"An automated cloud-native delivery workflow that provisions AWS infrastructure, applies security checks throughout the pipeline and deploys containerized workloads to Amazon EKS through GitOps.",
    objective:"Build a repeatable deployment path for a containerized application while embedding security checks before workloads reach the Kubernetes environment.",
    why:"To practice an end-to-end DevSecOps workflow: infrastructure automation, CI/CD orchestration, application and image scanning, and declarative deployment management.",
    tools:["AWS","Terraform","VPC","Amazon EKS","Jenkins","SonarQube","Trivy","OWASP Dependency-Check","Docker","Argo CD"],
    actions:["Used Terraform to provision AWS networking resources, including a VPC, subnets and an EKS cluster.","Built a Jenkins pipeline to automate application build and test stages.","Integrated SonarQube for static code analysis, Trivy for filesystem and container-image vulnerability scanning, and OWASP Dependency-Check for dependency risk discovery.","Configured Argo CD to monitor Kubernetes manifests and reconcile cluster state with the Git repository.","Containerized the application and deployed workloads to EKS, using GitOps workflows to support rolling updates."],
    skills:"Infrastructure as Code, AWS networking, Kubernetes operations, CI/CD design, SAST, container security, dependency risk management and GitOps.",
    outcome:"Implemented an automated workflow connecting infrastructure provisioning, pipeline security checks and GitOps-based Kubernetes deployment. Quantitative performance or vulnerability-reduction metrics were not supplied.",
    relevance:"The pattern reflects how engineering teams can make security checks repeatable and deploy application changes consistently across cloud-native environments.",
    repo:"https://github.com/mabdullahwork9-ux/tetris-devsecops", evidence:"Repository available. Add pipeline screenshots, Terraform architecture, scan reports and Argo CD sync evidence."
  },
  "github-actions": {
    number:"02 / CI/CD & RELEASE CONTROL", title:"Secure CI/CD to AWS EC2",
    intro:"A GitHub Actions workflow for building, checking and deploying a Dockerized multi-tier application to an AWS EC2 host, with an explicit human approval step before production release.",
    objective:"Automate routine delivery tasks while protecting the release process with credential scanning and controlled production promotion.",
    why:"To explore how continuous integration and continuous delivery can improve consistency without removing administrator oversight from production releases.",
    tools:["GitHub Actions","Docker","AWS EC2","Gitleaks","Linting","Manual approval gates"],
    actions:["Containerized frontend and backend components with custom Dockerfiles.","Created GitHub Actions workflows to automate build, test and deployment tasks.","Integrated Gitleaks to detect exposed credentials in the repository.","Added automated linting to identify code-quality issues.","Configured environment-specific workflow triggers and a manual approval gate requiring administrator verification before production deployment."],
    skills:"Workflow automation, containerization, secret detection, release governance, environment-based deployment and CI/CD troubleshooting.",
    outcome:"Created an automated deployment workflow with secret scanning and a human-controlled production approval stage. No deployment-frequency or reliability metrics were provided.",
    relevance:"A useful pattern for teams that want repeatable deployments while retaining separation of duties and approval controls for production changes.",
    repo:"https://github.com/mabdullahwork9-ux/ci-cd-pipeline", evidence:"Repository available. Add workflow-run screenshots, Gitleaks output and an approval-gate screenshot."
  },
  jerney: {
    number:"03 / END-TO-END DEVSECOPS", title:"Jerney — Secure Three-Tier Blog Platform",
    intro:"A three-tier blog platform built with security practices integrated from infrastructure provisioning and image construction through CI/CD, GitOps delivery and Kubernetes runtime controls.",
    objective:"Create a production-minded application environment with automated checks and layered protections around containers, infrastructure and cluster communication.",
    why:"To apply security controls throughout the software delivery lifecycle rather than treating security as a final deployment check.",
    tools:["Terraform","AWS VPC","Amazon EKS Auto Mode","Docker","Hadolint","GitHub Actions","ESLint","npm audit","Trivy","Checkov","Argo CD","Kubernetes NetworkPolicies"],
    actions:["Provisioned a private AWS network and EKS cluster using Terraform.","Created multi-stage Docker builds and applied non-root user and read-only filesystem practices.","Built a 10-stage GitHub Actions pipeline incorporating ESLint, npm audit, Trivy and Checkov.","Configured Argo CD to continuously deliver the application from the DevOps repository branch.","Applied Kubernetes NetworkPolicies to restrict workload communication and used EKS secret encryption at rest."],
    skills:"Secure container design, IaC scanning, dependency auditing, pipeline design, GitOps, Kubernetes network segmentation and secrets protection.",
    outcome:"Implemented a layered security workflow spanning infrastructure, application dependencies, container images, deployment and runtime networking. No independent audit or measured security outcome was supplied.",
    relevance:"Demonstrates how multiple security controls can be combined in a cloud-native application lifecycle, including controls that operate after deployment.",
    repo:"https://github.com/mabdullahwork9-ux/jerney_devsecops", evidence:"Repository available. Add a system architecture diagram, 10-stage workflow image, Trivy/Checkov results and NetworkPolicy examples."
  },
  vulnerability: {
    number:"04 / VULNERABILITY MANAGEMENT", title:"Azure Vulnerability Management Lab",
    intro:"A controlled Azure lab used to compare unauthenticated and credentialed vulnerability scans against a deliberately vulnerable Windows 10 virtual machine.",
    objective:"Understand how scanner access affects vulnerability visibility, then remediate identified issues and verify the changes with follow-up scans.",
    why:"To practice the full vulnerability-management cycle rather than stopping at discovery: assess, prioritize, remediate and validate.",
    tools:["Microsoft Azure","OpenVAS","Windows 10 VM","Vulnerability scanning","Remediation validation"],
    actions:["Created a secure Azure network and deployed an OpenVAS scanner virtual machine.","Built a Windows 10 test VM with outdated software and selected security controls disabled.","Ran unauthenticated and credentialed scans using OpenVAS.","Reviewed the findings and compared visibility between scan types.","Remediated identified vulnerabilities and performed subsequent scans to verify remediation."],
    skills:"Vulnerability assessment, scanner configuration, credentialed scanning, findings analysis, remediation planning and verification.",
    outcome:"Completed a scan–remediate–rescan exercise and compared authenticated with unauthenticated assessment coverage. Specific CVE counts and severity reductions were not supplied.",
    relevance:"Credentialed assessments can provide deeper configuration and patch visibility than external unauthenticated checks, helping organizations build more complete vulnerability inventories.",
    repo:null, evidence:"Evidence URL not supplied. Add sanitized OpenVAS reports, before/after findings and a lab network diagram."
  },
  sentinel: {
    number:"05 / SIEM & THREAT VISUALIZATION", title:"Azure Sentinel — Global Attack Map",
    intro:"A SIEM visualization lab that enriched Windows security events with geographic metadata and displayed RDP brute-force activity on a world map in Microsoft Sentinel.",
    objective:"Turn raw authentication-related event data into a more intuitive geographic view that can support investigation and threat monitoring.",
    why:"To explore log enrichment, custom ingestion and visualization in a cloud SIEM workflow.",
    tools:["Microsoft Sentinel","Azure Log Analytics Workspace","PowerShell","Windows Event Viewer","Custom Logs","KQL / Workbook configuration"],
    actions:["Used a custom PowerShell script to extract metadata from Windows Event Viewer and forward it to a third-party geolocation API.","Configured an Azure Log Analytics Workspace to ingest custom geographic fields, including latitude, longitude, region and country.","Configured custom fields for geographic mapping in Sentinel.","Built a Sentinel workbook to visualize global RDP brute-force activity by location and event magnitude."],
    skills:"Windows event analysis, PowerShell automation, log enrichment, SIEM data ingestion, custom fields and security visualization.",
    outcome:"Configured a geographic attack visualization using enriched event data. The supplied project notes do not include event volumes, detection precision or a production deployment claim.",
    relevance:"Geographic context can help analysts triage authentication patterns and communicate security-event trends, while requiring careful interpretation of IP geolocation limitations.",
    repo:null, evidence:"Evidence URL not supplied. Add a redacted Sentinel workbook screenshot, ingestion configuration and sample sanitized log record."
  },
  malware: {
    number:"06 / MALWARE RESEARCH", title:"RedLine — Static Malware Analysis",
    intro:"A written static-analysis study of RedLine, described in the supplied report as an information-stealing Trojan designed to collect sensitive data such as credentials, payment details and cryptocurrency wallet information.",
    objective:"Document the malware's purpose and information-theft focus through a structured analytical report.",
    why:"To develop malware-analysis literacy and understand the risks posed by credential and information-stealing malware.",
    tools:["Static malware analysis","Threat research","Malware reporting"],
    actions:["Reviewed the malware sample in the context of its stated information-stealing capabilities.","Structured the report around the threat's purpose and the categories of sensitive information it targets.","Documented the analysis in a report format."],
    skills:"Threat research, malware taxonomy, analytical writing, information-stealer awareness and communicating security risk.",
    outcome:"Produced a report describing RedLine's information-stealing objectives. Detailed indicators of compromise, hashes, tooling and behavioral findings were not included in the supplied project description.",
    relevance:"Information stealers create risk for identity, financial and enterprise accounts. Understanding their objectives helps defenders prioritize credential protection, endpoint controls and incident investigation.",
    repo:null, evidence:"Report URL not supplied. Add the original report, sample hash (if safe to disclose), analysis environment and sanitized findings. Do not upload live malware."
  },
  netflix: {
    number:"07 / DEVSECOPS & OBSERVABILITY", title:"Netflix Clone — DevSecOps Pipeline",
    intro:"A cloud deployment project that combined Jenkins automation, application and container scanning, Kubernetes delivery and monitoring for a Netflix-clone application.",
    objective:"Build a delivery and operations workflow that includes code-quality checks, image vulnerability assessment, GitOps deployment and infrastructure monitoring.",
    why:"To connect secure application delivery with the operational visibility needed to observe infrastructure and pipeline health.",
    tools:["AWS EC2","Jenkins","SonarQube","Trivy","Docker","Kubernetes / EKS","Argo CD","Helm","Prometheus","Grafana","SMTP alerts"],
    actions:["Created a Jenkins-based CI/CD workflow for the application.","Integrated SonarQube for code-quality analysis and Trivy for container-image vulnerability assessment.","Deployed the application to Kubernetes (EKS) and configured Argo CD for GitOps continuous delivery.","Used Helm charts to manage deployment and monitoring components.","Configured Prometheus and Grafana to observe CPU and RAM utilization for EC2 instances and Jenkins jobs, with SMTP email alerts."],
    skills:"Pipeline orchestration, static analysis, container scanning, Kubernetes deployment, GitOps, Helm, metrics monitoring and alerting.",
    outcome:"Implemented an integrated application delivery and monitoring setup. Availability, performance and vulnerability metrics were not supplied.",
    relevance:"Security scanning helps identify issues before deployment; monitoring and alerting provide operational feedback after release. Both are necessary for dependable services.",
    repo:null, evidence:"Repository URL not supplied. Add source repository, Jenkins stages, scan reports, Argo CD view and Grafana dashboard screenshots."
  }
};

const grid = document.getElementById('projectGrid');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.getElementById('modalClose');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');

function renderProject(key) {
  const p = projects[key];
  if (!p) return;
  const tools = p.tools.map(t => `<span>${escapeHTML(t)}</span>`).join('');
  const actions = p.actions.map(a => `<li>${escapeHTML(a)}</li>`).join('');
  const repo = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Open source repository ↗</a>` : '';
  modalContent.innerHTML = `
    <span class="modal-kicker">${escapeHTML(p.number)}</span>
    <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
    <p class="modal-intro">${escapeHTML(p.intro)}</p>
    <div class="tool-pills modal-tools">${tools}</div>
    ${section("What was the project?", p.intro)}
    ${section("Why I built it", p.why)}
    ${section("Objective", p.objective)}
    <div class="modal-section"><h3>What I implemented</h3><ul>${actions}</ul></div>
    ${section("Skills developed", p.skills)}
    ${section("Outcome", p.outcome)}
    ${section("Real-world relevance", p.relevance)}
    <div class="modal-section"><h3>Evidence</h3><p>${escapeHTML(p.evidence)}</p><div class="modal-evidence">${repo}<span class="placeholder">Additional evidence placeholder</span></div></div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  closeButton.focus();
}
function section(title, body) {
  return `<div class="modal-section"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></div>`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => renderProject(button.dataset.open)));
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

document.getElementById('filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
  });
});
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
