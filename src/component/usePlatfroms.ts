// import { platform } from './GageGrid';
import { useData } from "./useData";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}
const usePlatrom = () => useData<platforms>("/platforms/lists/parents");
export default usePlatrom;
