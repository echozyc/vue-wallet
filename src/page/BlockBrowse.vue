<template>
  <div class="BlockBrowseWrap">
    <!--区块浏览 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--区块浏览 Main-->
    <div class="BlockBrowseMain">
      <!--导航 nav-->
      <div class="BlockBrowseContentNav">
        <div class="zichangaiyao">
          <span>最新区块</span>
        </div>
      </div>
      <!--table表格 组件-->
      <table border="0" width="100%" cellpadding="20">
        <tr>
          <td>高度</td>
          <td>日期</td>
          <td>ID</td>
          <td>生产者</td>
          <td>交易</td>
          <td>总费用</td>
          <td>奖励</td>
        </tr>
        <tr class="HomePageContent">
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>123456</span></td>
          <td>2018/06/26 17:19:20</td>
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>cd7f15c136f...0a683fce58</span></td>
          <td @click="isShowProducer = !isShowProducer;isShowPopup =!isShowPopup"><span>AKxXfpqyw...UWHDUzzx</span></td>
          <td @click="isShowTransactionRecord = !isShowTransactionRecord;isShowPopup =!isShowPopup"><span>2017</span></td>
          <td>5000</td>
          <td>0.0</td>
        </tr>
        <tr class="HomePageContent">
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>123456</span></td>
          <td>2018/06/26 17:19:20</td>
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>cd7f15c136f...0a683fce58</span></td>
          <td @click="isShowProducer = !isShowProducer;isShowPopup =!isShowPopup"><span>AKxXfpqyw...UWHDUzzx</span></td>
          <td @click="isShowTransactionRecord = !isShowTransactionRecord;isShowPopup =!isShowPopup"><span>2017</span></td>
          <td>5000</td>
          <td>0.0</td>
        </tr>
        <tr class="HomePageContent">
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>123456</span></td>
          <td>2018/06/26 17:19:20</td>
          <td @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup"><span>cd7f15c136f...0a683fce58</span></td>
          <td @click="isShowProducer = !isShowProducer;isShowPopup =!isShowPopup"><span>AKxXfpqyw...UWHDUzzx</span></td>
          <td @click="isShowTransactionRecord = !isShowTransactionRecord;isShowPopup =!isShowPopup"><span>2017</span></td>
          <td>5000</td>
          <td>0.0</td>
        </tr>
      </table>
      <div class="PaginationWrap">
        <el-pagination class="Pagination"
           @size-change="handleSizeChange"
           @current-change="handleCurrentChange"
           :current-page.sync="currentPage3"
           :page-size="5"
           layout="prev, pager, next, jumper"
           :total="1000">
        </el-pagination>
      </div>
    </div>
    <!--区块浏览全部弹出层-->
    <div class="Popup" v-show="isShowPopup">
      <!--交易记录-->
      <div class="TransactionRecord" v-show="isShowTransactionRecord">
        <p class="Text">
          <span>交易记录</span>
          <span>(5)</span>
        </p>
        <table border="0" width="100%" cellpadding="20" id="TableFiv">
          <tr style="font-size: 16px;color: #333333">
            <td>TxHash</td>
            <td>确认数</td>
            <td>金额</td>
            <td>交易额</td>
            <td>日期</td>
          </tr>
          <tr class="HomePageContent">
            <td @click="isShowTransactionDetails = !isShowTransactionDetails;isShowTransactionRecord =!isShowTransactionRecord">
              <span>cd7f15c136f...0a683fce58</span>
            </td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>2018/06/28 17:08:50</td>
          </tr>
          <tr class="HomePageContent">
            <td @click="isShowTransactionDetails = !isShowTransactionDetails;isShowTransactionRecord =!isShowTransactionRecord">
              <span>cd7f15c136f...0a683fce58</span>
            </td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>2018/06/28 17:08:50</td>
          </tr>
          <tr class="HomePageContent">
            <td @click="isShowTransactionDetails = !isShowTransactionDetails;isShowTransactionRecord =!isShowTransactionRecord">
              <span>cd7f15c136f...0a683fce58</span>
            </td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>2018/06/28 17:08:50</td>
          </tr>
          <tr class="HomePageContent">
            <td @click="isShowTransactionDetails = !isShowTransactionDetails;isShowTransactionRecord =!isShowTransactionRecord">
              <span>cd7f15c136f...0a683fce58</span>
            </td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>2018/06/28 17:08:50</td>
          </tr>
          <tr class="HomePageContent">
            <td @click="isShowTransactionDetails = !isShowTransactionDetails;isShowTransactionRecord =!isShowTransactionRecord">
              <span>cd7f15c136f...0a683fce58</span>
            </td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>2018/06/28 17:08:50</td>
          </tr>
        </table>
        <div class="TransactionRecordClose" @click="isShowTransactionRecord = !isShowTransactionRecord;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
      <!--交易详情-->
      <div class="TransactionDetails" v-show="isShowTransactionDetails">
        <p class="Text">
          <span>交易详情</span>
        </p>
        <ul>
          <li>
            <span>TxHash</span>
            <span>9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>区块高度:</span>
            <span>577852</span>
          </li>
          <li>
            <span>确认数:</span>
            <span>533333</span>
          </li>
          <li>
            <span>上一块:</span>
            <span class="BlueColor">2d4b60540caba69a8243f1319db46a53743841481cad22dd62fcd5b396076b20</span>
          </li>
          <li>
            <span>时间:</span>
            <span>2018/06/28 15:23:10</span>
          </li>
          <li>
            <span>从:</span>
            <span class="BlueColor">A4whbwURe53aUSGDk1tkTdt3YiwkbwU68t</span>
          </li>
          <li>
            <span>至:</span>
            <span class="BlueColor">A4whbwURe53aUSGDk1tkTdt3YiwkbwU68t</span>
          </li>
          <li>
            <span>交易金额:</span>
            <span>100AEC</span>
          </li>
          <li>
            <span>交易费:</span>
            <span>1AEC</span>
          </li>
          <li>
            <span>接纳区块:</span>
            <span class="BlueColor">2d4b60540caba69a8243f1319db46a53743841481cad22dd62fcd5b396076b20</span>
          </li>
          <li>
            <span>备注信息:</span>
            <span>无</span>
          </li>
        </ul>
        <div class="TransactionDetailsClose" @click="isShowTransactionDetails = !isShowTransactionDetails;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
      <!--区块浏览-->
      <div class="BlockBrowsing" v-show="isShowBlockBrowsing">
        <p class="Text">
          <span>区块详情</span>
        </p>
        <ul>
          <li>
            <span>ID</span>
            <span>9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>版本:</span>
            <span>1</span>
          </li>
          <li>
            <span>时间:</span>
            <span>2018/06/28 16:57:50</span>
          </li>
          <li>
            <span>区块高度:</span>
            <span>02020302</span>
          </li>
          <li>
            <span>上一块:</span>
            <span class="BlueColor" >9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>交易数:</span>
            <span>5</span>
          </li>
          <li>
            <span>交易总额:</span>
            <span>1</span>
          </li>
          <li>
            <span>奖励:</span>
            <span>300000</span>
          </li>
          <li>
            <span>摘要:</span>
            <span>9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>生产者:</span>
            <span class="BlueColor">9e4b02593637113c9f5943af8a08d8c61736</span>
          </li>
          <li>
            <span>生产者公钥:</span>
            <span>9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
        </ul>
        <div class="BlockBrowsingClose" @click="isShowBlockBrowsing = !isShowBlockBrowsing;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
      <!--生产者-->
      <div class="Producer" v-show="isShowProducer">
        <p class="Text">
          <span>账户详情</span>
        </p>
        <ul>
          <li>
            <span>地址:</span>
            <span class="BlueColor" >9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>公钥:</span>
            <span>9e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec5414b40e58b9647e5</span>
          </li>
          <li>
            <span>账户余额:</span>
            <span>263013.02468586 AEC</span>
          </li>
          <li>
            <span>交易次数:</span>
            <span>5</span>
          </li>
          <li>
            <span>当前区块高度:</span>
            <span class="BlueColor" >123455</span>
          </li>
        </ul>
        <div class="ProducerClose" @click="isShowProducer = !isShowProducer;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "BlockBrowse",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '区块浏览'
      },
      currentPage3: 5,
      //弹出层 背景层show
      isShowPopup: false,
      //交易记录
      isShowTransactionRecord:false,
      //交易详情
      isShowTransactionDetails: false,
      //区块详情
      isShowBlockBrowsing:false,
      //生产者
      isShowProducer: false
    }
  },
  methods:{
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
}
</script>

