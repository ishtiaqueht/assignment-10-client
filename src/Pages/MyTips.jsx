// MyTips.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-tips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);

   const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the tip
                fetch(`http://localhost:3000/tips/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tip has been deleted.",
                                icon: "success"
                            });

                            // remove the tip from the state
                            const remainingTips = myTips.filter(tip => tip._id !== _id);
                            setMyTips(remainingTips);
                        }
                    })


            }
        });

    }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center animate-[fadeInDown_0.6s_ease-out_forwards]">
        📋 My Garden Tips
      </h2>

      {myTips.length === 0 ? (
        <p className="text-center text-gray-500 italic animate-[fadeIn_0.6s_ease-out_forwards]">
          No tips shared yet.
        </p>
      ) : (
        <div className="overflow-x-auto animate-[fadeIn_0.6s_ease-out_forwards]">
          <table className="table-auto w-full border border-gray-300 rounded-lg shadow-md min-w-[600px] md:min-w-full">
            <thead className="bg-green-100">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-green-800">
                  Title
                </th>
                <th className="py-3 px-4 text-left font-semibold text-green-800 hidden sm:table-cell">
                  Category
                </th>
                <th className="py-3 px-4 text-left font-semibold text-green-800 hidden sm:table-cell">
                  Status
                </th>
                <th className="py-3 px-4 text-left font-semibold text-green-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tip) => (
                <tr
                  key={tip._id}
                  className="border-b border-gray-200 hover:bg-green-50 transition-colors duration-300 cursor-pointer"
                >
                  <td className="py-3 px-4">{tip.title}</td>
                  <td className="py-3 px-4 hidden sm:table-cell">
                    {tip.category}
                  </td>
                  <td className="py-3 px-4 capitalize hidden sm:table-cell">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        tip.availability?.toLowerCase() === "public"
                          ? "bg-green-500 text-white"
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
                      <button className="btn btn-sm btn-info hover:bg-blue-600 hover:text-white transition-colors duration-300">
                        ✏️ Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="btn btn-sm btn-error hover:bg-red-700 hover:text-white transition-colors duration-300"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
