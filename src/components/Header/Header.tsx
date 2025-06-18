import '../../assets/styles/Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <div className="headers">
        <div>
          <Link to="/" className="logo"><b>Jobly</b></Link>
        </div>
        <div>
          <nav className="butt">
            <ul>
              <li>
                <Link to="/cards"><button className="logs"><b>For Recruiters</b></button></Link>
                <Link to="/cc" ><button className="sing"><b>Sign Up</b></button></Link>
                <button className="log"><b>Log in</b></button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;