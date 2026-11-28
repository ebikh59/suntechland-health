---
title: "British Scattered Spider Hacker Pleads Guilty to Cyberattacks on TfL; SSM Health Care; Sutter Health"
excerpt: "Two British Scattered Spider members have pleaded guilty over the Transport for London cyberattack, and one also admitted conspiring to attack US health systems SSM Health Care and Sutter Health."
date: 2026-06-24
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/british-scattered-spider-hacker-cyberattacks-on-tfl-ssm-health-care-sutter-health/"
---
## What happened

Two young British men described as members of the Scattered Spider cybercrime collective have pleaded guilty at Woolwich Crown Court, on what was due to be the first day of their trial on 22 June 2026.

Owen Flowers, 18, from Walsall, and Thalha Jubair, 20, from East London, both pleaded guilty over the cyberattack on Transport for London (TfL). Flowers also admitted conspiring to commit unauthorised acts against two US health systems, SSM Health Care Corporation and Sutter Health, in September 2024.

The TfL attack forced 28,000 employees to reset their passwords in person and cost £29 million (about US$38 million). The UK's National Crime Agency said evidence showed the attacks on SSM Health Care and Sutter Health "resulted in infiltration and damage to computers". HIPAA Journal's report does not say whether patient data was affected at either health system.

The investigation was led by the NCA and City of London Police, and the pair were arrested on 16 September 2025. "Jubair and Flowers had no option other than to plead guilty," said the NCA's Paul Foster. Sentencing was scheduled for a two-day hearing beginning on 15 July 2026.

Jubair also faces charges in New Jersey relating to at least 120 network intrusions and 47 US entities, carrying a potential sentence of up to 95 years if convicted on all counts. Whether he will be transferred to the US depends on negotiations between the UK and US governments.

## Technical and operational significance

Scattered Spider is known for social engineering rather than technical exploits. Its members typically impersonate employees or IT staff, call help desks, and persuade support personnel to reset passwords or MFA, then use that access to reach identity platforms and cloud services. The group's targets have included large enterprises across many sectors, with healthcare among them.

The convictions matter because they show that members of these loosely organised groups can be identified and prosecuted, even when they are young and operating across borders. They do not remove the threat: the techniques are widely copied, and the wider collective has continued to operate.

The TfL example also shows how costly recovery is when an identity compromise forces mass credential resets.

## What it means for Australian healthcare

Australian health services face the same social engineering techniques. Help desks that reset passwords or enrol new MFA devices over the phone are the main target, along with outsourced IT support providers.

Defences that work against Scattered Spider-style attacks are mostly procedural: strong identity verification before resets, callback procedures, restrictions on who can change MFA, and alerts when privileged accounts are modified. Technical controls such as phishing-resistant MFA and conditional access reduce the value of any credentials obtained.

CISA and partner agencies have published advisories on Scattered Spider's tactics, and they remain a sound basis for help desk hardening.

## What to watch next

- Sentences handed down to Flowers and Jubair.
- Whether Jubair is transferred to the US to face the New Jersey charges.
- Disclosures from SSM Health Care and Sutter Health about the impact of the 2024 intrusions.

## Recommended actions for Australian healthcare organisations

- Require strong identity verification, such as a callback to a number on file or manager confirmation, before help desk staff reset passwords or MFA.
- Limit who can register new MFA devices or change authentication methods for privileged accounts, and alert on such changes.
- Extend these help desk controls to outsourced IT and managed service providers that support your environment.
- Deploy phishing-resistant MFA for administrators and remote access, reducing the impact of credentials obtained through social engineering.
- Run social engineering exercises against help desk processes and use the findings to tighten procedures.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/british-scattered-spider-hacker-cyberattacks-on-tfl-ssm-health-care-sutter-health/)
