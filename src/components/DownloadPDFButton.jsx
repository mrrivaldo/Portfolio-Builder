import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const input = document.getElementById('live-preview');
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('portfolio.pdf');
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Download PDF
    </button>
  );
};

export default DownloadPDFButton;
