import React, { useEffect, useState } from "react";
import axios from "axios";
// Import komponen dari folder Components
import PersonalInfo from "./Components/PersonalInfo.jsx";
import ContactInfo from "./Components/ContactInfo.jsx";
import EducationHistory from "./Components/EducationHistory.jsx";
import Hobbies from "./Components/Hobbies.jsx";

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
              <PersonalInfo user={user} />

              <hr className="border-black-90" />

              {/* KONTAK */}
              <ContactInfo kontak={user.kontak} />

              <hr className="border-black-90" />

              {/* PENDIDIKAN */}
              <EducationHistory pendidikan={user.pendidikan} />

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
              <Hobbies hobi={user.hobi} />

            </div>
          );
        })}
      </div>
    );
};

export default RestAPI;