<template>
  <q-drawer
        show-if-above
        :mini="$store.getters.miniState"
        @mouseover="!stateInput ? $store.commit('toggleSidebarState') : ''"
        @mouseout="!stateInput ? $store.commit('toggleSidebarState') : ''"
        :breakpoint="1023"
        elevated
        content-class="bg-background text-color"
        class="text-h6"
      >
      
        <q-scroll-area class="fit ">
          <q-list class="q-pa-sm ">
            
            <q-item
              class="rounded-borders items-center justify-end"
              v-if="$q.screen.width >1023">
              <q-icon size="20px" class="cursor-pointer"  @click="stateInput = !stateInput" :name="!stateInput ? 'radio_button_unchecked' : 'radio_button_checked'" />

            </q-item>

            <q-item
              class="rounded-borders"
              v-hoverClass="$router.currentRoute.path == page.route ?'': 'shadow-10 bg-hover'"
              :class="$router.currentRoute.path == page.route ? 'bg-hover shadow-10' : ''"
              clickable
              v-ripple
              v-for="(page,index) in pages" :key="index"
              @click="$router.push(page.route)">

                <q-item-section avatar>
                  <q-icon
                    size="20px"
                    :name="page.icon"/>
                </q-item-section>

                <q-item-section class="text-weight-light">
                  {{page.name}}
                </q-item-section>
            </q-item>

          </q-list>
          
        </q-scroll-area>
        
  </q-drawer>
</template>

<script>
export default {
  data(){
    return{
      stateInput: false,
      pages:
      [
        {
        name: 'Chat',
        icon: 'chat',
        route: '/chat'
        },
        {
        name: 'Files',
        icon: 'folder',
        route: '/files'
        },
        {
        name: 'E-commerce',
        icon: 'store',
        route: 'not here yet'
        },
        {
        name: 'Calendar',
        icon: 'event',
        route: 'not here yet'
        },

      ]
    }
  },
}
</script>

<style scoped>

</style>