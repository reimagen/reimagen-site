import { useEffect } from "react";

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function useDocumentHead({ title, description, ogTitle, ogDescription, ogImage }) {
  useEffect(() => {
    // Update the document title
    if (title) {
      document.title = title;
    }

    // Basic description
    upsertMeta("description", description);

    // Open Graph
    upsertMeta("og:title", ogTitle || title);
    upsertMeta("og:description", ogDescription || description);
    upsertMeta("og:image", ogImage);
    upsertMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    upsertMeta("twitter:title", ogTitle || title);
    upsertMeta("twitter:description", ogDescription || description);
    upsertMeta("twitter:image", ogImage);
  }, [title, description, ogTitle, ogDescription, ogImage]);
}

export default useDocumentHead;
