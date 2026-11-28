---
title: "Okanogan Behavioral Healthcare Settles Class Action Data Breach Lawsuit"
excerpt: "Okanogan Behavioral Healthcare has settled a class action over a May 2024 network intrusion that exposed Social Security numbers and treatment information of 26,429 clients."
date: 2026-06-26
category: attacks-breaches
severity: Low
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/okanogan-behavioral-healthcare-settles-data-breach-settlement/"
---
## What happened

Okanogan Behavioral Healthcare, a behavioural health provider in Okanogan County, Washington, has agreed to settle a class action over a 2024 data breach.

According to HIPAA Journal, the provider identified a network intrusion on 15 May 2024. The investigation found unauthorised access between 13 and 15 May 2024. Notifications began on 23 August 2024, and 26,429 people were affected. The exposed information included client names, contact information, dates of birth, Social Security numbers, driver's licence and other ID numbers, medical diagnosis and treatment information, and health insurance information.

The case, Doe v. Okanogan Behavioral Healthcare, was filed in the Superior Court of Washington for the County of Okanogan. The provider "denies wrongdoing and liability".

Under the settlement, class members can claim:

- Ordinary losses of up to US$300 and extraordinary losses of up to US$5,000, or
- An alternative cash payment anticipated to be US$50, or
- Two years of credit monitoring.

The provider will also cover attorneys' fees and expenses, notice and administration costs, and a service award for the class representative. The claims deadline and final approval hearing were both set for 3 September 2026. No threat actor or vulnerability has been identified.

## Technical and operational significance

The intrusion was short: about two days from first access to detection. That is faster than many healthcare breaches, but it was still long enough for an attacker to reach data on more than 26,000 clients, including the identity information most useful for fraud.

Behavioural health records are among the most sensitive in healthcare. Their exposure can affect people's employment, relationships and wellbeing, and can discourage people from seeking care. Even settlements with modest individual payments signal that organisations will bear costs well beyond the immediate incident response.

The combination of Social Security numbers with diagnosis and treatment information makes this kind of data particularly valuable to criminals.

## What it means for Australian healthcare

Australian mental health and community health services often operate with limited IT budgets, yet hold some of the most sensitive health information in the system. A two-day intrusion can expose an entire client base if data is stored centrally without segmentation or strong access controls.

Data minimisation is a practical protection. Services should consider whether they need to retain identity document numbers, and for how long, and whether older client records can be archived offline. Under the Privacy Act, organisations must destroy or de-identify personal information they no longer need, which also reduces breach impact.

Class actions after data breaches are increasingly common in Australia, and smaller providers should not assume they are too small to be pursued.

## What to watch next

- Final approval of the Okanogan settlement.
- Continued attacks on behavioural and mental health providers.
- Regulatory and legal expectations for protecting sensitive health records.

## Recommended actions for Australian healthcare organisations

- Apply the ASD Essential Eight baseline, including MFA, patching, backups and application control, as a minimum for community and mental health services.
- Retain identity document numbers only where legally required, and destroy or de-identify client records no longer needed.
- Segment client record systems from general corporate IT, and restrict access to staff involved in care.
- Use 24/7 monitoring, directly or through a managed service, to detect intrusions within hours.
- Prepare trauma-informed breach notification and support processes for clients of sensitive services.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/okanogan-behavioral-healthcare-settles-data-breach-settlement/)
