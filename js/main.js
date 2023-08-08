

// change background image of hero section dynamically in html
if(document.getElementById('imageOne')){
let imageOne = document.getElementById('imageOne')

let get_image = imageOne.getAttribute('src')

imageOne.parentElement.style.background = "linear-gradient(rgba(0, 0, 0, 0.582),rgba(0, 0, 0, 0.582)),url('" + get_image + "') center top"
imageOne.parentElement.style.backgroundSize = "cover"
imageOne.parentElement.style.backgroundRepeat = "no-repeat"
}
if(document.getElementById('presidents-image')){
let presidentsImage = document.getElementById('presidents-image')

let get_presidents_image = presidentsImage.getAttribute('src')

presidentsImage.parentElement.style.background = "url('" + get_presidents_image + "') center center"
presidentsImage.parentElement.style.backgroundSize = "cover"
presidentsImage.parentElement.style.backgroundRepeat = "no-repeat"

}
if(document.getElementById('presidents-image')){
let presidentsImage = document.getElementById('presidents-image')

let get_presidents_image = presidentsImage.getAttribute('src')

presidentsImage.parentElement.style.background = "url('" + get_presidents_image + "') center center"
presidentsImage.parentElement.style.backgroundSize = "cover"
presidentsImage.parentElement.style.backgroundRepeat = "no-repeat"

}



$(document).ready(function (){
    //fade all elements as page loads
    $('body').css({'opacity': 1})

    //gets images from html and send the image to css to be changed to a background image
    $('.image-container').each(function(){
        let get_blog_image = $(this).find('img').attr('src')
        $(this).css({
            'background': "url(" + get_blog_image + " ) center center",
            'background-size': '100% 100%',
            'background-repeat': 'no-repeat',
        })
    })
    $('.click').click( function (){
        $(this).find('.dropdown-menu').slideToggle('hide-dropdown')
    })
    let navbar = $('.header-nav-section')
    let navbarHeight = navbar.outerHeight()
    $(window).scroll(()=>{
        let scrollY = $(window).scrollTop()
        let elementAfterNavbar = navbar.next();
        if(($('.dropdown-menu').is(':visible')) && $('.header-nav-section').width() > 970){
            $('.dropdown-menu').slideUp()
        }
        else if(($('.header-nav-section').width() < 970 && $('.brand-misc').is(':visible'))){
            $('.brand-misc').slideUp()
            $('.dropdown-menu').slideUp()
        }
        else if(scrollY > navbarHeight ){
            // elementAfterNavbar.css('padding-top', navbar.height() + 'px')
            navbar.addClass('sticky').slideDown()
        }else{
            navbar.removeClass('sticky')
        }
    })
    $('.nav__toggle').click( function (){
        $('.brand-misc').slideToggle('hide-dropdown')
    })
    $(document).click( function (e){
       
        let target = $(e.target)
        if($('.header-nav-section').width() < 970 && !target.closest('.header-nav-section').length ){
            $('.brand-misc').slideUp('hide-dropdown')
           
        }
        if(!target.closest('.click').length ){
        $(this).find('.dropdown-menu').slideUp('hide-dropdown')

        }
    })
    $('.blog-card').each( function() {
        let bannerElement = $('<span></span>')
        let bannerText  = $(this).data('bannerType')
        console.log(bannerText)
        if(bannerText !== undefined){
            bannerElement.attr('class', 'banner')
            bannerElement.text(bannerText)
            $(this).find('.card-details').prepend(bannerElement)
            if(bannerElement.text() == 'seminar'){
                bannerElement.attr('class', 'banner yellow')

            }
            else if(bannerElement.text() == 'sport'){
                bannerElement.attr('class', 'banner green')

            }
            else if(bannerElement.text() == 'workshop'){
                bannerElement.attr('class', 'banner blue')

            }
            else if(bannerElement.text() == 'social event'){
                bannerElement.attr('class', 'banner purple')

            }
            else if(bannerElement.text() == 'blog post'){
                bannerElement.attr('class', 'banner cyan')

            }
        }
      
    })
    $('.card').each( function() {
        let bannerElement = $('<p></p>')
        let bannerText  = $(this).data('bannerType')
        console.log(bannerText)
        if(bannerText !== undefined){
            bannerElement.attr('class', 'banner')
            bannerElement.text(bannerText)
            $(this).append(bannerElement)
            if(bannerElement.text() == 'seminar'){
                bannerElement.attr('class', 'banner yellow')

            }
            else if(bannerElement.text() == 'sport'){
                bannerElement.attr('class', 'banner green')

            }
            else if(bannerElement.text() == 'workshop'){
                bannerElement.attr('class', 'banner blue')

            }
            else if(bannerElement.text() == 'social event'){
                bannerElement.attr('class', 'banner purple')

            }
            else if(bannerElement.text() == 'blog post'){
                bannerElement.attr('class', 'banner cyan')

            }
        }
      
    })

    const fadeItems  = $('.fade-item')

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.35,
    }

    //fade items in using observer
    const observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                $(entry.target).addClass("fade-and-slide-in")
                
                observer.unobserve(entry.target)
            }
        })
    }, options)
   
    fadeItems.each(function(index, item){
        observer.observe(item)
    })









    

    // cookies
    
