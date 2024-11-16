import { useEffect, useState } from "react";
import fetchUserData from "../api/fetchUserData";
import { UserData } from "../types/User";

const ApplicationPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setData(userData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Information</h1>
      <p>
        <strong>Name:</strong> {data?.name}
      </p>
      <p>
        <strong>Surname:</strong> {data?.surname}
      </p>
      <p>
        <strong>Farm Name:</strong> {data?.farmer.farm.name}
      </p>
    </div>
  );
};

export default ApplicationPage;
