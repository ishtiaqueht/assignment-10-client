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

    fetch(`http://localhost:3000/tips/${tip._id}`, {
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
    <div className="max-w-3xl mx-auto p-8 bg-green-50 shadow-lg rounded-2xl mt-10 border border-green-200">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700">
        🌿 Update Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={tip.title}
            required
            className="w-full px-4 py-3 rounded-xl border"
          />
        </div>

        {/* Plant Type */}
        <div>
          <label className="font-semibold text-gray-700">Plant Type</label>
          <input
            type="text"
            name="plantType"
            defaultValue={tip.plantType}
            required
            className="w-full px-4 py-3 rounded-xl border"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="font-semibold text-gray-700">Difficulty</label>
          <select
            name="difficulty"
            defaultValue={tip.difficulty}
            required
            className="w-full px-4 py-3 rounded-xl border"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={tip.description}
            required
            className="w-full px-4 py-3 rounded-xl border min-h-[120px]"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={tip.imageUrl}
            required
            className="w-full px-4 py-3 rounded-xl border"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold text-gray-700">Category</label>
          <select
            name="category"
            defaultValue={tip.category}
            required
            className="w-full px-4 py-3 rounded-xl border"
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="font-semibold text-gray-700">Availability</label>
          <select
            name="availability"
            defaultValue={tip.availability}
            required
            className="w-full px-4 py-3 rounded-xl border"
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        {/* User Info */}
        <div>
          <label className="font-semibold text-gray-700">Your Email</label>
          <input
            type="text"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-500"
          />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
        >
          {loading ? "Updating..." : "Update Tip"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
