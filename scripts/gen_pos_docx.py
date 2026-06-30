# Generate a clean, client-ready POS copy .docx (opens directly in Google Docs).
from docx import Document
from docx.shared import Pt

doc = Document()
doc.styles['Normal'].font.name = 'Calibri'
doc.styles['Normal'].font.size = Pt(11)

def h(text, level=1):
    doc.add_heading(text, level=level)

def field(label, value):
    p = doc.add_paragraph(); r = p.add_run(label); r.bold = True
    if value is not None:
        v = doc.add_paragraph(value); v.paragraph_format.left_indent = Pt(14)

def para(text, italic=False):
    p = doc.add_paragraph(); run = p.add_run(text); run.italic = italic; return p

def bold_line(text):
    p = doc.add_paragraph(); p.add_run(text).bold = True; return p

def bullet(text):
    doc.add_paragraph(text, style='List Bullet')

def answer():
    p = doc.add_paragraph(); p.add_run("→ Answer: ").bold = True
    p.paragraph_format.left_indent = Pt(14)

doc.add_heading('CredX — POS Platforms Landing Page Copy', level=0)
para('For POS Platforms and ISVs · Channel / partnership page (Template B) · DRAFT for client review (2026-06-18)', italic=True)

h('Page metadata')
field('Title', 'CredX for POS Platforms — Give Your Merchants the Offer No Competing Platform Can Match')
field('Meta description', 'Add embedded credit and value-back to your POS with one API. Your merchants save up to $30K for every $1M they process — and they stay on your platform because the value is built in. The embedded value layer for POS platforms and ISVs.')

h('1. Hero — The Movement (partnership pivot)')
field('Eyebrow', 'For POS Platforms and ISVs')
field('Headline', 'Give Your Merchants the Offer No Competing Platform Can Match')
field('Subheadline', 'You run the payment. CredX builds the value layer underneath it — embedded credit and value-back, white-labelled under your brand. Your merchants save, and they stay on your platform because the value is built in.')
field('Primary CTA', 'Explore a Partnership')
field('Secondary CTA', 'See the merchant ROI')

h('2. The Movement — Three Voices, One Direction')
field('Headline', 'The platform that owns the value owns the merchant.')
field('Body', 'Right now you run the transaction, and the credit facility network keeps everything that comes after: the merchant’s customer, the data, and the loyalty. CredX puts that back on your platform. Your value layer, your brand, your merchants.')
doc.add_paragraph()
bold_line('Three Voices, One Direction')
bold_line('The Platform')
para('“Your merchants were already loyal. A competing credit facility was the only one profiting from it.”', italic=True)
para('You built the platform your merchants run their business on. But every transaction sent a piece of their margin to a system that does not answer to you, and the loyalty their customers built accrued to a credit facility network instead of to your platform. CredX gives that back — not just as savings for your merchants, but as a tool you own: an embedded value layer that turns interchange into a differentiator, built-in revolving credit with no lending risk on anyone’s books, and a retention moat competing platforms cannot match. A growing community of platforms, done handing their merchants’ loyalty to a credit facility network. This is your channel. Finally.')
bold_line('The Merchant')
para('“They have been subsidizing the system for long enough.”', italic=True)
para('Every transaction sent roughly 3% to someone the merchant never met, and the value piled up with a competing credit facility instead of staying in their business. CredX changes that. On your platform, merchants lower their costs, offer their own customers branded credit and value-back, and keep more of what they earn. This is a shift in who the platform works for.')
bold_line('The Lender')
para('“Finally, credit that earns where the spending already happens.”', italic=True)
para('Community lenders have always been closer to their members than the big networks, but the credit facility network always captured the transaction. CredX changes the rail: fund embedded credit directly at the point of sale, a diversified, closed-loop asset class, with delinquency controls built in so risk stays managed.')
para('Closer: The old system extracted value from all three. CredX returns it.')
doc.add_paragraph()
field('Pull quote', '“We believe in true partnership so much we put our own money into your business — then give it to your clients, presented under your brand. Who partners like that?”')
para('— Kendall, Founder, CredX')
field('Section CTAs', 'Explore a Partnership · See the numbers')

