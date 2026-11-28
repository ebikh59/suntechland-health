---
title: "Study of Healthcare Websites Shows Widespread and Risky Use of Tracking and Analytics Tools"
excerpt: "A scan of 59 major US hospital and clinic websites found 73% running advertising or marketing trackers even when visitors' browsers signalled an opt-out, with 75 different tracking tools in use."
date: 2026-07-10
category: health-it-security
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/study-healthcare-websites-tracking-analytics-tools-2026/"
---
## What happened

A study by web analytics vendor Piwik PRO and automated audit platform Verified Data has found widespread use of tracking and analytics tools on major US healthcare websites. The findings are published in a report titled "Are healthcare companies one audit away from a compliance crisis?"

The researchers scanned the websites of 59 major US hospitals and clinics for tracking scripts, cookies, advertising pixels and consent systems. According to HIPAA Journal:

- 73% of sites had active advertising or marketing trackers even with the Global Privacy Control (GPC) opt-out signal enabled.
- 69% used marketing or advertising cookies.
- 75 unique tracking tools were identified, including Google Analytics, Meta Pixel, Microsoft Advertising and session replay tools.

The authors suggest the gap between the 73% and 69% figures indicates some trackers operate without cookies.

The study did not test whether protected health information was actually disclosed to third parties. Piwik PRO cited more than US$100 million in settlements from 2023 to 2025 over healthcare tracking tools, and breaches linked to such tools at Advocate Aurora Health, Kaiser Permanente, Novant Health and Atrium Health.

"The challenge today is scope creep," said Piwik PRO's Magdalena Pawlitko.

## Technical and operational significance

Tracking pixels and analytics scripts can send information to third parties every time a page loads or a visitor clicks. This can include the page address, search terms, form interactions and identifiers. On a healthcare website, a URL alone may reveal that someone is researching a condition, booking with a specialist or logging into a patient portal.

The "scope creep" problem describes how this happens. Marketing teams add tags through tag managers, new campaigns bring new pixels, and over time tracking spreads to pages it was never meant to be on, including appointment booking and portal login pages. Session replay tools, which record visitors' interactions, are particularly risky on pages where people type health information.

The GPC finding matters because it shows many sites are not honouring a clear, machine-readable opt-out signal from visitors' browsers.

## What it means for Australian healthcare

Australian hospitals, clinics, telehealth providers and private health insurers use the same analytics and advertising tools. Under the Privacy Act, health information is sensitive information, and disclosing it to advertising platforms without consent can breach the Australian Privacy Principles. The OAIC has signalled interest in online tracking, and privacy reform discussions have included stronger protections around targeted advertising.

Health organisations should assume their websites carry more tracking than marketing teams realise, and audit them regularly. The highest-risk areas are booking flows, symptom checkers, condition pages, patient portals and any page with forms.

## What to watch next

- Further litigation and regulatory action over healthcare website tracking in the US.
- Australian privacy reforms affecting online tracking and targeted advertising.
- Adoption of privacy-focused analytics and consent tools by healthcare providers.

## Recommended actions for Australian healthcare organisations

- Audit all websites and portals for tracking pixels, analytics scripts, session replay and third-party cookies, including tags added through tag managers.
- Remove advertising pixels and session replay from booking, portal, symptom checker and condition-specific pages, and anywhere users enter health information.
- Configure consent management so tracking does not load until consent is given, and honour browser opt-out signals such as Global Privacy Control.
- Put governance around tag management: require privacy review before new tags are added and assign an owner for ongoing audits.
- Assess whether past tracking disclosed health information to third parties, and seek privacy advice on any notification obligations.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/study-healthcare-websites-tracking-analytics-tools-2026/)