//     function hasAcceptedCookies(){
//         return document.cookie.includes("cookiesAccepted=true")
//     }
//     function hasRejectedCookies(){
//         return document.cookie.includes("cookiesRejected=true")
//     }
//     function setCookie(name, value, days){
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
//         const expires = "expires=" + date.toUTCString();
//         document.cookie = name + "=" + value + ";" + expires + ";path=/";
//     }

//     //if cookies has not been accepted,
//     function showCookiesPopup(){
//         const cookiesPopup = $('#cookiesPopup')

//         //check if user has accepted cookies
//         if(!hasAcceptedCookies()){
//             // cookiesPopup.addClass("show")
//             cookiesPopup.css("opacity", 0)
//                 cookiesPopup.delay(5000).animate({"opacity":1}, 500);
            
//         }else{
//             cookiesPopup.hide()
//         }
//     }

//     function createCookiesPopup() {
//         const cookiesPopup = $("<div>", {
//             class: "cookies-popup",
//             id: "cookiesPopup",
//             html: `
//                <div class="container-fluid">
//              <h3>Cookies <i class="fa-solid fa-cookie cookie-icon"></i></h3>             
//                 <p> This website uses cookies to improve your experience. By continuing to use this site, you must have read our <a href="/cookiepolicy"> Cookies Policy</a>.</p>
//                <div class="cookie-button-container"> <button id="acceptCookiesButton">Accept</button>
//                <button id="rejectCookiesButton">Reject</button></div>
//                </div>
//             `
//         })
//         $('body').append(cookiesPopup)
//     }
//     function hideCookiesPopup(accepted){
//         const cookiesPopup = $('#cookiesPopup')

//         if(accepted){
//             setCookie("cookiesAccepted", "true", 30)
//         }else{
//             setCookie("cookiesRejected", "true", 5)
//         }
//         $(cookiesPopup).fadeOut();
//     }

//     createCookiesPopup()
//     $("#acceptCookiesButton").on("click", function(){
//         hideCookiesPopup(true)
//     })
//     $("#rejectCookiesButton").on("click", function(){
//         hideCookiesPopup(false)
//     })
//     showCookiesPopup()

$(document).ready(function (){

    // cookies
    
    function hasAcceptedCookies(){
        return document.cookie.includes("cookiesAccepted=true")
    }
    function hasRejectedCookies(){
        return document.cookie.includes("cookiesRejected=true")
    }
    function setCookie(name, value, days){
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    //if cookies has not been accepted,
    function showCookiesPopup(){
        const cookiesPopup = $('#cookiesPopup')

        //check if user has accepted cookies
        if(!hasAcceptedCookies() && !hasRejectedCookies()){
            // cookiesPopup.addClass("show")
            cookiesPopup.css("opacity", 0)
                cookiesPopup.delay(5000).animate({"opacity":1}, 500);
            
        }else{
            cookiesPopup.hide()
        }
    }

    function createCookiesPopup() {
        const cookiesPopup = $("<div>", {
            class: "cookies-popup",
            id: "cookiesPopup",
            html: `
            <div class="container-fluid">
                          <h3>Cookies <i class="fa-solid fa-cookie cookie-icon"></i></h3>             
                             <p> This website uses cookies to improve your experience. By continuing to use this site, you must have read our <a href="/cookiepolicy"> Cookies Policy</a>.</p>
                            <div class="cookie-button-container"> <button id="acceptCookiesButton">Accept</button>
                            <button id="rejectCookiesButton">Reject</button></div>
                          </div>
            `
        })
        $('body').append(cookiesPopup)
    }
    function hideCookiesPopup(accepted){
        const cookiesPopup = $('#cookiesPopup')

        if(accepted){
            setCookie("cookiesAccepted", "true", 30)
        }else{
            setCookie("cookiesRejected", "true", 5)
        }
        $(cookiesPopup).fadeOut();
    }

    createCookiesPopup()
    $("#acceptCookiesButton").on("click", function(){
        hideCookiesPopup(true)
    })
    $("#rejectCookiesButton").on("click", function(){
        hideCookiesPopup(false)
    })
    showCookiesPopup()
})

})

// let headermain = document.querySelector('header')
// const navigationObserver = new IntersectionObserver(
//     (entries) => {
//         let headernavsection = document.querySelector('.header-nav-section')
//         isnavintersecting = true;
//         entries.forEach((entry) => {
//             if (entry.isIntersecting && isnavintersecting === true) {
//                 headernavsection.classList.remove("sticky");
//                 isnavintersecting = false;
//             }
//             else if(headermain == null){
//                 headernavsection.classList.add("sticky");

//             }
//             else {
//                 headernavsection.classList.add("sticky");

//                 true;
//             }
//             entry.target.classList.add("appear");
//         });
//     },
//     {
//         threshold: 0,
//         rootMargin: "0px",
//     }
// );

// if(headermain == null){
//     navigationObserver.observe(document.body)
// }
// else{
//     navigationObserver.observe(headermain)
// }

let responsiveCard;
    
var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1.5,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
        
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 0,
            slidesPerGroup: 0,
            spaceBetween: 0,
        },
    },
    loop: false,
    loopFillGroupWithBlanck: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
