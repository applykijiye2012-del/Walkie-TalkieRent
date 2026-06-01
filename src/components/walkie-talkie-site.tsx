"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  ["Rental Plans", "#plans"],
  ["Categories", "#categories"],
  ["Specifications", "#specifications"],
  ["Location", "#location"],
  ["Venues", "#venues"],
  ["Use Cases", "#industries"],
  ["Book Now", "#booking"],
];

const waLink =
  "https://wa.me/9140968645?text=Hi%20RentalXgogo%2C%20I%20want%20to%20rent%20wireless%20walkie-talkies.";

function Cursor() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;

    const move = (event: MouseEvent) => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    };

    const targets = document.querySelectorAll(
      "a, button, input, select, textarea, summary, .card, .plan, .walkie-ad",
    );
    const enter = () => ring.classList.add("is-hovering");
    const leave = () => ring.classList.remove("is-hovering");

    window.addEventListener("mousemove", move);
    targets.forEach((target) => {
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="RentalXgogo home">
      <span className="brand-mark">RX</span>
      <span>RentalXgogo</span>
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => {
      document.getElementById("successMessage")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  }

  return (
    <form className="form" id="rentalForm" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone number
          <input name="phone" placeholder="9140968645" required />
        </label>
        <label>
          Company / Event
          <input name="company" placeholder="Company or event name" />
        </label>
        <label>
          Quantity needed
          <input name="quantity" type="number" min="1" placeholder="Example: 20" required />
        </label>
        <label>
          Rental duration
          <select name="duration" required defaultValue="">
            <option value="">Select duration</option>
            <option>1 day</option>
            <option>Weekend</option>
            <option>1 week</option>
            <option>1 month</option>
            <option>Custom duration</option>
          </select>
        </label>
        <label>
          Start date
          <input name="startDate" type="date" required />
        </label>
        <label>
          Kit type
          <select name="kit" defaultValue="Basic Kit">
            <option>Basic Kit</option>
            <option>Event Kit</option>
            <option>Enterprise Kit</option>
            <option>Custom Kit</option>
          </select>
        </label>
        <label className="full">
          Accessories
          <select name="accessories" defaultValue="Walkie-talkies only">
            <option>Walkie-talkies only</option>
            <option>Earpieces required</option>
            <option>Multi-unit charger required</option>
            <option>Spare batteries required</option>
            <option>Full accessory kit</option>
          </select>
        </label>
        <label className="full">
          Message
          <textarea
            name="message"
            placeholder="Tell us about your venue, teams, channels, delivery needs, or special requirements."
            required
          />
        </label>
      </div>
      <button className="btn" type="submit">
        Submit Rental Request
      </button>
      <div className={submitted ? "success show" : "success"} id="successMessage">
        Your walkie-talkie rental request has been submitted. We will contact you soon.
      </div>
    </form>
  );
}

export function WalkieTalkieSite() {
  return (
    <>
      <Cursor />
      <header className="navbar">
        <div className="container nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="btn" href="#booking">
            Rent Walkie-Talkies
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Wireless communication rental</span>
              <h1>Rent reliable walkie-talkies for events, teams, and worksites.</h1>
              <p className="hero-copy">
                RentalXgogo provides wireless two-way radio rentals for security teams,
                concerts, construction sites, hotels, schools, warehouses, and film
                production crews.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#booking">
                  Get Rental Quote
                </a>
                <a className="btn secondary" href="#plans">
                  View Packages
                </a>
              </div>
              <div className="trust">
                <div><span className="check">✓</span> Bulk rentals available</div>
                <div><span className="check">✓</span> Long battery life</div>
                <div><span className="check">✓</span> Event-ready devices</div>
                <div><span className="check">✓</span> Setup guidance included</div>
              </div>
            </div>

            <div className="device-card" aria-label="Wireless walkie-talkie rental device visual">
              <div className="device-glow" />
              <div className="radio-visual">
                <div className="signal one" />
                <div className="signal two" />
                <div className="radio">
                  <div className="antenna" />
                  <div className="knob" />
                  <div className="screen">
                    <strong>CH 08</strong>
                    <small>READY</small>
                  </div>
                  <div className="speaker">
                    <span /><span /><span /><span /><span /><span />
                  </div>
                  <div className="buttons">
                    <span /><span /><span /><span /><span /><span />
                  </div>
                </div>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><strong>12hr</strong><span>battery life</span></div>
                <div className="hero-stat"><strong>1.5-2km</strong><span>range options</span></div>
                <div className="hero-stat"><strong>24h</strong><span>quick dispatch</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="ad-strip" aria-label="Walkie-talkie rental ads">
          <div className="container ad-strip-inner">
            {[
              ["RX", "Event Radio Rentals", "Clear team communication"],
              ["2K", "1.5 upto 2 KM Range", "Great for venues and sites"],
              ["24", "Quick Dispatch", "Fast rental support"],
              ["+", "Bulk Walkie Kits", "Chargers, earpieces, labels"],
            ].map(([mark, title, copy]) => (
              <div className="walkie-ad" key={title}>
                <div className="walkie-logo">{mark}</div>
                <div>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="services">
          <div className="container">
            <SectionHead
              eyebrow="Why rent from us"
              title="Clear communication equipment without buying expensive devices."
            >
              Get dependable wireless communication for short-term projects, large events,
              seasonal teams, and temporary operations.
            </SectionHead>
            <div className="grid-4">
              {[
                ["☊", "Strong Range", "Choose devices suitable for indoor venues, outdoor sites, hotels, campuses, and large event areas."],
                ["🔋", "Long Battery", "Rental kits include charged devices with battery support options for long shifts and event days."],
                ["🎧", "Accessories", "Add earpieces, chargers, belt clips, spare batteries, and multi-unit charging docks."],
                ["⚡", "Fast Setup", "Devices can be pre-programmed by channel, team group, or department before handover."],
              ].map(([icon, title, copy]) => (
                <article className="card" key={title}>
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plans">
          <div className="container">
            <SectionHead eyebrow="Rental plans" title="Flexible walkie-talkie rental packages.">
              Use these sample packages as a starting point. Final pricing can be customized by
              quantity, rental duration, range, and accessories.
            </SectionHead>
            <div className="plans">
              {[
                ["Small Team", "Basic Kit", "₹999", "Best for small teams, pop-up events, shops, and local coordination.", ["5 walkie-talkies", "5 charging cables", "Basic channel setup", "Pickup or local delivery"], "Choose Basic", false],
                ["Most Popular", "Event Kit", "₹2,499", "Ideal for weddings, conferences, concerts, security, and production teams.", ["15 walkie-talkies", "Multi-unit charger", "Earpiece add-on option", "Team channel setup"], "Choose Event Kit", true],
                ["Large Operations", "Enterprise Kit", "Custom", "For construction sites, hotels, campuses, warehouses, and multi-day operations.", ["30+ walkie-talkies", "Multiple channels", "Spare batteries", "Priority support"], "Request Custom Quote", false],
              ].map(([badge, title, price, copy, items, cta, featured]) => (
                <article className={featured ? "plan featured" : "plan"} key={String(title)}>
                  <span className="badge">{String(badge)}</span>
                  <h3>{String(title)}</h3>
                  <div className="price">
                    {String(price)}
                    {price !== "Custom" ? <span>/day</span> : null}
                  </div>
                  <p>{String(copy)}</p>
                  <ul className="list">
                    {(items as string[]).map((item) => (
                      <li key={item}><span className="check">✓</span> {item}</li>
                    ))}
                  </ul>
                  <a className={featured ? "btn" : "btn secondary"} href="#booking">
                    {String(cta)}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="categories">
          <div className="container">
            <SectionHead eyebrow="Categories" title="Our equipment categories.">
              Select the right walkie-talkie rental equipment for your event, worksite,
              venue, or operations team.
            </SectionHead>
            <div className="grid-4">
              <article className="card">
                <div className="icon">📻</div>
                <h3>Walkie-Talkies</h3>
                <p>Wireless handheld radios for staff, security, event teams, construction, and daily operations.</p>
              </article>
              <article className="card">
                <Image className="category-image" src="/clear-com-headset.svg" alt="Clear-Com headset rental equipment" width={92} height={72} />
                <h3>Clear-Com & Earpieces</h3>
                <p>Clear-Com style headsets, discreet earpieces, and audio accessories for security, VIP, and production crews.</p>
              </article>
              <article className="card">
                <Image className="category-image" src="/security-system.svg" alt="Security system rental equipment" width={92} height={72} />
                <h3>Security System</h3>
                <p>Security communication support with walkie-talkies, monitoring coordination, and event safety equipment.</p>
              </article>
              <article className="card">
                <div className="icon">📦</div>
                <h3>Bulk Rental Kits</h3>
                <p>Custom walkie-talkie bundles with accessories, labels, backup units, and setup support.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="specifications">
          <div className="container">
            <SectionHead eyebrow="Specifications" title="Walkie-talkie specifications.">
              Rental kits are suitable for events, security teams, venues, schools,
              construction sites, warehouses, and business operations.
            </SectionHead>
            <div className="grid-4">
              {[
                ["📶", "Model", "Wireless walkie-talkie units available for short-term and bulk rentals."],
                ["📶", "Range", "1.5 upto 2 KM range depending on building structure, open area, walls, crowd density, and site conditions."],
                ["🔋", "Battery Backup", "Long-shift battery support with charging cables, spare batteries, and multi-unit charger options."],
                ["🔢", "Channels", "Multiple channel setup for security, management, parking, operations, vendors, and support teams."],
                ["🎧", "Audio Accessories", "Earpieces, headset options, Clear-Com style support, belt clips, and labeled team accessories."],
                ["⚙", "Setup", "Devices can be checked, charged, labeled, and organized by team before handover."],
                ["🛡", "Build Type", "Compact handheld wireless radios suitable for events, hotels, schools, warehouses, and worksites."],
                ["📦", "Kit Includes", "Walkie-talkies, chargers, optional earpieces, spare battery options, and quantity-based rental bundles."],
              ].map(([icon, title, copy]) => (
                <article className="card" key={title}>
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries">
          <div className="container">
            <SectionHead
              eyebrow="Use cases"
              title="Walkie-talkies for every team that needs instant communication."
            >
              Wireless radios are perfect when phone calls are too slow, internet is
              unreliable, or group coordination matters.
            </SectionHead>
            <div className="industries">
              {["Event Management", "Security Teams", "Construction Sites", "Hotels & Resorts", "Film Production", "Schools & Campuses", "Warehouses", "Parking Staff", "Festivals", "Hospitals"].map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="location">
          <div className="container">
            <SectionHead
              eyebrow="Location"
              title="Walkie-talkie rentals available in Santacruz East, Mumbai and nearby areas."
            >
              RentalXgogo supports event teams, security teams, hotels, schools, warehouses,
              and construction sites across Mumbai with pickup and local delivery options.
            </SectionHead>
            <div className="grid-3">
              <article className="card">
                <div className="icon">📍</div>
                <h3>Main Service Area</h3>
                <p>Datta Mandir Rd, Demello Compound, Vakola, Santacruz East, Mumbai, Maharashtra 400055.</p>
              </article>
              <article className="card">
                <div className="icon">🚚</div>
                <h3>Delivery Support</h3>
                <p>Pickup and delivery can be arranged depending on quantity, rental date, and location distance.</p>
              </article>
              <article className="card">
                <div className="icon">☎</div>
                <h3>Call for Availability</h3>
                <p>Call 9140968645 to confirm device availability, pricing, delivery, and rental timing.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="venues">
          <div className="container">
            <SectionHead eyebrow="Wedding venues" title="Wedding venues we cover in Mumbai.">
              RentalXgogo provides walkie-talkie rental support for wedding planners,
              event managers, security teams, hospitality staff, and venue coordination teams.
            </SectionHead>
            <div className="industries">
              {["Andheri", "Bandra", "Juhu", "Goregaon", "Powai", "Worli", "Malad", "Santacruz", "Panvel"].map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="container split">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Simple rental process from quote to return.</h2>
              <p>
                Tell us your event date, number of users, location type, and required
                accessories. We help you select the right kit and prepare devices before handover.
              </p>
              <a className="btn section-button" href="#booking">Start Booking</a>
            </div>
            <div className="steps">
              {[
                ["01", "Request a quote", "Share quantity, date, duration, venue type, and special communication requirements."],
                ["02", "Choose the kit", "Select radios, chargers, earpieces, spare batteries, and channel configuration."],
                ["03", "Receive devices", "Pick up or arrange delivery. Devices can be labeled and pre-programmed for teams."],
                ["04", "Use and return", "Operate during your rental period, then return equipment after the event or project."],
              ].map(([num, title, copy]) => (
                <article className="step" key={num}>
                  <div className="step-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Walkie-talkie rental questions." />
            <div className="faq">
              {[
                ["How many walkie-talkies should I rent?", "Count every person who needs instant communication, then add 1 or 2 spare units for supervisors, charging rotation, or emergency backup."],
                ["Can devices be set up with different channels?", "Yes. Devices can be grouped by security, operations, parking, management, vendors, or any team structure you need."],
                ["Do you provide earpieces and chargers?", "Yes. Rental kits can include earpieces, charging cables, multi-unit chargers, belt clips, spare batteries, and labels."],
                ["What rental durations are available?", "You can request daily, weekend, weekly, or long-term rentals depending on your project or event schedule."],
                ["Are walkie-talkies better than phones for events?", "For many teams, yes. Walkie-talkies allow instant push-to-talk communication without dialing, app setup, or depending on mobile data."],
              ].map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="booking">
          <div className="container booking">
            <div className="booking-info">
              <span className="eyebrow">Book rental</span>
              <h2>HH</h2>
              <p>
                Fill out the form with your quantity, dates, location, and accessories.
                This demo form shows a success message on submit.
              </p>
              <div className="contact-points">
                <div><span className="check">✓</span> Location: Datta Mandir Rd, Demello Compound, Vakola, Santacruz East, Mumbai, Maharashtra 400055</div>
                <div><span className="check">✓</span> Same-day or next-day requests available where possible</div>
                <div><span className="check">✓</span> Support for small teams and large events</div>
                <div><span className="check">✓</span> Custom kits for security, staff, vendors, and managers</div>
                <div><span className="check">✓</span> Optional earpieces, chargers, batteries, and labels</div>
              </div>
              <a className="whatsapp-link" href={waLink} target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
              <a className="call-link" href="tel:9140968645">Call 9140968645</a>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Brand />
          <nav className="footer-menu" aria-label="Footer navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div>© {new Date().getFullYear()} RentalXgogo. Wireless walkie-talkie rentals.</div>
        </div>
      </footer>

      <a className="whatsapp-float" href={waLink} target="_blank" rel="noopener" aria-label="Chat with RentalXgogo on WhatsApp">
        WhatsApp
      </a>
      <a className="call-float" href="tel:9140968645" aria-label="Call RentalXgogo">
        Call 9140968645
      </a>
    </>
  );
}
