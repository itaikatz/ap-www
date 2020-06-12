window.addEventListener('load', function() {
    var articles = document.querySelectorAll("article");
    articles.forEach(function(a) {
    	console.log(a);
    	title = a.querySelector(".title2")
    	if (title) {
    		scrim = a.querySelector(".scrim-gradient")
    		var aHeight = a.clientHeight;
    		var titleHeight = title.clientHeight;
    		console.log(titleHeight)
    		console.log(titleHeight/aHeight)
    		pct = (100*titleHeight/aHeight)+'%'
    		console.log(pct)
    		scrim.style.background = "linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.3) "+ pct +", rgba(0,0,0,0))"

    	}
    })
})
