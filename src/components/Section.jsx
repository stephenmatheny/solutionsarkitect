export default function Section({ kicker, title, children }) {
  return (
    <section className="py-10">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {kicker}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
