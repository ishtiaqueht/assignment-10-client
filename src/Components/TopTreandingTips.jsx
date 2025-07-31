import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);

  // Load Top 6 Trending Tips
  useEffect(() => {
    fetch("https://assignment-10-server-rose-omega.vercel.app/tips")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter((tip) => tip.availability === "Public")
          .sort((a, b) => b.totalLiked - a.totalLiked)
          .slice(0, 6);
        setTips(sorted);
      })
      
  }, []);

  // Handle Like
  const handleLike = (id) => {
    fetch(`https://assignment-10-server-rose-omega.vercel.app/tips/like/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Liked!");

          const updatedTips = tips.map((tip) =>
            tip._id === id
              ? { ...tip, totalLiked: (tip.totalLiked || 0) + 1 }
              : tip
          );
          setTips(updatedTips);
        }
      })
      .catch((err) => {
        
        toast.error("Failed to like the tip",err);
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FAF6E9] rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#A0C878]">
        🌿 Top Trending Tips
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="bg-[#FFFDF6] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#DDEB9D]"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#A0C878] mb-2 line-clamp-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[#A0C878] mb-1">
                  <span className="font-medium">Category:</span> {tip.category}
                </p>
                <p className="text-sm text-[#DDEB9D] mb-4">
                  <span className="font-medium">Difficulty:</span>{" "}
                  {tip.difficulty}
                </p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#DDEB9D]">
                  <button
                    onClick={() => handleLike(tip._id)}
                    data-tooltip-id={`tip-tooltip-${tip._id}`}
                    data-tooltip-content={`Difficulty: ${tip.difficulty}`}
                    className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-medium transition"
                  >
                    <FaHeart className="text-2xl" />
                    {tip.totalLiked ?? 0}
                  </button>

                  {/* Tooltip Component */}
                  <Tooltip id={`tip-tooltip-${tip._id}`} place="top" />

                  <span className="text-xs text-[#DDEB9D]">
                    By: {tip.userName || "Unknown"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTrendingTips;
