// routes/pages.js
const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controllers/auth.js");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js");

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkAuth, checkCookiesJWT, sendDashboard);

module.exports = pagesRouter;