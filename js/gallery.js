

function upDate(previewPic){
document.querySelector("#image").style.backgroundImage="url('"+previewPic.src+"')";
  var x=document.getElementById("image").innerHTML=previewPic.alt;
 
 
 

  
	}

	function unDo(){
     document.querySelector("#image").style.backgroundImage="url('')";
      document.querySelector("#image").innerHTML="Hover over an image below to display here.";
	
	}