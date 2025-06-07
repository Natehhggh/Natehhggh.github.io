
const colorsBG = ["#fafafa", "#181C14"]
const colorsText = ["#000000", "#ffffff"]


function UpdateTheme(){
    var index = document.getElementById("theme_id").value;
    document.body.style.backgroundColor = colorsBG[index];
    document.body.style.color = colorsText[index];
}

UpdateTheme()
