import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import FeaturedNews from './components/FeaturedNews'
import CoreAreasPreview from './components/CoreAreasPreview'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="sa-flag-accent"></div>
      <UpcomingEvents />
      <CoreAreasPreview />
      <FeaturedNews />
      <CallToAction />
    </div>
  )
}
