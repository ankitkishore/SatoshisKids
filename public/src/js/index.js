
var databaseref = firebase.database().ref();
var messagesRef = databaseref.child('market');


messagesRef.on("child_added", snap=>{
    var itemname = snap.child("itemname").val();
    var itemnumber = snap.child("itemnumber").val();
    var description = snap.child("description").val();
    var src = snap.child("src").val();

    var buy= document.getElementById("buy")
     var divs= document.createElement("div");
     divs.setAttribute('class', 'containers');
     divs.setAttribute('id','containers');
     buy.appendChild(divs);
     var divimg= document.createElement("div");
     divimg.setAttribute('class','images');
     var img= document.createElement("img");
     var stor=localStorage.getItem('image');
     
     img.setAttribute('src',src);
     divs.appendChild(divimg);
     divimg.appendChild(img);

     var divpro= document.createElement("div");
     divpro.setAttribute('class', 'product'); 
     divs.appendChild(divpro);
     var name= document.createElement("h4");
     name.setAttribute('id','name');
     name.innerHTML=itemname;
     var desc= document.createElement("p");
     desc.setAttribute('class', 'desc');
     desc.innerHTML=itemnumber;
     var cost= document.createElement("h5");
     cost.innerHTML=description;
     var button= document.createElement("button");
     button.setAttribute('class', 'add');
     button.setAttribute('onclick','addcart(this)');
     button.innerHTML="Add to Cart";
     divpro.appendChild(name);
     divpro.appendChild(desc);
     divpro.appendChild(cost);
     divpro.appendChild(button);

})

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.opacity = 0.8;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.opacity = 1;
}

function buy(){
  document.getElementById("buy").style.display="block";
document.getElementById("sell").style.display="none";
document.getElementById("search").style.display="block";
}
function sell(){
  
  document.getElementById("sell").style.display="block";
  document.getElementById("buy").style.display="none";
  document.getElementById("search").style.display="none";

}
function buys(){
  document.getElementById("borrowers").style.display="block";
document.getElementById("lender").style.display="none";
document.getElementById("search").style.display="block";
}
function sells(){
  document.getElementById("borrowers").style.display="none";
document.getElementById("lender").style.display="block";
document.getElementById("search").style.display="none";
}

function readURL(input) {
  if (input.files && input.files[0]) {
      console.log("sdsda");
      var reader = new FileReader();
      var temp;
      reader.onload = function (e) {
          $('#image')
              .attr('src', e.target.result);
              console.log(e.target.result);
              var temp= localStorage.setItem( 'image', e.target.result);
                  
      };

      reader.readAsDataURL(input.files[0]);
      //console.log(reader.readAsDataURL(input.files[0]));
  }
}


function readURL2(input) {
    if (input.files && input.files[0]) {
        console.log("sdsda");
        var reader = new FileReader();
        var temp;
        reader.onload = function (e) {
            $('#borrowerimage')
                .attr('src', e.target.result);
                console.log(e.target.result);
                var temp= localStorage.setItem( 'image', e.target.result);
                    
        };
  
        reader.readAsDataURL(input.files[0]);
        //console.log(reader.readAsDataURL(input.files[0]));
    }
  }


function readURL1(input) {
    if (input.files && input.files[0]) {
        console.log("sdsda");
        var reader = new FileReader();
        var temp;
        reader.onload = function (e) {
            $('#lenderimage')
                .attr('src', e.target.result);
                console.log(e.target.result);
                var temp= localStorage.setItem( 'image', e.target.result);
                    
        };
    }
  }

  function bsubmit(){{

    console.log("ankit");
    var borrowersref = databaseref.child("borrowers");
    var bitemname = getInputVal('biteamname');
    var bitemnumber = getInputVal('biteamnumber');
    var bkycdetails = getInputVal('bexampleFormControlTextarea1');
    var bitemlocation = getInputVal('bitemlocation');

    var stor=localStorage.getItem('borrowerimage');
    borrowersref.push().set({
        name : bitemname,
        number: bitemnumber,
        location : bitemlocation,
        kycdetail : bkycdetails,
        src: stor
    });

    console.log("done");
    document.getElementById('form').reset();
    return false;
}


function lsubmit(){

    console.log("ankit");
    var lenderref = databaseref.child("lender");
    var litemname = getInputVal('liteamname');
    var litemnumber = getInputVal('liteamnumber');
    var lkycdetails = getInputVal('lexampleFormControlTextarea1');
    var litemlocation = getInputVal('litemlocation');

    var stor=localStorage.getItem('lenderimage');
    lenderref.push().set({
        name : litemname,
        number: litemnumber,
        location : litemlocation,
        kycdetail : lkycdetails,
        src: stor
    });

    console.log("done");
    document.getElementById('form').reset();
    return false;

}

function submitButton(){

    console.log("ankit");
    var profileref = databaseref.child("profile");
    var itemname = getInputVal('iteamname');
    var itemnumber = getInputVal('iteamnumber');
    var kycdetails = getInputVal('exampleFormControlTextarea1');
    var itemlocation = getInputVal('itemlocation');

    var stor=localStorage.getItem('image');
    profileref.push().set({
        name : itemname,
        number: itemnumber,
        location : itemlocation,
        kycdetail : kycdetails,
        src: stor
    });

    console.log("done");
    document.getElementById('form').reset();
    return false;

}

function getInputVal(id){
         return document.getElementById(id).value;
       }
var submit1= document.getElementById("submit1");
  console.log("hiiiii");
   submit1.addEventListener("click", function(){

    var itemname = getInputVal('iteamname');
    var itemnumber = getInputVal('itemnumber');
    var description = getInputVal('exampleFormControlTextarea1');

    var img= document.createElement("img");
     var stor=localStorage.getItem('image');
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        itemname: itemname,
        itemnumber:itemnumber,
        description:description,
        src : stor
    });
    document.getElementById('form').reset();
     return false;
   })


   function addcart(e){
       var but = e.parentElement;
       console.log(but);
       var na = but.getElementsByTagName("h4");
       var name = na[0].innerHTML;
       var pr = but.getElementsByTagName("p");
       var price = pr[0].innerHTML;
       //var name = but.getElementById('name');
       //console.log(name.value);
       var cartref = firebase.database().ref("cart");
       cartref.push().set({
           name:name,
           price:price
       });
       return false;

   }
   
   function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("containers");
    console.log(ul);    
    li = document.getElementsByTagName("h4");
    console.log(li);    
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}
  }