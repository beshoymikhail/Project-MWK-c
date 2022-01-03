var getloged=localStorage.getItem("loged");
localStorage.removeItem(null)
if(getloged!="false")
{

   // var url = location.search.split("&").splice('#')
    //var userName=url[0].split("=")[1].split('+')
    
    var user
  //  if(userName[0].includes("gmail"))
    //{
        // }
        // else{
        //     user=userName[0]+" "+userName[1]+" "+userName[2]
        // }
    for (let i = 1; i < localStorage.length; i++){
        
        var v=localStorage.getItem(`users${i}`).split("*")
        if(getloged===v[0])
        {
            user=v[2]
            break;
        }
    }
    document.getElementById("reglink").href="#"
    document.getElementById("spanreg").innerHTML=user
    document.getElementById("reglink").style.marginLeft="35rem"
    document.getElementById("logout").innerHTML="Log out"
}
function logout(){ 
    document.getElementById("logout").innerHTML=""
    document.getElementById("spanreg").innerHTML="Register"
    document.getElementById("reglink").style.margin="1.5rem 0 0rem 65rem;"
    localStorage.setItem("loged","false")
    document.getElementById("reglink").href="./registeration.html"
    

}