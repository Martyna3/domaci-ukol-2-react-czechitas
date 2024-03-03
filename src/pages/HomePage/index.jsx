import { useEffect } from 'react';
import './style.css';
import { useState } from 'react';


export const HomePage = () => {
  const [datetime, setDatetime] = useState("")
  const [timezone, setTimezone] = useState("Europe/Prague")
  
  useEffect(()=>{
    const fetchDatetime = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      setDatetime(data.datetime);
    };
      fetchDatetime();
    }, [timezone])
    
    
  return (
    <>
      <p>Hodnota datetime pro vybranou zonu: {datetime}</p>
      <p>Vyberte zonu:</p>
        <select onChange={(event => setTimezone(event.target.value))}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
    </>
  );
};

