'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              Get in touch with our team. Whether you have questions about membership, 
              want to partner with us, or need support, we're here to help.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Sandton, Johannesburg<br />
                      South Africa, 2196
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sa-green rounded-lg flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      General: info@ycciafrica.co.za<br />
                      Membership: membership@ycciafrica.co.za<br />
                      Partnerships: partnerships@ycciafrica.co.za
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sa-gold rounded-lg flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: +27 11 123 4567<br />
                      WhatsApp: +27 82 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sa-red rounded-lg flex items-center justify-center">
                      <span className="text-white">🕒</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-corporate-blue hover:text-sa-green transition-colors">
                    <span className="sr-only">Facebook</span>
                    📘 Facebook
                  </a>
                  <a href="#" className="text-corporate-blue hover:text-sa-green transition-colors">
                    <span className="sr-only">Twitter</span>
                    🐦 Twitter
                  </a>
                  <a href="#" className="text-corporate-blue hover:text-sa-green transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼 LinkedIn
                  </a>
                  <a href="#" className="text-corporate-blue hover:text-sa-green transition-colors">
                    <span className="sr-only">Instagram</span>
                    📷 Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="events">Event Information</option>
                    <option value="media">Media Inquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-corporate-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Find Us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Located in the heart of Johannesburg's business district
            </p>
          </div>
          
          {/* Placeholder for map */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl text-gray-500 block mb-4">🗺️</span>
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">123 Business District, Sandton, Johannesburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I become a member of YCCI?
              </h3>
              <p className="text-gray-600">
                You can apply for membership through our online application form. Simply visit our 
                membership page, select your preferred tier, and complete the application. We review 
                all applications within 3-5 business days.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What age range does YCCI serve?
              </h3>
              <p className="text-gray-600">
                YCCI is designed for young professionals and entrepreneurs aged 18-35. We focus on 
                supporting individuals who are in the early to mid-stages of their career or 
                entrepreneurial journey.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are events open to non-members?
              </h3>
              <p className="text-gray-600">
                Some events are open to the public, while others are exclusively for members. 
                Members receive priority booking and discounted rates for all events. Check our 
                events page for specific details about each event.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer mentorship programs?
              </h3>
              <p className="text-gray-600">
                Yes! We have a comprehensive mentorship program that matches members with experienced 
                business leaders and entrepreneurs. This is available to Professional and Corporate 
                members, with varying levels of access.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can my company partner with YCCI?
              </h3>
              <p className="text-gray-600">
                We offer various partnership opportunities including event sponsorship, corporate 
                membership, and collaboration on youth development programs. Contact us at 
                partnerships@ycciafrica.co.za to discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
