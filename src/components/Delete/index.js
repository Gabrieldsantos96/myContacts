import './styles.css';
import useData from '../../hooks/useData';

function Delete () {
  const {
    currentKontact,
    setDel,
    confirmDeleteKontact,
    } = useData();
  return (
   

 <div className=" container modal">
      <div className="card_modal card_delete">
        <h2>Confirmar a exclusão?
        </h2>
        <span>Deseja excluir o contato de {currentKontact.nn}?</span>
        <button type='button' onClick={() => confirmDeleteKontact(currentKontact.id)}>EXCLUIR</button>
        <button type='button' onClick={() => setDel(false)}>CANCELAR</button>
        </div>
  </div>
  
  )
}

export default Delete;
