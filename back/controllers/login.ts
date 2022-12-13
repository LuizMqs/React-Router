import { myDb } from '../postgres'
import { Request, Response } from 'express';

class Login extends myDb {

    async handler(req: Request, res: Response) {
        try {

            const email = await this.pool.query(`
          SELECT id FROM accounts WHERE email = $1 AND password = $2;
            `, [req.body.email,
            req.body.password]);

            if (email.rows.length == 0) {
                res.clearCookie('token').json({ message: 'User not found'})
            } else {
                console.log(email.rows[0])
                res.cookie('token', email.rows[0], { maxAge: 900000, httpOnly: true }).json({ message: 'user entered successfully', data: "email:" + req.body.email + " pass:" + req.body.password })
            }

        }
        catch (error) {
            console.error(error);
        }
    }
}

module.exports = Login;