h('3. Control — What Your Platform Gets Back')
field('Eyebrow', 'Take Control of Your Channel')
field('Headline', 'The merchant relationship is the asset the networks kept. Until now.')
field('Intro', 'Three things become yours the day you integrate:')
field('Your merchant', 'The relationship stays on your platform, in your brand, not a competing credit facility’s. The merchant who runs on your platform — and the loyalty their customers build — belongs to your channel.')
field('Your access to data', 'Consent-driven and de-identified: which merchants grow, which segments drive the most volume, and where embedded credit lifts retention across your channel.')
field('Keep the loyalty inside your platform', 'A closed-loop value-back layer in each merchant’s own currency, where $1 spent is $1 earned, that keeps a merchant’s customers spending with them — and keeps the merchant on your platform.')
field('Your platform’s name. Our infrastructure.', 'Everything the merchant and their customer sees carries your brand. The underwriting, servicing, compliance, and credit run behind the scenes. The relationship is yours.')

h('4. The Gains — The Cherry on the Cake')
field('Eyebrow', 'And Here Is What It Pays Your Channel')
field('Headline', 'Three ways CredX puts money back in your channel.')
field('1. Hand your merchants up to 85% interchange recovery', '$6,000 per $1M with CredX, against roughly $36,000 with a competing credit facility. That is up to $30,000 back for every $1M a merchant processes — a saving you deliver, and a differentiator competing platforms cannot match.')
field('2. Earn on the credit you used to send away', 'A credit line of up to $5,000 in each merchant’s own brand, approved in about 20 seconds at checkout, at roughly half the rate of a standard card. The merchant is paid in full and upfront, the lending risk stays with CredX and its lender partners, and your platform shares in the value through a revenue share — never on anyone’s books.')
field('3. See your channel in real time', 'A monthly dashboard in plain language, not raw numbers: which merchants grow, which segments drive volume, and where embedded credit lifts retention. The channel intelligence your current setup never handed you.')
field('Benchmark', 'Merchants who add embedded credit at the point of sale see up to a 321% lift in purchase frequency and 76% larger transactions (PayPal embedded credit benchmark).')
doc.add_paragraph()
bold_line('Key outcomes')
field('$30K', 'recovered per $1M a merchant processes.')
field('Yours', 'the merchant, the data, and the loyalty. Not a competing credit facility’s.')
field('One API', 'to integrate. No new hardware for merchants.')
field('Section CTAs', 'Explore a Partnership · See the operating model')

h('5. Channel Multiplier (swaps the calculator — channel page)')
field('Eyebrow', 'The Channel Multiplier')
field('Headline', 'Your savings, at the scale of your channel.')
field('Body', 'Every merchant you onboard compounds the same recovery. Here is what it looks like across a channel.')
doc.add_paragraph()
bold_line('Three stats (illustrative — see Q3, Q4)')
field('1,000 merchants', 'on your platform, each processing about $1M a year.')
field('× $30K saved', 'recovered for each merchant, every year.')
field('= $30M unlocked', 'put back in your merchants’ pockets across your channel — your differentiator, in dollars.')
field('Caption', 'Illustrative. Based on recovering up to 85% of standard interchange — roughly $36K per $1M with a competing credit facility, against $6K per $1M with CredX. Your channel’s number depends on merchant count, volume, and card mix.')
field('CTA', 'Explore a Partnership')
para('Note: no calculator slider on the channel page — the savings are the merchant’s, shown at channel scale.', italic=True)

h('6. How It Integrates (integration is the centrepiece — Template B)')
field('Headline', 'One API. Your payment stack, your checkout, and your merchants stay exactly as they are.')
field('Architecture note', 'Your POS connects to the CredX value layer, which runs underwriting, the lender network, and the value-back ledger behind the scenes. Nothing changes at the merchant’s terminal.')
field('Step 1 — Spec review and Merchant Network Agreement', 'We align on the integration spec and sign a Merchant Network Agreement. Your platform, your checkout, and your payment processor all stay in place.')
field('Step 2 — Build in the sandbox', 'One REST API, with SDKs and a full sandbox. CredX activates as a toggle in your platform — no new hardware for merchants, no change to their checkout. Typical path to production runs about 4 to 8 weeks, against a roughly 12-month in-house build.')
field('Step 3 — Go live across your channel', 'Each merchant flips CredX on at checkout. Their customers are approved for branded credit in about 20 seconds, value-back accrues in the merchant’s own currency at $1 for every $1 spent, and the loyalty stays inside your platform.')
field('Step 4 — Your monthly channel report arrives', 'Interchange recovered and value-back earned across your channel, broken out per merchant and in aggregate, with your revenue share reconciled.')

