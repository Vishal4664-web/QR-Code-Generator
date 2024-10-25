let imgBox=document.getElementById("img");
let qrImg=document.getElementById("qrimg");
let qrText=document.getElementById("qrtext");

function generateqr(){

    if(qrText.value.length > 0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imgBox.classList.add("show-img");
    }
   
     
}