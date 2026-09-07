'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsStrip from '@/components/ReviewsStrip';
import ClientsMarquee from '@/components/ClientsMarquee';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';
const AMBER_HL = { background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 };
const APPOINTMENT_HREF = '/appointment';

const SERVICES = [
  { title: 'GoHighLevel White Label Support', text: 'Harness the power of GoHighLevel while reselling it as your own, backed by our comprehensive support.', icon: 'fa-solid fa-tag', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Custom Funnel & Website Building', text: 'Tailor-made funnels and websites designed to captivate your audience and drive conversions.', icon: 'fa-solid fa-funnel-dollar', bg: '#FFF3D6', color: '#E0A32E' },
  { title: 'WordPress Migration to GHL', text: 'Migrating WordPress websites to GoHighLevel for enhanced marketing capabilities.', icon: 'fa-solid fa-cloud-arrow-up', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Course/Membership Website Setup', text: 'Launch your online courses or membership site with ease and monetize your expertise.', icon: 'fa-solid fa-graduation-cap', bg: '#E6F6EC', color: '#2FA35C' },
  { title: 'Website Maintenance', text: 'Ensure your website runs smoothly and flawlessly with our reliable maintenance services.', icon: 'fa-solid fa-screwdriver-wrench', bg: '#FFE3E9', color: '#E84C6B' },
  { title: 'Calendar Migration to GHL', text: 'Effortless migration of your calendars to GHL for efficient appointment scheduling and management.', icon: 'fa-solid fa-calendar-days', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Advanced Automation Setup', text: 'Automate your email, text, and marketing workflows to save time and nurture customer relationships.', icon: 'fa-solid fa-gears', bg: '#FFF3D6', color: '#E0A32E' },
  { title: 'Copywriting Services', text: 'Compelling and persuasive content that engages your audience and drives action.', icon: 'fa-solid fa-pen-nib', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Video Editing', text: 'Professional video editing that enhances your brand, delivering impactful visual experiences.', icon: 'fa-solid fa-film', bg: '#E6F6EC', color: '#2FA35C' },
  { title: 'Graphic & Logo Design', text: 'Stand out from the crowd with eye-catching graphics, logos, and social media designs.', icon: 'fa-solid fa-palette', bg: '#FFE3E9', color: '#E84C6B' },
  { title: 'Product Setup & Launch Support', text: 'Get comprehensive assistance in setting up and launching your products, ensuring a successful start.', icon: 'fa-solid fa-rocket', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Client Onboarding', text: 'Streamlined onboarding processes to provide a seamless experience for your clients.', icon: 'fa-solid fa-user-plus', bg: '#FFF3D6', color: '#E0A32E' },
  { title: 'Custom Snapshot', text: 'Tailor-made snapshots to capture and export valuable data for analysis and decision-making.', icon: 'fa-solid fa-camera-retro', bg: '#EFE7FF', color: '#7C4DE0' },
];

const DIFFERENTIATORS = [
  { title: 'GHL Web Development Experts', text: 'Proficient in GHL customization and integration, delivering exceptional website development solutions.', icon: 'fa-solid fa-code' },
  { title: 'Creative Graphic Designers', text: 'Delivering visually stunning designs to enhance your brand presence and captivate your audience.', icon: 'fa-solid fa-pen-ruler' },
  { title: 'Dedicated Project Managers', text: 'Collaborating with you throughout the project to ensure satisfaction and seamless execution.', icon: 'fa-solid fa-user-tie' },
  { title: 'GHL Experts', text: 'Masters of GHL automation, providing tailored solutions for seamless operations.', icon: 'fa-solid fa-award' },
  { title: 'Diverse Client Experience', text: 'Serving clients worldwide with different approaches and unique requirements.', icon: 'fa-solid fa-earth-americas' },
  { title: 'Satisfaction Guaranteed', text: 'Our track record speaks for itself, always meeting and exceeding client expectations.', icon: 'fa-solid fa-thumbs-up' },
  { title: 'Industry-Specific Automation', text: 'Specialized in setting up automation for specific industries, simplifying processes.', icon: 'fa-solid fa-industry' },
];

const DIGITAL_MARKETING = [
  { label: 'Facebook Ads', icon: 'fa-brands fa-facebook', color: '#3B5998' },
  { label: 'Google Ads PPC', icon: 'fa-brands fa-google', color: '#4285F4' },
  { label: 'SEO Marketing', icon: 'fa-solid fa-magnifying-glass-chart', color: '#2FA35C' },
  { label: 'Social Media Marketing', icon: 'fa-solid fa-hashtag', color: '#00B2FF' },
  { label: 'TikTok Advertising', icon: 'fa-brands fa-tiktok', color: '#000000' },
  { label: 'Affiliate Marketing', icon: 'fa-solid fa-share-nodes', color: '#E0A32E' },
];

const AUTOMATION_PLATFORMS = [
  { label: 'ClickFunnels Support', icon: 'fa-solid fa-filter', color: '#F95D27' },
  { label: 'Ontraport Support', icon: 'fa-solid fa-gauge-high', color: '#0F2070' },
  { label: 'Kartra Expert', icon: 'fa-solid fa-layer-group', color: '#7C4DE0' },
  { label: 'Value for Money', icon: 'fa-solid fa-sack-dollar', color: '#2FA35C' },
  { label: 'HubSpot Management', icon: 'fa-solid fa-circle-nodes', color: '#FF5C35' },
  { label: 'GoHighLevel Support', icon: 'fa-solid fa-bolt', color: '#E0A32E' },
  { label: 'MailChimp Services', icon: 'fa-solid fa-envelope', color: '#C79A00' },
  { label: 'Kajabi Support', icon: 'fa-solid fa-book-open', color: '#2E8FE0' },
];

const TESTIMONIALS = [
  { id: 'fahX52XsGWM', name: 'Ty Brown', company: 'Tythedogguy', quote: 'There is no one I have found that does a better job, cares more about a client, does it for a reasonable fee and is willing to just do anything and work with any project to make sure that he’s making his clients happy.' },
  { id: 'x6gMIYAIZOw', name: 'Scott Gilbert', company: 'Aesthetic Flight', quote: 'My best review is the fact that I will be making use of their services again.' },
  { id: '8IfNfNSmDRs', name: 'Tony Zito', company: 'Zito Marketing Strategies', quote: 'I’ve been through several different VAs, tried different services and they knew more about Go High Level than anybody I have come across.' },
  { id: 'w3J5yy3VpwQ', name: 'David Goldstein', company: 'Sales Fusion', quote: 'I am so glad that we met and you’ve been amazingly helpful.' },
  { id: '_ihNcOZaL0U', name: 'Andrea Petrone', company: '', quote: 'He’s super reliable and it’s the most important thing when you hire a web developer and designer.' },
  { id: '6xvWqLQ_k7Y', name: 'Juan De Los Santos', company: 'Innovat3 Solutions', quote: 'Isuremedia really is filled with experts.' },
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

const HERO_VIDEO_ID = 'ARaEiSO5tXE';

function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', paddingTop: '56.25%', boxShadow: '0 20px 56px rgba(0,35,83,.16)', background: '#000' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
          title="Isuremedia GHL success story"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: `url(https://img.youtube.com/vi/${HERO_VIDEO_ID}/maxresdefault.jpg) center/cover no-repeat` }}
        >
          <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,20,60,.18)' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 68, height: 68, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 26px rgba(0,0,0,.35)' }}>
            <i className="fa-solid fa-play" style={{ color: 'var(--color-navy)', fontSize: 22, marginLeft: 4 }} />
          </span>
        </button>
      )}
    </div>
  );
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

