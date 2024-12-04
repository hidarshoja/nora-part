const categories = [
    {
      image: "assets/images/new-img/light2.png",
      title: "سیستم روشنایی",
      link: "#"
    },
    {
      image: "assets/images/new-img/sipak-nora.jpg",
      title: "جلوبندی",
      link: "#"
    },
    {
      image: "assets/images/new-img/lent.webp",
      title: "سیستم ترمز",
      link: "#"
    },
    {
      image: "assets/images/new-img/disck2.webp",
      title: "سیستم موتوری",
      link: "#"
    },
    {
      image: "assets/images/new-img/oil.webp",
      title: "روغن موتور",
      link: "#"
    },
    {
      image: "assets/images/new-img/ring.webp",
      title: "تزیینات",
      link: "#"
    },
    {
      image: "assets/images/new-img/sipak2.webp",
      title: "گیریبکس",
      link: "#"
    }
  ];

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
  ];

  const bestSellingProducts = [
    {
      name: "دیسک ایران خودرو",
      originalPrice: "600.000 تومان",
      discountedPrice: "500.000 تومان",
      stock: "7 از 20",
      imgSrc: "assets/images/new-img/disk.webp",
      progressValue: 70
    },
    {
      name: "سیبک",
      originalPrice: "50.000 تومان",
      discountedPrice: "45.000 تومان",
      stock: "7 از 20",
      imgSrc: "assets/images/new-img/sipak.webp",
      progressValue: 70
    },
    {
      name: "فیلتر هوا",
      originalPrice: "50.000 تومان",
      discountedPrice: "45.000 تومان",
      stock: "7 از 20",
      imgSrc: "assets/images/new-img/filter.webp",
      progressValue: 70
    },
    {
      name: "لاستیک بارز",
      originalPrice: "843.000 تومان",
      discountedPrice: "841.000 تومان",
      stock: "7 از 20",
      imgSrc: "assets/images/new-img/tire.webp",
      progressValue: 70
    },
    {
      name: "روغن سه و نیم لیتری",
      originalPrice: "50.000 تومان",
      discountedPrice: "45.000 تومان",
      stock: "7 از 20",
      imgSrc: "assets/images/new-img/oil3.webp",
      progressValue: 70
    }
  ];

  const newProducts = [
    {
      name: "لاستیک بارز",
      oldPrice: "360.000 تومان",
      newPrice: "280.000 تومان",
      image: "assets/images/new-img/tire.webp",
      link: "#",
    },
    {
      name: "روغن اسپیدی",
      oldPrice: "140.000 تومان",
      newPrice: "90.000 تومان",
      image: "assets/images/new-img/oil.webp",
      link: "#",
    },
    {
      name: "فیلتر دو زمانه",
      oldPrice: "960.000 تومان",
      newPrice: "425.000 تومان",
      image: "assets/images/new-img/filter2.webp",
      link: "#",
    },
    {
      name: "برف پاک کن",
      oldPrice: "50.000 تومان",
      newPrice: "45.000 تومان",
      image: "assets/images/new-img/ezam.webp",
      link: "#",
    },
    {
      name: "فیلتر  ",
      oldPrice: "960.000 تومان",
      newPrice: "425.000 تومان",
      image: "assets/images/new-img/filter.webp",
      link: "#",
    },
  ];

  const productList = [
    {
      imgSrc: "assets/images/product-5.jpg",
      title: "کیف کمری ابزار",
      originalPrice: "360.000 تومان",
      discountedPrice: "280.000 تومان",
    },
    {
      imgSrc: "assets/images/new-img/manual.webp",
      title: "استوپر دستی",
      originalPrice: "140.000 تومان",
      discountedPrice: "90.000 تومان",
    },
    {
      imgSrc: "assets/images/new-img/oil3.webp",
      title: "روغن موتور",
      originalPrice: "960.000 تومان",
      discountedPrice: "425.000 تومان",
    },
    {
      imgSrc: "assets/images/new-img/filter2.webp",
      title: "فیلتر روغن",
      originalPrice: "50.000 تومان",
      discountedPrice: "45.000 تومان",
    },
    {
        imgSrc: "assets/images/new-img/manual.webp",
        title: "استوپر دستی",
        originalPrice: "140.000 تومان",
        discountedPrice: "90.000 تومان",
      },
  ];


  const swiperWrapper = document.getElementById('swiper-wrapper');
  const swiperWrapperTwo = document.getElementById('swiper-wrapper-two');
  const swiperWrapperThree = document.getElementById('swiper-wrapper-three');
  const swiperWrapperFour = document.getElementById('swiper-wrapper-four');
  const swiperWrapperFive = document.getElementById('swiper-wrapper-five');

  categories.forEach(category => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    
    swiperSlide.innerHTML = `
      <div class="border border-slate-200 bg-white rounded-3xl leading-10">
        <a href="${category.link}" class="flex flex-col items-center justify-center p-4">
          <img class="mb-4" style="width: 150px; height: 150px;" src="${category.image}" alt="">
          <h3 class="font-YekanBakh-ExtraBold text-base">${category.title}</h3>
        </a>
      </div>
    `;
    
    swiperWrapper.appendChild(swiperSlide);
  });

  products.forEach(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `
      <div class="bg-white rounded-3xl leading-10 p-4">
        <div class="relative">
          <a href="#" class="flex flex-col items-center justify-center">
            <img class="mb-4" src="${product.image}" alt="">
          </a>
          <div class="bg-yellow-500 absolute top-2 right-2 rounded-full w-10 h-10">
            <p class="flex items-center justify-center">30%</p>
          </div>
        </div>
        <div class="text-center">
          <a href="#"><h3 class="font-YekanBakh-ExtraBold text-base">${product.title}</h3></a>
          <div class="flex justify-center gap-4 text-base mt-4">
            <span class="line-through">${product.originalPrice}</span>
            <span class="text-yellow-500">${product.discountedPrice}</span>
          </div>
        </div>
        <div class="flex justify-center gap-2 items-center mt-4">
          <a class="bg-yellow-500 p-2 text-white rounded-lg" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </a>
          <a class="bg-yellow-500 p-2 text-white rounded-lg" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
          </a>
        </div>
      </div>
    `;
  
    swiperWrapperTwo.appendChild(swiperSlide);
  });

  bestSellingProducts.map(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
  
    swiperSlide.innerHTML = `
      <div class="bg-white rounded-3xl leading-10 relative p-4">
        <div class="flex items-center justify-center">
          <div>
            <a href="#"> <img class="w-32" src="${product.imgSrc}" alt="${product.name}"></a>
          </div>
          <div>
            <a href="#"><h3 class="font-YekanBakh-ExtraBold text-base">${product.name}</h3></a>
            <div class="flex justify-center gap-4 text-base mt-4">
              <span class="line-through">${product.originalPrice}</span>
              <span class="text-yellow-500">${product.discountedPrice}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center text-sm justify-center gap-4">
          <div>موجودی: ${product.stock}</div>
          <div><progress class="progress progress-warning w-48 md:w-56" value="${product.progressValue}" max="100"></progress></div>
        </div>
      </div>
    `;
  
    // اضافه کردن اسلاید به swiper-wrapper
    swiperWrapperThree.appendChild(swiperSlide);
  });

  newProducts.map(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `
      <div class="bg-white rounded-3xl leading-10 p-4">
        <a href="${product.link}" class="flex flex-col items-center justify-center">
          <img class="mb-4" src="${product.image}" alt="">
        </a>
        <div class="text-center">
          <a href="${product.link}"><h3 class="font-YekanBakh-ExtraBold text-base">${product.name}</h3></a>
          <div class="flex justify-center gap-4 text-base mt-4">
            <span class="line-through">${product.oldPrice}</span>
            <span class="text-yellow-500">${product.newPrice}</span>
          </div>  
          <div class="flex justify-center gap-2 items-center mt-4">
            <a class="bg-yellow-500 p-2 text-white rounded-lg" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>                          
            </a>
            <a class="bg-yellow-500 p-2 text-white rounded-lg" href="comparison.html">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
            </a>
          </div>  
        </div>
      </div>
    `;
    swiperWrapperFour.appendChild(swiperSlide);
  });

  productList.map(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `
    <div class="swiper-slide">
              <div class="bg-white rounded-3xl leading-10 p-4">
                  <a href="${product.link}" class="flex flex-col items-center justify-center">
                    <img class="mb-4" src="${product.imgSrc}" alt="">
                  </a>
                <div class="text-center">
                  <a href="${product.link}"><h3 class="font-YekanBakh-ExtraBold text-base"> ${product.title}</h3></a>
                  <div class="flex justify-center gap-4 text-base mt-4">
                    <span class="line-through">${product.originalPrice}</span>
                    <span class="text-yellow-500">${product.discountedPrice}</span>
                  </div>  
                  <div class="flex justify-center gap-2 items-center mt-4">
                    <a class="bg-yellow-500 p-2 text-white rounded-lg" href="${product.link}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>                          
                    </a>
                    <a class="bg-yellow-500 p-2 text-white rounded-lg" href="${product.link}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                      </svg>
                      
                    </a>
                  </div>  
                </div>
              </div>
            </div>
    `;
    swiperWrapperFive.appendChild(swiperSlide);
  });

  
  