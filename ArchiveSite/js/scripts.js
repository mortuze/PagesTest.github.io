function myFunction(name) {
    document.getElementById("lastname").innerHTML = name;
}
var i=0;
function dynamic(){
    var name = "";
    if (i%2 == 0) {
        name = "";
        myFunction(name);
    }
    if(i%2 == 1) {
        name = "Nani";
        myFunction(name);
    }
    i++;

}