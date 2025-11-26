// import React from 'react'

// const Player = () => {
//   return (
//     <>
//     <div className="p-8">
// <h2 className="text-3xl font-semibold mb-4">Players</h2>
// <table className="w-full text-left bg-gray-800 rounded-xl overflow-hidden">
// <thead className="bg-gray-700">
// <tr>
// <th className="p-4">Name</th>
// <th className="p-4">Game</th>
// <th className="p-4">Rank</th>
// </tr>
// </thead>
// <tbody>
// <tr className="border-b border-gray-700">
// <td className="p-4">Sanjeet</td>
// <td className="p-4">Valorant</td>
// <td className="p-4">Gold</td>
// </tr>
// <tr>
// <td className="p-4">Aman</td>
// <td className="p-4">BGMI</td>
// <td className="p-4">Ace</td>
// </tr>
// </tbody>
// </table>
// </div>
//     </>
//   )
// }

// export default Player;

import React from "react";
import StatCard from "./statCard";
import PlayerRow from "./playerRow";
import bgImage from "../assets/dash.webp"; // your background image

const Player = () => {
  return (
    <div
      className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glass Effect Wrapper */}
      <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

        {/* Page Title */}
        <h2 className="text-4xl font-bold mb-10 tracking-wide text-center drop-shadow-lg">
          Players Management
        </h2>

        {/* Player Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <StatCard title="Total Players" value="120" icon="👥" />
          <StatCard title="Active Players" value="42" icon="⚡" />
          <StatCard title="Top Rankers" value="18" icon="🏆" />
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex justify-end">
          <input
            type="text"
            placeholder="Search Player..."
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-700 w-64"
          />
        </div>

        {/* Players Table */}
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl bg-gray-800/90">
          <table className="w-full text-left">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Game</th>
                <th className="p-4">Rank</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              <PlayerRow name="Sanjeet" game="Valorant" rank="Gold" status="Online" />
              <PlayerRow name="Aman" game="BGMI" rank="Ace" status="Offline" />
              <PlayerRow name="Rohit" game="FIFA 22" rank="Level 28" status="Online" />
              <PlayerRow name="Karan" game="CS:GO" rank="Platinum" status="Busy" />
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Player;