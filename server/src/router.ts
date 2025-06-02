import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import programAction from "./modules/item/program/programAction";

router.get("/api/programs", programAction.browse);
router.get("/api/programs/:id", programAction.read);

import categoryActions from "./modules/item/category/categoryActions";

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

/* ************************************************************************* */
import SayAction from "./modules/item/say/SayAction";

router.get("/", SayAction.sayWelcome);

export default router;
