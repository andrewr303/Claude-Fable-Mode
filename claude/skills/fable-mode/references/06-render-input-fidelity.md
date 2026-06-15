# Render and Input Fidelity

For visual or human-consumed artifacts, completion means the final output was inspected in the form the user will consume.

Render-check examples:

- HTML/UI: screenshot at relevant breakpoints, long content, loading/empty/error states.
- PDF/DOCX/PPTX/XLSX: generated file opened/rendered, layout checked.
- SVG/chart/image: visual opened, labels and values checked.
- Repo zip: extracted and tree/metadata checked.

Critical values copied from screenshots, PDFs, emails, or fuzzy text must be re-read from the source when possible. Mark uncertain values instead of silently normalizing them.
