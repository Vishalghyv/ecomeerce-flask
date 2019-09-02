$('#burqa').mouseover(function(){
	$('#burqa').css('border-right','none');
	$('#burqa').css('padding-right','42px');
});
$('#burqa').mouseout(function(){
	$('#burqa').css('border-right','2px dashed rgba(51,51,51,0.8)');
	$('#burqa').css('padding-right','40px');
});
$('#jewel').mouseover(function(){
	$('#burqa').css('border-right','none');
	$('#jewel').css('border-right','none');
	$('#jewel').css('padding-right','42px');
	$('#jewel').css('padding-left','42px');
});
$('#jewel').mouseout(function(){
	$('#burqa').css('border-right','2px dashed rgba(51,51,51,0.8)');
	$('#jewel').css('border-right','2px dashed rgba(51,51,51,0.8)');
	$('#jewel').css('padding-right','40px');
	$('#jewel').css('padding-left','40px');
});
$('#cosmetic').mouseover(function(){
	$('#jewel').css('border-right','none');
	$('#cosmetic').css('padding-left','42px');
});
$('#cosmetic').mouseout(function(){
	$('#jewel').css('border-right','2px dashed rgba(51,51,51,0.8)');
	$('#cosmetic').css('padding-left','40px');
});
// $('img#images').on('click',function(){
// 	var src = $(this)[0].src;
// 	var x= String;
// 	var y= String;
// 	for(var i=0 ;i<6; i++)
// 		{
// 		 y[i] = src[i+41];
// 		}
// 	var a = y[0]+y[1]+y[2]+y[3]+y[4]+y[5]
// 	for(var i=0 ;i<23; i++)
// 		{
// 		 x[i] = src[i+47];
// 		}
// 	var z= x[0] + x[1] + x[2] + x[3] +x[4] +x[5]+x[6]+x[7]+x[8]+x[9] +x[10] + x[11] + x[12] + x[13] +x[14] +x[15]+x[16]+x[17]+x[18]+x[19]+x[20]+x[21]+x[22]
// 	window.location = '/buynow/' + a+z;
// });
var i= 0 ;
$('#left_buy').on('click',function(){
	if(i==0)
	{
		$('img#img_buy').css('display','none');
		$('img#img_buy3').css('display','inline');
		i=-1	
	}
	else if(i==-1)
	{
		$('img#img_buy3').css('display','none');
		$('img#img_buy2').css('display','inline');
		i=-2	
	}
	else if(i==-2)
	{
		$('img#img_buy2').css('display','none');
		$('img#img_buy1').css('display','inline');
		i=-3	
	}
	else if(i==-3)
	{
		$('img#img_buy1').css('display','none');
		$('img#img_buy').css('display','inline');
		i=0	
	}	
	else if(i==1)
	{
		$('img#img_buy1').css('display','none');
		$('img#img_buy').css('display','inline');
		i=0	
	}
	else if(i==2)
	{
		$('img#img_buy2').css('display','none');
		$('img#img_buy1').css('display','inline');
		i=1	
	}
	else if(i==3)
	{
		$('img#img_buy3').css('display','none');
		$('img#img_buy2').css('display','inline');
		i=2	
	}		
});
$('#right_buy').on('click',function(){
	if(i==0)
	{
		$('img#img_buy').css('display','none');
		$('img#img_buy1').css('display','inline');
		i=1	
	}
	else if(i==1)
	{
		$('img#img_buy1').css('display','none');
		$('img#img_buy2').css('display','inline');
		i=2	
	}
	else if(i==2)
	{
		$('img#img_buy2').css('display','none');
		$('img#img_buy3').css('display','inline');
		i=3	
	}
	else if(i==3)
	{
		$('img#img_buy3').css('display','none');
		$('img#img_buy').css('display','inline');
		i=0	
	}	
	else if(i==-1)
	{
		$('img#img_buy3').css('display','none');
		$('img#img_buy').css('display','inline');
		i=0	
	}
	else if(i==-2)
	{
		$('img#img_buy2').css('display','none');
		$('img#img_buy3').css('display','inline');
		i=-1	
	}
	else if(i==-3)
	{
		$('img#img_buy1').css('display','none');
		$('img#img_buy2').css('display','inline');
		i=-2	
	}		
});

function myMove() {
  var elem = document.getElementById("doodle");   
  var pos = 70;
  var id = setInterval(frame, 70);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      var test = "http://localhost:5000/FrontEnd/Resources/test2.gif";
      var test2  = "http://localhost:5000/FrontEnd/Resources/test1.gif";
      if(elem.src == test)
      	{elem.src = test2
      	}
      else {
      	elem.src = test;
		}
      elem.style.bottom = pos + "px"; 
    }
  }
  var x = setTimeout(text,5000);
  function text(){
    $("#text").css('display','inline');}

}
myMove();
function myMove1() {
  var elem = document.getElementById("doodle");   
  var pos = 70;
  var id = setInterval(frame, 70);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      var test = "../../FrontEnd/Resources/test2.gif";
      var test2  = "../../FrontEnd/Resources/test1.gif";
      if(elem.src == test)
      	{elem.src = test2
      	}
      else {
      	elem.src = test;
		}
      elem.style.bottom = pos + "px"; 
    }
  }
}

// Get the modal


var final = document.getElementById('login');
var login = document.getElementById('login_form');
final.onclick =function(){
	if(final.innerText == "Log Out"){
		window.location = '/logout';
	}
	else{
	login.style.display = "inline";}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == login) {
    login.style.display = "none";
  }
}