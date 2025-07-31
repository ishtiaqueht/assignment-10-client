// MyTips.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-rose-omega.vercel.app/my-tips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);

  const handleDelete = (_id) => {
    

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      
      if (result.isConfirmed) {
        // start deleting the tip
        fetch(`https://assignment-10-server-rose-omega.vercel.app/tips/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tip has been deleted.",
                icon: "success",
              });

              // remove the tip from the state
              const remainingTips = myTips.filter((tip) => tip._id !== _id);
              setMyTips(remainingTips);
            }
          });
      }
    });
  };

  return (
   <div className="max-w-5xl mx-auto p-4">
  <h2 className="text-2xl font-bold mb-6 text-center text-[#556B2F] animate-[fadeInDown_0.6s_ease-out_forwards]">
    📋 My Garden Tips
  </h2>

  {myTips.length === 0 ? (
    <p className="text-center italic text-[#A0C878] animate-[fadeIn_0.6s_ease-out_forwards]">
      No tips shared yet.
    </p>
  ) : (
    <div className="animate-[fadeIn_0.6s_ease-out_forwards]">
      {/* For small screens: card view */}
      <div className="sm:hidden space-y-4">
        {myTips.map((tip) => (
          <div
            key={tip._id}
            className="bg-[#FAF6E9] rounded-lg p-4 shadow-md border border-[#DDEB9D]"
          >
            <h3 className="text-lg font-semibold text-[#556B2F]">{tip.title}</h3>
            <p className="text-sm text-[#4B6447]">Category: {tip.category}</p>
            <p className="text-sm text-[#4B6447]">
              Status:{" "}
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                  tip.availability?.toLowerCase() === "public"
                    ? "bg-[#A0C878] text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                {tip.availability?.toLowerCase() === "public"
                  ? "Public"
                  : "Hidden"}
              </span>
            </p>
            <div className="mt-3 space-x-2">
              <Link to={`/update-tip/${tip._id}`}>
                <button className="btn btn-sm bg-[#A0C878] text-white hover:bg-[#899c5f] transition-colors duration-300">
                  ✏️ Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(tip._id)}
                className="btn btn-sm bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* For medium+ screens: table view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="table-auto w-full border border-[#DDEB9D] rounded-lg shadow-md">
          <thead className="bg-[#FAF6E9]">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-[#556B2F]">Title</th>
              <th className="py-3 px-4 text-left font-semibold text-[#556B2F]">Category</th>
              <th className="py-3 px-4 text-left font-semibold text-[#556B2F]">Status</th>
              <th className="py-3 px-4 text-left font-semibold text-[#556B2F]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b border-[#DDEB9D] hover:bg-[#FAF6E9] transition-colors duration-300 cursor-pointer"
              >
                <td className="py-3 px-4">{tip.title}</td>
                <td className="py-3 px-4">{tip.category}</td>
                <td className="py-3 px-4 capitalize">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      tip.availability?.toLowerCase() === "public"
                        ? "bg-[#A0C878] text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {tip.availability?.toLowerCase() === "public"
                      ? "Public"
                      : "Hidden"}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <Link to={`/update-tip/${tip._id}`}>
                    <button className="btn btn-sm bg-[#A0C878] text-white hover:bg-[#899c5f] transition-colors duration-300">
                      ✏️ Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}
</div>

  );
};

export default MyTips;
