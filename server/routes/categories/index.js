import { Router } from "express";
const router = Router();

import categories from "../../controllers/categories";
import asyncHandler from "../../middlewares/asyncHandler";

const { listCategories } = categories;

router.route("/").get(asyncHandler(listCategories));

export default router;
