import { useRef, useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import {getItem,setItem} from '../utils/localStorage';

export function useUserData(){
    const navigate = useNavigate();
    const [add,setAdd] = useState(false);
    const [kontacts,setKontacts] = useState([]);
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);
    const nameRef = useRef("??????");
    const [currentKontact,setCurrentKontact] = useState({
      nn:'inicio',
      id:''
    })
    const [form,setForm] = useState({
      name:'',
      email:'',
      password:'',
      phone: ''
  })


    function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value});
    }
  
    function handleClose() {
    setEdit(false);
    setAdd(false);
    setForm({
    name:'',
    email:'',
    password:'',
    phone: ''
  })
    }

      async function loadData() {
        const token = getItem('token');
        try {
          const response = await api.get('/contatos',{
            headers: {
              Authorization : `Bearer ${token}`
            }
          });       
          const { data } = response;
          
          setKontacts(data);

        } catch(error) {
          console.log(error);
         }
      } 

      async function addKontact() {
        const token = getItem('token');
        try {
          console.log(form);
          const response = await api.post('/contatos',{
           nome: form.name,
           email: form.email,
           telefone: form.phone,

        },{
            headers: {
              Authorization : `Bearer ${token}`
            },
          });       
          const { data } = response;
        
          const localAux = [...kontacts];
          localAux.push(data[0]);

          setKontacts(localAux);

          setTimeout(() => {
            setAdd(false);
          }, 1000);

        } catch (error) {
          console.log(error);
        }
      }
      
      async function editKontact(id,nome) {
        const localAux = {
          nn: nome,
          id: id,
        };
        setCurrentKontact(localAux);
  
        setEdit(true);

        const token = getItem('token');
        try {
          const response = await api.get(`/contatos/${id}`,{
            headers: {
              Authorization : `Bearer ${token}`
            },
          });       
          const { data : kontact} = response;
          console.log(currentKontact);
          console.log(kontact);
          setForm({
        name : kontact.nome,
        email: kontact.email,
        phone: kontact.telefone,
          })

        } catch (error) {
          console.log(error);
        }
      }
      async function putKontact (id) {
        const token = getItem('token');
        try {
          console.log(id);
          const response = await api.put(`/contatos/${id}`,{
            nome: form.name,
           email: form.email,
           telefone: form.phone,
          },{
            headers: {
              Authorization : `Bearer ${token}`
            },
          });  
          const localAux = [...kontacts];

          const index = localAux.findIndex((kontact) => {
            return kontact.id === id;
          })

          localAux[index].nome = form.name;
          localAux[index].email = form.email;
          localAux[index].telefone = form.phone;

         setKontacts(localAux);
      
         setTimeout(() => {
          setEdit(false);
        }, 1000);

        } catch (error) {
          console.log(error);
          }
      }

      async function confirmDeleteKontact(id) {
        const token = getItem('token');
        try {
         
          const response = await api.delete(`/contatos/${id}`,{
            headers: {
              Authorization : `Bearer ${token}`
            },
          });       
        
        const localAux = [...kontacts];

        const kontactDeleted = localAux.findIndex((kontact) => kontact.id === id);

        localAux.splice(kontactDeleted,1);
  
        setKontacts(localAux);

        setTimeout(() => {
          setDel(false);
        }, 1000);

        } catch (error) {
          console.log(error);
        }
      }

      async function deleteKontact(id,nome){
        setDel(true);
        const localAux = {
          nn:nome,
          id:id,
          
        };
        setCurrentKontact(localAux);

        


      }

      async function handleSubmit(e) {
        e.preventDefault();
        if(!form.name) {
          try {
            const response = await api.post('/login',
            {
              email: form.email,
              senha: form.password
            })

            const { token } = response.data;
            
            setItem('token',token);

            setForm({
              name:'',
              email:'',
              password:''
            })

            navigate('/');
            
            
          } catch(error) {
            alert('Email ou senha invalidos, por favor tente novamente!');
          }
        } else {
          try {
            const response = await api.post('/usuarios',
            {
              nome: form.name,
              email: form.email,
              senha: form.password
            })

            setForm({
              name:'',
              email:'',
              password:''
            })

            navigate('/sign-in');

          } catch(error)  {
            alert('Houve algum erro com cadastro, por favor tente novamente!');
          }
        }
      }

    return {
        navigate,
        form,setForm,
        add,setAdd,
        edit,setEdit,
        del,setDel,
        kontacts,setKontacts, 
        currentKontact,setCurrentKontact,
        handleSubmit,
        handleChangeInput,handleClose,
        loadData,
        addKontact,deleteKontact,
        editKontact,
        putKontact,
        confirmDeleteKontact,
        nameRef
    }
}
