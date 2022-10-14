const realFileBtn = document.getElementById("real-file");
const uploadBox = document.getElementById("upload-box");
const thumbnailTxt = document.getElementById("upload-text");
const uploadIcon = document.getElementById("upload-icon");

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

// Virtually clicks the real-file button
uploadBox.addEventListener("click", () => {
    realFileBtn.click();
});

// Display File Name when a file is selected
realFileBtn.onchange = ({target}) => {
    let file = target.files[0];
  
    if (file) {
        let fileName = file.name;
        
        thumbnailTxt.innerHTML = fileName; 
        thumbnailTxt.style.fontWeight="bold";
        uploadIcon.src="images/check-icon.png";
    } 
}