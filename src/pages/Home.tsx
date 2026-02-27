import { memo } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../content';

const Home = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section className="hero-glow mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-16 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
            {t.hero.badge}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">{t.hero.title}</h1>
          <p className="mt-4 max-w-2xl text-slate-300">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300">
              {t.hero.primaryCta}
            </button>
            <button className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300">
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>
        <div className="float-card overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-900/40">
          <img
            loading="eager"
            className="h-80 w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Team reviewing lending analytics dashboards"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.map(([label, value]) => (
            <article key={label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-3xl font-semibold text-cyan-200">{value}</p>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">Platform capabilities</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.features.map((feature) => (
            <article key={feature.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1">
              <p className="text-2xl">{feature.icon}</p>
              <h3 className="mt-3 text-lg font-semibold text-cyan-200">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">Customer stories</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {t.caseStudies.map((study) => (
            <article key={study.brand} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300">{study.brand}</p>
              <h3 className="mt-2 text-xl font-semibold">{study.result}</h3>
              <p className="mt-2 text-sm text-slate-300">{study.details}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
