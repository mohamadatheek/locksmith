import "./App.css";
import { business } from "./business";
import { services } from "./services";
import { serviceGuides } from "./serviceGuides";
import ServiceLinks from "./ServiceLinks";

export default function ServicePage({ slug }: { slug?: string }) {
  const pageSlug = slug ?? (typeof location === "undefined" ? "" : location.pathname.split("/").filter(Boolean)[0]);
  const service = services[pageSlug];
  const guide = serviceGuides[pageSlug];
  if (!service || !guide) return <main className="shell section"><h1>Service not found</h1><a className="text-link" href="/">Return to KeyHome</a></main>;
  const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello KeyHome, I need help with ${service.title}.`)}`;
  const household = pageSlug === "door-unlocking-colombo";

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="topbar"><div className="shell topbar-inner"><span><span className="status-dot" />24/7 telephone assistance</span><a href={`tel:${business.phone}`}>Call: {business.phoneDisplay}</a></div></div>
    <header className="site-header"><div className="shell nav-wrap">
      <a className="brand" href="/"><img src="/images/optimized/logo.webp" width="52" height="52" alt="" /><span><b>KEYHOME</b><small>LOCKSMITH SPECIALISTS</small></span></a>
      <nav className="nav service-nav" aria-label="Main navigation"><a href="/#services">All services</a><a href="/#work">Our work</a><a href="/#contact">Contact</a><a className="nav-cta" href={`tel:${business.phone}`}>Call now</a></nav>
    </div></header>
    <main id="main">
      <section className="service-hero"><div className="shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">{service.title}</li></ol></nav>
        <div className="service-hero-grid"><div>
          <p className="eyebrow"><span />{service.eyebrow}</p><h1>{service.title}</h1><p>{service.intro}</p>
          <div className="hero-actions"><a className="button primary" href={`tel:${business.phone}`}>Call {business.phoneDisplay}</a><a className="button secondary" href={whatsapp}>WhatsApp us</a></div>
        </div>
        {household ? <aside className="home-lockout-card"><span aria-hidden="true">⌂</span><h2>Help getting back home.</h2><p>Tell us your location, door type and what happened. We’ll confirm availability and the next step.</p><p>Have proof of occupancy or the owner’s authorization ready.</p></aside> :
          <img src={service.image} width="560" height="420" fetchPriority="high" alt={service.imageAlt ?? `KeyHome — ${service.eyebrow.toLowerCase()}`} />}
        </div>
      </div></section>
      <section className="service-answer"><div className="shell narrow"><p className="kicker">Quick answer</p><h2>How can KeyHome help?</h2><p>{service.answer}</p></div></section>
      <section className="section"><div className="shell service-detail-grid">
        <div><p className="kicker">Service scope</p><h2>Understand the work before you book.</h2><ul className="benefit-list">{service.benefits.map(item => <li key={item}>✓ {item}</li>)}</ul></div>
        <div className="process-card"><p className="kicker light">What happens next</p>{service.steps.map((step, index) => <div key={step}><strong>0{index + 1}</strong><span>{step}</span></div>)}</div>
      </div></section>
      <section className="service-guide"><div className="shell">
        <div className="section-heading"><div><p className="kicker">Before you book</p><h2>Clear answers. Practical next steps.</h2></div><p>The right solution depends on your key, lock and situation. These details help us assess the work.</p></div>
        <div className="guide-grid">{guide.sections.map(section => <article key={section.heading}><h3>{section.heading}</h3><p>{section.text}</p></article>)}</div>
        <div className="booking-details"><div><h3>What to prepare</h3><ul>{guide.prepare.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>Availability in Colombo</h3><p>Based in {business.locality}, serving {business.areas.filter(area => area !== business.locality).join(", ")} and nearby suburbs. Call to confirm service availability, visiting hours and directions before travelling.</p><a className="text-link" href={whatsapp}>Send your details on WhatsApp →</a></div></div>
      </div></section>
      <section className="section faq"><div className="shell faq-grid"><div><p className="kicker">Common questions</p><h2>Your questions, answered.</h2></div><div className="faq-list">{service.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="related-services" aria-labelledby="related-title"><div className="shell"><p className="kicker">More ways we can help</p><h2 id="related-title">Related locksmith services.</h2></div><ServiceLinks current={pageSlug} /></section>
      <section className="service-cta"><div className="shell"><h2>Need help today?</h2><p>Call KeyHome to confirm availability and discuss your situation.</p><a className="button primary" href={`tel:${business.phone}`}>Call {business.phoneDisplay}</a></div></section>
    </main>
    <footer><div className="shell copyright"><span>© {new Date().getFullYear()} KeyHome · Maharagama, Colombo</span><a href="/">Return to homepage</a><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></div></footer>
    <a className="floating-call" href={`tel:${business.phone}`}>Call now</a>
    <a className="floating-whatsapp" href={whatsapp} aria-label="Chat with KeyHome on WhatsApp">Chat<span> on WhatsApp</span></a>
  </>;
}
