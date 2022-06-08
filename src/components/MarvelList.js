import axios from 'axios'
import React from 'react'


const MarvelList = () => {

      async  function addMovieHandler() {
            const options = {
                        method: 'GET',
                        url: 'https://marvelstefan-skliarovv1.p.rapidapi.com/getSeries',
                        headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Host': 'Marvelstefan-skliarovV1.p.rapidapi.com',
                        'X-RapidAPI-Key': 'c15b689e95msh1d636f110ea0001p11c325jsndbd6155c0d06'
                        }
                  };
                  axios.request(options).then(function (response) {
                        console.log(response.data);
                  }).catch(function (error) {
                        console.error(error);
                  });
        }


  return (
    <div>{addMovieHandler}</div>
  )
}


export default MarvelList