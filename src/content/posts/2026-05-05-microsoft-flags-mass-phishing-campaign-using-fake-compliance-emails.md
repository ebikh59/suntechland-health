---
title: "Microsoft Flags Mass Phishing Campaign Using Fake Compliance Emails"
excerpt: "Microsoft researchers tracked a phishing campaign that hit more than 35,000 users at 13,000 organisations with fake conduct-review emails, using a fake Paubox encryption banner and token-stealing sign-in pages."
date: 2026-05-05
category: attacks-breaches
severity: High
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/microsoft-phishing-fake-compliance/"
---
## What happened

The Microsoft Defender Research team identified a large-scale credential theft campaign that targeted more than 35,000 users across 13,000 organisations. The activity ran on 15 and 16 April 2026. It mainly targeted US companies but was detected in organisations across 26 countries.

The emails posed as internal compliance or regulatory communications. Subject lines included "Internal case log issued under conduct policy", and the messages claimed a "code of conduct review" had been opened, sometimes quoting organisation-specific names. Recipients were told to open a "personalised attachment". The attached PDF contained a "Review Case Materials" link that started the credential-harvesting flow.

To appear legitimate, the messages claimed to come from an authorised internal channel. They also displayed a green banner saying the email had been encrypted with Paubox, a legitimate service associated with HIPAA-compliant communications.

Victims who clicked were taken through several staged pages, including a Cloudflare CAPTCHA presented as session validation. Microsoft said this was likely intended to defeat automated analysis and sandboxes. Victims were then routed, based on device type, to a fake Microsoft sign-in page. That page performed an adversary-in-the-middle (AiTM) session hijack to steal authentication tokens. Microsoft said the chain resembled device code phishing but confirmed only the AiTM component.

## Technical and operational significance

Three features make this campaign notable.

First, the lure is aimed at people's anxiety rather than their curiosity. An unexpected misconduct review creates urgency, and the repeated time-bound prompts in the messages reinforce it.

Second, the attackers borrowed the visual trust markers of secure healthcare communications. Staff who regularly receive encrypted email from patients, insurers or partners may be conditioned to treat a "this message was encrypted" banner as a sign of safety.

Third, AiTM phishing steals the session token after the user completes MFA, so push notifications and one-time codes do not stop it. Once the token is captured, the attacker can access the mailbox and connected services as the user until the session is revoked.

The multi-stage path, with CAPTCHAs, status messages and device-based routing, is designed to wear down automated scanning while reassuring the human victim. Email filtering alone is therefore unlikely to catch every message.

## What it means for Australian healthcare

Microsoft 365 is widely used across Australian hospitals, primary health networks and private practices, and compromised clinical or administrative mailboxes routinely hold patient information. An account taken over this way can be used to read and export correspondence, send internal phishing from a trusted address, or set up payment-redirection fraud.

The campaign's compliance framing would translate easily to Australian settings, for example fake AHPRA notifications, internal HR investigations or privacy complaint reviews. Health services should assume similar lures will appear locally.

The ASD Essential Eight is clear that MFA must be phishing-resistant at higher maturity levels. AiTM campaigns are the practical reason why: codes and push approvals can be relayed, whereas FIDO2 security keys and passkeys are bound to the legitimate site.

## What to watch next

- Further Microsoft reporting on whether the device code phishing component of the chain is confirmed.
- Reuse of trusted security-service branding, such as encryption or e-signature banners, in other campaigns.
- Copies of this compliance-review lure appearing in Australian organisations, including sector-specific variants.

## Recommended actions for Australian healthcare organisations

- Move privileged users first, then all staff, to phishing-resistant MFA (FIDO2 security keys, passkeys or Windows Hello for Business), in line with the higher Essential Eight maturity levels.
- Use Conditional Access to require compliant or managed devices for access to Microsoft 365, and enable token protection where licensing allows, to limit the value of stolen session tokens.
- Review Exchange Online Protection and Defender for Office 365 settings, including Safe Links and Safe Attachments, against Microsoft's recommended baselines.
- Add misconduct, compliance-review and "encrypted message" lures to phishing simulations, and give staff a fast, blame-free way to report suspicious messages.
- Prepare a playbook for suspected token theft that revokes sessions, resets credentials, checks inbox rules and app consents, and reviews sign-in logs for unfamiliar locations.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/microsoft-phishing-fake-compliance/)
