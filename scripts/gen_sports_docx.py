# Generate a clean, client-ready Sports copy .docx (opens directly in Google Docs).
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

doc.add_heading('CredX — Sports Landing Page Copy', level=0)
para('For Pro Teams, Stadiums & Leagues · DRAFT for client review (2026-06-16)', italic=True)

h('Page metadata')
field('Title', 'CredX for Teams & Venues — Own the Loyalty Your Fans Give You')
field('Meta description', "Your fans are the most loyal customers on earth. Keep the data, the loyalty, and the value their spending creates — in your team's brand, not a competing credit facility's. CredX is the embedded value platform for teams, stadiums, and leagues.")

h('1. Hero — The Movement')
field('Eyebrow', 'For Pro Teams, Stadiums & Leagues')
field('Headline', 'Own the Loyalty Your Fans Already Give You')
field('Subheadline', 'Every ticket, every concession, every jersey builds a relationship with your fans. CredX keeps it yours: the data, the loyalty, and the next game.')
field('Primary CTA', 'Join the Movement')
field('Secondary CTA', 'See How It Works')

h('2. The Movement — Three Voices, One Direction')
field('Headline', 'The team that owns the data owns the fan.')
field('Body', 'Right now your payment processor runs the transaction, and the credit facility network keeps everything that comes after: who your fan is, what they spend, and when they will come back. CredX puts that back in your hands. Your credit facility, your brand, your fans.')
doc.add_paragraph()
bold_line('Three Voices, One Direction')
bold_line('The Team')
para('“Your fans were already loyal. A competing credit facility was the only one profiting from it.”', italic=True)
para('You built the franchise. Your fans show up, in the cold, season after season. But every ticket and every concession sent a piece of your margin to a system that does not know your fan’s name. CredX gives that back — not just as savings, but as a tool: lower costs across every transaction, built-in revolving credit with no lending risk on your books, and a data network that tells you who your fans really are. A growing community of teams and venues, done handing their loyalty to a credit facility network. This is your network. Finally.')
bold_line('The Fan')
para('“They have been the product for long enough.”', italic=True)
para('Every time they tap their card at the gate, someone they have never met profits from their loyalty, and the value piles up with a competing credit facility instead of going back to the team they love. CredX changes that. Fans benefit from the data they generate, access revolving credit, and keep more of what they earn with the teams and venues where they spend. This is a shift in who the game works for.')
bold_line('The Lender')
para('“Finally, credit that earns where the spending already happens.”', italic=True)
para('Community lenders have always been closer to their members than the big networks, but the credit facility network always captured the transaction. CredX changes the rail: fund embedded credit directly at the point of sale, a diversified, closed-loop asset class, with delinquency controls built in so risk stays managed.')
para('Closer: The old system extracted value from all three. CredX returns it.')
doc.add_paragraph()
field('Pull quote', '“We believe in true partnership so much we put our own money into your business — then give it to your clients, presented under your brand. Who partners like that?”')
para('— Kendall, Founder, CredX')
field('Section CTAs', 'Book a Demo · Run the Numbers')

h('3. Control — What You Get Back')
field('Eyebrow', 'Take Control of Your Franchise')
field('Headline', 'Your fan data is the asset no one gave back. Until now.')
field('Intro', 'Three things become yours the day you sign:')
field('Your fan', "The relationship stays in your team's name, not a competing credit facility's. The fan who bought season tickets and three jerseys belongs to you.")
field('Your access to data', 'Consent-driven and de-identified: which fans come back, which segments spend the most on concessions and merchandise, and when demand peaks.')
field('Keep the loyalty', "A closed-loop value-back program in your team's own currency, where $1 spent is $1 earned, that keeps your fans spending with the team, not with a competing credit facility's program.")
field("Your team's name. Our infrastructure.", 'Everything the fan sees carries your brand. The technology, compliance, and credit run behind the scenes. The relationship is yours.')

