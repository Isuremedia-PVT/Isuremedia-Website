import { Lora } from "next/font/google";
import Script from "next/script";
import ClientsMarquee from "@/components/ClientsMarquee";
import Services from "@/components/Services";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-lora",
});

export const metadata = {
  title: "LevelUp 2026 | Isuremedia, Your White Label Growth Partner",
  description: "Meet Isuremedia at GHL LevelUp 2026, October 26-29 in Dallas, TX. Scale your agency with white-label GHL development, funnels, automation, SEO, PPC, websites and creative fulfillment.",
  alternates: { canonical: "/events/LevelUp2026" },
  openGraph: {
    title: "LevelUp 2026 | Isuremedia, Your White Label Growth Partner",
    description: "Meet Isuremedia at GHL LevelUp 2026, October 26-29 in Dallas, TX. Scale your agency with white-label GHL development, funnels, automation, SEO, PPC, websites and creative fulfillment.",
    type: "website",
    url: "/events/LevelUp2026",
  },
};

export default function LevelUp2026Page() {
  return (
    <>
      <style>{`
        .lu2026{
          --navy:#002353;
          --navy-deep:#00152f;
          --blue:#1e4dc3;
          --blue-50:#e8eefb;
          --amber:#ffb000;
          --amber-hover:#d69300;
          --amber-50:#fcf7ec;
          --ink:#002353;
          --muted:rgba(0,35,83,.64);
          --soft:#f7f8fa;
          --line:#e5e7eb;
          --white:#fff;
          --J:var(--font-jakarta,"Plus Jakarta Sans",sans-serif);
          --I:var(--font-inter,Inter,sans-serif);
        }
        .lu2026 *{box-sizing:border-box}
        .lu2026{font-family:var(--I);color:var(--ink);background:#fff;line-height:1.6;scroll-behavior:smooth}
        .lu2026 a{text-decoration:none;color:inherit}
        .lu2026 .container{width:min(1160px,92%);margin:auto}
        .lu2026 .nav{display:flex;justify-content:space-between;align-items:center;padding:22px 0}
        .lu2026 .brand-logo{height:34px;width:auto;display:block}
        .lu2026 .nav-cta{padding:11px 18px;border:1px solid rgba(255,255,255,.4);border-radius:999px;color:#fff;font-family:var(--J);font-weight:700;font-size:14px}

        /* ── Hero (real photo banner, diagonal-cut bottom) ── */
        .lu2026 .hero{position:relative;background:url('/banner/event_banner.webp') center 30%/cover no-repeat;color:#fff;overflow:hidden;clip-path:polygon(0 0,100% 0,100% calc(100% - 70px),0 100%);padding-bottom:70px}
        .lu2026 .hero:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,15,36,.82) 0%,rgba(0,25,58,.86) 55%,rgba(0,15,36,.94) 100%);pointer-events:none}
        .lu2026 .hero-ring{position:absolute;top:-70px;right:-70px;width:280px;height:280px;border-radius:50%;border:1px solid rgba(255,176,0,.4);pointer-events:none;z-index:0}
        .lu2026 .hero-ring:after{content:"";position:absolute;inset:34px;border-radius:50%;border:1px solid rgba(255,255,255,.25)}
        .lu2026 .nav,.lu2026 .hero-inner{position:relative;z-index:1}
        .lu2026 .hero-inner{max-width:760px;margin:0 auto;text-align:center;padding:36px 0 60px}
        .lu2026 .eyebrow{display:inline-flex;gap:9px;align-items:center;background:rgba(255,176,0,.14);border:1px solid rgba(255,176,0,.45);padding:8px 14px;border-radius:999px;font-family:var(--J);font-size:12.5px;font-weight:700;letter-spacing:1.1px;color:var(--amber);text-transform:uppercase}
        .lu2026 .eyebrow:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--amber)}
        .lu2026 h1{font-family:var(--J);font-size:clamp(38px,5vw,64px);font-weight:800;line-height:1.06;letter-spacing:-2px;margin:20px 0;color:#fff;text-shadow:0 2px 20px rgba(0,8,20,.4)}
        .lu2026 h1 em,.lu2026 h2 em,.lu2026 h3 em{font-family:var(--font-lora),serif;font-style:italic;font-weight:600}
        .lu2026 h1 em{color:var(--amber)}
        .lu2026 .hero p{font-size:18px;color:#dbe6fb;max-width:640px;margin:0 auto}
        .lu2026 .actions{display:flex;flex-wrap:wrap;gap:13px;margin-top:28px;justify-content:center}
        .lu2026 .btn{display:inline-flex;justify-content:center;align-items:center;padding:15px 22px;border-radius:10px;font-family:var(--J);font-weight:700;font-size:15px;border:1px solid transparent;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .lu2026 .btn-primary{background:var(--amber);color:var(--navy-deep);box-shadow:0 10px 28px rgba(255,176,0,.32)}
        .lu2026 .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(255,176,0,.4)}
        .lu2026 .btn-ghost{border:1px solid var(--blue);color:var(--blue)}
        .lu2026 .btn-ghost:hover{background:var(--blue-50)}
        .lu2026 .hero .btn-ghost{border:1px solid rgba(255,255,255,.5);color:#fff}
        .lu2026 .hero .btn-ghost:hover{background:rgba(255,255,255,.1)}

        /* ── About the event ── */
        .lu2026 .event-card-wrap{position:relative;z-index:2;margin-top:-90px;padding:0 0 40px}
        .lu2026 .event-card{position:relative;max-width:820px;margin:0 auto;background:#fff;border-radius:22px;box-shadow:0 26px 60px rgba(0,35,83,.16);padding:34px 36px 26px;text-align:left;overflow:hidden}
        .lu2026 .event-card:after{content:"";position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,var(--blue) 0%,var(--amber) 100%)}
        .lu2026 .event-eyebrow{display:inline-flex;align-items:center;gap:7px;font-family:var(--J);font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--amber-hover);margin-bottom:8px}
        .lu2026 .event-eyebrow:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--amber)}
        .lu2026 .event-card:before{content:"";position:absolute;top:-80px;right:-80px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(255,176,0,.16) 0%,transparent 70%);pointer-events:none}
        .lu2026 .event-band-top{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .lu2026 .event-band-text{flex:1;min-width:0}
        .lu2026 .event-logo{height:44px;width:auto;flex-shrink:0}
        .lu2026 .event-card h2{color:var(--ink);margin:0 0 6px;font-size:clamp(13px,1.3vw,18px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .lu2026 .text-amber{color:var(--amber-hover)}
        .lu2026 .event-card p{color:var(--muted);font-size:13.5px;margin:0}
        .lu2026 .event-stats{position:relative;z-index:1;display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:20px}
        .lu2026 .event-stat{text-align:center;background:var(--blue-50);border:1px solid var(--ism-blue-200,#94aeee);border-radius:12px;padding:10px 4px}
        .lu2026 .event-stat strong{display:block;font-family:var(--J);font-size:16px;font-weight:800;color:var(--blue);margin-bottom:2px}
        .lu2026 .event-stat span{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--muted)}
        .lu2026 .event-stat span i{font-size:9px;color:var(--amber-hover)}

        /* ── What we do (card grid, tinted band) ── */
        .lu2026 .capability-wrap{background:#fff;padding:34px 0 76px}
        .lu2026 .hero-card{position:relative;color:var(--ink);max-width:1160px;margin:0 auto;text-align:left}
        .lu2026 .agenda-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:28px;flex-wrap:wrap}
        .lu2026 .agenda-cta{padding:10px 16px;font-size:13px;flex-shrink:0}
        .lu2026 .agenda-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:34px}
        .lu2026 .agenda-item{display:block;background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 22px;text-align:left;transition:box-shadow .18s ease,transform .18s ease}
        .lu2026 .agenda-item:hover{box-shadow:0 16px 40px rgba(0,35,83,.12);transform:translateY(-3px)}
        .lu2026 .agenda-icon{width:46px;height:46px;border-radius:12px;background:var(--navy);color:var(--amber);display:grid;place-items:center;font-size:18px;margin:0 0 18px}
        .lu2026 .agenda-icon-amber{background:var(--navy);color:#7cc0ff}
        .lu2026 .agenda-item h4{font-family:var(--J);font-size:15.5px;font-weight:800;margin:0 0 8px;color:var(--ink);text-transform:none;letter-spacing:normal}
        .lu2026 .agenda-item p{margin:0 0 16px;font-size:13.5px;color:var(--muted)}
        .lu2026 .agenda-link{display:inline-block;font-family:var(--J);font-size:13px;font-weight:800;color:var(--ink)}
        .lu2026 .agenda-item:hover .agenda-link{color:var(--blue)}
        .lu2026 .hero-card > .btn-primary{display:flex;width:fit-content;margin-left:auto;margin-right:auto}

        .lu2026 .photo-card{position:relative;border-radius:20px;overflow:hidden;height:340px;box-shadow:0 20px 50px rgba(0,35,83,.14)}
        .lu2026 .photo-card img{width:100%;height:100%;object-fit:cover;object-position:75% 35%;display:block}
        .lu2026 .photo-badge{position:absolute;left:16px;right:16px;bottom:16px;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);border-radius:14px;padding:14px 16px;display:flex;align-items:baseline;gap:10px;box-shadow:0 10px 30px rgba(0,35,83,.18)}
        .lu2026 .photo-badge strong{font-family:var(--J);font-size:24px;font-weight:800;color:var(--blue)}
        .lu2026 .photo-badge span{font-size:13px;color:var(--muted);line-height:1.3}


        .lu2026 .news-band{background:#fff}
        .lu2026 .news-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:22px;align-items:stretch}
        .lu2026 .news-photo-card{position:relative;display:block;border-radius:16px;overflow:hidden;min-height:380px;box-shadow:0 16px 40px rgba(0,35,83,.12)}
        .lu2026 .news-photo-card img{width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0}
        .lu2026 .news-overlay{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(180deg,transparent 0%,rgba(0,15,36,.55) 40%,rgba(0,15,36,.92) 100%);padding:70px 20px 20px;color:#fff}
        .lu2026 .news-overlay h3{font-family:var(--J);font-size:16.5px;font-weight:800;color:#fff;margin:8px 0 10px;line-height:1.3}
        .lu2026 .news-tag{display:inline-block;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.35);color:#fff;font-family:var(--J);font-size:11px;font-weight:800;letter-spacing:.4px;text-transform:uppercase;padding:5px 11px;border-radius:999px}
        .lu2026 .news-meta{font-family:var(--J);font-size:12.5px;font-weight:700;color:var(--blue)}
        .lu2026 .news-overlay .news-meta{color:#ffd679}

        .lu2026 .about-band{background:#fff}
        .lu2026 .about-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:center}
        .lu2026 .about-collage{position:relative;height:420px}
        .lu2026 .about-photo{position:absolute;border-radius:20px;object-fit:cover;box-shadow:0 20px 50px rgba(0,35,83,.16);border:5px solid #fff}
        .lu2026 .about-photo-main{width:78%;height:88%;top:0;left:0;z-index:2}
        .lu2026 .about-photo-sm{width:52%;height:52%;bottom:0;right:0;z-index:3}
        .lu2026 .about-dots{position:absolute;top:-24px;right:6%;width:110px;height:110px;background-image:radial-gradient(var(--blue) 2.5px,transparent 2.5px);background-size:14px 14px;opacity:.25;z-index:1}
        .lu2026 .text-blue{color:var(--blue)}
        .lu2026 .solution-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}
        .lu2026 .solution-card{display:flex;align-items:center;gap:9px;background:var(--blue-50);border:1px solid var(--ism-blue-200,#94aeee);border-radius:11px;padding:12px 16px;font-family:var(--J);font-weight:700;font-size:13.5px;color:var(--navy)}
        .lu2026 .solution-card i{color:var(--blue);font-size:12px}

        section{padding:0}
        .lu2026 section{padding:76px 0}
        .lu2026 .section-head{max-width:760px;margin-bottom:34px}
        .lu2026 .section-head-center{max-width:640px;margin:0 auto 44px;text-align:center}
        .lu2026 .kicker{font-family:var(--J);color:var(--blue);font-size:12.5px;font-weight:800;letter-spacing:1.3px;text-transform:uppercase}
        .lu2026 h2{font-family:var(--J);font-size:clamp(30px,3.6vw,44px);font-weight:800;line-height:1.1;letter-spacing:-1.4px;margin:12px 0;color:var(--ink)}
        .lu2026 h3{color:var(--ink)}
        .lu2026 .section-head p{color:var(--muted);font-size:16.5px}

        .lu2026 .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .lu2026 .card{border:1px solid var(--line);border-radius:18px;padding:30px 24px;background:white;text-align:center;transition:box-shadow .18s ease,transform .18s ease}
        .lu2026 .card:hover{box-shadow:0 16px 40px rgba(0,35,83,.1);transform:translateY(-3px)}
        .lu2026 .icon{width:52px;height:52px;display:grid;place-items:center;border-radius:50%;background:var(--blue-50);color:var(--blue);font-size:21px;margin:0 auto 16px;border:1px solid var(--ism-blue-200,#94aeee)}
        .lu2026 .card h3{font-family:var(--J);margin:0 0 8px;font-size:19px;font-weight:800}
        .lu2026 .card p{margin:0;color:var(--muted);font-size:14.5px}

        .lu2026 .band{background:var(--soft)}
        .lu2026 .split{display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:center}
        .lu2026 .checklist{list-style:none;padding:0;margin:24px 0 0}
        .lu2026 .checklist li{margin:13px 0;padding-left:30px;position:relative}
        .lu2026 .checklist li:before{content:"✓";position:absolute;left:0;top:0;color:var(--blue);font-weight:900}

        .lu2026 .process{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:8px}
        .lu2026 .step{padding:22px;border:1px solid var(--line);border-radius:16px;background:white;transition:box-shadow .18s ease,transform .18s ease}
        .lu2026 .step:hover{box-shadow:0 16px 40px rgba(0,35,83,.1);transform:translateY(-3px)}
        .lu2026 .process-icon{width:44px;height:44px;border-radius:10px;background:var(--blue-50);border:1px solid var(--ism-blue-200,#94aeee);color:var(--blue);display:grid;place-items:center;font-size:17px;margin-bottom:14px}
        .lu2026 .step h3{font-family:var(--J);font-size:17.5px;font-weight:800;margin:0 0 6px}
        .lu2026 .step p{margin:0;color:var(--muted);font-size:14px}

        .lu2026 .form-wrap{display:grid;grid-template-columns:.85fr 1.15fr;gap:40px;align-items:start}
        .lu2026 .form-panel{background:white;border:1px solid var(--line);border-radius:20px;padding:28px;box-shadow:0 20px 55px rgba(0,10,30,.18)}
        .lu2026 .connect-center{display:flex;flex-direction:column;align-items:center;text-align:center}
        .lu2026 .connect-center .form-panel{width:100%;max-width:900px;margin-top:36px}

        .lu2026 footer{background:var(--navy-deep);color:#c3d1ee;padding:30px 0}
        .lu2026 .footer-row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center}
        .lu2026 .footer-social{display:flex;gap:10px}
        .lu2026 .footer-social a{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.25);display:grid;place-items:center;color:#c3d1ee;font-size:13px;transition:all .15s ease}
        .lu2026 .footer-social a:hover{background:var(--amber);border-color:var(--amber);color:var(--navy-deep)}
        .lu2026 .footer-row .brand-logo{height:30px}
        .lu2026 .small{font-size:13px !important;color:#8fa3cc}

        @media(max-width:1024px){
          .lu2026 .hero-grid,.lu2026 .split,.lu2026 .form-wrap,.lu2026 .about-grid{grid-template-columns:1fr}
          .lu2026 .cards{grid-template-columns:1fr 1fr}
          .lu2026 .news-grid{grid-template-columns:1fr 1fr}
          .lu2026 .news-grid a:last-child{grid-column:1/-1}
          .lu2026 .news-photo-card{min-height:260px}
          .lu2026 .process{grid-template-columns:1fr 1fr}
          .lu2026 .agenda-grid{grid-template-columns:1fr 1fr}
          .lu2026 .event-card{max-width:600px;padding:26px}
          .lu2026 h1{letter-spacing:-1.4px}
          .lu2026 .about-collage{order:2;height:320px;width:100%;max-width:420px;margin:30px auto 0}
        }
        @media(max-width:768px){
          .lu2026 .container{width:100%;padding:0 20px;margin:auto}
          .lu2026 .nav-cta{display:none}
          .lu2026 .cards,.lu2026 form,.lu2026 .process,.lu2026 .news-grid{grid-template-columns:1fr}
          .lu2026 .event-card{padding:22px 18px;border-radius:18px}
          .lu2026 .event-band-top{flex-direction:column;align-items:flex-start;gap:14px}
          .lu2026 .event-card h2{white-space:normal;overflow:visible;text-overflow:clip}
          .lu2026 .event-logo{height:34px}
          .lu2026 .event-card-wrap{margin-top:-50px;padding-bottom:30px}
          .lu2026 .event-stats{grid-template-columns:1fr 1fr 1fr;gap:8px}
          .lu2026 section{padding:52px 0}
          .lu2026 .capability-wrap{padding:24px 0 52px}
          .lu2026 .hero-ring{width:200px;height:200px;top:-50px;right:-50px}
          .lu2026 .photo-card{height:240px}
          .lu2026 .hero{clip-path:polygon(0 0,100% 0,100% calc(100% - 36px),0 100%);padding-bottom:36px}
          .lu2026 .agenda-grid{grid-template-columns:1fr;gap:6px}
          .lu2026 .agenda-head{flex-direction:column;align-items:flex-start}
        }
      `}</style>

      <div className={`lu2026 ${lora.variable}`}>
        <header className="hero">
          <div className="hero-ring" />
          <div className="container">
            <nav className="nav">
              <img src="/isuremedia-light.webp" alt="Isuremedia" className="brand-logo" />
              <a className="nav-cta" href="#connect">Partner with Us →</a>
            </nav>
            <div className="hero-inner">
              <div className="eyebrow">GHL LevelUp 2026 &middot; Agency Growth</div>
              <h1>Your growth engine.<br /><em>Our fulfillment team.</em></h1>
              <p>Turn more opportunities into revenue with Isuremedia, your behind-the-scenes white-label partner for GoHighLevel, digital marketing, websites, automation and creative execution.</p>
              <div className="actions">
                <a className="btn btn-primary" href="#connect">Explore a Partnership</a>
                <a className="btn btn-ghost" href="#services">See Our Services</a>
              </div>
            </div>
          </div>
        </header>

        <div className="event-card-wrap">
          <div className="container">
            <div className="event-card">
              <div className="event-band-top">
                <div className="event-band-text">
                  <div className="event-eyebrow">We&rsquo;re exhibiting at</div>
                  <h2>Stop guessing. <em className="text-amber">Start growing.</em></h2>
                  <p>GoHighLevel&rsquo;s flagship conference. Isuremedia will be there.</p>
                </div>
                <img className="event-logo" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bqd3A7Wt0iWPLpxnwLdJ/media/6a94d40cc71cb92aef017ad0.svg" alt="GoHighLevel" />
              </div>
              <div className="event-stats">
                <div className="event-stat"><strong>Oct 26&ndash;29</strong><span><i className="fa-solid fa-calendar" /> 2026</span></div>
                <div className="event-stat"><strong>Dallas</strong><span><i className="fa-solid fa-location-dot" /> Texas</span></div>
                <div className="event-stat"><strong>1,000+</strong><span><i className="fa-solid fa-users" /> Attendees</span></div>
                <div className="event-stat"><strong>60+</strong><span><i className="fa-solid fa-microphone" /> Speakers</span></div>
                <div className="event-stat"><strong>300+</strong><span><i className="fa-solid fa-bolt" /> New features</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="capability-wrap">
          <div className="container">
            <div className="hero-card">
              <div className="agenda-head">
                <div>
                  <h2>How Isuremedia can help you <em className="text-blue">scale.</em></h2>
                </div>
              </div>
              <div className="agenda-grid">
                <a className="agenda-item" href="/gohighlevel-development-services">
                  <div className="agenda-icon"><i className="fa-solid fa-gears" /></div>
                  <h4>GoHighLevel Builds &amp; Funnels</h4>
                  <p>Full GHL implementation, from funnels to automations.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/gohighlevel-white-label-support-services">
                  <div className="agenda-icon"><i className="fa-solid fa-tags" /></div>
                  <h4>White-Label Fulfillment</h4>
                  <p>Delivered under your brand, QA&rsquo;d and supported end to end.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/marketing-automation-agency">
                  <div className="agenda-icon"><i className="fa-solid fa-bolt" /></div>
                  <h4>Automation &amp; CRM</h4>
                  <p>Workflows, lead routing and CRM setup that just works.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/nodejs-development-services">
                  <div className="agenda-icon"><i className="fa-solid fa-code" /></div>
                  <h4>Web Development</h4>
                  <p>Custom builds in Node, PHP/Laravel and Python.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/websites-and-funnels">
                  <div className="agenda-icon"><i className="fa-solid fa-globe" /></div>
                  <h4>Websites &amp; E-commerce</h4>
                  <p>WordPress, Shopify and custom-built sites that perform.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/api-integration-services">
                  <div className="agenda-icon"><i className="fa-solid fa-plug" /></div>
                  <h4>API Integration</h4>
                  <p>Connect your tools and platforms end to end.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/seo-services">
                  <div className="agenda-icon"><i className="fa-solid fa-magnifying-glass-chart" /></div>
                  <h4>SEO &amp; Paid Media</h4>
                  <p>Technical SEO, Google Ads and Meta Ads that convert.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
                <a className="agenda-item" href="/graphic-design-agency">
                  <div className="agenda-icon"><i className="fa-solid fa-palette" /></div>
                  <h4>Creative Support</h4>
                  <p>Graphic design, video and content production on demand.</p>
                  <span className="agenda-link">Explore now →</span>
                </a>
              </div>
              <a className="btn btn-primary" style={{ marginTop: 8 }} href="#connect">Start the Conversation</a>
            </div>
          </div>
        </div>

        <ClientsMarquee />

        <section className="about-band">
          <div className="container about-grid">
            <div className="about-collage">
              <img className="about-photo about-photo-main" src="/career-about/IMG_3431.webp" alt="Isuremedia team at work" />
              <img className="about-photo about-photo-sm" src="/career-about/IMG_3508.webp" alt="Isuremedia office" />
              <div className="about-dots" />
            </div>
            <div>
              <h2>Your behind-the-scenes <em className="text-blue">growth partner.</em></h2>
              <p style={{ color: "var(--muted)", fontSize: 16.5 }}>An in-house digital marketing agency built on US strategy and India-based execution, working as an extension of agency teams since 2017.</p>
              <div className="solution-row">
                <div className="solution-card"><i className="fa-solid fa-check" /> White-label for agencies</div>
                <div className="solution-card"><i className="fa-solid fa-check" /> Direct for businesses</div>
              </div>
              <ul className="checklist" style={{ marginTop: 20 }}>
                <li>9+ years delivering measurable growth</li>
                <li>150+ agencies and businesses served</li>
              </ul>
              <a className="btn btn-primary" style={{ marginTop: 24 }} href="/about">Discover More →</a>
            </div>
          </div>
        </section>

        <Services />

        <section className="band">
          <div className="container split">
            <div>
              <h2>Sell the solution. <em className="text-blue">We help deliver it.</em></h2>
              <p style={{ color: "var(--muted)" }}>Expand your service menu without immediately expanding your payroll. We work as an extension of your team, helping you protect the client relationship while increasing delivery capacity.</p>
              <ul className="checklist">
                <li>White-label delivery under your brand</li>
                <li>Dedicated support across projects and platforms</li>
                <li>Flexible engagement options for growing agencies</li>
                <li>Project management, QA and implementation support</li>
                <li>Experience across multiple industries and marketing stacks</li>
              </ul>
            </div>
            <div className="photo-card">
              <img src="/career-about/Team image for GMB new 1.webp" alt="The Isuremedia team" />
              <div className="photo-badge">
                <strong>150+</strong>
                <span>agencies &amp; businesses served across 9+ years</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="agenda-head">
              <div>
                <h2>From first conversation to <em className="text-blue">reliable fulfillment.</em></h2>
              </div>
            </div>
            <div className="process">
                <div className="step"><div className="process-icon"><i className="fa-solid fa-magnifying-glass" /></div><h3>Discover</h3><p>Understand your offers, clients, platforms, workload and growth goals.</p></div>
                <div className="step"><div className="process-icon"><i className="fa-solid fa-clipboard-list" /></div><h3>Plan</h3><p>Define scope, workflow, responsibilities, timelines and delivery expectations.</p></div>
                <div className="step"><div className="process-icon"><i className="fa-solid fa-diagram-project" /></div><h3>Execute</h3><p>Build, configure, optimize, test and manage delivery with your team.</p></div>
                <div className="step"><div className="process-icon"><i className="fa-solid fa-chart-line" /></div><h3>Scale</h3><p>Increase capacity, add services and take on more opportunities confidently.</p></div>
            </div>
          </div>
        </section>

        <section className="news-band">
          <div className="container">
            <div className="agenda-head">
              <div>
                <h2>Recent <em className="text-blue">case studies.</em></h2>
              </div>
            </div>
            <div className="news-grid">
              <a className="news-photo-card" href="/case-studies/roller-gohighlevel-venue-integration">
                <img src="/casestudy/airtopia-card.webp" alt="Airtopia case study" />
                <div className="news-overlay">
                  <span className="news-tag">Websites &amp; Funnels</span>
                  <h3>Airtopia: 80&ndash;90% less manual data work</h3>
                  <span className="news-meta">Read Case Study <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </a>
              <a className="news-photo-card" href="/case-studies/ados-internal-ai-advertising-platform">
                <img src="/casestudy/webbb-card.webp" alt="AdOS Platform case study" />
                <div className="news-overlay">
                  <span className="news-tag">AI Automation</span>
                  <h3>AdOS Platform: 60&ndash;75% less manual effort</h3>
                  <span className="news-meta">Read Case Study <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </a>
              <a className="news-photo-card" href="/case-studies/ecommerce-seo-organic-traffic">
                <img src="/casestudy/garden-card.webp" alt="Garden Solution Landscapes case study" />
                <div className="news-overlay">
                  <span className="news-tag">SEO</span>
                  <h3>Garden Solution: 800% organic traffic growth</h3>
                  <span className="news-meta">Read Case Study <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="connect" className="band">
          <div className="container connect-center">
            <div className="section-head section-head-center">
              <h2>Tell us what you want to <em className="text-blue">build next.</em></h2>
              <p style={{ fontSize: 17, color: "var(--muted)" }}>Whether you need a GHL implementation team, white-label marketing fulfillment, or support with a specific client project, share a few details and we&rsquo;ll start the conversation.</p>
            </div>
            <div className="form-panel">
              <iframe
                src="https://crm.isuremedia.com/widget/form/KvUjcscgC5rLPUQl3Rah"
                style={{ width: "100%", height: 841, border: "none", borderRadius: 20, display: "block" }}
                id="inline-KvUjcscgC5rLPUQl3Rah"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Events-LevelUp2026"
                data-height="841"
                data-layout-iframe-id="inline-KvUjcscgC5rLPUQl3Rah"
                data-form-id="KvUjcscgC5rLPUQl3Rah"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="Events-LevelUp2026"
              />
              <Script src="https://crm.isuremedia.com/js/form_embed.js" strategy="afterInteractive" />
            </div>
          </div>
        </section>

        <footer>
          <div className="container footer-row">
            <div><img src="/isuremedia-light.webp" alt="Isuremedia" className="brand-logo" style={{ marginBottom: 8 }} /><div className="small">White Label Partner &middot; Digital Marketing &middot; GHL Services</div></div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/isuremedia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://www.facebook.com/Isuremedia2017/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="https://www.instagram.com/isuremedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="https://x.com/isuremedia_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter" /></a>
              <a href="https://www.youtube.com/channel/UC5DR1JBq-Sf2QOlzvQsLeKw" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
            </div>
            <div className="small">© 2026 Isuremedia. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
