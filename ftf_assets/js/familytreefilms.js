// // Run on page load
// $(document).ready(function(){
//     // const imageFilenames = ['GeoCruddenJr.jpg', 'GeoCruddenJr.jpg', 'GeoCruddenJr.jpg',  'GeoCruddenJr.jpg']; // Your list of filenames
//     // const imageFilenames = ['Cora Mae Hess Crudden2.jpg', 'CoraMaeHessrightandLoddie.JPG', 'cora_and_steeves.JPG', 'Cora_Crudden_at_51.jpg', 'Cruddens1903 copy.jpg', 'Cruddens1903copy.jpg', 'DallasandArdeliaSwift.JPG', 'GCCrudden back.jpg', 'GCCrudden front1.jpg', 'geo civil war buddies shamokinadjusted.jpg', 'GeoCruddenJr.JPG', 'George and Charles Crudden.jpg', 'George Sr and George Jr Crudden.jpg', 'George Sr and George Jr Crudden2.jpg', 'HelenandLenoreSwift.JPG', 'jack.JPG', 'josephcrudden.JPG', 'marycrudden600dpi.jpg', 'NedLeonSwift.JPG', 'nedswift2.JPG', 'nedswiftfamily1876.jpg', 'popcrudden.JPG'];
//     const imageFilenames = ['Cora Mae Hess Crudden2.jpg', 'CoraMaeHessrightandLoddie.jpg', 'cora_and_steeves.jpg', 'Cora_Crudden_at_51.jpg', 'Cruddens1903 copy.jpg', 'DallasandArdeliaSwift.jpg', 'GCCrudden back.jpg', 'GCCrudden front1.jpg', 'geo civil war buddies shamokinadjusted.jpg', 'GeoCruddenJr.jpg', 'George and Charles Crudden.jpg', 'George Sr and George Jr Crudden2.jpg', 'HelenandLenoreSwift.jpg', 'jack.jpg', 'josephcrudden.jpg', 'marycrudden600dpi.jpg', 'NedLeonSwift.jpg', 'nedswift2.jpg', 'nedswiftfamily1876.jpg', 'popcrudden.jpg'];
//     const imageContainer = document.querySelector('.crawl');

//     imageFilenames.forEach(filename => {
//         const div = document.createElement('div');
//         const img = document.createElement('img');

//         img.src = `../assets/images/carousel/${filename}`;
//         // path = `../assets/images/carousel/optimized/${filename}`
//         // img.setAttribute('data-lazy', path);
//         div.appendChild(img);
//         imageContainer.appendChild(div);
//     });


//     $('.crawl').slick({
//     //   setting-name: setting-value
//         // adaptiveHeight: true,
//         slidesToShow: 10,
//         // lazyLoad: 'progressive' // 'progressive' or 'ondemand'
//     });
//     // $(".crawl .placeholder").remove(); // remove placeholder
//   });           


// const imageFilenames = ['Cora Mae Hess Crudden2.jpg', 'CoraMaeHessrightandLoddie.jpg', 'cora_and_steeves.jpg', 'Cora_Crudden_at_51.jpg', 'Cruddens1903 copy.jpg', 'DallasandArdeliaSwift.jpg', 'GCCrudden back.jpg', 'GCCrudden front1.jpg', 'geo civil war buddies shamokinadjusted.jpg', 'GeoCruddenJr.jpg', 'George and Charles Crudden.jpg', 'George Sr and George Jr Crudden2.jpg', 'HelenandLenoreSwift.jpg', 'jack.jpg', 'josephcrudden.jpg', 'marycrudden600dpi.jpg', 'NedLeonSwift.jpg', 'nedswift2.jpg', 'nedswiftfamily1876.jpg', 'popcrudden.jpg'];
// const swiperWrapper = document.querySelector('.swiper-wrapper');

// imageFilenames.forEach(filename => {
//     const slide = document.createElement('div');
//     path = `../assets/images/carousel/optimized/${filename}`
//     slide.className = 'swiper-slide';
//     slide.innerHTML = `<img src="${path}" alt="Image Description">`;
//     swiperWrapper.appendChild(slide);
// });



// // Reinitialize Swiper after adding slides
// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     slidesPerView: 'auto',
//     freeMode: true,
//     loop: false,
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: "auto",
//     spaceBetween: 10,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


document.addEventListener('DOMContentLoaded', function() {

const imageFilenames = ['Cora Mae Hess Crudden2.jpg', 'CoraMaeHessrightandLoddie.jpg', 'cora_and_steeves.jpg', 'Cora_Crudden_at_51.jpg', 'Cruddens1903 copy.jpg', 'DallasandArdeliaSwift.jpg', 'GCCrudden back.jpg', 'GCCrudden front1.jpg', 'geo civil war buddies shamokinadjusted.jpg', 'GeoCruddenJr.jpg', 'George and Charles Crudden.jpg', 'George Sr and George Jr Crudden2.jpg', 'HelenandLenoreSwift.jpg', 'jack.jpg', 'josephcrudden.jpg', 'marycrudden600dpi.jpg', 'NedLeonSwift.jpg', 'nedswift2.jpg', 'nedswiftfamily1876.jpg', 'popcrudden.jpg'];
const swiperWrapper = document.querySelector('.swiper-wrapper');

imageFilenames.forEach(filename => {
    const slide = document.createElement('div');
    path = `../ftf_assets/assets/images/carousel/optimized/${filename}`
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${path}" alt="Image Description">`;
    swiperWrapper.appendChild(slide);
});


var swiper = new Swiper(".mySwiper", {
    initialSlide: 0,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

                 
    on: {
        
        init: function () {
            setTimeout(() => {
                this.slideTo(1, 0);
                this.autoplay.start();
                console.log('initialized');
            }, 500);  // delay of 100ms
        },
        

        imagesReady: function() {
            
            setTimeout(() => {
                this.slideTo(1, 0);
                console.log('images ready');
            }, 500);  // delay of 100ms
        }


    }
  });

  
  
});


