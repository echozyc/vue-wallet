<template>
  <div class="ApplicationCenterWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "ApplicationCenter",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '应用中心',
        text2: '/ 应用列表'
      }
    }
  }
}
</script>

<style scoped>

</style>
