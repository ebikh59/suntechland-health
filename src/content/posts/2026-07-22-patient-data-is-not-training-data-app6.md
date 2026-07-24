---
title: "Your Patient Data Is Not Training Data: The APP 6 Trap in Health AI"
excerpt: "The OAIC's AI guidance is blunt on the point Australian health providers keep getting wrong — collecting information for care does not give anyone permission to train a model on it."
date: 2026-07-22
category: ai-healthcare
severity: High
tags: [ai, privacy, australia, app6, oaic, healthcare-security]
author: SunTechLand Staff
---

There is an assumption running quietly through health AI procurement in Australia: that if a provider lawfully holds patient information, it can put that information into an AI system. The Office of the Australian Information Commissioner's AI guidance makes clear that this does not follow.

Health information collected to deliver care was collected for a **primary purpose**. Using it to train, tune or improve an AI model is almost always a **secondary purpose** — and Australian Privacy Principle 6 restricts secondary use unless an exception applies or the patient has consented.

This is the single most common compliance gap in Australian health AI right now.

## Why health providers are held to a higher bar

Health information is *sensitive information* under the Privacy Act 1988. That classification matters: sensitive information carries stricter consent requirements and narrower exceptions than ordinary personal information. The reasonable-expectations test that gives organisations some latitude elsewhere is much harder to satisfy when the data is a patient's medical history.

In October 2024 the OAIC published two AI guidance documents — one covering the development and training of generative AI models, the other covering the deployment of commercially available AI products. Both apply the existing APPs rather than inventing a new regime, and both emphasise accuracy, transparency, and heightened scrutiny of secondary use.

The practical translation for a health service: **the AI cannot use patient data to train its models unless you have a lawful basis for that disclosure.** Not a preference. A basis.

## "It's de-identified" is not the end of the conversation

The most common defence offered is de-identification. It deserves more scepticism than it usually gets.

De-identification is not a binary state — it is a function of the data, the context, and what else the recipient holds. Health datasets are unusually re-identifiable: a combination of postcode, date of birth, rare diagnosis and admission date can single out an individual with very few other clues. If information can reasonably be re-identified, it is still personal information and the APPs still apply.

Before relying on de-identification, a provider should be able to answer: who assessed it, against what re-identification risk, and how often is that assessment revisited as the vendor accumulates more data?

## Where this actually bites

Three patterns are worth checking in your own environment:

**The default-on vendor clause.** Many AI products include terms permitting the vendor to use customer data to improve their service. In a general SaaS contract that clause is unremarkable. Applied to a clinical dataset it is a disclosure of sensitive information for a secondary purpose.

**The pilot that never got a privacy assessment.** AI pilots often start as a clinician-led experiment and become business-as-usual without ever passing through privacy review. The obligations attached from the first record processed, not from the day it was formalised.

**The general-purpose chatbot.** Pasting a patient summary into a public generative AI tool to "help draft a referral" is a disclosure to a third party, frequently offshore, usually with reuse rights. It is also the single easiest way for a well-meaning clinician to create a notifiable breach.

## What to do about it

- **Map where patient data meets AI** — including shadow use of consumer tools, which is where most of the real exposure sits.
- **Read the reuse and training clauses** in every AI vendor contract, and negotiate them out where the data is clinical.
- **Decide your lawful basis before deployment**, not retrospectively. If you are relying on consent, work out how it is obtained, recorded and withdrawn.
- **Write the AI use policy** and tell staff plainly what may and may not be pasted into which tools.
- **Know your notification trigger** — if an AI disclosure goes wrong, the NDB scheme timelines start running whether or not anyone has worked out who owns the vendor relationship.

## One more thing coming

Privacy Act reform will require organisations to disclose automated decision-making in their privacy policies from **December 2026**. If AI is contributing to decisions that affect patients — triage prioritisation, risk scoring, eligibility — that disclosure obligation is now close enough to plan for rather than watch.

The underlying principle has not changed and is not complicated: information given to a clinician for care was given for care. Everything beyond that needs its own justification.

---

**References**

- [OAIC — Guidance on privacy and developing and training generative AI models](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models)
- [OAIC — Guidance on privacy and the use of commercially available AI products](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products)
- [OAIC — Australian Privacy Principles](https://www.oaic.gov.au/privacy/australian-privacy-principles)

*General information for Australian healthcare providers, not legal advice. Obtain your own advice on your specific circumstances.*
