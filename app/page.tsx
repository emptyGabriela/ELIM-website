import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceTimes from "@/components/ServiceTimes";
import PastorMessage from "@/components/PastorMessage";
import Events from "@/components/Events";
import RadioTV from "@/components/RadioTV";
import Ministries from "@/components/Ministries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { contact } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Misión Cristiana Elim",
  description:
    "Un lugar donde encontrarás amor, esperanza y comunidad.",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressCountry: "SV",
  },
  telephone: contact.phone,
  email: contact.email,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ServiceTimes />
        <PastorMessage />
        <Events />
        <RadioTV />
        <Ministries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
