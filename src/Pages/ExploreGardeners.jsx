import { useLoaderData } from "react-router";

export default function ExploreGardeners() {
  const gardeners = useLoaderData();

  return (
    <div className="min-h-screen bg-[#FAF6E9] p-6 explore-gardeners">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-[#4B6447] tracking-wide drop-shadow-sm">
        🌱 Explore Gardeners
      </h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-[#FFFDF6] shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 border border-[#A0C878]"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden rounded-xl mb-5">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110 rounded-xl"
              />
            </div>

            {/* Info */}
            <h2 className="text-2xl font-semibold text-[#556B2F] mb-1">
              {gardener.name}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Age:</strong> {gardener.age} | <strong>Gender:</strong>{" "}
              {gardener.gender}
            </p>
            <p className="mt-2">
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 text-sm rounded-full font-semibold ${
                  gardener.status === "Available"
                    ? "bg-[#DDEB9D] text-[#556B2F]"
                    : "bg-[#FAF6E9] text-[#A0522D]"
                }`}
              >
                {gardener.status}
              </span>
            </p>
            <p className="mt-3 text-gray-800 font-medium">
              <strong>Experience:</strong> {gardener.experience}
            </p>
            <p className="mt-2 text-[#4B6447] font-semibold">
              🌿 Total Tips Shared: {gardener.totalTips}
            </p>

            {/* Optional Button */}
            {/* <button className="mt-6 w-full bg-[#A0C878] text-white py-2 rounded-lg hover:bg-[#859A5B] transition-colors">
          View Profile
        </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
