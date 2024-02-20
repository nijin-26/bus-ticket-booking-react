import { usePDF } from 'react-to-pdf';
import { Ticket } from './Ticket';

export const TicketPage = () => {

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
