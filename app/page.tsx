import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import JobListings from '@/components/JobListings';
import IndustriesServed from '@/components/IndustriesServed';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <JobListings />
      <IndustriesServed />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
