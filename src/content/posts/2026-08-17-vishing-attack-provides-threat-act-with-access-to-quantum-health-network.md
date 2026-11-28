---
title: "Vishing Attack Provides Threat Act with Access to Quantum Health Network"
excerpt: "Healthcare navigation firm Quantum Health says a single vishing call gave attackers network access and let them steal patient data, as two other US providers disclose data theft incidents."
date: 2026-08-17
category: attacks-breaches
severity: High
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/quantum-health-precision-imaging-centers-heart-america-data-breaches/"
---
## What happened

Quantum Health, a US healthcare navigation company serving self-insured employers, has disclosed a data breach that began with a vishing (voice phishing) call on 29 May 2026. The caller tricked a user into giving the attacker network access.

According to HIPAA Journal, the attacker had access from 29 May to 1 June and acquired files, and a network disruption occurred on 1 June. On 8 June, the company confirmed that exfiltrated data included names, contact details, dates of birth, Social Security numbers, diagnosis and treatment information, prescriptions, insurance details and claims data. The number of people affected has not been disclosed.

No threat group has been named, and no ransomware group has claimed the attack. HIPAA Journal noted that the tactics are "commonly used by the ShinyHunters threat group"; this is a comparison, not an attribution.

The same report covered two other incidents:

- **Heart of America Medical Center** (Rugby, North Dakota) detected suspicious activity around 12 June 2025 and determined on 15 September 2025 that files containing names, Social Security numbers and medical records had been exfiltrated. Notifications followed a vendor review completed in May 2026. The Embargo ransomware group claimed the attack and about 800GB of data.
- **Precision Imaging Centers** (Florida) identified suspicious activity on 7 May 2026, after an unauthorised party copied files. It reported the breach to OCR with a placeholder figure of 501 individuals while the review continues.

## Technical and operational significance

Vishing is now one of the most effective ways into organisations. A caller impersonating IT support, a vendor or a colleague can persuade a user to approve an MFA prompt, install remote-access software or reveal credentials. Unlike email, a phone call bypasses email filtering entirely and puts real-time social pressure on the target.

The Quantum Health timeline shows how quickly a single successful call can turn into large-scale data theft. The attacker had network access for about three days, long enough to locate and take files containing claims and clinical data.

The Heart of America case shows a different problem: the long gap between detection and notification. Determining exactly whose data was in exfiltrated files took months of vendor review, delaying notification to affected patients by more than a year.

## What it means for Australian healthcare

Australian health services are just as exposed to voice-based social engineering. Help desks that reset passwords or MFA over the phone, staff who receive calls purporting to be from IT, and contact centres all present opportunities. Attackers can easily find staff names and roles online.

Effective defences combine process and technology. Process means strict caller verification and call-back procedures for any request involving access or credentials. Technology means phishing-resistant MFA that cannot be approved on someone else's behalf, and restricting remote-access tools to approved, managed software.

Preparing for faster data-review processes after exfiltration, including knowing in advance where sensitive data is stored, helps organisations meet Notifiable Data Breaches timeframes.

## What to watch next

- The number of individuals affected by the Quantum Health breach once reported to regulators.
- Any group claiming the Quantum Health attack or leaking its data.
- Final counts for Heart of America and Precision Imaging Centers.

## Recommended actions for Australian healthcare organisations

- Require help desk staff to verify callers' identities through an independent channel before resetting passwords, MFA or access.
- Tell all staff that IT will never ask them to approve an MFA prompt, read out a code or install remote-access software during an unsolicited call.
- Block unapproved remote monitoring and management tools, and alert when they are installed or run.
- Deploy phishing-resistant MFA, starting with help desk, IT administrator and remote access accounts.
- Map where sensitive patient data is stored ahead of time, so exfiltrated files can be reviewed and affected people notified quickly.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/quantum-health-precision-imaging-centers-heart-america-data-breaches/)
