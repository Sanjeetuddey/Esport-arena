import React from "react";
import { FaSearch, FaGamepad, FaTrophy, FaBroadcastTower } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612197531868-9d0843a7e48f')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-2xl text-center max-w-3xl backdrop-blur-md">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Enter The Esports Arena
          </h1>
          <p className="text-lg mt-4 opacity-90">
            Join tournaments, explore events, stream live battles — Level up your gaming!
          </p>

          {/* Search Bar */}
          <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3 items-center mt-8 text-black">
            <FaSearch className="text-2xl opacity-70" />
            <input
              type="text"
              placeholder="Search games or tournaments..."
              className="flex-1 p-3 border rounded-lg focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-16 py-12 bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold mb-6">Popular Esports Categories</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Valorant", icon: <FaGamepad /> },
            { name: "BGMI", icon: <FaTrophy /> },
            { name: "Call of Duty", icon: <FaGamepad /> },
            { name: "Live Streaming", icon: <FaBroadcastTower /> },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-xl hover:bg-purple-700 transition cursor-pointer text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="px-6 md:px-16 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Tournaments</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src=""
                alt="Arena"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">Valorant Showdown {id}</h3>
                <p className="text-gray-600 text-sm mt-1">Dec 15, 2025 · Online Event</p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
