import React from "react";

const ContactInfo = ({ kontak }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-710 mb-3">Kontak</h4>
      <p><span className="font-semibold">Email:</span> {kontak.email}</p>
      <p><span className="font-semibold">Telepon:</span> {kontak.telepon}</p>
      <p><span className="font-semibold">Alamat Rumah:</span> {kontak.alamat_rumah}</p>
    </div>
  );
};

export default ContactInfo;