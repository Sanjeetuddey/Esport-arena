import React from 'react'

const PlayerRow = ({ name, game, rank, status }) => {

      const statusColor =
    status === "Online"
      ? "text-green-400"
      : status === "Offline"
      ? "text-gray-400"
      : "text-yellow-400";

  return (
    <>
     <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-all duration-200">
      <td className="p-4 font-medium">{name}</td>
      <td className="p-4">{game}</td>
      <td className="p-4">{rank}</td>
      <td className={`p-4 font-semibold ${statusColor}`}>{status}</td>
    </tr>
    </>
  )
}

export default PlayerRow;