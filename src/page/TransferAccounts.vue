<template>
  <div class="TransferAccountsWrap">
    <DetailedHeader :title='title'></DetailedHeader>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "TransferAccounts",
  components:{
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '转账',
        text2: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
