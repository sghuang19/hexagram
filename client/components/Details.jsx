import { useQuery } from "@tanstack/react-query";

import fetchDetails from "../hooks/fetchDetails.js";

const DetailsBody = ({ details }) => {
  // TODO: dynamically decide the component to display
  const { judgement, statements, summary } = details;
  return (
    <section className="details-body">
      <h3 className="line-index">1st NINE</h3>
      <p className="line-statement">{statements[0]}</p>
    </section>
  );
};

const Details = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchDetails,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="details">
      <h2 className="name">{data.name}</h2>
      <DetailsBody details={data} />
    </div>
  );
};

export default Details;
