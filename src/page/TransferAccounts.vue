<template>
  <div class="TransferAccountsWrap">
    <DetailedHeader :title='title'></DetailedHeader>
    <div class="TransferAccountMain">
        <div class="content">
            <ul class="lists">
                <li class="list" >
                   <span class="title">
                       资产币种
                   </span>
                  <el-select v-model="value" class="select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </li>
                <li class="list">
                    <span class="title">
                        发送者
                    </span>
                    <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        接受者
                    </span>
                    <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        金额
                    </span>
                    <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        费用
                    </span>
                    <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        备注
                    </span>
                    <input class="text" type="text" >
                </li>
            </ul>
            <p class="notice">
                注意：请确保您正在发送AEC给正确的地址，本操作无法撤销
            </p>
            <a href="javascript:;" class="btn">发送</a>
        </div>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "TransferAccounts",
  components: {
    //头部组件
    DetailedHeader

  },
  created() {

  },
  data () {
    return {
      //DetailedHeader 样式组件传值
      title: {
        text1: '转账',
        text2: ''
      },
      //Select 切换
      options: [{
        value: '0',
        label: '人民币'
      }, {
        value: '1',
        label: '美元'
      }],
      value:'0',
    }
  }
}
</script>

<style lang="stylus">
    $bg-color = #f2f6ff
    $bg-input = #FAFAFA
    $border-color = #EBEBEB
    $text-color = #666666
    $text-actice = #3679FC
    $text-notice = #3679FC
    $notice-size = 16px
    $font-size = 16px
    $btn-size = 24px

    gradient($a,$b) { //渐变
      background: linear-gradient(to left, $a, $b)
      background:-moz-linear-gradient(to left , $a, $b)
      background:-o-linear-gradient(to left , $a, $b)
      background: -webkit-gradient(linear,left top,right top,from($a),to($b))
    }
    .TransferAccountsWrap
        width 100%
        height 100%
        background $bg-color
        .TransferAccountMain
            width 100%
            /*height 100%*/
            padding 45px 85px 55px 72px
            background #F4F6F8
            box-sizing border-box
            .content
                background #fff
                width 100%
                /*height 100%*/
                .lists
                    padding-top 77px
                    .list
                        margin-left 74px
                        margin-bottom 30px
                        .title
                            display inline-block
                            color $text-color
                            font-size $font-size
                            line-height 60px
                            width 72px
                            text-align right
                        .text
                            display inline-block
                            margin-left 30px
                            padding 0 30px
                            width: 646px
                            height: 60px
                            font-size $font-size
                            line-height 60px
                            border-radius 5px
                            background $bg-input
                            border 1px solid $border-color
                        .select
                            margin-left 30px
                        .el-input__inner
                            width 321px
                            height 60px
                            font-size $font-size
                            line-height 60px
                            border-radius 5px
                            background #fafafa
                            border: 1px solid #ebebeb
                            &:focus
                              border-color $border-color
                .notice
                    margin-left: 180px;
                    font-size $notice-size
                    color $text-notice
                .btn
                    display inline-block
                    margin: 53px 0 103px 180px;
                    width: 704px
                    height: 62px
                    font-size $btn-size
                    color #fff
                    line-height 62px
                    text-align center
                    border-radius 5px
                    gradient(#0A5EFF,#3D7EFC)
</style>
