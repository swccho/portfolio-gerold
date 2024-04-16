<template>
  <div>
    <main-header/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import mainHeader from "../layout/components/mainHeader.vue";
import mainFooter from "../layout/components/mainFooter.vue";

export default {
  components: {mainHeader, mainFooter},
  data() {
    return {}
  }
}
</script>


