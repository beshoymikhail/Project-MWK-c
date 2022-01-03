
// var users=[];
// var array= localStorage.getItem("users")
// if(array)
// {
//     for (let i = 0; i < array.length; i++) {
//         let u=new user(array[i].mail,array[i].pass)
//         users.push(u);
        
//     }
// }
/*
localStorage.removeItem("user")
localStorage.removeItem("arr")
localStorage.removeItem("count")
localStorage.removeItem("options")
// console.log(users)
*/
//get users from local storge


localStorage.setItem("loged","false")

var users=[]

function getusers(){
    for (let i = 1; i < localStorage.length; i++){

        users.push(localStorage.getItem(`users${i}`))
    }
}
getusers()
//if(localStorage.getItem("users")){getusers();console.log("done")}
console.log(users)
/*Q3*/
/* full name/*/

function losefocus(){
    var userName=document.getElementById("fullName").value
    var req=/^[a-z,',-]+(\s)[a-z,',-]+(\s)[a-z,',-]+$/i
    if(!req.test(userName))
    {
        document.getElementById("p1").innerHTML="invalid name";
        document.getElementById("p1").style.color="red"
        return false;
    }
    else{
        document.getElementById("p1").innerHTML=""
        return true;
        
    }
}
/**Main password */
function leafeMainPass(){
    pass=document.getElementById("password").value
    rePass=document.getElementById("rePassword").value
    if(pass.length<8)
    {
        document.getElementById("pPass").innerHTML="“Wrong Password should be grater than 8 charc”";
        document.getElementById("pPass").style.color="red"
        return false;
        
    }
    else{
        document.getElementById("pPass").innerHTML="";
        return true;
    }
    
}
/* Password after re password*/
var password=null;
var rePass=null;
function leafePass(){
    pass=document.getElementById("password").value
    rePass=document.getElementById("rePassword").value
    if(rePass.length<8)
    {
        document.getElementById("p2").innerHTML="“Wrong Password should be grater than 8 charc”";
        document.getElementById("p2").style.color="red"
        return false;
        
    }
    else{
        document.getElementById("p2").innerHTML="";
        return true;
    }
    
}
//mail
function checkmail(){
    var email=document.getElementById("email").value
    var req=/^[a-z]+@[a-z]+(.com|.eg)/i
    if(!req.test(email))
    {
        document.getElementById("pEmail").innerHTML="Wrong Mail Format";
        document.getElementById("pEmail").style.color="red"
        return false
    }
    else{
        document.getElementById("pEmail").innerHTML=""
        return true;
        
    }
}
//submit log in
function submitform(event){

    event.preventDefault()
    pass=document.getElementById("password").value
    rePass=document.getElementById("rePassword").value
    var email=document.getElementById("email").value
    var fullName=document.getElementById("fullName").value
    var user=email+"*"+pass+"*"+fullName
    if(users.includes(user))
    {
        document.getElementById("wrong_reg").innerHTML="User already exist";
        document.getElementById("wrong_reg").style.fontWeight = "600";
        document.getElementById("wrong_reg").style.color="red"

    }
    else if(losefocus()&&leafePass()&&checkmail()&& pass==rePass)
    {
        localStorage.setItem(`users${localStorage.length+1}`,user)
        localStorage.setItem("loged",email)
        document.getElementById("formReg").submit()


    }
}

///////////////////////////////////////////////////////////
/** log in form */
/**Main password */
function checpassl(){
    var pass=document.getElementById("passwordl").value
    
    if(pass.length<8)
    {
        document.getElementById("label2_l").innerHTML="“Wrong Password should be grater than 8 charc”";
        document.getElementById("label2_l").style.color="red"
        return false;
       
    }
    else{
        document.getElementById("label2_l").innerHTML="";
        return true;
    }
    
}
//mail
function checkmaill(){
    var email=document.getElementById("maill").value
    var req=/^[a-z]+@[a-z]+(.com|.eg)/i
    if(!req.test(email))
    {
        document.getElementById("label1_l").innerHTML="Wrong Mail Format";
        document.getElementById("label1_l").style.color="red"
        return false
    }
    else{
        document.getElementById("label1_l").innerHTML=""
        return true;
        
    }
}
function submitformLogin(event){
    
    event.preventDefault()

    pass=document.getElementById("passwordl").value

    var email=document.getElementById("maill").value
    var check=false;
    for (let i = 0; i < users.length; i++) {
        
        var m=users[i].split("*")
        if(m[0]!=email&&m[1]!=pass)
            continue;
        if(m[0]==email&&m[1]==pass)
        {
            check=true;
            break;
        }
        if(m[0]==email&& m[1]!=pass)
        {
            document.getElementById("label2_l").innerHTML="Wrong Password";
            document.getElementById("label2_l").style.fontWeight = "600";
            document.getElementById("label2_l").style.color="red"
        }
            
        
    }
    if(!check)
    {
        console.log("here")
        document.getElementById("label2_l").innerHTML="user does not exist";
        document.getElementById("label2_l").style.fontWeight = "600";
        document.getElementById("label2_l").style.color="red"

    }
    else if(checkmaill()&&checpassl())
    {

        localStorage.setItem("loged",email)
        document.getElementById("formLogIn").submit()
        
    }
}
