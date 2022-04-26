function ageCheck() {let age = prompt("Are you 18 years or older?(Yes/No)")
if (age.toLowerCase() == "no")
{document.write("<style> .text { background-color: white; color: white} </style>"),
 document.write('<h1 style="color: white;text-align: center"> CSGO is an M-rated game.</h1>')}
if (age.toLowerCase() =="yes"){document.write('<h1 style="color: white;text-align: center"> Welcome!</h1>')}
else {alert("Please enter Yes or No."); ageCheck()}}

 function favoriteColor(){let color = prompt("What's your favorite color?")
 document.write("<style> h1 {color:" + color + ";}</style>")}

 function userNameFunction(){let userName = prompt("What's your name?")
 document.write("<h1>Hello " + userName + "!</h1>")}