h('4. The Gains — The Cherry on the Cake')
field('Eyebrow', "And Here's What It Pays You Back")
field('Headline', 'Three ways CredX puts money back in your franchise.')
field('1. Recover up to 85% of interchange', '$6,000 per $1M with CredX, against roughly $36,000 with competing credit facilities. On a $60,000 night at the gate, that is most of it staying with your team.')
field('2. Earn on the credit you used to give away', "A credit line of up to $5,000 in your team's own brand — your fans carry your team's currency — approved in about 20 seconds at the concession or the gate, at roughly half the rate of a standard card. You are paid in full and upfront, and the risk stays with CredX, never on your books.")
field('3. See your fan base in real time', 'A monthly dashboard in plain language, not raw numbers: which game nights peak, which segment drives concession and merchandise revenue, and who is about to lapse on their season tickets. The intelligence your current setup never handed you.')
field('Benchmark', 'Venues that add embedded credit at the point of sale see up to a 321% lift in purchase frequency and 76% larger transactions (PayPal embedded credit benchmark).')
doc.add_paragraph()
bold_line('Key outcomes')
field('$60K', 'recovered on a major game night.')
field('Yours', "the fan, the data, and the loyalty. Not a competing credit facility's.")
field('20 seconds', 'credit approved at the gate.')
field('Section CTAs', 'Book a Demo · Join the Network')

h('5. Savings Calculator')
field('Headline', 'Move the slider. See what stays with your team.')
field('Body', 'Set your real monthly card volume and watch the recovery add up across the season.')
field('Slider label', 'Monthly processing volume')
field('Slider range', '$250K — $25M (default $3M — event-night volume on a busy month)')
field('Output', '$X recovered per year (at the $3M default → $1,080,000 per year)')
field('Caption', 'Designed to recover up to 85% of standard interchange. Your number depends on card mix. Based on roughly $36K interchange per $1M with competing credit facilities, against $6K per $1M with CredX.')
field('CTA', 'Get My Savings Estimate')

h('6. How It Works')
field('Headline', 'Four steps. Your ticketing, POS, and payment stack stay exactly as they are.')
field('Step 1 — Sign a Merchant Network Agreement', 'Onboarding runs about 4 to 8 weeks. Your ticketing platform, POS, and payment processor all stay in place.')
field('Step 2 — CredX activates on your transaction flow', 'Your checkout is unchanged, with no new terminals or hardware to install. A QR-code flow runs underneath at the gate and the concession, capturing the interchange value and fan data your current setup leaves behind across every transaction.')
field('Step 3 — Your monthly report arrives', 'Interchange recovered and value-back earned, broken out per venue and in aggregate.')
field('Step 4 — Fans get branded credit and value-back', "A credit line of up to $5,000, issued in your team's own brand and approved in about 20 seconds at the gate, with value-back accruing in your team's own currency at $1 for every $1 spent. The relationship stays yours.")

h('7. Built For — Who CredX Is For')
field('Eyebrow', 'Built For')
field('Headline', 'Built for the teams, venues, and leagues whose fans keep coming back.')
for it in ['Professional sports teams (NHL, CFL, MLS, WHL and equivalents)','Stadiums and arenas','Concession and hospitality operators','Leagues and governing bodies','Ticketing platforms','Minor and junior leagues']:
    bullet(it)
field('Qualifier', 'If your fans come back and pay by card, CredX is built for you.')
doc.add_paragraph()
bold_line('Key metrics')
field('$500M+', 'in Merchant Network Agreements signed')
field('4', 'community lender partners funding embedded credit')
field('SOC 2 + PIPEDA compliant', 'Data de-identified, consent-driven, and held to Canadian privacy law.')

h('8. Be Part of the Movement')
field('Headline', 'Ready to own your fans?')
field('Subline', 'Two quick steps. Start with the basics — we will take it from there.')
doc.add_paragraph()
bold_line('Step 1 — Tell us who you are (this is all we need to reach you)')
for it in ['Full name','Work email','Phone','Team or organization name','Your title or role','Website']:
    bullet(it)
field('Button', 'Join the Movement')
field('Micro-reward after submit', 'You are in. Based on your volume, you could be keeping up to $30,000 per $1M. Two more questions and we will build your real number.')
doc.add_paragraph()
bold_line('Step 2 — Tell us about your organization (optional)')
bullet('Type of organization: Pro team · Stadium or arena · Concession or hospitality · League or governing body · Ticketing platform · Other')
bullet('Roughly what do you process in card volume each month? $250K–$1M · $1M–$5M · $5M–$25M · $25M+')
bullet('Number of venues')
bullet('Ticketing or POS system (Ticketmaster, SeatGeek, Square, etc.)')
bullet('In one line: what would owning your fan data change for your organization?')
field('Button', 'See My Full Breakdown')

