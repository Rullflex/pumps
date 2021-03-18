import 'lazysizes'
// import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    document.querySelector(`.director__link-moretext`).addEventListener(`click`, (ev) => {
        ev.preventDefault()
        ev.target.closest(`.director`).querySelectorAll(`.sm-hid`).forEach( elem => {
            elem.classList.add('reveal')
        })
        ev.target.classList.add(`d-none`)
    })
})
