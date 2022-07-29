import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Bootstrap - Datatable
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'jquery/dist/jquery.min.js'

library.add(fas)

const app = createApp(App)
app.use(router, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
