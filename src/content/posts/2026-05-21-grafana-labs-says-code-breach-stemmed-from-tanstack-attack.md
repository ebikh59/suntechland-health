---
title: "Grafana Labs Says Code Breach Stemmed from TanStack Attack"
excerpt: "Grafana Labs says attackers downloaded its codebase after the TanStack npm supply-chain attack stole GitHub workflow tokens from its CI/CD pipeline, and one missed token gave them access to its repositories."
date: 2026-05-21
category: attacks-breaches
severity: Medium
tags: [automated, security-news]
author: SunTechLand Staff
source: "https://www.infosecurity-magazine.com/news/grafana-labs-code-breach-tanstack/"
---
## What happened

Grafana Labs, the developer of the Grafana analytics and visualisation platform, has confirmed that a data breach and extortion incident stemmed from the "Mini Shai-Hulud" supply-chain campaign that compromised TanStack npm packages.

The company said on 17 May that an unauthorised attacker had downloaded its codebase after gaining access to its GitHub environment. In a later update, it said it first detected the malicious activity on 11 May and linked it to the TanStack attack.

Threat actors known as TeamPCP compromised dozens of TanStack npm packages with credential-stealing malware aimed at CI/CD environments. When a malicious package was released, Grafana's CI/CD pipeline automatically consumed it and the infostealer exfiltrated GitHub workflow tokens. Grafana said it "quickly rotated a significant number of GitHub workflow tokens, but a missed token led to the attackers gaining access to our GitHub repositories". A workflow it had initially considered unaffected turned out to be compromised.

Besides the codebase, the attackers took "internal operational information and other details", including business contact names and email addresses. Grafana said there is no indication that customer production systems, operations or the Grafana Cloud platform were compromised. Its response included rotating automation tokens, enhanced monitoring, auditing all commits since 11 May, and hardening its GitHub security.

## Technical and operational significance

TanStack said the attackers published 84 malicious versions across 42 @tanstack/* packages on 11 May. The infostealer targeted far more than GitHub Actions tokens. It also sought credentials for GitLab, CircleCI, AWS, Google Cloud, Azure, Kubernetes, HashiCorp Vault and package registries. The same campaign compromised OpenSearch npm versions, PyPI mistralai 2.4.6, PyPI guardrails-ai 0.10.1 and further @squawk packages.

What made the campaign especially dangerous is that TeamPCP compromised TanStack's own CI/CD pipeline. The malicious packages were therefore validly published and cryptographically signed, and checks that only verify a package's signature or origin would not have flagged them.

Grafana's experience illustrates the hardest part of supply-chain incident response: complete secret rotation. Rotating most tokens is not enough. A single missed workflow token was sufficient for the attackers to reach the source code.

## What it means for Australian healthcare

Grafana is widely used for infrastructure and application monitoring, including in health IT environments. On the information available, customers' production systems were not affected. However, the theft of source code can make it easier for attackers to find vulnerabilities later, so organisations running Grafana should keep up with the vendor's security advisories.

The broader lesson applies to any Australian health organisation, vendor or digital health start-up that builds software. Examples include patient portals, integration engines, mobile apps and analytics pipelines. Automated dependency updates in CI/CD pipelines can pull a compromised package straight into an environment holding cloud and deployment credentials. An attacker who obtains those credentials may reach systems that process patient data.

Health services that buy software should also consider this risk in procurement. They can ask vendors how they control build pipelines, pin dependencies and respond to upstream package compromises.

## What to watch next

- Whether TeamPCP publishes or misuses Grafana's stolen code, and whether vulnerabilities are found as a result.
- Further downstream victims of the Mini Shai-Hulud campaign as organisations finish their reviews.
- Moves by npm, PyPI and CI/CD platforms to make signed-but-malicious releases harder to publish.

## Recommended actions for Australian healthcare organisations

- Pin dependency versions and require review before CI/CD pipelines accept new package releases, rather than consuming the latest version automatically.
- Give CI/CD workflows short-lived, narrowly scoped credentials (for example OIDC federation instead of long-lived cloud keys), so a stolen token has limited reach and lifespan.
- When responding to a supply-chain compromise, inventory every secret that could have been exposed and verify each was rotated, rather than rotating only the obvious ones.
- Monitor source repositories for unusual clones, downloads and new access tokens, and alert on bulk repository access.
- Ask software vendors handling patient data to describe their build-pipeline security and how they detect and respond to upstream package compromises.

## Read More

[Read the full article at the original source →](https://www.infosecurity-magazine.com/news/grafana-labs-code-breach-tanstack/)
