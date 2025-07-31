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
    <section className="seasonal-guide bg-gradient-to-r from-[#FAF6E9] to-[#DDEB9D] py-20 px-6 sm:px-10 lg:px-16 rounded-3xl shadow-inner">
      <h2 className="text-4xl font-extrabold text-center text-[#A0C878] mb-14 tracking-wide drop-shadow-md">
        🌦️ Seasonal Planting Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {seasons.map((item, i) => (
          <div
            key={i}
            className="relative bg-[#FFFDF6] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-400 cursor-pointer group border border-[#A0C878]"
          >
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#A0C878] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

            <h3 className="text-2xl font-semibold text-[#4B6447] mb-6 border-b border-[#A0C878] pb-3 tracking-wide">
              {item.season}
            </h3>

            <ul className="list-disc list-inside space-y-3 text-[#556B2F] font-medium text-lg">
              {item.plants.map((plant, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#A0C878] transition-colors duration-300"
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

{
  /* <a
  href="#_"
  class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block"
>
  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
  <span class="relative group-hover:text-white">LogOut</span>
</a>; */
}
