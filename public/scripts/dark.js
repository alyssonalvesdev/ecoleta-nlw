const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
//const logodark = document.getElementById("page-home").querySelector("svg").style.fill = "red";

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    titleColor: getStyle(html, "--title-color"),
    paragrafoColor: getStyle(html,"--paragrafo-color"),

}

const darkMode = {
    bg: "#333333",
    titleColor: "#ffffff",
    paragrafoColor: "#f5f5f5",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})