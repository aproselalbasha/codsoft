var show=document.getElementById("display")

function display(val)
{
show.value+=val
}
function clr()
{
    show.value=""
   
}
function calculate()
{
    try{
        show.value=eval(show.value)

    }
    catch(err)
    {
        alert("invalid")
    }

}

function del()
{
    show.value=show.value.slice(0,-1)
}