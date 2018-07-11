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
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '区块生产'
      }
    }
  }
}
</script>

<style scoped>

</style>
