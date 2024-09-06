

import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "./api--client";

export interface FetchRespons<T> {
  count: number;
  results: T[];
}

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [data, setGames] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoadding, setLoadding] = useState(false);
//   const skeletions = [1, 2, 3, 4, 5, 6];

//   useEffect(
//     () => {
//       setLoadding(true);
//       const controller = new AbortController();
//       apiClient
//         .get<FetchRespons<T>>(endpoint, { signal: controller.signal })
//         .then((res) => {
//           setGames(res.data.results);
//           setLoadding(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setLoadding(false);
//         });
//       return () => controller.abort();
//     },
//     deps ? [...deps] : []
//   );
//   return { data, error, isLoadding };
// };
// export default useData;
 export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);  // Changed from setGames to setData
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchRespons<T>>(endpoint, { ...requestConfig, signal: controller.signal }) // Spread requestConfig correctly
        .then((res) => {
          setData(res.data.results); // Set the data
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading }; // Changed to isLoading for consistency
};
