import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ShareTip = () => {
  const { user,loading,setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    // ✅ Send data to your backend API
    fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("✅ Tip shared successfully!");
        form.reset();
      })
      .catch((err) => {
        toast.error("❌ Failed to share tip!");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-green-50 via-white to-green-100 shadow-lg rounded-2xl mt-10 border border-green-200">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700 flex items-center justify-center gap-2">
        🌱 Share a Garden Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            placeholder="How I Grow Tomatoes Indoors"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Plant Type / Topic */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">
            Plant Type / Topic
          </label>
          <input
            type="text"
            name="plantType"
            placeholder="Tomato, Aloe Vera, etc."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Difficulty Level */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Write your gardening tip here..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300 min-h-[120px]"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="https://example.com/tomato.jpg"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Category</label>
          <select
            name="category"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Availability</label>
          <select
            name="availability"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300"
            required
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        {/* User Email & Name (Read-Only) */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Your Email</label>
          <input
            type="text"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 shadow-sm cursor-not-allowed"
          />
        </div>
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 shadow-sm cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold text-lg shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "🌿 Submitting..." : " Submit Tip"}
        </button>
      </form>
    </div>
  );
};

export default ShareTip;
