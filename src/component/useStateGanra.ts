// import { useEffect, useState } from "react";
// import apiClient from "./api--client";
// import { CanceledError } from "axios";
// import useData from "./useData";

import { useData } from "./useData";

export interface Ganra {
  id: number;
  name: string;
  image_background: string;
}

const useGenra = () => useData<Ganra>("/genres");

export default useGenra;
