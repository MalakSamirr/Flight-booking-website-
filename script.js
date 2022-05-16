var from, to, adult,child;
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
var myForm = document.getElementById("myForm");
console.log(myForm)
myForm.addEventListener("submit",function (event) {
    from = document.forms["myForm"]["from"].value;
    console.log(from)
    if (from == "") {
    
    para1.textContent = "* required !!";
    event.preventDefault();
    document.forms["myForm"]["from"].focus();
    return false;
}
else if (!isNaN(from)) {
    para1.textContent = "*enter valid country !!";
    event.preventDefault();
    document.forms["myForm"]["from"].focus();
    return false;
}
else {
    para1.textContent = "";
}
to = document.forms["myForm"]["to"].value;
    if ( to== "") {
    
    para2.textContent = "* required !!";
    event.preventDefault();
    document.forms["myForm"]["to"].focus();
    return false;
}
else if (!isNaN(to)) {
    para2.textContent = "*enter valid country !!";
    event.preventDefault();
    document.forms["myForm"]["to"].focus();
    return false;
}
else {
    para2.textContent = "";
}


adult = document.forms["myForm"]["adult"].value;
    if ( adult== "") {
    
    para3.textContent = "* required !!";
    event.preventDefault();
    document.forms["myForm"]["adult"].focus();
    return false;
}
else if (isNaN(adult)) {
    para3.textContent = "*enter valid number !!";
    event.preventDefault();
    document.forms["myForm"]["adult"].focus();
    return false;
}
else {
    para3.textContent = "";
}
child = document.forms["myForm"]["child"].value;
    if ( child== "") {
    
    para4.textContent = "* required !!";
    event.preventDefault();
    document.forms["myForm"]["child"].focus();
    return false;
}
else if (isNaN(child)) {
    para4.textContent = "*enter valid number !!";
    event.preventDefault();
    document.forms["myForm"]["child"].focus();
    return false;
}
else {
    para4.textContent = "";
    alert("Succeed")
}

})