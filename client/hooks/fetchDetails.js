const API_URL = "/api/";

const fetchDetails = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    console.error("Failed to fetch details from API");
  }
  return await res.json();
};

export default fetchDetails;
