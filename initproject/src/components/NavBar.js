import logo from '../logo.svg';
function NavBar(){
    return (
        <nav className="Menu">
            <div className="Logo">
                <img src={logo} alt="img" />
            <span>MyFistProject In React</span>
            </div>
            <div className='opts'>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">sobre</a></li>
                    <li><a href="#">contato</a></li>
                    <li><a href="#">discord</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar