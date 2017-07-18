var modal = document.getElementById('myModal');
var ads_blocker_div = document.getElementsByClassName( "ad-blocker-div" )[0];
var close = document.getElementsByClassName("close")[0];

 
ads_blocker_div.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
      modal.style.display = "none";  
    } 
}


