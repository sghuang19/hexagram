import { useQuery } from "@tanstack/react-query";

import DetailsBody from "./DetailsBody.jsx";
import fetchDetails from "../hooks/fetchDetails.js";
import Footer from "./Footer.jsx";
import clsx from "clsx";

export default function Details({ id }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchDetails,
  });

  if (isLoading) {
    return <div className={"details flex-1"}>Loading...</div>;
  }

  if (error) {
    return <div className={"details flex-1"}>Error: {error}</div>;
  }

  return (
    <div
      className={clsx(
        "details",
        "h-3/5 wide:h-full wide:flex-1", // takes up more space in portrait
        "flex flex-col align-middle justify-center m-0 px-4 wide:p-8 relative",
      )}
    >
      <Name name={data.name} />
      <DetailsBody details={data} />
      <Footer id={id} />
    </div>
  );
}

/** @param {string} name */
function Name({ name }) {
  return (
    <h1 className="name text-center font-serif text-5xl md:text-8xl lg:text-10xl my-2">
      {name}
    </h1>
  );
}
