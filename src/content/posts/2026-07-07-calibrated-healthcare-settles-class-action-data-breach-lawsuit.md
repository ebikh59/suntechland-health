---
title: "Calibrated Healthcare Settles Class Action Data Breach Lawsuit"
excerpt: "Calibrated Healthcare has settled class action claims over a February 2024 network intrusion, with a settlement class of 34,562, far larger than the 6,890 initially reported to regulators."
date: 2026-07-07
category: attacks-breaches
severity: Low
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/calibrated-healthcare-data-breach-settlement/"
---
## What happened

Calibrated Healthcare Systems, LLC and Calibrated Healthcare, LLC, US healthcare companies, have settled class action litigation over a 2024 data breach.

According to HIPAA Journal, the companies identified the incident on 26 February 2024. Unauthorised network access occurred on 25 and 26 February 2024. Data theft was not confirmed, but the company said it was likely. The compromised information included names, dates of birth, medical diagnosis and treatment information, and health insurance information. Notification letters were sent around 2 August 2024.

The breach report on the HHS Office for Civil Rights portal lists 6,890 individuals, but "there are 34,562 individuals in the settlement class".

Two lawsuits, Adams v. Calibrated Healthcare Systems, LLC and Holden v. Calibrated Healthcare, LLC, were consolidated in the US District Court for the Central District of California. Claims included negligence, invasion of privacy, breach of contract, and violations of California's Unfair Competition Law and Consumers Legal Remedies Act. The defendants deny all claims.

Under the settlement, class members receive two years of medical monitoring and identity theft insurance, plus a cash payment of between US$21.44 and US$28.68 depending on the number of valid claims. They can also claim up to seven hours of lost time at US$25 per hour (US$175 maximum) and documented losses of up to US$5,000. The settlement received preliminary approval, with the final fairness hearing set for 13 August 2026.

## Technical and operational significance

The gap between the number reported to regulators (6,890) and the settlement class (34,562) is notable. Initial breach counts are often estimates or placeholders, and the true scale emerges later as data reviews are completed or as litigation defines who was affected. Patients and regulators relying on early figures may underestimate an incident's impact.

The incident also illustrates the "likely but not confirmed" exfiltration problem. When logging is insufficient to prove what data left the network, organisations have to assume the worst for notification purposes. That increases the number of people notified and the potential liability.

The timeline was short, with access lasting about a day, but notification still took more than five months.

## What it means for Australian healthcare

Under the Notifiable Data Breaches scheme, organisations must notify when there are reasonable grounds to believe an eligible data breach has occurred, so uncertainty about exfiltration does not remove the obligation. Good logging, including network flow records, file access logs and cloud audit logs, can help establish what actually happened and avoid over- or under-notification.

Australian health providers should note that even short intrusions can lead to class-wide exposure and legal costs.

## What to watch next

- Final approval of the Calibrated Healthcare settlement.
- Further cases where settlement classes significantly exceed initial breach reports.
- Regulatory focus on the accuracy of initial breach notifications.

## Recommended actions for Australian healthcare organisations

- Retain network flow, file access and authentication logs long enough to determine what data was accessed or exfiltrated during an incident.
- Treat initial breach counts as provisional, and update regulators and affected individuals as reviews progress.
- Monitor for large outbound transfers from servers holding patient data, so exfiltration can be detected and confirmed.
- Complete breach assessments promptly and notify within Notifiable Data Breaches expectations, rather than waiting months.
- Review cyber insurance and legal support arrangements for class action risk following a breach.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/calibrated-healthcare-data-breach-settlement/)
