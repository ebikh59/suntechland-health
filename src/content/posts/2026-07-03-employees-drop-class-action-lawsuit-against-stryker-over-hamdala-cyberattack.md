---
title: "Employees Drop Class Action Lawsuit Against Stryker Over Hamdala Cyberattack"
excerpt: "Employees have dropped their class action against Stryker over the Hamdala cyberattack that reportedly wiped 12PB of data from about 200,000 devices, after Stryker found no evidence their data was compromised."
date: 2026-07-03
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/employees-drop-class-action-lawsuit-against-stryker-cyberattack/"
---
## What happened

Current and former employees of medical technology company Stryker have voluntarily dismissed their class action lawsuit over a March 2026 cyberattack by the Iranian hacktivist group Hamdala (also reported as Handala).

According to HIPAA Journal, the attack saw about 50TB of data stolen and 12PB erased across roughly 200,000 devices, causing weeks of disruption. The article said Hamdala targeted Stryker in response to US and Israeli military action in Iran. Stryker announced the attack on 11 March 2026.

Eight employees filed lawsuits within 48 hours of the announcement, and the cases were consolidated as In re Stryker Corporation Cyberattack Litigation in the US District Court for the Western District of Michigan. Stryker moved to dismiss on 22 June 2026 for lack of standing, saying its forensic investigation had found no evidence that the plaintiffs' data was compromised. Business email addresses of two plaintiffs were found, but no personal information.

The plaintiffs voluntarily dismissed the case on 29 June 2026, and Judge Hala Jarbou signed an order dismissing it without prejudice. The suits can be refiled if Stryker later finds that personal information was compromised.

Stryker reported the attack to the SEC. At the time of the article, no notice had been sent to the HHS Office for Civil Rights or state attorneys general, and the number of affected individuals had not been stated.

## Technical and operational significance

Earlier reporting on the Stryker attack said the attackers wiped devices after gaining access to a Microsoft Intune administrator account. The scale of destruction shows how much damage an attacker can do with control of a device-management platform. Wiping 200,000 endpoints is an outage that no backup strategy for individual devices can quickly reverse.

The case also illustrates a pattern in data breach litigation. Lawsuits are often filed within days of an announcement, before forensic investigations are complete. If the company later shows the plaintiffs' data was not affected, the cases may be dropped. That can change if further investigation finds personal data was exposed.

The motive matters too. Hacktivist groups aligned with state interests may aim to destroy rather than extort, so paying a ransom is not an option and recovery depends entirely on resilience.

## What it means for Australian healthcare

Destructive attacks are a real risk for Australian health services, whether from hacktivists reacting to geopolitical events or from criminals. Endpoint management platforms such as Intune, and identity platforms more broadly, are high-value targets because they can affect every device at once.

Health services should treat device-management administrator accounts as top-tier privileged accounts and protect them accordingly. They should also make sure clinical services can continue if a large number of workstations become unusable at once, for example through downtime procedures, spare devices and rapid re-imaging capability.

Medical technology suppliers are part of the healthcare supply chain. A disruption at a major device maker can affect product supply, support and servicing for hospitals.

## What to watch next

- Whether Stryker's investigation identifies compromised personal information, which could lead to refiled lawsuits and regulatory notifications.
- Further attacks by Hamdala or similar groups on healthcare and medtech companies.
- Industry guidance on protecting device-management platforms from destructive misuse.

## Recommended actions for Australian healthcare organisations

- Protect Intune and other endpoint-management administrator accounts with phishing-resistant MFA, privileged access workstations and just-in-time elevation.
- Require multi-person approval for bulk destructive actions such as remote wipe or reset, where the platform supports it, and alert on them.
- Plan for mass endpoint loss in business continuity, including downtime procedures and rapid re-imaging capacity.
- Monitor geopolitical developments for heightened hacktivist risk, and raise alert levels during relevant events.
- Ask critical medtech suppliers about their resilience against destructive attacks and their plans to maintain supply and support.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/employees-drop-class-action-lawsuit-against-stryker-cyberattack/)
