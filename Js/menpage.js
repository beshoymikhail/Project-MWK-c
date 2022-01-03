
/*home page control*/
/*
function gohome()
{
    document.getElementById('home').href = "project.html";
}*/

/* scrolling iframe */
/* men page control*/

function scrolingview()
{
    document.getElementById('ifram-control').scrollIntoView();
}
function gosummer()
{
 
document.getElementById('ifram-control').src = "summer-men.html";
scrolingview();

}
function gowinter()
{
 
document.getElementById('ifram-control').src = "wintermen.html";
scrolingview();
}
function goshoes()
{
document.getElementById('ifram-control').src = "shoes.html";
scrolingview();

}
/* women control pages*/ 
function gosummerwomen()
{
 
document.getElementById('ifram-control').src = "summer-women.html";
scrolingview();
}
function gowinterwomen()
{
 
document.getElementById('ifram-control').src = "women-winter.html";
scrolingview();
}
function goshoeswomen()
{
document.getElementById('ifram-control').src = "shoes-women.html";
scrolingview();
}
/*kids control page*/
function gosummerkids()
{
document.getElementById('ifram-control').src = "summer-kids.html";
scrolingview();
}
function gowinterkids()
{
 
document.getElementById('ifram-control').src = "winter-kids.html";
scrolingview();
}
function goshoeskids()
{
document.getElementById('ifram-control').src = "shoes-kids.html";
scrolingview();
}


document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}
