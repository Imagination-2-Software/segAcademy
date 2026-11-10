import { brand, footerLinks } from "@/data/seg";
import { Logo } from "@/components/Navbar";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* purple gradient environment */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_90%_at_50%_-10%,var(--ink-soft),var(--ink)_55%,var(--ink)_100%)]"
      />
      {/* sparse technical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] blur-[0.4px] [background-image:linear-gradient(to_right,rgb(226_214_255/0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_214_255/0.9)_1px,transparent_1px)] [background-size:clamp(120px,11vw,180px)_clamp(100px,12vh,160px)] [mask-image:radial-gradient(70%_55%_at_50%_35%,transparent_30%,black_90%)]"
      />

      <div className="relative z-10">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo dark={false} />

            <p className="mt-4 text-sm text-ink-foreground/70">{brand.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ink-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground">
              Contact & Campus
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              <li>
                <a href={brand.phoneHref} className="hover:text-gold">
                  {brand.phone}
                </a>{" "}
                /{" "}
                <a href="tel:+919616051355" className="hover:text-gold">
                  096160 51355
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-gold">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  WhatsApp: +91 94549 45992
                </a>
              </li>
              <li className="text-xs leading-relaxed text-ink-foreground/60">
                3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Varanasi, UP 221002
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground">
              Accreditations & Legal
            </h2>
            <ul className="mt-4 space-y-2 text-xs text-ink-foreground/70">
              <li>{brand.legalName}</li>
              <li>CIN: {brand.cin}</li>
              <li>DPIIT Start-up India &amp; MSME Registered</li>
              <li>National Career Service Partner</li>
              <li className="pt-2">
                <a href="/privacy-policy" className="hover:text-ink-foreground underline">
                  Privacy Policy
                </a>{" "}
                &bull;{" "}
                <a href="/terms" className="hover:text-ink-foreground underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-5 py-6 text-xs text-ink-foreground/60 lg:px-8 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
            </div>
            <div>
              SEBI Disclaimer: Educational &amp; skill development institute only — no tip service or assured returns.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
