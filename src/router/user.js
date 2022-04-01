const { Router } = require("express");
const UserController = require("../controller/User");
const userController = new UserController();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await userController.show();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await userController.store(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;