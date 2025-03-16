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
    const header = document.querySelector('.header'),
          nav = document.querySelector('.nav'),
          hanburger = document.querySelector('.hamburger');
    hanburger.addEventListener('click', (e)=> {
        header.classList.toggle('open');
        nav.classList.toggle('open');
    });
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
    //Отправкка формы
})