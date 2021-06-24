import fetch from "node-fetch";
import { catAPI } from "../../config/api";
const { CATEGORIES } = catAPI;

export default {
  listCategories: async (req, res, next) => {
    const data = await fetch(CATEGORIES);
    const result = await data.json();

    res.json({
      isSuccess: true,
      result,
    });
  },
};
