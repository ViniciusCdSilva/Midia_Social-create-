function criar(){
    const nomeInput = document.getElementById("name");
    const bioInput = document.getElementById("bio");
    
    const nome = nomeInput.value.trim();
    const bio = bioInput.value.trim();

    let temErro =false;

    if (nome === ''){
      alert("Digite algum nome");
      nomeInput.classList.add("erro");
      temErro = true ;
    } else{
        nomeInput.classList.remove("erro")
    }
    if(temErro){
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("bio" , bio);

    window.location.href = "perfil.html";
}