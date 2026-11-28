---
title: "Minnesota Epilepsy Group; Campbell University; City of Middletown Announce Data Breaches"
excerpt: "Minnesota Epilepsy Group is notifying more than 80,000 patients of a network intrusion, while the City of Middletown and Campbell University report breaches involving health information."
date: 2026-06-26
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/minnesota-epilepsy-group-campbell-university-city-of-middletown-data-breaches/"
---
## What happened

Three US organisations have disclosed data breaches involving health information.

**Minnesota Epilepsy Group** is notifying 80,061 current and former patients. It identified suspicious activity on 7 April 2026, and the investigation found an unauthorised third party had accessed its network between 16 March and 10 April 2026. The file review concluded on 18 May, and letters began going out on 5 June. Exposed data, which varied by patient, included names, addresses, dates of birth, Social Security numbers, medical treatment information and health insurance information. Credit monitoring is being offered to those whose Social Security numbers were exposed. No threat actor has been named.

**The City of Middletown, Ohio** first identified an incident on 17 August 2025. Its network had been accessed between 29 July and 17 August 2025. It told the HHS Office for Civil Rights that the protected health information of 20,608 people was compromised, including names, addresses, Social Security numbers, driver's licence or government ID numbers, financial account information, and medical and health insurance information. HIPAA Journal said this "appears to have been a ransomware attack by the SafePay ransomware group", which listed the city on its leak site in September 2025 and later leaked the data.

**Campbell University** in North Carolina identified unauthorised access to a cloud-based data storage platform between 31 March and 1 April 2026, which it says was contained to that platform. At least 500 people's PHI is involved, but the total and the exact data types are still being determined. The university has reset passwords, created a new instance of the platform and strengthened access policies.

## Technical and operational significance

The three incidents show different paths to the same outcome. A specialist clinical practice had an intruder in its network for almost four weeks before detection. A municipal government holding health information through its services was hit by ransomware. A university's cloud storage platform was accessed directly.

Two recurring problems appear. One is dwell time: in the Minnesota case, the attacker was present for weeks before suspicious activity was noticed. The other is the time needed to review exfiltrated files. Middletown took about nine months from detection to finishing its data review, delaying notification to affected people.

Cloud storage platforms are an increasingly common target. They often hold large volumes of sensitive files with access controlled only by account credentials.

## What it means for Australian healthcare

Specialist practices, local councils delivering community health services, and universities with health clinics or research data all hold sensitive health information in Australia too, often with smaller security teams than large hospitals.

Faster detection is the most valuable improvement for these organisations, whether through a managed detection and response service or well-tuned alerting. Knowing in advance where health information is stored also shortens the time needed to assess a breach under the Notifiable Data Breaches scheme.

## What to watch next

- Final counts and data types for the Campbell University incident.
- Whether a threat actor claims the Minnesota Epilepsy Group intrusion.
- Further SafePay activity against public-sector organisations.

## Recommended actions for Australian healthcare organisations

- Use managed detection and response or 24/7 monitoring to reduce dwell time, especially in smaller practices without in-house security teams.
- Secure cloud storage platforms with phishing-resistant MFA, least-privilege sharing and alerts on unusual bulk downloads.
- Maintain a data map of where health information is stored, so affected individuals can be identified quickly after a breach.
- Include councils, universities and other non-traditional health data holders in sector threat-sharing and awareness programmes.
- Test incident response plans regularly, including the steps needed to complete a breach assessment within Notifiable Data Breaches timeframes.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/minnesota-epilepsy-group-campbell-university-city-of-middletown-data-breaches/)
