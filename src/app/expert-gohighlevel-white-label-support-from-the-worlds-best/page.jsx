'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';
const AMBER_HL = { background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 };
const APPOINTMENT_HREF = '/appointment';

const WHY_CHOOSE_US = [
  { title: 'Your Brand, Our Expertise', text: 'We completely understand your business and your brand idea to work under it with ease. Our experts make sure every process of your GHL white labeling goes as smoothly as possible.', icon: 'fa-solid fa-handshake', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Experienced Team of VAs', text: 'At Isuremedia, we boast a strong team of VAs who work under your brand name with their utmost dedication, matched exactly to your needs on GoHighLevel white label support.', icon: 'fa-solid fa-users-gear', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Fast Response Time', text: 'One thing most agencies complain about is slow response time from virtual assistants. That is not the case with us, we have the fastest response time in the industry.', icon: 'fa-solid fa-stopwatch', bg: '#FFE9D6', color: '#E8873F' },
  { title: 'Dedicated Support', text: 'A team of experts is assigned to your brand to assist with your queries and make sure all your problems are solved in time, dedicating their whole effort to your brand.', icon: 'fa-solid fa-headset', bg: '#E6F6EC', color: '#2FA35C' },
  { title: 'Availability of Customizable Plans', text: 'We offer custom packs for your business. Choose exactly the services you want from our GoHighLevel white label support package, so you only pay for what you need.', icon: 'fa-solid fa-sliders', bg: '#FFE3E9', color: '#E84C6B' },
];

const WHO_FOR = [
  'A digital marketing agency struggling with workload',
  'A freelancer looking to scale with expert support',
  'A business owner wanting to expand services without hiring full-time staff',
  'An entrepreneur looking forward to saving time and resources',
];

