import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Marvel Fountains" };

const contactInfo = [
  { Icon: MapPin, label: "Address", value: "123 Fountain Road, Jaipur, Rajasthan, India" },
  { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { Icon: Mail, label: "Email", value: "info@marvelfountains.com" },
];

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <section className="px-7 pb-30">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-17">
          <Reveal variant="fade-left">
            <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Contact Us
            </div>
            <h3 className="text-ink text-[26px] mb-4.5 font-bold font-serif">Let&apos;s Build Something Beautiful</h3>
            <p className="text-muted mb-6.5 font-light">
              Reach out for product enquiries, custom designs, or installation support.
            </p>
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className="flex gap-4 mb-5.5 items-start pb-5.5 border-b border-line">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-deep shrink-0 shadow-[0_6px_16px_rgba(212,175,55,0.3)]">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h5 className="text-ink text-sm font-semibold uppercase tracking-wide">{label}</h5>
                  <p className="text-muted text-sm mt-1">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal variant="fade-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
