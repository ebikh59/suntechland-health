---
title: "Best Practice defends its concerns over Heidi II"
excerpt: "Best Practice has told Bp Premier customers that using Heidi Health's autonomous AI agent Heidi II breaches its licence, citing patient safety, data security and regulatory concerns. Heidi rejects the claims."
date: 2026-11-03
category: ai-healthcare
severity: Medium
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/australian-digital-health/best-practice-defends-its-concerns-over-heidi-ii/"
---
## What happened

Best Practice Software has defended its decision to prohibit the use of Heidi Health's new AI agent, Heidi II, with its Bp Premier practice management and clinical software. It cites concerns about patient safety, data security and the agent's ability to operate autonomously inside clinical software.

On 29 October, Best Practice issued a critical alert telling customers that using Heidi II with Bp Premier would breach its End User Licence Agreement. CEO Craig Hodges said the concerns relate specifically to Heidi II, not to Heidi's existing Scribe or Virtual Assistant products.

"It is an AI agent tool that can operate under a clinician's login and use the screen the way a clinician would, independently of the clinician," Mr Hodges told customers. "It is designed to move between tabs and work in Bp Premier autonomously, without prompting or supervision."

Best Practice listed three areas of concern:

- **Clinical information integrity and patient safety.** It alleged Heidi II could change or delete information such as patient histories, test results and appointments without clinician oversight.
- **Patient data security and privacy.** It raised concerns about the agent's access to sensitive patient information and uncertainty about how that information is used.
- **Regulatory compliance.** It pointed to the TGA's recent review finding that digital scribe products that analyse information or generate clinical conclusions could meet the definition of a medical device. It said Heidi II's functionality went "well beyond traditional digital scribing", while expressing no view on its classification.

Best Practice said it would update its licence as part of the Oxford SP2 update to Bp Premier to make explicit that bots, scraping tools and robotic process automation are not permitted. It said it works with more than 250 third-party providers through established integration processes.

Heidi founder and CEO Thomas Kelly and CMO Simon Kos rejected the concerns. Mr Kelly questioned whether GPs should need a vendor's permission to access records held on their own computers. He said Best Practice's position raised concerns about anti-competitive conduct, adding that Heidi had "sought deeper integration with Best Practice for three years". Heidi maintains its agents operate under clinician supervision.

## Technical and operational significance

The dispute highlights a real architectural question about agentic AI in clinical software. A traditional scribe produces a draft that the clinician pastes or approves into the record. A screen-operating agent that works under the clinician's own login is different. To the clinical system, its actions are indistinguishable from the clinician's.

That has security consequences regardless of which side is right commercially:

- **Attribution.** Audit logs record the clinician as having made every change, so investigating an incorrect or deleted entry becomes harder.
- **Least privilege.** The agent inherits all of the clinician's permissions rather than a scoped set suited to its task.
- **Change control.** Interface-driven automation can behave unpredictably when the software it operates is updated.
- **Data flows.** Information viewed by the agent may be transmitted to and processed by the AI vendor, which needs to be covered in privacy assessments.

Formal integrations through vendor APIs typically address these issues with separate credentials, defined scopes and distinct audit entries. Practices and vendors will keep disagreeing on where the line sits between platform control and competition.

## What it means for Australian healthcare

Bp Premier is widely used in Australian general practice, so this dispute directly affects many practices considering agentic AI. Practices remain responsible for the privacy and security of their patients' records under the Privacy Act, and for the accuracy of clinical documentation, whichever tools they use.

Before deploying any AI that acts within clinical systems, practices should understand what it can change, how its actions are recorded and approved, where patient data goes, and whether its use complies with their software licences. The TGA's position on digital scribes also means practices should check the regulatory status of tools whose functions go beyond transcription.

## What to watch next

- Whether Best Practice and Heidi reach an integration agreement, or whether the dispute escalates to regulators.
- The detail of Best Practice's updated licence terms in the Oxford SP2 release.
- TGA guidance on agentic AI tools in clinical software and how it applies to autonomous agents.

## Recommended actions for Australian healthcare organisations

- Before using any AI agent that operates within clinical software, confirm what actions it can take, such as creating, changing or deleting records, and whether every change requires clinician approval.
- Prefer integrations that use dedicated, scoped credentials and separate audit entries over agents acting under a clinician's personal login.
- Complete a privacy impact assessment covering what patient information the agent views, where it is processed and stored, and whether it is used for model training.
- Check software licence terms and vendor integration requirements before deploying third-party automation in practice systems.
- Review the TGA's guidance on digital scribes and confirm the regulatory status of AI tools whose functions go beyond transcription.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/australian-digital-health/best-practice-defends-its-concerns-over-heidi-ii/)
