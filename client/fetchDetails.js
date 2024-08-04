// const API_URL = "/api";
const API_URL = "http://localhost:3000/api";

/**
 * Fetch hexagram details from backend
 * @param data A string of 6 binary digits.
 */
export default async function fetchDetails(data) {
  let details;
  try {
    const res = await fetch(`${API_URL}/${data}`);
    details = await res.json();
  } catch (error) {
    console.error("Error fetching details...", error);
  }
  console.log(details);
  return details;
}
