<template>
  <div class="PersonalCenterWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "PersonalCenter",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '个人中心',
        text2: '/ 账户信息'
      }
    }
  }
}
</script>

<style scoped>

</style>
