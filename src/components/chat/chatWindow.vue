<template>
  <div class="col-9 shadow-2 relative-position container"  :class="$q.screen.width  < 1023? 'col-12' : ''">
      
      <q-banner class="shadow-2 absolute-top bg-background" style="z-index:1;"> 
          <q-avatar size="40px" >
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            <q-badge color="positive" class="absolute-bottom-right status-badge" rounded/>
          </q-avatar>
      </q-banner> 
      
      <q-scroll-area class="fit overflow-auto bg-main "
        style="padding: 5em 0 4em 0" 
        :thumb-style="$store.getters.scrollThumb"
        ref="chatArea"> 

        <q-chat-message
          class="q-px-sm"
          v-for="(message, index) in messages"
          :key="index"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          :text="[message.text]"
          :sent="message.from == 'me' ? true : false" />

        

      </q-scroll-area>

      <q-form
            @submit.stop="sendMessage">
                  <q-input
                  class="q-pa-sm absolute-bottom bg-background" 
                  v-model="newMessage"
                  outlined
                  ref="msgInput"
                  placeholder="message"
                  dense>                
                    <q-btn  flat icon="send" size="12px" class="q-ma-none" type="submit"/>
                  </q-input>
      </q-form>
    
    </div> 
</template>

<script>
export default {
  data(){
    return{
      
      newMessage:'',
      messages: 
          [
            {
            text:'Hi!',
            from:'me'
            },
              {
            text:'hi, how are you?',
            from:'you'
            } ,
            {
            text:'fine, wbu?',
            from:'me'
            } 
          ]
    }
  },

  methods:{
      sendMessage(){
        if(this.newMessage != ''){
          this.messages.push({text: this.newMessage, from:'me'})
        }
          this.newMessage = ''
          this.$refs.msgInput.focus()
          console.log(this.$refs.chatArea.getScrollTarget().scrollHeight)
          this.$refs.chatArea.setScrollPosition(this.$refs.chatArea.getScrollTarget().scrollHeight , 1)
      }
  }
}
</script>

<style scoped>
.chatArea{
  background-image: url('~assets/chat-bg.svg')
}

.container{
border-left: 1px solid rgba(206, 206, 206, 0.7);
}

</style>