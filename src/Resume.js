import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ton Nguyen-Resume.pdf';
    link.download = 'Ton Nguyen-Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">

      {/* Loading Spinner */}
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading resume...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="error-container">
          <div className="error-message">
            <h2>Unable to load PDF</h2>
            <p>There was an issue loading the resume PDF file.</p>
            <button onClick={handleDownload} className="resume-btn download">
              Download PDF Instead
            </button>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      <div className="pdf-container">
        <iframe
          src="/TonNguyen_Resume.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
          width="100%"
          height="100%"
          title="Ton Nguyen Resume"
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: error ? 'none' : 'block' }}
        />
      </div>

      {/* Alternative: Object tag as fallback */}
      {error && (
        <div className="pdf-fallback">
          <object
            data="/TonNguyen_Resume.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>
              Your browser doesn't support PDF viewing. 
              <a href="/TonNguyen_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Click here to download the PDF
              </a>
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default Resume;
