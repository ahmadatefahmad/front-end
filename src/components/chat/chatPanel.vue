<template>
  <div class="col-3 gt-sm overflow-hidden hide-scrollbar">
      
      <!-- Search -->
      <div class="row no-wrap q-pa-md q-gutter-md">

        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
        </q-avatar>

        <q-input class="full-width q-pl-sm" outlined rounded  label="Search" :dense="true">
          
          <template  v-slot:append>
            <q-icon name="search" />
          </template>

        </q-input>
      </div>

      <!--  -->
      <q-separator/>

      <!-- chat & contacts TABS -->
      <q-tabs
        v-model="panel"
        narrow-indicator
      >
        <q-tab class="q-px-xs text-accent" name="chats" label="Chats"/>
        <q-tab class="q-px-xs text-accent" name="contacts" label="Contacts" />
      </q-tabs>

      <!-- Tabs panels -->
      <q-tab-panels v-model="panel" animated class="shadow-5 fit">

        <!-- Chat panel -->
        <q-tab-panel name="chats" class="q-pa-none q-pb-xl">
          <q-scroll-area class="fit overflow-auto" :thumb-style="$store.getters.scrollThumb">
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover rounded-border'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar.png">
                <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
              </q-avatar>
              <div class="col">
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
                <p class="text-weight-light q-ma-none q-ml-sm row">last message john sent...</p>
              </div>
            </div>
          </q-scroll-area>
        </q-tab-panel>

        <!-- Contacts Panel -->
        <q-tab-panel name="contacts" class="q-pa-none q-pb-xl">

          <q-scroll-area class="fit overflow-auto" :thumb-style="$store.getters.scrollThumb">
            
            <div class="q-pa-md row no-wrap items-center" v-hoverClass="'shadow-10 bg-hover'">
              <q-avatar size="40px" >
                <img src="https://cdn.quasar.dev/img/avatar4.jpg">
              </q-avatar>
                <p class="text-h6 text-weight-light q-ma-none q-ml-sm row">John</p>
            </div>
          </q-scroll-area>

        </q-tab-panel>

      </q-tab-panels>
    </div>
</template>

<script>
export default {

  data(){
    return{
      panel:'chats'
    }
  },

}
</script>

<style>

</style>