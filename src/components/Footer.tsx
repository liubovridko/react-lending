const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-900/60 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold text-cyan-200">NovaLend</h3>
          <p className="mt-2">Embedded finance infrastructure for marketplaces and B2B platforms.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-200">Headquarters</h4>
          <p className="mt-2">22 Canary Wharf, London</p>
          <p>Mon–Fri · 08:00–18:00 GMT</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-200">Contact</h4>
          <p className="mt-2">team@novalend.app</p>
          <p>+44 (20) 0000 2000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
