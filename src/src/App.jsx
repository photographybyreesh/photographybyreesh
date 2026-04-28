import React, { useEffect, useState } from "react";

const LOGO_URL = "/images/logo.png";
const BUSINESS_NAME = "Photography by Reesh";
const EMAIL = "photographybyreesh@gmail.com";
const PHONE = "+61 452 502 719";
const INSTAGRAM_URL = "https://www.instagram.com/photographyby.reesh/";
const FACEBOOK_URL = "https://www.facebook.com/PhotobyReesh/";
const SITE_URL = "https://photographybyreesh.com";

const portfolioImages = [
  { title: "Wedding Ceremony Photography Perth", image: "/images/DSC00882.jpg" },
  { title: "Couple Photography Perth", image: "/images/DSC01022.jpg" },
  { title: "Bridal Portrait Photography Perth", image: "/images/DSC01086.jpg" },
  { title: "Wedding Reception Photography Perth", image: "/images/DSC01806.jpg" },
  { title: "Family Photography Perth", image: "/images/DSC05309.jpg" },
  { title: "Portrait Photographer Perth", image: "/images/DSC08249.jpg" },
];

const reviews = [
  { name: "Ahmed Shaik", text: "We couldn't be happier choosing Reesh. Felt like a friend, captured everything perfectly." },
  { name: "Rachel Bunny", text: "Relaxed, effortless and beautiful results. Couldn't ask for more." },
  { name: "Nicholas Vella", text: "Professional, accommodating and captured our proposal perfectly." },
];

const services = [
  { title: "Wedding Photography", description: "Calm, story-led coverage for ceremonies, portraits, receptions and the unscripted moments in between." },
  { title: "Couples & Proposals", description: "Thoughtful direction and natural emotion for engagements, surprise proposals and romantic sessions." },
  { title: "Family & Maternity", description: "Relaxed sessions designed to feel easy, warm and genuine, especially for families and expecting parents." },
  { title: "Events", description: "Polished coverage for celebrations, community events and meaningful milestones across Perth." },
];

const faqs = [
  { q: "How much does photography cost?", a: "Packages are tailored to your date, coverage and session type. Send a quick enquiry and Reesh will recommend the best option." },
  { q: "How long is delivery time?", a: "Most galleries are delivered within 1–3 weeks, depending on the session size and editing requirements." },
  { q: "Do you travel?", a: "Yes. Reesh is available across Perth and selected Western Australia locations." },
  { q: "How do I book?", a: "Send your name, date and session type through the form. You will receive availability and next steps." },
];

function setOrUpdateMeta(selector, attributes) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attributes.tag || "meta");
    document.head.appendChild(el);
  }
  Object.entries(attributes).forEach(([k, v]) => k !== "tag" && el.setAttribute(k, v));
}

