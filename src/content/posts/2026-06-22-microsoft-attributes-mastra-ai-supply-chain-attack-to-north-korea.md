---
title: "Microsoft Attributes Mastra AI Supply Chain Attack to North Korea"
excerpt: "Microsoft has attributed a supply-chain attack that poisoned more than 140 npm packages for the Mastra AI agent framework to North Korean state actor Sapphire Sleet, after a maintainer account was taken over."
date: 2026-06-22
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/mastra-ai-supply-chain-attack/"
---
## What happened

A supply-chain attack on Mastra, an open-source TypeScript framework for building AI-powered applications and agents, was carried out by North Korean hackers, according to Microsoft.

On 19 June, Microsoft Defender Security Research and Microsoft Threat Intelligence attributed the activity with "high confidence" to Sapphire Sleet. This North Korean state actor primarily targets the financial sector and is tracked by other researchers as APT38, BlueNoroff, Stardust Chollima and TA444. Microsoft based the attribution on infrastructure and post-compromise techniques consistent with earlier Sapphire Sleet activity.

More than 140 packages across Mastra scopes on the npm registry were affected. The attackers took over an npm maintainer account and used its publishing rights to release poisoned versions of Mastra that included a malicious dependency, easy-day-js.

The poisoned code disabled TLS certificate verification and contacted an attacker-controlled command-and-control server. That server delivered a malware payload able to run on Windows, macOS and Linux.

## Technical and operational significance

The malware had two goals. In keeping with many North Korean operations, it targeted cryptocurrency, checking for 166 wallet browser extensions including MetaMask, Phantom, Coinbase Wallet and Binance Wallet. It also collected browser history and carried out reconnaissance on infected machines, gathering the hostname, architecture, platform, user ID, installed applications and running processes.

Microsoft did not say how the maintainer account was compromised. It noted that Sapphire Sleet has a history of social engineering on LinkedIn against people in the financial, blockchain and cryptocurrency sectors.

The incident shows how AI development tooling has become an attractive supply-chain target. Frameworks for building agents are being adopted quickly, often by small teams experimenting with new technology, and they pull in large dependency trees. A single compromised maintainer account was enough to reach every developer and build system that installed an affected version.

Microsoft advised organisations to review their dependency trees for direct or transitive use of affected @mastra package versions, check for easy-day-js in node_modules or package-lock.json files across projects and CI/CD environments, and pin known-good versions. For mastra, version 1.13.0 and earlier are unaffected; for @mastra/core, version 1.42.0 and earlier are unaffected.

## What it means for Australian healthcare

Australian health services, research institutes and digital health companies are building AI assistants and agents, including for documentation, triage, scheduling and analytics. Those projects often run on developer workstations and cloud environments that hold credentials for systems containing patient data.

This campaign's payload was aimed at cryptocurrency and reconnaissance rather than health data. However, the reconnaissance it performed and its ability to run code on developer machines mean any affected environment should be treated as compromised until proven otherwise.

Health organisations should apply the same supply-chain discipline to AI projects as to production clinical software. That means knowing which open-source components are in use, controlling where they come from, and keeping development credentials away from production data.

## What to watch next

- Further details from Microsoft or npm on how the maintainer account was compromised.
- Additional AI framework and tooling packages targeted by state or criminal groups.
- npm registry measures to strengthen maintainer account security, such as mandatory phishing-resistant MFA for high-impact packages.

## Recommended actions for Australian healthcare organisations

- Search all projects and CI/CD environments for affected @mastra versions and the easy-day-js dependency, and pin known-good versions (mastra 1.13.0 or earlier, @mastra/core 1.42.0 or earlier) until fixed releases are verified.
- Rebuild any developer machine or build agent that installed an affected version, and rotate the credentials, tokens and keys that were present on it.
- Maintain a software bill of materials for internally built applications, including AI prototypes, so exposure to future package compromises can be assessed quickly.
- Keep AI development and experimentation environments separate from production systems and real patient data, using synthetic or de-identified data where possible.
- Require phishing-resistant MFA and least-privilege access for developers and for any package publishing accounts your organisation maintains.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/mastra-ai-supply-chain-attack/)
