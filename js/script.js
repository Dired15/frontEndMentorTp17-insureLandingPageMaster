
let navMenuButton=document.getElementById("navMenuButton");
let navMenuMobile=document.getElementById("navMenuMobile");
let section=[];
let navMenuOpen=false;

section.push(document.getElementById("introduction"));
section.push(document.getElementById("sellingPointSection"));
section.push(document.querySelector("footer"));

navMenuButton.addEventListener("click",openMenu);

function openMenu()
{
    let value;

    if(!navMenuOpen)
    {
        navMenuOpen=true;
        navMenuMobile.style.display="block";
    }
    else
    {
        navMenuOpen=false;
        navMenuMobile.style.display="none";
    }

    if(navMenuOpen)
    {
        value="none";
    }
    else
    {
        value="flex";
    }

    for(let i=0;i<3;i++)
    {
        section[i].style.display=value;
    }
}
