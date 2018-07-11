<template>
  <div class="NodeWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>
<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "Node",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '节点',
      }
    }
  }
}

</script>
<style scoped>


</style>
