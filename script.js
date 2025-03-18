$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// gsap

// gsap.from(".my_bannerFirst",
// {
//     y: -250,
//     duration: 1,
//     ease: 'bounce'
// }
// );

// gsap.from(".my_bannerFirst1",

//     {
//         y:-300,
//         duration: 1.2,
//         ease:'bounce'
//     }
// )


gsap.from(".m_container-fluid",
    {
        y: -250,
        duration: 1,
        ease: 'bounce'
    }
    );

gsap.from(".my_bannerFirst1",
    {
        x:-1300,
        duration:1,
        scrollTrigger:{
            trigger: ".my_bannerFirst1",
            start:"center center"
        }
    }
)


// Login Form

 let overlay = document.querySelector('.m_Outlay');
 let loginForm = document.querySelector('.m_loginForm');
 let close = document.querySelector('.m_overLayClose')

let loginButton = document.querySelector('.m_login')

// Opeining ke liye

loginButton.addEventListener('click',(e)=>
{
    console.log(e.target)
    overlay.classList.add("showOverLay");
    loginForm.classList.add("showLoginForm");
})

// Closing ke liye

close.addEventListener('click',()=>
{
    overlay.classList.remove("showOverLay");
    loginForm.classList.remove("showLoginForm");
})