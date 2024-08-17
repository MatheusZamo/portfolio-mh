const elementsForAnimation = document.querySelectorAll('[data-anime]')

const animationClass = 'animate'

const animeScroll = () => {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4)
    
    elementsForAnimation
        .forEach(element => windowTop > element.offsetTop 
            ? element.classList.add(animationClass) 
            : element.classList.remove(animationClass))
}

animeScroll()

if (elementsForAnimation.length) {
    window.addEventListener('scroll', animeScroll)
}



