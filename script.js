document.querySelector("html").classList.add('js');
let imageURL = "";
var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
 
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener('change',function(e){ //여기서부터 실행
    var file = e.target.files[0]; //선택된 파일
    var reader = new FileReader();
    reader.readAsDataURL(file); //파일을 읽는 메서드 

    reader.onload = function(){
      var photoFrame = document.createElement("div");
      imageURL = reader.result;
      //console.log(imageURL);
      photoFrame.style = `background : url(${imageURL}); background-size : cover ; width:50%; height:50%;`;
      photoFrame.className = "photoFrame";
      document.querySelector(".show-image").appendChild(photoFrame);
    }
    button.style.display = "none";
    console.log(String(reader.onload.imageURL));

    $.ajax({
      url:"https://dapi.kakao.com/v2/vision/face/detect.json?image="+imageURL,
      type:'POST',
      headers: {'Authorization' : "KakaoAK c53c3352cd6569d7e71cea47f59d46ca"}
    })
})