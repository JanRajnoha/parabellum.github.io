import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Events from '../components/sections/Events'
import CateringPreview from '../components/sections/CateringPreview'
import OpeningHours from '../components/sections/OpeningHours'

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Para Bellum Lounge — Hookah Bar Brno | Vodní dýmky &amp; Koktejly</title>
        <meta name="description" content="Para Bellum Lounge — prémiový hookah bar v centru Brna. Vodní dýmky, koktejly, soukromé akce a catering. Sukova 49/4, Brno. Rezervace online." />
        <meta property="og:title" content="Para Bellum Lounge — Hookah Bar Brno" />
        <meta property="og:description" content="Prémiový hookah bar v centru Brna. Vodní dýmky, koktejly, soukromé akce a catering po celé ČR." />
        <meta property="og:url" content="https://parabellumlounge.cz/" />
        <link rel="canonical" href="https://parabellumlounge.cz/" />
      </Helmet>
      <Hero />
      <About />
      <Events />
      <CateringPreview />
      <OpeningHours />
    </main>
  )
}
