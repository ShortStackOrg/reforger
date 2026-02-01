import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: NextRequest) {
  const { html, styles, bodyClasses, baseUrl } = await req.json();

  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <base href="${baseUrl}">
  <meta charset="utf-8">
  <style>${styles}</style>
  <style>
    *, *::before, *::after { box-shadow: none !important; }
    #resume-canvas { border-radius: 0; }
    section, [data-section-item] { break-inside: avoid; }
  </style>
</head>
<body class="${bodyClasses}">
  ${html}
</body>
</html>`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(fullHtml, {
      waitUntil: 'networkidle0',
      timeout: 10_000,
    });
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
