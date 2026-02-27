const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Merchant owner checking lending insights'
  },
  {
    src: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80',
    alt: 'Financial dashboard with growth metrics'
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    alt: 'Office building representing fintech operations'
  }
];

const Gallery = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Visual product showcase</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        A quick look at the teams, workflows, and analytics surfaces NovaLend supports across acquisition,
        underwriting, and repayment lifecycle stages.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {gallery.map((item) => (
          <img key={item.src} src={item.src} alt={item.alt} loading="lazy" className="h-64 w-full rounded-xl object-cover" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
