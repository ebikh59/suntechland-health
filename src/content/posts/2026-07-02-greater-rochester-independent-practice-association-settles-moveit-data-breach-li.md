---
title: "Greater Rochester Independent Practice Association Settles MOVEit Data Breach Litigation"
excerpt: "Greater Rochester Independent Practice Association has agreed a $2.15M settlement over the 2023 MOVEit Transfer attacks by Cl0p, which hit about 2,700 organisations and almost 96 million people."
date: 2026-07-02
category: attacks-breaches
severity: Low
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/greater-rochester-independent-practice-association-moveit-data-breach-settlement/"
---
## What happened

The Greater Rochester Independent Practice Association (GRIPA) has agreed to a US$2.15 million settlement to resolve class action claims over its exposure in the May 2023 MOVEit Transfer attacks.

The breach resulted from a zero-day vulnerability in Progress Software's MOVEit Transfer file transfer product, exploited by the Cl0p group. HIPAA Journal described the group as Russian-speaking. The campaign affected about 2,700 organisations and almost 96 million people worldwide. GRIPA's compromised data included names, dates of birth, Social Security numbers, health and treatment information, health insurance information, pharmacy prescription information and prescriber information.

Four class actions against GRIPA were coordinated into the multidistrict litigation In re: MOVEit Customer Data Security Breach Litigation in the US District Court for the District of Massachusetts. Claims included negligence, negligence per se, implied contract, unjust enrichment and declaratory and injunctive relief.

After fees, administration costs and service awards, class members can claim up to US$2,500 for ordinary losses and US$10,000 for extraordinary losses, or an alternative one-time cash payment estimated at US$100, plus two years of credit monitoring. The settlement has preliminary approval, with the claims deadline and final fairness hearing set for 3 September 2026. GRIPA denies wrongdoing. Bank of America, Nuance Communications and Arietis Health have also settled MOVEit claims, while claims against Progress Software remain unresolved.

## Technical and operational significance

MOVEit remains one of the clearest examples of how a single vulnerability in a widely used file-transfer product can cause a mass breach. Cl0p did not need to target each victim individually. It exploited the flaw across thousands of internet-facing MOVEit servers in a short period and took data before most organisations knew there was a problem.

Managed file transfer tools are attractive targets because they are internet-facing by design and hold large volumes of sensitive files being exchanged with partners. In healthcare, that includes claims files, referrals, pathology results and data extracts for research or reporting.

The litigation timeline shows that legal consequences from a 2023 incident are still being resolved in 2026.

## What it means for Australian healthcare

Australian health services, insurers and their service providers use managed file transfer tools to exchange patient data with government agencies, payers and partners. Some were affected by MOVEit and similar campaigns.

These tools deserve the same priority as other internet-facing services under the ASD Essential Eight patching guidance, including the shortest timeframes when exploits are active. Organisations should also limit how long files remain on transfer servers, because data left in place after delivery is data available to steal.

Health services should also ask suppliers which file-transfer platforms they use to handle patient data on their behalf.

## What to watch next

- Final approval of the GRIPA settlement and other MOVEit settlements.
- Resolution of claims against Progress Software.
- New mass-exploitation campaigns against file-transfer and edge products.

## Recommended actions for Australian healthcare organisations

- Inventory managed file transfer tools used by your organisation and suppliers, and patch them as internet-facing systems under the shortest Essential Eight timeframes.
- Automatically delete files from transfer servers after successful delivery, rather than retaining them indefinitely.
- Restrict access to file-transfer interfaces by IP allow-listing or VPN where possible, and monitor for unusual downloads.
- Subscribe to vendor and ACSC advisories for file-transfer products and have an emergency patching process ready.
- Require suppliers handling patient data to report the file-transfer platforms they use and their patching practices.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/greater-rochester-independent-practice-association-moveit-data-breach-settlement/)
