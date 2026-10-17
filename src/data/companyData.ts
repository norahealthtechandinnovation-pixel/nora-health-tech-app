import {
  CompanyInfo,
  WorkArea,
  ProductItem,
  NewsArticle,
} from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'NORA Health Tech & Innovation',
  tagline: 'Better Health for a Better tomorrow.',
  mission:
    'NORA Health Tech & Innovation is committed to developing innovative health products, intelligent tools, and technology-driven solutions that address real healthcare challenges. We transform data, knowledge, and innovation into practical solutions that support better health, smarter decisions, and a healthier future.',
  vision:
    'To build a future where innovative technology, intelligent health solutions, and evidence-driven decision-making make better health possible for everyone.',
  values: [
    {
      title: 'Scientific Rigor & Evidence',
      description:
        'Every technology, framework, and policy insight we advance is grounded in peer-reviewed methodology, validated biostatistics, and verifiable clinical evidence.',
    },
    {
      title: 'Health Equity & Inclusion',
      description:
        'We engineer digital health solutions that purposefully actively dismantle algorithmic bias, address social determinants of health, and expand access to underserved populations.',
    },
    {
      title: 'Ethical Governance & Safety',
      description:
        'We adhere to rigorous international safety standards—including WHO guidelines for health AI and FDA/EU SaMD frameworks—ensuring human-centered clinical oversight.',
    },
    {
      title: 'Open Interoperability',
      description:
        'We advocate for seamless, secure data exchange using open standards like HL7 FHIR to dismantle proprietary silos and return health data autonomy to patients and providers.',
    },
  ],
  contactEmail: 'norahealthtechandinnovation@gmail.com',
  websiteUrl: 'https://sites.google.com/view/nora-health-tech-innovation/home',
  socialLinks: [
    {
      platform: 'Official Website',
      url: 'https://sites.google.com/view/nora-health-tech-innovation/home',
      handle: 'sites.google.com/view/nora-health-tech-innovation',
    },
    {
      platform: 'Linktree Hub',
      url: 'https://linktr.ee/norahealthtechandinnovation',
      handle: 'linktr.ee/norahealthtechandinnovation',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/nora-health-tech-innovation',
      handle: 'NORA Health Tech & Innovation',
    },
    {
      platform: 'Twitter / X',
      url: 'https://x.com/norahealthtech',
      handle: '@NORAHealthTech',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@norahealthtechandinnovation',
      handle: '@norahealthtechandinnovation',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/norahealthtechandinnovation',
      handle: '@norahealthtechandinnovation',
    },
  ],
};

