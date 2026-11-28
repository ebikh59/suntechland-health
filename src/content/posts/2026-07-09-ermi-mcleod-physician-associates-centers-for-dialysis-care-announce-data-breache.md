---
title: "ERMI; McLeod Physician Associates; Centers for Dialysis Care Announce Data Breaches"
excerpt: "Breaches at orthopaedic equipment maker ERMI, McLeod Physician Associates and Centers for Dialysis Care have affected more than 101,000 people, including one traced to a server being decommissioned."
date: 2026-07-09
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/ermi-mcleod-physician-associates-centers-for-dialysis-care-data-breaches/"
---
## What happened

Three US healthcare organisations have disclosed breaches affecting more than 101,000 people combined, according to HIPAA Journal.

**ERMI LLC**, a Georgia-based orthopaedic medical equipment manufacturer, is notifying 74,074 patients. Unauthorised access was identified on or around 14 August 2025. The investigation found access had begun on 15 February 2025, roughly six months earlier. A manual review of the data was completed on or around 17 April 2026. The exposed information includes names together with Social Security numbers, driver's licence or veteran IDs, passport numbers, usernames and passwords, financial and payment card data, and medical and health insurance information. Credit monitoring is being offered to those whose Social Security numbers were affected.

**McLeod Physician Associates** in Florence, South Carolina, is notifying up to 19,553 patients. On 5 March 2026, a suspicious file was found on a Dillon Family Medicine server that was being decommissioned. The investigation found unauthorised access on 17 and 18 October 2025, limited to that one server, with no McLeod Health systems involved. Exposed data includes names, dates of birth, Social Security numbers, and care information such as diagnoses, medications, test results and images. Notifications began on 4 June 2026.

**Centers for Dialysis Care** in Shaker Heights, Ohio, detected suspicious activity around 20 March 2026 and confirmed unauthorised access on 11 April 2026. Up to 8,000 current and former patients and employees are affected. Data includes names, dates of birth, Social Security numbers, medical, treatment and insurance information, and tax or financial information.

No threat actor has been named in any of the three incidents.

## Technical and operational significance

The ERMI case shows how long an attacker can go undetected: about six months of access before discovery, followed by eight months of data review before notification. The inclusion of usernames and passwords among the exposed data adds risk, because credentials can be reused elsewhere.

The McLeod case highlights a frequently overlooked risk: systems being retired. Servers awaiting decommissioning often still hold patient data but may no longer be patched, monitored or properly secured. The suspicious file was found only during decommissioning, about four and a half months after the access occurred.

The dialysis provider's breach involved both patients and employees, a reminder that health organisations hold sensitive staff data as well.

## What it means for Australian healthcare

Australian health services regularly migrate and retire clinical systems, often after mergers, practice acquisitions or system replacements. Legacy servers and databases left running "just in case" can hold years of patient data with diminishing security attention.

Medical equipment suppliers like ERMI also hold patient data in their own systems. Health services that refer patients to equipment providers should understand how those suppliers protect the information.

## What to watch next

- Whether threat actors claim any of the three incidents.
- Regulatory scrutiny of long detection and notification times.
- Litigation following the larger ERMI breach.

## Recommended actions for Australian healthcare organisations

- Keep systems awaiting decommissioning patched, monitored and access-restricted until data has been securely migrated and the system is fully retired.
- Securely wipe or destroy storage from decommissioned servers, and record evidence of disposal.
- Reduce dwell time with continuous monitoring and threat hunting, particularly on servers holding large volumes of patient data.
- Avoid storing credentials in plain text in files or databases; use a managed secrets or password vault.
- Include employee data in breach response planning, alongside patient data.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/ermi-mcleod-physician-associates-centers-for-dialysis-care-data-breaches/)
