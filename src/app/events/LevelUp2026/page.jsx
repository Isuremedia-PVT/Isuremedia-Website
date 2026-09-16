import ClientsMarquee from "@/components/ClientsMarquee";

export const metadata = {
  title: "LevelUp 2026 | Isuremedia, Your White Label Growth Partner",
  description: "Meet Isuremedia at GHL LevelUp 2026. Scale your agency with white-label GHL development, funnels, automation, SEO, PPC, websites and creative fulfillment.",
  alternates: { canonical: "/events/LevelUp2026" },
  openGraph: {
    title: "LevelUp 2026 | Isuremedia, Your White Label Growth Partner",
    description: "Meet Isuremedia at GHL LevelUp 2026. Scale your agency with white-label GHL development, funnels, automation, SEO, PPC, websites and creative fulfillment.",
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
        .lu2026 .hero{position:relative;background:url('/career-about/Team%20image%20for%20GMB%20new%201.webp') center 30%/cover no-repeat;color:#fff;overflow:hidden;clip-path:polygon(0 0,100% 0,100% calc(100% - 70px),0 100%);padding-bottom:70px}
        .lu2026 .hero:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,15,36,.82) 0%,rgba(0,25,58,.86) 55%,rgba(0,15,36,.94) 100%);pointer-events:none}
        .lu2026 .hero-ring{position:absolute;top:-70px;right:-70px;width:280px;height:280px;border-radius:50%;border:1px solid rgba(255,176,0,.4);pointer-events:none;z-index:0}
        .lu2026 .hero-ring:after{content:"";position:absolute;inset:34px;border-radius:50%;border:1px solid rgba(255,255,255,.25)}
        .lu2026 .nav,.lu2026 .hero-inner{position:relative;z-index:1}
        .lu2026 .hero-inner{max-width:760px;margin:0 auto;text-align:center;padding:36px 0 30px}
        .lu2026 .eyebrow{display:inline-flex;gap:9px;align-items:center;background:rgba(255,176,0,.14);border:1px solid rgba(255,176,0,.45);padding:8px 14px;border-radius:999px;font-family:var(--J);font-size:12.5px;font-weight:700;letter-spacing:1.1px;color:var(--amber);text-transform:uppercase}
        .lu2026 .eyebrow:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--amber)}
        .lu2026 h1{font-family:var(--J);font-size:clamp(38px,5vw,64px);font-weight:800;line-height:1.06;letter-spacing:-2px;margin:20px 0;color:#fff;text-shadow:0 2px 20px rgba(0,8,20,.4)}
        .lu2026 h1 em{font-style:normal;color:var(--amber)}
        .lu2026 .hero p{font-size:18px;color:#dbe6fb;max-width:640px;margin:0 auto}
        .lu2026 .actions{display:flex;flex-wrap:wrap;gap:13px;margin-top:28px;justify-content:center}
        .lu2026 .btn{display:inline-flex;justify-content:center;align-items:center;padding:15px 22px;border-radius:10px;font-family:var(--J);font-weight:700;font-size:15px;border:1px solid transparent;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .lu2026 .btn-primary{background:var(--amber);color:var(--navy-deep);box-shadow:0 10px 28px rgba(255,176,0,.32)}
        .lu2026 .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(255,176,0,.4)}
        .lu2026 .btn-ghost{border:1px solid var(--blue);color:var(--blue)}
        .lu2026 .btn-ghost:hover{background:var(--blue-50)}
        .lu2026 .hero .btn-ghost{border:1px solid rgba(255,255,255,.5);color:#fff}
        .lu2026 .hero .btn-ghost:hover{background:rgba(255,255,255,.1)}

        /* ── What we do (plain section, no card/shadow) ── */
        .lu2026 .capability-wrap{background:#fff;padding:76px 0}
        .lu2026 .hero-card{position:relative;color:var(--ink);max-width:980px;margin:0 auto;text-align:left}
        .lu2026 .hero-card h3{font-family:var(--J);font-size:22px;font-weight:800;margin:6px 0 0}
        .lu2026 .agenda-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:28px;flex-wrap:wrap}
        .lu2026 .agenda-cta{padding:10px 16px;font-size:13px;flex-shrink:0}
        .lu2026 .agenda-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:26px}
        .lu2026 .agenda-badge{display:inline-block;font-family:var(--J);font-weight:800;font-size:13px;letter-spacing:.3px;padding:9px 18px;border-radius:999px;margin-bottom:18px}
        .lu2026 .agenda-badge-blue{background:var(--blue-50);color:var(--blue);border:1px solid var(--ism-blue-200,#94aeee)}
        .lu2026 .agenda-badge-amber{background:var(--amber-50);color:var(--amber-hover);border:1px solid #f8d995}
        .lu2026 .agenda-item{display:flex;gap:14px;padding:14px 0;border-top:1px solid var(--line)}
        .lu2026 .agenda-icon{flex-shrink:0;width:38px;height:38px;border-radius:50%;background:var(--blue-50);color:var(--blue);display:grid;place-items:center;font-size:14px}
        .lu2026 .agenda-icon-amber{background:var(--amber-50);color:var(--amber-hover)}
        .lu2026 .agenda-text h4{font-family:var(--J);font-size:15px;font-weight:800;margin:0 0 3px;color:var(--ink)}
        .lu2026 .agenda-text p{margin:0;font-size:13.5px;color:var(--muted)}
        .lu2026 .hero-card > .btn-primary{display:flex;width:fit-content;margin-left:auto;margin-right:auto}

        .lu2026 .photo-card{position:relative;border-radius:20px;overflow:hidden;height:340px;box-shadow:0 20px 50px rgba(0,35,83,.14)}
        .lu2026 .photo-card img{width:100%;height:100%;object-fit:cover;object-position:75% 35%;display:block}
        .lu2026 .photo-badge{position:absolute;left:16px;right:16px;bottom:16px;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);border-radius:14px;padding:14px 16px;display:flex;align-items:baseline;gap:10px;box-shadow:0 10px 30px rgba(0,35,83,.18)}
        .lu2026 .photo-badge strong{font-family:var(--J);font-size:24px;font-weight:800;color:var(--blue)}
        .lu2026 .photo-badge span{font-size:13px;color:var(--muted);line-height:1.3}

        .lu2026 .join-event{background:var(--soft)}
        .lu2026 .join-list{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .lu2026 .join-row{display:flex;gap:26px;align-items:center;background:white;border:1px solid var(--line);border-radius:14px;padding:28px 30px 28px 24px;transition:box-shadow .18s ease,transform .18s ease}
        .lu2026 .join-row:hover{box-shadow:0 16px 40px rgba(0,35,83,.1);transform:translateY(-2px)}
        .lu2026 .join-thumb{flex-shrink:0;width:130px;height:170px;border-radius:12px;object-fit:cover;margin:-38px 0;box-shadow:0 16px 34px rgba(0,35,83,.22)}
        .lu2026 .join-row-body{min-width:0}
        .lu2026 .join-row-meta{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:8px}
        .lu2026 .join-row-meta span{display:inline-flex;align-items:center;gap:6px;font-family:var(--J);font-size:12px;font-weight:700;color:var(--blue)}
        .lu2026 .join-row-meta i{font-size:11px}
        .lu2026 .join-row-body h3{font-family:var(--J);font-size:16.5px;font-weight:800;margin:0 0 6px;color:var(--ink)}
        .lu2026 .join-row-body p{margin:0 0 8px;color:var(--muted);font-size:13.5px}
        .lu2026 .join-row-host{font-size:12.5px;color:var(--muted);font-style:italic}

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
        .lu2026 .text-blue{font-style:normal;color:var(--blue)}
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
        .lu2026 form{display:grid;grid-template-columns:1fr 1fr;gap:15px}
        .lu2026 label{font-family:var(--J);font-size:13px;font-weight:700;display:block;margin-bottom:6px;color:var(--navy)}
        .lu2026 input,.lu2026 select,.lu2026 textarea{width:100%;border:1px solid #cbd8ea;border-radius:9px;padding:13px;font:inherit;background:#fff;color:var(--ink)}
        .lu2026 input:focus,.lu2026 select:focus,.lu2026 textarea:focus{outline:2px solid var(--blue);outline-offset:1px}
        .lu2026 textarea{min-height:105px;resize:vertical}
        .lu2026 .full{grid-column:1/-1}
        .lu2026 .consent{font-size:12px;color:var(--muted)}
        .lu2026 .submit{width:100%;border:0;margin-top:4px}

        .lu2026 footer{background:var(--navy-deep);color:#c3d1ee;padding:30px 0}
        .lu2026 .footer-row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center}
        .lu2026 .footer-row .brand-logo{height:30px}
        .lu2026 .small{font-size:13px !important;color:#8fa3cc}

        @media(max-width:1024px){
          .lu2026 .hero-grid,.lu2026 .split,.lu2026 .form-wrap,.lu2026 .about-grid{grid-template-columns:1fr}
          .lu2026 .cards{grid-template-columns:1fr 1fr}
          .lu2026 .news-grid{grid-template-columns:1fr 1fr}
          .lu2026 .news-grid a:last-child{grid-column:1/-1}
          .lu2026 .news-photo-card{min-height:260px}
          .lu2026 .process{grid-template-columns:1fr 1fr}
          .lu2026 h1{letter-spacing:-1.4px}
          .lu2026 .about-collage{order:2;height:320px;width:100%;max-width:420px;margin:30px auto 0}
        }
        @media(max-width:768px){
          .lu2026 .container{width:100%;padding:0 20px;margin:auto}
          .lu2026 .nav-cta{display:none}
          .lu2026 .cards,.lu2026 form,.lu2026 .process,.lu2026 .news-grid{grid-template-columns:1fr}
          .lu2026 .join-list{grid-template-columns:1fr}
          .lu2026 .join-row{flex-direction:column;align-items:stretch}
          .lu2026 .join-thumb{width:100%;height:150px;margin:0 0 4px}
          .lu2026 .full{grid-column:auto}
          .lu2026 section,.lu2026 .capability-wrap{padding:52px 0}
          .lu2026 .hero-ring{width:200px;height:200px;top:-50px;right:-50px}
          .lu2026 .photo-card{height:240px}
          .lu2026 .hero{clip-path:polygon(0 0,100% 0,100% calc(100% - 36px),0 100%);padding-bottom:36px}
          .lu2026 .agenda-grid{grid-template-columns:1fr;gap:6px}
          .lu2026 .agenda-head{flex-direction:column;align-items:flex-start}
        }
      `}</style>

      <div className="lu2026">
        <header className="hero">
          <div className="hero-ring" />
          <div className="container">
            <nav className="nav">
              <img src="/isuremedia-light.webp" alt="Isuremedia" className="brand-logo" />
              <a className="nav-cta" href="#connect">Meet us at LevelUp 2026 →</a>
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

        <div className="capability-wrap">
          <div className="container">
            <div className="hero-card">
              <div className="agenda-head">
                <div>
                  <div className="kicker">// What We Do</div>
                  <h3>How Isuremedia can help you scale.</h3>
                </div>
              </div>
              <div className="agenda-grid">
                <div className="agenda-col">
                  <div className="agenda-item">
                    <div className="agenda-icon"><i className="fa-solid fa-gears" /></div>
                    <div className="agenda-text">
                      <h4>GoHighLevel Builds &amp; Funnels</h4>
                      <p>Full GHL implementation, from funnels to automations.</p>
                    </div>
                  </div>
                  <div className="agenda-item">
                    <div className="agenda-icon"><i className="fa-solid fa-tags" /></div>
                    <div className="agenda-text">
                      <h4>White-Label Fulfillment</h4>
                      <p>Delivered under your brand, QA&rsquo;d and supported end to end.</p>
                    </div>
                  </div>
                  <div className="agenda-item">
                    <div className="agenda-icon"><i className="fa-solid fa-bolt" /></div>
                    <div className="agenda-text">
                      <h4>Automation &amp; CRM</h4>
                      <p>Workflows, lead routing and CRM setup that just works.</p>
                    </div>
                  </div>
                </div>
                <div className="agenda-col">
                  <div className="agenda-item">
                    <div className="agenda-icon agenda-icon-amber"><i className="fa-solid fa-magnifying-glass-chart" /></div>
                    <div className="agenda-text">
                      <h4>SEO &amp; Paid Media</h4>
                      <p>Technical SEO, Google Ads and Meta Ads that convert.</p>
                    </div>
                  </div>
                  <div className="agenda-item">
                    <div className="agenda-icon agenda-icon-amber"><i className="fa-solid fa-globe" /></div>
                    <div className="agenda-text">
                      <h4>Websites &amp; E-commerce</h4>
                      <p>WordPress, Shopify and custom-built sites that perform.</p>
                    </div>
                  </div>
                  <div className="agenda-item">
                    <div className="agenda-icon agenda-icon-amber"><i className="fa-solid fa-palette" /></div>
                    <div className="agenda-text">
                      <h4>Creative Support</h4>
                      <p>Graphic design, video and content production on demand.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary" style={{ marginTop: 8 }} href="#connect">Start the Conversation</a>
            </div>
          </div>
        </div>

        <section className="join-event">
          <div className="container">
            <div className="agenda-head">
              <div>
                <div className="kicker">// Visit Our Booth</div>
                <h2>Why you should <em className="text-blue">stop by.</em></h2>
              </div>
              <a className="btn btn-primary agenda-cta" href="#connect"><i className="fa-solid fa-arrow-right" /> Talk to Us</a>
            </div>
            <div className="join-list">
              <div className="join-row">
                <img className="join-thumb" src="/career-about/Team%20image%20for%20GMB%20new%201.webp" alt="Live demos at the Isuremedia booth" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>Live Demos</h3>
                  <p>See real GHL builds and automations demoed live at the booth.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
              <div className="join-row">
                <img className="join-thumb" src="/career-about/IMG_3431.webp" alt="1:1 conversations with the Isuremedia team" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>1:1 Conversations</h3>
                  <p>Talk through your agency&rsquo;s specific fulfillment needs with our team.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
              <div className="join-row">
                <img className="join-thumb" src="/career-about/IMG_3508.webp" alt="Partnership perks with Isuremedia" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>Partnership Perks</h3>
                  <p>Explore white-label and referral partnership options.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
              <div className="join-row">
                <img className="join-thumb" src="/career-about/IMG_6139.webp" alt="Portfolio walkthrough with Isuremedia" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>Portfolio Walkthrough</h3>
                  <p>Browse real client work across SEO, PPC, web and automation.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
              <div className="join-row">
                <img className="join-thumb" src="/career-about/Team%20image%20for%20GMB%20new%201.webp" style={{ objectPosition: '85% 40%' }} alt="Meet the friendly Isuremedia team" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>Friendly Team</h3>
                  <p>Meet the people behind the work, always approachable and ready to help.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
              <div className="join-row">
                <img className="join-thumb" src="/career-about/IMG_3508.webp" style={{ objectPosition: '50% 20%' }} alt="GHL tips and tricks from Isuremedia" />
                <div className="join-row-body">
                  <div className="join-row-meta"><span><i className="fa-solid fa-location-dot" /> Isuremedia Booth</span><span><i className="fa-solid fa-calendar" /> GHL LevelUp 2026</span></div>
                  <h3>GHL Tips &amp; Tricks</h3>
                  <p>Pick up quick wins to get more out of your GoHighLevel setup.</p>
                  <div className="join-row-host">Hosted by the Isuremedia team</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientsMarquee />

        <section className="about-band">
          <div className="container about-grid">
            <div className="about-collage">
              <img className="about-photo about-photo-main" src="/career-about/IMG_3431.webp" alt="Isuremedia team at work" />
              <img className="about-photo about-photo-sm" src="/career-about/IMG_3508.webp" alt="Isuremedia office" />
              <div className="about-dots" />
            </div>
            <div>
              <div className="kicker">// About Isuremedia</div>
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

        <section id="services">
          <div className="container">
            <div className="section-head section-head-center">
              <div className="kicker">(One partner. More capacity.)</div>
              <h2>Everything your agency needs to deliver more.</h2>
              <p>From strategy and acquisition to implementation and ongoing support, Isuremedia helps agencies extend their capabilities under their own brand.</p>
            </div>
            <div className="cards">
              <div className="card"><div className="icon"><i className="fa-solid fa-gears" /></div><h3>GoHighLevel Development</h3><p>Funnels, websites, snapshots, onboarding flows, pipelines, calendars, forms, products, memberships and custom integrations.</p></div>
              <div className="card"><div className="icon"><i className="fa-solid fa-tags" /></div><h3>White-Label Fulfillment</h3><p>Deliver under your agency&rsquo;s brand with behind-the-scenes execution, project coordination, QA and ongoing support.</p></div>
              <div className="card"><div className="icon"><i className="fa-solid fa-bolt" /></div><h3>Marketing Automation</h3><p>Workflows, lead routing, follow-up systems, CRM setup, email and SMS integrations and conversion-focused automations.</p></div>
              <div className="card"><div className="icon"><i className="fa-solid fa-globe" /></div><h3>Websites & Funnels</h3><p>Landing pages, campaign pages, WordPress, Shopify, WooCommerce, GoHighLevel sites, migrations and redesigns.</p></div>
              <div className="card"><div className="icon"><i className="fa-solid fa-magnifying-glass-chart" /></div><h3>SEO & Paid Marketing</h3><p>Technical SEO, content planning, local growth, Google Ads, Meta Ads, LinkedIn Ads, tracking and performance reporting.</p></div>
              <div className="card"><div className="icon"><i className="fa-solid fa-palette" /></div><h3>Content & Creative</h3><p>Graphic design, video editing, social assets, website banners, PDFs, creative production and campaign support.</p></div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container split">
            <div>
              <div className="kicker">Why agencies choose Isuremedia</div>
              <h2>Sell the solution. We help deliver it.</h2>
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
                <div className="kicker">// A simple partnership model</div>
                <h2>From first conversation to <em className="text-blue">reliable fulfillment.</em></h2>
              </div>
              <a className="btn btn-ghost agenda-cta" href="#connect">Start a Conversation →</a>
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
                <div className="kicker">// Real Results</div>
                <h2>Recent <em className="text-blue">case studies.</em></h2>
              </div>
              <a className="btn btn-primary agenda-cta" href="/case-studies"><i className="fa-solid fa-arrow-right" /> More Case Studies</a>
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
          <div className="container form-wrap">
            <div>
              <div className="kicker">Let&rsquo;s connect at LevelUp 2026</div>
              <h2>Tell us what you want to build next.</h2>
              <p style={{ fontSize: 17, color: "var(--muted)" }}>Whether you need a GHL implementation team, white-label marketing fulfillment, or support with a specific client project, share a few details and we&rsquo;ll start the conversation.</p>
              <ul className="checklist">
                <li>Discuss your agency&rsquo;s current service model</li>
                <li>Identify fulfillment gaps and growth opportunities</li>
                <li>Explore a suitable support or partnership structure</li>
              </ul>
            </div>
            <div className="form-panel">
              <h3 style={{ fontFamily: "var(--J)", fontSize: 23, fontWeight: 800, marginTop: 0 }}>Connect with Isuremedia</h3>
              <p style={{ color: "var(--muted)", fontSize: 14 }}>Complete the form and our team will get in touch.</p>
              {/* Replace the action URL below with your GHL form endpoint or embed this form inside a GHL funnel. */}
              <form action="YOUR_GHL_FORM_OR_WEBHOOK_URL" method="POST">
                <div><label htmlFor="first_name">First name *</label><input id="first_name" name="first_name" required /></div>
                <div><label htmlFor="last_name">Last name</label><input id="last_name" name="last_name" /></div>
                <div><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" required /></div>
                <div><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" /></div>
                <div><label htmlFor="company">Agency / Company *</label><input id="company" name="company" required /></div>
                <div><label htmlFor="website">Website</label><input id="website" name="website" type="url" placeholder="https://" /></div>
                <div><label htmlFor="agency_type">I am a&hellip;</label>
                  <select id="agency_type" name="agency_type">
                    <option>Agency owner</option>
                    <option>Agency executive</option>
                    <option>Business owner</option>
                    <option>Freelancer / consultant</option>
                    <option>Other</option>
                  </select>
                </div>
                <div><label htmlFor="interest">Primary interest</label>
                  <select id="interest" name="interest">
                    <option>White-label GHL services</option>
                    <option>GHL funnels and websites</option>
                    <option>CRM and automation</option>
                    <option>SEO and paid marketing</option>
                    <option>Web development</option>
                    <option>Creative and content</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="full"><label htmlFor="message">What are you looking for?</label><textarea id="message" name="message" placeholder="Tell us about your agency, current needs, or upcoming projects…" /></div>
                <input type="hidden" name="source" value="GHL LevelUp 2026" />
                <input type="hidden" name="campaign" value="levelup-2026" />
                <div className="full consent">By submitting this form, you agree that Isuremedia may contact you regarding your inquiry.</div>
                <div className="full"><button className="btn btn-primary submit" type="submit">Request a Conversation →</button></div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container footer-row">
            <div><img src="/isuremedia-light.webp" alt="Isuremedia" className="brand-logo" style={{ marginBottom: 8 }} /><div className="small">White Label Partner &middot; Digital Marketing &middot; GHL Services</div></div>
            <div className="small">© 2026 Isuremedia. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
