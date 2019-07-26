const navSlide = () => {
  const burger = document.querySelector('.burger-wrapper'),
        nav = document.querySelector('.menu-list')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
}

navSlide()