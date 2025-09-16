import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { CoreCapabilities } from '@/components/sections/CoreCapabilities'
import { Outcomes } from '@/components/sections/Outcomes'
import { Showcase } from '@/components/sections/Showcase'
import { Features } from '@/components/sections/Features'
import { Security } from '@/components/sections/Security'
import { Comparison } from '@/components/sections/Comparison'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="max-w-[var(--max-width)] mx-auto px-[18px] py-10 md:py-[40px] pb-20">
        <Hero />
        <CoreCapabilities />
        <Outcomes />
        <Showcase />
        <Features />
        <Security />
        <Comparison />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
