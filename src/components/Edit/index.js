import './styles.css';
import Close from '../../assets/Close.png';
import useData from '../../hooks/useData';

function Edit () {
  const {
    currentKontact,
    handleChangeInput,
    handleClose,
    form,setForm,
    putKontact,
    } = useData();
  return (
    
      <div className=" container modal">
      <div className="card_modal">
        <img
         src={Close}
         onClick={handleClose}/>
        <form className='form_edit_kontact'>
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
              type="tel"
              value={form.phone}
              onChange={handleChangeInput}
              required
              />

              <button type='button' onClick={() => putKontact(currentKontact.id)}>SALVAR</button>
              <button type='button' onClick={() => setForm({name:'',email:'',password:'',phone: ''})}>LIMPAR</button>
          </form>
  
      </div>
  </div>
    )
}

export default Edit;
