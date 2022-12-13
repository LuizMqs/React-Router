import { Router } from "express";

const router: Router = Router()
const SignUp = require("./controllers/signup")
const Login = require("./controllers/login")
const Update = require("./controllers/update")

router.post("/accounts/signup", new SignUp().handler.bind(new SignUp()))

router.post("/accounts/login", new Login().handler.bind(new Login()))

router.put("/accounts/update", new Update().handler.bind(new Update()))

export { router };