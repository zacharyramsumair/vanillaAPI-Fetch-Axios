let getStoicButton = document.querySelector(".getStoicQuote");
let stoicQuote = document.querySelector(".stoicQuote");

let getStoicQuote = () => {
	fetch("https://api.themotivate365.com/stoic-quote")
		.then((response) => response.json())
		.then((data) => {
			stoicQuote.style.display = "block";
			stoicQuote.textContent = `${data.quote} 
            - ${data.author} `;
		});
};

getStoicButton.addEventListener("click", getStoicQuote);
