import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/:id',
            name: 'Page2',
            component: Page2
        }
    ]
})
