export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
        integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
        crossOrigin="anonymous"
      />
      <article className="prose mx-auto pb-12 px-8">{children}</article>
    </>
  );
}
