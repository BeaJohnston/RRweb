import Image from 'next/image';
import React from 'react';

interface AcmeLogoProps {
  className?: string;
}

const AcmeLogo: React.FC<AcmeLogoProps> = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Image
        src="/Robot-Advisors-Logo-White-v1.png" // Ensure the path is correct
        alt="Robot Advisory Group Logo"
        layout="responsive" // Use responsive layout
        width={160} // Adjust width to desired size
        height={80} // Adjust height to desired size
        objectFit="contain" // Ensure it fits within the container
      />
    </div>
  );
};

export default AcmeLogo;
