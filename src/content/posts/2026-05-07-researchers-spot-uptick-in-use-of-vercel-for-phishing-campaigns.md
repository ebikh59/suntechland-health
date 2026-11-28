---
title: "Researchers Spot Uptick in Use of Vercel for Phishing Campaigns"
excerpt: "Cofense reports low-skilled attackers are using Vercel's v0.dev AI tool to build and host convincing brand-impersonating phishing pages, including fake Microsoft sign-in pages, with just a few text prompts."
date: 2026-05-07
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/researchers-spot-uptick-vercel/"
---
## What happened

Email security firm Cofense has warned that low-skilled threat actors are increasingly abusing legitimate generative AI platforms to build convincing phishing campaigns. It singled out v0.dev, an AI tool from web application development company Vercel.

In a report published on 6 May, Cofense said that "with just a few text prompts v0[.]dev can create a fully functioning malicious site that completely resembles real-life brands." It stressed that Vercel had built "a genuinely useful and innovative platform" but that threat actors were abusing it.

According to Cofense, the attraction lies in ease of use, low cost and built-in hosting. The models can be tested for free before buying tokens, and Vercel's pro tier offers most features for a minimum of US$20 a month. Vercel also hosts the resulting sites, so attackers do not need their own infrastructure, and a site that is taken down is easy to rebuild. Integrations with services such as Telegram, AWS, Stripe and xAI add further options.

Cofense observed campaigns using fake Microsoft landing pages, Spotify-themed emails and fake job postings impersonating brands including Adidas, Ferrari, Louis Vuitton and Nike. It said other platforms, including DeepSite and BlackBox, are also being abused, though they offer less branding, hosting and integration than Vercel.

## Technical and operational significance

The key shift is that a phishing kit no longer has to be bought on a dark web forum and set up by someone with technical skill. In Cofense's words, the platform "combines all of the components of a phishing kit... into a simple interface requiring just a few natural language text prompts". The model also improves the pages with each attempt.

This has three practical effects for defenders:

- **Visual cues are becoming unreliable.** Cofense describes the resulting pages as virtually flawless, so training that teaches staff to spot poor design or spelling will catch fewer attacks.
- **Hosting on legitimate infrastructure helps pages evade blocking.** Pages served from a reputable platform's domains are harder to block by reputation alone, and quick re-creation after takedown shortens the effectiveness of blocklists.
- **The pool of capable attackers grows.** Lower cost and skill barriers mean more people can run credible credential-harvesting campaigns.

Cofense recommends that users look for signs other than page quality, such as an unusual sender domain revealed by hovering over the display name, and pressure tactics designed to create urgency. It also asks organisations to report malicious Vercel-hosted sites directly to Vercel for takedown.

## What it means for Australian healthcare

Most phishing aimed at health services targets Microsoft 365 credentials, and fake Microsoft landing pages are among the examples Cofense reported. A convincing sign-in page is often all an attacker needs to reach clinical correspondence, rosters or shared drives.

For Australian health organisations, the lesson is that the controls that matter are those that do not depend on staff judging how a page looks. These include phishing-resistant MFA, which will not complete on a look-alike domain, device-based access policies, and fast reporting and takedown processes. The ASD Essential Eight's MFA strategy, at higher maturity levels, addresses this directly.

## What to watch next

- Whether Vercel and similar platforms introduce stronger abuse detection or faster takedown for AI-generated impersonation sites.
- Further research on other AI site builders being adopted by phishing operators.
- Healthcare-specific lures, such as fake patient portals or pathology result pages, built with these tools.

## Recommended actions for Australian healthcare organisations

- Prioritise phishing-resistant MFA (FIDO2 keys or passkeys) for Microsoft 365 and other web-facing systems, so a perfect copy of a sign-in page cannot capture usable credentials.
- Update security awareness training to focus on sender domains, unexpected requests and urgency rather than visual quality, which AI-built pages now get right.
- Monitor for and alert on sign-ins from unfamiliar locations or devices immediately after a user reports clicking a suspicious link.
- Establish a process to report impersonation sites to hosting providers, including Vercel, and to share indicators through ACSC partnership channels.
- Consider whether newly registered or rarely seen domains and developer-platform subdomains should be filtered or flagged at the web proxy for clinical and administrative users.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/researchers-spot-uptick-vercel/)
