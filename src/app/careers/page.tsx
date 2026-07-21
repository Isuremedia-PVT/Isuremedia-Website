'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────────── */

const STATS = [
  { num: '400+', label: 'Global clients',          sub: 'US, UK, and India' },
  { num: '40+',  label: 'In-house specialists',    sub: 'Every major digital discipline' },
  { num: '50+',  label: 'Industries served',        sub: 'From HVAC to SaaS to law firms' },
  { num: '100%', label: 'In-house delivery',        sub: 'No outsourcing. Real accountability.' },
];

const LIFE_COLUMNS = [
  {
    icon: 'fa-chart-line',
    color: '#60A5FA',
    title: 'Career Growth',
    items: [
      'Hands-on exposure to live international client accounts',
      'Learn across SEO, PPC, automation, content, design, and web — not just your core role',
      'Performance-based growth in responsibilities and compensation',
      'Direct access to experienced team leads, no corporate layers in the way',
      'A clear path forward for people who take ownership of their work',
    ],
  },
  {
    icon: 'fa-people-group',
    color: '#34D399',
    title: 'Work Environment',
    items: [
      'In-house team with a collaborative structure — real colleagues, not a remote marketplace',
      'Direct communication culture — you always know where you stand',
      'Focused enough that your work gets seen, structured enough to deliver consistently',
      'Proper tools, documented processes, and a workflow built to move fast',
      'Remote-friendly with a strong team foundation',
    ],
  },
  {
    icon: 'fa-star',
    color: '#FCD34D',
    title: 'Culture',
    items: [
      'Results matter here, not appearances — good work is recognised',
      'Honest feedback flows both ways — from leads to team and back',
      'We hire people who are curious and stay that way',
      'High standards without the unnecessary pressure from poor management',
      'Everyone on the team is here because they chose to be here',
    ],
  },
  {
    icon: 'fa-trophy',
    color: '#F472B6',
    title: 'What You Get',
    items: [
      'Competitive compensation aligned with your skills and growth',
      'The experience of working on diverse accounts across 50+ industries',
      'A portfolio of work you can genuinely be proud of',
      'Skills that make you valuable in the global market, not just locally',
      'A team that pushes you because they hold themselves to the same standard',
    ],
  },
];

const ROLES = [
  {
    icon: 'fa-magnifying-glass',
    title: 'SEO Specialist',
    desc: 'Manage end-to-end SEO for international client accounts — keyword research, on-page, technical audits, and link building.',
    tag: 'Full-time · In-house',
  },
  {
    icon: 'fa-chart-bar',
    title: 'PPC Specialist',
    desc: 'Run Google Ads and Meta Ads campaigns for US and UK clients. Analyse performance and know exactly what to optimise.',
    tag: 'Full-time · In-house',
  },
  {
    icon: 'fa-bolt',
    title: 'GoHighLevel & Automation Specialist',
    desc: 'Build CRM pipelines, automation workflows, and funnels in GoHighLevel. Own the full system from setup to results.',
    tag: 'Full-time · In-house',
  },
  {
    icon: 'fa-pen-nib',
    title: 'Content Writer',
    desc: 'Produce SEO-driven content that ranks and reads well. Writing ability and keyword strategy in equal measure.',
    tag: 'Full-time · In-house',
  },
  {
    icon: 'fa-code',
    title: 'Web Developer',
    desc: 'Build websites in WordPress or Next.js. Clean code, fast performance, and strong attention to design fidelity.',
    tag: 'Full-time · In-house',
  },
  {
    icon: 'fa-palette',
    title: 'Graphic Designer',
    desc: 'Create ad creatives, social assets, and brand materials for digital campaigns. Design that communicates, not just impresses.',
    tag: 'Full-time · In-house',
  },
];

/* ── COMPONENTS ───────────────────────────────────────────────────────── */


