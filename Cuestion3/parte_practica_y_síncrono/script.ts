fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&size=medium&maxR=1&t=Wisdom", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "healthruwords.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});