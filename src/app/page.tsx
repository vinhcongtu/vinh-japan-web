import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import JobCategories from "@/components/JobCategories";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Header />
      <Hero />
      <About />
      <JobCategories />
      <LeadForm />
      <Footer />
    </main>
  );
}
