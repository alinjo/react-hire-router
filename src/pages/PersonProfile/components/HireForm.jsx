import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {

  const [wage, setWage] = useState(0)
  const navigate = useNavigate();
  const { setHiredPeople, person } = props;

 
  function handleSubmit(event) {
    event.preventDefault();
  
    const updatedPerson = { ...person, wage: wage > 0 ? wage : undefined };
    setHiredPeople((prevHiredList) => [...prevHiredList, updatedPerson]);
  
    navigate("/");
  }
  


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
