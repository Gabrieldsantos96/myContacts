import './styles.css';
import Close from '../../assets/Close.png';
import useData from '../../hooks/useData';

function Add () {
  const {
    handleChangeInput,
    handleClose,
    form,
    addKontact,} = useData();
  return (
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
              type="tel"
              value={form.phone}
              onChange={handleChangeInput}
              required
              />

              <button type='button' onClick={() => addKontact()}>CADASTRAR</button>
              <button type='button' onClick={handleClose}>CANCELAR</button>
                      </form>
  
      </div>
  </div>
    
  )
}

export default Add;
