import Link from "next/link";
import { Mail, Phone, Calendar, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-4xl">
          <Link href="/" className="text-lg font-semibold text-slate-900 tracking-tight">
            Dott. Recano
          </Link>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#chi-sono" className="hover:text-slate-900 transition-colors">Chi sono</a>
            <a href="#contatti" className="hover:text-slate-900 transition-colors">Contatti</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-4xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50">
           {/* Placeholder for Photo */}
           <div className="absolute inset-0 flex items-center justify-center text-slate-400">
             <span className="text-xs uppercase tracking-wide">Foto</span>
           </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
          Benessere psicologico <br className="hidden md:inline"/> e crescita personale
        </h1>
        <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
          Uno spazio sicuro dove affrontare le sfide della vita e riscoprire le proprie potenzialità.
        </p>
        <a 
          href="#contatti"
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Prenota un colloquio
        </a>
      </section>

      {/* Chi Sono Section */}
      <section id="chi-sono" className="w-full bg-slate-50 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Chi sono</h2>
          <div className="mx-auto text-slate-600 leading-relaxed space-y-4 text-lg">
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
             <p>
              La mia missione è accompagnare le persone attraverso un percorso di consapevolezza e cambiamento, offrendo strumenti concreti per migliorare la qualità della propria vita relazionale ed emotiva.
             </p>
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="w-full max-w-4xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">Contattami</h2>
        <p className="text-center text-slate-500 mb-12">Sono disponibile per appuntamenti in studio e online.</p>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          
          {/* Email Card */}
          <a 
            href="mailto:psimonrecano@outlook.com"
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-slate-200 group"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-500 text-sm mb-4">Scrivimi per informazioni</p>
            <span className="text-blue-600 font-medium text-sm group-hover:underline">psimonrecano@outlook.com</span>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/393501724056"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-green-100 group"
          >
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
            <p className="text-slate-500 text-sm mb-4">Chatta direttamente con me</p>
            <span className="text-green-600 font-medium text-sm group-hover:underline">Avvia chat</span>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+393501724056"
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-slate-200 group"
          >
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Telefono</h3>
            <p className="text-slate-500 text-sm mb-4">Chiamami per appuntamento</p>
            <span className="text-slate-900 font-medium text-sm group-hover:underline">+39 350 172 4056</span>
          </a>

          {/* Appointment Card (Coming Soon) */}
          <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner opacity-80 cursor-not-allowed grayscale-[0.5]">
            <div className="w-12 h-12 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-700 mb-1">Prenota Online</h3>
            <p className="text-slate-500 text-sm mb-4">Calendario appuntamenti</p>
            <span className="bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full items-center gap-1 inline-flex">
              Presto disponibile
            </span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p className="mb-2">&copy; {new Date().getFullYear()} Dott. Simone Recano. Tutti i diritti riservati.</p>
          <p className="text-xs text-slate-600">P.IVA: [Inserire P.IVA se disponibile]</p>
        </div>
      </footer>
    </main>
  );
}
