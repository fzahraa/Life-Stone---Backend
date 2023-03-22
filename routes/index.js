const app = require("express");
const router = app.Router();

//routes

const userRouter = require("./user");


//route middleware
router.use("/user", userRouter);

module.exports = router;
