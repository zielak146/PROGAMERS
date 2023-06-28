document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')



     function addBackground() {
      if (window.scrollY >= 1) {
        nav.classList.add('nav-background');
      } else {
        nav.classList.remove('nav-background');
      }
    }
 
    allNavItems.forEach(item => item.addEventListener('click', () => {
      navList.classList.remove('show')
    }))

    window.addEventListener('scroll',addBackground)
  })

//   const allNavItems = document.querySelectorAll('.nav-link');
//   const navList = document.querySelector('.navbar-collapse');

//  allNavItems.forEach(item => item.addEventListener('click' , () => {navList.classList.remove('show')}))



