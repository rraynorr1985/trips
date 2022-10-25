import { Link } from 'react-router-dom';


export default function TripList () {


    return (
        <div className="tripList-container">
            <div>
                <h1>Trip List</h1>
            </div>

            <Link to="/newtrip">New Trip</Link>
        </div>
        

    );
}

