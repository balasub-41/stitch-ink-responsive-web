
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Stitch N Ink Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12680.707147047374!2d-121.861095!3d37.367395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc7e9cf8ab27%3A0x4defb26d31e568ac!2sStitch%20%E2%80%98N%20Ink!5e0!3m2!1sen!2sus!4v1716332250695!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
