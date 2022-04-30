import './styles.css';
import Edit from '../../assets/Icon-Pencil.png';
import Delete from '../../assets/Group.png';
import Modal from '../Modal';
import useData from '../../hooks/useData';
import  { useEffect } from 'react';


function Main() {
    const { 
       setAdd,
        kontacts,
         loadData,deleteKontact ,editKontact} = useData();  

         useEffect(() => {
    
            loadData();
          },[]);

  
    return (
        
    <div className="main">
        
        <div className="kontacts">
        
            <button className='btn add_button'
            onClick={() => setAdd(true)}>ADICIONAR</button>

            <div className='kontacts_bar'>
               <h5>Nome</h5>
               <h5>Email</h5>
               <h5>Telefone</h5>
            </div>
            <div className="all_kontacts">

                {  
                kontacts.map((kontact,index) => (
              < div  key={index} className='kontact'
                   >
                  <span>{kontact.nome}</span>
                    <span>{kontact.email}</span>
                    <span>{kontact.telefone}</span>
                    <div className="icons">
                    <img 
                    src={Edit} 
                    onClick={() => editKontact(kontact.id,kontact.nome)}
                    alt=""/>
                    <img 
                    src={Delete} 
                    onClick={() => deleteKontact(kontact.id,kontact.nome)}
                    alt=""/>  
                    </div>
             </div>
              ))

                }

             </div>
        </div>
        <Modal/>
    </div>

    )
}

export default Main;