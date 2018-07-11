<template>
  <div class="VoteWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "Vote",
  components:{
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '投票',
        text2: '/ 委托人列表'
      }
    }
  }
}
</script>

<style scoped>

</style>
