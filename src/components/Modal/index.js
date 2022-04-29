import './styles.css';
import Close from '../../assets/Close.png';
import useData from '../../hooks/useData';

function Modal () {
  const {
    currentKontact,
    del,setDel,
    edit,setEdit,
    add,setAdd,
    handleChangeInput,
    handleSubmit,handleClose,
    form,setForm,
    addKontact,
    putKontact,
    confirmDeleteKontact,
    nameRef} = useData();
  return (
    <> { add &&
      <div className=" container modal">
      <div className="card_modal">
        <img
         src={Close}
         onClick={handleClose}/>
        <form className='form_add_kontact'
        onSubmit={addKontact}>
           <h2>Novo Contato</h2>

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
              name='phone'
              placeholder='Telefone'
              type="phone"
              value={form.phone}
              onChange={handleChangeInput}
              required
              />

              <button type='button' onClick={() => addKontact()}>CADASTRAR</button>
              <button type='button' onClick={handleClose}>CANCELAR</button>
                      </form>
  
      </div>
  </div>
    }

{ edit &&
      <div className=" container modal">
      <div className="card_modal">
        <img
         src={Close}
         onClick={handleClose}/>
        <form className='form_add_kontact'
        onSubmit={addKontact}>
           <h2>Editar Contato</h2>

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
              name='phone'
              placeholder='Telefone'
              type="phone"
              value={form.phone}
              onChange={handleChangeInput}
              required
              />

              <button type='button' onClick={() => putKontact(currentKontact.id)}>SALVAR</button>
              <button type='button' onClick={() => setForm({name:'',email:'',password:'',phone: ''})}>LIMPAR</button>
                      </form>
  
      </div>
  </div>
    }

    { del &&

 <div className=" container modal">
      <div className="card_modal card_delete">
        <h2>Confirmar a exclusão?
        </h2>
        <span>Deseja excluir o contato de {currentKontact.nn}?</span>
        <button type='button' onClick={() => confirmDeleteKontact(currentKontact.id)}>EXCLUIR</button>
        <button type='button' onClick={() => setDel(false)}>CANCELAR</button>
        </div>
  </div>
    }
    

    

    </>


  )
}

export default Modal;
