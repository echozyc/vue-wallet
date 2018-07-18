<template>
  <div class="AssetEvaluationWrap">
    <!--资产评估 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--资产评估 Main-->
    <div class="AssetEvaluationMain">
      <!--导航 nav-->
      <div class="AssetEvaluationContentNav">
        <div class="zichangaiyao"  @click="show('isShowIssueAudit')" :class="{on:active == 'isShowIssueAudit'}">
          <span>发行审核</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowAlreadyPassed')" :class="{on:active == 'isShowAlreadyPassed'}">
          <span>已通过</span>
        </div>
      </div>

      <div class="ContentWrap">
        <!--发行审核-->
        <div class="IssueAudit"  v-show="active == 'isShowIssueAudit'">
          <!--table表格 组件-->
          <table border="0" width="100%" cellpadding="20">
            <tr>
              <td>资产币种</td>
              <td>交易ID</td>
              <td>兑换率</td>
              <td>发行数量</td>
              <td>投票详情</td>
              <td>发送者</td>
              <td>投票</td>
            </tr>
            <tr class="HomePageContent">
              <td @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup"><span>123456</span></td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup"><span>2017-02-09</span></td>
              <td @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup"><span>5000</span></td>
              <td @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
                <span class=" Vote">投票</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup"><span>123456</span></td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup"><span>2017-02-09</span></td>
              <td @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup"><span>5000</span></td>
              <td @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
                <span class=" Vote">投票</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup"><span>123456</span></td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup"><span>2017-02-09</span></td>
              <td @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup"><span>5000</span></td>
              <td @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
                <span class=" Vote">投票</span>
              </td>
            </tr>
          </table>
        </div>
        <!--已通过-->
        <div class="AlreadyPassed"  v-show="active == 'isShowAlreadyPassed'">
          <!--table表格 组件-->
          <table border="0" width="100%" cellpadding="20">
            <tr>
              <td>资产币种</td>
              <td>交易ID</td>
              <td>兑换率</td>
              <td>发行数量</td>
              <td>投票详情</td>
              <td>发送者</td>
              <td>投票</td>
            </tr>
            <tr class="HomePageContent">
              <td @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup"><span>123456</span></td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup"><span>2017-02-09</span></td>
              <td @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup"><span>5000</span></td>
              <td @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
                <span class=" Vote">投票</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup"><span>123456</span></td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup"><span>2017-02-09</span></td>
              <td @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup"><span>5000</span></td>
              <td @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
                <span class=" Vote">投票</span>
              </td>
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
      </div>
    </div>
    <!--资产评估全部弹出层-->
    <div class="Popup" v-show="isShowPopup">
      <!--投票提交-->
      <div class="VoteSubmit" v-show="isShowVoteSubmit">
        <p class="Text">
          <span  style="font-weight: bold">提醒:</span>
          <span>您将投票给 TEST.HJN, 该操作不可逆，
                需要消耗手续费 1 AEC</span>
        </p>
        <div class="VoteSubmitButton">
          <button class="Cancel" @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">取消</button>
          <button class="Sure">确认提交</button>
        </div>
        <div class="VoteSubmitClose" @click="isShowVoteSubmit = !isShowVoteSubmit;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
      <!--发送者 => 发行商详情-->
      <div class="Publisher" v-show="isShowPublisher">
         <p class="Text">
           <span>发行商详情</span>
         </p>
         <table border="0" width="100%" cellpadding="20" id="TableSec">
           <tr style="font-size: 16px;color: #666666">
             <td>名称:</td>
             <td>NYB</td>
           </tr>
           <tr class="HomePageContent">
             <td>描述:</td>
             <td>利用农村生态系统，形成整个闭环，帮助贫困山区逐渐走向小康社会</td>
           </tr>
         </table>
         <div class="BalancePopupClose" @click="isShowPublisher = !isShowPublisher;isShowPopup =!isShowPopup">
           <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
         </div>
      </div>
      <!--资产币种-->
      <div class="AssetDetails" v-show="isShowAssetDetails">
        <p class="Text">
          <span>资产详情</span>
        </p>
        <ul>
          <li>
            <span>资产名称</span>
            <span>OTC</span>
          </li>
          <li>
            <span>发行量:</span>
            <span>100000000000</span>
          </li>
          <li>
            <span>精确:</span>
            <span>5</span>
          </li>
          <li>
            <span>所有者:</span>
            <span>SparkPool</span>
          </li>
          <li>
            <span>所有者地址:</span>
            <span>e4b02593637113c9f5943af8a08d8c61736cef2eedd4ec54147e5</span>
          </li>
          <li>
            <span style="vertical-align: top;">描述:</span>
            <span>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
              文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</span>
          </li>
          <li>
            <span>是否需要冻结:</span>
            <span>OTC.icon</span>
          </li>
          <li>
            <span>冻结数:</span>
            <span>OTC.icon</span>
          </li>
          <li>
            <span>冻结释放时间:</span>
            <span>OTC.icon</span>
          </li>
          <li>
            <span>合约生成时间:</span>
            <span>OTC.icon</span>
          </li>
          <li>
            <span>是否可交易:</span>
            <span>OTC.icon</span>
          </li>
        </ul>
        <div class="BalancePopupClose" @click="isShowAssetDetails = !isShowAssetDetails;isShowPopup =!isShowPopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
      <!--投票详情-->
      <div class="VoteDetails" v-show="isShowVoteDetails">
        <div class="Text">
          <span>投票详情</span>
          <div class="Number">
            <!--<span>共</span>-->
            <!--<span>73</span>-->
            <!--<span>个</span>-->
            共73个
          </div>
        </div>
        <table border="0" width="100%" cellpadding="20" id="TableFou">
          <tr style="font-size: 16px;color: #333333">
            <td>序号</td>
            <td>投票人地址</td>
            <td>投票人权重</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
          <tr class="HomePageContent">
            <td>1</td>
            <td>ALBqTz2CKvmnfSbeu6CgnGBjCXoS5vHswe</td>
            <td>1</td>
          </tr>
        </table>
        <el-pagination class="el"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="5"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
        <div class="BalancePopupClose" @click="isShowVoteDetails = !isShowVoteDetails;isShowPopup =!isShowPopup">
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
  name: "AssetEvaluation",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '资产评估',
        text2: '/ 发行审核'
      },
      active: 'isShowIssueAudit',
      //弹出层 背景层show
      isShowPopup: false,
      //投票 弹出层
      isShowVoteSubmit:false,
      //发送者 弹出层
      isShowPublisher:false,
      //资产币种 弹出层
      isShowAssetDetails: false,
      //投票详情
      isShowVoteDetails: false,
      currentPage3: 5
    }
  },
  methods:{
    show(i){
      this.active = i
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped lang="stylus">
  gradient($a,$b) { //渐变
    background: linear-gradient(to left, $a, $b)
    background:-moz-linear-gradient(to left , $a, $b)
    background:-o-linear-gradient(to left , $a, $b)
    background: -webkit-gradient(linear,left top,right top,from($a),to($b))
  }

  .AssetEvaluationWrap
    width 100%
    .AssetEvaluationMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .AssetEvaluationContentNav
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

      .ContentWrap
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
              box-shadow 0 0 16px
          .HomePageContent
            background #ffffff
            color #666666
            border-left 5px solid #ffffff
            &:hover
              box-shadow 0 0 16px #EDEEEF inset
              border-left 5px solid #FF6E4B
            span
              color #3679FC
            .Vote
              border-radius 5px
              padding 7px 17px
              gradient(#0A5EFF,#3D7EFC)
              color #ffffff
              box-shadow 0px 0px 8px rgba(0,60,231,0.31)
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
      .VoteSubmit
        width 646px
        height 324px
        position absolute
        top 50%
        left 50%
        margin-top -162px
        margin-left -323px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        .Text
          width 406px
          line-height 30px
          text-align center
          margin 106px auto 0
          font-size 20px
          color #333333
          font-family:PingFang-SC-Heavy
        .VoteSubmitButton
          margin-top 56px
          button
            width 137px
            height 48px
            border-radius 4px
            font-size:20px;
            font-family:PingFang-SC-Regular;
            cursor pointer
          .Cancel
            border 1px solid #0057FF
            color #0057FF
            float left
            margin-left 130px
            background #ffffff
          .Sure
            gradient(#0A5EFF,#3D7EFC)
            color #FFFFFF
            float right
            margin-right 130px
        .VoteSubmitClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
      .Publisher
        width 803px
        height 313px
        position absolute
        top 50%
        left 50%
        margin-top -162px
        margin-left -323px
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
        #TableSec
          border-radius 5px
          overflow hidden
          margin-top 64px
          tr
            height 60px
            color #555555
            cursor pointer
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align left
          .HomePageContent
            background #ffffff
            font-size 16px
            color #666666
        .BalancePopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
      .AssetDetails
        width 803px
        position absolute
        top 50%
        left 50%
        margin-top -398px
        margin-left -402px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px
        box-sizing border-box
        padding-bottom 60px
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
        ul
          margin-top 64px
          li
            color #555555
            cursor pointer
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align left
            span
              margin 15px 0
            span:first-child
              display inline-block
              width 22%
            span:last-child
              display inline-block
              width 77%
          .Main
            height 130px
        .BalancePopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer

      .VoteDetails
        width 803px
        position absolute
        top 50%
        left 50%
        margin-top -398px
        margin-left -402px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px
        box-sizing border-box
        padding-bottom 60px
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
          position relative
          .Number
            position absolute
            font-size 16px
            color #3679FC
            left 420px
            top 10px
        #TableFou
          border-radius 5px
          overflow hidden
          margin-top 64px
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
        .el
          margin-top 46px
          text-align center
        .BalancePopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
</style>
