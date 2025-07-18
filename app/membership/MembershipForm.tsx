'use client'

import { useState } from 'react'

const membershipTiers = [
  {
    name: "Associate Member",
    price: "R50",
    period: "per month",
    description: "Perfect for young professionals starting their business journey with YCCI Africa",
    features: [
      "Monthly YCCI Africa newsletters and updates",
      "Access to online business resources",
      "Basic networking opportunities",
      "Youth development webinars",
      "Digital membership certificate",
      "Access to member-only WhatsApp groups"
    ],
    color: "border-sa-green",
    icon: "🌱",
    popular: false
  },
  {
    name: "Entrepreneur Member", 
    price: "R250",
    period: "per month",
    description: "Ideal for established young entrepreneurs and growing businesses",
    features: [
      "All Associate Member benefits",
      "Priority event access and networking",
      "One-on-one mentorship opportunities", 
      "Industry-specific workshops and training",
      "Business development resources",
      "Access to funding opportunities",
      "Quarterly business review sessions",
      "YCCI member directory access"
    ],
    color: "border-corporate-blue",
    icon: "🚀",
    popular: true
  },
  {
    name: "Corporate Member",
    price: "R250,000", 
    period: "per year",
    description: "For established corporations committed to youth development and empowerment",
    features: [
      "All Entrepreneur Member benefits",
      "Corporate partnership opportunities", 
      "Brand recognition at YCCI events",
      "Access to talent pipeline and recruitment",
      "Custom training and workshop hosting",
      "Annual corporate retreat invitations",
      "CSR and BEE collaboration opportunities",
      "Executive leadership council participation",
      "Premium corporate visibility package"
    ],
    color: "border-sa-gold",
    icon: "🏢",
    popular: false
  }
]

