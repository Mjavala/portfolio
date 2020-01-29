<template>
  <div id="mobile-burger" color="transparent">
    <v-list-item class="dashboard-icon-item hidden-sm-and-up">
      <v-btn
        icon
        @click="drawer =!drawer"
        class="dashboard-icon"
        
      >
      <v-icon color="black">mdi-view-dashboard</v-icon>
      </v-btn>
    </v-list-item>
    <v-navigation-drawer
      v-model="drawer"
      class="dashboard"
      width="200"
      floating
      color="#0082c8"
      
      overlay-opacity="0.3"
    >
      <v-list v-if="show" class="nav-list-mobile">
        <v-list-item
          v-for=" (item, i) in items"
          :key="i"
          :href="item.href"
        >
          <v-list-item-title>{{ item.title}} </v-list-item-title>
           </v-list-item>
           <v-list-item>
             <v-avatar rounded size="48" class="mx-1 mt-5">
                <a class="github-link-nav" href="https://github.com/mjavala" target="_blank">
              <img src="../assets/github.png">
              </a>
            </v-avatar>
             <v-avatar rounded class="mx-1 mt-5">
                <a class="upwork-link" target="_blank" href="https://www.upwork.com/o/profiles/users/_~010a4daea74924aa45/">
                <img src="../assets/upwork-icon.png">
                </a>
            </v-avatar>
            <v-avatar rounded class="mt-5">
                <a class="res-link-nav" href="https://github.com/Mjavala/portfolio-landing-page/raw/gh-pages/CV.pdf">
                <img src="../assets/doc_icon.png">
                </a>
            </v-avatar>
           </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          { title: 'Home', href: 'https://mjavala.github.io/portfolio-landing-page/#/'},
          { title: 'Projects', href: 'https://mjavala.github.io/portfolio-landing-page/#/projects'},
        ],
        mini: true,
        show: true,
        drawer: false,
        dashDrawer: false,
      }
    },
  }
</script>

<style>

#mobile-burger{
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: absolute;
  top: 0;
  left:0;
}


.dashboard{
    position: absolute;
    margin-left: .1%;
    margin-top: .1%;
    z-index: 100;
}

@keyframes shadow-pulse
{
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
}

.dashboard-icon{
  animation: shadow-pulse 3s infinite;
  background: white !important;
  position: absolute;
  margin-left: .1%;
  margin-top: 5%;
  z-index: 1000;
}

.v-list-item__title{
    margin: 1%;
    padding-top: 3%;
    padding-bottom: 3.5%;
    font-family:'Cormorant Garamond', serif;
    font-size: 130% !important;
    border-bottom: 1px solid #020200;
}

.nav-list-mobile{
  margin-top: 35%;
}

.upwork-link{
    width: 36px;
    height: 36px;
}

.res-link-nav{
    width: 30px;
    height: 30px;
}

.github-link-nav{
    width: 36px;
    height: 36px;
}

</style>

