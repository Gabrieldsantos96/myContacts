import './styles.css';
import useData from '../../hooks/useData';
import { useEffect } from 'react';
import {getItem,setItem} from '../../utils/localStorage';
    
function Signin() {
    const { 
        navigate, 
        form,setForm,
         handleChangeInput,
         handleSubmit} = useData();  

         useEffect(() => {
            const token = getItem('token');
              
            if (token) {
              navigate('/')         
            }
          },[]);
  
    return (
        <div className='container container_signin'>
            <div className='signin_left'>

            </div>

            <div className='signin_right'>
                    <div className='container_right'>
                        <div className='items_start'>
                            <span>Bem vindo</span>
                            <h2>Faça o login com sua conta</h2>
                        </div>

                     
                            <form className='form_sign_in'
                            onSubmit={handleSubmit}>
                                <input
                                name='email'
                                placeholder='E-mail'
                                type="email"
                                value={form.email}
                                onChange={handleChangeInput}
                                required
                                />
       
                                <input
                                name='password'
                                placeholder='Senha'
                                type="password"
                                value={form.password}
                                onChange={handleChangeInput}
                                required
                                />
        
                                <button className='btn'>LOGIN</button>
        
                            </form> 
                        
                        <div className='items_center'> 
                        <span>Não tem cadastro?</span>
                        
                        <span
                        onClick={() => navigate('/sign-up')}> Clique aqui!</span></div>
                    </div>
            </div>
        </div>
    )
}

export default Signin