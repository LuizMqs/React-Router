import { myDb } from '../postgres'
import { Request, Response } from 'express';

class SignUp extends myDb {

  async handler(req: Request, res: Response) {
    try {

      const email = await this.pool.query(`
                INSERT INTO accounts(email,password) 
                VALUES($1, $2)
                RETURNING id;
            `, [
        req.body.email,
        req.body.password
      ]);

      if (email.rows.length == 0) {
        console.log("erro inesperado")
        res.json('Erro inesperado')
      } else {

        return res.json({ message: 'user registered successfully', data: "email:" + req.body.email + " pass:" + req.body.password })
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}

module.exports = SignUp;