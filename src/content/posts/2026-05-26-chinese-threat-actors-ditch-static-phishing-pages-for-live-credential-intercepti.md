---
title: "Chinese Threat Actors Ditch Static Phishing Pages for Live Credential Interception"
excerpt: "Google researchers say Chinese-language phishing services, which list Australia among their top targets, have moved to live credential interception that captures one-time codes in real time to defeat MFA."
date: 2026-05-26
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/chinese-phishing-live-credential/"
---
## What happened

Google Threat Intelligence Group (GTIG) has warned that the Chinese-language phishing-as-a-service (PhaaS) market has grown rapidly in size and sophistication. In a report published on 25 May, GTIG said it had observed at least a dozen active PhaaS offerings in the Chinese underground. That is in addition to the "Lighthouse" SMS phishing kit, whose operators Google sued in November 2025.

GTIG said these services, many likely tied to the broader Asian criminal ecosystem, have largely moved away from static password harvesting towards real-time interception. Nearly all of the organisations they impersonate are non-Chinese, which suggests operators deliberately avoid domestic targets. **Australia is listed among the top targeted countries**, along with Japan, the United States, Hong Kong and the United Arab Emirates.

Unlike Russian-based PhaaS operations, which typically target customers of large organisations, the Chinese-language services cast a wider net and target the general public opportunistically.

## Technical and operational significance

GTIG highlighted several tactics:

- **Encrypted messaging delivery.** Lures are increasingly sent over Rich Communication Services (RCS) and Apple iMessage instead of traditional SMS. End-to-end encryption makes network-level filtering of malicious links much harder, and features such as read receipts and high-resolution media make messages look more convincing.
- **Live credential interception.** Credentials entered on a phishing page appear instantly on an attacker's administration panel. The attacker then triggers one-time passcode (OTP) requests and captures the codes from the victim seconds before they expire. GTIG said this allows attackers "to bypass multifactor authentication (MFA) instantly".
- **Digital wallet provisioning.** Stolen card details and OTPs are used to add victims' payment cards to digital wallets on attacker-controlled devices, enabling contactless payments and ATM withdrawals.
- **AI-generated pages.** The Darcula PhaaS platform, which GTIG links to the threat actor UNC5814, uses AI page generators and browser automation to clone legitimate websites. Because every page is unique, signature-based detection becomes increasingly ineffective.

Some operators also sell wider criminal services, including personal information, domain registration and hosting, money laundering and stolen card trading.

## What it means for Australian healthcare

The campaigns GTIG describes mainly target consumers and payment details rather than specific health organisations. They are still relevant to the sector in two ways.

First, healthcare staff are members of the public too. Their personal phones receive these messages, and many use the same devices for work authentication. Real-time OTP interception defeats SMS codes and app codes alike, so any work system protected only by one-time codes is exposed to the same technique.

Second, health services and health insurers are trusted brands that patients may expect to hear from about payments, refunds or appointments. Organisations should be prepared for impersonation of their brand and have a clear message for patients about how they will and will not make contact.

The ASD Essential Eight's guidance on phishing-resistant MFA is the strongest defence against real-time relay, because passkeys and security keys will not authenticate to a look-alike site.

## What to watch next

- Further legal or law enforcement action against Chinese-language PhaaS operators following Google's Lighthouse lawsuit.
- Whether Australian telcos and messaging platforms can introduce effective protections for RCS and iMessage phishing.
- Impersonation of Australian government health services and health insurers by these kits.

## Recommended actions for Australian healthcare organisations

- Replace SMS and one-time-code MFA with phishing-resistant methods (passkeys, FIDO2 keys) for staff, starting with privileged and remote access accounts.
- Tell staff that one-time codes should never be read out, forwarded or entered in response to an unexpected message, even one that appears to come from a known brand.
- Monitor for look-alike domains and impersonation of your organisation's brand, and arrange a takedown process with your registrar or a brand-protection provider.
- Publish clear guidance for patients on how your organisation communicates about payments and accounts, and how to report suspicious messages.
- Include smishing and messaging-app lures, not just email, in security awareness training and phishing simulations.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/chinese-phishing-live-credential/)
