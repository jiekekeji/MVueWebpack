import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
<<<<<<< HEAD
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
=======
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
>>>>>>> origin/master
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
