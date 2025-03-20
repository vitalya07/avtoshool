'use strict'
document.addEventListener('DOMContentLoaded', ()=> {   
    //Выпадающее меню
    const listItem = document.querySelectorAll('.nav__list-item--menu'),
          listMenu = document.querySelectorAll('.nav__list-item--list');

    listItem.forEach((item, i)=> {
        if(window.innerWidth < 993) {
            item.addEventListener('click', ()=> {
                listMenu[i].classList.toggle('hide');
            });
        } 
        if(window,innerWidth > 993) {
            item.addEventListener('mouseenter', ()=> {
                listMenu[i].classList.remove('hide');
                listMenu[i].classList.add('show')
            });
        }       
    });

    listMenu.forEach((item)=> {
        if(window.innerWidth < 993) {
            item.addEventListener('click', (e)=> {
                if(e.target.classList.contains('nav')) {
                    item.classList.add('hide') 
                }
                
            })
        }       
        if(window.innerWidth > 993) {
            item.addEventListener('mouseleave', ()=> {
                item.classList.add('hide') 
            })
        }
       
    });
    // гамбургер и навигационное меню
    const menu = document.querySelectorAll('[data-menu]'),
          nav = document.querySelectorAll('.nav'),
          hanburger = document.querySelector('.hamburger');
    hanburger.addEventListener('click', (e)=> {
        menu.forEach(menu => {
            menu.classList.toggle('open');
        })
        nav.forEach(nav => {
            nav.classList.toggle('open');
        })
    });


    //calc
    const calcItem = document.querySelectorAll('.calc__right-inner--item'), 
          calcNext = document.querySelector('#next'),
          calcPrev = document.querySelector('#prev'),
          calcProgress = document.querySelector('.calc__right-line--bg'),
          calcWrapper = document.querySelector('.calc__right-wrapper'),
          calcInner = document.querySelector('.calc__right-inner'),
          calcWidth = window.getComputedStyle(calcWrapper).width; 
    let offset = 0; 
    let currentSlide = 0;

    function checkSlider() {
        const totalSlides = calcItem.length;
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;    
        const roundedPercentage = Math.round(progressPercentage / 25) * 25;    
        calcProgress.style.width = `${roundedPercentage}%`;
        calcProgress.innerHTML = `${roundedPercentage}%`
    }     

    calcInner.style.width = 100 * calcItem.length + '%';

    calcItem.forEach(item => {
        item.style.width = `100%`;
    });

    function updateNextButtonState() {
        let isAnyRadioChecked = false;
        calcItem.forEach(group => {
            const radios = group.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                if (radio.checked) {
                    isAnyRadioChecked = true;
                }
            });
        });
        calcNext.disabled = !isAnyRadioChecked;
    }
    calcItem.forEach(group => {
        const radios = group.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', updateNextButtonState);
        });
    });
    calcPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            offset -= parseInt(calcWidth); // Уменьшаем смещение
            calcInner.style.transform = `translateX(-${offset}px)`;
            checkSlider(); // Обновляем прогресс
        }
    });

    calcNext.addEventListener('click', ()=> {
        if (currentSlide < calcItem.length - 1) {
            currentSlide++;
            offset += parseInt(calcWidth); // Увеличиваем смещение
            calcInner.style.transform = `translateX(-${offset}px)`;
            checkSlider(); // Обновляем прогресс
        }
        
        // calcInner.style.transform = `translateX(-${offset}px)`
        // console.log(offset)
    })
    // calcNext.addEventListener('click', (e)=> {
    //     if(offset == +calcWidth.slice(0, calcWidth.length -2) * (calcItem.length -1)) {
    //         offset = 0
    //     } else {
    //         offset += +calcWidth.slice(0, calcWidth.length -2)
    //     }
        
    //     calcInner.style.transform = `translateX(-${offset}px)`
    //     checkSlider()
    // });

    // calcPrev.addEventListener('click', ()=> {
    //     if (offset == 0) {
    //         offset = +calcWidth.slice(0, calcWidth.length -2) * (calcItem.length -1)
    //     } else {
    //         offset -= +calcWidth.slice(0, calcWidth.length -2)
    //     }
       
    //     calcInner.style.transform = `translateX(-${offset}px)`
    //     checkSlider()
    // })

   
    
    



    //slide 
    new Splide('#slider1', {
        rewind : true,
        perPage: 2,
        gap    : '2rem',
        pagination: false,
        gap: '19px',
        breakpoints: {
            993: { 
                perPage: 2, 
                padding: '2rem',                
            },
            768: { 
                perPage: 1,
                padding: '5rem',  
                arrows: false,    
            },
            556: { 
                padding: '3rem',      
            },
            450: { 
                padding: '1.7rem',      
            },
        },
    }).mount();
    new Splide('#slider2', {
        rewind : true,
        perPage: 3,
        gap    : '2rem',
        // pagination: false,
        gap: '19px',
        breakpoints: {
            993: { 
                perPage: 2, 
                padding: '2rem',                
            },
            768: { 
                perPage: 1,
                padding: '5rem',  
                arrows: false,    
            },
            556: { 
                padding: '3rem',      
            },
            450: { 
                padding: '1.7rem',      
            },
        },
    }).mount();
    new Splide('#slider3', {
        rewind : true,
        perPage: 3,
        gap    : '2rem',
        gap: '19px',
        breakpoints: {
            993: { 
                perPage: 2, 
                padding: '2rem',                
            },
            768: { 
                perPage: 1,
                padding: '5rem',  
                arrows: false,    
            },
            556: { 
                padding: '3rem',      
            },
            450: { 
                padding: '1.7rem',      
            },
        },
    }).mount();
    new Splide('#slider4', {
        rewind : true,
        perPage: 2,
        padding: '5rem', 
        pagination: false,
        breakpoints: {
            993: { 
                perPage: 2, 
                padding: '1rem',                
            },
            768: { 
                perPage: 1, 
                arrows: false,    
                padding: '6rem', 
            },
            556: { 
                padding: '1rem',      
            },
            450: { 
                padding: '1rem',      
            },
        },
    }).mount();
    new Splide('#slider5', {
        rewind : true,
        perPage: 1,
        pagination: false,
        breakpoints: {
            993: { 
                perPage: 1, 
                padding: '1rem',   
                gap: '20px'             
            },
            768: { 
                perPage: 1, 
                arrows: false,    
            },
            556: { 
                padding: '1rem',      
            },
            450: { 
                padding: '1rem',      
            },
        },
    }).mount();
    new Splide('#slider6', {
        rewind : true,
        perPage: 2,
        padding: '5rem', 
        pagination: false,
        breakpoints: {
            993: { 
                perPage: 2, 
                padding: '2rem', 
                gap: '20px'               
            },
            768: { 
                perPage: 1,   
            },
            556: { 
                arrows: false,     
                gap: '1px',
                padding: '0.2rem',
            },
        },
    }).mount();
    //табы
    const slides = document.querySelectorAll('.price__item');
    slides.forEach(slide => {
        const parentTabs = slide.querySelector('.price__item-tabs');
        const tab = slide.querySelectorAll('.price__item-tabs--tab');
        const  content = slide.querySelectorAll('.price__item-contents--content');

        parentTabs.addEventListener('click', (e)=> {
            const target = e.target;
            if (target.classList.contains('price__item-tabs--tab')) {
                tab.forEach((item, i)=> {
                    if(target == item) {
                        removeActiveClass(tab, content)
                        addActiveClass(i, tab, content)
                    }
                })
            } 
        });  
        function removeActiveClass() {
            tab.forEach(tab => {
                tab.classList.remove('active');
            });
            content.forEach(item => {
                item.style.display = 'none';
            });
        };     
        function addActiveClass(i = 0) {
            tab[i].classList.add('active');
            content[i].style.display = 'block';
        };   
        removeActiveClass();
        addActiveClass();
    }); 
    //tabs
    const perksItem = document.querySelectorAll('.perks__information-item');

    perksItem.forEach((item)=> {
        item.addEventListener('click', ()=> {
            item.classList.toggle('open')
        })
    });   
    //modal 
    const modal = document.querySelector('.modal');
    const btnModal = document.querySelectorAll('[data-modal]');
    
    function removeModalActive() {
        modal.classList.remove('open');
        modal.classList.add('exit');
        document.body.style.overflow = '';
    }
    function addModalActive() {
        modal.classList.add('open');
        modal.classList.remove('exit');
        document.body.style.overflow = 'hidden'
    };

    btnModal.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            addModalActive();
        })
    });
    modal.addEventListener('click', (e)=> {
        if(e.target === modal || e.target.classList.contains('modal__content-close')) {
            removeModalActive();
        };
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && modal.classList.contains('open')) {
            removeModalActive();
        }
    });
     //маска
    const form = document.querySelector('form')
    if(form) {
         let selector = document.querySelector('#phone');
         let phone = document.querySelector('#modal-phone');
         let im = new Inputmask("+7(999)999-99-99");
         if(selector) {
            im.mask(selector);
         }
         if(phone) {
            im.mask(phone);
         }           
         
     }; 
})