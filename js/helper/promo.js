$(document).ready(function(){
	var btns = document.querySelectorAll('.btn');
	var paginationWrapper = document.querySelector('.pagination-wrapper');
	var bigDotContainer = document.querySelector('.big-dot-container');
	var littleDot = document.querySelector('.little-dot');

	$("#prevInfo").click(function(){
		infoBtnClick("left");
	});
	$("#nextInfo").click(function(){
		infoBtnClick("right");
	});
	
	function infoBtnClick(dest) {
		if(dest == "left") {
			paginationWrapper.classList.add('transition-prev');
		} else {
			paginationWrapper.classList.add('transition-next');
		}
		var timeout = setTimeout(cleanClasses, 500);
	}
	
	function cleanClasses() {
		if(paginationWrapper.classList.contains('transition-next')) {
			paginationWrapper.classList.remove('transition-next')
		} else if(paginationWrapper.classList.contains('transition-prev')) {
			paginationWrapper.classList.remove('transition-prev')
		}
	}
});