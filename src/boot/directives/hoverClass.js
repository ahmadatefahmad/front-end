import Vue from 'vue'

export default Vue.directive('hoverClass', {
  bind(el, binding, vnode) {    

    const { value="" } = binding;

    el.addEventListener('mouseenter',()=> {
      el.classList.add(...value.split(' '))
    });
      el.addEventListener('mouseleave',()=> {
        el.classList.remove(...value.split(' '))
    })
  }
})