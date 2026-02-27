const Service = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">How NovaLend helps your team</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ['Origination APIs', 'Pre-built APIs for offers, pricing, and eligibility experiences embedded in your checkout flow.'],
          ['Portfolio analytics', 'Live monitoring with delinquency alerts, repayment forecasts, and cohort-level portfolio insights.'],
          ['Operations toolkit', 'Agent dashboards for manual review, case escalation, and borrower support workflows.']
        ].map(([title, text]) => (
          <article key={title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-cyan-200">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;
