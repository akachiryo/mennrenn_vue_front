<template>
  <v-app>
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>MennRenn</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-tabs>
        <v-tab
        v-for="(menuItem, index) in menuItems"
        :key="index"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>

    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
         <v-list-item
      v-for="(menuItem, index) in menuItems"
      :key="index"
    >
      <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
    </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import constants from '../common/constants'
 
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  }
}
</script>
 
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
</style> 
