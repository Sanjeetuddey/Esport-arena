// import React from 'react'
// import EventCard from './eventCard';

// const Event = () => {
//   return (
// <>
// <div className="p-8">
// <h2 className="text-3xl font-semibold mb-4">Events</h2>
// <div className="space-y-4">
// <EventCard name="Valorant Showdown" date="Dec 12, 2025" />
// <EventCard name="BGMI Arena Cup" date="Dec 20, 2025" />
// </div>
// </div>
// </>
//   )
// }

// export default Event;

import React from "react";
import EventCard from "./eventCard";
import bgImage from "../assets/dash3.webp";

const Event = () => {
  return (
    <div
      className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glass Background Wrapper */}
      <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

        {/* Page Title */}
        <h2 className="text-4xl font-bold mb-10 tracking-wide text-center drop-shadow-lg">
          Esport Events & Tournaments
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all shadow-md">
            Upcoming
          </button>
          <button className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-md">
            Past Events
          </button>
        </div>

        {/* Events Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EventCard
            name="Valorant Showdown"
            date="Dec 12, 2025"
            teams="16"
            prize="₹25,000"
            // image="https://i.imgur.com/JUc7Y1O.jpg"
          />
          <EventCard
            name="BGMI Arena Cup"
            date="Dec 20, 2025"
            teams="25"
            prize="₹40,000"
            // image="https://i.imgur.com/B7HqAUU.jpg"
          />
          <EventCard
            name="FIFA Ultimate Championship"
            date="Jan 03, 2026"
            teams="32"
            prize="₹15,000"
            // image="https://i.imgur.com/OpZxI2v.jpg"
          />
          <EventCard
            name="CS:GO Elite Masters"
            date="Jan 15, 2026"
            teams="20"
            prize="₹30,000"
            // image="https://i.imgur.com/spgZyGP.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