<style scoped lang="stylus">
  .BlockBrowseWrap
    width 100%
    .BlockBrowseMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .BlockBrowseContentNav
        width 100%
        height 104px
        background #ffffff
        padding-left 20px
        box-sizing border-box
        /*min-width 975px*/
        div
          float left
          height 48px
          line-height 48px
          margin-left 42px
          margin-top 28px
          border-radius 24px
          cursor pointer
          span
            margin 0 29px
            font-size 20px
            color #394047
        .on
          box-shadow:0px 0px 8px rgba(0,60,231,0.31)
          background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%)
          span
            color #ffffff

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
          border-left 5px solid #ffffff
          &:hover
            box-shadow 0 0 16px #EDEEEF inset
            border-left 5px solid #FF6E4B
          span
            color #3679FC
      .PaginationWrap
        width 100%
        height 100px
        background #ffffff
        overflow: hidden
        .Pagination
          margin 40px 0 0 56px
    .Popup
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background:rgba(0,0,0,0.5);
      .TransactionRecord
        width 1054px
        height 503px
        position absolute
        top 50%
        left 50%
        margin-top -251px
        margin-left -527px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
        #TableFiv
          border-radius 5px
          overflow hidden
          margin-top 34px
          tr
            height 60px
            color #555555
            cursor pointer
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align center
          .HomePageContent
            background #ffffff
            font-size 16px
            color #666666
            span
             color #3679FC
        .TransactionRecordClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
      .TransactionDetails
        width 891px
        position absolute
        top 50%
        left 50%
        margin-top -354px
        margin-left -445px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px 64px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
          position relative
        ul
          margin-top 64px
          li
            color #555555
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align left
            span
              margin 15px 0
            .BlueColor
              color #3679FC
            span:first-child
              display inline-block
              width 22%
            span:last-child
              display inline-block
              width 77%
        .TransactionDetailsClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
      .BlockBrowsing
        width 891px
        position absolute
        top 50%
        left 50%
        margin-top -354px
        margin-left -445px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px 64px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
          position relative
        ul
          margin-top 64px
          li
            color #555555
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align left
            span
              margin 15px 0
            .BlueColor
              color #3679FC
            span:first-child
              display inline-block
              width 22%
            span:last-child
              display inline-block
              width 77%
          .Main
            height 130px
        .BlockBrowsingClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
      .Producer
        width 891px
        height 442px
        position absolute
        top 50%
        left 50%
        margin-top -221px
        margin-left -445px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px 64px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
          position relative
        ul
          margin-top 64px
          li
            color #555555
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align left
            span
              margin 15px 0
            .BlueColor
              color #3679FC
            span:first-child
              display inline-block
              width 22%
            span:last-child
              display inline-block
              width 77%
        .ProducerClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
</style>
