// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

// When the user clicks on "OK", close the modal
document.getElementById("okButton").onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

// To make the modal draggable
dragElement(document.getElementById("modalContent"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown; // for touch
    } else {
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown; // for touch
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - (e.clientX || e.touches[0].clientX);
        pos2 = pos4 - (e.clientY || e.touches[0].clientY);
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

function showMetricInfo() {
    var selection = document.getElementById('metric-selection').value;
    var infoDiv = document.getElementById('metric-info');
    switch(selection) {
        case 'NPV':
            infoDiv.innerHTML = 'NPV Formula: ...'; // Add NPV formula here
            break;
        case 'ROI':
            infoDiv.innerHTML = 'ROI Formula: ...'; // Add ROI formula here
            break;
        case 'Payback':
            infoDiv.innerHTML = 'Payback Formula: ...'; // Add Payback formula here
            break;
        default:
            infoDiv.innerHTML = 'CBA Content: ...'; // Default content for CBA
    }
}

// Use addEventListener for window load
window.addEventListener('load', function() {
    document.getElementById("myModal").style.display = "block";
    showMetricInfo();
});
