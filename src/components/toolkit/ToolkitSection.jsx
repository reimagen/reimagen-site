export default function ToolkitSection({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`space-y-6 scroll-mt-24 rounded-3xl px-6 py-4 md:px-10 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
