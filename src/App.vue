<template>
  <div id="app">
    <!-- <transition
      :name="transitionName">
      
    </transition> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'bounceRight'
    }
  },
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'bounceRight' : 'bounceLeft'
    }
  }
}
</script>
<style lang="scss">
  body{
    margin:0;
    padding:0;
    //background-color:rgba(0, 0, 0, 0.068);
  }
  :focus{
    outline:0;
  }
  a:hover, a:visited, a:link, a:active {
    background-color:unset;
  }
  .amap-simple-marker .amap-simple-marker-label {
      color: #fff;
      font-size: 12px;
  }
  .amap-simple-marker-def-style .amap-simple-marker-label{
    line-height:40px !important;
  }
  .noun span.mint-cell-text {
    margin-left: 35px !important;
  }
  .profile-information span.mint-cell-text{
    margin-left:0 !important;
    font-size: 1rem;
  }
  .profile .mint-cell-title{
    min-width:65px;
  }
  .profile  .mint-cell-value{
    line-height:1.5rem;
    font-size:.9rem;
    padding:5px;
  }
  .profile .mint-popup.mint-popup-bottom{
    width:100%;
  }
  .profile .mint-button.mint-button--primary{
    width:45%;
    margin-top:10px;
    margin-left:10px;
  }
  .container{
    margin-top:50px;
    height:auto;
    padding-bottom:10px;
  }
  span.mint-cell-text{
    color: rgb(77, 77, 77);
    margin-left:35px;
    font-size:1.2rem;
  }
  .mint-cell-wrapper{
    background:none;
    border-bottom:1px solid #f2f2f2;
  }
  @media screen and (min-width:768px) and (max-width:1024px){
    html{font-size:120%}
    .header{
      .mint-header{
        height:80px !important;
        line-height: 80px;
      }
    }
    .mint-tab-item-icon{
      width:40px;
      height:40px;
    }
    .mint-tab-item-label{
      font-size:1.5rem;
    }
  }
</style>
