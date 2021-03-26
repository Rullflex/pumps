import 'lazysizes'
import UIkit from 'uikit'
import validate from 'validate.js'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    // CAPTURE FORM


    document.querySelectorAll(`.capture-form`).forEach((form, idx, sets) => {
        const phoneInput = form.querySelector('.input')
        let mask
        phoneInput.addEventListener(`focusin`, () => {
            if (phoneInput.name != 'Телеграм' && phoneInput.name != 'email') {
                
                mask = IMask(
                    phoneInput, {
                        mask: `+7 (000) 000-00-00`,
                        startsWith: `7`,
                        lazy: false,
                        country: `Russia`
                    })
            }
        }, {once: true})
        form.querySelectorAll('label').forEach((el, idx, set) => {
            el.addEventListener('click', ev => {
                if (ev.currentTarget.querySelector('input').value == 'Telegram') {
                    if (mask !== undefined) {mask.destroy()}
                    phoneInput.value = '@'
                    phoneInput.type = 'text'
                    phoneInput.name = 'Телеграм'
                    phoneInput.placeholder = '@name'
                    
                } else if (ev.currentTarget.querySelector('input').value == 'Email') {
                    if (mask !== undefined) {mask.destroy()}
                    phoneInput.value = ''
                    phoneInput.type = 'email'
                    phoneInput.name = 'email'
                    phoneInput.placeholder = 'name@email.com'
                } else {
                    if (mask === undefined || mask.el === undefined) {
                        phoneInput.value = '+7'
                        phoneInput.type = 'tel'
                        phoneInput.name = 'Телефон'
                        phoneInput.placeholder = '+7 (999) 999-99-99'
                        mask = IMask(
                            phoneInput, {
                                mask: `+7 (000) 000-00-00`,
                                startsWith: `7`,
                                lazy: false,
                                country: `Russia`
                            }) 
                    }
                    
                }
            })
        })
        
        
    })
    
    
    

    document.querySelectorAll(`.popup`).forEach(e => e.addEventListener('beforeshow', () => UIkit.dropdown(`.header .uk-navbar-dropdown`).hide(0)))

    if (document.querySelector(`.director__link-moretext`)) {
        document.querySelector(`.director__link-moretext`).addEventListener(`click`, (ev) => {
            ev.preventDefault()
            ev.target.closest(`.director`).querySelectorAll(`.sm-hid`).forEach( elem => {
                elem.classList.add('reveal')
            })
            ev.target.classList.add(`d-none`)
        })
    }
        
    // map
    if (document.querySelector(`.contacts__map`)) {
        UIkit.scrollspy(`.contacts__map`)
        document.querySelector(`.contacts__map`).addEventListener(`inview`, (event) => {
            document.querySelector(`.contacts__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.667277934908!2d37.69852651613655!3d55.712155002593455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4d89a045823%3A0x1ecdfec22421b7e5!2zMy3QuSDQo9Cz0YDQtdGI0YHQutC40Lkg0L_RgC3QtCwgMTUsINCc0L7RgdC60LLQsCwgMTE1MDg4!5e0!3m2!1sru!2sru!4v1616064460854!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
        })
    }
    

    // O-NAS

    // tab-switcher
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s07__tab`, {
            finite: true,
        })
    }
    UIkit.switcher(`.s07__slide-tab`, {
        connect: `.s07__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-slide-right-medium, uk-animation-slide-left-medium'
    })
    
    document.querySelectorAll(`.s07__slide-btn`).forEach(el => {
        el.addEventListener(`click`, ev => {
            ev.preventDefault()
            const idx = app.indexOfElements(document.querySelector(`.s07__slide-tab .switcher-active`), document.querySelector(`.s07__slide-tab .switcher-active`).parentElement.children)
            UIkit.switcher(`.s07__slide-tab`).show(idx  + 1)
        })
    })

    document.querySelectorAll(`.s07__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            const idx = app.indexOfElements(event.target, event.target.parentElement.children)
            app.changeActivitySet(document.querySelectorAll(`.s07__tab-item`), idx)
            if (window.innerWidth < app.lg) {
                UIkit.slider(`.s07__tab`).show(idx)
            }
        })
    })


    // stoimost-remonta
    if (document.querySelector(`.s13__link-moretext`)) {
        document.querySelector(`.s13__link-moretext`).addEventListener(`click`, (ev) => {
            ev.preventDefault()
            ev.target.closest(`.s13`).querySelectorAll(`.sm-hid`).forEach( elem => {
                elem.classList.add('reveal')
            })
            ev.target.classList.add(`d-none`)
        })
    }
    

})