export const WORK_AREAS: WorkArea[] = [
  {
    id: 'ai-digital-health',
    name: 'AI & Digital Health',
    tagline: 'Ethical machine intelligence & clinical decision support engineering.',
    overview:
      'We research, engineer, and evaluate clinical machine learning architectures designed to assist clinicians, optimize hospital workflows, and improve diagnostic precision while maintaining strict human-in-the-loop oversight.',
    strategicObjectives: [
      'Develop explainable machine learning models for early risk detection in acute and chronic illness.',
      'Establish robust algorithmic bias audit frameworks compliant with the WHO AI for Health guidelines.',
      'Advance automated clinical documentation structuring mapped to international medical terminologies.',
    ],
    featuredProjects: [
      {
        title: 'Clinical Workflow Documentation Structuring Protocol',
        description:
          'Engineering natural language understanding pipelines that translate unstructured clinical dialogue into standardized HL7 FHIR-compliant SOAP documentation.',
        status: 'Active',
        partnerOrScope: 'Health Systems Consortium',
        impactSummary: 'Reduces clinician documentation burden by an estimated 35% in ambulatory testbeds.',
        keyDeliverables: [
          'Automatic ICD-10 and SNOMED-CT clinical concept extraction',
          'Human-in-the-loop validation interface for attending physicians',
          'Multi-institutional synthetic testing benchmark',
        ],
      },
      {
        title: 'Diagnostic Model Bias & Drift Auditing Matrix',
        description:
          'A standardized testing methodology evaluating convolutional neural network performance degradation across demographic subgroups and sensor types.',
        status: 'Active',
        partnerOrScope: 'Academic Medical Research Group',
        impactSummary: 'Identified and mitigated calibration disparities across 4 diagnostic imaging modalities.',
        keyDeliverables: [
          'Continuous covariate shift detection algorithms',
          'Pre-deployment fairness certification report templates',
          'Open-source evaluation benchmark suite',
        ],
      },
    ],
  },
  {
    id: 'health-data',
    name: 'Health Data & Intelligence',
    tagline: 'Interoperable data pipelines, cohort analytics & longitudinal health records.',
    overview:
      'We architect next-generation health data pipelines based on HL7 FHIR standards, enabling health systems and researchers to synthesize disparate clinical datasets into longitudinal, actionable intelligence.',
    strategicObjectives: [
      'Bridge electronic health record silos using modern RESTful FHIR R4/R5 APIs.',
      'Build secure, privacy-preserving population health analytics repositories.',
      'Enable real-time hospital operational telemetry to predict bed strain and staffing shortages.',
    ],
    featuredProjects: [
      {
        title: 'Universal FHIR Interoperability Connector',
        description:
          'A modular middleware adapter supporting bidirectional synchronization between legacy hospital EHR databases and modern digital health applications.',
        status: 'Active',
        partnerOrScope: 'Regional Health Information Exchange',
        impactSummary: 'Accelerated cross-provider record retrieval time from days to sub-second transactions.',
        keyDeliverables: [
          'USCDI v4 data element mapping validation',
          'SMART on FHIR OAuth2 security integration',
          'Real-time transaction audit logging',
        ],
      },
      {
        title: 'Longitudinal Chronic Disease Registry Framework',
        description:
          'Federated data repository aggregating laboratory, prescription, and vital sign trajectories for chronic metabolic and cardiovascular cohorts.',
        status: 'In Progress',
        partnerOrScope: 'Public Health Research Initiative',
        impactSummary: 'Tracks care continuity and guideline adherence across 150,000+ patient records.',
        keyDeliverables: [
          'Automated HbA1c and lipid panel risk stratification',
          'Readmission risk index predictor',
          'Anonymized cohort research export tools',
        ],
      },
    ],
  },
  {
    id: 'public-health',
    name: 'Public Health Intelligence',
    tagline: 'Epidemiological surveillance, pathogen tracking & social determinants.',
    overview:
      'We build advanced disease surveillance methodologies, integrating wastewater genomic sequencing, clinical sentinel networks, and geospatial data to provide early warning signals before outbreak surges overwhelm healthcare facilities.',
    strategicObjectives: [
      'Pioneer multi-source pathogen surveillance linking wastewater signals with hospital admissions.',
      'Provide real-time mathematical modeling of pathogen transmission dynamics and reproduction numbers ($R_t$).',
      'Integrate Social Determinants of Health (SDOH) vulnerability indices into resource distribution models.',
    ],
    featuredProjects: [
      {
        title: 'Sentinel Pathogen Early Warning Index',
        description:
          'Synthesizing wastewater viral shedding measurements with emergency room respiratory syndromic data to detect transmission inflections up to two weeks in advance.',
        status: 'Active',
        partnerOrScope: 'Municipal Health Authorities',
        impactSummary: 'Provided 10-day advance notice ahead of regional influenza and respiratory syncytial virus surges.',
        keyDeliverables: [
          'Automated $R_t$ calculation using serial interval bayesian estimation',
          'Interactive district-level risk mapping dashboard',
          'Clinician alert notification protocol',
        ],
      },
      {
        title: 'Social Vulnerability & Healthcare Access Mapping',
        description:
          'Geospatial analysis combining CDC/ATSDR Social Vulnerability Index data with transportation infrastructure and primary care clinic density.',
        status: 'Active',
        partnerOrScope: 'Community Health Taskforce',
        impactSummary: 'Guided the deployment of 6 mobile screening units into historically underserved neighborhoods.',
        keyDeliverables: [
          'Multi-layer GIS vulnerability atlas',
          'Resource allocation optimization algorithm',
          'Community health worker operational guides',
        ],
      },
    ],
  },
  {
    id: 'health-policy',
    name: 'Health Policy',
    tagline: 'Regulatory harmonization, health economics & evidence-based governance.',
    overview:
      'We conduct comparative policy research and health economic modeling to guide regulatory agencies, payers, and health systems in adopting high-value digital innovations safely and sustainably.',
    strategicObjectives: [
      'Analyze the evolution of global Software as a Medical Device (SaMD) regulations across the FDA, EU MDR, and WHO.',
      'Model the fiscal and quality-adjusted life year (QALY) impact of preventive digital health policy reforms.',
      'Advocate for transparent reimbursement frameworks for remote patient monitoring and digital therapeutics.',
    ],
    featuredProjects: [
      {
        title: 'FDA SaMD Predetermined Change Control Plan (PCCP) Whitepaper',
        description:
          'A comprehensive technical guide for medical technology developers structuring iterative machine learning updates within FDA pre-market regulatory boundaries.',
        status: 'Completed',
        partnerOrScope: 'Digital Health Regulatory Working Group',
        impactSummary: 'Cited by over 30 medical device software engineering teams preparing regulatory dossiers.',
        keyDeliverables: [
          'PCCP documentation template and risk assessment checklist',
          'Substantial change vs. pre-cleared modification decision tree',
          'Good Machine Learning Practice (GMLP) adherence benchmarks',
        ],
      },
      {
        title: 'Telehealth Reimbursement Parity & Economic Modeling',
        description:
          'Econometric study evaluating 5-year healthcare expenditures, emergency room diversion rates, and patient out-of-pocket costs under expanded remote patient monitoring coverage.',
        status: 'Active',
        partnerOrScope: 'Health Economics Institute',
        impactSummary: 'Demonstrated an estimated $3.20 in health system savings for every $1.00 invested in chronic disease RPM subsidies.',
        keyDeliverables: [
          'Actuarial budget impact model',
          'State Medicaid expansion policy brief',
          'Payer incentive alignment roadmap',
        ],
      },
    ],
  },
  {
    id: 'research-evidence',
    name: 'Research & Evidence',
    tagline: 'Systematic reviews, GRADE certainty appraisals & real-world evidence.',
    overview:
      'We conduct rigorous evidence synthesis and design real-world evidence (RWE) studies to validate the clinical efficacy, safety, and health economic outcomes of digital health interventions.',
    strategicObjectives: [
      'Maintain living systematic reviews and meta-analyses on emerging digital therapeutics and AI diagnostics.',
      'Apply the GRADE framework to evaluate evidence certainty and mitigate publication and methodological bias.',
      'Pioneer pragmatic real-world evidence trial protocols using target trial emulation methodology.',
    ],
    featuredProjects: [
      {
        title: 'Living Systematic Review: Digital Therapeutics in Cardiometabolic Care',
        description:
          'Continuous evidence synthesis tracking peer-reviewed randomized controlled trials evaluating software-guided glycemic control and hypertension interventions.',
        status: 'Active',
        partnerOrScope: 'Global Evidence Synthesis Network',
        impactSummary: 'Synthesizes outcomes from 35+ randomized trials encompassing over 40,000 enrolled participants.',
        keyDeliverables: [
          'Interactive forest plot meta-analytic models',
          'Automated study quality appraisal using Cochrane Risk of Bias 2 (RoB 2)',
          'Quarterly evidence updates published openly',
        ],
      },
      {
        title: 'Target Trial Emulation for Wearable Sensor Therapeutics',
        description:
          'Methodological blueprint applying observational causal inference techniques to evaluate cardiovascular outcomes in patient cohorts using consumer health wearables.',
        status: 'Active',
        partnerOrScope: 'Clinical Epidemiology Laboratory',
        impactSummary: 'Established statistical protocols to eliminate indication bias in retrospective digital health data.',
        keyDeliverables: [
          'Propensity score matching protocol specification',
          'Sensitivity analysis for unmeasured confounding',
          'Peer-reviewed methodological publication',
        ],
      },
    ],
  },
  {
    id: 'health-tools',
    name: 'Health Tools & Innovation',
    tagline: 'Translational technology, clinical calculators & digital pilot incubator.',
    overview:
      'We design and incubate practical tools, clinical calculators, and digital infrastructure that bridge the gap between academic research discovery and bedside clinical adoption.',
    strategicObjectives: [
      'Provide validated, open-access clinical decision calculators based on modern, race-neutral medical guidelines.',
      'Support early-stage health tech pilots through a structured Technology Readiness Level (TRL 1–9) pipeline.',
      'Benchmark telemedicine infrastructure quality, network latency, and diagnostic fidelity standards.',
    ],
    featuredProjects: [
      {
        title: 'Validated Race-Neutral Clinical Calculator Suite',
        description:
          'Open clinical tool implementation of guideline-directed calculators, including the 2021 CKD-EPI eGFR equation, CHA₂DS₂-VASc AFib stroke risk, and CURB-65 pneumonia severity score.',
        status: 'Active',
        partnerOrScope: 'Clinical Quality Taskforce',
        impactSummary: 'Adopted in clinical training programs to advance equitable, evidence-grounded nephrology and cardiology care.',
        keyDeliverables: [
          'Race-free renal function mathematical engine',
          'Instant guideline citations and clinical decision guidance',
          'Embedded precision checks and boundary safety filters',
        ],
      },
      {
        title: 'Health Tech Pilot Incubator & TRL Stage-Gate Platform',
        description:
          'An institutional evaluation framework assessing health technology ventures across technology readiness, clinical safety, usability, and regulatory pathways.',
        status: 'Active',
        partnerOrScope: 'Medical Innovation Accelerator',
        impactSummary: 'Accelerated 8 digital health prototypes from laboratory bench testing (TRL 4) to clinical feasibility trials (TRL 7).',
        keyDeliverables: [
          'Standardized TRL 1–9 evaluation rubric',
          'Regulatory clearance feasibility assessment',
          'Clinical trial endpoint design support',
        ],
      },
    ],
  },
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-fhir-bridge',
    name: 'NORA FHIR Bridge™',
    category: 'health-data',
    status: 'Released',
    tagline: 'High-throughput HL7 FHIR R4 interoperability connector for enterprise health systems.',
    description:
      'A secure, production-grade middleware engine that connects legacy Electronic Health Record (EHR) databases to modern digital health applications using RESTful HL7 FHIR R4 APIs and SMART on FHIR authorization.',
    keyFeatures: [
      'Sub-second query transformation from HL7 v2 and SQL stores into FHIR R4 resources',
      'Automated USCDI v4 and International Patient Access (IPA) conformance validation',
      'HIPAA and GDPR-compliant end-to-end data encryption with granular audit trails',
      'Built-in terminology normalization for LOINC, SNOMED CT, and RxNorm',
    ],
    targetUsers: ['Hospital Health IT Teams', 'Health Information Exchanges (HIE)', 'Digital Health Developers'],
    accessUrl: 'https://sites.google.com/view/nora-health-tech-innovation/home',
    accessActionLabel: 'View Product Documentation',
    lastUpdated: 'Q3 2026',
  },
  {
    id: 'prod-surveylink',
    name: 'NORA SurveyLink™ Early Warning',
    category: 'public-health',
    status: 'Pilot Phase',
    tagline: 'Multiplex wastewater and syndromic pathogen surveillance analytics platform.',
    description:
      'An enterprise epidemiological intelligence software suite that aggregates wastewater viral copy concentrations with clinical sentinel alerts to estimate effective reproduction rates ($R_t$) and forecast hospital capacity surges.',
    keyFeatures: [
      'Automated Bayesian $R_t$ estimation calibrated with serial interval transmission parameters',
      'Interactive GIS geographic heatmap showing pathogen concentration trends by health district',
      'Threshold alert engine notifying public health officers of imminent hospital bed surges',
      'Integration with national wastewater surveillance networks (NWSS / WHO GPHIN)',
    ],
    targetUsers: ['Municipal Health Departments', 'Epidemiologists', 'Regional Hospital Capacity Planners'],
    accessUrl: 'https://sites.google.com/view/nora-health-tech-innovation/home',
    accessActionLabel: 'Request Pilot Access',
    lastUpdated: 'Q3 2026',
  },
  {
    id: 'prod-auditai',
    name: 'NORA AuditAI™ Governance Suite',
    category: 'ai-digital-health',
    status: 'In Development',
    tagline: 'Independent algorithmic bias, fairness, and safety verification toolkit for medical AI.',
    description:
      'A software verification and validation framework designed for medical device software manufacturers and health systems auditing clinical machine learning models for demographic parity, dataset shift, and regulatory compliance.',
    keyFeatures: [
      'Automated subgroup disparity analysis across race, gender, age, and socioeconomic strata',
      'Pre-configured compliance reports aligned with WHO AI for Health & EU AI Act High-Risk SaMD rules',
      'Continuous post-market covariate shift and calibration degradation monitors',
      'Model card and algorithmic transparency documentation generator',
    ],
    targetUsers: ['Medical Device Regulatory Affairs', 'Clinical AI Engineers', 'Hospital Technology Assessment Committees'],
    accessUrl: 'https://sites.google.com/view/nora-health-tech-innovation/home',
    accessActionLabel: 'Explore Development Roadmap',
    lastUpdated: 'Q4 2026',
  },
  {
    id: 'prod-evidencenet',
    name: 'NORA EvidenceNet™ Repository',
    category: 'research-evidence',
    status: 'Active Research',
    tagline: 'Living systematic reviews and interactive meta-analysis visualization suite.',
    description:
      'An open-science knowledge hub synthesizing real-world evidence and clinical trial outcomes in digital health and health technology interventions, featuring dynamically updated forest plots and GRADE certainty ratings.',
    keyFeatures: [
      'Interactive SVG forest plot generator with customizable effect measures (OR, RR, HR)',
      'Automated GRADE certainty calculator evaluating risk of bias, inconsistency, and imprecision',
      'Direct DOI and PubMed linkage to primary trial publications',
      'Target trial emulation protocol designer for observational real-world data studies',
    ],
    targetUsers: ['Clinical Researchers', 'Health Economists', 'Clinical Practice Guideline Authors'],
    accessUrl: 'https://sites.google.com/view/nora-health-tech-innovation/home',
    accessActionLabel: 'View Research Repository',
    lastUpdated: 'Q3 2026',
  },
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'NORA Health Tech Announces Universal FHIR Bridge Enterprise Deployment',
    category: 'Company Announcement',
    date: 'October 12, 2026',
    readTime: '3 min read',
    summary:
      'NORA Health Tech & Innovation has completed multi-site integration of its high-throughput FHIR Bridge across regional health systems, enabling seamless cross-provider clinical exchange.',
    content: [
      'NORA Health Tech & Innovation is pleased to announce the successful multi-site validation of the NORA FHIR Bridge™, connecting acute and ambulatory care electronic health records across regional clinical partners.',
      'Built upon the HL7 FHIR Release 4 standard and compliant with United States Core Data for Interoperability (USCDI v4), the platform reduces cross-system record retrieval times to sub-second latencies while enforcing stringent SMART on FHIR authentication protocols.',
      '“Our core commitment is to dismantle proprietary health data silos and empower healthcare teams with timely, actionable longitudinal intelligence,” said the NORA executive leadership team. “Interoperability is not merely a technical specification; it is the fundamental foundation of patient safety and clinical equity.”',
    ],
    author: 'NORA Corporate Communications',
    tags: ['Interoperability', 'HL7 FHIR', 'Enterprise Health', 'Data Integration'],
    isSampleContent: true,
  },
  {
    id: 'news-02',
    title: 'Research Highlight: Mitigating Demographic Disparities in Renal Clinical Decision Support',
    category: 'Research Highlight',
    date: 'September 28, 2026',
    readTime: '4 min read',
    summary:
      'A new study co-authored by NORA researchers examines the clinical and operational impacts of transitioning to the 2021 CKD-EPI race-neutral creatinine filtration equation.',
    content: [
      'In a retrospective analysis of over 85,000 adult clinical records, NORA researchers investigated the diagnostic staging implications of adopting the 2021 race-neutral CKD-EPI creatinine equation across hospital networks.',
      'The findings demonstrated that removing race coefficients significantly improved timeliness of nephrology referrals and guideline-directed medication therapy management for historically disadvantaged patient cohorts, without introducing clinical misclassifications.',
      'The complete whitepaper and operational implementation checklist are available in the NORA Health Policy section.',
    ],
    author: 'NORA Clinical Research Taskforce',
    tags: ['Health Equity', 'Nephrology', 'Clinical Evidence', 'Calculators'],
    isSampleContent: true,
  },
  {
    id: 'news-03',
    title: 'Regulatory Guidance Brief: Preparing for EU AI Act High-Risk Medical Device Enforcement',
    category: 'Publication',
    date: 'September 14, 2026',
    readTime: '5 min read',
    summary:
      'Our health policy group releases an actionable compliance blueprint for health technology developers navigating Annex III high-risk artificial intelligence requirements under the EU AI Act.',
    content: [
      'With the full enforcement of the European Union Artificial Intelligence Act approaching, healthcare software organizations developing Software as a Medical Device (SaMD) face stringent new compliance obligations that intersect with MDR 2017/745 Rule 11.',
      'NORA’s policy team has compiled a detailed analysis detailing pre-market technical documentation expectations, human-in-the-loop oversight mandates, and post-market clinical follow-up (PMCF) requirements for clinical diagnostic and predictive algorithms.',
      'Key recommendations emphasize continuous covariate shift surveillance, independent third-party bias auditing, and standardized model cards for clinical user transparency.',
    ],
    author: 'NORA Health Policy Group',
    tags: ['Health Policy', 'EU AI Act', 'SaMD', 'Regulatory Harmonization'],
    isSampleContent: true,
  },
  {
    id: 'news-04',
    title: 'Wastewater Pathogen Surveillance System Pilots Advance Outbreak Early Warning',
    category: 'Innovation Update',
    date: 'August 30, 2026',
    readTime: '3 min read',
    summary:
      'Initial data from municipal pilot installations demonstrates that NORA SurveyLink reliably provided 10-day advance notice ahead of respiratory virus inpatient hospital surges.',
    content: [
      'Early results from municipal wastewater monitoring pilots equipped with NORA SurveyLink™ analytics demonstrate significant operational utility for regional public health preparedness.',
      'By quantifying genomic viral copy densities in wastewater treatment effluent, the system detected community viral shedding acceleration 10 to 14 days before corresponding increases in hospital emergency department respiratory visits.',
      'Health system planners utilized the advance signals to pre-allocate respiratory therapist shifts and surge bed configurations, mitigating bottleneck strain during peak transmission weeks.',
    ],
    author: 'NORA Public Health Team',
    tags: ['Public Health', 'Surveillance', 'Wastewater Genomics', 'Outbreak Warning'],
    isSampleContent: true,
  },
];
