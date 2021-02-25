<template>
  <div class="row" >
    
    <!-- Chat Panel -->
    <chat-panel/>

    
    <!-- Chat Window -->
    <chat-window/>
        
  </div>
</template>

<script>

import chatWindow from '../components/chat/chatWindow.vue'
import chatPanel from '../components/chat/chatPanel.vue'

export default {

  data(){
    
    return{
    }
  },

  components:{
    chatWindow,
    chatPanel
  }

}
</script>

<style>


.status-badge{
  width: 8px;
  height: 12px
}


</style>