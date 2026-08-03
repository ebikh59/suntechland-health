---
title: "Hotel Wi-Fi Routers Compromised to Steal Corporate Login Credentials From Visitors"
excerpt: "A widespread DNS poisoning campaign is targeting hotels, conference venues, and the hospitality sector, with the aim of stealing corporate login credentials from visitors"
date: 2026-07-24
category: attacks-breaches
severity: High
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/hotel-wifi-dns-poisoning/"
---

A widespread DNS poisoning campaign is targeting hotels, conference venues, and the hospitality sector, with the aim of stealing corporate login credentials from visitors. This campaign, identified by cybersecurity analysts at ReliaQuest, involves compromising routers used to provide public Wi-Fi to visitors, which can then be used to redirect web traffic and funnel connections through attacker-controlled infrastructure. The attackers achieve initial access to these devices by exploiting exposed management interfaces, such as SSH, SNMP, and web administration consoles, as well as weak or reused admin login credentials. This means that users can be compromised without the need for a phishing link, a malicious attachment, or the attacker touching the device in any way. The attackers are targeting hotels and conference venues known to be used by traveling corporate employees, which could potentially give them access to a wide range of credentials that could be exploited to access sensitive information. Australian healthcare providers should be aware that any operator of a captive portal network, such as hospitals or medical facilities, faces a similar attack surface and should take steps to prevent DNS poisoning. Under the Privacy Act 1988 and Australian Privacy Principles, healthcare providers have a responsibility to protect the personal information of their patients, and a breach of this nature could have serious implications. The Notifiable Data Breaches scheme would also require healthcare providers to notify affected individuals and the Office of the Australian Information Commissioner in the event of a breach. The Australian Cyber Security Centre has issued guidance on how to prevent DNS poisoning, including enforcing always-on VPN with full-tunnel configuration and auditing proxy authentication logs for authentications from unknown hosts. By following the ASD Essential Eight and ACSC guidance, Australian healthcare providers can reduce the risk of a DNS poisoning attack and protect the sensitive information of their patients. The Security of Critical Infrastructure Act also highlights the importance of protecting critical infrastructure, including healthcare facilities, from cyber threats. Healthcare providers should take immediate action to review their cybersecurity measures and ensure they are taking all necessary steps to prevent a DNS poisoning attack.

## What Australian Healthcare Organisations Should Do

- Enforce always-on VPN with full-tunnel configuration for all corporate devices to prevent DNS poisoning
- Audit proxy authentication logs for authentications from unknown hosts to detect potential credential-harvesting activity
- Disable web proxy auto-discovery (WPAD) where not required to reduce the attack surface

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/hotel-wifi-dns-poisoning/)