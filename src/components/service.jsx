import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const Service = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["tour"],
    queryFn: () => axios.get("http://localhost:4000/user").then((e) => e.data),
    select: (data) => data,
  });
  return (
    <div className="card-container">
      <div>{JSON.stringify(data, null, 5)}</div>;
    </div>
  );
};
