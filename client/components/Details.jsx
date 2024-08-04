import fetchDetails from "../fetchDetails.js";

const DetailsBody = ({ state }) => {
  // TODO: dynamically decide the component to display
  return (
    <section className="details-body">
      <h3 className="line-index">1st NINE</h3>
      <p className="line-statement">
        In the first (or lowest) NINE, undivided, (we see its subject as) the
        dragon lying hid (in the deep). It is not the time for active doing.
      </p>
    </section>
  );
};

const Details = ({ data }) => {
  // TODO: query the hexagram texts
  return (
    <div className="details">
      <h2 className="name">Kihen</h2>
      <DetailsBody />
    </div>
  );
};

export default Details;
