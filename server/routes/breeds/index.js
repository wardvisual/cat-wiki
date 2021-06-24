import { Router } from "express";
const router = Router();

import breeds from "../../controllers/breeds";
import asyncHandler from "../../middlewares/asyncHandler";

const { listBreeds } = breeds;

router.route("/").get(asyncHandler(listBreeds));

export default router;
