import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()
    // map
    UIkit.scrollspy(`.contacts__map`)
    document.querySelector(`.contacts__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.contacts__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.667277934908!2d37.69852651613655!3d55.712155002593455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4d89a045823%3A0x1ecdfec22421b7e5!2zMy3QuSDQo9Cz0YDQtdGI0YHQutC40Lkg0L_RgC3QtCwgMTUsINCc0L7RgdC60LLQsCwgMTE1MDg4!5e0!3m2!1sru!2sru!4v1616064460854!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })
})
