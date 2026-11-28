---
title: "Machine ‘unlearning’ exposes gaps in governance"
excerpt: "Australian Institute for Machine Learning researchers warn that health services are deploying AI systems that cannot reliably remove the influence of patient data once it has been used to train them."
date: 2026-08-19
category: ai-healthcare
severity: Medium
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/australian-digital-health/machine-unlearning-exposes-gaps-in-governance/"
---
## What happened

Australian health services are deploying AI systems that are largely unable to remove the influence of patient data once it has been used to train them, according to researchers from the Australian Institute for Machine Learning (AIML), as reported by Pulse+IT.

AIML researchers Dr Anthony Porter and Associate Professor Emily Kirkpatrick say that "machine unlearning", the ability to modify a trained model so that it no longer reflects specific data, exposes gaps in how health AI is governed.

*Pulse+IT's full article is behind a subscriber paywall. The details of the researchers' analysis below are limited to its public summary; the technical context draws on published research on machine unlearning.*

## Technical and operational significance

When a model is trained on patient records, information from those records is embedded in the model's parameters. Deleting the original records from a database does not remove their influence on the model. In some cases, models can memorise and reproduce fragments of training data.

Published research on machine unlearning describes the problem clearly:

- **Full unlearning is expensive.** Retraining a model from scratch without the data in question is the only guaranteed way to remove its influence, and for large models that can have an enormous computational cost.
- **Approximate methods are incomplete.** Techniques exist to reduce the influence of specific data without full retraining, but none offers a complete, verifiable solution.
- **Removal can have side effects.** A University of Oxford study found that removing patient records can change how models treat subpopulations, which could lead to biased clinical decisions.

This creates a governance gap. Privacy obligations, patient expectations and consent withdrawal all assume that data can be removed or stop being used. With trained models, that assumption may not hold.

## What it means for Australian healthcare

Australian Privacy Principle 11.2 requires organisations to destroy or de-identify personal information they no longer need. Patients may also withdraw consent for some uses of their data. If patient data is used to train or fine-tune AI models, health services need to know whether and how they could meet those obligations for the model itself, not just the underlying records.

That points to choices before training, not after. These include using de-identified or synthetic data where possible, being clear in consent processes about AI training, keeping records of exactly which data was used to train which model version, and contracting with vendors about whether customer data is used to train shared models.

## What to watch next

- Publication of the AIML researchers' detailed recommendations.
- Regulatory guidance on AI training data under Australian privacy law and reform.
- Practical advances in verifiable machine unlearning for clinical models.

## Recommended actions for Australian healthcare organisations

- Decide and document whether patient data may be used to train or fine-tune AI models, and under what consent or legal basis.
- Prefer de-identified or synthetic data for model development, and assess re-identification risk before use.
- Keep records linking each model version to the datasets used to train it, so the impact of removal requests can be assessed.
- Contractually prohibit vendors from using your patient data to train shared or commercial models unless explicitly agreed.
- Include AI models in data retention and privacy impact assessments, not just the underlying databases.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/australian-digital-health/machine-unlearning-exposes-gaps-in-governance/)
