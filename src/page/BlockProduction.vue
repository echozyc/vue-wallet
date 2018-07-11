<template>
  <div class="BlockProductionWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "BlockProduction",
  components:{
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '区块生产',
        text2: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
