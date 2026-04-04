import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import GoogleReviews from "./components/GoogleReviews";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#1a1a2e] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white text-center">
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-gray-400">Emergency Service</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-600" />
            <div>
              <p className="text-2xl font-bold">Free</p>
              <p className="text-sm text-gray-400">Estimates</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-600" />
            <div>
              <p className="text-2xl font-bold">Licensed</p>
              <p className="text-sm text-gray-400">PA #001473</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-600" />
            <div>
              <p className="text-2xl font-bold">5.0</p>
              <p className="text-sm text-gray-400">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Form + Reviews */}
      <section className="bg-white py-16" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Services Overview */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Can We Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From emergency tarping to complete roof replacements, Revive Roof Repair
                has you covered. We specialize in storm damage, leaks, and all types of
                roof repair across Central Pennsylvania.
              </p>

              {/* Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🚨",
                    title: "Emergency Repair",
                    desc: "24/7 rapid response for storm damage, leaks, and urgent repairs",
                  },
                  {
                    icon: "💧",
                    title: "Roof Leak Repair",
                    desc: "Stop water intrusion fast with our expert leak diagnosis and repair",
                  },
                  {
                    icon: "🌪️",
                    title: "Storm Damage",
                    desc: "Complete restoration with insurance claim assistance",
                  },
                  {
                    icon: "🏠",
                    title: "Roof Replacement",
                    desc: "Full roof installation - shingle, metal, EPDM, and more",
                  },
                  {
                    icon: "🏢",
                    title: "Commercial Roofing",
                    desc: "Flat roofs, coatings, and maintenance programs",
                  },
                  {
                    icon: "🔍",
                    title: "Roof Inspection",
                    desc: "Free comprehensive inspections with detailed reports",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="service-card bg-gray-50 rounded-xl p-5 border border-gray-100 cursor-pointer"
                  >
                    <span className="text-2xl mb-2 block">{service.icon}</span>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form + Reviews */}
            <div className="space-y-8">
              <ContactForm />
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Revive Roof Repair?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local & Trusted",
                desc: "Serving Central PA for years with hundreds of satisfied customers. We're your neighbors.",
                icon: "🏠",
              },
              {
                title: "Insurance Experts",
                desc: "We work directly with your insurance company to simplify storm damage claims.",
                icon: "📋",
              },
              {
                title: "Quality Guaranteed",
                desc: "We use premium materials and back our work with solid warranties.",
                icon: "✅",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e63946] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Storm Damage? Don&apos;t Wait - Call Now!
          </h2>
          <p className="text-white/90 mb-6">
            Even small delays can lead to major water damage. Our team is standing by 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17175001434"
              className="flex items-center gap-2 bg-white text-[#e63946] font-bold py-3 px-8 rounded-lg transition-all text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (717) 500-1434
            </a>
            <a
              href="#contact-form"
              className="flex items-center gap-2 bg-[#1a1a2e] text-white font-bold py-3 px-8 rounded-lg transition-all text-lg"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
