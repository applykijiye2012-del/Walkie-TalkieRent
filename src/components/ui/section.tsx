import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
