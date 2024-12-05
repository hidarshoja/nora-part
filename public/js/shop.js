const products = [
    {
      image: "assets/images/new-img/sipak2.webp",
      discount: "30%",
      title: "جلوبندی و سیبک",
      originalPrice: "50.000 تومان",
      discountedPrice: "45.000 تومان",
    },
    {
      image: "assets/images/new-img/oil2.webp",
      discount: "30%",
      title: "روغن موتور اسپیدی",
      originalPrice: "1080.000 تومان",
      discountedPrice: "900.000 تومان",
    },
    {
      image: "assets/images/new-img/butri.webp",
      discount: "30%",
      title: "باتری وارنا",
      originalPrice: "630.000 تومان",
      discountedPrice: "430.000 تومان",
    },
    {
      image: "assets/images/new-img/disck2.webp",
      discount: "30%",
      title: "دیسک و لنت ترمز",
      originalPrice: "600.000 تومان",
      discountedPrice: "420.000 تومان",
    },
    {
        title: "لاستیک بارز",
        originalPrice: "360.000 تومان",
        discountedPrice: "280.000 تومان",
        image: "assets/images/new-img/tire.webp",
        link: "#",
      },
      {
        title: "روغن اسپیدی",
        originalPrice: "140.000 تومان",
        discountedPrice: "90.000 تومان",
        image: "assets/images/new-img/oil.webp",
        link: "#",
      },
      {
        title: "فیلتر دو زمانه",
        originalPrice: "960.000 تومان",
        discountedPrice: "425.000 تومان",
        image: "assets/images/new-img/filter2.webp",
        link: "#",
      },
      {
        title: "برف پاک کن",
        originalPrice: "50.000 تومان",
        discountedPrice: "45.000 تومان",
        image: "assets/images/new-img/ezam.webp",
        link: "#",
      },
      {
        title: "فیلتر  ",
        originalPrice: "960.000 تومان",
        discountedPrice: "425.000 تومان",
        image: "assets/images/new-img/filter.webp",
        link: "#",
      },
  ];
  const allProduct = document.getElementById("all-product");
  
  products.forEach(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper');
    swiperSlide.innerHTML = `
       <div class="rounded-3xl leading-10 p-4" style="background-color: gainsboro;">
                        <a href="single-product.html" class="flex flex-col items-center justify-center">
                          <img class="mb-4" src="${product.image}" alt="">
                        </a>
                      <div class="text-center">
                        <a href="single-product.html">
                        <h3 class="font-YekanBakh-ExtraBold text-base"> 
                        ${product.title}
                        </h3></a>
                        <div class="flex justify-center gap-4 text-base mt-4">
                          <span class="line-through">
                          ${product.originalPrice}
                          </span>
                          <span class="text-yellow-500">
                          ${product.discountedPrice}
                          </span>
                        </div>    
                        <div class="flex justify-center gap-2 items-center mt-4">
                          <a class="bg-yellow-500 p-2 text-white rounded-lg" href="cart.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>                          
                          </a>
                       
                        </div>  
                      </div>
                    </div>
    `;
  
    allProduct.appendChild(swiperSlide);
  });