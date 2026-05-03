import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white transition-all aspect-square flex-shrink-0">
              <Image 
                src="/images/logo-avatar.webp" 
                alt="Vinh Japan Logo" 
                fill 
                className="object-cover w-full h-full pointer-events-none"
              />
            </div>
            <span className="text-white font-bold text-lg md:text-xl tracking-wide">Vinh Japan</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/90 hover:text-white font-medium transition-colors">
              Home
            </Link>
            <a 
              href="#lead-form" 
              className="bg-white text-blue-700 px-5 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-50 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Job kỹ sư Nhật free
            </a>
          </nav>
          <button className="md:hidden text-white p-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
