import { useLoaderData, Link } from "react-router";
import { useState } from "react";
import { Eye } from "lucide-react";

export default function BrowseTips() {
  const initialTips = useLoaderData(); 
  const [tips, setTips] = useState(initialTips);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleFilter = async (difficulty) => {
    setSelectedDifficulty(difficulty);

    if (!difficulty) {
      setTips(initialTips);
      return;
    }

    try {
      const res = await fetch(
        `https://assignment-10-server-rose-omega.vercel.app/tips?difficulty=${difficulty}`
      );
      const data = await res.json();
      
      setTips(data);
    } catch (error){}
    
  };

  return (
   <div className="browse-tips min-h-screen bg-[#FFFDF6] p-6">
  <h1 className="text-3xl font-bold text-center mb-6 text-[#4B6447]">
    🌱 Browse Public Tips
  </h1>

  <div className="flex justify-start mb-4">
    <select
      value={selectedDifficulty}
      onChange={(e) => handleFilter(e.target.value)}
      className="px-3 py-2 border border-[#A0C878] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] focus:border-[#A0C878]"
    >
      <option value="">All Difficulty</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  </div>

  {/* Desktop View */}
  <div className="hidden md:block overflow-x-auto shadow-md rounded-lg">
    <table className="w-full text-left border-collapse bg-[#FAF6E9] rounded-lg">
      <thead className="bg-[#A0C878] text-white">
        <tr>
          <th className="p-3">Image</th>
          <th className="p-3">Title</th>
          <th className="p-3">Category</th>
          <th className="p-3">Difficulty</th>
          <th className="p-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {tips.length > 0 ? (
          tips.map((tip) => (
            <tr key={tip._id} className="border-b hover:bg-[#DDEB9D] transition">
              <td className="p-3">
                <img
                  src={tip.imageUrl || tip.image}
                  alt={tip.title}
                  className="w-20 h-16 object-cover rounded-md"
                />
              </td>
              <td className="p-3 font-medium text-[#556B2F]">{tip.title}</td>
              <td className="p-3 text-[#556B2F]">{tip.category}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold ${
                    tip.difficulty === "Easy"
                      ? "bg-[#DDEB9D] text-[#556B2F]"
                      : tip.difficulty === "Medium"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {tip.difficulty}
                </span>
              </td>
              <td className="p-3 text-center">
                <Link
                  to={`/tips/${tip._id}`}
                  className="inline-flex items-center gap-1 text-[#556B2F] hover:text-[#A0C878] transition"
                >
                  <Eye size={20} />
                  <span className="hidden md:inline">See More</span>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center p-4 text-gray-500 italic">
              No tips found for this difficulty!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Mobile View */}
  <div className="md:hidden space-y-4">
    {tips.length > 0 ? (
      tips.map((tip) => (
        <div
          key={tip._id}
          className="bg-[#FAF6E9] shadow-md rounded-lg p-4 space-y-2 border border-[#EAEAEA]"
        >
          <img
            src={tip.imageUrl || tip.image}
            alt={tip.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold text-[#556B2F]">
            {tip.title}
          </h2>
          <p className="text-[#4B6447] text-sm">
            <strong>Category:</strong> {tip.category}
          </p>
          <p className="text-sm">
            <strong>Difficulty: </strong>
            <span
              className={`px-2 py-1 rounded text-sm font-semibold ${
                tip.difficulty === "Easy"
                  ? "bg-[#DDEB9D] text-[#556B2F]"
                  : tip.difficulty === "Medium"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {tip.difficulty}
            </span>
          </p>
          <Link
            to={`/tips/${tip._id}`}
            className="inline-flex items-center gap-1 text-[#556B2F] hover:text-[#A0C878] transition text-sm"
          >
            <Eye size={18} />
            <span>See More</span>
          </Link>
        </div>
      ))
    ) : (
      <p className="text-center p-4 text-gray-500 italic">
        No tips found for this difficulty!
      </p>
    )}
  </div>
</div>

  );
}
