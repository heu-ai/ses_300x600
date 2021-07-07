// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png'];

var landing_page = "https://mesabrasil.sesc-ce.com.br/";


// Subject and Recepients
var subject =  "SESC Creative";
var receivers = "leadnbids@gmail.com, analytics@infuseads.com";


var output = document.getElementById('output');
let contact_info = {"name":"", "email_id":"", "phone_no":"", "subject":subject, "receivers":receivers};

// Opening the 1st Image
openfile(imges[0]);
clickpattern();


// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});

// Opening a  file
function openfile(filepath){
    output.src = filepath;
};


//Send Data
function APIDataCall(contact_info){
fetch('https://demo.infuseads.com:8081/core/js-ads/creative-data/', {
  method: "POST",
  body: JSON.stringify(contact_info),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
};


// click count but it refreshes again as per page loads
function APICall(n){
  // console.log(n,"no")
  var x =JSON.stringify({ key:n})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=24', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

};


window.onload = function(){
  var x =JSON.stringify({ key:"impression"})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=24', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data,"ddddddddddddddddddddddd");
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}


//page 1
function page1func(op){
    document.getElementById("contact_form").style = "display:none !important";
    document.getElementById("contact_form").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("privacypolicy").disabled = true;
    document.getElementById("enviar").disabled = true;

    var homepage = document.getElementById("homepage");
    homepage.style = "position: absolute;top: 398px;left: 24px;height: 30px;background: transparent;width: 269px;border-radius: 2%;border: 1px solid transparent;";
    homepage.onclick = function(){
                                APICall("page1");
                                window.open(landing_page);
                               };

    var screen2 = document.getElementById("screen2");
    screen2.style = "position: absolute;top: 471px;left: 24px;height: 30px;background: transparent;width: 269px;border-radius: 2%;border: 1px solid transparent;";
    screen2.onclick= function(){
                                    APICall("page2leftkey1");
                                    op.src = imges[1];
                                    page2func(op);
                                };
};

//page 2
function page2func(op){
    document.getElementById("screen2").style = "display:none !important";
    document.getElementById("contact_form").style = "";
    document.getElementById("contact_form").disabled = false;
    document.getElementById("name").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("privacypolicy").disabled = false;
    document.getElementById("enviar").disabled = false;


    var name = document.getElementById("name");
    name.style = "position: absolute;font-size: 15px;top: 320px;left: 24px;height: 23px;background: transparent;width: 266px;border-radius: 2%;border: 1px solid transparent;";
    name.required = true;
    name.onclick = function(){name.style = "position: absolute;font-size: 15px;top: 320px;left: 24px;height: 23px;background: white;width: 266px;border-radius: 2%;border: 1px solid transparent;";};

    var email = document.getElementById("email");
    email.style = "position: absolute;font-size: 15px;top: 354px;left: 24px;height: 23px;background: transparent; width: 266px;border-radius: 2%;border: 1px solid transparent;";
    email.required = true;
    email.onclick = function(){ email.style = "position: absolute;font-size: 15px;top: 354px;left: 24px;height: 23px;background: white; width: 266px;border-radius: 2%;border: 1px solid transparent;";};

    var phone = document.getElementById("phone");
    phone.style = "position: absolute;font-size: 15px;top: 385px;left: 24px;height: 23px;background: transparent;width: 266px;border-radius: 2%;border: 1px solid transparent;";
    phone.required = true;
    phone.onclick = function(){phone.style = "position: absolute;font-size: 15px;top: 385px;left: 24px;height: 23px;background: white;width: 266px;border-radius: 2%;border: 1px solid transparent;";}

    var privacypolicy = document.getElementById("privacypolicy");
    privacypolicy.style = "position: absolute;font-size: 15px;top: 420px;left: 30px;height: 7px;background: transparent;width: 7px;border: 0.5px solid transparent;";

    var enviar = document.getElementById("enviar");
    enviar.style = "position: absolute;top: 459px;left: 23px;height: 33px;background: transparent;width: 270px;border-radius: 2%;border: 1px solid transparent;";
    enviar.onclick= function(){
                                name.required = true;
                                phone.required = true;
                                email.required = true;
                                if(name.value!="" && phone.value!="" && email.value!=""){
                                    if (privacypolicy.checked == true){
                                        document.getElementById("contact_form").submit();
                                        contact_info.name = name.value;
                                        contact_info.phone_no = phone.value;
                                        contact_info.email_id = email.value;
                                        APIDataCall(contact_info);
                                    };
                                 };
                            };

    var homepage = document.getElementById("homepage");
    homepage.style = "position: absolute;top: 550px;left: 75px;height: 43px;background: transparent;width: 170px;border-radius: 2%;border: 1px solid transparent;";
    homepage.onclick = function(){
                                APICall("page2leftkey2");
                                window.open(landing_page);
                               };
};


// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('1.png') > -1)
    {
        page1func(op);
    }
};


function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};