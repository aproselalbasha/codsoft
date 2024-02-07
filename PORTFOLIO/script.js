var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-content");
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link")
    }
    for(tabcontents of tabcontent)
    {
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}
 var sidemenu=document.getElementById("sidemenu")
 function openmenu(){
    sidemenu.style.right="0";
 }
 function closemenu(){
    sidemenu.style.right="-200px";
 }
 const scrol=document.querySelector('.scrol');
 window.addEventListener('scroll',()=>{
    if(window.screenY<500)
    {
        scrol.style.display="flex"
    }
    else{
        scrol.style.display="none"
    }
 })