export default function MembershipForm() {
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
    <div>
      {/* Membership Tiers with Premium Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Choose Your <span className="text-gradient">Membership</span>
            </h2>
            <div className="sa-flag-accent max-w-md mx-auto mb-6"></div>
            <p className="corporate-body text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Select the membership tier that aligns with your business goals and aspirations. 
              Each tier is designed to provide maximum value for your investment in your future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative premium-card rounded-3xl p-8 ${
                  tier.popular ? 'ring-4 ring-corporate-blue/20 scale-105' : ''
                } ${selectedTier === tier.name ? 'bg-gradient-to-br from-blue-50 to-indigo-50 ring-2 ring-corporate-blue' : ''} 
                cursor-pointer transition-all duration-300 hover:scale-105 shine group`}
                onClick={() => setSelectedTier(tier.name)}
                style={{animationDelay: `${index * 200}ms`}}
              >
                {tier.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-corporate-blue to-sa-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      <span className="mr-2">⭐</span>Most Popular
                    </div>
                  </div>
                )}
                
                {/* Flag Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 right-2 w-12 h-8 sa-flag-full rounded-sm shadow-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4 floating" style={{animationDelay: `${index * 500}ms`}}>
                    {tier.icon}
                  </div>
                  <h3 className="card-heading text-2xl font-bold mb-3">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="corporate-heading text-5xl font-bold text-corporate-blue">{tier.price}</span>
                    <span className="corporate-body text-gray-500 ml-2 text-lg">/{tier.period}</span>
                  </div>
                  <p className="card-body text-base leading-relaxed">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-sa-green mr-3 text-lg flex-shrink-0 mt-0.5">✓</span>
                      <span className="card-body text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="membershipTier"
                      value={tier.name}
                      checked={selectedTier === tier.name}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-5 h-5 text-corporate-blue mr-3"
                    />
                    <span className="card-subheading text-base font-semibold text-gray-900">
                      Select {tier.name}
                    </span>
                  </label>
                  
                  {selectedTier === tier.name && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-corporate-blue/10 to-sa-green/10 rounded-lg border border-corporate-blue/20">
                      <span className="text-corporate-blue font-semibold text-sm">✨ Selected - Complete application below</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Application Form */}
      {selectedTier && (
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative">
          {/* Background Flag Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute top-20 left-10 w-32 h-24 sa-flag-full rounded-lg"></div>
            <div className="absolute bottom-20 right-10 w-28 h-20 sa-flag-full rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-30 sa-flag-full rounded-lg"></div>
          </div>
          
          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Membership Application
              </h2>
              <div className="sa-flag-accent max-w-xs mx-auto mb-6"></div>
              <div className="inline-flex items-center bg-gradient-to-r from-corporate-blue to-sa-green text-white px-8 py-3 rounded-full shadow-lg">
                <span className="text-2xl mr-3">🎯</span>
                <span className="corporate-subheading text-lg">Selected: <strong>{selectedTier}</strong></span>
              </div>
            </div>

            <div className="premium-card rounded-3xl shadow-2xl p-10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="bg-gradient-to-r from-corporate-blue/5 to-sa-green/5 rounded-2xl p-6 border border-corporate-blue/10">
                  <h3 className="card-subheading text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">👤</span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-gradient-to-r from-sa-green/5 to-sa-gold/5 rounded-2xl p-6 border border-sa-green/10">
                  <h3 className="corporate-subheading text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information Section */}
                <div className="bg-gradient-to-r from-sa-gold/5 to-sa-red/5 rounded-2xl p-6 border border-sa-gold/10">
                  <h3 className="corporate-subheading text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">💼</span>
                    Professional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="age" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Age Range *
                      </label>
                      <select
                        id="age"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                      >
                        <option value="">Select your age range</option>
                        <option value="18-24">18-24 years</option>
                        <option value="25-29">25-29 years</option>
                        <option value="30-35">30-35 years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="occupation" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Current Occupation *
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        required
                        value={formData.occupation}
                        onChange={handleInputChange}
                        placeholder="e.g., Entrepreneur, Student, Manager"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Company/Institution
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your current employer or university"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                      >
                        <option value="">Select your industry</option>
                        <option value="Technology">Technology & Innovation</option>
                        <option value="Finance">Finance & Banking</option>
                        <option value="Healthcare">Healthcare & Wellness</option>
                        <option value="Education">Education & Training</option>
                        <option value="Retail">Retail & E-commerce</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Agriculture">Agriculture & Food</option>
                        <option value="Tourism">Tourism & Hospitality</option>
                        <option value="Creative">Creative Arts & Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Goals and Aspirations Section */}
                <div className="bg-gradient-to-r from-sa-red/5 to-corporate-blue/5 rounded-2xl p-6 border border-sa-red/10">
                  <h3 className="corporate-subheading text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Goals & Aspirations
                  </h3>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                      Business/Professional Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                    >
                      <option value="">Select your experience level</option>
                      <option value="0-1 years">0-1 years (Just starting)</option>
                      <option value="2-3 years">2-3 years (Early career)</option>
                      <option value="4-5 years">4-5 years (Experienced)</option>
                      <option value="6+ years">6+ years (Senior level)</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="interests" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                      Business Areas of Interest *
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      required
                      rows={4}
                      value={formData.interests}
                      onChange={handleInputChange}
                      placeholder="What business areas, skills, or topics are you most passionate about? (e.g., digital marketing, fintech, sustainable business, leadership development)"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body resize-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="goals" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                      YCCI Membership Goals *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows={4}
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What specific goals do you hope to achieve through your YCCI membership? How can we help you succeed?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="referral" className="block corporate-body text-sm font-semibold text-gray-700 mb-2">
                      How did you discover YCCI Africa?
                    </label>
                    <select
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200 corporate-body"
                    >
                      <option value="">Select how you found us</option>
                      <option value="Social Media">Social Media (LinkedIn, Facebook, Twitter)</option>
                      <option value="Friend/Colleague">Friend or Colleague Recommendation</option>
                      <option value="University">University or Educational Institution</option>
                      <option value="Business Event">Business Event or Conference</option>
                      <option value="Google Search">Google Search</option>
                      <option value="News/Media">News Article or Media Coverage</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="text-center pt-8">
                  <div className="bg-gradient-to-r from-corporate-blue to-sa-green rounded-2xl p-8 text-white mb-6">
                    <h4 className="corporate-subheading text-xl font-bold mb-2">Ready to Begin Your Journey?</h4>
                    <p className="corporate-body">Join South Africa's most dynamic youth business community</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-corporate inline-flex items-center px-12 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="mr-3">🚀</span>
                    Submit Application
                    <span className="ml-3">🇿🇦</span>
                  </button>
                  
                  <p className="corporate-body text-sm text-gray-600 mt-4">
                    We'll review your application within 3-5 business days and contact you with next steps.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
