import { Router } from "express";
import * as playerController from "../controllers/players-controller";
import * as clubController from "../controllers/clubs-controller";

const router = Router();

router.get("/players", playerController.getPlayer );
router.post("/players", playerController.postPlayer);
router.delete("/players/:id", playerController.deletePlayer);
router.patch("/players/:id", playerController.updatePlayer);

router.get("/players/:id", playerController.getPlayerById );

router.get("/clubs", clubController.getClubs);

//sempre que tiver somente uma coisa que for exportar, usar o default
export default router;