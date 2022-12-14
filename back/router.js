"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const SignUp = require("./controllers/signup");
const Login = require("./controllers/login");
const Update = require("./controllers/update");
router.post("/accounts/signup", new SignUp().handler.bind(new SignUp()));
router.post("/accounts/login", new Login().handler.bind(new Login()));
router.put("/accounts/update", new Update().handler.bind(new Update()));
