import { useLoaderData } from "react-router";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function TipDetails() {
  const loadedTip = useLoaderData(); // loader থেকে ডাটা আসবে
  const [tip, setTip] = useState(loadedTip);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    setLoading(true);

    const res = await fetch(`https://assignment-10-server-rose-omega.vercel.app/tips/like/${tip._id}`, {
      method: "PATCH",
    });

    if (res.ok) {
      // Local state update (like count +1)
      setTip((prev) => ({
        ...prev,
        totalLiked: prev.totalLiked + 1,
      }));
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#FFFDF6] min-h-screen rounded-lg shadow-md">
      <img
        src={tip.imageUrl || tip.image}
        alt={tip.title}
        className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
      />

      <h1 className="text-3xl font-bold text-[#556B2F]">{tip.title}</h1>
      <p className="text-[#4B6447] mt-2">
        <strong>Category:</strong> {tip.category}
      </p>
      <p className="mt-4 text-lg text-[#4B6447] leading-relaxed">
        {tip.description}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={handleLike}
          disabled={loading}
          className="flex items-center gap-2 bg-[#A0C878] text-white px-4 py-2 rounded-lg hover:bg-[#DDEB9D] transition disabled:opacity-50"
        >
          <Heart size={20} />
          {loading ? "Liking..." : "Like"}
        </button>

        <span className="text-[#556B2F] font-bold text-2xl">
           Total Likes: {tip.totalLiked}
        </span>
      </div>
    </div>
  );
}
