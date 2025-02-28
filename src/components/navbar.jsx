import { Link } from 'react-router'
import logo from '../../public/logo.jpeg'
Link

const  NavbarMenu=()=>(
  <>
    <nav className="navbar navbar-light bg-light rounded-3">
  <a className="navbar-brand d-flex" href="#">
    <img src={logo} width="60" height="50" className="d-inline-block align-top rounded-circle" alt="" />
    <div className='pt-2 font-weight-bolder'> Triple Immo X </div>
  </a>
</nav>
    </>
)

export default NavbarMenu