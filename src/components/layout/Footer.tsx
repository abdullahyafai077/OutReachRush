import Link from "next/link";
import { footerForm, navLinks, siteConfig } from "@/data/seo-content";
import { FooterAuditForm } from "@/components/layout/FooterAuditForm";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-or-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">{footerForm.title}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-or-muted">
            {footerForm.description}
          </p>
          <p className="mt-6 text-sm text-or-muted">
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-or-orange hover:brightness-110"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <FooterAuditForm />
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-or-muted sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-4">
              {navLinks.main.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
