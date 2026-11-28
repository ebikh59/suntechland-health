---
title: "Pathways cuts admin with AI-powered pre-surgery assessments"
excerpt: "Australian start-up Pathways has built an AI pre-surgery assessment platform using voice agents, medication photo analysis and deterministic clinical rules, with patient data kept onshore in Sydney."
date: 2026-11-03
category: ai-healthcare
severity: Low
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/australian-digital-health/pathways-cuts-admin-with-ai-powered-pre-surgery-assessments/"
---
## What happened

Australian health technology start-up Pathways has developed an AI-powered perioperative assessment platform. It aims to reduce hospital administration, improve patient access to pre-surgery assessments and give clinicians more time for direct care.

The platform targets the repeated collection of medical histories, medication details and risk information by different clinical and administrative teams across the surgical journey, from referral through pre-admission, anaesthetic assessment and discharge.

After a hospital accepts a surgical referral, patients who need assessment receive an SMS link to a voice agent. With their consent, they answer health questions in conversation and photograph their medications for analysis. The platform flags potential risks for clinical review, and hospital staff follow up where further assessment is needed. A separate Record Request agent finds gaps in the patient's history, identifies the relevant GPs and specialists, and requests records on the team's behalf.

CEO and co-founder Nick Anderson, who spent a decade in enterprise cybersecurity, said the approach could particularly help older patients, people with visual impairments and those whose first language is not English. Citing Ramsay Health Care's approximately 500,000 procedures a year, he estimated pre-operative administration could take around 30 to 35 minutes of nursing time per patient.

## Technical and operational significance

The architecture choices described by CTO Damien Hughes are worth noting for anyone assessing clinical AI:

- **Narrow model scope.** Hughes said the company's "clinical harness keeps every model tightly scoped", using models to extract structured information from voice transcripts and patient history.
- **Deterministic decision rules.** Triage and escalation decisions "run on deterministic, versioned clinical rules that hospitals can audit line by line", rather than being left to a generative model.
- **Data residency.** Hughes said patient data stays onshore, with Anthropic's Claude models running on AWS Bedrock in Sydney and ElevenLabs providing conversational voice capabilities.

Separating generative extraction from rule-based decisions makes the system easier to audit and limits the impact of model errors on clinical prioritisation. Anderson said earlier products the founders built required TGA approval because they included deterministic diagnostics, which shaped the company's focus on administrative time savings.

The platform also introduces new elements to secure. Patients receive SMS links and voice calls, which attackers commonly impersonate. An agent that requests records from GPs and specialists sends health information between organisations. And medication photos and voice recordings are sensitive data in their own right.

## What it means for Australian healthcare

Hospitals evaluating AI pre-admission tools should treat them like any other system handling identifiable health information. That means assessing data residency, vendor sub-processors, retention of voice recordings and images, access controls and audit trails.

The patient-contact model needs particular attention. Patients will be asked to trust an SMS link and talk to a voice agent about their health. Hospitals should tell patients how genuine contact will arrive, so that they can recognise impersonation attempts. Automated record requests to GPs and specialists should be verifiable by recipients, so that they cannot be imitated by fraudsters seeking patient records.

Data residency claims are a useful starting point, but onshore hosting alone does not cover the full data flow. Hospitals should confirm where every component, including voice processing, runs and stores data.

## What to watch next

- Adoption of AI pre-admission platforms by Australian private and public hospitals, and evidence of time savings.
- Whether regulators clarify when perioperative risk-flagging tools are medical devices.
- Security assurance standards for health AI vendors handling patient contact and record exchange.

## Recommended actions for Australian healthcare organisations

- Confirm data residency and sub-processors for every component of AI patient-intake platforms, including voice and image processing, not just the core model.
- Set retention and deletion rules for patient voice recordings, transcripts and medication photos, and include them in privacy impact assessments.
- Tell patients in advance how genuine SMS and voice contact will look, and give them a way to verify it, to reduce impersonation risk.
- Make sure automated record requests to GPs and specialists are authenticated and verifiable, and that returned records are matched securely to the correct patient.
- Ask vendors to show how decisions are separated from generative model output and provide auditable, versioned clinical rules.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/australian-digital-health/pathways-cuts-admin-with-ai-powered-pre-surgery-assessments/)
