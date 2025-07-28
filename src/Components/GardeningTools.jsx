
import React from "react";

const tools = [
  {
    name: "Pruning Shears",
    description:
      "High-quality pruning shears for precise trimming and shaping of plants.",
    link: "https://www.advancingalternatives.com/blog/pruning-shears/?srsltid=AfmBOoph39vh_Gwfb-WDJaYBF3yh_xVs_EwJgRTRd4mUH9DZDuzi3oPC",
  },
  {
    name: "Garden Gloves",
    description:
      "Durable and comfortable gloves to protect your hands while gardening.",
    link: "https://www.thegardenglove.com/",
  },
  {
    name: "Compost Bin",
    description:
      "Eco-friendly compost bin to recycle kitchen waste and produce rich compost.",
    link: "https://togohb.com/food-waste-composting/?gad_source=1&gad_campaignid=22778545656&gbraid=0AAAAABW7bHwOXiTc90_oBXArBwvj_vknc&gclid=CjwKCAjwv5zEBhBwEiwAOg2YKK9yqXN2-IUvroFjXUAiOA2NQUkjitE-87z2iOZ2XhoRhx1otc8uiBoCJI8QAvD_BwE",
  },
  {
    name: "Soil Tester Kit",
    description:
      "Test soil pH and nutrients to ensure optimal plant growth conditions.",
    link: "https://www.mysoiltesting.com/?srsltid=AfmBOoo0Oa-kBfUueMcxQ5ZixNx3VsjZ3volpntjChMm5R0EmTwgT9Ss",
  },
];

const GardeningTools = () => {
  return (
    <section className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 py-16 px-6 sm:px-10 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-12 drop-shadow-lg">
        🛠️ Gardening Tools & Resources
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-7 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              {tool.name}
            </h3>
            <p className="text-gray-700 mb-5">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardeningTools;
