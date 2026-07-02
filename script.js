/* ======================================
   MBAT - SCRIPT.JS
====================================== */

console.log("MBAT Travaux Tous Corps d'État chargé");

// Animation d'apparition des sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const cible=document.querySelector(this.getAttribute("href"));

        if(cible){

            cible.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Bouton devis
const devisBtn=document.querySelector(".devis");

if(devisBtn){

devisBtn.addEventListener("click",()=>{

console.log("Ouverture du formulaire de devis");

});

}
