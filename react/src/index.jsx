import React from "react";

const AfipQR = ({ code, className = '', title = 'Consultá nuestro QR de información pública de AFIP' }) => {
  if (!code) {
    console.warn("@paperchest/afip-qr-react: Missing `code` attribute, component will not render.");
    return <></>;
  }

  return (
    <a
      href={`http://qr.afip.gob.ar/?qr=${code},,`}
      target="_F960AFIPInfo"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      <img
        alt={title}
        title={title}
        src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"
      />
    </a>
  );
};

export default AfipQR;
