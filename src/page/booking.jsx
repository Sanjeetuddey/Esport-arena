import React, { useState } from "react";
import bgImage from "../assets/dash.webp";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    arena: "",
  });
  
  const arenas = ["Football Ground", "Cricket Arena", "Badminton Court", "E-Sports Hall", "Basketball Court"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addBooking = (e) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.time || !form.arena) return;

    setBookings([...bookings, form]);
    setForm({ name: "", date: "", time: "", arena: "" });
  };

  return (
    <div
      className="min-h-screen p-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     
      <div className="backdrop-blur-lg bg-black/60 p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto">

       
        <h2 className="text-4xl font-bold mb-8 text-center drop-shadow-lg">
          Arena Booking
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          
          <form
            onSubmit={addBooking}
            className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Book an Arena</h3>

            <div className="space-y-5">

                           <div>
                <label className="text-gray-300 block mb-2">Player Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter player name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-gray-300 block mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-2xl">
                  <input type="text" />
                </label>
              </div>

              {/* Time */}
              <div>
                <label className="text-gray-300 block mb-2">Time Slot</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Arena Selection */}
              <div>
                <label className="text-gray-300 block mb-2">Arena</label>
                <select
                  name="arena"
                  value={form.arena}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Arena</option>
                  {arenas.map((arena, index) => (
                    <option key={index} value={arena}>
                      {arena}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition-all"
            >
              Book Arena
            </button>
          </form>

          {/* Booking List */}
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Today's Bookings</h3>

            {bookings.length === 0 ? (
              <p className="text-gray-400 text-center">
                No bookings available yet.
              </p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {bookings.map((b, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-md"
                  >
                    <p><strong>Name:</strong> {b.name}</p>
                    <p><strong>Arena:</strong> {b.arena}</p>
                    <p><strong>Date:</strong> {b.date}</p>
                    <p><strong>Time:</strong> {b.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
