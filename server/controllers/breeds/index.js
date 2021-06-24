import fetch from "node-fetch";
import { catAPI } from "../../config/api";
const { BREEDS } = catAPI;

export default {
  listBreeds: async (req, res, next) => {
    const data = await fetch(BREEDS);
    const result = await data.json();

    res.json({
      isSuccess: true,
      result,
    });
  },
};
