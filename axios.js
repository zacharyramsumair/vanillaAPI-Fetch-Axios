let getZenButton = document.querySelector(".getZenQuote");
let zenQuote = document.querySelector(".zenQuote");

let getZenQuote = () => {
    let random = Math.floor(Math.random() * (49 - 0)) + 0;

    axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/quotes'))
    // axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
    .then((response) => {
        // console.log(response)
        // console.log(JSON.parse(response.data.contents))
        // console.log(JSON.parse(response.data.contents)[0].q)
    // handle success
    zenQuote.style.display = "block";
    zenQuote.textContent = `${JSON.parse(response.data.contents)[random].q} 
    - ${JSON.parse(response.data.contents)[random].a} `;  })
  .catch( (error) => {
    // handle error
    console.log(error);
  })
  .finally( () => {
    // always executed
    console.log("quote received")
  });


};

getZenButton.addEventListener("click", getZenQuote);

