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
class Update extends postgres_1.myDb {
    handler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.cookies.token);
                if (req.cookies.token.id) {
                    const update = yield this.pool.query(`
            UPDATE accounts SET email = $1,
            password = $2
            WHERE id = $3 RETURNING id;
              `, [
                        req.body.email,
                        req.body.password,
                        req.cookies.token.id
                    ]);
                    return res.json({ message: 'user changed successfully', data: "email:" + req.body.email + " pass:" + req.body.password });
                }
                return res.json({ message: 'user not logged in', data: "email:" + req.body.email + " pass:" + req.body.password });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
module.exports = Update;
