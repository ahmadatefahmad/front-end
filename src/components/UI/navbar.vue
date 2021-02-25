<template>
  <q-header
    reveal
    :class="$q.screen.width > 1023 ? 'q-mx-xl' : 'q-mx-lg'"
    class="q-py-xs q-my-md shadow-5 bg-background rounded-borders">

    <!-- Toolbar -->
    <q-toolbar>
      
      <!-- Shortcut icons -->
      <div v-if="$q.screen.width>1023">

        <q-btn flat round dense class="q-mr-sm" icon="chat"/>
        <q-btn flat round dense class="q-mr-sm" icon="event"/>
        <q-btn flat round dense class="q-mr-sm" icon="library_add_check "/>

      </div>

      <!-- Sidebar trigger button -->
     
      <q-space/>

      <!-- locale -->
      <q-btn flat>
        <country-flag :country='$q.lang.getLocale().slice(3,5)'  size="normal"/>

        <q-menu :offset="[12, 12]" transition-show="flip-up" transition-hide="flip-down" >
          <q-list class="q-pa-none" style="min-width: 100px">

            <q-item @click="log" class="items-center" clickable v-close-popup>
               <country-flag country="hu" size="normal"/> &nbsp Hungarian
            </q-item>

            <q-separator inset />

            <q-item clickable v-close-popup>
              <country-flag country="fr" size="normal"/> &nbsp French
            </q-item>

          </q-list>
         
          
          <!-- <q-btn flat> <country-flag country="es" size="normal"/> &nbsp Spanish</q-btn> -->
        </q-menu>
        
        
      </q-btn>

      <!-- Notifications -->
      <q-btn flat round dense icon="notifications_none" class="q-mr-sm">
        <q-badge class="absolute-top-right" color="red" label="1"/>
          <q-menu transition-show="flip-up" transition-hide="flip-down">
            <q-list>
              <q-item clickable v-ripple>

                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                    <q-badge floating color="teal">new</q-badge>
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Mary</q-item-label>
                  <q-item-label caption>2 new messages</q-item-label>
                </q-item-section>

                <q-item-section side> 3 min ago</q-item-section>

              </q-item>
            </q-list>
        </q-menu>
      </q-btn>
    
      <!-- Dark mode toggle -->
      <q-btn
        flat
        round
        dense
        :icon=" $q.dark.mode? 'light' : 'nightlight'"
        class="q-mr-sm"
        @click="$q.dark.toggle" />

      <!-- User info -->
      <q-chip v-ripple="false" class="userInfo" clickable v-if="$q.screen.width>1023">
        John Doe
      <q-avatar class="q-pl-lg">
        <img src="https://cdn.quasar.dev/img/avatar5.jpg" alt="user profile picture">
      </q-avatar>
      </q-chip>

      <!-- User info (small screen) -->
      <q-avatar class="lt-md userInfo" >
        <img src="https://cdn.quasar.dev/img/avatar5.jpg" alt="user profile picture">
      </q-avatar>

      <!-- User info menu -->
      <q-menu target=".userInfo" transition-show="flip-up" transition-hide="flip-down" :offset="[12, 12]" >
          <q-list style="min-width: 100px">

            <q-item @click="log" class="items-center" clickable v-close-popup>
              <q-icon name="settings" class="on-left" size="20px" /> SETTINGS
            </q-item>

            <q-separator inset />

            <q-item clickable v-close-popup>
              <q-icon name="logout" class="on-left" size="20px" /> LOGOUT
            </q-item>

          </q-list>
      </q-menu>
     


    </q-toolbar>

  </q-header>
</template>

<script>

import CountryFlag from 'vue-country-flag'

export default {

  name: 'navbar',

  data() {
    return {
      
    }
  },

  mounted(){
  },

  components: {
    CountryFlag
  },

  methods:{
    log(){
      console.log("working")
    }
  }

}
   
</script>
<style scoped>



</style>

 
 
        