import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const exportResumeToPdf = async (
  element: HTMLElement,
  fileName: string
) => {
  const body = document.body;
  body.classList.add('pdf-export-mode');

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    const totalPages = Math.ceil(imgHeight / pdfHeight);
    for (let i = 0; i < totalPages; i++) {
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, -(i * pdfHeight), pdfWidth, imgHeight);
    }
    pdf.save(fileName);
  } finally {
    body.classList.remove('pdf-export-mode');
  }
};