export default function PhotographyByReeshWebsite() {
  const [form, setForm] = useState({ name: "", email: "", session: "Wedding", date: "" });

  useEffect(() => {
    document.title = "Wedding Photographer Perth | Photography by Reesh";
    setOrUpdateMeta('meta[name="description"]', {
      name: "description",
      content: "Premium Perth photographer for weddings, couples, families and events. 5-star rated photography with a relaxed, elegant experience.",
    });
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-[#f5f5f5] font-serif tracking-wide selection:bg-[#d6c6a8] selection:text-black">

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-black/75 backdrop-blur-xl z-50 px-5 md:px-8 py-4 flex justify-between items-center border-b border-white/10">
        <a href="#top" aria-label="Photography by Reesh home">
          <img src={LOGO_URL} className="h-10 md:h-11" alt="Photography by Reesh" />
        </a>
        <div className="hidden md:flex gap-9 text-xs uppercase tracking-[0.22em] text-white/70 items-center">
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#faq" className="hover:text-white transition">FAQs</a>
          <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-[#d6c6a8] transition shadow-[0_0_30px_rgba(214,198,168,0.25)]">Check Availability</a>
        </div>
        <a href="#contact" className="md:hidden bg-white text-black px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium">
          Book
        </a>
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-36 md:pt-44 pb-20 md:pb-28 text-center px-5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(214,198,168,0.22),transparent_55%)] pointer-events-none" />
        <p className="relative mb-5 text-[11px] md:text-xs uppercase tracking-[0.32em] text-[#c7b99a]">
          Perth photographer for weddings, couples, portraits and events
        </p>
        <h1 className="relative text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight max-w-5xl mx-auto">
          Elegant photography for moments you cannot repeat.
        </h1>
        <p className="relative mt-6 max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
          Calm direction, genuine emotion and premium editing for Perth weddings, proposals, families and events. Enquire early to secure your date.
        </p>
        <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-[#c7b99a]">
          <span>★★★★★ 5.0 Rated</span>
          <span className="text-white/25">•</span>
          <span>7 Google Reviews</span>
          <span className="text-white/25">•</span>
          <span>Perth, WA</span>
        </div>
        <div className="relative mt-9 flex flex-col sm:flex-row justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-[#d6c6a8] transition shadow-[0_20px_60px_rgba(255,255,255,0.16)]">
            Book Your Session
          </a>
          <a href="#portfolio" className="border border-white/30 px-8 py-4 rounded-full text-sm hover:bg-white hover:text-black transition">
            View Portfolio
          </a>
        </div>
        <p className="relative mt-5 text-xs text-white/45">
          Quick enquiry. No pressure. Reesh will confirm availability and guide the next step.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-5 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c7b99a] mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">A premium gallery with real emotion.</h2>
          </div>
          <a href="#contact" className="text-sm text-[#c7b99a] hover:text-white transition">Love this style? Book your shoot →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {portfolioImages.map((img, index) => (
            <div key={img.title} className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={img.image} alt={img.title} className={`${index === 0 ? "h-[520px]" : "h-80"} w-full object-cover transform group-hover:scale-105 transition duration-700`} loading={index === 0 ? "eager" : "lazy"} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-90 transition" />
              <div className="absolute bottom-0 p-5">
                <p className="text-sm tracking-wide text-white">{img.title}</p>
                <p className="mt-1 text-xs text-white/55">Photography by Reesh • Perth</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex bg-[#d6c6a8] text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition">
            Check My Date
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 md:px-8 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-[#c7b99a] mb-3">Services</p>
        <h2 className="text-4xl md:text-5xl mb-5 font-medium tracking-tight">Choose the photography experience you need.</h2>
        <p className="max-w-2xl mx-auto text-white/55 leading-relaxed mb-12">
          Every shoot is planned around your story, your comfort and the moments you want to remember.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map(s => (
            <div key={s.title} className="border border-white/10 p-7 md:p-8 rounded-2xl hover:border-[#c7b99a] hover:bg-white/[0.03] transition text-left">
              <h3 className="text-xl font-medium tracking-wide">{s.title}</h3>
              <p className="text-gray-400 mt-4 leading-relaxed">{s.description}</p>
              <a href="#contact" className="mt-6 inline-block text-sm text-[#c7b99a] hover:text-white transition">Enquire for this service →</a>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-5 md:px-8 py-24 bg-[#f5f2ea] text-black text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-black/45 mb-3">Package preview</p>
        <h2 className="text-4xl md:text-5xl mb-5 font-medium tracking-tight">Start with the right package.</h2>
        <p className="max-w-2xl mx-auto text-black/60 leading-relaxed mb-12">
          Dates and coverage needs vary, so pricing is confirmed after a quick enquiry. These options help you choose where to begin.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Weddings", detail: "Ceremony, portraits, reception and candid storytelling", cta: "Ask for wedding availability" },
            { name: "Couples", detail: "Engagements, proposals and romantic outdoor sessions", cta: "Plan a couples shoot" },
            { name: "Events", detail: "Family events, celebrations and milestone moments", cta: "Request event coverage" },
          ].map(p => (
            <div key={p.name} className="p-8 border border-black/10 rounded-2xl bg-white hover:shadow-2xl transition text-left">
              <h3 className="text-lg uppercase tracking-widest">{p.name}</h3>
              <p className="mt-4 text-3xl font-medium tracking-tight">Starting from $___</p>
              <p className="mt-4 text-black/60 leading-relaxed">{p.detail}</p>
              <a href="#contact" className="mt-7 inline-block rounded-full bg-black text-white px-5 py-3 text-sm hover:bg-[#c7b99a] hover:text-black transition">{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-black/50">Popular dates book first. Enquire early to avoid missing your preferred day.</p>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-5 md:px-8 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-[#c7b99a] mb-3">Social proof</p>
        <h2 className="text-4xl md:text-5xl mb-5 font-medium tracking-tight">Trusted by Perth clients.</h2>
        <p className="max-w-2xl mx-auto text-white/55 leading-relaxed mb-12">
          Clients choose Reesh for the relaxed atmosphere, professional approach and natural final images.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map(r => (
            <div key={r.name} className="border border-white/10 p-7 md:p-8 rounded-2xl bg-white/[0.025] text-left">
              <p className="text-[#c7b99a] text-sm mb-4">★★★★★</p>
              <p className="italic text-gray-300 leading-relaxed">“{r.text}”</p>
              <p className="mt-6 text-sm uppercase tracking-wide text-white/70">{r.name}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-10 inline-flex bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-[#d6c6a8] transition">Ready for photos like this?</a>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 md:px-8 py-24 text-center border-t border-white/10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#c7b99a] mb-3">Questions before booking</p>
        <h2 className="text-4xl md:text-5xl mb-12 font-medium tracking-tight">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map(f => (
            <div key={f.q} className="rounded-2xl border border-white/10 p-6 bg-white/[0.025]">
              <h3 className="font-medium tracking-wide text-white">{f.q}</h3>
              <p className="text-gray-400 mt-3 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 md:px-8 py-24 bg-[#f5f2ea] text-black text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-black/45 mb-3">Final step</p>
        <h2 className="text-4xl md:text-5xl mb-5 font-medium tracking-tight">Check availability for your date.</h2>
        <p className="max-w-2xl mx-auto text-black/60 leading-relaxed mb-10">
          Fill this out in under a minute. Reesh will reply with availability, package guidance and the easiest next step.
        </p>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 max-w-5xl mx-auto items-start">
          <div className="bg-black text-white rounded-2xl p-7 text-left">
            <h3 className="text-2xl font-medium tracking-tight">How booking works</h3>
            <div className="mt-6 space-y-5 text-sm text-white/70">
              <p><span className="text-[#d6c6a8]">01.</span> Send your session type and preferred date.</p>
              <p><span className="text-[#d6c6a8]">02.</span> Reesh confirms availability and recommends a package.</p>
              <p><span className="text-[#d6c6a8]">03.</span> Lock in your shoot and enjoy a relaxed photography experience.</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
              <p>{EMAIL}</p>
              <p className="mt-2">{PHONE}</p>
              <p className="mt-2">Perth, Western Australia</p>
            </div>
          </div>

          <form className="space-y-4 text-left bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-black/10 p-4 rounded-xl outline-none focus:border-black" />
              <input placeholder="Email or phone" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-black/10 p-4 rounded-xl outline-none focus:border-black" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select value={form.session} onChange={(e) => setForm({ ...form, session: e.target.value })} className="w-full border border-black/10 p-4 rounded-xl outline-none focus:border-black bg-white">
                <option>Wedding</option>
                <option>Couples / Proposal</option>
                <option>Family</option>
                <option>Maternity</option>
                <option>Event</option>
                <option>Portrait</option>
              </select>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full border border-black/10 p-4 rounded-xl outline-none focus:border-black" />
            </div>
            <textarea placeholder="Tell me your location, event details or what you are hoping to capture." rows="4" className="w-full border border-black/10 p-4 rounded-xl outline-none focus:border-black" />
            <button type="button" className="bg-black text-white px-6 py-4 w-full rounded-full font-medium hover:bg-[#c7b99a] hover:text-black transition">
              Send Enquiry & Check Availability
            </button>
            <p className="text-center text-xs text-black/45">Prefer social? Message on Instagram or Facebook after sending your date.</p>
          </form>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 px-5">
        © 2026 Photography by Reesh • Perth • <a href={INSTAGRAM_URL} className="hover:text-white">Instagram</a> • <a href={FACEBOOK_URL} className="hover:text-white">Facebook</a>
      </footer>

      <a href="#contact" className="fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-full bg-white px-6 py-4 text-center text-sm font-medium text-black shadow-2xl">
        Check Availability
      </a>

    </div>
  );
}
