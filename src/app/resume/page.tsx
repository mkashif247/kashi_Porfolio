"use client";

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css'; // Import custom styles

// Set the PDF worker source to the local copy
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`; // Updated path

const ResumePage: React.FC = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.2);
    const pdfUrl = "/FAANG_kashif.pdf"; // Path to your PDF in public folder

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const handleZoomIn = () => {
        setScale((prevScale) => Math.min(prevScale + 0.2, 2.5));
    };

    const handleZoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.2, 0.8));
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Muhammad_Kashif_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        if (numPages) {
            setPageNumber((prev) => Math.min(prev + 1, numPages));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen py-12 px-4 flex flex-col items-center"
        >
            {/* Glass-effect background */}
            <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />

            {/* Controls */}
            <div className="mb-6 z-10 flex flex-wrap justify-center gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomOut}
                    disabled={scale <= 0.8}
                >
                    <ZoomOut className="h-4 w-4 mr-1" /> Zoom Out
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomIn}
                    disabled={scale >= 2.5}
                >
                    <ZoomIn className="h-4 w-4 mr-1" /> Zoom In
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" /> Download
                </Button>
            </div>

            {/* PDF Container with glass effect */}
            <motion.div
                className="relative max-w-4xl w-full mx-auto z-10 rounded-lg overflow-hidden backdrop-blur-sm bg-background/60 border border-border shadow-lg p-4 sm:p-8"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex justify-center"
                    loading={
                        <div className="flex justify-center items-center h-[600px]">
                            <div className="animate-pulse text-foreground/80">Loading resume...</div>
                        </div>
                    }
                    error={
                        <div className="flex justify-center items-center h-[600px] text-destructive">
                            Error loading PDF. Please try again.
                        </div>
                    }
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg"
                    />
                </Document>

                {/* Page navigation controls */}
                {numPages && numPages > 1 && (
                    <div className="mt-4 flex justify-between items-center">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handlePrevPage}
                            disabled={pageNumber <= 1}
                        >
                            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                        </Button>

                        <div className="text-sm text-muted-foreground">
                            Page {pageNumber} of {numPages}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleNextPage}
                            disabled={numPages ? pageNumber >= numPages : true}
                        >
                            Next <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ResumePage; 