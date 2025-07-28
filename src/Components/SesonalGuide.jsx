
import React from "react";

const SeasonalGuide = () => {
  const seasons = [
    {
      season: "Rainy Season (June - August)",
      plants: ["Tomato", "Chili", "Pumpkin", "Coriander"],
    },
    {
      season: "Winter (November - January)",
      plants: ["Cauliflower", "Carrot", "Spinach", "Beans"],
    },
    {
      season: "Summer (March - May)",
      plants: ["Bottle Gourd", "Lady Finger", "Cucumber", "Watermelon"],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 px-6 sm:px-10 lg:px-16">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-14 tracking-wide drop-shadow-md">
        🌦️ Seasonal Planting Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {seasons.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-400 cursor-pointer group"
          >
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

            <h3 className="text-2xl font-semibold text-green-800 mb-6 border-b border-green-200 pb-3 tracking-wide">
              {item.season}
            </h3>

            <ul className="list-disc list-inside space-y-3 text-gray-700 font-medium text-lg">
              {item.plants.map((plant, idx) => (
                <li
                  key={idx}
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  {plant}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalGuide;
