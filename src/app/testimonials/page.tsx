'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';


const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const REVIEW_IMAGES = [
  '/review/review-dark-city.webp',
  '/review/review-eichelle-williams.webp',
  '/review/review-ben-potter.webp',
  '/review/review-dev.webp',
  '/review/review-carter-stewart.webp',
  '/review/review-rex-brown.webp',
  '/review/review-ryan-mitchell.webp',
  '/review/review-felix-rosado.webp',
  '/review/review-nathan-brown.webp',
  '/review/review-david-goldstein.webp',
  '/review/review-ken-herbert.webp',
  '/review/review-tony-gravley.webp',
  '/review/review-kranky-k9.webp',
  '/review/review-sharon-longridge.webp',
  '/review/review-regine-villariza.webp',
];

const VIDEO_TESTIMONIALS = [
  { id: 'fw3mbpKINlk', name: 'Jonathan', company: 'businesswarrior.com', quote: "You guys have been awesome. Just the technical availability, the implementation, the communication, you guys have just hit all the high marks." },
  { id: 'gGU8SC3epSI', name: 'Jennifer', company: 'Positive Approach Life & ADHD Coaching', quote: "They were very professional. They have multiple people working on your project so you really feel like you're working with a team." },
  { id: 'FOKInCr5fDA', name: 'Sheri Hess', company: 'Laughing Chameleon Marketing', quote: "They have been invaluable to me." },
  { id: '_TU_JzMgeQY', name: 'Henry Johnson', company: 'www.frtdesk.com', quote: "I think you guys have been fantastic" },
  { id: '4L1w810IJSU', name: 'Kiro Ghobrial', company: 'Care Genius', quote: "Really appreciate them. Highly Recommend" },
  { id: 'eBYRm27STIQ', name: 'Judith Christelle Kamdem Simo', company: 'Écosystème Bien-être et Succès', quote: "What impresses me the most is that I ask for one thing and they always go further." },
  { id: 'fahX52XsGWM', name: 'Ty Brown', company: 'Tythedogguy', quote: "There is no one I have found that does a better job, cares more about a client, does it for a reasonable fee and is willing to just do anything and work with any project to make sure that he's making his clients happy." },
  { id: 'orSfNgD-jgk', name: 'Ed Owens', company: 'Grief Recovery Institute', quote: "They are very accessible, very timely in their response, very customer service focussed, and it's been a pleasure to work with Isuremedia." },
  { id: 'x6gMIYAIZOw', name: 'Scott Gilbert', company: 'Aesthetic Flight', quote: "My best review is the fact that I will be making use of their services again." },
  { id: 'jb_JU0Z8jLc', name: 'Ashish Saxena', company: 'Home Optima', quote: "These folks are super knowledgeable and their just attitude to help out, find solutions to very unique problems actually just has been outstanding." },
  { id: 'tkC6FZ40Iao', name: 'Jason Aquino', company: "DJ's & MC's", quote: "We're very happy with working with ISUREMEDIA, and we'll be reaching out to them again for other projects in the future." },
  { id: 'WmHC5eZeUl4', name: 'Tony Gravley', company: 'K9 Next Generation', quote: "I have no idea how they keep up the pace that they do, but they really really do." },
  { id: 'PzNaA-ehMbc', name: 'Mike MC', company: 'Lead Gains', quote: "Thank you very much for this guidance and for this help." },
  { id: 'itCkmJ0lcQI', name: 'Stephen Petrucci', company: 'Systemized AI Growth Consultancy', quote: "It saved me a lot of time and a lot of stress, and the quality of work I was blown away with." },
  { id: 'iYc9lywnv4M', name: 'Curtis Tofa', company: 'Commanders Rebellion', quote: "Massive thanks to Isuremedia. Thank you for all the support that you have given me so far and I look forward to building wonders and doing things together in the future." },
  { id: '8IfNfNSmDRs', name: 'Tony Zito', company: 'Zito Marketing Strategies', quote: "I've been through several different VA's, tried different services and they knew more about Go High Level than anybody i have come acros." },
  { id: '6xvWqLQ_k7Y', name: 'Juan De Los Santos', company: 'Innovat3 Solutions', quote: "Isuremedia really is filled with experts." },
  { id: 'eQ8kni-hnt0', name: 'Rebecca Korn', company: 'RISE REIGN RULE', quote: "The ways that they have supported my business, the ways that they have pushed back in certain ways, creative evolutions and the understanding with really hearing me has been something of true dream working with them." },
  { id: '921GSv9XECQ', name: 'Yamuna Bihari', company: 'Yamuna Coach', quote: "I would definitely recommend any business owners specially online business owners who have tech needs to outsource their technicess." },
  { id: 'ZZ-rvEpIoV4', name: 'David', company: 'Agentmate.IO', quote: "And yeah, just feels good to have that confidence and I know that I've got a team." },
  { id: 'w3J5yy3VpwQ', name: 'David Goldstein', company: 'Sales Fusion', quote: "I am so glad that we met and you've been amazingly helpful." },
  { id: 'gNd2O1YVioo', name: 'William Haas', company: 'Vyve Wellness', quote: "The thing that I liked the most working with them was they really took an opportunity to understand my business and knock out some strategy to show me how we might optimise what we already had in place." },
  { id: 'dg3ka4EWF38', name: 'Tammy', company: 'TC Brand Consulting', quote: "He does his best and tries to work as closely with every client he works with." },
  { id: '_ihNcOZaL0U', name: 'Andrea Petrone', company: '', quote: "And in another words he's super reliable and it's the most important thing when you hire a web-developer and designer." },
  { id: 'Q8nar6McoZs', name: 'Jodi', company: '', quote: "He's my Go-to-guy. If there's anything that is just a bit too technical or bit too difficult, I just give him a shoutout and he's onto it straight away. Puts all the pieces together so I don't have to worry about that." },
];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', paddingTop: '56.25%', boxShadow: '0 28px 72px rgba(0,35,83,.18)', background: '#000' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: 'none' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 68, height: 68, borderRadius: '50%', background: 'rgba(255,176,0,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.35)' }}>
            <i className="fa-solid fa-play" style={{ color: 'var(--color-navy)', fontSize: 22, marginLeft: 4 }} />
          </span>
        </button>
      )}
    </div>
  );
}

