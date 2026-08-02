---
title: "Health-ISAC Warns of Increasing ShinyHunters Healthcare Data Theft Attacks"
excerpt: "Australian healthcare providers are being warned of an increase in successful attacks by the ShinyHunters threat group, which conducts supply chain and identity attacks targeting cloud SaaS and storage platforms"
date: 2026-07-31
category: attacks-breaches
severity: High
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/health-isac-warning-shinyhunters-healthcare/"
---

Australian healthcare providers are being warned of an increase in successful attacks by the ShinyHunters threat group, which conducts supply chain and identity attacks targeting cloud SaaS and storage platforms. The group's focus is on cloud-scale data exfiltration, with initial access typically achieved by voice-based social engineering to reset passwords, MFA, or enroll new devices. This is a significant concern for Australian healthcare organisations, as they are required to protect sensitive patient information under the Privacy Act 1988 and Australian Privacy Principles. The Notifiable Data Breaches scheme also mandates that entities notify affected individuals and the Office of the Australian Information Commissioner in the event of a data breach. The ShinyHunters threat group's tactics, including vishing attacks on multiple employees to compromise Microsoft Entra accounts and exfiltrate company data from SaaS and internal platforms, highlight the need for robust cybersecurity measures. Implementing phishing-resistant MFA and requiring out-of-band identity proofing for any password or MFA reset can help break the attack chain and prevent SSO account takeover. Australian healthcare providers should also consider classifying SSO systems as Tier 0 assets and requiring MFA and compliant devices for accessing sensitive cloud services. The Australian Cyber Security Centre's guidance and the ASD Essential Eight provide a framework for healthcare organisations to improve their cybersecurity posture and protect against these types of attacks. By prioritising cybersecurity and implementing robust measures, Australian healthcare providers can reduce the risk of data breaches and protect sensitive patient information. The ShinyHunters threat group's demands for ransom payments to prevent stolen data from being leaked on the dark web also underscore the importance of having incident response plans in place. Under the SOCI Act, Australian healthcare organisations have a responsibility to protect sensitive information and respond quickly in the event of a cybersecurity incident. By taking proactive steps to improve cybersecurity, Australian healthcare providers can help prevent attacks and protect patient information.

## What Australian Healthcare Organisations Should Do

- Implement phishing-resistant MFA, such as FIDO2/WebAuthn security keys, for admins and high-risk groups to prevent MFA reset abuse
- Require out-of-band identity proofing for any password or MFA reset, or device reenrollment, to harden helpdesk and IAM support workflows
- Classify SSO systems as Tier 0 assets and require MFA and compliant devices for accessing sensitive cloud services, blocking legacy authentication and limiting administrative portals

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/health-isac-warning-shinyhunters-healthcare/)