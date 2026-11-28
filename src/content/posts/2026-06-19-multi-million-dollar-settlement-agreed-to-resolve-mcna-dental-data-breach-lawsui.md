---
title: "Multi-million-dollar Settlement Agreed to Resolve MCNA Dental Data Breach Lawsuit"
excerpt: "Dental benefits administrator MCNA has agreed to settle litigation over its 2023 LockBit ransomware attack, which exposed the health and identity data of nearly 8.9 million people."
date: 2026-06-19
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/mcna-dental-data-breach-settlement/"
---
## What happened

Managed Care of North America (MCNA Dental), a US dental benefits administrator, has agreed to settle class action litigation over a 2023 LockBit ransomware attack that exposed the protected health information of 8,923,662 people.

According to HIPAA Journal, the attackers gained access on 22 February 2023, exfiltrated data, and then deployed ransomware on 7 March 2023. Affected individuals were notified in late May 2023. The compromised information included names, contact details, Social Security numbers, driver's licence and government ID numbers, health information and health insurance information.

The breach led to 25 putative class actions, consolidated on 13 July 2023 as Crowe et al. v. Managed Care of North America in the US District Court for the Southern District of Florida.

Under the proposed settlement, which involves no admission of liability:

- Class members can claim documented losses of up to US$2,500 each, capped at US$250,000 in total.
- All class members can receive two years of medical data monitoring with a US$1 million identity theft reimbursement policy.
- MCNA has agreed to implement security improvements.
- Attorneys' fees of up to US$6.4 million, expenses of up to US$1.313 million and administration costs of up to US$2 million are provided for.

The settlement had not yet received preliminary approval, and "the total value of the settlement has not been made public".

## Technical and operational significance

The incident followed the double-extortion model that was standard for LockBit: data was taken first, then systems were encrypted. That gave the attackers two forms of leverage and meant that restoring systems from backups did not end the threat to the data.

The roughly two-week gap between initial access and encryption is typical. It is the window in which detection of unusual activity, such as reconnaissance, credential theft or large outbound data transfers, can prevent both data loss and encryption.

The settlement structure is also notable. The cap on documented loss payments is small relative to the number of people affected. Much of the value comes from monitoring and identity theft insurance, plus a commitment to improve security.

## What it means for Australian healthcare

Dental and allied health providers, and the benefits administrators and health funds that process their claims, hold large volumes of sensitive identity and health data. In Australia, private health insurers and claims processors present a similar concentration of risk.

Under the Notifiable Data Breaches scheme, organisations must assess and notify eligible breaches promptly. Class actions following data breaches are also becoming more common in Australia. Health organisations should expect that a large breach will bring regulatory scrutiny and litigation, and that the quality of their pre-breach security will be examined closely.

Detecting attackers during the window between initial access and encryption remains the most effective way to limit both harm and liability.

## What to watch next

- Preliminary approval and final terms of the MCNA settlement.
- Continuing disruption of LockBit and its successors by law enforcement.
- Growth of data breach class actions in Australia following major incidents.

## Recommended actions for Australian healthcare organisations

- Monitor for indicators that precede ransomware, such as new administrator accounts, credential dumping, remote management tools and large outbound transfers, and respond within hours.
- Use data loss prevention and egress monitoring to detect bulk exfiltration from systems holding member or patient data.
- Minimise retention of identity documents and government ID numbers, keeping only what is legally required.
- Maintain offline or immutable backups and test recovery of claims and patient administration systems.
- Prepare breach response plans that address notification, identity protection support for affected people, and potential litigation.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/mcna-dental-data-breach-settlement/)
