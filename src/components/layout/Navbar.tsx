"use client";

import Link from "next/link";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/data/seo-content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesMenuId = useId();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const node = servicesRef.current;
      if (node && !node.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border border-white/10 bg-or-canvas/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-or-orange/30 bg-or-orange/15 text-or-orange">
            <Zap className="h-4 w-4" aria-hidden />
          </span>
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
            onFocusCapture={openServices}
            onBlurCapture={(e) => {
              if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                scheduleCloseServices();
              }
            }}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition",
                servicesOpen
                  ? "bg-or-orange/10 text-white"
                  : "text-or-muted hover:bg-white/5 hover:text-white",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              aria-controls={servicesMenuId}
              onClick={() =>
                setServicesOpen((v) => {
                  if (v && closeTimerRef.current) {
                    clearTimeout(closeTimerRef.current);
                    closeTimerRef.current = null;
                  }
                  return !v;
                })
              }
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            <div
              className={cn(
                "absolute left-0 top-full z-50 w-72 pt-2 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              )}
              aria-hidden={!servicesOpen}
            >
              <div
                id={servicesMenuId}
                role="menu"
                className="overflow-hidden rounded-xl border border-white/10 bg-or-surface/95 shadow-xl shadow-black/40 backdrop-blur-xl"
              >
                <p className="border-b border-white/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-or-orange">
                  Our services
                </p>
                <ul className="p-1.5">
                  {navLinks.services.map((item) => (
                    <li key={item.slug}>
                      <Link
                        role="menuitem"
                        href={item.href}
                        tabIndex={servicesOpen ? 0 : -1}
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-or-body transition hover:bg-or-orange/10 hover:text-white"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span
                          className="text-or-orange opacity-0 transition group-hover:opacity-100"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {navLinks.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-or-muted transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Get Free Link Audit
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-or-muted hover:bg-white/5 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-or-surface/95 p-4 backdrop-blur-xl lg:hidden">
          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-or-muted">
            Services
          </p>
          <ul className="mt-2 space-y-1">
            {navLinks.services.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-or-body active:bg-or-orange/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
            {navLinks.main.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-or-body active:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button href="#contact" className="w-full" variant="primary">
              Get Free Link Audit
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}