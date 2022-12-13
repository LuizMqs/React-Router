"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = require("../postgres");
class SignUp extends postgres_1.myDb {
    handler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = yield this.pool.query(`
                INSERT INTO accounts(email,password) 
                VALUES($1, $2)
                RETURNING id;
            `, [
                    req.body.email,
                    req.body.password
                ]);
                if (email.rows.length == 0) {
                    console.log("erro inesperado");
                    res.json('Erro inesperado');
                }
                else {
                    return res.json({ message: 'user registered successfully', data: "email:" + req.body.email + " pass:" + req.body.password });
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
module.exports = SignUp;
