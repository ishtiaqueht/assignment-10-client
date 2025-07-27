import { useLoaderData, Link } from "react-router";
import { useState } from "react";
import { Eye } from "lucide-react";

export default function BrowseTips() {
  const initialTips = useLoaderData(); // Loader থেকে প্রথমবার সব public tips আসবে
  const [tips, setTips] = useState(initialTips);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  // ✅ Dropdown থেকে filter করলে backend call হবে
  const handleFilter = async (difficulty) => {
    setSelectedDifficulty(difficulty);

    // যদি difficulty select না করা থাকে → আবার সব data দেখাও
    if (!difficulty) {
      setTips(initialTips);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/tips?difficulty=${difficulty}`
      );
      const data = await res.json();
      console.log("Filtered Data:", data); // ✅ Debug check
      setTips(data); // ✅ Filtered tips set করো
    } catch (error) {
      console.error("Error fetching filtered tips:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌱 Browse Public Tips
      </h1>

      {/* ✅ Filter Dropdown */}
      <div className="flex justify-start mb-4">
        <select
          value={selectedDifficulty}
          onChange={(e) => handleFilter(e.target.value)}
          className="px-3 py-2 border rounded-md shadow-sm"
        >
          <option value="">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-600 text-white">
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
                <tr
                  key={tip._id}
                  className="border-b hover:bg-green-50 transition"
                >
                  {/* Image */}
                  <td className="p-3">
                    <img
                      src={tip.imageUrl || tip.image}
                      alt={tip.title}
                      className="w-20 h-16 object-cover rounded-md"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-3 font-medium">{tip.title}</td>

                  {/* Category */}
                  <td className="p-3 text-gray-700">{tip.category}</td>

                  {/* ✅ Difficulty Column */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        tip.difficulty === "Easy"
                          ? "bg-green-200 text-green-800"
                          : tip.difficulty === "Medium"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {tip.difficulty}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-3 text-center">
                    <Link
                      to={`/tips/${tip._id}`}
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-800"
                    >
                      <Eye size={20} />{" "}
                      <span className="hidden md:inline">See More</span>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-gray-500 italic"
                >
                  No tips found for this difficulty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
