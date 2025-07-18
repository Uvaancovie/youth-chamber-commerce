export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-[#003366] border-t-transparent mb-4"></div>
        <div className="space-y-2">
          <h2 className="corporate-heading text-xl text-[#003366]">Loading YCCI Africa</h2>
          <p className="corporate-body text-gray-600">Please wait while we prepare your content...</p>
        </div>
        
        {/* South African flag inspired loading animation */}
        <div className="mt-8 flex justify-center space-x-1">
          <div className="w-2 h-8 bg-[#003366] animate-pulse delay-0"></div>
          <div className="w-2 h-8 bg-[#007749] animate-pulse delay-100"></div>
          <div className="w-2 h-8 bg-[#FFB612] animate-pulse delay-200"></div>
          <div className="w-2 h-8 bg-[#003366] animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  )
}
