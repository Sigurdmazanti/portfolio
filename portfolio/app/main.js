"use strict";

// Project tabs
const tabs = document.querySelectorAll(".tabs ul li"); // Each individual tab/<li> from the <ul> - array
const tabWraps = document.querySelectorAll(".tab_wrap"); // Each individual tab wrapper

// forEach loop through the tabs array to remove or add the active class to a <li> element
tabs.forEach(function(tab, tabIndex){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

// forEach loop through the tabWraps array to display or not display content
		tabWraps.forEach(function(content, contentIndex){
			if(contentIndex == tabIndex){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})
	})
})

