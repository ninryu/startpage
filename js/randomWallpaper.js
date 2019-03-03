var wallpaperNumber = Math.floor(Math.random() * 1)

document.body.style.backgroundImage = "url('resources/0.png')"

var colors = [
    ["#F3F0F2", "#CCBFB9", "#6d6eac", "#594a83", "#4D4466"],

]

var bw = [
    "black",

]

let root = document.documentElement
root.style.setProperty("--color1", colors[wallpaperNumber][0])
root.style.setProperty("--color2", colors[wallpaperNumber][1])
root.style.setProperty("--color3", colors[wallpaperNumber][2])
root.style.setProperty("--color4", colors[wallpaperNumber][3])
root.style.setProperty("--bordercolor", colors[wallpaperNumber][4])
root.style.setProperty("--othercolor", bw[wallpaperNumber])
