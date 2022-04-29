import { useEffect } from 'react';
import './styles.css';
import useData from '../../hooks/useData';
import {getItem,setItem} from '../../utils/localStorage';

function Signup() {

  const { 
    navigate, 
    form,
     setForm,
     handleChangeInput,
     handleSubmit} = useData();  

    useEffect(() => {
        const token = getItem('token');
          
        if (token) {
          navigate('/')
        }
      },[]);
      
    return (
     
     <div className="container container_signup">
       <div className="signup_left">
         <div className="container_left">
      
                              

                            <form className='form_sign_up'
                            onSubmit={handleSubmit}
                            >
                              <h2>Cadastre-se</h2>

                                <input
                                name='name'
                                placeholder='Nome'
                                type='nome'
                                value={form.name}
                                onChange={handleChangeInput}
                                required
                                />

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
        
                                <button>CADASTRAR</button>
                                <button >CANCELAR</button>
                                
        
                            </form> 
                        
                        <div className='items_center'> 
                        <span>Já tem cadastro?</span>
                        
                        <span
                        onClick={() => navigate('/')}> Clique aqui!</span></div>
         </div>

       </div>
       <div className="signup_right">
         
       </div>
     </div>
    )
}


export default Signup;