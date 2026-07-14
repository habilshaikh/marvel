"use client";

export default function ContactForm() {
  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-line bg-paper text-sm transition-all focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]";

  return (
    <form
      className="rounded-2xl bg-sand p-9.5 border border-line shadow-[0_2px_10px_rgba(13,21,38,0.04)]"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mb-4.5">
        <input type="text" placeholder="Your Name" required className={inputClass} />
        <input type="tel" placeholder="Phone Number" required className={inputClass} />
      </div>
      <input type="email" placeholder="Email Address" required className={`${inputClass} mb-4.5`} />
      <textarea placeholder="Tell us about your requirement..." required className={`${inputClass} resize-y min-h-[110px] mb-4.5`} />
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-gold to-gold-deep py-4 font-semibold text-navy-deep text-xs tracking-widest uppercase shadow-[0_10px_24px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_14px_30px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_4px_10px_rgba(212,175,55,0.35)]"
      >
        Send Message
      </button>
    </form>
  );
}
