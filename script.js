const openImg = (event) => {
    const imgInfo = event.path[0]

    closeImg = () => {
        const popup = document.getElementById('popup')
        if (popup) {
            popup.remove()
        }
    }

    const root = document.getElementById('root')
    const backdrop = document.createElement('div')
    backdrop.setAttribute('id', 'backdrop')
    backdrop.setAttribute('onclick', 'closeImg()')

    const popup = document.createElement('div')
    popup.setAttribute('id', 'popup')
    popup.setAttribute('class', 'popup')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'popup__close-btn')
    closeBtn.setAttribute('onclick', 'closeImg()')
    closeBtn.innerHTML = '&#10060;'
    
    const img = new Image()
    img.setAttribute('class', 'popup__img')
    img.src = imgInfo.src
    img.alt = imgInfo.alt

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'popup__wrapper')

    wrapper.prepend(img)
    wrapper.prepend(closeBtn)
    
    popup.prepend(wrapper)
    popup.prepend(backdrop)
    root.prepend(popup)
}
