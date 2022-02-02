<template>
  <div :class="{ fadeInRight: visible }">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    },
  },
};
</script>

<style>
.fadeInRight {
  animation: fadeInRight 3s;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
