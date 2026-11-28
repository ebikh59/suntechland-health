---
title: "Aitkin County Health and Human Services Data Breach Affects 83,000 Individuals"
excerpt: "Aitkin County Health and Human Services says a phishing compromise of three staff email accounts exposed data on 83,114 people, as a lab reports a LockBit 5 claim and a dermatology practice's records turn up in a dumpster."
date: 2026-07-10
category: attacks-breaches
severity: Medium
tags: [automated, healthcare-security]
author: SunTechLand Staff
source: "https://www.hipaajournal.com/aitkin-county-health-human-services-data-breach/"
---
## What happened

Three US incidents show the range of ways health information is exposed.

**Aitkin County Health and Human Services** in Minnesota has notified 83,114 people of a data breach. On 8 April 2026, an employee email account was found sending phishing emails. The investigation determined that three employee email accounts had been accessed without authorisation between 7 and 8 April 2026, and the contents of one account were downloaded. The exposed information included names, addresses, dates of birth, Social Security numbers, service and provider details, case and PMI numbers, medical and diagnosis information, medications, insurance IDs, MnCHOICES assessment form data and claims information. Some data about people not connected to the county was also found in one of the accounts.

**Decatur Diagnostic Laboratory** in Alabama has reported a hacking incident involving data exfiltration to the HHS Office for Civil Rights, with a placeholder figure of at least 500 people. Exposed data includes names with dates of birth, Social Security numbers, driver's licence numbers, medical record numbers or patient codes. The notice does not say when the breach was detected or how long access lasted. The LockBit 5 ransomware group has claimed the attack, though HIPAA Journal noted this is not confirmed.

**Gem State Dermatology** in Boise, Idaho, is investigating after patient billing paperwork and what appeared to be thousands of microscope slides were found in a dumpster about three miles from the practice on 8 July 2026. The practice has collected the material but "is unable to confirm how any patients have been affected".

## Technical and operational significance

The Aitkin County case shows how much data can accumulate in a mailbox. Caseworkers' email accounts held years of assessment forms, claims information and medical details, and downloading one mailbox exposed tens of thousands of people. The compromised account was also used to send further phishing, a common next step that spreads the attack to contacts.

The laboratory case is a reminder that claimed ransomware attacks often come with sparse official detail, leaving patients uncertain about the scale and timing of exposure.

The dermatology case shows that physical records and specimens remain a breach risk. Microscope slides can be linked to patients and carry diagnostic information.

## What it means for Australian healthcare

Email remains one of the largest stores of unstructured health information in Australian organisations, especially in community, social and disability services where staff exchange assessments and reports by email. Phishing-resistant MFA, mailbox retention limits and moving sensitive documents into controlled systems reduce the impact of a compromised account.

Secure destruction of paper records and specimens is equally important. Disposal contractors, storage arrangements and practice relocations are common points of failure.

## What to watch next

- Final counts for the Decatur Diagnostic Laboratory and Gem State Dermatology incidents.
- Further activity by LockBit 5 against healthcare providers.
- Regulator responses to improper disposal of physical health records.

## Recommended actions for Australian healthcare organisations

- Deploy phishing-resistant MFA on email and alert when accounts suddenly send large volumes of outbound mail.
- Set retention limits for mailboxes, and move assessments, reports and other sensitive documents into access-controlled record systems rather than leaving them in email.
- Block or alert on bulk mailbox exports and downloads from unfamiliar devices or locations.
- Use certified secure destruction for paper records and specimens, with chain-of-custody documentation, and audit disposal contractors.
- Include physical records and specimen handling in privacy training and breach response plans.

## Read More

[Read the full article at the original source →](https://www.hipaajournal.com/aitkin-county-health-human-services-data-breach/)
