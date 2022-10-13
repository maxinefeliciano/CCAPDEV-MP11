const realFileBtn = document.getElementById("real-file");
const uploadBox = document.getElementById("upload-box");
const thumbnailTxt = document.getElementById("upload-text");
const uploadIcon = document.getElementById("upload-icon");

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