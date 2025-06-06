import '../../assets/styles/Header.css'

function Header() {
  return (
    <header>
      <div className="headers">
        <div>
          <a href="#" className="logo"><b>Jobly</b></a>
        </div>
        <div>
          <nav className="butt">
            <ul>
              <li>
                <button className="logs"><b>For Recruiters</b></button>
                <button className="sing"><b>Sign Up</b></button>
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