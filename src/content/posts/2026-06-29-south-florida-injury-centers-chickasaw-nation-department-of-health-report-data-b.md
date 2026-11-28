---
title: "South Florida Injury Centers; Chickasaw Nation Department of Health Report Data Breaches"
excerpt: "South Florida Injury Centers reports a hacking breach claimed by the Kairos group, while the Chickasaw Nation Department of Health found an employee snooped on 1,607 patients' records for almost five months."
date: 2026-06-29
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/south-florida-injury-centers-chackasaw-bation-doh-data-breach/"
---
## What happened

Two US healthcare organisations have reported breaches with very different causes.

**South Florida Injury Centers**, which has clinics in Tamarac and Port Saint Lucie, has reported a hacking-related breach affecting up to 1,525 patients to the HHS Office for Civil Rights. Few details have been released. According to HIPAA Journal, the attack appears to have been carried out by Kairos, a financially motivated group that claims to have exfiltrated 45GB of data. Kairos listed the practice on its leak site on 7 April 2026 with sample data that appeared to include redacted patient information. Possible data types include names, contact details, driver's licence numbers, Social Security numbers and medical histories. The ransom was not paid, and Kairos has leaked the data.

**The Chickasaw Nation Department of Health** in Oklahoma identified an insider privacy incident on 22 April 2026. A single employee had accessed patient records without authorisation between 1 December 2025 and 22 April 2026. The records of 1,607 patients may have been accessed, including names, ages, dates of service, tribal affiliations, reasons for visits and clinical information such as laboratory and radiology orders. There was no evidence that full Social Security numbers were viewed. "The website notification about the privacy incident does not state the actions that have been taken against the employee," HIPAA Journal noted.

## Technical and operational significance

The South Florida case is typical of attacks on small and medium practices. Extortion groups target organisations they expect to have weaker defences, take data, and publish it if no ransom is paid. For a small practice, even a "small" breach of 1,500 patients can be devastating, both to patients and to the business.

The Chickasaw Nation case highlights insider risk. The employee had legitimate access to clinical systems and used it to view records without a care-related reason for almost five months before being detected. The data involved, including tribal affiliation and reasons for visits, is highly personal and potentially stigmatising.

Long detection times for insider snooping are common because the access itself looks normal. Detection depends on analysing access patterns rather than blocking access.

## What it means for Australian healthcare

Both risks apply directly in Australia. Small and specialist practices are attractive targets for extortion groups and often lack dedicated security staff. Insider misuse of patient records, including by staff looking up family, neighbours or high-profile patients, is a well-known problem in Australian health services and can be a notifiable data breach.

For organisations serving Aboriginal and Torres Strait Islander communities, the Chickasaw Nation case is a reminder that data about cultural identity and community membership needs particular care and culturally appropriate responses if a breach occurs.

## What to watch next

- Whether South Florida Injury Centers confirms the scope of data leaked by Kairos.
- Action taken against the Chickasaw Nation employee and any changes to access monitoring.
- Continued targeting of small practices by extortion groups.

## Recommended actions for Australian healthcare organisations

- Enable regular, automated auditing of patient record access, with alerts for patterns such as viewing records without an appointment or care relationship.
- Remind staff periodically that record access is logged and monitored, and that inappropriate access leads to disciplinary action.
- For small practices, adopt the ASD Essential Eight basics (MFA, patching, backups and application control) and consider a managed security service.
- Monitor leak sites through threat intelligence services, so you learn quickly if your organisation's data is published.
- Develop breach response approaches that are culturally appropriate for the communities you serve, including Aboriginal and Torres Strait Islander patients.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/south-florida-injury-centers-chackasaw-bation-doh-data-breach/)
