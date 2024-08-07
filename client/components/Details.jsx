import { useQuery } from "@tanstack/react-query";

import DetailsBody from "./DetailsBody.jsx";
import fetchDetails from "../hooks/fetchDetails.js";
import NavBar from "./NavBar.jsx";

const Details = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchDetails,
  });

  if (isLoading) {
    return <div className={"details"}>Loading...</div>;
  }

  if (error) {
    return <div className={"details"}>Error: {error}</div>;
  }

  return (
    <div className="details">
      <h2 className="name">{data.name}</h2>
      <DetailsBody details={data} />
      <NavBar id={id} />
    </div>
  );
};

export default Details;