h('7. Channel Operating Model (swaps Built-For — channel page)')
field('Eyebrow', 'The Operating Model')
field('Headline', 'Who runs what. Clear from day one.')
field('Intro', 'CredX carries the credit, the risk, and the compliance. Your platform carries the brand and the channel. Your merchants carry the relationship with their customers.')
doc.add_paragraph()
rows = [
 ('Function', 'CredX', 'Your Platform', 'Merchant'),
 ('Underwriting', 'Owns', '—', '—'),
 ('Funding', 'Owns (with lender partners)', '—', '—'),
 ('Servicing', 'Owns', '—', '—'),
 ('Collections', 'Owns', '—', '—'),
 ('Risk', 'Owns', '—', '—'),
 ('Compliance (SOC 2, PIPEDA)', 'Owns', '—', '—'),
 ('Brand and checkout', 'Behind the scenes', 'Owns (white-label)', 'Owns (their customers)'),
 ('Revenue share', 'Credit + servicing margin', 'Share of the savings delta', 'Lower costs + value-back'),
]
table = doc.add_table(rows=len(rows), cols=4)
table.style = 'Light Grid Accent 1'
for ri, row in enumerate(rows):
    for ci, val in enumerate(row):
        cell = table.cell(ri, ci)
        cell.text = val
        if ri == 0 or ci == 0:
            for p in cell.paragraphs:
                for r in p.runs:
                    r.bold = True
doc.add_paragraph()
bold_line('Built for the platforms whose merchants keep coming back.')
for it in ['Mid-market and enterprise POS platforms','ISVs and vertical SaaS with embedded payments','Payment facilitators','Integration and channel partners']:
    bullet(it)
field('Qualifier', 'If your merchants run card volume on your platform, CredX is built to run underneath it. Platforms with 1,000 or more merchants and $100M or more in annual volume see the channel multiplier compound fastest.')
doc.add_paragraph()
bold_line('Key metrics')
field('$500M+', 'in Merchant Network Agreements signed')
field('4', 'community lender partners funding embedded credit')
field('SOC 2 + PIPEDA compliant', 'Data de-identified, consent-driven, and held to Canadian privacy law.')
doc.add_paragraph()
bold_line('Partnership Parameters (Tier 3 disclaimer — verbatim)')
para('For discussion purposes only; not a commitment or offer.', italic=True)

h('8. Explore a Partnership (partner application)')
field('Headline', 'Ready to own your channel?')
field('Subline', 'Two quick steps. Start with the basics — we will take it from there.')
doc.add_paragraph()
bold_line('Step 1 — Tell us about you (this is all we need to reach you)')
for it in ['Full name','Work email','Phone','Platform or company name','Your title or role','Website']:
    bullet(it)
field('Button', 'Explore a Partnership')
field('Micro-reward after submit', 'You are in. Across a channel of 1,000 merchants, CredX could put up to $30M a year back in your merchants’ pockets. Two more questions and we will model your channel.')
doc.add_paragraph()
bold_line('Step 2 — Tell us about your platform (optional)')
bullet('Type of platform: POS platform · ISV / vertical SaaS · Payment facilitator · Integration / channel partner · Other')
bullet('Roughly how many merchants are on your platform? Under 1,000 · 1,000–10,000 · 10,000–50,000 · 50,000+')
bullet('Roughly what annual card volume do your merchants process? Under $100M · $100M–$500M · $500M–$1B · $1B+')
bullet('Existing certifications or compliance (PCI, SOC 2, etc.)')
bullet('In one line: what would an embedded value layer change for your platform?')
field('Button', 'Send my channel details')
para('Note: no “Book a Demo” on the channel page. A booking link can be added if the client wants one (pending Kyle).', italic=True)

h('9. FAQ')
field('Heading', 'Questions platforms ask before integrating')
faqs = [
 ('Does CredX replace my payment processor or POS?','No. CredX runs as a value layer underneath your existing payment flow. Your platform, your checkout, and your merchants’ payment processing all stay in place. It integrates through one API, with no new hardware for merchants, and typical integration runs 4 to 8 weeks.'),
 ('What does the API integration actually involve?','One REST API, with SDKs and a full sandbox to build against before you go live. CredX activates as a toggle in your platform. Most partners reach production in 4 to 8 weeks, against a roughly 12-month in-house build for underwriting, servicing, funding, and compliance.'),
 ('How does the revenue share work?','Per partnership agreement. CredX captures the credit and servicing margin; your platform shares in the savings delta CredX creates for your merchants. We model the specific structure with you during the partnership conversation.'),
 ('Whose brand do merchants and their customers see?','Yours. Full white-label is the default for channel partnerships — the merchant and their customer see your platform’s brand, while the underwriting, servicing, credit, and compliance run behind the scenes as CredX.'),
 ('Who carries the lending risk?','CredX and its community lender partners. The merchant is paid in full and upfront, and the credit risk never sits on your platform’s books or the merchant’s.'),
 ('Is this PCI, SOC 2, and privacy compliant?','Yes. SOC 2 and PIPEDA compliant, data de-identified and consent-driven, and handled under Canadian privacy law. Your platform owns the merchant relationship. A competing credit facility does not.'),
 ('What about multi-region or large-channel rollouts?','One integration, individual merchant branding, and consolidated channel reporting. Each merchant sees its own recovery and value-back numbers, and everything rolls up across your channel on shared infrastructure.'),
 ('Who is a good fit?','POS platforms, ISVs, payment facilitators, and channel partners. Platforms with 1,000 or more merchants and $100M or more in annual volume see the channel multiplier compound fastest.'),
]
for q,a in faqs:
    field(q, a)

