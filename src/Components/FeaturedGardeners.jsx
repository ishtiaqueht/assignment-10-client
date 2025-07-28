import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FeaturedGardeners() {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gardeners/active")
      .then((res) => res.json())
      .then((data) => setGardeners(data))
      .catch((err) => console.error("Error fetching gardeners:", err));
  }, []);

  return (
    <div className="py-12 bg-green-50 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">🌿 Featured Gardeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {gardeners.map((gardener) => (
          <motion.div
            key={gardener._id}
            className="bg-white rounded-xl shadow-md p-5 text-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-32 h-32 mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{gardener.name}</h3>
            <p className="text-green-600 font-medium">{gardener.experience}</p>
            <p className="text-gray-600 mt-2">Status: {gardener.status}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
