import { MapPin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-end gap-0.5 h-5">
                <div className="w-1 bg-purple-500 rounded-full eq-bar-1" />
                <div className="w-1 bg-cyan-400 rounded-full eq-bar-2" />
                <div className="w-1 bg-pink-500 rounded-full eq-bar-3" />
                <div className="w-1 bg-purple-500 rounded-full eq-bar-4" />
                <div className="w-1 bg-cyan-400 rounded-full eq-bar-5" />
              </div>
              <span className="text-xl font-black tracking-tighter gradient-text">
                DJ KIMCHI
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The baddest DJ from East &amp; Central Africa. Afrobeats, Amapiano,
              Gengetone, Dancehall, and Club Bangers straight out of Nairobi.
            </p>
            <div className="flex items-center gap-1 mt-4 text-sm text-white/40 max-w-full">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-sm max-w-full overflow-hidden">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/50 hover:text-kenya-green transition-colors duration-300 break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 ${s.color} hover:border-purple-500/30 transition-all duration-300`}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Follow DJ Kimchi on all platforms for the latest mixes, events, and updates.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DJ Kimchi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Nairobi, Kenya | Afrobeats | Amapiano | Gengetone | Dancehall
          </p>
        </div>
      </div>
    </footer>
  );
}
