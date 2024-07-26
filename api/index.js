const express = require("express");
const apiRouter = express.Router();



apiRouter.get("/", (req, res) => {
    res.send("Api route /api");
});


apiRouter.use("/games", require("./games"));
apiRouter.use("/users", require("./users"));

module.exports = apiRouter;