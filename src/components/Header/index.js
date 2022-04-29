import './styles.css';
import Exit from '../../assets/Vector.png';
import useData from '../../hooks/useData';
import { clearAll } from '../../utils/localStorage';

function Header() {
    const { navigate } = useData();
    return (
        <div className='header'>
            <span>KONTACTS</span>
            <img src={Exit} 
             onClick={() => (
                clearAll(),
                navigate('/login')
               )}
               alt=""></img>
        </div>
            
    )
}

export default Header;