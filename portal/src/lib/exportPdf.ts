function extractStyles(): string {
  const parts: string[] = [];
  for (const sheet of Array.from(document.styleSheets)) {
    try {
      for (const rule of Array.from(sheet.cssRules)) {
        parts.push(rule.cssText);
      }
    } catch {
      // cross-origin sheet — skip
    }
  }
  return parts.join('\n');
}

export const exportResumeToPdf = async (
  element: HTMLElement,
  fileName: string
) => {
  const html = element.outerHTML;
  const styles = extractStyles();
  const bodyClasses = document.body.className;
  const baseUrl = window.location.origin;

  const res = await fetch('/api/export-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ html, styles, bodyClasses, baseUrl }),
  });

  if (!res.ok) {
    throw new Error(`PDF export failed: ${res.status}`);
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
