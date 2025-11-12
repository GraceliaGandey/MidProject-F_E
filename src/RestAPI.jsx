import React, { useEffect, useState } from "react";
import axios from "axios";

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-black text-center mb-5 text-gray-800 tracking-wide">
        Biodata Gracelia Gandey
      </h2>

      {users.map((user) => {
        const univ = user.pendidikan.find((p) => p.jenjang === "Sarjana (S-1)");

        return (
          <div
            key={user.nim}
            className="bg-white shadow-2xl rounded-xl p-10 border border-gray-200 space-y-10"
          >
            {/* FOTO + NAMA */}
            <div className="flex items-center gap-6">
              <img
                src={`/${user.picture}`}
                alt="Profile"
                className="w-44 h-44 object-cover rounded-full border-5 border-gray-500 shadow-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-720">{user.nama}</h3>
                <p className="text-lg text-gray-700 font-semibold">{univ?.program_studi}</p>
                <p className="text-md text-gray-500 italic">{univ?.fakultas}</p>
              </div>
            </div>

            <hr className="border-black-90" />

            {/* INFORMASI PRIBADI */}
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

            <hr className="border-black-90" />

            {/* KONTAK */}
            <div>
              <h4 className="text-2xl font-bold text-gray-710 mb-3">Kontak</h4>
              <p><span className="font-semibold">Email:</span> {user.kontak.email}</p>
              <p><span className="font-semibold">Telepon:</span> {user.kontak.telepon}</p>
              <p><span className="font-semibold">Alamat Rumah:</span> {user.kontak.alamat_rumah}</p>
            </div>

            <hr className="border-black-90" />

            {/* PENDIDIKAN */}
            <div>
              <h4 className="text-2xl font-bold text-gray-710 mb-3">Riwayat Pendidikan</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-800 text-lg">
                {user.pendidikan.map((p, i) => (
                  <li key={i}>
                    {p.jenjang} — {p.sekolah || p.kampus}
                    {p.tahun_lulus
                      ? ` (Lulus ${p.tahun_lulus})`
                      : ` (Angkatan ${p.angkatan})`}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-black-90" />

            {/* SOFT SKILLS */}
            <div>
              <h4 className="text-2xl font-bold text-gray-710 mb-3">Soft Skills</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-800 text-lg">
                {user.soft_skills.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>

            <hr className="border-black-90" />

            {/* HOBI */}
            <div>
              <h4 className="text-2xl font-bold text-gray-710 mb-3">Hobi</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-800 text-lg">
                {user.hobi.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default RestAPI;