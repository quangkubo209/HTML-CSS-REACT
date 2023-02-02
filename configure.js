// get add element which change color 
const themeList = document.getElementById("theme-list");

// get list of theme
const themeColor = document.getElementsByClassName("theme-color");

// console.log(themeColor) 

function ChangeTheme() {
    let colorNow = themeList.value;
    for (var value of themeColor) {
        // chang color of hr tag 
        if(value.innerHTML === ""){
            value.style.borderTopColor = colorNow;
        }
        value.style.color = colorNow;
    }
}

themeList.onchange = ChangeTheme;
