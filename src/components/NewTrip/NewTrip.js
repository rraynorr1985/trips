import { useState } from "react";

export default function Trip (props) {

    const [errorState, setErrorState] = useState('');
    
    const [formData, setFormData] = useState({
        tripname: '',
        days: '',
        note: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        
      }
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }

    return (
    <>
        <section>
            <h1>New Trip</h1>
            <form autoComplete="off">
            <label htmlFor='tripname'>Trip Name:</label>
                <input
                    type="text"
                    name="tripname"
                    value={formData.tripname}
                    required
                />
            <label htmlFor='days'>Days:</label>
                <input
                    type="number"
                    name="days"
                    value={formData.days}
                    required
                    />
            <label htmlFor='note'>Note:</label>
                <input
                    type="text"
                    name="note"
                    value={formData.note}
                    required
                />
            <button onClick={ () => ('/home')} type="submit">Create
            </button> 
            </form>
        </section>
    </>
    )
}