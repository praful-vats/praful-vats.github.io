import React from 'react';
import pdf from './images/Praful_Vats.pdf';
function Resume() {
    return (
      <div>
        <embed
          src={pdf} // Use the imported PDF file as the source
          type="application/pdf"
          width="100%"
          height="10000px"
        />
      </div>
    );
}

export default Resume;
  