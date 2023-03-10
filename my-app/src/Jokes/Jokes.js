import React, { useEffect, useState } from "react";
import './Jokes.css';
import axios from "axios";
function Jokes() {

  const [joke, setJoke] = useState({ punchline: "", setup: "" , type: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
              const options = {
                method: 'GET',
                url: 'https://dad-jokes.p.rapidapi.com/random/joke',
                headers: {
                  'X-RapidAPI-Key': '6fd2752677mshcee0a98949e1890p1fdb9djsne95a62993bca',
                  'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data.body[0]);
                setJoke(response.data.body[0]);
              }).catch(function (error) {
                console.error(error);
              });
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="Jokes">
      <b>{joke.setup}</b><br/>
      {/* {joke.type}<br/> */}
      {joke.punchline}<br/>
    </div>
  );
}

export default Jokes;
