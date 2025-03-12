'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    const listItem = document.querySelectorAll('.nav__list-item--menu'),
          listMenu = document.querySelectorAll('.nav__list-item--list');

    listItem.forEach((item, i)=> {
        item.addEventListener('mouseenter', ()=> {
            listMenu[i].style.cssText = `
                visibility: visible;
                opacity:1;
            `
        })
    });

    listMenu.forEach((item, i)=> {
        item.addEventListener('mouseleave', ()=> {
            item.style.cssText = `
              visibility: hidden;
              opacity:0;
            `; 
        })
    })
    // listItem.addEventListener('mouseenter', (e)=> {
    //     listMenu.style.cssText = `
    //         visibility: visible;
    //         opacity:1;
    //     `
    // });   
    // listMenu.addEventListener('mouseleave', (e)=> {
    //     if(e.target === listMenu) {
    //         listMenu.style.cssText = `
    //             visibility: hidden;
    //             opacity:0;
    //         `; 
    //     }            
    // });      
})