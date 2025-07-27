
import { useLoaderData } from "react-router";

export default function ExploreGardeners() {
    const gardeners = useLoaderData()


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌱 Explore Gardeners</h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white shadow-md rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Info */}
            <h2 className="text-xl font-semibold">{gardener.name}</h2>
            <p className="text-gray-600">
              <strong>Age:</strong> {gardener.age} | <strong>Gender:</strong> {gardener.gender}
            </p>
            <p className="mt-2">
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 text-sm rounded ${
                  gardener.status === "Available" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }`}
              >
                {gardener.status}
              </span>
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Experience:</strong> {gardener.experience}
            </p>
            <p className="mt-2 text-gray-800">
              🌿 <strong>Total Tips Shared:</strong> {gardener.totalTips}
            </p>

            {/* Optional Button */}
            {/* <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Profile
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
