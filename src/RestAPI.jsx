import React, { useEffect, useState } from "react";
import axios from "axios";

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mengambil data dari endpoint /users
    axios.get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); 

  return (
    <div className="ps-40 px-40 pt-10 ">
      <h2 className="text-2xl font-bold mb-4">Biodata Gracelia</h2>
      
      {users.map((user) => (
        // Gunakan flex container untuk menata foto (kiri) dan detail (kanan)
        <div key={user.id} className="bg-blue-300 p-10 border rounded-xl shadow-lg flex space-x-6"> 
          
          {/* BAGIAN KIRI: FOTO */}
          {user.picture && (
            <div className="flex-shrink-0 pt-2"> {/* flex-shrink-0 memastikan foto tidak menyusut */}
              <img 
                src={`./${user.picture}`} // Pastikan pic1.jpg ada di folder public/
                alt="Profile Picture" 
                // Styling gambar: ukuran 40x40 Tailwind (sekitar 160px), objek cover, bulat
                className="w-50 h-50 object-cover rounded-full border-4 border-white shadow-lg" 
              />
            </div>
          )}
          
          {/* BAGIAN KANAN: DETAIL BIODATA */}
          <div className="flex-grow"> {/* flex-grow agar detail mengisi sisa ruang */}
            
            <h3 className="text-xl font-bold mb-2">{user.nama}</h3>
            <hr className="mb-3 border-red-400" />
            
            <p><span className="font-semibold">NIM:</span> {user.nim}</p>
            <p><span className="font-semibold">TTL:</span> {user.ttl}</p>
            <p><span className="font-semibold">Umur:</span> {user.umur}</p>
            <p><span className="font-semibold">Alamat:</span> {user.alamat}</p>
            <p><span className="font-semibold">Fakultas:</span> {user.fakultas}</p>
            <p><span className="font-semibold">Jurusan:</span> {user.jurusan}</p>
            <p><span className="font-semibold">Agama:</span> {user.agama}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default RestAPI;