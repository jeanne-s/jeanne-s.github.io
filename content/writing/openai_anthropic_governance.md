---
title: How OpenAI and Anthropic Are Governed
subtitle: Can they actually choose safety over money?
date: 2026-03-22
tags:
  - ai_safety
  - ai_governance
bibliography: content/bibliographies/openai_anthropic_governance.bib
---

<div class="substack-link"><a href="https://substack.com/home/post/p-191782312" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg> Read on Substack</a></div>

## Introduction

This post aims to explain in simple terms the **corporate governance of OpenAI and Anthropic**.

I started researching this topic because I wanted to understand who actually owns these labs, who can influence their strategy, and who has the power to make important decisions (such as whether to deploy a potentially dangerous model).

This piece is based only on public information and should be accurate as of March 2026\. If you spot any mistakes, please let me know.

## General Context

Both OpenAI and Anthropic’s founders believe that AI will have an immense impact on the world and that leading labs will possess an unprecedented amount of power \[@noauthor\_openai\_nodate; @noauthor\_long-term\_nodate\]. They also believe that AI could lead to catastrophic risks and that AI labs need to be held accountable to the broader society. To drive development, they need massive amounts of investments that they’re more likely to obtain if they make profits and can provide return on investments. So they created **custom governance structures designed to balance investors’ interests with the benefit of humanity** \[@cihon\_corporate\_2021; @noauthor\_long-term\_nodate; @simmerman\_anthropic\_2023\].

### Definitions

Before diving into the explanations, here are some useful definitions:

* The **shareholders** own the company (they literally “hold shares” in it).   
  * OpenAI and Anthropic organized several series of funding during which they issued new shares that investors purchased.  
  * Holding shares gives certain rights, such as receiving dividends, voting on decisions, and requesting information. The more shares a shareholder owns, the more influence it has during votes.  
  * In typical for-profit companies, shareholders can vote to **elect the board of directors**, and can **replace** it if it doesn't act in their interest. [^1]  
* The **board of directors** sets the strategic priorities and can appoint and replace senior executives.   
  * Board members have a **legal obligation** to act in the best interests of the company. This is called **fiduciary duty** *(more on that later)*.  
* The **senior executives** actually run the company (the CEO, CSO, CTO, etc.)  
* The **stakeholders** are anyone impacted by the company's decisions. They may or may not own shares. They include shareholders, employees, clients, suppliers, and in the case of AI labs, potentially humanity as a whole.

### The “Two-Entities” Structure

**Both OpenAI and Anthropic have a “two-entities” structure. They are both incorporated as for-profit companies, and exist alongside their respective nonprofit entities.**  

* **OpenAI Group PBC** is a **for-profit** entity. It develops OpenAI’s products, receives the profits, signs deals, gets investments, etc. The **OpenAI Foundation** is a **non-profit** that owns equity in the OpenAI Group PBC.   
* **Anthropic** is a **for-profit**. The **Long-Term Benefit Trust** is a **non-profit** that owns equity in Anthropic.

So there’s always a “main” company that actually runs the business, and a non-profit “parent” company that owns equity in the for-profit.

**What’s the point of the two-entities structure?** You can think of the nonprofit as one of the owners with a right to (somewhat) influence the for-profit which is the actual operating company. I’ll develop that more later on.

### Public Benefit Corporations

Both OpenAI and Anthropic are incorporated in Delaware as **Public Benefit Corporations (PBCs)**. A PBC is a for-profit company that legally commits to pursuing a stated public benefit alongside generating profit. Unlike a traditional corporation, which is primarily obligated to maximize shareholder value, **a PBC must consider its public benefit mission alongside shareholders' interests**. But it doesn't *have to* prioritize the mission over profits, it just can't ignore it entirely \[@noauthor\_evolving\_nodate\].

* Anthropic’s public benefit mission is to “responsibly develop and maintain advanced AI for the long-term benefit of humanity” \[@noauthor\_long-term\_nodate\].
* OpenAI’s public benefit mission is to “ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity” \[@noauthor\_openai\_nodate\].

**About the fiduciary duties.**  
The board of directors has a fiduciary duty to act in the company's best interest. But what does that mean in practice?

