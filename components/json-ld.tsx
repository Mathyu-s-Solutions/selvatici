/**
 * One JSON-LD script holding a schema.org graph. `<` is escaped so a future
 * copy edit containing a tag cannot break out of the script element.
 */
export function JsonLd({ graph }: { graph: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
