import {myDb} from '../postgres'
import { Request, Response } from 'express';

class Update extends myDb {
    
      async handler(req: Request, res: Response) {
        try {
          console.log(req.cookies.token)
          if (req.cookies.token.id) {
            const update = await this.pool.query(`
            UPDATE accounts SET email = $1,
            password = $2
            WHERE id = $3 RETURNING id;
              `, [
              req.body.email, 
              req.body.password,
              req.cookies.token.id

            ]);
            
            return res.json({ message: 'user changed successfully', data: "email:" + req.body.email + " pass:" + req.body.password })
          }

          return res.json({ message: 'user not logged in', data: "email:" + req.body.email + " pass:" + req.body.password })   
          
        } catch (error) {
          console.error(error);
        }
      }
    }
    
    module.exports = Update;