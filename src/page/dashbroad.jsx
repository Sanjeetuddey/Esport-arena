import React from "react";
import Card from "./card";
import bgImage from "../assets/dash4.webp"; 

const Dashboard = () => {
return (
<>
<div
className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: `url(${bgImage})` }}
>
<div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

<h2 className="text-4xl font-bold mb-8 tracking-wide text-center drop-shadow-lg">
Esport Arena Dashboard
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
<Card title="Total Players" value="120" icon="🎮" />
<Card title="Upcoming Events" value="5" icon="📅" />
<Card title="Today's Bookings" value="18" icon="🏟️" />
{/* <Card title="Total Earnings" value="₹45,200" icon="💰" /> */}
<Card title="Active Systems" value="12" icon="🖥️" />
<Card title="Peak Hours" value="7 PM - 10 PM" icon="⏱️" />
</div>

{/* Additional Information Sections */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Recent Events */}
<div className="bg-gray-800/80 p-6 rounded-xl shadow-xl border border-gray-700">
<h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
<ul className="space-y-3 text-gray-300">
<li className="bg-gray-700/50 p-3 rounded-lg">Valorant Showdown - Dec 12</li>
<li className="bg-gray-700/50 p-3 rounded-lg">BGMI Arena Cup - Dec 20</li>
<li className="bg-gray-700/50 p-3 rounded-lg">FIFA 22 Championship - Jan 3</li>
</ul>
</div>

<div className="bg-gray-800/80 p-6 rounded-xl shadow-xl border border-gray-700">
<h3 className="text-2xl font-semibold mb-4">Player Activity</h3>
<ul className="space-y-3 text-gray-300">
<li className="bg-gray-700/50 p-3 rounded-lg">Sanjeet - Valorant - Gold</li>
<li className="bg-gray-700/50 p-3 rounded-lg">Aman - BGMI - Ace</li>
<li className="bg-gray-700/50 p-3 rounded-lg">Rohit - FIFA - Level 28</li>
</ul>
</div>
</div>
</div>
</div>
</>
);
};


export default Dashboard;