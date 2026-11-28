---
title: "NSW Health server targeted in cyber incident"
excerpt: "NSW Police are investigating a breach of a NSW Health server declared a major incident. Police believe about 4GB was taken from the Oral Health Fee For Service Scheme website, mainly about dental providers."
date: 2026-11-04
category: attacks-breaches
severity: High
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.itnews.com.au/news/nsw-health-server-targeted-in-cyber-incident-630096?utm_source=feed&utm_medium=rss&utm_campaign=iTnews+News+feed"
---
## What happened

NSW Police's Cybercrime Squad is investigating an alleged data breach at NSW Health after being alerted at about 1pm on Friday 30 October. Detectives are working under Strike Force Civic with NSW Health and Cyber Security NSW. The incident was confirmed publicly on Wednesday 4 November.

A Cyber Security NSW spokesperson said the breach affected "an isolated server within NSW Health" and had been declared a major incident. NSW chief cyber security officer Marie Patane said it was classed as major under the NSW Cyber Security Incident Emergency Sub Plan, and that no other NSW government agencies had been affected.

According to The Medical Republic, NSW Police believe around 4GB of data was taken from the NSW Health Oral Health Fee For Service Scheme website. Detective Superintendent Matt Craft said the data related to third-party health providers, mainly dentists, and involved a "significant amount of personal identification information". eHealth NSW chief executive Richard Taggart described it as "a small number of details for third-party health providers". He said the security alerts were automatic and the site was taken down manually.

Officials have been consistent on patients. "No patient data has been impacted at this time nor is any patient data currently at risk from this limited cyber breach," Cyber Security NSW said. Health Minister Ryan Park said no service had been compromised, while cautioning that in a live investigation things "can and may and often do... change".

## Technical and operational significance

A user calling themselves "ByteToBreach" posted on a hacking forum on 3 November claiming responsibility, according to Cyber Daily and The Medical Republic. The post claimed about 70GB and 100,000 documents dating from 2020 onwards, obtained through a "misconfigured subdomain". It also claimed a wider intrusion was prevented when the server crashed, and that no ransom was being sought. **These claims are unverified** and conflict with the police estimate of around 4GB.

The incident fits a familiar pattern for large health systems. The weak point was reportedly not the core clinical environment but a peripheral, web-facing service supporting an administrative programme. Such systems often handle personal information about providers, staff or patients and may receive less security attention than flagship clinical platforms.

Commentators have questioned the word "isolated". The key questions for the investigation are whether the server had any network path to other systems and what credentials or data it held that could enable further access.

## What it means for Australian healthcare

For the dental and other providers affected, the immediate risk is misuse of their personal identification information, for example in targeted phishing, impersonation or identity fraud. None of the coverage reviewed says whether affected providers have been notified or what support will be offered. Affected individuals would expect that under the Notifiable Data Breaches principles that guide public-sector practice.

For other health services, the lesson concerns attack surface. State health systems run many program-specific websites, portals and subdomains, often built at different times by different teams or vendors. A single misconfigured or forgotten service can become the entry point, even when core systems are well protected.

The decision on when to announce the breach was influenced by the police investigation, according to the Health Minister. Health organisations should plan in advance how criminal investigations will interact with their notification obligations and communications.

## What to watch next

- Whether investigators confirm the scope of data taken and reconcile the 4GB and 70GB figures.
- Notification of affected providers and any guidance on protective steps.
- Findings on how the server was accessed and whether it connected to other NSW Health systems.

## Recommended actions for Australian healthcare organisations

- Maintain a complete inventory of web-facing domains, subdomains and program websites, including those run by vendors, and retire or secure forgotten services.
- Regularly scan internet-facing assets for misconfigurations and exposed data, and include peripheral administrative portals in penetration testing.
- Segment web-facing servers from internal networks and limit the credentials and data they hold to what each service needs.
- Monitor hacking forums and leak sites for claims mentioning your organisation, using threat intelligence services where available.
- Prepare breach notification and support processes for third parties such as contracted providers and staff, not just patients, and agree in advance how to coordinate with police investigations.

## Read More

[Read the full article at the original source →](https://www.itnews.com.au/news/nsw-health-server-targeted-in-cyber-incident-630096?utm_source=feed&utm_medium=rss&utm_campaign=iTnews+News+feed)
