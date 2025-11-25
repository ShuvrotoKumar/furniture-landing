// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularDemand from './components/PopularDemand';
import Products from './components/Products';
import About from './components/About';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';

// Dynamically import TrustedByPartners with SSR disabled
const TrustedByPartners = dynamic(() => import('./components/TrustedByPartners'), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="popular" className="scroll-mt-20">
          <PopularDemand />
        </section>
        <section id="products" className="scroll-mt-20">
          <Products />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="materials" className="scroll-mt-20">
          <Materials />
        </section>
        <section id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </section>
        <section id="partners" className="scroll-mt-20">
          <TrustedByPartners />
        </section>
      </main>
    </div>
  );
}