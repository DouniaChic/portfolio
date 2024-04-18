 //--------toggle icon navbar  -----

    let menuicon=document.querySelector('#menuIcon');
    let navbar=document.querySelector('.navbar');

    menuicon.onclick=()=>{
        // classlist renvoie les classes d'un élements 
        //toggle ajoute la classe si elle n'existe pas si la classe existe elle le supprime (supprime/ajout)
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }



// scroll sections activer les liens lorsque on clique 
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });

        }
    });

    // sticky navbar:
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

     //--------remove toggle icon  and navbar when click navbar link  -----

        menuicon.classList.remove('bx-x');
        navbar.classList.remove('active');
}

//-------- scroll reveal  -------------------

// animation de haut vers le bas
ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.acceuil-content,.heading',{origin:'top'});
ScrollReveal().reveal('.acceuil-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.acceuil-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.acceuil-content p,.about-content',{origin:'right'});

//changer fronted developper typed js

const typed=new Typed('.multiple-text',{
    strings:['Fronted Developer','Backend Developer','Fulstack developer'],
    backSpeed:100,
    backDelay:1000,
    loop:true


})


