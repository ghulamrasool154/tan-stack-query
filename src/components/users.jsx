import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fetchUsers } from "../api-functions/users";
import { Link } from "react-router";

export const Users = () => {
  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data?.users?.map((user, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="flex space-x-2 text-gray-500">
                  <Link to={`/users/${user.id}`}>
                    <FaEdit className="hover:text-blue-600" />
                  </Link>
                  <button>
                    <FaTrash className="hover:text-red-600" />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p>
                  <span className="font-medium">Gender:</span> {user.gender}
                </p>
                <p>
                  <span className="font-medium">Department:</span>{" "}
                  {user.company?.department}
                </p>
                <p>
                  <span className="font-medium">Designation:</span>{" "}
                  {user.company?.title}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {user.company?.address?.address},{" "}
                  {user.company?.address?.city}, {user.company?.address?.state}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
