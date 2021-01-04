import { VNode, VNodeDirective } from 'vue'
const VContextmenu = {
  mounted (el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
    console.log(el, binding)
    const vm = binding.instance
    console.log(vm, 'vm')
    // const instance = ContextMenu({
    //   visible: !!binding.value
    // })
    // el.instance = instance
  },
  unmounted () {
    console.log('unmounted')
  }
}

export default VContextmenu