const TRUST_BARS = [
  {
    line: <>200+ agencies and businesses have <span style={{ color: 'var(--ism-amber)' }}>trusted Isuremedia.</span></>,
    sub: 'From startups to enterprise brands, across every industry.',
  },
  {
    line: <>4.5/5 average rating across <span style={{ color: 'var(--ism-amber)' }}>270+ verified reviews.</span></>,
    sub: 'Google, Upwork, and Clutch — real feedback, real results.',
  },
  {
    line: <>98% of clients <span style={{ color: 'var(--ism-amber)' }}>stay with us year after year.</span></>,
    sub: 'Once agencies work with Isuremedia, they rarely leave.',
  },
];

function TrustBar({ index }: { index: number }) {
  const t = TRUST_BARS[index % TRUST_BARS.length];
  return (
    <div className="tsm-trust-bar" style={{ gridColumn: '1 / -1', background: 'var(--color-primary)', borderRadius: 16, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
      <div>
        <div style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
          {t.line}
        </div>
        <div style={{ fontFamily: I, fontSize: 14, color: 'rgba(255,255,255,.78)' }}>
          {t.sub}
        </div>
      </div>
      <a href="#cta"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
      >
        Join Them <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
      </a>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="tsm-hero-section" style={{ background: 'var(--color-bg-soft)', padding: '96px 0 110px', position: 'relative', overflow: 'hidden' }}>
          <div className="ism-container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="tsm-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: 20 }}>
                  What Our <span style={{ color: 'var(--color-primary)' }}>Clients</span> Say
                </h1>
                <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 36, maxWidth: 520 }}>
                  Don&apos;t take our word for it. Hear directly from the businesses we&apos;ve helped grow — from local trades to global SaaS companies.
                </p>
                <div className="tsm-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Become A Success Story <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="tsm-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,35,83,.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
                    alt="Happy Isuremedia clients"
                    style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                    className="tsm-hero-img"
                  />
                </div>
                <div className="tsm-float-badge" style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 12px 32px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--color-primary)', fontSize: 17 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>200+</div>
                    <div style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)' }}>Happy Clients</div>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 70, zIndex: 1, pointerEvents: 'none' }}>
            <path d="M0,50 C360,110 1080,-10 1440,50 L1440,100 L0,100 Z" fill="#fff" />
          </svg>
          <style>{`
            @media(max-width:900px){.tsm-hero-section{padding:56px 0 100px !important;} .tsm-hero-grid{grid-template-columns:1fr!important; gap:32px!important;} .tsm-hero-img{height:280px!important;}}
            @media(max-width:540px){.tsm-hero-section{padding:40px 0 110px !important;} .tsm-hero-section svg{height:38px!important;} .tsm-hero-btns{flex-direction:column!important; align-items:stretch!important; gap:12px!important;} .tsm-hero-btns a{width:100%!important; text-align:center!important; justify-content:center!important; box-sizing:border-box!important;} .tsm-hero-img{height:200px!important;} .tsm-float-badge{bottom:12px!important;left:12px!important;padding:12px 16px!important;}}
          `}</style>
        </section>

        {/* ── IMAGE TESTIMONIALS ── */}
        <section id="image-testimonials" className="tsm-img-section" style={{ padding: '80px 0 96px', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: J, fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: 14 }}>
                Straight From Our Clients
              </h2>
              <p style={{ fontFamily: I, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto' }}>
                Real reviews, screenshotted straight from the source — no edits, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>no cherry-picking</span>.
              </p>
            </div>

            <div className="itm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              {REVIEW_IMAGES.flatMap((src, i) => {
                const items = [
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`Client review ${i + 1}`}
                    className="itm-card"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16, border: '1px solid var(--color-border)' }}
                  />,
                ];
                if (i === 4 || i === 9 || i === 14) {
                  items.push(<TrustBar key={`bar-${i}`} index={[4, 9, 14].indexOf(i)} />);
                }
                return items;
              })}
            </div>
          </div>

          <style>{`
            @media (max-width: 860px) {
              .itm-grid { grid-template-columns: 1fr !important; }
              .tsm-img-section { padding: 56px 0 72px !important; }
              .tsm-trust-bar { padding: 24px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
            }
            @media (max-width: 540px) {
              .tsm-img-section { padding: 40px 0 56px !important; }
            }
          `}</style>
        </section>

        {/* ── VIDEO TESTIMONIAL ── */}
        <section id="video-testimonials" className="tsm-video-section" style={{ padding: '100px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>

          {/* Dot grid texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(30,77,195,.045) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

            {/* Rule label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 72 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Do Not Take Our Word for It</span>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
            </div>

            {VIDEO_TESTIMONIALS.flatMap((t, idx) => {
              const block = (
              <div key={idx} className="tm-video-grid" style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 80, alignItems: 'center', marginBottom: idx < VIDEO_TESTIMONIALS.length - 1 ? 96 : 0 }}>

                {/* ── LEFT: Quote ── */}
                <div>
                  {/* Giant decorative quote mark */}
                  <div style={{ fontFamily: 'Georgia,"Times New Roman",serif', fontSize: 160, lineHeight: 0.75, color: 'var(--ism-amber)', marginBottom: 16, userSelect: 'none' }}>&ldquo;</div>

                  <p style={{ fontFamily: J, fontSize: 'clamp(18px,1.9vw,24px)', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.58, margin: '0 0 36px', letterSpacing: '-0.3px' }}>
                    {t.quote}
                  </p>

                  <div style={{ width: 44, height: 4, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 32 }} />

                  {/* Client row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                    <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary) 0%, #3B6CF5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 20px rgba(30,77,195,.30)' }}>
                      <i className="fa-solid fa-user" style={{ color: '#fff', fontSize: 20 }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2, marginBottom: 4 }}>{t.name}</div>
                      {t.company && (
                        <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>{t.company}</div>
                      )}
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 17 }} />
                    ))}
                  </div>
                </div>

                {/* ── RIGHT: Video ── */}
                <div style={{ position: 'relative' }}>
                  {/* Amber shadow box behind video */}
                  <div style={{ position: 'absolute', top: 18, left: 18, right: -18, bottom: -18, background: 'var(--ism-amber)', borderRadius: 24, opacity: 0.15 }} />
                  {/* Blue shadow box */}
                  <div style={{ position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, background: 'var(--color-primary)', borderRadius: 24, opacity: 0.10 }} />
                  <VideoEmbed videoId={t.id} title={`${t.name} — client testimonial`} />
                </div>

              </div>
              );
              const items = [block];
              if (idx === 8 || idx === 17) {
                items.push(<div key={`vbar-${idx}`} style={{ margin: '96px 0' }}><TrustBar index={[8, 17].indexOf(idx) + 1} /></div>);
              }
              return items;
            })}
          </div>

          <style>{`
            @media (max-width: 960px) {
              .tsm-video-section { padding: 64px 0 80px !important; }
              .tm-video-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
            @media (max-width: 768px) {
              .tm-video-grid { padding: 0 !important; }
              .tsm-video-section > div { padding: 0 20px !important; }
            }
            @media (max-width: 540px) {
              .tsm-video-section { padding: 48px 0 64px !important; }
            }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
