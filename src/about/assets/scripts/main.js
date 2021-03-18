import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    // tab-switcher
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s3__tab`, {
            finite: true,
        })
    }
    UIkit.switcher(`.s3__slide-tab`, {
        connect: `.s3__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-slide-right-medium, uk-animation-slide-left-medium'
    })
    
    document.querySelectorAll(`.s3__slide-btn`).forEach(el => {
        el.addEventListener(`click`, ev => {
            ev.preventDefault()
            const idx = app.indexOfElements(document.querySelector(`.s3__slide-tab .switcher-active`), document.querySelector(`.s3__slide-tab .switcher-active`).parentElement.children)
            UIkit.switcher(`.s3__slide-tab`).show(idx  + 1)
        })
    })

    document.querySelectorAll(`.s3__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            const idx = app.indexOfElements(event.target, event.target.parentElement.children)
            app.changeActivitySet(document.querySelectorAll(`.s3__tab-item`), idx)
            if (window.innerWidth < app.lg) {
                UIkit.slider(`.s3__tab`).show(idx)
            }
        })
    })
    // map
    UIkit.scrollspy(`.contacts__map`)
    document.querySelector(`.contacts__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.contacts__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.667277934908!2d37.69852651613655!3d55.712155002593455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4d89a045823%3A0x1ecdfec22421b7e5!2zMy3QuSDQo9Cz0YDQtdGI0YHQutC40Lkg0L_RgC3QtCwgMTUsINCc0L7RgdC60LLQsCwgMTE1MDg4!5e0!3m2!1sru!2sru!4v1616064460854!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })

    document.querySelector(`.director__link-moretext`).addEventListener(`click`, (ev) => {
        ev.preventDefault()
        ev.target.closest(`.director`).querySelectorAll(`.sm-hid`).forEach( elem => {
            elem.classList.add('reveal')
        })
        ev.target.classList.add(`d-none`)
    })
})
