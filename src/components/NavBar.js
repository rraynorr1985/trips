import { Link } from 'react-router-dom';

export default function NavBar (props) {

  return (

    <nav className='nav'>
    <div className='logo-container'>
      <img className='logo'src="/Images/logo.png" alt='logo'></img>
      <p>Best Trip</p>
    </div>
    <ul>
      <li>
        <Link to="/trips">Trips List</Link>
      </li>
      <li>
        <Link to="/newtrip">New Trip</Link>
      </li>
      <li>
        {`Hello ` + props?.user?.name}
      </li>
      <li>
        <button className='out' onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
        }}>Log Out</button>
      </li>
    </ul>
</nav>
    // <nav>
    //       <Link to="/orders">Order History</Link>
    //        &nbsp; 
    //      <Link to="/orders/new">New Order</Link>
    // </nav>
  //    <nav>
  //    <h3>{props?.user?.name}</h3>
  //    <Link to="/orders">Order History</Link>
  //    &nbsp; | &nbsp;
  //    <Link to="/orders/new">New Order</Link>
  //    <button onClick={() => {
  //      localStorage.removeItem('token');
  //      props.setUser(null);
  //    }}>Log Out!</button>
  //  </nav>
  )
}