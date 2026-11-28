---
title: "Memorial Healthcare Services Settles Pixel Litigation"
excerpt: "Memorial Health Services has agreed a $750,000 settlement over claims that tracking pixels on its patient portal disclosed users' information to third parties without their consent."
date: 2026-07-08
category: health-it-security
severity: Low
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/memorial-healthcare-services-pixel-settlement/"
---
## What happened

Memorial Health Services, a nonprofit provider serving patients in Southern California, has agreed to a US$750,000 settlement to resolve a class action over the use of tracking technologies on its website and patient portal.

The case, Valladolid v. Memorial Health Services, was filed by Michelle Valladolid in the Superior Court of California, County of Los Angeles. It alleged that pixels and other tracking, analytics and advertising technologies were added to the website "without the knowledge or consent of patients", sending personal and health information to third parties in violation of the California Invasion of Privacy Act.

The settlement class covers people who accessed the patient portal between 7 March 2022 and 8 July 2022. The class size has not been stated. Attorneys' fees and expenses, administration and notice costs, and a service award for the class representative will be deducted from the fund, with the remainder shared equally among valid claimants.

A mediation session in April 2025 did not produce terms, but a settlement was later reached and received preliminary approval. The claims deadline was 21 August 2026, with a final fairness hearing on 17 September 2026. Memorial "maintains that there was no wrongdoing", and HIPAA Journal's report does not say whether protected health information was actually disclosed beyond the allegations.

## Technical and operational significance

Patient portals are among the riskiest places for third-party tracking. Pages behind a login can reveal that a person is a patient, what they are viewing (results, appointments, bills) and sometimes condition-specific details through page addresses or titles. A pixel that loads on those pages can send that context to an advertising platform along with identifiers that link it to a real person.

The relatively short class period, about four months in 2022, suggests the tracking was in place only briefly before being removed, but it still led to litigation years later. US healthcare providers have faced a wave of similar cases since 2022, collectively resulting in large settlements.

These issues often start with marketing or analytics teams adding tags through a tag manager without privacy review, a pattern sometimes called tracking "scope creep".

## What it means for Australian healthcare

Australian health services and insurers commonly use Google Analytics, Meta Pixel and similar tools on public websites. Some may also load them on booking pages or portal pages. Under the Privacy Act, health information is sensitive information, and disclosing it to advertising platforms without consent risks breaching the Australian Privacy Principles.

The safest approach is to keep advertising and session-replay tools off any authenticated or health-related page entirely, and to use privacy-preserving analytics where measurement is needed.

## What to watch next

- Final approval of the Memorial settlement.
- Further pixel-tracking litigation against US health systems.
- Australian regulator guidance on tracking technologies in health services.

## Recommended actions for Australian healthcare organisations

- Remove advertising pixels, social media trackers and session replay tools from patient portals and all authenticated pages.
- Audit tag managers and website code regularly for tracking scripts, and require privacy approval before new tags are added.
- Use privacy-preserving or self-hosted analytics for portal usage measurement, configured not to capture health information.
- Make sure page URLs and titles in portals do not contain diagnoses, test names or other health details that trackers could capture.
- Review historical tracking configurations to assess whether health information may have been disclosed, and seek privacy advice.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/memorial-healthcare-services-pixel-settlement/)
