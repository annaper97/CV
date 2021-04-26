
 let txt='Hi, Welcome to my cv website, Please contact me with Whatsapp';
 let i=0;
 let anna="Anna Pertzovski";
 let phone="0547252304"
let myEmail= "pertzovski.anna@gmail.com"

console.log(txt)
function WelcomeText() {
    if (i<txt.length ){}
    {
        document.getElementById("myWelcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(WelcomeText,20);
    }
}
 function Buttonsanna () {
     document.getElementById("Anna_Pertzovski").innerHTML= anna;
 }

 function Buttonsphone () {
     document.getElementById("phone").innerHTML= phone;
 }

 function Buttonsemail () {
     document.getElementById("myemail").innerHTML= myEmail;
 }

