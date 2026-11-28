---
title: "A Quarter of Healthcare Organizations Report Medical Device Cyber-Attacks"
excerpt: "A RunSafe Security survey of 551 healthcare professionals found 24% of healthcare organisations had cyber-attacks affect medical devices in the past year, with most incidents disrupting patient care."
date: 2026-04-29
category: attacks-breaches
severity: High
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/quarter-healthcare-medical-device/"
---
## What happened

One in four healthcare organisations (24%) experienced a cyber-attack that affected medical devices over the past year, according to RunSafe Security's 2026 Medical Device Cybersecurity Index. The security vendor surveyed 551 healthcare professionals in the United States, United Kingdom and Germany.

In 80% of the cases reported, the attacks had a "moderate" or "significant" impact on patients. RunSafe said this ranged from delayed imaging and postponed procedures to interruptions to critical care delivery.

The survey also points to persistent exposure from legacy equipment: 44% of respondents said they use devices with known, unpatched vulnerabilities, and 28% admitted to operating devices that are past end-of-support.

The findings were published as device manufacturers themselves came under attack. Medtronic confirmed a data security incident after the extortion group ShinyHunters listed the company on its leak site in mid-April and claimed to have taken more than nine million records. Separately, Stryker was hit in March when the Iranian-sponsored Handala group wiped tens of thousands of corporate devices after gaining access to an Intune administrator account.

## Technical and operational significance

The headline figure matters less than what sits beneath it. Nearly half of the organisations surveyed knowingly run devices with unpatched vulnerabilities, and more than a quarter run devices the manufacturer no longer supports. Those devices typically cannot be patched on the hospital's own schedule, and some cannot be patched at all without revalidation by the manufacturer. They therefore rely on compensating controls such as network segmentation, strict access control and monitoring.

The survey also suggests security is moving earlier in the buying process. 84% of respondents said they include cyber security requirements in vendor requests for proposal, 82% said they have deployed or are piloting runtime exploit protection, and 56% said they had rejected a device at procurement because of cyber security concerns, up from 46% the previous year.

AI is adding a new layer of risk. 57% of organisations said they have adopted AI-enabled or AI-assisted medical systems, while 80% reported moderate to high concern about the cyber security risks of those technologies.

The Stryker incident is a reminder that the path to disruption does not have to run through a clinical device. Compromising a device-management administrator account was enough to wipe corporate endpoints at scale.

It is worth noting the limits of the data. This is a vendor-run survey of professionals in three countries, not an incident dataset, and it does not include Australian respondents.

## What it means for Australian healthcare

Australian hospitals face the same structural problem: long-lived clinical equipment, mixed vendor support, and networks that were rarely designed with device isolation in mind. The survey gives security and biomedical engineering teams useful evidence when arguing for device inventories, segmentation and procurement controls.

The Therapeutic Goods Administration publishes cyber security guidance for medical device manufacturers and for users of devices. Health services can use it alongside ACSC guidance to set expectations of vendors. That includes how quickly they supply patches, how long a device will be supported, and what logging and remote-access arrangements they require.

The Stryker example is directly relevant to any Australian organisation using Microsoft Intune or a similar endpoint-management platform. Administrator accounts for these tools can reach every managed device, so they warrant the same protection as domain administrator accounts.

## What to watch next

- Whether the Medtronic incident results in further disclosures about what data was taken and who was affected.
- Whether procurement rejections on security grounds continue to rise, which would put more pressure on manufacturers to support devices for longer.
- How health services govern AI-enabled clinical systems as adoption grows faster than confidence in their security.
- Any updates to TGA or ACSC guidance on device security and end-of-support management.

## Recommended actions for Australian healthcare organisations

- Build and maintain a complete inventory of connected medical devices, recording firmware versions, known vulnerabilities and manufacturer end-of-support dates.
- Place clinical devices on segmented network zones with tightly limited inbound and outbound traffic, and monitor those zones for unexpected connections.
- Treat endpoint-management and device-management administrator accounts as privileged: require phishing-resistant MFA, use dedicated admin accounts and alert on bulk wipe or reset actions.
- Write cyber security requirements into device procurement, including patch timelines, minimum support periods, software bills of materials and secure remote-support arrangements.
- Add AI-enabled clinical systems to the clinical-technology risk register and review their data flows, vendor access and update processes before deployment.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/quarter-healthcare-medical-device/)
