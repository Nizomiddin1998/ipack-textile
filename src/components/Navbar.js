import  {Link} from 'react-router-dom'

function Navbar(props) {
    return (
            <div className={' Navbar bg-dark'}>
                <div className={'navbar container text-white'}>
                    <ul>
                        <li><Link to={'/'}>Chiqim</Link></li>
                        <li><Link to={'/kirim'}>Kirim</Link></li>
                        <li><Link to={'/kassa'}>Kassa</Link></li>
                    </ul>
                </div>
        </div>
    );
}

export default Navbar;