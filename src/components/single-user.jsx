import React from "react";
import { fetchUserById } from "../api-functions/users";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const SingleUser = () => {
  const { id } = useParams();

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["userById", id],
    queryFn: () => fetchUserById(id),
  });
  if (isPending) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return <div>{JSON.stringify(data, null, 5)}</div>;
};

export default SingleUser;
