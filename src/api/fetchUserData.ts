import { UserData } from "../types/User";
import { GET_USER_DATA } from "./queries";



const fetchUserData = async (): Promise<UserData> => {
  const response = await fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query: GET_USER_DATA.loc?.source.body,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message || "Error occurred");
  }

  return result.data.user;
};

export default fetchUserData;