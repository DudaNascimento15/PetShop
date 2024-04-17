function mudaTema() {
    let bodyolho = document.body; 
    let conteudo = document.getElementById('opcaoTema');
    let tema = conteudo.value;

    if (tema === "normal") {
        document.getElementById("maintema").style.backgroundColor = '#F2EFE6'; 
        document.getElementById("titulo").style.fontFamily = 'lemonade display, sans-serif'; 
        document.getElementById("titulo").style.color = '#033043';        
        var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = '#333333';
            labels[i].style.fontFamily = 'Poppins, sans-serif';
        }
      
    } else if (tema === "custom") {
        document.getElementById("maintema").style.backgroundColor = '#333333'; 
        document.getElementById("titulo").style.fontFamily = 'Dancing Script, sans-serif'; 
        document.getElementById("titulo").style.color = 'white';
        var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = 'white';
            labels[i].style.fontFamily = 'Cambria, Cochin, Georgia, Times, Times New Roman, serif';
        }
    }
}
