import React from "react";

const Hobbies = ({ hobi }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-710 mb-3">Hobi</h4>
      <ul className="list-disc ml-6 space-y-2 text-gray-800 text-lg">
        {hobi.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  );
};

export default Hobbies;