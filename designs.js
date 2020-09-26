// Select color input
// Select size input
var size = document.getElementById("sizePicker");
var table = document.getElementById("pixelCanvas");

// add a listener for when submit is hit
document.addEventListener('submit', function(prevent) {
    // use preventDefault to keep the page from reloading
    prevent.preventDefault()
    // clear any existing tables/colors before re-creating it
    table.innerHTML = '';
    // put height and width in the function so they pull back
    // the height and weight when the function is called and use
    // those values to add rows and columns w/ nested for loops
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    for (var i = 0; i < height; i++) {
        var row = document.createElement('tr');
        table.appendChild(row)
        for (var i2 = 0; i2 < width; i2++) {
            var column = document.createElement('td');
            row.appendChild(column);
        }
    }
})


// change the color of the cell if it is clicked on, use
// whatever color is currently in the color picker
document.getElementById('pixelCanvas').addEventListener('click', function (evt) {
    var color = document.getElementById("colorPicker").value;
    if (evt.target.nodeName.toLowerCase() === 'td') {  // ← verifies target is desired element
        evt.target.style.backgroundColor = color;
    }
});
