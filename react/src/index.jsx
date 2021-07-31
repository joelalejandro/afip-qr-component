import React from "react";
import PropTypes from "prop-types";

/**
 * Renders the QR code for AFIP.
 *
 * @property {String} code
 * @property {String?} className
 * @property {String?} title
 * @type {React.FunctionComponent<AfipQRProps>}
 */
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

AfipQR.propTypes = {
  code: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

AfipQR.defaultProps = {
  className: '',
  title: 'Consultá nuestro QR de información pública de AFIP',
};

export default AfipQR;
