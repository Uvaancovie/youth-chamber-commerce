'use client'

import { useState } from 'react'

const membershipTiers = [
  {
    name: "Student Member",
    price: "R100",
    period: "per year",
    description: "Perfect for students and recent graduates starting their entrepreneurial journey",
    features: [
      "Access to networking events",
      "Monthly newsletters",
      "Basic mentorship matching",
      "Online resource library",
      "Student-only workshops"
    ],
    color: "border-sa-green"
  },
  {
    name: "Professional Member",
    price: "R500",
    period: "per year",
    description: "Ideal for established young professionals and emerging entrepreneurs",
    features: [
      "All Student Member benefits",
      "Priority event access",
      "One-on-one mentorship sessions",
      "Industry-specific workshops",
      "Business development resources",
      "Networking dinner invitations"
    ],
    color: "border-corporate-blue",
    popular: true
  },
  {
    name: "Corporate Member",
    price: "R2000",
    period: "per year",
    description: "For established businesses wanting to support youth development",
    features: [
      "All Professional Member benefits",
      "Corporate partnership opportunities",
      "Sponsor recognition at events",
      "Access to talent pipeline",
      "Custom workshop hosting",
      "Annual corporate retreat invitation"
    ],
    color: "border-sa-gold"
  }
]

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    company: '',
    industry: '',
    experience: '',
    interests: '',
    goals: '',
    referral: ''
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
    console.log('Form submitted:', { selectedTier, ...formData })
    alert('Thank you for your application! We will review it and get back to you within 3-5 business days.')
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Join YCCI Africa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              Become part of South Africa's premier youth chamber of commerce. 
              Access exclusive networks, mentorship, and opportunities to grow your career and business.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Membership
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Select the membership tier that best fits your current stage and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 ${tier.color} p-8 ${
                  tier.popular ? 'ring-2 ring-corporate-blue' : ''
                } ${selectedTier === tier.name ? 'bg-blue-50' : 'bg-white'} cursor-pointer transition-all hover:shadow-lg`}
                onClick={() => setSelectedTier(tier.name)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-corporate-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-corporate-blue">{tier.price}</span>
                    <span className="text-gray-500 ml-1">/{tier.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-sa-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <input
                    type="radio"
                    name="membershipTier"
                    value={tier.name}
                    checked={selectedTier === tier.name}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-4 h-4 text-corporate-blue"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Select {tier.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedTier && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Application Form
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                You've selected: <span className="font-semibold text-corporate-blue">{selectedTier}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <select
                    id="age"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  >
                    <option value="">Select age range</option>
                    <option value="18-22">18-22</option>
                    <option value="23-27">23-27</option>
                    <option value="28-32">28-32</option>
                    <option value="33-35">33-35</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Occupation *
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleInputChange}
                    placeholder="e.g., Student, Entrepreneur, Marketing Manager"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Current employer or university"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                  >
                    <option value="">Select industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Creative Arts">Creative Arts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Business/Professional Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="4-5 years">4-5 years</option>
                  <option value="6+ years">6+ years</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest *
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  required
                  rows={3}
                  value={formData.interests}
                  onChange={handleInputChange}
                  placeholder="What business areas, skills, or topics are you most interested in?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Goals and Expectations *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={3}
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="What do you hope to achieve through your YCCI membership?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about YCCI?
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                >
                  <option value="">Select an option</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend/Colleague">Friend/Colleague</option>
                  <option value="University">University</option>
                  <option value="Event">Event</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-corporate-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Join YCCI?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover the benefits that come with being part of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extensive Network</h3>
              <p className="text-gray-600 text-sm">
                Connect with over 500 young entrepreneurs, business leaders, and industry experts across South Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Access exclusive workshops, masterclasses, and training programs designed for young professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Growth</h3>
              <p className="text-gray-600 text-sm">
                Get access to funding opportunities, mentorship programs, and business development resources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Showcase your achievements and get recognized as a rising star in South Africa's business community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Advancement</h3>
              <p className="text-gray-600 text-sm">
                Access job opportunities, internships, and career guidance from industry professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Voice in Policy</h3>
              <p className="text-gray-600 text-sm">
                Help shape policies that affect young entrepreneurs and contribute to South Africa's economic development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
