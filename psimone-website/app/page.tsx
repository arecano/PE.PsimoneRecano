import Image from "next/image";
import { Mail, Phone } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a1628]">

      <div className="flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Logo / Name */}
        <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-slate-700 ring-4 ring-slate-700/50">
          <Image
            src="/foto.jpg"
            alt="Dott. Simone Recano"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
          Dott. Simone Recano
        </h1>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-5 py-2 rounded-full mb-6 shadow-md border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Sito in arrivo
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
          Sto lavorando al mio nuovo sito web.<br />
          Nel frattempo, puoi contattarmi qui sotto.
        </p>

        {/* Contact Buttons — same style as page.main */}
        <div className="flex items-center justify-center gap-8">
          {/* Email */}
          <a
            href="mailto:psimonrecano@outlook.com"
            aria-label="Invia email"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 text-slate-300 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all group-hover:scale-110">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-medium group-hover:text-blue-400 transition-colors">Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/393501724056"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatta su WhatsApp"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 text-slate-300 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-400 transition-all group-hover:scale-110">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-medium group-hover:text-green-400 transition-colors">WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+393501724056"
            aria-label="Chiama"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 text-slate-300 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-all group-hover:scale-110">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-medium group-hover:text-white transition-colors">Telefono</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pb-6 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Dott. Simone Recano &mdash; Tutti i diritti riservati
      </footer>
    </main>
  );
}
