import WindowControls from '@components/WindowControls';
import WindowWrapper from '@hoc/WindowWrapper';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const Resume = () => {
    const [totalPages, setTotalPages] = useState(0);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setTotalPages(numPages);
    };

    return (
        <>
            <div id="window-header" className=''>
                <a href="files/resume.pdf" download className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>
                <h2>Resume.pdf</h2>

                <WindowControls target="resume" />
            </div>
             <div style={{ overflowY: 'auto', height: '800px' }}>

            <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess} className={"p-1 rounded-sm"}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <Page key={i + 1} pageNumber={i + 1} renderTextLayer renderAnnotationLayer className={"pt-5"}/>
                ))}
            </Document>
             </div>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;
