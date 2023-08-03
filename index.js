var books =[

    ["Node", 1000 , 'sanjay',"T vell Pvt"],
    ["python", 1000 , 'sanjay',"R eill EET"],
    ["python", 1000 , 'sanjay',"S edd swer"],
   
   
  
]


function BindBooks(books){
    var row =`<tr><th>Sno.</th><th>NAME</th><th>LAST-NAME</th><th>FATHER</th><th>MOTHER</th><th>DOB</th><th>DOA</th><th>AADHAR</th><th>MOBILE-NO</th><th>ADDRESS</th><th>DURATION</th><th>TO-FEES</th><th>COURSE</th> <th>ACTION</th></tr>`;

    books.forEach(function(book, i) {
        row +=`<tr><td>${i+1}</td><td>${book[0]}</td><td>${book[1]}</td><td>${book[2]}</td><td>${book[3]}</td><td>${book[4]}</td><td>${book[5]}</td><td>${book[6]}</td><td>${book[7]}</td><td>${book[8]}</td><td>${book[9]}</td><td>${book[10]}</td><td>${book[11]}</td><td> <a href='#'><i class="fa fa-edit"></i> </a>  <a href='#'><i class="fa fa-trash bg-danger"></i> </a>  </td> </tr>`


    });
    document.getElementById("tbl").innerHTML=row;
}


function AddBook ()
{
var name=document.getElementById("name").value;
var lastname=document.getElementById("lastname").value;
var father=document.getElementById("father").value;
var mather=document.getElementById("mather").value;
var dob=document.getElementById("dob").value;
var doa=document.getElementById("doa").value;
var adhar_no=document.getElementById("adhar_no").value;
var numbers=document.getElementById("numbers").value;
var address=document.getElementById("address").value;
var duration=document.getElementById("duration").value;
var fees=document.getElementById("fees").value;
var course=document.getElementById("course").value;
var image=document.getElementById("formFile").value;

let book=[name,lastname,father,mather,dob,doa,adhar_no,numbers,address,duration,fees,course,image];
books.push(book);
BindBooks(books);
ClearForm();



}
// var a =document.getElementById("btn-book")
// a.addEventListener("click",function(){
//     a.style.backgroundColor= "yellow"
//     a.innerHTML ="Go"
//     AddBook()
// })

document.getElementById("btn-book").addEventListener("click",AddBook)


// console.log(AddBook);

 function ClearForm(){

document.getElementById("name").value="";
document.getElementById("lastname").value="";
document.getElementById("father").value="";
document.getElementById("mather").value="";
document.getElementById("dob").value="";
document.getElementById("doa").value="";
document.getElementById("adhar_no").value="";
document.getElementById("numbers").value="";
document.getElementById("address").value="";
document.getElementById("duration").value="";
document.getElementById("fees").value="";
document.getElementById("course").value="";


 }





BindBooks(books);


// button on off====

var flag=0

var button=document.getElementById("btns")
var butb=document.getElementById("boxse")


button.addEventListener("click",function(){
    if(flag== 0){
        butb.style.backgroundColor="yellow"
        flag=1
        button.innerHTML="on"
        alert("succes")
    }else{
        butb.style.backgroundColor="white"
        flag=0
        button.innerHTML="off"
    }
    button.style.backgroundColor="red"
    
    
})




// toggle button Dark/theme 



let toggle=document.getElementById("togglebButton");
let body=document.querySelector("body");


toggle.addEventListener("click",function(){
    this.classList.toggle("tog")
    if(this.classList.toggle("togglebButton")){
        body.style.background="white"
        body.style.color="black";
        body.style.transition="0.5s";
    }else{
        body.style.background ='black';
        body.style.color ='white';
        body.style.transition ='0.8s'
    }
})



