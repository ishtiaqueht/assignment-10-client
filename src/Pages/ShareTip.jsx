import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ShareTip = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    tipData.userEmail = user?.email;
    tipData.userName = user?.displayName;

    // ✅ Send data to your backend API
    fetch("https://assignment-10-server-rose-omega.vercel.app/tips", {
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
        toast.error("❌ Failed to share tip!",err);
        
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className= "share-tip max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#FAF6E9] via-white to-[#FFFDF6] shadow-lg rounded-2xl mt-10 border border-[#DDEB9D]">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-[#A0C878] flex items-center justify-center gap-2">
        🌱 Share a Garden Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Title</label>
          <input
            type="text"
            name="title"
            placeholder="How I Grow Tomatoes Indoors"
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">
            Plant Type / Topic
          </label>
          <input
            type="text"
            name="plantType"
            placeholder="Tomato, Aloe Vera, etc."
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm bg-white focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Description</label>
          <textarea
            name="description"
            placeholder="Write your gardening tip here..."
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300 min-h-[120px]"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="https://example.com/tomato.jpg"
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Category</label>
          <select
            name="category"
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm bg-white focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Availability</label>
          <select
            name="availability"
            className="w-full px-4 py-3 rounded-xl border border-[#DDEB9D] shadow-sm bg-white focus:ring-2 focus:ring-[#A0C878] focus:border-[#A0C878] outline-none transition-all duration-300"
            required
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Your Email</label>
          <input
            type="text"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[#FAF6E9] bg-[#FAF6E9] text-gray-500 shadow-sm cursor-not-allowed"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[#556B2F]">Your Name</label>
          <input
            type="text"
            name="name"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[#FAF6E9] bg-[#FAF6E9] text-gray-500 shadow-sm cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="share-btn w-full py-3 rounded-xl text-white font-semibold text-lg shadow-md bg-gradient-to-r from-[#A0C878] to-[#DDEB9D] hover:from-[#DDEB9D] hover:to-[#A0C878] focus:ring-4 focus:ring-[#FAF6E9] transition-all duration-300"
          disabled={loading}
        >
          {loading ? "🌿 Submitting..." : " Submit Tip"}
        </button>
      </form>
    </div>
  );
};

export default ShareTip;
