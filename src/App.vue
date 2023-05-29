<template>
  <div>
    <RouterView v-if="$route.meta.KeepAlive" v-slot="{ Component, route }">
      <Transition name="router-fade" mode="out-in">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>
    <RouterView v-else v-slot="{Component, route}">
      <Transition name="router-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from "./components/common/svg";

export default {
  components: {
    svgIcon
  }
};

</script>

<style lang="scss">
@import './style/common';

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
