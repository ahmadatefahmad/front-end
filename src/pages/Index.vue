<template>
  <div class="flex flex-center bg-background">
  <q-btn label="add Route DYNAMICALLY" @click="addroute"/>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  
  methods:{
    addroute(){
      this.$router.addRoutes([{
    path: '/files',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/files', component: () => import('pages/chat.vue') }
    ]
  }])
  }
},
watch: {
      $route:{
        immediate: true,
        handler(to, from) {
        console.log(to)
        console.log(from)
      }
    },
}
}

</script>
