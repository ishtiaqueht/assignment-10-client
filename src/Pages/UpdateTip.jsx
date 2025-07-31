import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateTip = () => {
  const tip = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    tipData.userEmail = user?.email;
    tipData.userName = user?.displayName;

    fetch(`https://assignment-10-server-rose-omega.vercel.app/tips/${tip._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("✅ Tip updated successfully!");
        navigate("/my-tips");
      })
      .catch(() => {
        toast.error("❌ Failed to update tip!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#FAF6E9] shadow-lg rounded-2xl mt-10 border border-[#DDEB9D]">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-[#A0C878]">
        🌿 Update Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="font-semibold text-[#556B2F]">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={tip.title}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          />
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Plant Type</label>
          <input
            type="text"
            name="plantType"
            defaultValue={tip.plantType}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          />
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Difficulty</label>
          <select
            name="difficulty"
            defaultValue={tip.difficulty}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Description</label>
          <textarea
            name="description"
            defaultValue={tip.description}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none min-h-[120px]"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={tip.imageUrl}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          />
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Category</label>
          <select
            name="category"
            defaultValue={tip.category}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Availability</label>
          <select
            name="availability"
            defaultValue={tip.availability}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#A0C878] focus:ring-2 focus:ring-[#A0C878] outline-none"
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Your Email</label>
          <input
            type="text"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-[#FFFDF6] text-gray-500 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="font-semibold text-[#556B2F]">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-[#FFFDF6] text-gray-500 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A0C878] to-[#899c5f] hover:from-[#899c5f] hover:to-[#A0C878] text-white font-semibold transition"
        >
          {loading ? "Updating..." : "Update Tip"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
