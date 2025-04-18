import React, { useState } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-warmGray-200">
        <h3 className="font-serif text-xl font-medium text-warmGray-800">{title}</h3>
      </div>
      <div className="relative" style={{ height: '80vh' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-warmGray-50">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-t-2 border-warmOrange-500 border-solid rounded-full animate-spin"></div>
              <p className="mt-4 text-warmGray-600">Loading PDF...</p>
            </div>
          </div>
        )}
        <iframe 
          src={pdfUrl}
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          title={title}
        />
      </div>
    </div>
  );
};

export default PDFViewer;