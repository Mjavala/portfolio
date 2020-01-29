<template>
  <div class="projects">
  <v-card 
    color="transparent"
    elevation="0"
    class="container-projects mx-auto "
    max-width="900"
  >

    <v-container fluid>
      <v-row >
        <v-col
          v-for="card in cards"
          :key="card.github"
          :cols="card.flex"
          md="4"
        >
          <v-card 
          class="cards"
            light
          >
            <v-img
              contain
              :src="card.src"
              class="images white--text align-end"
              height="175px"
            >
              <v-card-text class="text--primary">
            </v-card-text>
             </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn small
                :href="card.link"
                target="_blank"
                color="white">
                Live
                
              </v-btn>
              <v-btn 
                small
                color="black"
                href="https://github.com/Mjavala/ittxreal"
                target="_blank"
                class="white--text">
                {{card.github}}
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>
</template>

<script>

  export default {
    data: () => ({
      cards: [
        { src: require('../assets/kayagenelogo.png'), link:'https://www.kayagene.com/', flex: 6 },
        { src: require('../assets/lightboxlogo.png'), link:'https://www.ourlightbox.org/', flex: 6 },
        { src: require('../assets/taylorjaylogo.png'), link:'https://www.taylorjaycollection.com/', flex: 6 },
        { src: require('../assets/teamwinlogo.png'), link:'https://www.teamwinstudios.com/', flex: 6 },
        { src: require('../assets/CryptoClash-Favicon.png'), link:'http://cryptoclash.io/', flex: 6 },
        { github: 'Github', src: require('../assets/ittxrealogo.png'), link:'https://mjavala.github.io/ittxreal/#/', flex: 6 },
      ],
    }),
  }

</script>

<style scoped>

.projects{  
  height: 100%;
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
}

.container-projects{
 margin-top: 10%;
}

.images{
  background: linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5));
}

/* Removing github link for sites without a repo */

div.col-md-4 > div:nth-child(1) > div:nth-child(2) > a:nth-child(3){
  display: none;
}

div.col-md-4:nth-child(6) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3){
  display: flex;
}

/* mobile styles*/
@media only screen and (min-device-width : 320px) and (max-device-width : 480px){
  .images{
    height: 135px !important;
  }
  div.col-sm-4 > div:nth-child(1) > div:nth-child(2) > a:nth-child(2){
    width: 25%;
    font-size: 65%;
  }
  div.col-sm-4:nth-child(6) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3){
    width: 25%;
    font-size: 65%;
  }
  div.col-sm-4 > div:nth-child(1) > div:nth-child(2){
    padding: 2%;
  }
}
/* small pad styles*/
@media only screen and (min-device-width : 600px) and (max-device-width : 960px){
  .container-projects{
    margin-top: 15%;
  }
  .cards{
    width: 85%;
    margin: 0 auto;
  }
}


</style>