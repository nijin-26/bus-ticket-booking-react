import { usePDF } from 'react-to-pdf';
import { Ticket } from './Ticket';

export const TicketPage = () => {
    // const handleDownloadPDF = () => {
    //     const input = document.getElementById('pdf-content');

    //     if (input) {
    //         const { offsetWidth, offsetHeight } = input;

    //        void html2canvas(input, {
    //             useCORS: true, // Add this option for cross-origin SVG images
    //             scale: 2, // Adjust scale as needed
    //             scrollX: 0, // Set to 0 to capture entire horizontal content
    //         }).then((canvas) => {
    //             const imgData = canvas.toDataURL('image/png');

    //             const pdf = new jsPDF('p', 'mm', [offsetWidth/2, offsetHeight/2]);
    //             pdf.addImage(imgData, 'PNG', 0, 0, offsetWidth/2, offsetHeight/2);
    //             pdf.save('downloaded-file.pdf');
    //         });
    //     }
    // };

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <div>
            <button onClick={() => { toPDF(); }}>Download PDF</button>
            <div ref={targetRef}>
                <Ticket />
            </div>
        </div>
    );
};
