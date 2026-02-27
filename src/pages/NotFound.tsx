import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-300">The requested page does not exist. Use the navigation to continue browsing.</p>
      <Link to="/" className="mt-5 inline-block rounded-md bg-cyan-400 px-4 py-2 text-slate-950">
        Return home
      </Link>
    </section>
  );
};

export default NotFound;