function IconCardGrid({ items, className, columns = 3 }) {
  const rows = Math.ceil(items.length / columns);
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, columnGap: 32, rowGap: 0 }}>
      {items.map((item, i) => {
        const rowIndex = Math.floor(i / columns);
        const isLastRow = rowIndex === rows - 1;
        return (
          <div key={i} style={{ padding: '26px 4px', borderBottom: isLastRow ? 'none' : '1px solid var(--color-border)' }}>
            <span style={{ width: 46, height: 46, borderRadius: 10, background: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <i className={item.icon} style={{ color: 'var(--ism-amber)', fontSize: 18 }} />
            </span>
            <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8, lineHeight: 1.35 }}>{item.title}</h3>
            <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function PillGrid({ items, className }) {
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 12, padding: '16px 18px', boxShadow: 'var(--sh-sm)' }}>
          <span style={{ width: 38, height: 38, borderRadius: 10, background: `${item.color}1A`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className={item.icon} style={{ color: item.color, fontSize: 16 }} />
          </span>
          <span style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)' }}>{item.label}</span>
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

export default function GhlSolutionsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #0A1B4D 0%, var(--color-navy) 55%, #123a8f 100%)', padding: '56px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -40, width: 280, height: 280, background: 'rgba(255,176,0,.10)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div className="ism-container" style={{ position: 'relative' }}>
            <div className="ghls-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>

              {/* Left, copy */}
              <div>
                <p style={{ fontFamily: J, fontSize: 13, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ism-amber)', marginBottom: 16 }}>
                  Automation, Marketing, Web Development, and GHL White Label Solutions
                </p>
                <h1 style={{ fontFamily: J, fontSize: 'clamp(28px,3.6vw,44px)', fontWeight: 900, color: '#fff', letterSpacing: '-1.1px', lineHeight: 1.18, marginBottom: 14 }}>
                  Be the Next Success Story with Our Exceptional GoHighLevel Support
                </h1>
                <p style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--ism-amber)', marginBottom: 16 }}>
                  Expert Assistance, Seamless Results
                </p>
                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.6vw,17px)', color: 'rgba(255,255,255,.75)', lineHeight: 1.78, maxWidth: 540, marginBottom: 32 }}>
                  Experience unparalleled support and success with Isuremedia&apos;s dedicated team of GHL virtual assistants for your agency.
                </p>
                <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
              </div>

              {/* Right, video + logos */}
              <div>
                <HeroVideo />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="https://isuremedia.com/wp-content/uploads/2025/09/logos-2-768x142-1.webp"
                  alt="Trusted platforms and tools we work with"
                  style={{ width: '100%', height: 'auto', display: 'block', marginTop: 20 }}
                />
              </div>

            </div>
          </div>
        </section>

        <ReviewsStrip />

        {/* VALUE PROPOSITION */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container" style={{ maxWidth: 820, textAlign: 'center' }}>
            <SectionHeading>
              Focus on Scaling Your Business and Partner With Us for <Highlight>Expert GoHighLevel Tech Solutions</Highlight>
            </SectionHeading>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 28 }}>
              At Isuremedia, we understand the value of your time and resources. With our GHL VA support and service, there&apos;s no need for you to invest extra time and money in training others. We provide you with <span style={AMBER_HL}>highly trained GHL VAs</span> who are well-versed in handling a wide range of tasks efficiently, saving you the hassle of recruitment and training. You can rely on our experienced team to seamlessly integrate into your operations and deliver exceptional support, allowing you to focus on growing your business.
            </p>
            <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
          </div>
        </section>

        {/* CLIENTS */}
        <ClientsMarquee />

        {/* SERVICES */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading sub="We have solutions for all your GHL needs.">
              Services Our GoHighLevel White Label Marketing Agency Can Provide
            </SectionHeading>
            <IconCardGrid items={SERVICES} className="ghls-services-grid" columns={3} />
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section style={{ background: 'linear-gradient(120deg, var(--color-navy) 0%, #123a8f 100%)', padding: '40px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '10%', width: 220, height: 220, background: 'rgba(255,176,0,.10)', borderRadius: '50%', filter: 'blur(50px)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <div className="ism-container ghls-guarantee-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, position: 'relative', flexWrap: 'wrap' }}>
            <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,176,0,.15)', border: '2px solid var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="fa-solid fa-shield-heart" style={{ color: 'var(--ism-amber)', fontSize: 22 }} />
            </span>
            <p style={{ fontFamily: J, fontSize: 'clamp(15px,2vw,19px)', fontWeight: 700, color: '#fff', margin: 0, maxWidth: 560 }}>
              Experience our services risk-free with our <span style={{ color: 'var(--ism-amber)' }}>14-day money-back guarantee</span> and enjoy the assurance of 100% satisfaction.
            </p>
            <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>What Sets Us Apart?</SectionHeading>
            <div className="ghls-diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {DIFFERENTIATORS.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '10px 8px' }}>
                  <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <i className={item.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </span>
                  <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>Discover What Our Clients Are Saying About Our GHL VA Services</SectionHeading>
            <div className="ghls-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
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
                      {t.company && <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>{t.company}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIGITAL MARKETING SERVICES */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container" style={{ maxWidth: 900 }}>
            <SectionHeading sub="Let our digital marketing experts craft tailored strategies and engaging campaigns to amplify your brand visibility, reach your target audience, and achieve measurable results.">
              Digital Marketing Services
            </SectionHeading>
            <PillGrid items={DIGITAL_MARKETING} className="ghls-pill-grid" />
          </div>
        </section>

        {/* MARKETING AUTOMATION SERVICES */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container" style={{ maxWidth: 900 }}>
            <SectionHeading sub="Our team of experts works seamlessly with a range of powerful automation tools. Get in touch to unlock their full potential for your business.">
              Marketing Automation Services
            </SectionHeading>
            <PillGrid items={AUTOMATION_PLATFORMS} className="ghls-pill-grid" />
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ background: 'linear-gradient(160deg, #0A1B4D 0%, var(--color-navy) 55%, #123a8f 100%)', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -40, width: 280, height: 280, background: 'rgba(255,176,0,.10)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -40, width: 260, height: 260, background: 'rgba(30,77,195,.35)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div className="ism-container" style={{ textAlign: 'center', position: 'relative', maxWidth: 720 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,176,0,.14)', border: '1px solid rgba(255,176,0,.35)', borderRadius: 100, padding: '8px 18px', marginBottom: 22 }}>
              <i className="fa-solid fa-shield-heart" style={{ color: 'var(--ism-amber)', fontSize: 13 }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ism-amber)' }}>14-Day Money-Back Guarantee</span>
            </span>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(22px,3.2vw,34px)', fontWeight: 800, color: '#fff', lineHeight: 1.28, marginBottom: 14 }}>
              Experience our services risk-free and enjoy the <span style={{ color: 'var(--ism-amber)' }}>assurance of 100% satisfaction</span>.
            </h2>
            <p style={{ fontFamily: I, fontSize: 15, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, marginBottom: 30 }}>
              Book a free consultation and see how our GHL virtual assistants can start working for your agency this week.
            </p>
            <CTAButton href={APPOINTMENT_HREF}>Click Here to Know More</CTAButton>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .ghls-services-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghls-diff-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .ghls-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ghls-testimonials-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghls-pill-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .ghls-services-grid { grid-template-columns: 1fr !important; }
          .ghls-diff-grid { grid-template-columns: 1fr !important; }
          .ghls-testimonials-grid { grid-template-columns: 1fr !important; }
          .ghls-pill-grid { grid-template-columns: 1fr !important; }
          .ghls-guarantee-row { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </>
  );
}
