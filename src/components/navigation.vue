<template>
    <div class="hidden-xs-only">
    <v-app-bar fixed flat>
        <v-avatar size="62" class="ml-10 mt-5">
        <img class ="jose" src="../assets/jose.png">
        </v-avatar>
        <v-avatar rounded size="36" class="ml-5 mt-5">
        <a class="upwork-link" target="_blank" href="https://www.upwork.com/o/profiles/users/_~010a4daea74924aa45/">
        <img src="../assets/upwork-icon.png">
        </a>
        </v-avatar>
        <v-avatar rounded size="64" class="ml-1 mt-5">
            <a href="https://github.com/mjavala" target="_blank">
          <v-icon large color="black">mdi-github-circle</v-icon>
          </a>
        </v-avatar>
        
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link
                :to="{ name: 'home' }"
                tag="v-btn"
            >
            <v-btn 
                text 
                value="/" 
                class="ma-6 mt-7"
            >
                Home
            </v-btn>
            </router-link>
            <router-link
                :to="{ name: 'projects' }"
                tag="v-btn"
            >
            <v-btn 
                text 
                value="projects" 
                class="ma-6 mt-7"
            >
                Projects
            </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-app-bar>
  </div>
</template>


<style scoped>

.theme--dark.v-sheet{
    background-color: transparent;
}

.v-toolbar__items{
    margin: 4%;
}

.jose{
    border-color: whitesmoke;
    border-style: outset;
    
}
.upwork-link{
    width: 36px;
    height: 36px;
}

.v-application a{
    color: transparent !important;
    text-decoration: none;
}
</style>