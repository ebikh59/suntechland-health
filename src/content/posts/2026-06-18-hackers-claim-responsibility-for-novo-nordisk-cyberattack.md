---
title: "Hackers Claim Responsibility for Novo Nordisk Cyberattack"
excerpt: "Novo Nordisk says attackers accessed some internal systems and took personal data, including pseudonymised clinical trial data. An extortion group claims it took over 1TB using secrets left in client-side code."
date: 2026-06-18
category: attacks-breaches
severity: High
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/novo-nordisk-cyberattack/"
---
## What happened

Danish pharmaceutical company Novo Nordisk has disclosed a cyberattack in which a threat actor accessed "a limited number of its internal systems" and exfiltrated certain personal data. The company described the incident in a breach notice dated 11 June 2026.

According to the company, the exposed clinical trial data was pseudonymised and included patient IDs, sex, year of birth, biomarkers, health and immunogenicity data, and lifestyle factors. Names were not exposed. Data on healthcare providers, including company names, contact details and WhatsApp details, was also involved. Novo Nordisk said core operations were unaffected and that it has yet to determine how many individuals are affected.

A cyber extortion group called FulcrumSec has claimed responsibility. According to HIPAA Journal, the group claims to have taken more than 1TB of data, demanded US$25 million (which was not paid), and leaked 264GB. It also claims to hold more than 163,000 employee records and data relating to 11,500 clinical trial patients, and says it is withholding about 1.05TB. FulcrumSec says it gained access using "secrets left in client-side JavaScript" on two subdomains, together with a GitHub token.

A second group, TheUSERS007, claims a separate breach of Novo Nordisk between 5 and 7 June 2026 with a US$50 million demand. Novo Nordisk has not confirmed this.

"It is currently unclear when the intrusion was detected or for how long hackers had access," HIPAA Journal reported.

## Technical and operational significance

If FulcrumSec's account is accurate, the initial access did not require a sophisticated exploit. Secrets such as API keys and tokens embedded in client-side JavaScript can be read by anyone who loads the web page. Combined with a GitHub token, they may give access to source code, build pipelines and connected cloud services.

The incident also shows the limits of pseudonymisation as a protection. Pseudonymised clinical trial records with year of birth, sex, biomarkers and lifestyle factors are not anonymous. Combined with other data, including the employee and provider information the attackers also claim to hold, re-identification may be possible for some participants.

Competing claims from two groups make it hard to establish the true scope. The company's own count of affected people is still pending.

## What it means for Australian healthcare

Australia hosts a large number of clinical trials, including many sponsored by global pharmaceutical companies, and Australian research sites hold participant data that flows to sponsors and contract research organisations. Trial sites and human research ethics committees should understand where participant data goes, how it is protected, and what notification arrangements apply if a sponsor is breached.

The reported access method is a lesson for every organisation that builds web applications, including hospitals, research institutes and digital health companies. Secrets should never be shipped in front-end code. Scanning repositories and deployed web assets for exposed credentials is cheap and catches this class of error.

Treating pseudonymised research data as sensitive health information, as the Privacy Act generally requires where re-identification is reasonably possible, is also the safer approach.

## What to watch next

- Novo Nordisk's final count of affected individuals and any regulator notifications in Europe and elsewhere.
- Whether FulcrumSec leaks the remaining data it claims to hold.
- Whether the second claimed breach by TheUSERS007 is confirmed.

## Recommended actions for Australian healthcare organisations

- Scan source code repositories and deployed web applications for exposed API keys, tokens and credentials, and rotate any found immediately.
- Never embed secrets in client-side code; use backend services or short-lived, narrowly scoped tokens instead.
- Protect GitHub and CI/CD tokens with least privilege and expiry, and monitor for their use from unfamiliar locations.
- Treat pseudonymised research datasets as sensitive health information, with access controls and breach response arrangements to match.
- For clinical trial sites, confirm sponsors' and CROs' security and breach notification commitments for participant data.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/novo-nordisk-cyberattack/)
