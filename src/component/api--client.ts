import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "478abf4a95f54bd68888bc3c68bdc2d7",
  },
});
