var getid=document.getElementById("paragraph") ;
function A (){
    getid.style.fontWeight="bold";
}

console.log("hello")
var getid=document.getElementById("paragraph");
function x () {
    getid.style.fontStyle="italic";
}
console.log("hello") 
var getid=document.getElementById("paragraph");
function d (){
    getid.style.textDecoration="underline";
}
function fontSize() {
    getid.style.fontSize=document.getElementById("sz").value;
}
function police (ll) {
    getid.style.fontFamily= ll;
}

$(".bt").hide();
$(".col").mouseenter(function(){
    $(this).css("opacity","0.5");
    $(this).find(".bt").show();
});
$(".col").mouseleave(function(){
    $(this).css("opacity","1");
    $(this).find(".bt").hide();
})

    //Your web app's firebase application
    var firebaseConfig = {
        apiKey: "AIzaSyC-mFQ7JX9t3fBsoKdn0O8hw_TVpHoJUq0",
        authDomain: "project-1-f37ac.firebaseapp.com",
        databaseURL: "https://project-1-f37ac.firebaseio.com",
        projectId: "project-1-f37ac",
        storageBucket: "",
        messagingSenderId: "881509401266",
        appId: "1:881509401266:web:c833f9734fe2a945"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    var messagesRef=firebase.database().ref ("myDatabase");//Setting the name of your database
            function submitform (e){
                e.preventDefault();
                // Get values
                var Name=document.getElementById("Name").value;
                var Email=document.getElementById("Email").value;
                var phonenumber=document.getElementById("phone").value;
                var Track=document.getElementById("track").value;
                saveMessage(Name,Email,phonenumber,track);//Sending data to our database
            }

document.getElementById('contactname').addEventListener("submit",submitform);

// save message to firebase
function saveMessage (Name,Email,phonenumber,Track){
var newMessageRef = messagesRef.push();
newMessageRef.set({
    Name:Name,
   Track:Track,
   Email:Email,
   phonenumber:phonenumber,
});
}

    
