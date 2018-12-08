import Vue from "vue";
import './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
 

Vue.directive('highlight', {
  bind(el, binding, vnode) {
      //el.style.backgroundColor = binding.value;
      var delay = 0;
    
      if (binding.modifiers['delayed']) {
        delay = 3000;
      }
      setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }

  
});

Vue.config.productionTip = false;

new Vue({

router,
  store,
  render: h => h(App)
}).$mount("#app");


