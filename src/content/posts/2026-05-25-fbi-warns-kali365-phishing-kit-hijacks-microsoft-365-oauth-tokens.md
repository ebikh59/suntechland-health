---
title: "FBI Warns 'Kali365' Phishing Kit Hijacks Microsoft 365 OAuth Tokens"
excerpt: "The FBI warns the Kali365 phishing-as-a-service kit tricks users into entering a device code on Microsoft's real sign-in page, giving attackers OAuth tokens and persistent Microsoft 365 access without MFA."
date: 2026-05-25
category: attacks-breaches
severity: High
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/fbi-kali365-phishing-kit-m365/"
---
## What happened

The FBI has warned that a new phishing-as-a-service (PhaaS) platform called Kali365 is circulating, mainly distributed through Telegram. First detected in April 2026, the platform offers subscribers AI-generated phishing lures, automated campaign templates and dashboards that track targeted individuals and organisations in real time.

According to the FBI advisory published on 21 May, Kali365 allows even technically unskilled attackers to capture Microsoft 365 OAuth tokens and bypass multi-factor authentication. The attacker never needs to intercept the victim's password.

In a typical attack, the victim receives a phishing email impersonating a trusted cloud productivity or document-sharing service. The email contains a device code and instructions to visit a legitimate Microsoft verification page and enter it. When the victim does so, they unknowingly authorise the attacker's device to access their account.

The attacker then captures OAuth access and refresh tokens and can use Outlook, Teams and OneDrive as the victim without a password or any further MFA challenge, establishing persistent access.

## Technical and operational significance

Device code phishing abuses a legitimate sign-in method. The OAuth device authorisation flow exists so that devices without a keyboard or browser, such as conference room systems and command-line tools, can be signed in from another device. The victim signs in on Microsoft's real site and completes MFA normally. The authorisation, though, is granted to the attacker's session.

This defeats several common defences at once:

- Users who have been taught to check the address bar see a genuine Microsoft URL.
- MFA is completed by the legitimate user, so it does not block the attack.
- Refresh tokens give long-lived access that survives a password reset unless sessions are explicitly revoked.

Packaging this technique as a subscription service with tracking dashboards lowers the skill needed to run it at scale.

The FBI recommended restricting or blocking the device code flow, using a Conditional Access policy that blocks it for all users with limited exceptions for required business processes, blocking authentication transfer from computers to mobile devices, and excluding emergency access accounts to avoid lockouts.

## What it means for Australian healthcare

Microsoft 365 is the core collaboration platform for many Australian health services, and Outlook, Teams and OneDrive commonly hold referrals, results, rosters and patient correspondence. A single compromised clinician or administrator account can expose a large amount of health information and serve as a launch point for internal phishing.

Most clinical and administrative staff have no legitimate reason to use the device code flow. Health services can therefore usually block it broadly with little operational impact. The main exceptions are specific shared devices or tooling, which can be listed and scoped.

Organisations should also note that phishing-resistant MFA does not fully address this technique on its own, because the legitimate user completes the sign-in. Blocking the flow and monitoring token use are the critical controls.

## What to watch next

- Updates from the FBI or Microsoft on Kali365's targets, infrastructure and any takedown action.
- Copycat kits offering device code phishing as a service.
- Microsoft changes to device code flow defaults or warnings in the sign-in experience.

## Recommended actions for Australian healthcare organisations

- Create a Conditional Access policy that blocks the OAuth device code flow for all users, with documented exceptions only for specific devices or service accounts that need it.
- Block authentication transfer where it is not required, and exclude break-glass emergency access accounts from these policies to avoid lockouts.
- Review sign-in logs for device code authentications and for tokens used from unfamiliar locations or devices, and alert on them.
- Make sure the incident response playbook for account compromise revokes refresh tokens and active sessions, not just the password.
- Brief staff that genuine IT teams will never ask them to enter a code on a Microsoft page because of an unexpected email or chat message.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/fbi-kali365-phishing-kit-m365/)
