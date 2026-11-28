---
title: "Clinical AI a long way from calling the shots – study"
excerpt: "An analysis of 8,532 registered AI clinical trials found only about 2% test semi-autonomous or closed-loop systems that make treatment decisions, mostly in glucose, anaesthesia and respiratory management."
date: 2026-09-03
category: ai-healthcare
severity: Low
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/irish-digital-health/clinical-ai-a-long-way-from-calling-the-shots-study/"
---
## What happened

Just two per cent of AI tools in clinical trials are capable of semi-autonomous or closed-loop treatment decision-making, according to a new analysis published on arXiv and reported by Pulse+IT. The authors say the data shows the reality of AI in healthcare remains a long way behind the hype.

The study, "The Clinical Trial Pipeline Reveals the Next Wave of Artificial Intelligence in Healthcare: A Multidimensional Analysis of 8,532 Registered Studies", classified registered AI-related clinical trials by the level of autonomy of the AI involved. It identified 184 trials, about 2.2%, involving Level 4 semi-autonomous or closed-loop systems, most registered within the past five years.

The largest category was interventional decision support, with 3,368 trials. A further 3,259 trials remain at the stage of retrospective validation, testing AI on historical data rather than in live care.

The Level 4 trials cluster in a few areas. The biggest group is closed-loop glucose management for diabetes, followed by closed-loop anaesthesia and sedation, and closed-loop respiratory management. The authors note that closed-loop systems are scarce outside endocrinology, anaesthesiology, critical care and neurostimulation.

## Technical and operational significance

The findings show that most clinical AI is still advisory. It flags, predicts or recommends, and a clinician decides. Only a small fraction of tools under clinical investigation act directly on patients without a human approving each decision.

The fields where closed-loop systems are emerging share a common feature. They involve continuous physiological signals and well-defined control targets, such as blood glucose, depth of anaesthesia or ventilation. These are conditions where automated control has a long engineering history.

From a security perspective, autonomy changes the risk profile:

- **Advisory systems** can be wrong, but a clinician is positioned to catch errors before they reach the patient.
- **Closed-loop systems** act directly, so integrity of inputs, software and communications becomes a patient safety issue. Tampering with a sensor feed or control algorithm could cause direct harm.

The large number of trials still at retrospective validation also suggests many AI tools have not yet been tested in the conditions where they would actually be used.

## What it means for Australian healthcare

For Australian health services, the study is a useful counterweight to vendor claims about autonomous AI. Most tools on offer today should be governed as decision support, with clear accountability for the clinician who acts on their outputs.

Where closed-loop systems are used, for example in diabetes management or anaesthesia, they typically fall within TGA medical device regulation. Health services should still treat their cyber security as a clinical safety matter, including device inventory, network segmentation, firmware management and monitoring.

## What to watch next

- Results from Level 4 trials and any regulatory approvals that follow.
- Expansion of closed-loop AI beyond its current specialties.
- Regulatory guidance on cyber security for autonomous medical devices.

## Recommended actions for Australian healthcare organisations

- Classify AI tools in use by autonomy level, and apply stronger governance to any that act on patients without per-decision human approval.
- Treat cyber security of closed-loop and autonomous medical devices as a patient safety issue, with segmentation, monitoring and firmware controls.
- Ask vendors for evidence from prospective clinical studies, not only retrospective validation, before deploying AI tools in care.
- Keep clinician accountability and review clearly defined for advisory AI tools.
- Include AI-enabled and closed-loop devices in medical device cyber security inventories and risk assessments.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/irish-digital-health/clinical-ai-a-long-way-from-calling-the-shots-study/)
