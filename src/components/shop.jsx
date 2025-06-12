import React, { useState } from "react";
import { fetchProducts } from "../api-functions/products";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [page, setPage] = useState(0); // page = 0 means skip = 0

  const limit = 10;
  const skip = page * limit;
  const { isPending, isError, error, data, isFetching, refetch } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(limit, skip),
    keepPreviousData: true, // smoother pagination
    // refetchOnMount: "always",
    // refetchOnWindowFocus: false,
    //  refetchInterval: 2000, //on very 2 seconds its invoked
    refetchIntervalInBackground: true,
    // enabled: false,
    select: (data) => ({
      ...data,
      products: data.products.map((p) => ({
        title: p.title,
        id: p.id,
        thumbnail: p.thumbnail,
      })),
    }),
  });

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="border px-4 py-1 rounded"
        >
          Previous
        </button>
        <button onClick={refetch} className="border px-4 py-1 rounded">
          Refresh
        </button>
        <button
          onClick={nextPage}
          disabled={skip + limit >= data?.total}
          className="border px-4 py-1 rounded cursor-pointer disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <div className=" ">
        {data &&
          data.products.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-md p-5 rounded-lg text-center"
              >
                <h2>
                  {" "}
                  {product.id} {product.title}
                </h2>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shop;
