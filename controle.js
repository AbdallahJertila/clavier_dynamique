const ecrire = function(val) {
    const output = document.getElementById('afficher'); 
    output.value += val;
    output.style.visibility = 'visible';
};
const effacer = function() {
    const element = document.getElementById('afficher');
    const elementValue = element.value; 
    const newValue = elementValue.slice(0,-1); 
    element.value = newValue; 
}
const confirmer=function(){
    const mot=document.getElementById('afficher').value;
    alert("merci vous avez saisi  "+mot);
}
const afficher = function() {
    let p = document.getElementById('affichage'); 
    let ch = "hello in clavier dynamique";
    let t = 100;
    for (let i = 0; i < ch.length; i++) {
    couleur='white';
      setTimeout(() => {
        p.textContent += ch.charAt(i);
        p.style.color=couleur;
      }, t);
     t+=80;
    }
    setTimeout(() => {
        p.style.visibility='hidden';
      }, 2500);
}
  

