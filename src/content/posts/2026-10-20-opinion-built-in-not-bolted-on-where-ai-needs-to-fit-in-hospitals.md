---
title: "Opinion: Built in, not bolted on: where AI needs to fit in hospitals"
excerpt: "Niru Rajakumar argues hospitals should judge AI by the workflow around it, not the task it speeds up, and treat integration, identity, permissions and audit as governance issues from the start."
date: 2026-10-20
category: ai-healthcare
severity: Low
tags: [automated, healthcare-security, australia]
author: SunTechLand Staff
source: "https://www.pulseit.news/new-zealand-digital-health/opinion-built-in-not-bolted-on-where-ai-needs-to-fit-in-hospitals/"
---
## What happened

In a Pulse+IT opinion piece, Niru Rajakumar warns that, as hospitals adopt more AI, technology meant to reduce workload risks "simply adds another system to an already fragmented environment".

Hospitals are being offered "an extraordinary number of AI tools" for clinical documentation, pre-admission screening, decision support, coding and administration. Many can demonstrate useful capability. The problem, Rajakumar writes, is that "hospitals do not operate as a collection of individual tasks". A clinician's work crosses departments, systems and stages of the patient journey, so a tool that makes one task faster does not necessarily make the workflow more efficient.

As hospitals move from experimentation to wider deployment, the piece argues they need to become "much more interested in what happens on either side of the model".

## Technical and operational significance

Rajakumar uses ambient clinical documentation as an example. AI can listen to a consultation and draft notes for the clinician to review. But if the clinician then has to switch applications, review the draft and transfer it into the patient record, "we have automated part of the documentation task while leaving much of the surrounding workflow untouched".

Similarly, an AI pre-admission risk assessment is "only the beginning". It needs the right patient information, has to reach the right clinician in time, and must explain why a patient was flagged so the next step can be taken without searching across systems. Hence the piece's central recommendation: "The unit of evaluation should increasingly be the workflow, rather than the AI task."

The integration argument is directly relevant to security. If every new AI capability brings "its own interface, identity requirements, data connections and workflow", hospitals risk adding a new layer of fragmentation. Rajakumar poses practical questions:

- Can the tool use existing information without unnecessary duplication?
- Can its output appear where someone is already working?
- Can identity, permissions and audit requirements be handled "without creating parallel processes"?

The piece states plainly that "as AI moves closer to clinical work, integration cannot be separated from governance". Hospitals need to know what patient information an AI capability can access, who authorised that access, whether permissions match the person's role and context, where information is processed and stored, and when a person reviews or accepts AI output.

## What it means for Australian healthcare

Australian health services are rolling out ambient scribes, AI triage and coding tools at pace, often from multiple vendors. Each standalone tool typically adds a new copy of patient data, another set of credentials, another vendor connection and another audit trail to monitor. For security and privacy teams, that means a growing attack surface and more places where access controls can drift from clinical roles.

Rajakumar's workflow-first approach supports better security outcomes, not just productivity. Fewer parallel systems, identity integrated with existing directories, and outputs written back into the record of truth all reduce data sprawl and make access easier to govern.

## What to watch next

- How Australian and New Zealand hospitals evaluate AI tools at the workflow level as deployments scale.
- Vendor approaches to embedding AI within core clinical systems versus standalone applications.
- Guidance from digital health agencies on integration, identity and audit requirements for clinical AI.

## Recommended actions for Australian healthcare organisations

- Include integration, identity and audit requirements in AI procurement criteria, alongside clinical capability and productivity claims.
- Require AI tools to authenticate through the organisation's existing identity provider and honour role-based permissions from clinical systems.
- Map where each AI tool stores or processes patient information, and limit duplicate data stores outside the clinical record.
- Make sure AI-generated content that becomes part of care is written back to the patient record with a clear record of who reviewed and accepted it.
- Evaluate AI pilots on end-to-end workflow outcomes, including any new manual steps or workarounds that could create security or privacy gaps.

## Read More

[Read the full article at the original source →](https://www.pulseit.news/new-zealand-digital-health/opinion-built-in-not-bolted-on-where-ai-needs-to-fit-in-hospitals/)