* In a traditional for-profit, "best interest" essentially means "maximize profits for shareholders". If a board makes a decision that obviously hurts investors financially, shareholders can sue them for breaching their fiduciary duty.  
* This is why the original nonprofit structure mattered. A nonprofit board can legally walk away from money, it has no shareholders to answer to.  
* A PBC board is in a more ambiguous position. It has to consider public benefit, but it doesn't have to prioritize it over profits. In practice, **when safety concerns and financial pressures conflict, it’s unclear what the PBC board should legally do**. As of 2016, “there is no guidance as to how boards with dual responsibilities to shareholders and other constituencies should balance those sometimes-competing interests in practice” \[@renholding\_gibson\_2016\] [^2], and “there have been no reported cases of a shareholder successfully suing to protect the public benefit mission.” \[@noauthor\_openai\_nodate-1\]. So **if a shareholder were to sue OpenAI or Anthropic, it’s unclear what the outcome would be.**

> [!note]- The PBC mission is hard to enforce
>
> **Anyone can sue PBCs for reasons unrelated to the benefit mission**, and Anthropic and OpenAI have already faced several of these (usually for copyrights). **However, suing them specifically for failing to pursue the public benefit mission is very hard!** The PBC statute is deliberately structured for this:
> * **No third-party can sue the PBC to enforce the public benefit purpose (not employees, customers, the public, NGOs, etc.)**. Only stockholders who own at least 2% of the company’s shares, or $2 million worth can sue \[@noauthor\_faq\_2020; @noauthor\_8\_nodate\]. **This means that only people who have strong financial incentives NOT to sue the PBC over mission nonenforcement can do so!**[^3]
> * **It seems very hard to prove the PBC failed, and very easy for the PBC to defend.** A plaintiff essentially has to prove one of two things \[@alexander\_public\_nodate\]:
>   * The directors completely abandoned one of the three interests (profit, public benefit, or broader stakeholder interest), not just did it poorly, but effectively ignored it altogether, or engaged in such negligible effort it amounts to "conscious disregard". Weak pursuit of the public benefit seems sufficient.
>   * The board made a trade-off that no rational person would ever make. **As long as a board can point to any plausible rationale for their balancing decision, they’re almost certainly protected**. It looks like it doesn’t have to be a good rationale, just a superficially reasonable one.

## OpenAI 

### History

**2015 \- OpenAI foundation as a non-profit**  
**OpenAI was founded in 2015 as a non-profit**, financed by donations, not investments \[@oudin\_governance\_2024\]. The reason was that as a non-profit, it could make decisions against investors' financial interests if it deemed that safer (for example, choosing not to release a model it considered unsafe). A traditional for-profit company couldn't do that without risking legal consequences.

**2019 \- Creation of a for-profit subsidiary (PBC), with capped-profits**  
Training large models requires enormous amounts of money, and a non-profit can't offer investors financial returns. So OpenAI struggled to attract funding and changed its structure.

* **It created a for-profit subsidiary company that could receive investments, while keeping the original nonprofit.**  
* OpenAI claims the nonprofit still controls the for-profit \[@noauthor\_evolving\_nodate; @noauthor\_our\_nodate\]: it appoints all OpenAI’s board members and can replace them regardless of investors' wishes, and investors can't sue the nonprofit board even if their interests are disregarded \[@oudin\_governance\_2024\].  
* But **the nonprofit lost two important capabilities: direct managerial control, and the ability to put its mission above investors' interests** \[@noauthor\_openai\_nodate-1\].

To ensure humanity also benefited, **profits were capped**. For every \$1 invested, investors could receive up to \$100, and anything beyond that goes to the nonprofit. The nonprofit can then use those funds for charitable projects and AI safety research. OpenAI believed a 100x return was more than enough for investors \[@noauthor\_openai\_nodate-1\].

