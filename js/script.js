const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    title.addEventListener('click', () => {
//        descr.classList.remove('active') удаляет элемент при нажатии на Неделя 1
//        descr.classList.add('active') добавляет дискрипшин для других Недель
        descr.classList.toggle('active') // добавляет и удаляет дискрипшин
    }) 
})