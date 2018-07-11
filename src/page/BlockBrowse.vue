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
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '区块浏览',
        text2: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
