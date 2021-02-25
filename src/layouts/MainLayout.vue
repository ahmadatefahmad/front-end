<template>
  <q-layout view="lHh Lpr lFf" class="bg-main">

    <!-- NavBar -->
    <navbar/>
    
    <!-- Sidebar -->
    <sidebar/>

    <!-- Page Container -->
    <q-page-container>
      <router-view
        class="rounded-borders shadow-5 bg-background"
        :class="$q.screen.width > 1023 ? 'q-ma-xl' : 'q-ma-lg'"
        style="height: 80vh" />
    </q-page-container>

  </q-layout>
</template>

<script>
import navbar from 'components/UI/navbar.vue'
import sidebar from 'components/UI/sidebar.vue'

export default {
  name: 'MainLayout',
  components: { navbar, sidebar},
  data () {
    return {
    }
  }
}
</script>