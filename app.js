// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png'];

var slides_img = ['img/11.jpg', 'img/12.jpeg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpeg', 'img/20.jpg'];

var landing_page = "http://casamento-app.cedrom.com.br/";

var whatsapp_link = "https://api.whatsapp.com/send?phone=5511981334995&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Cedrom!";


// Subject and Recepients
var subject =  "Cedrom Creative"
var receivers = "leadnbids@gmail.com, analytics@infuseads.com"


var output = document.getElementById('output');
let contact_info = {"name":"", "phone_no":"", "year":"", "guest":"", "subject":subject, "receivers":receivers};

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
    //console.log("Current Img URL = ", output.src);
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
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=14', {
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
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=14', {
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
    document.getElementById("whatsapp").style = "display:none !important";
    document.getElementById("back").style = "display:none !important";
    document.getElementById("slides").style = "display:none !important";
    document.getElementById("left").style = "display:none !important";
    document.getElementById("right").style = "display:none !important";
    document.getElementById("contact_form").style = "display:none !important";
    document.getElementById("contact_form").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("year").disabled = true;
    document.getElementById("guest").disabled = true;
    document.getElementById("enviar").disabled = true;

    var screen2 = document.getElementById("screen2");
    screen2.style = "position: absolute; top: 456px; left: 36px; height: 34px; background: transparent; width: 232px; border-radius: 2%; border: 1px solid transparent;";
    screen2.onclick= function(){
                                    APICall("page1");
                                    op.src = imges[1];
                                    page2func(op);
                                };

    var site = document.getElementById("site");
    site.style = "position: absolute; top: 503px; left: 36px; height: 34px; background: transparent; width: 232px; border-radius: 2%; border: 1px solid transparent;";
    site.onclick = function(){
                                APICall("page2leftkey1");
                                window.open(landing_page);
                               };

    var screen3 = document.getElementById("screen3");
    screen3.style = "position: absolute; top: 545px; left: 36px; height: 34px; background: transparent; width: 232px; border-radius: 2%; border:1px solid transparent;";
    screen3.onclick= function(){
                                    APICall("page2leftkey2");
                                    op.src = imges[2];
                                    page3func(op);
                                };
};

//page 2
function page2func(op){
    var l= 0;

    document.getElementById("screen2").style = "display:none !important";
    document.getElementById("whatsapp").style = "display:none !important";
    document.getElementById("back").style = "display:none !important";
    document.getElementById("contact_form").style = "display:none !important";
    document.getElementById("contact_form").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("year").disabled = true;
    document.getElementById("guest").disabled = true;
    document.getElementById("enviar").disabled = true;

    var left = document.getElementById("left");
    left.style = "position: absolute;top: 270px;left: 8px;height: 52px;background: transparent;width: 35px;border-radius: 2%;border: 1px solid transparent;";

    var right = document.getElementById("right");
    right.style = "position: absolute;top: 270px;left: 274px;height: 52px;background: transparent;width: 35px;border-radius: 2%;border: 1px solid transparent;";

    var slides = document.getElementById("slides");
    slides.style = "position: absolute;top: 111px;left: 36px;height: 356px;background: transparent;width: 237px;border-radius: 2%;border: 1px solid transparent;";

    left.onclick = function(){APICall("page2leftkey3");
                            if(l>=0){slides.src = slides_img[l];
                                        if(l>0){l--;}
                                        if(l==0 || l==10){l=0;}
                                }
                             };
    right.onclick = function(){APICall("page2rightkey1");
                            if(l<=9){slides.src = slides_img[l];
                                        if(l<9){l++;}
                                        if(l==9 || l==-1){l=9;}
                                        }
                              };

    var site = document.getElementById("site");
    site.style = "position: absolute;top: 492px;left: 36px;height: 34px;background: transparent;width: 232px;border-radius: 2%;border: 1px solid transparent;";
    site.onclick = function(){
                                APICall("page2rightkey2");
                                window.open(landing_page);
                               };

    var screen3 = document.getElementById("screen3");
    screen3.style = "position: absolute;top: 544px;left: 36px;height: 34px;background: transparent;width: 232px;border-radius: 2%;border: 1px solid transparent;";
    screen3.onclick= function(){
                                    APICall("page2rightkey3");
                                    op.src = imges[2];
                                    page3func(op);
                                };
};


//page 3
function page3func(op){
    document.getElementById("screen2").style = "display:none !important";
    document.getElementById("site").style = "display:none !important";
    document.getElementById("screen3").style = "display:none !important";
    document.getElementById("slides").style = "display:none !important";
    document.getElementById("left").style = "display:none !important";
    document.getElementById("right").style = "display:none !important";
    document.getElementById("contact_form").style = "";
    document.getElementById("contact_form").disabled = false;
    document.getElementById("name").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("year").disabled = false;
    document.getElementById("guest").disabled = false;
    document.getElementById("enviar").disabled = false;

    var whatsapp = document.getElementById("whatsapp");
    whatsapp.style = "position: absolute;top: 192px;left: 37px;height: 35px;background: transparent;width: 234px;border-radius: 2%;border: 1px solid transparent;";
    whatsapp.onclick= function(){
                                    APICall("page3");
                                    window.open(whatsapp_link);
                                    };

    var back = document.getElementById("back");
    back.style = "position: absolute;top: 530px;left: 43px;height: 36px;background: transparent;width: 233px;border-radius: 2%;border: 1px solid transparent;";
    back.onclick= function(){       APICall("page4");
                                    op.src = imges[1];
                                    page2func(op);
                                };

    var name = document.getElementById("name");
    name.style = "position: absolute;font-size: 15px;top: 330px;left: 100px;height: 23px;background: transparent;width: 189px;border-radius: 2%;border: 1px solid transparent;";
    name.required = true;

    var phone = document.getElementById("phone");
    phone.style = "position: absolute;font-size: 15px;top: 360px;left: 235px;height: 23px;background: transparent;width: 55px;border-radius: 2%;border: 1px solid transparent;";
    phone.required = true;

    var year = document.getElementById("year");
    year.style = "position: absolute;font-size: 15px;top: 391px;left: 24px;height: 23px;background: transparent;width: 266px;border-radius: 2%;border: 1px solid transparent;";

    var guest = document.getElementById("guest");
    guest.style = "position: absolute;font-size: 15px;top: 422px;left: 24px;height: 23px;background: transparent;width: 266px;border-radius: 2%;border: 1px solid transparent;";

    var enviar = document.getElementById("enviar");
    enviar.style = "position: absolute;top: 475px;left: 43px;height: 36px;background: transparent;width: 233px;border-radius: 2%;border: 1px solid transparent;";
    enviar.onclick= function(){
                                name.required = true;
                                phone.required = true;
                                if(name.value!="" && phone.value!=""){
                                    document.getElementById("contact_form").submit();
                                    contact_info.name= name.value;
                                    contact_info.phone_no=phone.value;
                                    contact_info.year=year.value;
                                    contact_info.guest=guest.value;
                                    APIDataCall(contact_info);
                                    document.getElementById("message").innerHTML = "Obrigado, entraremos em contato em breve!";
                                 };
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