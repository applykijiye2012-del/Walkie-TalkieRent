import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Link href="#top" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-200/30 bg-cyan-200/10 text-sm font-black text-cyan-100">
              RX
            </span>
            <span className="text-lg font-extrabold text-white">RentalXgogo</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            AI and n8n automation systems for businesses that want faster lead response,
            cleaner operations, and less repetitive work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold text-white">Navigate</h2>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-100">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href="mailto:hello@rentalxgogo.com" className="hover:text-cyan-100">
                hello@rentalxgogo.com
              </a>
              <a href="#contact" className="hover:text-cyan-100">
                Book a free strategy call
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} RentalXgogo. All rights reserved.
      </div>
    </footer>
  );
}
