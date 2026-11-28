---
title: "Flo Health; Google; Flurry to Pay $59.5M to Settle Privacy Lawsuit (Updated)"
excerpt: "Flo Health, Google and Flurry will pay $59.5M to settle claims that the Flo fertility app shared users' data through embedded SDKs without consent. A jury separately found Meta violated California privacy law."
date: 2026-06-18
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/flo-health-google-flurry-59-5m-settlement-privacy-lawsuit/"
---
## What happened

Flo Health, Google and Flurry have agreed to pay a combined US$59.5 million to settle a class action over the sharing of user data from the Flo period and fertility tracking app. Google will pay US$48 million, Flo Health US$8 million and Flurry US$3.5 million. Flo has also agreed to post a privacy notice on its website for one year after final approval.

The consolidated case, Frasco et al. v. Flo Health, Inc., Meta Platforms, Google LLC, and Flurry, Inc., is before Judge James Donato in the US District Court for the Northern District of California. It alleged that software development kits (SDKs) embedded in the app, which HIPAA Journal said has more than 38 million monthly users, shared user data with the defendants "without the knowledge or consent of app users".

Meta did not settle. A jury found that Meta violated the California Invasion of Privacy Act, and Meta intends to appeal.

The settlement covers app users from 1 November 2016 to 28 February 2019. Attorneys' fees of up to US$19,337,500 and expenses of up to US$3.6 million will come from the fund, and members of a California subclass will receive double the share of non-California residents. Preliminary approval has been granted, with a claims deadline of 15 October 2026 and a final fairness hearing on 29 October 2026.

## Technical and operational significance

SDKs are pre-built code libraries that developers add to apps for analytics, advertising, crash reporting and other features. They often send data back to the SDK provider automatically, and the app developer may not fully understand or control what is transmitted.

In a health app, that data can be highly sensitive. Events such as logging a period, a pregnancy or symptoms can reveal intimate health information when shared with analytics or advertising platforms, even without a name attached.

The case shows how significant the financial and reputational consequences of SDK data sharing can be, years after the conduct. The class period ended in 2019, and the settlement is only being finalised in 2026.

## What it means for Australian healthcare

Australian digital health developers, telehealth providers and health services that publish patient apps use the same kinds of SDKs. Under the Privacy Act, health information is sensitive information and generally cannot be disclosed to third parties without consent. Sharing it through an embedded analytics or advertising SDK is still a disclosure.

Organisations commissioning apps from developers should ask exactly which SDKs are included, what data each sends, and to whom. Privacy policies and consent flows should accurately describe that sharing. Health apps should be designed so that no sensitive events are sent to third-party analytics or advertising platforms.

The OAIC has been active on privacy in health and online services, and Privacy Act reforms are expected to strengthen protections further.

## What to watch next

- Final approval of the settlement and the outcome of Meta's appeal.
- Further litigation over SDKs and tracking in health and wellness apps.
- Australian Privacy Act reforms affecting the handling of sensitive information in apps.

## Recommended actions for Australian healthcare organisations

- Inventory all third-party SDKs and libraries in patient-facing apps, and document what data each collects and where it is sent.
- Remove or configure advertising and analytics SDKs so that no health-related events or identifiers are shared with third parties.
- Require app developers and vendors to disclose SDK data flows contractually and to notify you of any changes.
- Make sure privacy policies and consent screens accurately describe any third-party data sharing in plain language.
- Test apps periodically with network traffic analysis to verify what data they actually transmit.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/flo-health-google-flurry-59-5m-settlement-privacy-lawsuit/)
