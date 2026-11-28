---
title: "Cybersecurity Software Fails to Detect Fifth of Brower-Based Phishing Attacks"
excerpt: "Menlo Security's 2026 Browser Threat Report found one in five phishing links that enterprise users engaged with went undetected by legacy URL filtering, as attacks move to the browser session layer."
date: 2026-06-10
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/cybersecurity-fails-to-detect/"
---
## What happened

Menlo Security's 2026 Browser Threat Report, published on 9 June, found that one in five phishing attacks targeting enterprise browser users went completely undetected by the tools meant to stop them.

The research draws on telemetry from millions of active browser sessions in Menlo's enterprise customer environments between 1 January and 31 March 2026. It found that one in five phishing links that users actually engaged with were missed by legacy URL filtering.

Menlo argues that attackers are getting into organisations through the browser session layer. Email, SaaS applications, collaboration tools, AI assistants, financial systems and credential managers now mostly run inside a browser, but many enterprise security products were not designed to monitor or control activity at that layer.

"The tools most enterprises rely on are performing exactly as designed. That is the problem. None of them were built to operate at the browser session layer, and that is precisely where attackers have learned to live," said Menlo Security CEO Bill Robbins.

Menlo is a browser security vendor, so its conclusions align with its commercial interests. The underlying observation that phishing has adapted to the browser is consistent with other industry reporting.

## Technical and operational significance

The report highlights how browser-based attacks exploit human behaviour as much as technical weaknesses. Users are used to interacting with CAPTCHAs, error messages and verification screens, and attackers have built social engineering around those habits.

ClickFix attacks are a clear example. The victim is persuaded to copy a command and paste it into a tool, such as the Windows Run dialog or a terminal, that is not usually monitored. Even where it is monitored, the action looks like a legitimate user doing something deliberate, so behaviour-based controls may allow it.

The practical implications are:

- URL filtering and reputation checks are not enough on their own, because many phishing pages are new, short-lived or hosted on legitimate platforms.
- Security teams have limited visibility into what happens within a browser session after a page loads.
- AI agents increasingly act on users' behalf inside browser sessions, which Menlo says extends the same exposure to automated activity.

## What it means for Australian healthcare

Clinical and administrative work in Australian health services increasingly happens in the browser. Examples include web-based EMR front ends, Microsoft 365, rostering, pathology and imaging portals, and procurement and payroll systems. A phishing page that captures a session or persuades a user to run a command can reach all of them.

A one-in-five miss rate for URL filtering, even as a vendor estimate, supports defence in depth that does not rely on detecting the malicious page. Phishing-resistant MFA prevents credential replay to look-alike sites. Application control and restricted administrative privileges, both part of the ASD Essential Eight, limit what a pasted command can do. Managed browser configurations can restrict risky extensions and enforce safe settings across clinical workstations.

## What to watch next

- Growth in ClickFix-style lures that move from the browser to the operating system through user action.
- Security tools and browser vendors adding controls at the session layer, including for AI agents.
- Independent research to test vendor-reported detection gaps.

## Recommended actions for Australian healthcare organisations

- Centrally manage browsers on corporate and clinical devices, enforcing safe settings, restricting extensions to an approved list and keeping browsers patched.
- Deploy phishing-resistant MFA so credentials entered on a phishing page cannot be replayed against real services.
- Use application control and block or restrict the Windows Run dialog, PowerShell and terminals for standard users, to defeat ClickFix-style "paste this command" attacks.
- Add ClickFix and fake CAPTCHA or verification lures to security awareness training, with a simple rule: never paste commands from a web page.
- Make sure browser activity, including downloads and credential use, feeds into security monitoring alongside email and endpoint telemetry.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/cybersecurity-fails-to-detect/)
