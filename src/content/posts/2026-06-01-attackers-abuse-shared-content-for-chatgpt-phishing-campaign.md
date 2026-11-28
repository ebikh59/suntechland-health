---
title: "Attackers Abuse Shared Content for ChatGPT Phishing Campaign"
excerpt: "Push Security warns attackers are hosting fake ChatGPT outage pages on chatgpt.com shared-content links, reached through malicious ads, to push malware disguised as a desktop app download."
date: 2026-06-01
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/attackers-shared-content-chatgpt/"
---
## What happened

Push Security has warned that threat actors are delivering malware from phishing pages hosted on legitimate ChatGPT domains.

According to the vendor, attackers are abusing ChatGPT's code-rendering feature to build pages that spoof the ChatGPT brand. Victims are lured through malicious Google ads and search engine poisoning to a "fully designed, self-contained web page" with ChatGPT branding. It claims the service is down because of high traffic and urges visitors to download the desktop app to continue. Clicking "download" leads to a second phishing site that installs a malicious executable. Push Security said the payload has not been confirmed, though infostealer malware is suspected.

Because the first page is hosted on a chatgpt.com/s/ URL, most scanning tools trust it. The second page uses conditional rendering: it shows the fake download to real users but displays benign content to suspected security researchers and automated scanners.

Push Security described these as "InstallFix" attacks, a variant of the ClickFix family. A related campaign abuses ChatGPT's shared conversations feature to present a fake "Claude Code on Mac" installation guide attributed to "Apple Support", containing a curl command that downloads and runs malware. The vendor said it has seen both ChatGPT and Claude users targeted in this way.

## Technical and operational significance

Push Security argues these attacks exploit the fact that "AI tools have normalized command-line installation workflows for a population of users who lack the experience to distinguish a legitimate terminal command from a malicious one".

Several features make the campaign hard to stop:

- **Trusted hosting.** The first stage lives on a domain that organisations rarely block, because staff use it legitimately.
- **Search and ads rather than email.** Push Security said four out of five ClickFix attacks are now reached through search results rather than email, often with ads tightly targeted by victim type and geography. Email security controls therefore never see the lure.
- **Scanner evasion.** Conditional rendering means automated analysis can classify the infrastructure as harmless.
- **User-executed payloads.** When a user pastes a command into a terminal or runs a downloaded installer themselves, some endpoint controls treat it as legitimate user activity.

Push Security said the parallel ChatGPT and Claude variants suggest a shared playbook that is experimenting with platforms and social engineering approaches to see what works best.

## What it means for Australian healthcare

Staff across Australian health services are experimenting with AI assistants, often on their own initiative. Someone searching for a "ChatGPT desktop app" or an AI coding tool on a work device is a realistic target. If an infostealer runs on that device, it can capture browser-saved passwords and session cookies for clinical and corporate systems.

This is where the ASD Essential Eight's application control strategy matters most. Preventing unapproved executables and scripts from running on standard user workstations stops this class of attack, even when the user is fully convinced the download is legitimate. Restricting administrative privileges limits what a malicious installer can do.

Health services should also give staff an approved, easy way to get the AI tools they need. When the approved route is clear, staff are less likely to download tools from search results.

## What to watch next

- Action by AI providers to limit abuse of shared content and code-rendering features for phishing.
- Identification of the payload, which would clarify what data victims have lost.
- Expansion of InstallFix-style lures to other popular tools used in hospitals and practices.

## Recommended actions for Australian healthcare organisations

- Enforce application control on workstations so that unapproved executables, installers and scripts cannot run, in line with the Essential Eight.
- Provide approved AI tools through managed software deployment and tell staff not to install AI apps from search results or ads.
- Train staff never to paste commands from websites, chats or "installation guides" into a terminal or Run dialog unless IT has instructed them to.
- Use DNS or web filtering to block newly registered and known-malicious domains, and consider ad-blocking on corporate browsers to reduce malvertising exposure.
- Watch endpoint telemetry for unexpected curl, PowerShell or terminal activity started from a browser, and for infostealer indicators such as bulk access to browser credential stores.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/attackers-shared-content-chatgpt/)
