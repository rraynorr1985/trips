import NavBar from "../components/NavBar";
import TripList from "../components/TripList/TripList";

export default function Home (props) {

    return (
       <div>     
        <section className="tripsList-Container">
          <TripList />
        </section>
      </div>
    );
  }