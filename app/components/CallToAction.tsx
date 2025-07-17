import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-16 bg-corporate-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Shape the Future of Business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Join a community of ambitious young entrepreneurs who are building the businesses of tomorrow. 
            Get access to exclusive networking events, mentorship programs, and business development resources.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership"
              className="rounded-md bg-sa-gold px-6 py-3 text-sm font-semibold text-corporate-blue shadow-sm hover:bg-yellow-400 transition-colors"
            >
              Apply for Membership
            </Link>
            <Link
              href="/events"
              className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-corporate-blue transition-colors"
            >
              Attend an Event
            </Link>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Success Stories from Our Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sa-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-corporate-blue font-bold">TS</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Thabo Sithole</div>
                  <div className="text-gray-300 text-sm">Tech Entrepreneur</div>
                </div>
              </div>
              <p className="text-gray-100 text-sm">
                "YCCI connected me with mentors who helped me scale my fintech startup. 
                We've now raised R5M in funding and serve over 10,000 customers."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sa-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-corporate-blue font-bold">NM</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Nomsa Mthembu</div>
                  <div className="text-gray-300 text-sm">Fashion Designer</div>
                </div>
              </div>
              <p className="text-gray-100 text-sm">
                "Through YCCI's network, I found international buyers for my sustainable 
                fashion brand. We're now exporting to 8 countries across Africa."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sa-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-corporate-blue font-bold">JK</span>
                </div>
                <div>
                  <div className="text-white font-semibold">James Kruger</div>
                  <div className="text-gray-300 text-sm">AgriTech Founder</div>
                </div>
              </div>
              <p className="text-gray-100 text-sm">
                "The skills development programs at YCCI taught me digital marketing 
                strategies that tripled my agricultural consultancy business revenue."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
