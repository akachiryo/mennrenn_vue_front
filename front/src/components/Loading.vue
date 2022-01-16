<template>
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading 
        type="spiningDubbles"
        color="#33FFFF"
        :size="{ width: '100px', height: '100px' }"
        >
      </vue-loading>
    </div>

</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'loading',
  components: {
    VueLoading
  },

}
</script>

<style>
.fullview {
  width: 100%;
  height: 800px;
  background: #DDFFFF;
}
.loading-spacer {
  height: 30%;
}
</style>