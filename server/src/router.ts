import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import programAction from "./modules/item/program/programAction";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/programs", programAction.browse);

/* ************************************************************************* */
import SayAction from "./modules/item/say/SayAction";

router.get("/", SayAction.sayWelcome);

export default router;