**2025 \- The capped-profits structure gets cancelled under pressure from investors**  
In 2024, OpenAI needed a new round of investments. SoftBank offered \$30 billion (the biggest offer) but refused to invest unless the profit caps were removed \[@noauthor\_softbanks\_2025\]. They threatened to cut their investment to \$20 billion if OpenAI didn't comply.  
**OpenAI ceded and removed the profit caps entirely. It became a PBC with no limits on investor returns, which means that its nonprofit mission is now just one factor among others, weighed against investor interests rather than placed above them** \[@oudin\_governance\_2024; @noauthor\_not\_nodate; @noauthor\_exclusive\_nodate\].

> *“The profit caps were implemented because OpenAI took seriously the unprecedented economic value of AGI, and they thought that a 100x return on investment was more than enough for investors, while humanity at large (which, as OpenAI president Greg Brockman has pointed out, bears most of the risks of AGI development) fundamentally deserves the lion’s share of its benefits. Nothing about the past half decade has changed this.*
>
> *What has changed is that investors like SoftBank have made their continued funding of OpenAI conditional on removing these profit caps, **creating precisely the kind of undue private influence the caps were designed to prevent**.”*
>
> *Source: [The OpenAI Files — Restructuring Concerns](https://www.openaifiles.org/restructuring).*

> [!note]- The guardrails extracted from OpenAI's restructuring
>
> OpenAI's original restructuring proposal from December 2024 looked very different from what it ended up being! In that initial proposal, the nonprofit would have had almost no control over the company's operations.
>
> In the US, non-profits are overseen by **Attorneys General (AGs)**, who ensure they properly pursue their public benefit mission. Each state has its own AG. Since OpenAI is incorporated in Delaware and California, both states' AGs had a say \[@noauthor\_calling\_2025\]. When OpenAI filed its restructuring papers, the Delaware and California AGs reviewed them and negotiated a list of concessions. The goal was not to impose entirely new constraints, but to preserve core elements of OpenAI's original nonprofit structure that the initial restructuring proposal would have dismantled.
>
> Some of the important concessions:
> 1. **Mission must come first (for safety decisions):** The PBC's directors must prioritize the charitable mission over shareholders' profits when making safety and security decisions, they can't just try to "balance" the two
> 2. **Nonprofit gets real power:**
>    * The nonprofit can hire and fire the PBC's directors (so at least it has an indirect influence on the PBC governance)
>    * The nonprofit's **Safety and Security Committee** can approve or reject safety decisions, and importantly, they can **halt the release of AI models** even if the company thinks it's safe to release them
> 3. **AGs oversight.** The AGs get to monitor OpenAI's compliance. They can:
>    * Meet with OpenAI leadership quarterly and semi-annually
>    * Get 21 days' notice before major changes to the nonprofit's rights
>    * Hire experts at OpenAI's expense to evaluate big decisions
> 4. **Board independence:** The PBC board must comprise people with no conflicts of interest with OpenAI
> 5. **Nonprofit gets a big financial stake:** The nonprofit receives 26% of OpenAI's equity plus a warrant for potentially more shares, so it also benefits when OpenAI succeeds financially
> 6. … [^4]
>
> **The AGs didn't have absolute blocking power, but had enough legal leverage to impose meaningful conditions. Now that OpenAI is a PBC, they have much less influence over future decisions.**

### Who owns OpenAI? 

The main shareholders include \[@noauthor\_who\_2026,; @carvao\_who\_2024; @noauthor\_openai\_nodate-1\]: 
* The OpenAI Foundation 26%  
* Employees 25%  
* Investors  
  * Microsoft 27%  
  * SoftBank: 11% \[@noauthor\_completion\_nodate\]  
  * Other smaller investors

### Who controls day-to-day decisions?

In practice, **Sam Altman runs OpenAI as CEO** and has a large influence over the company’s strategy. **The board** can in theory replace him, and tried to in November 2023 \[@noauthor\_inside\_nodate-1\]. Even though the board has formal authority to appoint and remove executives, it was **forced to reverse its own decision under pressure** from major investors and the broader organization. **It is unclear whether the board could hold firm on a decision that significantly conflicts with investors or employees interests**.

**Microsoft** is the largest external shareholder at 27% and could potentially influence the company’s direction significantly (I’m not sure to what extent it already does). **The OpenAI Foundation** holds 26% equity and can appoint board members, but it’s unclear whether it has the capacity and independence to act against the for-profit interests. 

In May 2024, before its restructuring as a PBC, OpenAI created a **Safety and Security Committee (SSC)** “responsible for making recommendations on critical safety and security decisions for all OpenAI projects” \[@noauthor\_openai\_nodate-2\]. It “has approval rights over safety and security decisions, including the power to halt the release of a model” \[@noauthor\_not\_nodate; @noauthor\_update\_nodate\]. Since then, the SSC has developed collaborations with external organizations, including the UK and US AI Security Institutes and Apollo Research, to conduct independent evaluations of its models. Notably, **the SSC came after OpenAI dissolved its Superalignment Team**, which was specifically dedicated to AI safety. The team's leads left the company over concerns that safety work was being systematically underinvested \[@fung\_openai\_2024\].

## Anthropic 

Anthropic was founded in 2021 by **Dario Amodei**, **Daniela Amodei**, and several colleagues who left OpenAI over safety concerns.  
From the start, they wanted a governance structure that reflected those concerns. The core idea was to let the company operate as a normal PBC, but create a separate body of financially independent advisors whose influence over the board would grow over time. Advisors with no financial stake in Anthropic's success would in theory be more likely to push back if the company started taking dangerous decisions.

Like OpenAI, Anthropic has a two-entities structure \[@oudin\_governance\_2024\]:
* **Anthropic itself is a PBC**, a for-profit company whose directors owe fiduciary duties to shareholders and the public good. Its stated public benefit mission is "the responsible development and maintenance of advanced AI for the long-term benefit of humanity" \[@noauthor\_long-term\_nodate\].  
* **The Long-Term Benefit Trust** (LTBT, or the Trust) is one of Anthropic's shareholders \[@noauthor\_long-term\_nodate\].  
  * It is a body of 5 financially independent “Trustees”, with backgrounds in AI safety, national security, public policy, and social enterprise.  
  * Anthropic created a special class of stock, **class T stock,** that only the Trustees hold. This stock does not give right to any dividends, so trustees have no incentive to maximize profits. But it gives them the **right to elect Anthropic board members**, and that right grows over time: as time goes by, Trustees will be able to elect more of Anthropic's board members. The end goal is for the LTBT to eventually elect a majority of the board, which would give it real power to override decisions it deems too risky. That transition is still ongoing \[@oudin\_governance\_2024; @simmerman\_anthropic\_2023\].

However, Anthropic wrote: **“the Trust and its powers \[can be changed\] without the consent of the Trustees if sufficiently large supermajorities of the stockholders agree."** \[@noauthor\_long-term\_nodate\]. Very few details have been published on the Anthropic Trust, and this one seems concerning. Zach Stein-Perlman suggested that Anthropic could be intentionally maintaining ambiguity here in order to not "look bad" \[@noauthor\_ai\_nodate\].

**Anthropic has been advocating for regulations for a long time** \[@noauthor\_case\_nodate\]. In February 2026, they donated $20 billion to Public First Action, a political organization supporting education about AI, ensuring that the US remains a leader, and, most notably, advocating for more regulation \[@noauthor\_anthropic\_nodate-1; @liu\_ais\_nodate\]. However, **Anthropic has been severely criticized at for going against previous commitments and ceding to pressure** \[@samin\_unless\_2025\]:
* **Anthropic actively participated in the AI race**. Despite having committed to not pushing the AI capabilities frontier, Anthropic did so repeatedly with multiple model releases  
* **Anthropic lobbied to water down a Californian AI regulation bill while creating an appearance of supporting it.** Anthropic publicly defends that “governments should urgently take action on AI policy” \[@noauthor\_case\_nodate\]. The SB-1047 Bill, introduced in February 2024, intended to "mitigate the risk of catastrophic harms from AI models so advanced that they are not yet known to exist" \[@noauthor\_safe\_2026\]**.** It was claimed that Anthropic “lobbied against provisions that should've been obviously good, according to \[their\] presented model of the world”. Notably, Anthropic \[@samin\_unless\_2025; @waters\_anthropic\_nodate\]:  
  * **Opposed the creation of an independent state agency with the authority to define, audit, and enforce AI safety requirements**, arguing that the field lacked established best practices and that an agency without direct experience developing frontier models couldn't be trusted.  
  * **Pushed to narrow the California Attorney General's enforcement powers**, and limit lawsuits to situations where critical harm was already imminent or had occurred. This would have made them accountable for negligent safety practices before harm happens.  
  * **Lobbied to remove whistleblower protections**.  
  * **Lobbied against a provision irrelevant to them, but that would have affected Amazon**, one of their major investors and cloud partners.  
  * **Despite all of the above, Anthropic publicly maintained that they supported the bill overall, and attributed its failure to a lack of broader stakeholder consensus** \[@noauthor\_case\_nodate\].

### Who owns Anthropic? 

Anthropic’s shareholders include \[@noauthor\_anthropic\_nodate\]:
* Founders and employees  
* **The LTBT**, which holds class T stocks (see above)  
* **Large tech investors**, who invested in exchange for cloud and compute partnerships:  
  * Google: \~14% equity, in exchange for compute services \[@say\_google\_2026; @kumar\_who\_2026\]  
  * Amazon: \~7.8% equity, in exchange for cloud services.   
* **Smaller investors**, including BlackRock, Jane Street, Qatar Investment Authority, Microsoft, Nvidia, etc. It is worth noting that among these investors are funds from authoritarian countries (Qatar and the UAE), countries that Amodei himself has acknowledged pose risks if they gain influence over AI development \[@noauthor\_dario\_nodate\].

## Conclusion

The OpenAI Foundation has two main levers to enforce its mission: (i) the ability to hire and fire the OpenAI PBC's board of directors, and (ii) approval rights over safety and security decisions. Yet the one time the board attempted to exercise strong independent judgment (removing Sam Altman) it reversed course within a couple days under pressure from investors and employees. More broadly, OpenAI's original capped-profit structure was explicitly designed to limit private-sector influence over the company, yet that very structure was dismantled under pressure from the investors it was meant to constrain. **The evidence suggests that the OpenAI Foundation would struggle to enforce a decision that significantly hurt investors' financial interests.** 

In the case of Anthropic, the LTBT should soon control the majority of its board, but a sufficiently large coalition of stockholders could potentially override it. **What would happen in a sustained standoff between a LTBT-appointed board and a hostile stockholder majority is unknown**. Meanwhile, for some, Anthropic's actions have repeatedly contradicted its stated commitment to AI safety (pushing the capabilities frontier, lobbying against regulation while publicly appearing to support it, and backpedalling on its safety commitments).

In the recent **Anthropic v. Department of War** scandal Anthropic appeared to have resisted pressure rather than ceding, which is notable given the patterns described above. I was curious to know whether the LTBT had been involved in the decision process, but couldn’t find any article or post that mentioned it. None of the Anthropic official communications mention the Trust \[@noauthor\_where\_nodate; @noauthor\_statement\_nodate; @noauthor\_statement\_nodate-1\]. From an outside perspective, it looks like the one who ultimately decided is Dario Amodei. **Even if the LTBT discussed it and weighed in internally, it has no formal enforcement mechanism to impose its view on the PBC.** **So the LTBT may therefore be structurally helpless in such a situation** [^5].

---

If you want to learn more, I’d recommend reading in priority the followings:

* [The OpenAI Files](https://www.openaifiles.org/) \- excellent resource that has sadly not been updated since June 2025\.  
* [AI Lab Watch](https://ailabwatch.org/) \- not kept up to date either.  
* [The Governance of AI Companies: Reconciling Purpose with Profits](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4972751) \- very clear explanation of OpenAI and Anthropic’s governance structure, but it doesn't cover the latest changes in OpenAI’s structure.


[^1]: It's not as simple in OpenAI and Anthropic, but more on that later.
[^2]: I couldn't find any more recent information.
[^3]: It could eventually make sense for the OpenAI Foundation.
[^4]: For more details, read \[@noauthor\_not\_nodate\].
[^5]: Please let me know if you disagree or find contradictory evidence.

---

## Sources


[^ref]