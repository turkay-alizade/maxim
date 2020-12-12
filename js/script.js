
//navbar btn

let nav=document.querySelector('nav');
let bars=document.querySelector('.fa-bars');
navbar=false;

bars.addEventListener('click',function(){
    if (!navbar){
        nav.style.display='block';
        navbar=true;
        bars.classList.replace("fa-bars","fa-times");
    }else{
        nav.style.display='none';
        navbar=false;
        bars.classList.replace("fa-times","fa-bars");
    }
});
nav.addEventListener('click',function(){
   if(navbar){
    navbar=false;
    nav.style.display='none';
    bars.classList.replace("fa-times","fa-bars");
   }
});

// back-to top btn

let btn=document.querySelector('.back-to-top a')
window.addEventListener('scroll',function(){
    if(window.pageYOffset>300){
        btn.style.opacity='1'
    }else{
        btn.style.opacity='0'
    }
});

//Feature section
let feature=document.querySelector('.feature');
let feature_text=document.querySelectorAll('.feature-text');
let feature_img=document.querySelector('.feature-img img');
let feature_images=["images/features/features-1.png",
                    "images/features/features-2.png",
                    "images/features/features-3.png",
                    "images/features/features-4.png"];

for(let i=0;i<feature_text.length;i++){
    feature_text[i].addEventListener('click',function(){
        feature.querySelector('.feature-active').classList.remove('feature-active');
        this.classList.add('feature-active');
        feature_img.src=feature_images[i];
    });  
};

// FAQ section
let faq_link=document.querySelectorAll('.faq-link');
let faq_down=document.querySelectorAll('.fa-chevron-circle-down');
let faq_up=document.querySelectorAll('.fa-chevron-circle-up');

for(let i=0;i<faq_link.length;i++){    
    faq_link[i].addEventListener('click',function(){
        down_btn();
        if(faq_link[i].getAttribute('aria-expanded')==="false"){
            faq_down[i].style.display='none';
            faq_up[i].style.display='inline';
        };
    });
};
function down_btn(){
    for(let i=0;i<faq_down.length;i++){
        faq_down[i].style.display='inline';
        faq_up[i].style.display='none';
    };
};


//portfolio section

let portfolioCard=document.querySelectorAll('.portfolio-card');
let portfolioImg=document.querySelectorAll('.portfolio-card img');
let lightbox=document.querySelector('.lightbox');
let lightbox_img=document.querySelector('.img-box img');
let close=document.querySelector('.fa-times');
let prev=document.querySelector('.fa-chevron-left');
let next=document.querySelector('.fa-chevron-right');
let portfolioLink=document.querySelectorAll('#portfolio .nav-link');

portfolioLink.forEach(function(item){
    item.addEventListener('click',function(){
        portfolioLink.forEach(function(item){
            item.classList.remove("active")
        });
        this.classList.add("active");
        let value=this.textContent;
        portfolioCard.forEach(function(show){
            show.style.display='none';
            show.classList.remove('show');
            if(show.getAttribute("data-id")===value || value ==="all"){
                show.classList.add('show');
            };
        });
        next_prev_btn();
    });
});

for(let i=0;i<portfolioCard.length;i++){
    portfolioCard[i].classList.add('show');
    portfolioCard[i].addEventListener('click',function(){
        lightbox.style.display='block';
        lightbox_img.src=portfolioImg[i].src;   
    });
    next_prev_btn();
};
    
function next_prev_btn(){
    let show_img=document.querySelectorAll('.show img');
    let i=0;
    next.addEventListener('click',function(){
        if(i>=show_img.length-1){
            i=0;
            lightbox_img.src=show_img[0].src;
        }else{
            lightbox_img.src=show_img[i+1].src;
            i++;
        }; 
    });

    prev.addEventListener('click',function(){
        if(i===0){
            i=show_img.length;
            lightbox_img.src=show_img[0].src;
        }else{
            lightbox_img.src=show_img[i-1].src;
            i--;
        }
    });
}; 

close.addEventListener('click',function(){
    lightbox.style.display='none';
});



