// num1
let body=document.getElementsByTagName("body")[0]
body.style.backgroundColor="silver"
body.style.border="10pc solid yellowgreen"

body.style.padding="10%"

// num2
let colors=document.getElementById("title") 
colors.style.color= "green"

// num3
let fruits=document.querySelectorAll("h3");
fruits.forEach(item=>
    item.innerHTML=item.textContent.toUpperCase()
    )

// num4
let moreFruit=document.createElement("li")
moreFruit.innerHTML="pineapples"
let fruits2=document.querySelector("#fruList").appendChild(moreFruit)

// num5
let moreveg=document.createElement("li")
moreveg.innerHTML="dodos"
let vegetable= document.querySelector("#vegList").appendChild(moreveg)

let color=document.getElementById("fruList")
color.style.color="green"
color.style.textShadow= " 2px 2px yellowgreen"
let color1=document.getElementById("vegList")
color1.style.color="green"
color1.style.textShadow= " 2px 2px yellowgreen"

let color2=document.getElementById("fruList2")
color2.style.color="maroon"
let color3=document.getElementById("vegList2")
color3.style.color="maroon"
let mycolor=document.getElementById("title2")
mycolor.style.color="red"

let heading=document.getElementById("heading")
heading.style.color="#fff"
heading.style.padding="20px"
heading.style.background= "linear-gradient(45.34deg, yellow 5.66%, green 94.35%)"

