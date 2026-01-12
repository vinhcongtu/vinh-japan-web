import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import JobFilter from '@/components/JobFilter';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <Hero />
        <About />
        <JobFilter />

        <section className="py-16 md:py-24 bg-blue-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RegistrationForm />
          </div>
          {/* Background decorative blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-7xl bg-white/50 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
