const zoomElement = document.getElementById("zoom");
const display = document.getElementById("yValue");
const moreInfo = document.getElementById("moreInfo");
let zoom = 1;
const ZOOM_SPEED = .1;

document.addEventListener("wheel", function(e) {  

    
        if(e.deltaY > 0){    
            zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
        }else{    
            zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
        }
    
    display.innerText = e.deltaY;
    moreInfo.innerText = zoomElement.style.transform;

});