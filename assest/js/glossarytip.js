

var timeout_reference;
var closeTipId;

var glossaryBackCover;
var glossaryBackCoverTimeoutReference;


function showTip(e, tipId) {
	// Close any open glossary tips that haven't timed out yet (ex. quickly roll from one tip to another)
	clearTimeout(timeout_reference);
	var divs = document.getElementsByTagName('div');
	for (x=0; x<divs.length; x++) {
			if (divs[x].className == 'glossarytip') {divs[x].style.visibility = 'hidden';}
	}

	// Find position of the glossary link that we moused over
	var x, xie55 = 0;
	var y, yie55 = 0;
	var offsetX = 3;
	var offsetY = 3;

	if ( navigator.userAgent.toLowerCase().indexOf("msie 5.5")!=-1 ) {
		xie55 = document.body.scrollLeft;
		yie55 = document.body.scrollTop;
	}

	if (e.pageX || e.pageY) {
		x = e.pageX + offsetX;
		y = e.pageY + offsetY;
	} else if (e.clientX || e.clientY) {
		x = e.clientX + offsetX + document.documentElement.scrollLeft + xie55;
		y = e.clientY + offsetY + document.documentElement.scrollTop + yie55;
	}


	var tipObj = document.getElementById(tipId);
	var viewportWidth  = getViewportWidth();
	var viewportHeight = getViewportHeight();


	/*  if the current page is a div scroller window and the page has been scrolled in IE, recalculate 
		viewport height and offsets for tip to be positioned correctly  */
	var ieDivScroller;
	if (document.getElementById('iecontentscroller')) {
		ieDivScroller = document.getElementById('iecontentscroller');
		if (ieDivScroller.scrollTop > 0) {
			y += parseFloat(ieDivScroller.scrollTop);
			viewportHeight = parseFloat(document.getElementById('contentarea').offsetHeight);
		}
	}


	//test to see if tip will be positioned off screen horizontally
	if ((x + offsetX + tipObj.offsetWidth) > viewportWidth + document.documentElement.scrollLeft + xie55 ) {
		var tipshown = viewportWidth + document.documentElement.scrollLeft + xie55 - x;
		var overlap = tipObj.offsetWidth - tipshown;
		x = x - overlap - offsetX;
	}


	//test to see if tip will be positioned off screen vertically
	if ((y + offsetY + tipObj.offsetHeight) > viewportHeight + document.documentElement.scrollTop + yie55 ) {
		var tipshown = viewportHeight + document.documentElement.scrollTop + yie55 - y;
		var overlap = tipObj.offsetHeight - tipshown;
		y = y - overlap - offsetY;
	}

	//set new values for tip
	tipObj.style.left = x + "px";
	tipObj.style.top  = y + "px";
	tipObj.style.zIndex = 30000; //Netscape fix when shown infront of a drop down
	tipObj.style.visibility = "visible";
			
	//Only activate IFRAME as a background if running on Microsoft IE
	//Since the command navigator.appName in Opera also returns 'Microsoft Internet Explorer', 
	//we have to check navigator.userAgent to see is this really MSIE or Opera
	//Note: IFRAME causes problem in Opera, so this should only be turn on for IE
	if(glossaryBackCover == null && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Opera") == -1){
		glossaryBackCover = document.createElement("IFRAME");
		glossaryBackCover.src = "javascript:true";//stop IE from seeing Iframe as unsecure content
		glossaryBackCover.className = "glossaryBackCover";
		glossaryBackCover.style.position="absolute";
		glossaryBackCover.style.zIndex=29999;
		//document.body.insertBefore(glossaryBackCover);
		//document.body.appendChild(glossaryBackCover);
		document.getElementById('contentarea').appendChild(glossaryBackCover);//Needed in contentarea for tip to work in div scroller window
	}
	
	if(glossaryBackCover != null){
		clearTimeout(glossaryBackCoverTimeoutReference);		
		glossaryBackCover.style.left = x + "px";
		glossaryBackCover.style.top = y + "px";
		glossaryBackCover.style.width = tipObj.offsetWidth;
		glossaryBackCover.style.height = tipObj.offsetHeight;
		glossaryBackCover.style.visibility = "visible";
	}
}

function hoverTip(tipId) {
	clearTimeout(timeout_reference);
	document.getElementById(tipId).style.visibility = "visible";

	if(glossaryBackCover != null){
		clearTimeout(glossaryBackCoverTimeoutReference);
		glossaryBackCover.style.visibility = "visible";
	}
}

function hideTip(tipId) {
	closeTipId = tipId;
	timeout_reference = setTimeout("closeTip(closeTipId)",600);
}

function closeTip(tipId) {
	if (glossaryBackCover != null) {
		glossaryBackCoverTimeoutReference = setTimeout('glossaryBackCover.style.visibility = "hidden";', 15);
	}
	document.getElementById(tipId).style.visibility = "hidden";
}



function getViewportWidth() {
	var width = 0;
	if (document.documentElement && document.documentElement.clientWidth) {
		width = document.documentElement.clientWidth;
	} else if (document.body && document.body.clientWidth) {
		width = document.body.clientWidth;
	} else if (window.innerWidth) {
		width = window.innerWidth - 18;
	}
	return width;
}

function getViewportHeight () {
	var height = 0;
	if (document.documentElement && document.documentElement.clientHeight && !window.opera) {
		height = document.documentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		height = document.body.clientHeight;
	} else if (window.innerHeight) {
		height = window.innerHeight - 18;
	}
	return height;
}

