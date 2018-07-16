<template>
  <table border="0" width="100%" cellpadding="0">
    <tr>
      <td>{{tableTitle.text1}}</td>
      <td>{{tableTitle.text2}}</td>
      <td>{{tableTitle.text3}}</td>
      <td>{{tableTitle.text4}}</td>
      <td>{{tableTitle.text5}}</td>
      <td>{{tableTitle.text6}}</td>
      <td>{{tableTitle.text7}}</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
    <tr class="HomePageContent">
      <td>123456</td>
      <td>ACE</td>
      <td>stan</td>
      <td>sendi</td>
      <td>2017-02-09</td>
      <td>5000</td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'DetailedTable',
  props:['tableTitle']
}
</script>
<style lang="stylus">
  table
    border-radius 5px
    box-shadow 7px 0px 4px rgba(65,46,211,0.02)
    overflow hidden
    tr
      height 60px
      color #555555
      cursor pointer
      font-size 16px
      border 1px solid #F0F0F0
      box-sizing border-box
      text-align center
      &:hover
        box-shadow 0 0 16px  red
    .HomePageContent
      background #ffffff
      color #666666
      &:hover
        box-shadow 0 0 16px #EDEEEF inset

</style>