/* ══ PAGE ═════════════════════════════════════════════════════════════════ */
export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="cr-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="cr-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>

              {/* LEFT */}
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:20 }}>
                  <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>Careers</span>
                </div>

                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'cr-pulse 2s infinite' }} />
                  JOIN THE TEAM — WE ARE HIRING
                </div>

                <h1 style={{ fontFamily:J, fontSize:'clamp(28px,3vw,48px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.08, margin:'0 0 20px' }}>
                  Shape Your Digital Marketing Career With a Team That{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    Delivers for Global Clients.
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 320 6" preserveAspectRatio="none">
                      <path d="M2 4 Q80 1 160 4 Q240 7 318 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:500 }}>
                  At IsureMedia, we are not just running campaigns — we are building specialists. We work with 400+ clients across the US, UK, and India. Our in-house team covers SEO, PPC, web development, content, design, and automation. If you are serious about growing in this industry, this is where that growth happens.
                </p>

                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="#cr-openings"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    See Open Roles →
                  </a>
                  <a href="mailto:careers@isuremedia.com"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    Send Your CV
                  </a>
                </div>

                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['Full-time in-house roles','US, UK & India client exposure','Clear growth path from day one'].map((b, i) => (
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Company stats panel */}
              <div style={{ position:'relative' }}>
                <div style={{ background:'var(--color-navy)', borderRadius:16, overflow:'hidden', boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)' }}>
                  <div style={{ background:'rgba(255,255,255,.06)', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ flex:1, background:'rgba(255,255,255,.08)', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'rgba(255,255,255,.45)', border:'1px solid rgba(255,255,255,.1)', textAlign:'left' }}>
                      🌍 IsureMedia — Global Operations
                    </div>
                  </div>

                  <div style={{ padding:'24px 20px' }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
                      {[
                        { num:'400+', label:'Active Clients', sub:'US · UK · India', color:'#60A5FA' },
                        { num:'40+',  label:'In-House Team',  sub:'No outsourcing ever', color:'#34D399' },
                        { num:'50+',  label:'Industries',     sub:'Every major sector',  color:'#FCD34D' },
                        { num:'5+',   label:'Years Delivering', sub:'International results', color:'#F472B6' },
                      ].map(stat => (
                        <div key={stat.num} style={{ padding:'16px 14px', background:'rgba(255,255,255,.06)', borderRadius:10, border:'1px solid rgba(255,255,255,.08)' }}>
                          <div style={{ fontFamily:J, fontSize:26, fontWeight:900, color:stat.color, lineHeight:1 }}>{stat.num}</div>
                          <div style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'rgba(255,255,255,.85)', marginTop:4, lineHeight:1.2 }}>{stat.label}</div>
                          <div style={{ fontFamily:I, fontSize:10, color:'rgba(255,255,255,.40)', marginTop:2 }}>{stat.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ padding:'14px 16px', background:'rgba(255,255,255,.04)', borderRadius:10, border:'1px solid rgba(255,255,255,.07)', marginBottom:12 }}>
                      <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'rgba(255,255,255,.45)', letterSpacing:'.07em', textTransform:'uppercase', marginBottom:10 }}>Disciplines we hire for</div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                        {['SEO', 'PPC', 'Web Dev', 'Content', 'Design', 'Automation', 'GHL'].map(d => (
                          <span key={d} style={{ padding:'4px 10px', background:'rgba(30,77,195,.30)', borderRadius:6, fontFamily:J, fontSize:11, fontWeight:700, color:'#93C5FD', border:'1px solid rgba(147,197,253,.15)' }}>{d}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding:'12px 14px', background:'rgba(52,211,153,.07)', borderRadius:8, border:'1px solid rgba(52,211,153,.20)', display:'flex', alignItems:'center', gap:8 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'#34D399', fontSize:13, flexShrink:0 }} />
                      <span style={{ fontFamily:I, fontSize:12, color:'rgba(255,255,255,.65)', lineHeight:1.4 }}>
                        Real accounts. Real results.{' '}
                        <span style={{ color:'#34D399', fontWeight:700 }}>Real growth.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. STATS STRIP ═══════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'60px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="cr-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {STATS.map(s => (
                <div key={s.num} style={{ textAlign:'center', padding:'28px 16px', borderRadius:14, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)' }}>
                  <div style={{ fontSize:38, fontWeight:900, fontFamily:J, color:'var(--ism-amber)', lineHeight:1 }}>{s.num}</div>
                  <div style={{ marginTop:8, fontSize:14, fontWeight:700, color:'#fff', fontFamily:J, lineHeight:1.3 }}>{s.label}</div>
                  <div style={{ marginTop:5, fontSize:12, color:'rgba(255,255,255,.55)', fontFamily:I }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. WHY ISUREMEDIA ════════════════════════════════════════════ */}
        <section className="cr-section" style={{ background:'var(--color-bg-soft)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="cr-why-grid" style={{ display:'grid', gridTemplateColumns:'420px 1fr', gap:72, alignItems:'start' }}>
              {/* Left sticky heading */}
              <div style={{ position:'sticky', top:100 }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', lineHeight:1.12, margin:'0 0 24px' }}>
                  Join a Workplace Where You Are Constantly Challenged to Be Better.
                </h2>
                <a href="#cr-openings"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 18px rgba(255,176,0,.32)', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 26px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 18px rgba(255,176,0,.32)'; }}
                >
                  See Open Roles →
                </a>
              </div>

              {/* Right paragraphs */}
              <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
                {[
                  'At IsureMedia, we believe the best careers are built on real accountability and real exposure. Our team works on live accounts for businesses in the US, UK, and India — running SEO strategies, paid ad campaigns, automation systems, content operations, and web projects that go live for actual clients. Everything you work on here has a direct impact on results, and you will see that impact.',
                  'We have built a team of 40+ specialists across every major digital discipline. When you join us, you do not just get good at one thing in a silo — you get exposure to how all of it fits together. Our SEO specialists understand what makes ads work. Our developers understand what makes pages convert. Our automation team understands how content flows through a funnel. That cross-discipline perspective is what makes ISureMedia professionals stand out.',
                  'We also bring something most digital marketing jobs in India do not: the standards and expectations that come from working with international clients. The briefs are sharper, the accountability is clearer, and the learning curve keeps you growing. If you want a career that builds the kind of experience that travels, this is the right environment.',
                ].map((para, i) => (
                  <p key={i} style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.85, margin:0, padding:'24px 28px', background:'#fff', borderRadius:14, border:'1px solid var(--color-border)', borderLeft:'3px solid var(--color-primary)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. LIFE AT ISUREMEDIA ════════════════════════════════════════ */}
        <section className="cr-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ margin:'0', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                What You Can Expect When You Join Us
              </h2>
            </div>
            <div className="cr-life-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {LIFE_COLUMNS.map(col => (
                <div key={col.title}
                  style={{ padding:'32px 24px', background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid var(--color-border)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <div style={{ width:48, height:48, borderRadius:12, background:`${col.color}18`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, border:`1px solid ${col.color}30` }}>
                    <i className={`fa-solid ${col.icon}`} style={{ color:col.color, fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:16, color:'var(--color-navy)', letterSpacing:'-0.2px' }}>{col.title}</h3>
                  <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ display:'flex', gap:9, alignItems:'flex-start', fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.6 }}>
                        <i className="fa-solid fa-circle-check" style={{ color:'var(--color-primary)', flexShrink:0, marginTop:3, fontSize:12 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. CURRENT OPENINGS ══════════════════════════════════════════ */}
        <section id="cr-openings" className="cr-section" style={{ background:'var(--color-bg-soft)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                We Are Hiring Right Now
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:580, margin:'0 auto', lineHeight:1.7 }}>
                Each role below involves live client work, a team that knows what it is doing, and clear room to grow into a senior specialist.
              </p>
            </div>

            <div className="cr-roles-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:40 }}>
              {ROLES.map(role => (
                <div key={role.title}
                  style={{ display:'flex', gap:20, alignItems:'flex-start', padding:'28px 28px', background:'#fff', borderRadius:14, border:'1px solid var(--color-border)', boxShadow:'0 2px 12px rgba(0,0,0,.04)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 2px 12px rgba(0,0,0,.04)'; }}
                >
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.09)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                    <i className={`fa-solid ${role.icon}`} style={{ color:'var(--color-primary)', fontSize:18 }} />
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, marginBottom:8, flexWrap:'wrap' }}>
                      <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:16, color:'var(--color-navy)', lineHeight:1.2 }}>{role.title}</h3>
                      <span style={{ padding:'4px 12px', background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', borderRadius:100, fontFamily:I, fontSize:11, fontWeight:700, color:'var(--color-primary)', whiteSpace:'nowrap', flexShrink:0 }}>{role.tag}</span>
                    </div>
                    <p style={{ margin:'0 0 16px', fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65 }}>{role.desc}</p>
                    <a href="mailto:careers@isuremedia.com"
                      style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'10px 18px', background:'var(--color-primary)', color:'#fff', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:12, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                      onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='#1840A0'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-1px)'; }}
                      onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.transform=''; }}
                    >
                      Apply Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign:'center', padding:'24px 28px', background:'rgba(30,77,195,.04)', borderRadius:12, border:'1px solid var(--color-border)' }}>
              <p style={{ margin:0, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.7 }}>
                Do not see your role here? We occasionally hire for positions we have not yet posted.{' '}
                <a href="mailto:careers@isuremedia.com" style={{ color:'var(--color-primary)', fontWeight:700, textDecoration:'none' }}>
                  Reach us at careers@isuremedia.com
                </a>{' '}
                with your background and what you are looking for.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 6. LINKEDIN / STAY CONNECTED ═════════════════════════════════ */}
        <section className="cr-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:800, height:800, background:'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ maxWidth:680, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h2 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,3vw,44px)', color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px' }}>
              Not the Right Time? Stay Connected.
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.72)', fontFamily:I, margin:'0 auto 36px', maxWidth:520, lineHeight:1.75 }}>
              Follow us on LinkedIn for updates on new openings, team news, and insights from our work across digital marketing. We share content worth reading for anyone building a serious career in this industry.
            </p>
            <a href="https://www.linkedin.com/company/isuremedia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'16px 32px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:800, fontSize:15, textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.45)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 14px 36px rgba(255,176,0,.60)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 28px rgba(255,176,0,.45)'; }}
            >
              <i className="fa-brands fa-linkedin" style={{ fontSize:18 }} />
              Follow IsureMedia on LinkedIn →
            </a>
            <p style={{ margin:'28px 0 0', fontFamily:I, fontSize:13, color:'rgba(255,255,255,.45)' }}>
              Or write to us directly at{' '}
              <a href="mailto:careers@isuremedia.com" style={{ color:'rgba(255,255,255,.70)', fontWeight:600, textDecoration:'underline' }}>
                careers@isuremedia.com
              </a>{' '}
              whenever you are ready.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @keyframes cr-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
          50%      { box-shadow: 0 0 0 7px rgba(34,197,94,.08); }
        }
        @media (max-width: 640px) {
          .cr-hero    { padding: 56px 0 44px !important; }
          .cr-section { padding-top: 60px !important; padding-bottom: 60px !important; }
        }
        @media (max-width: 960px) {
          .cr-hero-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cr-why-grid   { grid-template-columns: 1fr !important; }
          .cr-life-grid  { grid-template-columns: 1fr 1fr !important; }
          .cr-stats-row  { grid-template-columns: 1fr 1fr !important; }
          .cr-roles-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cr-life-grid  { grid-template-columns: 1fr !important; }
          .cr-stats-row  { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
