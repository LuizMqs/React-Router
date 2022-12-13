import { useContext, useState } from 'react';
import Modal from 'react-modal';
import Login from './Login'
import SignUp from './SignUp'
import Update from './Update'
import Title from '../styles'
import Button from '@mui/material/Button';
import MyContext from '../context/MyContext';

Modal.setAppElement('#root')

function Form() {
    const {user, setUser} = useContext(MyContext)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPass] = useState()

    function HandleOpenModal() {
        setIsOpen(true)
      }
    
      function handleCloseModal() {
        setIsOpen(false)
      }

      function signup() {
        HandleOpenModal()
        SignUp(email, password, setUser)
      }

      function login() {
        HandleOpenModal()
        Login(email, password, setUser)
      }

      function update() {
        HandleOpenModal()
        Update(email, password, setUser)
      }

      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          rigth: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        } 
      }

    return (
        <form>
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor="password">Senha:</label><br />
            <input type="text" id="password" name="password" onChange={(e) => setPass(e.target.value)} /><br /> <br></br>

            <Button variant="contained" onClick={signup}>Cadastrar</Button> <br></br> <br></br>
            <Button variant="contained" onClick={login}>Login</Button> <br></br> <br></br>
            <Button variant="contained" onClick={update}>Editar</Button> 
            
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
              <button className="CloseButtomModal" onClick={handleCloseModal}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png" alt="close" height="20px"></img></button>
              <Title>{user? JSON.stringify(user.message):""}</Title>
            </Modal>
        </form>
    )
}

export default Form;