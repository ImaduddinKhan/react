import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (reqConfiguration) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(reqConfiguration.url, {
          method: reqConfiguration.method ? reqConfiguration.method : "GET",
          headers: reqConfiguration.headers ? reqConfiguration.headers : {},
          body: reqConfiguration.body
            ? JSON.stringify(reqConfiguration.body)
            : null,
        });

        if (!response.ok) {
          throw new Error("Request Failed!");
        }
        const data = await response.json();

        applyData(data);
      } catch (err) {
        setError(err.message || "something went wrong");
      }
      setIsLoading(false);
    },
    [applyData]
  );

  return {
    isLoading, // or isLoading: isLoading
    error, // or error: error
    sendRequest, // or sendRequest: sendRequest | this is new JS feature that when the property name and value name are same then this style can be used;
  };
};

export default useHttp;
