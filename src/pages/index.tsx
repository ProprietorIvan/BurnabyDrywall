import React, { useState } from "react";
import {
  Phone,
  Droplets,
  Clock,
  Shield,
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

const SurreyFlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    emergency: "",
  });

  const handleEmergencyCall = () => {
    window.location.href = "tel:778-200-9299";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Response",
      description: "Rapid response across Surrey and Fraser Valley",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Professional flood restoration experts",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Advanced Equipment",
      description: "Industrial-grade water extraction",
    },
  ];

  const benefits = [
    {
      title: "Local Expertise",
      description:
        "Deep knowledge of Surrey's unique flooding challenges and municipal requirements.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear, detailed quotes with no hidden fees or surprise charges.",
    },
    {
      title: "Certified Specialists",
      description:
        "IICRC certified technicians with extensive water damage restoration experience.",
    },
    {
      title: "Property Protection",
      description:
        "Comprehensive solutions to protect your property value and prevent future issues.",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-emerald-50 to-teal-50">
        <div className="absolute inset-0 bg-grid-emerald-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              24/7 Surrey Emergency Flood Response
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-emerald-950">
              Surrey Emergency
              <span className="block text-teal-600">Water Damage Repair</span>
            </h1>
            <p className="text-xl text-emerald-800 max-w-2xl mx-auto">
              When flooding strikes your Surrey property, our expert team
              responds immediately to prevent further damage.
            </p>
          </div>

          {/* Emergency Call Button */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-teal-600 text-white px-8 py-6 rounded-full text-2xl font-bold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-8 h-8" />
              <span>778-200-9299</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-emerald-800 text-lg">
              24/7 Emergency Response • Free Estimates • Fully Licensed
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-teal-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-emerald-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Surrey Trusted Flood Damage Experts
            </h2>
            <p className="text-lg text-emerald-800 leading-relaxed">
              Serving Surrey residents with fast, reliable flood damage
              restoration. Our team understands the unique challenges of water
              damage in the Fraser Valley climate and provides comprehensive
              solutions to protect your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-emerald-50 rounded-xl"
              >
                <div className="flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-emerald-800">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Form Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Emergency Service Request
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Request Immediate Assistance
            </h2>
            <p className="text-lg text-emerald-800">
              For fastest service call:{" "}
              <span className="font-semibold">778-200-9299</span>
              <br />
              Or email:{" "}
              <span className="font-semibold">office@surreyflood.com</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-emerald-900 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-emerald-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-emerald-900 mb-2"
              >
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="emergency"
                className="block text-sm font-medium text-emerald-900 mb-2"
              >
                Describe Your Emergency
              </label>
              <textarea
                id="emergency"
                name="emergency"
                value={formData.emergency}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
            >
              Submit Emergency Request
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fast Response When Minutes Matter
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Professional water damage restoration in Surrey. We are here 24/7 to
            protect your property.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-teal-50 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call Now: 778-200-9299</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Emergency Water Damage Services
            </h2>
            <p className="text-lg text-emerald-800">
              Complete flood restoration services for Surrey properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-emerald-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/7.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Water Extraction</h3>
                <p className="text-emerald-800 mb-4">
                  Professional water removal services using advanced extraction
                  equipment to minimize water damage and prevent further issues.
                </p>
                <Link
                  href="/water-extraction"
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/4.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Drying & Dehumidification
                </h3>
                <p className="text-emerald-800 mb-4">
                  Comprehensive structural drying services using industrial
                  dehumidifiers and air movers to prevent mold and structural
                  damage.
                </p>
                <Link
                  href="/drying-and-dehumidification"
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/5.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Mold Remediation</h3>
                <p className="text-emerald-800 mb-4">
                  Expert mold removal and remediation services to ensure your
                  property is safe and healthy after water damage.
                </p>
                <Link
                  href="/mold-remediation"
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurreyFlood;
