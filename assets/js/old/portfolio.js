window.addEventListener('load', function() {

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 20
	});
	
	$(window).on('resize', function(){
		console.log('resizing')
		$grid.masonry();
	})


    //var articles = document.querySelectorAll("article");
    var articles = document.querySelectorAll(".grid-item");
    articles.forEach(function(a) {
    	console.log(a);
    	title = a.querySelector(".card-title")
    	card = a.querySelector(".card")
    	if (title) {
    		console.log('article height: ' + a.clientHeight);
    		console.log('card height: ' + card.clientHeight);
    		console.log('title height: ' + title.clientHeight);

    		card.style.transform = "translateY(" + ((a.clientHeight-title.clientHeight) / card.clientHeight)*100 + "%)" 
    		a.onmouseover = function() {
    			card.style.transform = "translateY(0)" 
    		}
    		/*
    		scrim = a.querySelector(".scrim-gradient")
    		var aHeight = a.clientHeight;
    		var titleHeight = title.clientHeight;
    		console.log(titleHeight)
    		console.log(titleHeight/aHeight)
    		pct = (100*titleHeight/aHeight)+'%'
    		console.log(pct)
    		scrim.style.background = "linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.3) "+ pct +", rgba(0,0,0,0))"
			*/
    	}
    })


})
