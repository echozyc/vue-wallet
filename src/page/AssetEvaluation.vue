<template>
  <div class="PersonalCenterWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "AssetEvaluation",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '资产评估',
        text2: '/ 发行审核'
      }
    }
  }
}
</script>

<style scoped>

</style>
