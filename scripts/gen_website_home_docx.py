# -*- coding: utf-8 -*-
# Clean, proofing-ready .docx of the CredX website HOMEPAGE copy.
# Copy only — no status flags, notes, budgets, or build notes.
import os
from docx import Document
from docx.shared import Pt

doc = Document()
doc.styles['Normal'].font.name = 'Calibri'
doc.styles['Normal'].font.size = Pt(11)

def h(text, level=1): doc.add_heading(text, level=level)
def field(label, value):
    p = doc.add_paragraph(); p.add_run(label + ': ').bold = True; p.add_run(value)
def para(text, italic=False):
    p = doc.add_paragraph(); r = p.add_run(text); r.italic = italic; return p
def bold_line(text):
    p = doc.add_paragraph(); p.add_run(text).bold = True; return p
def quote(text):
    p = doc.add_paragraph(); r = p.add_run(text); r.italic = True; p.paragraph_format.left_indent = Pt(18); return p
def note(text):
    p = doc.add_paragraph(); r = p.add_run(text); r.italic = True; r.font.size = Pt(9); return p

doc.add_heading('CredX — Website Homepage Copy', level=0)
para('Draft for proofing · 2026-07-10', italic=True)

h('Page metadata')
field('Title', 'Embedded Lending for Merchants | CredX')
field('Meta description', 'CredX is the embedded lending platform that keeps the customer, the data, and the value your business earns. Recover up to $30,000 per $1M you process.')
field('H1', 'Embedded Lending That Keeps the Customer Yours')

h('1. Hero — The Movement')
field('Eyebrow', 'For Businesses That Earn Their Customers')
field('Headline', 'Embedded Lending That Keeps the Customer Yours')
field('Subheadline', 'Embedded lending puts credit and value-back inside your own checkout. Every transaction builds a relationship, and CredX keeps it yours: the customer, the data, and the loyalty.')
field('Movement line', 'A system you belong to, instead of one that owns you.')
field('Primary CTA', 'Book a meeting')
field('Secondary CTA', 'See how it works')

h('2. The Movement — Three Voices, One Direction')
field('Headline', 'The business that earns the customer should keep the customer.')
para('Today your payment processor runs the transaction, and a competing credit facility keeps everything that comes after: who your customer is, what they spend, and when they return. Embedded lending puts that back in your hands. Your credit facility, your brand, your customer.')
doc.add_paragraph()
bold_line('The Merchant')
quote('"Your customers were already loyal. A competing credit facility was the only one charging you for it."')
para('You built the relationship and earned the trust, yet every transaction sends a piece of your margin to a system that does not know your customer by name. CredX gives that back: lower costs on every transaction, revolving credit in your own brand with no lending risk on your books, and a data view of who your buyers really are. A growing community of businesses, done handing their growth to a credit facility network.')
bold_line('The Customer')
quote('"They have been the product for long enough."')
para('Every time a customer taps their card, someone they have never met profits from their loyalty, and they never see a cent of it. CredX changes that. Customers benefit from the value they generate, reach fairer credit, and keep more of what they earn where they already spend.')
bold_line('The Lender')
quote('"Finally, credit that earns where the spending already happens."')
para('Community lenders have always been closer to their members than the big networks, yet the credit facility network always captured the transaction. CredX changes the rail: fund embedded, merchant-linked credit at the point of sale — a diversified, closed-loop asset class with delinquency controls built in, so risk stays managed.')
doc.add_paragraph()
para('The old system extracted value from all three. CredX returns it.')

h('3. Control — What You Get Back')
field('Eyebrow', 'Take Control of Your Business')
field('Headline', 'The customer relationship is the asset no one gave back. Until now.')
para('Three things become yours the day you sign a Merchant Network Agreement:')
field('Your customer', "The relationship stays in your business's name, not a competing credit facility's. The customer who walked in last week belongs to you.")
field('Your data', 'Consent-driven and de-identified, opt-in by default: which buyers return, which segments spend the most, and when demand peaks.')
field('Your value-back', 'A closed-loop value-back program in your own brand that gives customers a reason to keep spending with you, not down the street.')
doc.add_paragraph()
bold_line('Your business name. Our infrastructure.')
para('Everything the customer sees carries your brand. The embedded value platform, the compliance, and the credit run behind the scenes. The relationship is yours.')

h('4. The Gains')
field('Eyebrow', 'And Here Is What It Pays You Back')
field('Headline', 'Three ways embedded lending puts money back in your business.')
field('1. Recover up to 85% of interchange', 'Roughly $6,000 per $1M with CredX, against about $36,000 with competing credit facilities. On $1M a month, that is up to $30,000 staying in your business.')
field('2. Earn on the credit you used to give away', 'A merchant-linked credit facility in your own brand, approved in about 20 seconds at checkout, at roughly half the rate of a standard card. You are paid in full and upfront, and the risk stays with CredX, never on your books.')
field('3. See your business in real time', 'A monthly dashboard in plain language: which segment drives revenue, when demand peaks, and who is about to lapse. The intelligence your current setup never handed you.')
doc.add_paragraph()
para('Businesses that add embedded credit at the point of sale see up to a 321% lift in purchase frequency and 76% larger transactions (PayPal embedded credit benchmark).')
doc.add_paragraph()
bold_line('Key outcomes')
field('$30K', 'recovered per $1M, month one.')
field('Yours', "the customer, the data, and the loyalty. Not a competing credit facility's.")
field('20 sec', 'credit approved at checkout.')

h('5. Recovery Calculator')
field('Headline', 'Move the slider. See what stays in your business.')
field('Body', 'Set your real monthly card volume and watch the recovery add up across twelve months.')
field('Slider label', 'Monthly processing volume')
field('Range', '$250K – $25M (default $1M)')
field('Output', '$X recovered per year')
field('Caption', 'Designed to recover up to 85% of standard interchange. Your number depends on card mix. Based on roughly $36K interchange per $1M with competing credit facilities, against $6K per $1M with CredX.')
field('CTA', 'Get my estimate')

h('6. Proof')
field('Eyebrow', 'Built on Trust')
field('Headline', 'An embedded value platform enterprises can stand behind.')
bold_line('Trust markers')
para('$500M+ in Merchant Network Agreements signed.')
para('Community lender partners funding embedded credit.')
para('SOC 2 + PIPEDA compliant. Data de-identified, consent-driven, and held to Canadian privacy law.')
note('(Figures pending verification before launch.)')

h('7. Founder pull-quote')
quote('"We built CredX on one belief: the people and businesses who create the value should be the ones who keep it. That is the movement, and you belong in it."')
para('— Kendall, Founder, CredX')
note('(Placeholder wording — final quote pending Kendall.)')

h('8. Final CTA')
field('Headline', 'Ready to keep your customer?')
field('Subline', 'See what embedded lending could return for your business. One conversation, no obligation.')
field('Primary CTA', 'Book a meeting')
field('Secondary CTA', 'See how it works')

out = 'credx-website/copy/CredX-Website-Homepage-Copy.docx'
os.makedirs(os.path.dirname(out), exist_ok=True)
doc.save(out)
print('wrote', out, os.path.getsize(out)//1024, 'KB')
