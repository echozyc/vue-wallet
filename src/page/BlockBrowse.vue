<template>
  <div class="BlockBrowseWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "BlockBrowse",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '区块浏览'
      }
    }
  }
}
</script>

<style scoped>

</style>
