import React from "react";

const PersonalInfo = ({ user }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-710 mb-3">Informasi Pribadi</h4>
      <div className="grid grid-cols-2 gap-4 text-gray-800 text-lg">
        <p><span className="font-semibold">NIM:</span> {user.nim}</p>
        <p><span className="font-semibold">TTL:</span> {user.ttl}</p>
        <p><span className="font-semibold">Umur:</span> {user.umur} tahun</p>
        <p><span className="font-semibold">Agama:</span> {user.agama}</p>
        <p><span className="font-semibold">Jenis Kelamin:</span> {user.jenis_kelamin}</p>
        <p><span className="font-semibold">Tinggi Badan:</span> {user.tinggi_badan}</p>
        <p><span className="font-semibold">Golongan Darah:</span> {user.golongan_darah}</p>
        <p><span className="font-semibold">Status:</span> {user.status}</p>
        <p><span className="font-semibold">Kewarganegaraan:</span> {user.kewarganegaraan}</p>
      </div>
      <p className="mt-3"><span className="font-semibold text-gray-710">Moto Hidup:</span></p>
      <p className="p-3 bg-gray-100 rounded-md italic text-gray-700 border">{user.moto_hidup}</p>
    </div>
  );
};

export default PersonalInfo;