const SERVICES = [
  { title: 'Dedicated VA & Project Manager Support', text: 'You get a highly skilled GHL VA who can handle tasks effortlessly, all while listening to your needs, plus a project manager who closely tracks your requirements and gets the job done quickly.', icon: 'fa-solid fa-user-tie', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Website and Funnel Building', text: 'We create highly-converting sales funnels with stunning designs, sales-focused ideas, and an appearance that converts quickly, blended together with more than a decade of experience.', icon: 'fa-solid fa-funnel-dollar', bg: '#FFF3D6', color: '#E0A32E' },
  { title: 'Zapier, Make, Pabbly, API Expert', text: 'Need automation magic? Our experts handle Zapier, Make, Pabbly, and custom APIs with ease, connecting your tools to automate repetitive tasks so your systems just work.', icon: 'fa-solid fa-bolt', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Graphics & Video Editing Support', text: 'Creating graphics with your ideas that speak for your brand with a unique tone and identity, including logos, scroll-stopping videos, and regular and promotional creatives.', icon: 'fa-solid fa-photo-film', bg: '#FFE9D6', color: '#E8873F' },
  { title: '3rd Party & API Integration', text: 'Payment gateways, calendars, CRMs, or custom tools, whatever connects, we integrate it, managing all the hard tech so your clients systems run seamlessly without writing a line of code.', icon: 'fa-solid fa-plug-circle-bolt', bg: '#E6F6EC', color: '#2FA35C' },
  { title: 'Client Onboarding', text: 'We onboard your clients like they are our own, including welcome emails, system walkthroughs, queries, and support, so they feel confident and ready to roll from day one.', icon: 'fa-solid fa-user-plus', bg: '#FFE3E9', color: '#E84C6B' },
];

const WORKING_STEPS = [
  { title: 'Consultation & Strategy', text: 'We initiate our work with a listening session to understand the needs of your business, going through each requirement to develop a strategy that caters to your needs.', icon: 'fa-solid fa-comments', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Integration', text: 'Our experts integrate smoothly with your existing processes, ensuring a hassle-free transition and setup, important for getting better services in the long run.', icon: 'fa-solid fa-route', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Execution & Enhancement', text: 'We implement strategies, manage tasks, and smoothen workflows while keeping everything branded under your name, so your clients go through a smooth experience.', icon: 'fa-solid fa-chart-simple', bg: '#FFE9D6', color: '#E8873F' },
  { title: 'Ongoing Growth & Support', text: 'We do not stop after execution, we offer the best ongoing support for the system we build, and with more than 90% client retention, we make sure you stick with us for good.', icon: 'fa-solid fa-seedling', bg: '#E6F6EC', color: '#2FA35C' },
];

const TESTIMONIALS = [
  { id: 'FOKInCr5fDA', name: 'Sheri Hess', company: 'Laughing Chameleon Marketing', quote: 'They have been invaluable to me.' },
  { id: '_TU_JzMgeQY', name: 'Henry Johnson', company: 'frtdesk.com', quote: 'I think you guys have been fantastic.' },
  { id: '4L1w810IJSU', name: 'Kiro Ghobrial', company: 'Care Genius', quote: 'Really appreciate them. Highly recommend.' },
  { id: 'jb_JU0Z8jLc', name: 'Ashish Saxena', company: 'Home Optima', quote: 'These folks are super knowledgeable and their attitude to help out, find solutions to very unique problems, has just been outstanding.' },
  { id: 'WmHC5eZeUl4', name: 'Tony Gravley', company: 'K9 Next Generation', quote: 'I have no idea how they keep up the pace that they do, but they really, really do.' },
  { id: 'iYc9lywnv4M', name: 'Curtis Tofa', company: 'Commanders Rebellion', quote: 'Massive thanks to Isuremedia. Thank you for all the support that you have given me so far, and I look forward to building wonders together in the future.' },
];

const FAQS = [
  { q: 'How does GoHighLevel White Label Support favor running my agency?', a: 'GoHighLevel White Label Support empowers your agency to render CRM automation, pipeline management, and client support under your own brand, all without additional hiring. This ensures you scale well while your clients get a seamless experience.' },
  { q: 'Do you help with troubleshooting and CRM setup?', a: 'Absolutely. From CRM setup and integrations to troubleshooting any technical issues, Isuremedia ensures your clients receive expert support while everything is done in your name.' },
  { q: 'What training can you provide for my clients and team?', a: 'We give step-by-step onboarding and training tailored to your agency. Our GoHighLevel experts make sure your clients and team understand the platform for higher adoption and efficiency.' },
  { q: 'Can I customize the level of support you provide?', a: 'Yes. Our white-label services are tailored to your agency’s workflow and branding specifications, whether you need full-fledged CRM management or solely task-based support.' },
  { q: 'Do you offer GoHighLevel White Label Support all over the world?', a: 'Yes. Isuremedia caters to clients around the world, providing seamless white-label support for agencies across different time zones, with smooth-moving operations and 24/7 support.' },
];

function SectionHeading({ children, sub }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
      <h2 style={{ fontFamily: J, fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.4px', lineHeight: 1.2, marginBottom: sub ? 14 : 0 }}>
        {children}
      </h2>
      {sub && <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}

function Highlight({ children }) {
  return <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
    {children}
    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  </span>;
}

function CTAButton({ href, children, filled = true }) {
  return (
    <a
      href={href}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 34px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'all .18s',
        color: filled ? 'var(--color-navy)' : 'var(--color-primary)',
        background: filled ? 'var(--ism-amber)' : 'transparent',
        border: filled ? '2px solid var(--ism-amber)' : '2px solid var(--color-primary)',
        boxShadow: filled ? '0 6px 20px rgba(255,176,0,.35)' : 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
    >
      {children}
    </a>
  );
}

function IconCardGrid({ items, className }) {
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 16, padding: '26px 24px', boxShadow: 'var(--sh-sm)' }}>
          <span style={{ width: 50, height: 50, borderRadius: 13, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <i className={item.icon} style={{ color: item.color, fontSize: 20 }} />
          </span>
          <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8 }}>{item.title}</h3>
          <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function TestimonialMedia({ id, name }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-navy)' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={`${name} client testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play ${name} testimonial`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg) center/cover no-repeat` }}
        >
          <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,20,60,.18)' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 18px rgba(0,0,0,.35)' }}>
            <i className="fa-solid fa-play" style={{ color: 'var(--color-navy)', fontSize: 15, marginLeft: 2 }} />
          </span>
        </button>
      )}
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 14, overflow: 'hidden' }}>
            <button onClick={() => setOpen(isOpen ? null : i)}
              style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
            >
              <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: isOpen ? 'var(--color-primary)' : 'var(--color-navy)' }}>{faq.q}</span>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, color: isOpen ? '#fff' : 'var(--color-primary)', fontWeight: 700, transform: isOpen ? 'rotate(45deg)' : '', transition: 'all .2s' }}>+</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 24px 22px' }}>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ExpertGhlWhiteLabelPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding: '56px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <div className="ism-container" style={{ textAlign: 'center', position: 'relative' }}>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1.5px', lineHeight: 1.15, margin: '0 auto 22px', maxWidth: 880 }}>
              Get GoHighLevel <Highlight>White Label Support</Highlight> From the Experts
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 36px' }}>
              Get expert GoHighLevel white label support from the world&apos;s best agency at unimaginable prices. Have your agency&apos;s job done under your name with our expert assistance. Book a free consultation to get started.
            </p>
            <CTAButton href={APPOINTMENT_HREF}>Book A Free Consultation</CTAButton>
          </div>
        </section>

        <ReviewsStrip />

        {/* WHY CHOOSE US */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading sub="Certainly, there are many fish in the sea, but why should you pick us? We'll explain it below.">
              Why Choose Us for GoHighLevel <Highlight>White Label Support?</Highlight>
            </SectionHeading>
            <IconCardGrid items={WHY_CHOOSE_US} className="ghlw-why-grid" />
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <CTAButton href={APPOINTMENT_HREF}>Book A Free Consultation</CTAButton>
            </div>
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0', overflow: 'hidden' }}>
          <div className="ism-container">
            <div className="ghlw-whofor-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>

              {/* Left, image collage */}
              <div className="ghlw-whofor-img" style={{ position: 'relative', maxWidth: 420, margin: '0 auto' }}>
                <span className="ghlw-whofor-deco" style={{ position: 'absolute', top: -20, left: -20, width: '70%', height: '55%', border: '2px solid var(--ism-blue-100)', borderRadius: 16, zIndex: 0 }} />
                <span className="ghlw-whofor-deco" style={{ position: 'absolute', bottom: -20, right: -20, width: '55%', height: '45%', border: '2px solid var(--ism-blue-100)', borderRadius: 16, zIndex: 0 }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="https://isuremedia.com/wp-content/uploads/2025/07/website-1-1707x2048-1-768x921.webp"
                  alt="Agency owner working with Isuremedia's white label GoHighLevel support"
                  style={{ position: 'relative', zIndex: 1, width: '100%', height: 'auto', borderRadius: 16, display: 'block' }}
                />
              </div>

              {/* Right, content */}
              <div>
                <h2 style={{ fontFamily: J, fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.4px', lineHeight: 1.2, marginBottom: 14 }}>
                  Who Is This For?
                </h2>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 10 }}>
                  Our white label support services aren&apos;t a perfect fit for all businesses. They have to meet certain requirements for the same.
                </p>
                <p style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 16 }}>
                  If you are a:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
                  {WHO_FOR.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', fontSize: 15, marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 26 }}>
                  Then our GoHighLevel White Label support is <span style={AMBER_HL}>the perfect choice for you</span>. Book a free call with us and let us understand how we can help you.
                </p>
                <CTAButton href={APPOINTMENT_HREF}>Book A Consultation</CTAButton>
              </div>

            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>Our Services</SectionHeading>
            <IconCardGrid items={SERVICES} className="ghlw-services-grid" />
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <CTAButton href={APPOINTMENT_HREF}>Book A Free Consultation</CTAButton>
            </div>
          </div>
        </section>

        {/* OUR WAY OF WORKING */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading sub="A clear, repeatable process that keeps every engagement branded under your name from day one.">Our Way Of Working</SectionHeading>
            <div className="ghlw-working-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' }}>
              <div className="ghlw-working-line" style={{ position: 'absolute', top: 34, left: '12.5%', right: '12.5%', height: 2, background: 'repeating-linear-gradient(to right, var(--color-border) 0 8px, transparent 8px 14px)', zIndex: 0 }} />
              {WORKING_STEPS.map((step, i) => (
                <div key={i} style={{ position: 'relative', padding: '0 14px', zIndex: 1 }}>
                  <div style={{ position: 'relative', width: 68, height: 68, margin: '0 auto 20px' }}>
                    <span style={{ width: 68, height: 68, borderRadius: '50%', background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #fff', boxShadow: 'var(--sh-sm)' }}>
                      <i className={step.icon} style={{ color: step.color, fontSize: 24 }} />
                    </span>
                    <span style={{ position: 'absolute', bottom: -4, right: -4, width: 24, height: 24, borderRadius: '50%', background: 'var(--color-navy)', color: '#fff', fontFamily: J, fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
                      {i + 1}
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <CTAButton href={APPOINTMENT_HREF}>Book A Consultation</CTAButton>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>Hear From Our Whitelabel Agency Clients</SectionHeading>
            <div className="ghlw-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--sh-sm)' }}>
                  <TestimonialMedia id={t.id} name={t.name} />
                  <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <i key={s} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                      ))}
                    </div>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.75, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <div style={{ fontFamily: J, fontSize: 13.5, fontWeight: 700, color: 'var(--color-navy)' }}>{t.name}</div>
                      <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <CTAButton href={APPOINTMENT_HREF}>Book A Consultation</CTAButton>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <FAQAccordion />
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <CTAButton href={APPOINTMENT_HREF}>Book A Consultation</CTAButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .ghlw-why-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghlw-services-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghlw-working-grid { grid-template-columns: repeat(2,1fr) !important; row-gap: 36px !important; }
          .ghlw-working-line { display: none !important; }
        }
        @media (max-width: 900px) {
          .ghlw-testimonials-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .ghlw-whofor-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .ghlw-why-grid { grid-template-columns: 1fr !important; }
          .ghlw-services-grid { grid-template-columns: 1fr !important; }
          .ghlw-working-grid { grid-template-columns: 1fr !important; row-gap: 32px !important; }
          .ghlw-testimonials-grid { grid-template-columns: 1fr !important; }
          .ghlw-whofor-img { max-width: 300px !important; }
          .ghlw-whofor-deco { top: -10px !important; left: -10px !important; bottom: -10px !important; right: -10px !important; }
        }
      `}</style>
    </>
  );
}