h('10. Footer')
field('Closing CTA line', 'Want to run the numbers on your channel? Talk to our team. — Explore a Partnership / See the merchant ROI')
field('Footer navigation', 'How it integrates · The movement · Operating model · Explore a partnership')
field('Legal', 'Privacy · Terms · SOC 2 attestation')
para('© 2026 CredX Tech Inc.')

doc.add_page_break()
h('Open questions for CredX — please answer inline')
para('For Kyle / Kendall / Audrey. Answer directly under each item. These are the only open points on the POS copy — the narrative structure is already settled. None block reading the copy; they block public launch.', italic=True)
h('A. Numbers & claims', level=2)
qs_a = [
 'Interchange math ($6K per $1M with CredX vs ~$36K with a competing facility; up to 85% recovered → up to $30K saved per $1M) — confirm it carries to the channel framing.',
 '$5,000 per-customer credit line in the merchant’s own brand, with $1 spent = $1 earned value-back — OK as an illustrative figure for the POS page?',
 '⚠ NUMBER DISCREPANCY. Discovery said "$30M saved per $100M" in volume, but the per-$1M math scales to $3M per $100M ($100M × $30K/$1M). We used the defensible roll-up in the Channel Multiplier (1,000 merchants × $1M each × $30K = $30M unlocked across the channel). Which framing is correct, and is the $30M-across-a-1,000-merchant-channel example OK to publish?',
 'Channel Multiplier example (1,000 merchants, ~$1M each) — is this a representative channel for the platforms we are pitching, or should we size it differently?',
 '“Approved in about 20 seconds” credit at checkout — defensible? (The old POS notes said underwriting "in 6 minutes"; we used the cross-vertical "about 20 seconds at checkout" — confirm which is right.)',
 'One API · 4 to 8 weeks to production · ~12-month in-house build comparison — accurate and OK to state?',
 'Revenue share — we kept it "per partnership agreement" with no numbers. Is there an approved range we can publish, or keep it qualitative?',
 '$500M+ in Merchant Network Agreements signed · 4 community lender partners — confirm both figures.',
 'PayPal benchmark (321% lift in frequency, 76% larger transactions) applied to merchants on a POS platform — OK to use as framed?',
]
for i,q in enumerate(qs_a,1):
    field(f'{i}. {q}', None); answer()
h('B. Naming & approvals', level=2)
qs_b = [
 'POS-platform naming: we name no POS platform on-page (Square / Helcim / Clover / Toast are targets, not partners) and use generic "POS platforms / ISVs." Confirm — and tell us if any platform IS approved to name.',
 'No third-party logos anywhere on the page (platform / lender / integrator) — confirm this is your intent for POS too.',
 'Tier 3 disclaimer — we carry "For discussion purposes only; not a commitment or offer." verbatim after §7. Confirm the wording and placement.',
]
for i,q in enumerate(qs_b,10):
    field(f'{i}. {q}', None); answer()
h('C. CTAs & the channel framing', level=2)
qs_c = [
 'CTA labels: we are using "Explore a Partnership" (primary) · "See the merchant ROI" (secondary), and we dropped "Book a Demo" and the calculator for the channel page (per the POS positioning). Confirm — or tell us if you want a booking link / "Talk to Our Team" instead.',
 'Operating Model table (CredX / Your Platform / Merchant; rows = underwriting, funding, servicing, collections, support, risk, compliance, revenue share) — does this match how you describe the partnership? Any row to add, remove, or reword?',
]
for i,q in enumerate(qs_c,13):
    field(f'{i}. {q}', None); answer()
h('D. Compliance', level=2)
field('15. “SOC 2 + PIPEDA compliant. Data de-identified, consent-driven, held to Canadian privacy law.” — confirm this claim is accurate as stated for the channel partnership.', None); answer()

out = 'pos/CredX-POS-Landing-Page-Copy.docx'
doc.save(out)
import os
print('wrote', out, os.path.getsize(out)//1024, 'KB')
