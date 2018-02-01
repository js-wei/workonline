<template>
  <div class="home">
    <v-header 
      :isHeadShow="isHeadShow" 
      :isLeftShow="isLeftShow"
      :isRightShow="isRightShow"
      :title="title">
    </v-header>
    <div class="container">
      <mt-swipe :auto="autoTime" :prevent="true">
        <mt-swipe-item v-for="(item,index) in excellentStaff" :key="index">
          <div class="mt-swipe-item-content">
            <img :alt="item.title" :src="item.img">
            <router-link to="/">{{item.title}}</router-link>
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <v-list 
        title="今日公告" 
        :list="list"
        iconColor="red">
      </v-list>
      <v-article 
        :articleList="articleList"
        :isSpinnerShow="isSpinnerShow">
      </v-article>
    </div>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import vHeader from './component/header.vue'
import vTabbar from './component/tabbar.vue'
import vList from './component/list.vue'
import vArticle from './component/article.vue'

import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name: 'home',
  data () {
    return {
      isHeadShow:true,
      isRightShow:false,
      isLeftShow:false,
      isSpinnerShow:false,
      title:'首页',
      autoTime:0,
      excellentStaff:[
        {img:'/static/images/01.jpg',title:'明星员工--Lily'},
        {img:'/static/images/02.jpg',title:'明星员工--Lucy'},
        {img:'/static/images/03.jpg',title:'明星员工--李莉'},
        {img:'/static/images/04.jpg',title:'明星员工--刘楠楠'},
      ],
      list:[
        {'title':'2017年年终奖平均7278元,你拿了多杀?' , path:'/'},
        {'title':'养了一只青蛙后我主动给爸妈打了电话' , path:'/'},
      ],
      articleList:[
        {
          title:'人民网评：放下老顾虑，思想要再解放',
          path:'/',
          image:'/static/images/04.jpg',
          description:'2018，改革开放第40年。这些年里，禁锢的思想被解放，僵化的生产关系被更替，单一的生活方式被打破。改革再出发，动力何在？朝哪突破？靠啥引领？中央全面深化改革领导小组的第二次会议上，习总书记给出方向：“要弘扬改革创新精神，推动思想再解放、改革再深入、工作再抓实，凝聚起全面深化改革的强大力量，在新起点上实现新突破。”'
          ,attr:['新闻','政治时事']
        },
        {
          title:'2017年年终奖平均7278元,你拿了多杀?',
          path:'/',
          image:'/static/images/02.jpg',
          description:'2018，改革开放第40年。这些年里，禁锢的思想被解放，僵化的生产关系被更替，单一的生活方式被打破。改革再出发，动力何在？朝哪突破？靠啥引领？中央全面深化改革领导小组的第二次会议上，习总书记给出方向：“要弘扬改革创新精神，推动思想再解放、改革再深入、工作再抓实，凝聚起全面深化改革的强大力量，在新起点上实现新突破。”'
          ,attr:['新闻','行业前瞻']
        }
      ],
    }
  },
  components: {
    vHeader,
    vTabbar,
    vList,
    vArticle,
    Swipe,
    SwipeItem
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'static/sass/base';
  .home{
    height:auto;
    overflow:hidden;
    .container{
      padding-top:50px;
      padding-bottom:55px;
      .mint-swipe{
        padding:0;
        margin:0;
        height:250px;
        .mint-swipe-items-wrap{
          .mint-swipe-item{
            .mt-swipe-item-content{
              position: relative;
              img{
                width:100%;
                height:250px;
              }
              a{
                position: absolute;
                bottom:0;
                width:100%;
                height:35px;
                line-height:35px;
                color:nth($baseColor,1);
                background-color:lighten(nth($baseColor,2),2%);
                opacity:.6;
                padding-left:10px;
                text-decoration:none;
              }
            }
          }
        }
      }
    }
  }
</style>
