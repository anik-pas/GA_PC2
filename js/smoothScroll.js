const smoothScroll = () => {
    const navbar = document.querySelector('.header__nav')
    const link = navbar.querySelectorAll('a')

    link.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            const section = document.querySelector(link.getAttribute('href'))

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        })
    })
}

smoothScroll()