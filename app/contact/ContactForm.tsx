'use client'

import { useState } from 'react'

export default function ContactForm() {
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
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
      <h2 className="card-heading text-2xl font-bold mb-6">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
            placeholder="+27 XX XXX XXXX"
          />
        </div>

        {/* Type of Inquiry */}
        <div>
          <label htmlFor="type" className="form-label block text-sm font-medium mb-2">
            Type of Inquiry
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
          >
            <option value="general">General Inquiry</option>
            <option value="membership">Membership</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media & Press</option>
            <option value="funding">Funding Opportunities</option>
            <option value="events">Events & Programs</option>
            <option value="technical">Technical Support</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="form-label block text-sm font-medium mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
            placeholder="Brief subject of your message"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="form-label block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
            placeholder="Please provide details about your inquiry..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-corporate-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-sa-navy transition-colors focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          We typically respond within 24 hours during business days.
          For urgent matters, please call us directly.
        </p>
      </div>
    </div>
  )
}
