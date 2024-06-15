import Image from 'next/image';
import React from 'react';

const AcmeLogo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src="/Robot-Advisors-Logo-White-v1.png"
        alt="Robot Advisory Group Logo"
        width={320} // Adjust width if necessary
        height={120} // Adjust height if necessary
        objectFit="contain" // Ensures the image fits within the container without distortion
      />
    </div>
  );
};

export default AcmeLogo;
