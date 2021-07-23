const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

const rainbow = async () => {
    await delayedColorChange('#AEE1E1', 3000)
    await delayedColorChange('#D3E0DC', 3000)
    await delayedColorChange('#ECE2E1', 3000)
    await delayedColorChange('#FCD1D1', 3000)
    await delayedColorChange('#00EAD3', 3000)
}

rainbow();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}