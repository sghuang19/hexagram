import { useQuery } from "@tanstack/react-query";

import DetailsBody from "./DetailsBody.jsx";
import fetchDetails from "../hooks/fetchDetails.js";

const Details = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchDetails,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="details">
      <h2 className="name">{data.name}</h2>
      <DetailsBody details={data} />
    </div>
  );
};

export default Details;
