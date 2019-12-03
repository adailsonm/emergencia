const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiControllers");
const userController = require("../controllers/userControllers");

// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);
// TODO: listar pontos de interesse da BD
router.get("/details", apiController.details);
// TODO: adicionar novo ponto de interesse
router.post("/interest", apiController.add);

router.post("/login", userController.login);
router.post("/users", userController.create);

// TODO: atualizar ponto de interesse
router.put("/interest/:id", apiController.update);
// TODO: apagar ponto de interesse
router.delete("/interest/:id", apiController.delete);

module.exports = router;
