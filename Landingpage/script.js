var sidemenu=document.querySelector(".smallmenu-toggle")

function openside(){
    
    sidemenu.style.left="0";
}
function closeside(){
    sidemenu.style.left="-45%";
}
// product page
var productContainer=document.getElementById('product')
var search=document.getElementById('search');
var productList=productContainer.querySelectorAll('div')
search.addEventListener("keypress",(e)=>{
    var entervalue=e.target.value.toUpperCase();
   for(var count=0;count<productList.length;count++){
    var productname=productList[count].querySelector('p').textContent;
    if(productname.toUpperCase().indexOf(entervalue)<0)
    {
        productList[count].style.display="none"
    }
    else{
        productList[count].style.display="block"
    }

   }

})