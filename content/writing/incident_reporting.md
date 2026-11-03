---
title: Why US AI Incident Reporting Laws Miss Almost Everything
subtitle: 
date: 2026-11-03
tags:
  - ai_governance
bibliography: content/bibliographies/incident_reporting.bib
---


**Why did OpenAI disclose so little, and so late, about the incidents its models caused? Because it didn’t have to**, OpenAI is simply not legally required to report any of them\[@arnold\_when\_2026\].

## The bar for reporting incidents is too high

Three US state laws currently require AI developers to report incidents: Illinois’ SB 315\[@noauthor\_illinois\_nodate\], California’s SB 53 \[@noauthor\_sb\_nodate\], and New York’s RAISE Act\[@noauthor\_ny\_nodate\]. But their thresholds are so high that none of the recent incidents qualify. To be reportable, an incident generally has to cause injury or death, or more than \$1 billion in damage (yes, a *billion*[^1]). **A model that escapes its sandbox and causes millions of dollars in damage, but hurts no one, doesn’t have to be reported under any of these laws.**

The laws also require developers to publish a safety framework explaining how they identify and respond to critical incidents. Not following the safety framework is a violation of the law, but the companies write these frameworks themselves. They can simply include what’s convenient for them to implement and use.

**In short, these laws aren’t built to catch the incidents we’re seeing.**

## What should change?

Researchers at GovAI have proposed some ideas\[@noauthor\_improving\_nodate\].

### Report the near misses

**Incidents that almost happened but were prevented last minute \- the “near-misses” \- can also be useful** and help identify which safeguards are weak\[@wei\_designing\_2026\]. US medical-device makers already have to report malfunctions that could have caused serious harm, even when no problem occurred. AI incidents should be treated similarly.

Anthropic publishes misuse reports that describe dozens of fraud and scam attempts, state-backed influence and surveillance operations, and cyberattacks on companies and critical infrastructure. Some could have been disastrous if successful: espionage targeting military intelligence in European governments, influence campaigns aimed at elections around the world, attempts to develop dangerous biological weapons, etc. **Yet Anthropic alone decides what to disclose. No independent body reviews its safeguards, so no one outside the company knows how good the safeguards are, how rigorously they’re tested, or how many incidents were never detected**.

**Near misses that could have caused serious harm should also be reported, and trigger an independent audit of the developer’s safeguards.**

### Investigate, don’t just disclose

Once an incident is reported, none of these laws requires anyone to investigate it, or requires the developer to improve its safety practices. They are **transparency laws**: their main goal is to make sure the state finds out. In the aviation sector, US law requires aircraft accidents to be investigated.

**AI incident laws should require independent post-incident audits and let the government commission an investigation whenever it deems necessary**. Investigations can establish what caused an incident, which safeguards were missing, whether the company was negligent, and how to prevent it from happening again. Illinois will require independent audits of new models starting in 2028, but those assess risks before release, they don’t investigate what went wrong after the fact.

### Preserve the evidence

Commercial planes are usually equipped with black boxes that record flight data and what was said in the cockpit to understand what happened in case of an accident. AI labs have no obligation of this kind. They should have to keep potentially relevant evidence for a set period. That includes things like logs, prompts, model weights and checkpoints, affected files, accessed material, and records of human decisions to stop or resume an agent. And because agents can tamper with these records themselves, any changes to them should be saved too.

## Conclusion

An AI system could cause millions of dollars in damage or come close to enabling a catastrophe, and yet the public may never hear about it! We need better AI incident reporting regulations with lower thresholds, that require independent investigations of incidents and near-misses.


[^1]: For more details on the reporting thresholds, I recommend reading [this article](https://www.lawfaremedia.org/article/when-reporting-an-ai-security-incident-is-not-mandatory). An earlier version of SB 53 required reporting for any loss-of-control incident that resulted in "damage to, or loss of, property", without any cost threshold\[@bauer-kahan\_assembly\_nodate\]. But that part was cut in a later version, probably under lobby pressure?


---

## Sources


[^ref]