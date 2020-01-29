<template>
  <v-app>
     <loader v-if="show"></loader>
     <navigation />
    <hamburger />
    <router-view></router-view>
  </v-app>
</template>

<script>
import hamburger from '@/components/hamburger'
import loader from '@/components/loader'
import navigation from '@/components/navigation'

export default{
  components: {navigation, hamburger, loader},
  data () {
    return {
      show: true
    }
  },
  mounted(){
    this.showToggle()
  },
  methods:{
    hideLoader: () => {

      window.addEventListener('load', (e) => {
        console.log('loaded')
      })
    },
    showToggle(){
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  },
}
</script>

<style>

.container{
  width: 100% !important;
}

.fade-enter-active, .fade-leave-active {
  transition-property: background;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.theme--dark.v-app-bar.v-toolbar.v-sheet{
  background: transparent !important;
}
</style>
