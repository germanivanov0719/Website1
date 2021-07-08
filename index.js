let darkEnabled = false;
darkModeToggle()

function darkModeToggle() {
    console.log("Previous dark: ", darkEnabled, "\nSwitching the Mode...");
    darkEnabled = !darkEnabled;
    colors = ["#f0f0f0", "#202020"];
    textShadow = ["#555555", '#aaaaaa'];
    if (!darkEnabled) {
        colors.reverse();

        document.getElementById("darkModeToggle").textContent = "Switch to Dark Mode";
    }
    else {
        document.getElementById("darkModeToggle").textContent = "Switch to Light Mode";
    }

    let x = 0; //Temp storage


    //Background
    document.getElementById("body").style.backgroundColor = colors[1];
    //All texts
    let texts = document.getElementsByClassName("text");
    while (x < texts.length){
        texts[x].style.color = colors[0];
        texts[x].style.textShadow = textShadow[0];
        x++;
    } 
    x = 0
    //buttons
    document.getElementById("darkModeToggle").style.borderColor = colors[0];
    //hr
    document.getElementById("hr").style.backgroundColor = colors[0];
    
};