import { useState, useEffect } from "react";
import {
  Phone, Mail, MapPin, ArrowRight, ArrowDown, Wifi, Radio,
  Globe, Users, ChevronUp, Send, Shield,
  Headphones, Award, Star, Network
} from "lucide-react";

function LogoIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        href={`${import.meta.env.BASE_URL}logo.png`}
        width="40"
        height="40"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

function NetworkDots() {
  const dots = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 8; c++) {
      dots.push({ x: c * 58 + 20, y: r * 54 + 16 });
    }
  }
  const lines = [
    [1,2,2,3],[2,3,4,2],[4,2,5,3],[1,4,2,5],[3,1,4,2],[5,4,6,3],[2,6,3,7],[4,5,5,6],[6,2,7,3]
  ];
  return (
    <svg viewBox="0 0 480 500" fill="none" className="absolute inset-0 w-full h-full">
      {dots.map((d,i) => <circle key={i} cx={d.x} cy={d.y} r="2.2" fill="#BFDBFE"/>)}
      {lines.map(([c1,r1,c2,r2],i) => (
        <line key={i}
          x1={c1*58+20} y1={r1*54+16}
          x2={c2*58+20} y2={r2*54+16}
          stroke="#BFDBFE" strokeWidth="0.8"
        />
      ))}
      <circle cx={2*58+20} cy={3*54+16} r="7" stroke="#93C5FD" strokeWidth="1.5" fill="none"/>
      <circle cx={5*58+20} cy={2*54+16} r="7" stroke="#93C5FD" strokeWidth="1.5" fill="none"/>
      <circle cx={3*58+20} cy={6*54+16} r="9" stroke="#BFDBFE" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

function TelecomTower({ className }) {
  return (
    <svg viewBox="0 0 100 200" className={className} fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round">
      <line x1="50" y1="8" x2="15" y2="190"/>
      <line x1="50" y1="8" x2="85" y2="190"/>
      <line x1="15" y1="190" x2="85" y2="190"/>
      <line x1="30" y1="65" x2="70" y2="65"/>
      <line x1="23" y1="115" x2="77" y2="115"/>
      <line x1="17" y1="160" x2="83" y2="160"/>
      <line x1="30" y1="65" x2="50" y2="8"/>
      <line x1="70" y1="65" x2="50" y2="8"/>
      <line x1="23" y1="115" x2="30" y2="65"/>
      <line x1="77" y1="115" x2="70" y2="65"/>
      <line x1="17" y1="160" x2="23" y2="115"/>
      <line x1="83" y1="160" x2="77" y2="115"/>
      <ellipse cx="50" cy="8" rx="16" ry="7" stroke="#93C5FD" strokeWidth="1.5"/>
      <path d="M37 8 Q50 2 63 8" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
      <path d="M30 8 Q50 -4 70 8" stroke="#60A5FA" strokeWidth="1" opacity="0.45"/>
    </svg>
  );
}


 function HeroPersonSVG () {
  return (
    <svg
      viewBox="0 0 280 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="heroRoundedClip">
          <rect
            x="20"
            y="20"
            width="240"
            height="340"
            rx="28"
            ry="28"
          />
        </clipPath>
      </defs>

      <image
        href={`${import.meta.env.BASE_URL}my-image.png`}
        x="20"
        y="20"
        width="240"
        height="340"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#heroRoundedClip)"
      />
    </svg>
  );
}



function AboutPersonSVG() {
  return (
    <svg
      viewBox="0 0 280 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="aboutRoundedClip">
          <rect
            x="20"
            y="20"
            width="240"
            height="340"
            rx="28"
            ry="28"
          />
        </clipPath>
      </defs>

      <image
        href={`${import.meta.env.BASE_URL}my-image.png`}
        x="20"
        y="20"
        width="240"
        height="340"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#aboutRoundedClip)"
      />
    </svg>
  );
}

//export AboutPersonSVG;

export default function TeleEusWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = ["Home", "About", "Services", "Expertise", "Contact"];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#0F172A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Sora:wght@600;700;800&family=Dancing+Script:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: #fff; }
        .te-nav-link { position: relative; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; }
        .te-nav-link.active { color: #2563EB; }
        .te-nav-link.active::after { content: ''; position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); width: 100%; height: 2px; background: #2563EB; border-radius: 2px; }
        .te-service-card { transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease; cursor: default; }
        .te-service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(37,99,235,0.10); border-color: #BFDBFE; }
        .te-service-card:hover .te-arrow-btn { background: #2563EB; border-color: #2563EB; color: #fff; }
        .te-arrow-btn { transition: background 0.2s, border-color 0.2s, color 0.2s; }
        .te-stat-card { transition: border-color 0.2s, box-shadow 0.2s; cursor: default; }
        .te-stat-card:hover { border-color: #93C5FD; box-shadow: 0 4px 16px rgba(37,99,235,0.08); }
        .te-btn-primary { transition: background 0.2s, gap 0.2s; }
        .te-btn-primary:hover { background: #1D4ED8; }
        .te-btn-outline { transition: border-color 0.2s, color 0.2s; }
        .te-btn-outline:hover { border-color: #2563EB; color: #2563EB; }
        .te-social-btn { transition: opacity 0.2s, transform 0.15s; }
        .te-social-btn:hover { opacity: 0.85; transform: translateY(-2px); }
        @keyframes teSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .te-a1 { animation: teSlideUp 0.65s 0.05s both ease; }
        .te-a2 { animation: teSlideUp 0.65s 0.15s both ease; }
        .te-a3 { animation: teSlideUp 0.65s 0.25s both ease; }
        .te-a4 { animation: teSlideUp 0.65s 0.35s both ease; }
        .te-a5 { animation: teSlideUp 0.65s 0.45s both ease; }
        .te-a6 { animation: teSlideUp 0.65s 0.55s both ease; }
        
        .te-nav-desktop { display: flex; align-items: center; gap: 32px; }
        .te-btn-contact { display: flex; }
        .te-menu-btn { display: none; }
        
        @media (max-width: 768px) {
          .te-nav-desktop { display: none !important; }
          .te-btn-contact { display: none !important; }
          .te-menu-btn { display: flex !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#fff",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s"
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)",
          height: 68, display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          >
            <LogoIcon />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.1 }}>
                <span style={{ color: "#0F172A" }}>Tele</span>
                <span style={{ color: "#2563EB" }}>Eus</span>
              </div>
              <div style={{ fontSize: 9, color: "#94A3B8", letterSpacing: "0.08em", marginTop: 2 }}>
                Powering Modern Connectivity
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="te-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navItems.map((item) => (
              <button
                key={item}
                className={`te-nav-link${activeNav === item ? " active" : ""}`}
                style={{
                  fontSize: 14, fontWeight: 500, padding: "4px 0",
                  color: activeNav === item ? "#2563EB" : "#475569"
                }}
                onClick={() => {
                  setActiveNav(item);
                  scrollTo(item === "Expertise" ? "services" : item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Desktop Contact Button */}
            <button
              className="te-btn-contact"
              style={{
                background: "#2563EB", color: "#fff", border: "none",
                padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 600,
                cursor: "pointer"
              }}
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </button>

            {/* Mobile Menu Button */}
            <button
              className="te-menu-btn"
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 24, color: "#0F172A", padding: 0
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            display: "flex", flexDirection: "column", gap: 12,
            padding: "16px 20px 20px", borderTop: "1px solid #F1F5F9",
            background: "#fff"
          }}>
            {navItems.map((item) => (
              <button
                key={item}
                className={`te-nav-link${activeNav === item ? " active" : ""}`}
                style={{
                  fontSize: 14, fontWeight: 500, padding: "8px 0",
                  color: activeNav === item ? "#2563EB" : "#475569",
                  textAlign: "left"
                }}
                onClick={() => {
                  setActiveNav(item);
                  scrollTo(item === "Expertise" ? "services" : item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
            <button
              className="te-btn-primary"
              style={{
                background: "#2563EB", color: "#fff", border: "none",
                padding: "12px 20px", borderRadius: 9, fontSize: 14, fontWeight: 600,
                cursor: "pointer", width: "100%", marginTop: 8
              }}
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ paddingTop: 68, minHeight: "100vh", background: "#fff", overflow: "hidden" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 5vw, 48px)",
          alignItems: "center", minHeight: "calc(100vh - 68px)"
        }}>
          {/* Left */}
          <div style={{ paddingTop: "clamp(24px, 5vw, 48px)", paddingBottom: "clamp(24px, 5vw, 48px)" }}>
            <div className="te-a1" style={{
              display: "flex", alignItems: "center", gap: 10,
              color: "#60A5FA", fontSize: "clamp(9px, 2vw, 11px)", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "clamp(16px, 4vw, 24px)"
            }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "#60A5FA" }}></span>
              Telecommunications Solutions
            </div>

            <h1 className="te-a2" style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 7vw, 58px)", fontWeight: 800,
              lineHeight: 1.08, color: "#0F172A", marginBottom: "clamp(16px, 3vw, 20px)"
            }}>
              Powering Modern<br />
              <span style={{ color: "#2563EB" }}>Connectivity</span>
            </h1>

            <p className="te-a3" style={{
              fontSize: "clamp(14px, 2vw, 15px)", color: "#64748B", lineHeight: 1.75,
              maxWidth: 440, marginBottom: "clamp(20px, 4vw, 32px)"
            }}>
              Reliable telecommunications and connectivity solutions designed to support modern
              communication infrastructure for businesses and individuals.
            </p>

            <div className="te-a4" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: "clamp(24px, 4vw, 40px)" }}>
              <button
                className="te-btn-primary"
                style={{
                  background: "#2563EB", color: "#fff", border: "none",
                  padding: "14px 28px", borderRadius: 10, fontSize: "clamp(13px, 2vw, 14px)", fontWeight: 600,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 8
                }}
                onClick={() => scrollTo("contact")}
              >
                Contact Me <ArrowRight size={15}/>
              </button>
              <button
                className="te-btn-outline"
                style={{
                  background: "none", color: "#475569", border: "2px solid #CBD5E1",
                  padding: "14px 28px", borderRadius: 10, fontSize: "clamp(13px, 2vw, 14px)", fontWeight: 600,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 8
                }}
                onClick={() => scrollTo("services")}
              >
                View Services <ArrowDown size={15}/>
              </button>
            </div>

            {/* Trust badges */}
            <div className="te-a5" style={{
              borderTop: "1px solid #F1F5F9", paddingTop: "clamp(16px, 3vw, 28px)",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "clamp(12px, 2vw, 16px)"
            }}>
              {[
                { icon: <Wifi size={15}/>, label: "Reliable", sub: "Connectivity" },
                { icon: <Shield size={15}/>, label: "Secure", sub: "Solutions" },
                { icon: <Globe size={15}/>, label: "Modern", sub: "Infrastructure" },
                { icon: <Headphones size={15}/>, label: "Expert", sub: "Support" },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ color: "#3B82F6", flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <div style={{ fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 600, color: "#334155" }}>{b.label}</div>
                    <div style={{ fontSize: "clamp(10px, 1.5vw, 11px)", color: "#94A3B8" }}>{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Portrait */}
          <div className="te-a6" style={{ position: "relative", height: "clamp(280px, 60vw, 520px)", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: 280 }}>
            <NetworkDots />
            <TelecomTower style={{ position: "absolute" }} className="" />
            <div style={{ position: "absolute", right: 24, top: 20, width: "clamp(60px, 15vw, 90px)", height: "clamp(120px, 30vw, 180px)", opacity: 0.32 }}>
              <TelecomTower className="" />
            </div>
            <div style={{ position: "absolute", right: 110, top: 60, width: "clamp(40px, 10vw, 55px)", height: "clamp(80px, 20vw, 110px)", opacity: 0.18 }}>
              <TelecomTower className="" />
            </div>
            <div style={{ position: "relative", zIndex: 2, width: "clamp(200px, 50vw, 300px)" }}>
              <HeroPersonSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "#F8FAFC", padding: "clamp(48px, 10vw, 88px) 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(24px, 5vw, 36px)", alignItems: "center" }}>
            {/* Portrait */}
            <div style={{
              borderRadius: 20, overflow: "hidden", height: "clamp(240px, 50vw, 340px)",
              background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
              position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center"
            }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
                <NetworkDots />
              </div>
              <div style={{ position: "relative", zIndex: 1, width: "clamp(150px, 40vw, 220px)" }}>
                <AboutPersonSVG />
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: "8px 0" }}>
              <div style={{
                fontSize: "clamp(9px, 2vw, 10.5px)", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#3B82F6", marginBottom: 14
              }}>
                About Me
              </div>
              <h2 style={{
                fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 6vw, 32px)", fontWeight: 700,
                color: "#0F172A", lineHeight: 1.2, marginBottom: 18
              }}>
                Telecommunications<br />Professional
              </h2>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#64748B", lineHeight: 1.8, marginBottom: 28 }}>
                I specialize in telecommunications and connectivity systems focused on reliable
                communication infrastructure and digital access solutions. My work involves
                supporting modern communication technologies and network-based services that
                improve connectivity efficiency.
              </p>
              <div style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(32px, 8vw, 42px)", fontWeight: 700, color: "#2563EB"
              }}>
                TeleEus
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <Users size={20} color="#3B82F6"/>, value: "5+",   label: "Years of Experience" },
                { icon: <Award size={20} color="#3B82F6"/>, value: "100+", label: "Projects Completed" },
                { icon: <Star  size={20} color="#3B82F6"/>, value: "100%", label: "Client Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="te-stat-card" style={{
                  border: "1px solid #E2E8F0", borderRadius: 14, background: "#fff",
                  padding: "clamp(14px, 3vw, 18px) clamp(16px, 3vw, 20px)", display: "flex", alignItems: "center", gap: 16
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    border: "1px solid #DBEAFE", background: "#EFF6FF",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 4vw, 26px)",
                      fontWeight: 700, color: "#2563EB", lineHeight: 1
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#64748B", marginTop: 3 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#fff", padding: "clamp(48px, 10vw, 88px) 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(36px, 8vw, 56px)" }}>
            <div style={{
              fontSize: "clamp(9px, 2vw, 10.5px)", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#3B82F6", marginBottom: 14
            }}>
              What I Do
            </div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 7vw, 40px)", fontWeight: 700,
              color: "#0F172A", marginBottom: 18
            }}>
              Telecommunications Services
            </h2>
            <div style={{
              width: 52, height: 4, background: "#2563EB",
              borderRadius: 4, margin: "0 auto"
            }}/>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "clamp(16px, 3vw, 22px)" }}>
            {[
              {
                icon: <Radio size={28} color="#3B82F6"/>,
                title: "Network Connectivity Solutions",
                desc: "Designing and implementing reliable network solutions for businesses and organizations.",
              },
              {
                icon: <Network size={28} color="#3B82F6"/>,
                title: "Communication Systems Setup",
                desc: "Providing end-to-end communication system setup, integration, and optimization for voice and data.",
              },
              {
                icon: <Globe size={28} color="#3B82F6"/>,
                title: "Internet Infrastructure Support",
                desc: "Building and supporting robust internet infrastructure that ensures speed, stability, and scalability.",
              },
              {
                icon: <Users size={28} color="#3B82F6"/>,
                title: "Telecommunications Consultation",
                desc: "Offering expert advice and strategies to help you achieve your connectivity and business goals.",
              },
            ].map((s, i) => (
              <div key={i} className="te-service-card" style={{
                border: "1px solid #E2E8F0", borderRadius: 20,
                padding: "clamp(20px, 4vw, 28px) clamp(18px, 3vw, 24px)", background: "#fff"
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  border: "1px solid #DBEAFE", background: "#EFF6FF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, flexShrink: 0
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontSize: "clamp(13px, 2.5vw, 14.5px)", fontWeight: 700, color: "#0F172A",
                  lineHeight: 1.4, marginBottom: 12
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: "clamp(12px, 2vw, 13px)", color: "#64748B", lineHeight: 1.7, marginBottom: 24
                }}>
                  {s.desc}
                </p>
                <div className="te-arrow-btn" style={{
                  width: 36, height: 36, borderRadius: "50%",
                  border: "1px solid #BFDBFE", color: "#3B82F6",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", flexShrink: 0
                }}>
                  <ArrowRight size={14}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        background: "#F8FAFC",
        borderTop: "1px solid #F1F5F9",
        padding: "clamp(48px, 10vw, 72px) 0"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(32px, 5vw, 48px)", alignItems: "center"
          }}>
            {/* CTA block */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(14px, 3vw, 20px)" }}>
              <div style={{
                width: "clamp(52px, 10vw, 64px)", height: "clamp(52px, 10vw, 64px)", background: "#2563EB", borderRadius: 18,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <Phone size="clamp(18px, 4vw, 24px)" color="#fff"/>
              </div>
              <div>
                <div style={{
                  fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#3B82F6", marginBottom: 8
                }}>
                  Let's Connect
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700,
                  color: "#0F172A", lineHeight: 1.25, marginBottom: 10
                }}>
                  Ready to Work Together?
                </h3>
                <p style={{ fontSize: "clamp(12px, 2vw, 13.5px)", color: "#64748B", lineHeight: 1.7 }}>
                  Have a project or need expert advice? I'm here to help you stay connected.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Phone size={16} color="#3B82F6"/>, text: "+254 712 345 678" },
                { icon: <Mail  size={16} color="#3B82F6"/>, text: "hello@teleeus.com" },
                { icon: <MapPin size={16} color="#3B82F6"/>, text: "Nairobi, Kenya" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    border: "1px solid #DBEAFE", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    {c.icon}
                  </div>
                  <span style={{ fontSize: "clamp(13px, 2vw, 14px)", fontWeight: 500, color: "#334155" }}>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <div style={{ fontSize: "clamp(13px, 2vw, 14px)", fontWeight: 600, color: "#334155", marginBottom: 16 }}>
                Follow Me
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <Send     size={17}/>, bg: "#3B82F6" },
                ].map((s, i) => (
                  <button key={i} className="te-social-btn" style={{
                    width: 44, height: 44, background: s.bg, border: "none",
                    borderRadius: 12, color: "#fff", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#fff", borderTop: "1px solid #F1F5F9", padding: "clamp(16px, 3vw, 20px) 0"
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 max(16px, 5vw)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap"
        }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          >
            <LogoIcon />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700 }}>
                <span style={{ color: "#0F172A" }}>Tele</span>
                <span style={{ color: "#2563EB" }}>Eus</span>
              </div>
              <div style={{ fontSize: 9, color: "#94A3B8", letterSpacing: "0.08em", marginTop: 2 }}>
                Powering Modern Connectivity
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 20px)", fontSize: "clamp(10px, 1.5vw, 12px)", color: "#94A3B8", flexWrap: "wrap", justifyContent: "center" }}>
            <span>© 2025 TeleEus. All rights reserved.</span>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>Contact</a>
          </div>

          <button
            style={{
              width: 36, height: 36, background: "#0F172A", border: "none",
              borderRadius: 9, color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s", flexShrink: 0
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={e => e.currentTarget.style.background = "#2563EB"}
            onMouseLeave={e => e.currentTarget.style.background = "#0F172A"}
          >
            <ChevronUp size={16}/>
          </button>
        </div>
      </footer>
    </div>
  );
}
