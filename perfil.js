const nome = localStorage.getItem("nome");
const bio = localStorage.getItem("bio");

document.getElementById("textoNome").innerText =` ${nome}`;
document.getElementById("textbio").innerText =` ${bio}`

const inputCapa =document.getElementById("imgCapa");
const previewCapa = document.getElementById("previewCap");
const ctx = previewCapa.getContext("2d");

previewCapa.width =200;
previewCapa.height = 200;

inputCapa.addEventListener("change",function(){
    const arquivo = this.files[0];
    if(arquivo){ 
    const leitor = new FileReader();
    leitor.onload = function(e){
      const img = new Image();
      img.onload = function(){
        const tamanho = Math.min(img.width,img.height);
        const sx = (img.width - tamanho) / 2 ;
        const sy = (img.height - tamanho) / 2;

        ctx.clearRect(0, 0, previewCapa.width, previewCapa.height);
        ctx.beginPath();
        ctx.arc(100, 100, 100, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, sx, sy, tamanho, tamanho, 0,0,200, 200);
      };
      img.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
    } else{
        ctx.clearRect(0, 0, previewCapa.width , previewCapa.height);
    }
});