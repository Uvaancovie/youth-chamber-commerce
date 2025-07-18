import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/photorealistic-portrait-african-woman.jpg"
              alt="About YCCISA - Empowering Young Entrepreneurs"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-heading font-bold text-primary">500+</div>
              <div className="text-sm font-body text-primary/80">Members</div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              About YCCISA
            </h2>
            <div className="space-y-4 font-body text-gray-700 leading-relaxed">
              <p className="text-lg">
                The Youth Chamber of Commerce & Industry South Africa (YCCISA) is the premier 
                organization dedicated to empowering young entrepreneurs and business leaders 
                across South Africa.
              </p>
              <p>
                Our mission is to create a vibrant ecosystem where young professionals can thrive, 
                innovate, and contribute meaningfully to South Africa's economic transformation. 
                We provide comprehensive support through mentorship, training, networking, and 
                advocacy programs.
              </p>
              <p>
                We address critical challenges like high youth unemployment, limited access to 
                business networks, and the gap between education and real-world business skills. 
                Through strategic partnerships and innovative programs, we're building the next 
                generation of South African business leaders.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-heading font-bold text-maroon">95%</div>
                <div className="text-sm font-body text-gray-600">Member Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-gold/10 rounded-lg">
                <div className="text-2xl font-heading font-bold text-maroon">50+</div>
                <div className="text-sm font-body text-gray-600">Programs Annually</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <a
                href="/membership"
                className="inline-flex items-center bg-maroon text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-maroon/90 transition-colors"
              >
                Join Our Community
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
