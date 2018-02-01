<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted(){
    if(document.querySelector('.mint-header')){
      let headerHeight = document.querySelector('.mint-header').offsetHeight;
      document.querySelector('.container').style.paddingTop = headerHeight + 'px';
    }
  }
}
</script>

<style lang="scss">
  body{
    margin:0;
    padding:0;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.068);
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
