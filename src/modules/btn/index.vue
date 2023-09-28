<script setup>
import Btn1 from './components/t1.vue'
import Btn2 from './components/t2.vue'
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="btns">
    <Btn1 />
    <Btn2 />
  </div>
</template>

<style scoped lang="scss">
.btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
}
</style>
