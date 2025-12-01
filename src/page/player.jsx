// // import React from "react";
// // import StatCard from "./statCard";
// // import PlayerRow from "./playerRow";
// // import bgImage from "../assets/dash.webp"; // your background image

// // const Player = () => {
// //   return (
// //     <div
// //       className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
// //       style={{ backgroundImage: `url(${bgImage})` }}
// //     >
// //       {/* Glass Effect Wrapper */}
// //       <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

// //         {/* Page Title */}
// //         <h2 className="text-4xl font-bold mb-10 tracking-wide text-center drop-shadow-lg">
// //           Players Management
// //         </h2>

// //         {/* Player Stats Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
// //           <StatCard title="Total Players" value="120" icon="👥" />
// //           <StatCard title="Active Players" value="42" icon="⚡" />
// //           <StatCard title="Top Rankers" value="18" icon="🏆" />
// //         </div>

// //         {/* Search Bar */}
// //         <div className="mb-6 flex justify-end">
// //           <input
// //             type="text"
// //             placeholder="Search Player..."
// //             className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-700 w-64"
// //           />
// //         </div>

// //         {/* Players Table */}
// //         <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl bg-gray-800/90">
// //           <table className="w-full text-left">
// //             <thead className="bg-gray-700">
// //               <tr>
// //                 <th className="p-4">Name</th>
// //                 <th className="p-4">Game</th>
// //                 <th className="p-4">Rank</th>
// //                 <th className="p-4">Status</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               <PlayerRow name="Sanjeet" game="Valorant" rank="Gold" status="Online" />
// //               <PlayerRow name="Aman" game="BGMI" rank="Ace" status="Offline" />
// //               <PlayerRow name="Rohit" game="FIFA 22" rank="Level 28" status="Online" />
// //               <PlayerRow name="Karan" game="CS:GO" rank="Platinum" status="Busy" />
// //             </tbody>
// //           </table>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Player;

// import React, { useState } from "react";
// import StatCard from "./statCard";
// import bgImage from "../assets/dash.webp"; // your background image

// const departments = [
//   { id: 1, name: "Human Resources" },
//   { id: 2, name: "Finance" },
//   { id: 3, name: "Marketing" },
//   { id: 4, name: "IT Department" },
//   { id: 5, name: "Logistics" },
// ];

// const Player = () => {
//   const [selectedDepartments, setSelectedDepartments] = useState([]);

//   const toggleDepartment = (id) => {
//     setSelectedDepartments((prev) =>
//       prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div
//       className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Glass Effect Wrapper */}
//       <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">
        
//         {/* Page Title */}
//         <h2 className="text-4xl font-bold mb-10 tracking-wide text-center drop-shadow-lg">
//           Department Selection
//         </h2>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//           <StatCard title="Total Departments" value={departments.length} icon="🏢" />
//           <StatCard title="Selected" value={selectedDepartments.length} icon="✔️" />
//           <StatCard title="Remaining" value={departments.length - selectedDepartments.length} icon="📌" />
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6 flex justify-end">
//           <input
//             type="text"
//             placeholder="Search Department..."
//             className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-700 w-64"
//           />
//         </div>

//         {/* Department Checkbox Table */}
//         <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl bg-gray-800/90">
//           <table className="w-full text-left">
//             <thead className="bg-gray-700">
//               <tr>
//                 <th className="p-4">Select</th>
//                 <th className="p-4">Department Name</th>
//               </tr>
//             </thead>

//             <tbody>
//               {departments.map((dept) => (
//                 <tr key={dept.id} className="border-b border-gray-700">
//                   <td className="p-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedDepartments.includes(dept.id)}
//                       onChange={() => toggleDepartment(dept.id)}
//                       className="w-5 h-5"
//                     />
//                   </td>
//                   <td className="p-4 text-gray-200">{dept.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Player;

import React, { useState } from "react";
import StatCard from "./statCard";
import bgImage from "../assets/dash.webp"; 

// Colleges
const colleges = [
  "University Institute of Technology RGPV",
  "lnct Lakshmi Narain College of Technology",
  "Bansal Group of Institutes (BGI)",
  " Oriental Group of Institutes",
];

// Departments
const departments = [
  { id: 1, name: "Computer Science" },
  { id: 2, name: "Mechanical Engineering" },
  { id: 3, name: "Electrical Engineering" },
  { id: 4, name: "Civil Engineering" },
  { id: 5, name: "Information Technology" },
  { id: 6, name: "Electronic and communication" },
  { id: 7, name: "Petro chemical technology" },
  ];

// Year Options
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

// Tournaments
const tournaments = [
  "Cricket Championship",
  "Football Tournament",
  "E-Sports (BGMI/Valorant)",
  "Coding Hackathon",
  "Athletics Meet",
];

const Player = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState("");

  // Department Toggle
  const toggleDepartment = (id) => {
    setSelectedDepartments((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Year Toggle
  const toggleYear = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <div
      className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

        {/* Page Title */}
        <h2 className="text-4xl font-bold mb-10 tracking-wide text-center drop-shadow-lg">
          Player Selection Panel
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <StatCard title="Colleges" value={colleges.length} icon="🏫" />
          <StatCard title="Departments" value={departments.length} icon="🏢" />
          <StatCard title="Years" value={years.length} icon="📘" />
          <StatCard title="Tournaments" value={tournaments.length} icon="🏆" />
        </div>

        {/* College Selection */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Select College</h3>
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          >
            <option value="">-- Choose College --</option>
            {colleges.map((col, index) => (
              <option key={index} value={col}>{col}</option>
            ))}
          </select>
        </div>

        {/* Department Selection */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Select Department</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <label
                key={dept.id}
                className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dept.id)}
                  onChange={() => toggleDepartment(dept.id)}
                  className="w-5 h-5"
                />
                {dept.name}
              </label>
            ))}
          </div>
        </div>

        {/* Year Selection */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Select Year</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {years.map((year) => (
              <label
                key={year}
                className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => toggleYear(year)}
                  className="w-5 h-5"
                />
                {year}
              </label>
            ))}
          </div>
        </div>

        {/* Tournament Selection */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Select Tournament</h3>
          <select
            value={selectedTournament}
            onChange={(e) => setSelectedTournament(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          >
            <option value="">-- Choose Tournament --</option>
            {tournaments.map((t, index) => (
              <option key={index} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-800/90 p-6 rounded-xl border border-gray-700 mt-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Selection Summary</h3>

          <p><strong>College:</strong> {selectedCollege || "Not selected"}</p>
          <p>
            <strong>Departments:</strong>{" "}
            {selectedDepartments.length > 0
              ? selectedDepartments.map((id) =>
                  departments.find((d) => d.id === id).name
                ).join(", ")
              : "None"}
          </p>

          <p>
            <strong>Years:</strong>{" "}
            {selectedYears.length > 0 ? selectedYears.join(", ") : "None"}
          </p>

          <p>
            <strong>Tournament:</strong>{" "}
            {selectedTournament || "Not selected"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Player;
