import { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact YCCI Africa | Get in Touch | King Sobhuza II House, Sandton',
  description: 'Contact YCCI Africa at King Sobhuza II House, Sandton. Call +27 79 654 6630 or email info@ycci-africa.org. Office hours Monday-Friday 8AM-5PM, Saturday 9AM-1PM.',
  keywords: 'YCCI contact, youth chamber contact South Africa, Sandton office, business chamber contact, King Sobhuza II House',
  openGraph: {
    title: 'Contact YCCI Africa | Youth Chamber of Commerce',
    description: 'Get in touch with YCCI Africa. Located in Sandton with phone support and multiple contact options for members and partners.',
    url: 'https://ycci-africa.org/contact',
    images: ['/contact-og.jpg'],
  },
}

export default function Contact() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-corporate-blue to-sa-navy">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* South African flag accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sa-green via-sa-gold via-sa-white via-sa-blue to-sa-red"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact YCCI Africa
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
              Get in touch with the Youth Chamber of Commerce & Industry Africa. Whether you have questions about membership, 
              want to partner with us, or need support for your business journey, we're here to help.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="card-heading text-2xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-lg font-semibold mb-2">Head Office</h3>
                  <p className="card-body">
                    King Sobhuza II House<br />
                    Sandton, Gauteng<br />
                    South Africa
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-sa-green rounded-lg flex items-center justify-center">
                    <span className="text-white">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-lg font-semibold mb-2">Email</h3>
                  <p className="card-body">
                    General Inquiries: info@ycci-africa.org<br />
                    Membership: membership@ycci-africa.org<br />
                    Media: media@ycci-africa.org
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-sa-gold rounded-lg flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-lg font-semibold mb-2">Phone</h3>
                  <p className="card-body">
                    Main Office: +27 79 654 6630<br />
                    WhatsApp Business: +27 79 654 6630
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-sa-red rounded-lg flex items-center justify-center">
                    <span className="text-white">🕒</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-lg font-semibold mb-2">Office Hours</h3>
                  <p className="card-body">
                    Monday - Friday: 8:00 AM - 5:00 PM (SAST)<br />
                    Saturday: 9:00 AM - 1:00 PM (SAST)<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="card-heading text-lg font-semibold mb-4">Follow Us on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://web.facebook.com/saycc.org" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-corporate-blue hover:bg-corporate-blue/5 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl mr-3">📘</span>
                  <span className="text-corporate-blue font-medium">Facebook</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/youth-chamber-of-commerce-industry-africa-ycci" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-corporate-blue hover:bg-corporate-blue/5 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl mr-3">💼</span>
                  <span className="text-corporate-blue font-medium">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-corporate-blue hover:bg-corporate-blue/5 transition-colors"
                >
                  <span className="text-2xl mr-3">🐦</span>
                  <span className="text-corporate-blue font-medium">Twitter/X</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-corporate-blue hover:bg-corporate-blue/5 transition-colors"
                >
                  <span className="text-2xl mr-3">📷</span>
                  <span className="text-corporate-blue font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-gradient-to-br from-corporate-blue/5 to-sa-green/5 p-6 rounded-lg">
              <h3 className="card-heading text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/membership" className="block text-corporate-blue hover:text-sa-green transition-colors">
                  → Become a Member
                </a>
                <a href="/programs" className="block text-corporate-blue hover:text-sa-green transition-colors">
                  → Our Programs
                </a>
                <a href="/events" className="block text-corporate-blue hover:text-sa-green transition-colors">
                  → Upcoming Events
                </a>
                <a href="/about" className="block text-corporate-blue hover:text-sa-green transition-colors">
                  → About YCCI Africa
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-corporate-blue to-sa-navy rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business Journey?
            </h2>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              Join thousands of young entrepreneurs who are already part of the YCCI Africa community. 
              Whether you're just starting out or looking to scale your business, we're here to support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="inline-flex rounded-md bg-sa-green px-6 py-3 text-lg font-semibold text-white hover:bg-sa-blue transition-colors"
              >
                Join YCCI Africa Today
              </a>
              <a
                href="/programs"
                className="inline-flex rounded-md border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-corporate-blue transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="card-heading text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="card-heading text-lg font-semibold mb-2">King Sobhuza II House, Sandton</h3>
            <p className="card-body mb-4">
              Our head office is conveniently located in Sandton, the heart of South Africa's business district.
            </p>
            <p className="text-sm text-gray-500">
              Interactive map integration coming soon. In the meantime, please contact us for detailed directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