h('9. FAQ')
field('Heading', 'Questions teams ask before signing')
faqs = [
 ('Does CredX replace my ticketing or payment processor?','No. CredX runs on the value layer underneath your existing setup. Your ticketing platform, POS, and payment terminals all stay in place, and it requires no new hardware at the gate or the concession. Typical integration runs 4 to 8 weeks.'),
 ('What types of sports organizations does this work for?','Any team, venue, or league with recurring fans and meaningful card volume: professional teams, stadiums and arenas, concession and hospitality operators, leagues and governing bodies, ticketing platforms, and minor or junior leagues. If your fans come back and pay by card, CredX applies.'),
 ('What about a multi-venue or league-wide rollout?','One master account, individual venue or team branding, and consolidated reporting. Each venue sees its own interchange recovery and value-back numbers. Across a league, every team runs its own branded credit and value-back layer on shared infrastructure, with a distinct currency per team.'),
 ('Can fans use it outside the venue?',"Yes. Once a fan holds a credit line in your team's brand, it works at any participating merchant, and your team's brand follows the fan beyond game day."),
 ('Is my fan data really mine?','Yes. Consent-driven, opt-in by default, de-identified for analytics, and handled under Canadian privacy law, including PIPEDA. Your team owns the fan relationship. A competing credit facility does not.'),
 ('How soon do I see savings?','Interchange recovery starts the month after activation, reported per venue and in aggregate.'),
 ('Who qualifies?','Teams, venues, and leagues processing $250K or more per month in card volume. Single-venue and multi-venue organizations both qualify — the savings and data benefits are proportional to your volume.'),
]
for q,a in faqs:
    field(q, a)

h('10. Footer')
field('Closing CTA line', 'Still have questions? Talk to our team. — Book a Demo / Join the Network')
field('Footer navigation', 'How It Works · The Movement · Savings · Join the Movement')
field('Legal', 'Privacy · Terms · SOC 2 Attestation')
para('© 2026 CredX Tech Inc.')

doc.add_page_break()
h('Open questions for CredX — please answer inline')
para('For Kyle / Kendall / Audrey. Answer directly under each item. These are the only open points on the Sports copy — the narrative structure is already settled. None block reading the copy; they block public launch.', italic=True)
h('A. Numbers & claims', level=2)
qs_a = [
 '$60,000 a night in interchange at a major game — OK to state publicly?',
 '$5,000 per-fan credit line in the team’s own brand, with $1 spent = $1 earned in “team currency” — OK as an illustrative figure?',
 '$3,000,000 / month as the calculator’s default volume (a busy event month) — representative for the teams we are pitching?',
 '“Approved in about 20 seconds” credit at the gate / concession — defensible?',
 '$500M+ in Merchant Network Agreements signed — confirm the figure (or give the correct one).',
 '4 community lender partners funding embedded credit — confirm the count.',
 'PayPal benchmark (321% lift in frequency, 76% larger transactions) applied to venues — OK to use as framed?',
 'Interchange math ($6K per $1M with CredX vs ~$36K with a competing facility; up to 85% recovered) — confirm it carries to the sports framing.',
]
for i,q in enumerate(qs_a,1):
    field(f'{i}. {q}', None); answer()
h('B. Naming & approvals', level=2)
qs_b = [
 'Team naming: we keep it generic (“a Canadian NHL franchise”) and name no real team until CSEC / Alysia Olsen approves public use. Confirm — and tell us if any team / quote IS approved to name.',
 'No third-party logos anywhere on the page (partner / team / lender) — confirm this is your intent for Sports too.',
]
for i,q in enumerate(qs_b,9):
    field(f'{i}. {q}', None); answer()
h('C. CTAs & integration', level=2)
qs_c = [
 'CTA labels: we are using “Join the Movement” (primary) · “Book a Demo” (secondary) · “Join the Network” (Gains + footer), carried from Automotive. The Discovery doc listed “Book a Demo / Calculate Your Savings” for Sports — which set do you want?',
 'Book-a-Demo destination: we need the Calendly / booking URL (Kyle). Until it lands, “Book a Demo” falls back to the inline form.',
]
for i,q in enumerate(qs_c,11):
    field(f'{i}. {q}', None); answer()
h('D. Compliance', level=2)
field('13. “SOC 2 + PIPEDA compliant. Data de-identified, consent-driven, held to Canadian privacy law.” — confirm this claim is accurate as stated.', None); answer()

out = 'sports/CredX-Sports-Landing-Page-Copy.docx'
doc.save(out)
import os
print('wrote', out, os.path.getsize(out)//1024, 'KB')
