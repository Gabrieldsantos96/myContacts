import './styles.css';
import useData from '../../hooks/useData';
import Add from '../Add';
import Edit from '../Edit';
import Delete from '../Delete';

function Modal () {
  const {add,edit,del
  
   } = useData();
  return (
    <>

{ add &&
<Add/>
}
{ edit &&
<Edit/>
}
{ del &&
<Delete/>
}

    </>
    
  
  )
}

export default Modal;
