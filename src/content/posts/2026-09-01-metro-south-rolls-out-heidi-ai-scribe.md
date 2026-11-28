---
title: "Metro South rolls out Heidi AI scribe"
excerpt: "Queensland's Metro South Health is rolling out Heidi's ambient AI scribe across five hospitals and community services after a trial in which 92% of participating clinicians reported spending less time on admin."
date: 2026-09-01
category: ai-healthcare
severity: Low
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/australian-digital-health/metro-south-rolls-out-heidi-ai-scribe/"
---
## What happened

Queensland's Metro South Health is rolling out Heidi's ambient AI scribe across the health service, following a 2025 trial in which 92% of participating clinicians reported spending less time on administrative tasks.

The trial involved 70 clinicians across emergency, medicine, surgical and mental health services. It used pre- and post-implementation measures, time-in-motion studies, surveys and interviews. Besides the 92% figure, 70% of clinicians said they felt more present and engaged with patients, and 22% said the scribe improved their wellbeing at work.

The rollout began in June and is expected to take more than a year. It covers five hospitals and other services, including mental health, community health and oral health. Clinicians can opt in. Metro South describes the scribe as one that "sits alongside" clinical practice, with clinicians remaining responsible for reviewing and finalising documentation. The scribe is being implemented on Microsoft Azure.

The trial's researchers noted potential barriers to adoption, including Wi-Fi connectivity problems, equipment shortages and the scribe's sensitivity to ambient noise.

A widely repeated claim that the scribe saved doctors 59 minutes a day was later corrected by MobiHealthNews, which said the figure came from Heidi Health's own research rather than the health service's trial.

## Technical and operational significance

The trial results are self-reported, so they show clinicians' experience rather than a measured time saving. That is still useful evidence, but it should not be read as a guarantee of the same benefit elsewhere. The correction to the 59-minute figure is a reminder to check the source of productivity claims.

Ambient scribes raise specific privacy and security considerations because of what they capture:

- **Audio and transcripts.** Full recordings or transcripts of consultations, including mental health conversations, are highly sensitive data.
- **Cloud processing.** Speech-to-text and summarisation typically occur in cloud environments, so data location, access and retention matter.
- **Integration.** Notes flow into clinical records, so errors and access controls in the scribe affect the record of truth.
- **Consent.** Patients need to understand that their consultation is being processed by AI.

Metro South's decision to run the scribe on Microsoft Azure suggests the health service has considered hosting arrangements, though the trial reporting does not detail retention or consent processes.

## What it means for Australian healthcare

Large-scale public hospital rollouts like Metro South's are likely to accelerate adoption of ambient scribes across Australia. Health services considering similar programmes should pair productivity evaluation with privacy impact assessment, security review and clinical governance.

The TGA's later review, which found that eight of 12 digital scribes examined include functions likely to make them medical devices, adds a regulatory dimension. Health services should know which features of their chosen scribe are enabled and whether any go beyond transcription.

## What to watch next

- Independent evaluation of the rollout's impact on documentation time, quality and patient experience.
- How Metro South handles consent, data retention and use across mental health and other sensitive services.
- The regulatory status of scribe features following the TGA review.

## Recommended actions for Australian healthcare organisations

- Conduct a privacy impact assessment before deploying ambient scribes, covering audio capture, transcript storage, retention and data residency.
- Establish clear patient consent processes, including how patients can decline AI scribing in their consultation.
- Confirm whether audio or transcripts are used to train vendor models, and contractually prohibit this if not acceptable.
- Require clinicians to review and approve all scribe-generated notes, and monitor for errors through clinical governance.
- Evaluate productivity claims against your own measured data rather than vendor figures.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/australian-digital-health/metro-south-rolls-out-heidi-ai-scribe/)
