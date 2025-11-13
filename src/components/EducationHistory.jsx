import React from "react";

const EducationHistory = ({ pendidikan }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-710 mb-3">Riwayat Pendidikan</h4>
      <ul className="list-disc ml-6 space-y-2 text-gray-800 text-lg">
        {pendidikan.map((p, i) => (
          <li key={i}>
            {p.jenjang} — {p.sekolah || p.kampus}
            {p.tahun_lulus
              ? ` (Lulus ${p.tahun_lulus})`
              : ` (Angkatan ${p.angkatan})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationHistory;