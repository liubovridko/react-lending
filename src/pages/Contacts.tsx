const Contacts = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Let’s build a lending product together</h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Share your target market and growth goals. Our team will design an implementation plan with milestones,
        pricing guidance, and expected time-to-launch.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-cyan-200">Business inquiries</h2>
          <p className="mt-2 text-slate-300">team@novalend.app</p>
          <p className="text-slate-300">+44 (20) 0000 2000</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-cyan-200">Office</h2>
          <p className="mt-2 text-slate-300">22 Canary Wharf, London</p>
          <p className="text-slate-300">Mon–Fri, 08:00–18:00 GMT</p>
        </article>
      </div>
    </section>
  );
};

export default Contacts;
