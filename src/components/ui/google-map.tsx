import React from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

export default function GoogleMap({ address, className = "" }: GoogleMapProps) {
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`w-full h-80 rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Gatha Confecções"
      />
    </div>
  );
}