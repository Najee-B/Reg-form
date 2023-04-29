var flag=0;
var f_name=document.myform.fname;
var f_email=document.myform.femail;
var f_phn=document.myform.fnumber;
var dob=document.myform.fdob;
var age;
let mails=[];
if(localStorage.getItem("users"))
{
JSON.parse(localStorage.getItem("users")).forEach(data => {
    mails.push(`${data.email}`);});
}
var m=20;
 function showAge(){
    var day=dob.value;
    var bdate=new Date(day);
    var today=new Date();
    age=today.getTime()-bdate.getTime();
    age=Math.floor(age/(1000*60*60*24*365.25));
    if(isNaN(age)||age<1){
    document.getElementById("edob").innerText=" ";}
    else{
        document.getElementById("edob").innerText="Your age is "+age;
    } }

 function validate(){
    flag=1;
    if(f_name.value==""){
        document.getElementById("ename").innerText="Name required";
        flag=0;
    }
    else if(f_name.value.length>m || f_name.value.length<3){
        document.getElementById("ename").innerText="Name should have minimum 3 characters, maximum 20 characters";
        flag=0;
    }
    else{
       document.getElementById("ename").innerText=""; 
    }

    if(f_email.value==""){
        document.getElementById("eemail").innerText="Mail id required"; 
        flag=0;
    }
    else if(mails.includes(f_email.value)){

        document.getElementById("eemail").innerText="Duplicate Mail";
        flag=0;
    }
    else{

        document.getElementById("eemail").innerText="";

    }

    if(f_phn.value != ""){  

    if(f_phn.value.length!=10 || isNaN(f_phn.value))
    {
        document.getElementById("ephn").innerText="invalid phone";
        flag=0;
     }}
     else{
         document.getElementById("ephn").innerText="";
     } 
     if(age<18 || isNaN(age)||dob.value==""){

        document.getElementById("edob").innerText="invalid date";
        flag=0;

     }
     else{
        document.getElementById("edob").innerText=" ";
     }
     if(flag===1){
      saveData();
     }}
    function saveData(){
      let user_records=JSON.parse(localStorage.getItem("users")) || [];
      
      user_records.push({
        name:f_name.value, email:f_email.value, phone: f_phn.value, dob: dob.value
      });
      localStorage.setItem("users",JSON.stringify(user_records));
      getAllItems();
      document.getElementById('my-form').reset();
      document.getElementById('uname').focus();
      
    }
    function getAllItems(){
      console.log(localStorage.getItem("users"));
      if(localStorage.getItem("users")){
        var output=document.getElementById("result");
        output.innerHTML="";
        JSON.parse(localStorage.getItem("users")).forEach(data => {
          output.innerHTML+=`<li>${data.name}</li><br>`;});
          
          }
          
        }
    
      
    
    
     
        