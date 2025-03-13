'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
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
        
        
        // else {
        //     item.addEventListener('mouseenter', ()=> {
        //         listMenu[i].classList.remove('hide');
        //         listMenu[i].classList.add('show')
        //     });
        // }
      
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
        // else {
        //     item.addEventListener('mouseleave', ()=> {
        //         item.classList.add('hide') 
        //     })
        // }
       
    })
     
})