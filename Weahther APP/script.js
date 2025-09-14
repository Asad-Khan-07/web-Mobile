let inp=document.getElementById("value");
let btn=document.getElementsByClassName("btn")[0];
let item=document.getElementsByClassName("two")[0]
let child=document.getElementsByTagName("span");
let city=document.getElementsByClassName("city")[0];
let settingimg=document.getElementsByClassName("settingimg")[0];
let weatherDesc=document.getElementsByClassName("weatherDesc")[0];
let check=document.getElementById("Checkweather")
let submain=document.getElementsByClassName("sub-main")[0];
let intromain=document.getElementsByClassName("intro-main")[0];

check.addEventListener("click",(e)=>{
    intromain.classList.add("intro-main-visible")
    submain.classList.add("sub-main-visible")
   
})


async function stater() {
    try {    
    let res=await fetch(`https://wttr.in/Pakistan,Hyderabad,PK?format=j1`)
    let final=await res.json()
    city.textContent=final.nearest_area[0].areaName[0].value
    child[0].textContent=final.current_condition[0].temp_C+"°C";
    child[1].textContent=final.current_condition[0].FeelsLikeC+"°C";  
    child[2].textContent=final.current_condition[0].humidity+"%";
    child[3].textContent=final.current_condition[0].cloudcover+"%";
    child[4].textContent=final.current_condition[0].windspeedKmph+"Kmph";
    child[5].textContent=final.current_condition[0].visibility+"%";
    weatherDesc.textContent=final.current_condition[0].weatherDesc[0].value;
    let atmospher=final.current_condition[0].weatherDesc[0].value.toLowerCase()
    console.log(atmospher);    
    if (atmospher=="partly cloudy")settingimg.setAttribute("src","Partly cloudly.png")
    if (atmospher=="Mist")settingimg.setAttribute("src","Mist.png")
    if (final.current_condition[0].weatherDesc[0].value=="clear")settingimg.setAttribute("src","Clear weahter.png")

} catch (error) {
    city.textContent="--";
    child[0].textContent="--";
    child[1].textContent="--";  
    child[2].textContent="--";
    child[3].textContent="--";
    child[4].textContent="--";
    child[5].textContent="--";
    console.log(error);
}
}
stater()

btn.addEventListener("click",async()=>{   
    try {
        if (inp.value==="") {
            alert("Enter Your City")
        } else {   
            let res=await fetch(`https://wttr.in/${inp.value}?format=j1`)
            let final=await res.json()
            city.textContent=final.nearest_area[0].areaName[0].value
            child[0].textContent=final.current_condition[0].temp_C+"°C";
            child[1].textContent=final.current_condition[0].FeelsLikeC+"°C";  
            child[2].textContent=final.current_condition[0].humidity+"%";
            child[3].textContent=final.current_condition[0].cloudcover+"%";
            child[4].textContent=final.current_condition[0].windspeedKmph+"Kmph";
            child[5].textContent=final.current_condition[0].visibility+"%";
            weatherDesc.textContent=final.current_condition[0].weatherDesc[0].value;
            let atmospher=final.current_condition[0].weatherDesc[0].value.toLowerCase()
            console.log(atmospher);
            if (atmospher=="partly cloudy")settingimg.setAttribute("src","Partly cloudly.png")
            if (atmospher=="mist")settingimg.setAttribute("src","Mist.png")
            if (atmospher=="clear")settingimg.setAttribute("src","Clear weahter.png")
            if (atmospher=="sunny")settingimg.setAttribute("src","sunny.png")
            if (atmospher=="cloudy")settingimg.setAttribute("src","cloudy.png")
            if (atmospher=="overcast")settingimg.setAttribute("src","overcast.png")
            if (atmospher=="rain")settingimg.setAttribute("src","rain.png")
            if (atmospher=="shower")settingimg.setAttribute("src","shower.png")
            if (atmospher=="drizzle")settingimg.setAttribute("src","drizzle.png")
            if (atmospher=="thunderstrom")settingimg.setAttribute("src","thunderstrom.png")
            if (atmospher=="snow")settingimg.setAttribute("src","snow.png")
            if (atmospher=="sleet")settingimg.setAttribute("src","sleet.png")
            if (atmospher=="freezing rain")settingimg.setAttribute("src","sleet.png")
            if (atmospher=="blizzard")settingimg.setAttribute("src","blizzard.png")
            if (atmospher=="fog")settingimg.setAttribute("src","fog.png")
            if (atmospher=="haze")settingimg.setAttribute("src","haze.png")
            if (atmospher=="wind")settingimg.setAttribute("src","wind_4978510.png")
            if (atmospher=="smoke")settingimg.setAttribute("src","smoke.png")
            if (atmospher=="sandstrome")settingimg.setAttribute("src","sandstrome.png")
            if (atmospher=="tornado")settingimg.setAttribute("src","tornado.png")
            if (atmospher=="volcanic ash")settingimg.setAttribute("src","volcano.png")
            if (atmospher=="hot")settingimg.setAttribute("src","hot.png")
            if (atmospher=="cold")settingimg.setAttribute("src","cold.png")
            if (atmospher=="humid")settingimg.setAttribute("src","humidity_14322061.png")
        }
    } catch (error) {
      alert("Something went wrong")  
      console.log(error);
      
    }    
})