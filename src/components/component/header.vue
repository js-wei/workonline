/**
 * File: f:\vue\workonline.com\src\components\component\header.vue
 * Created Date: 2018-01-29 2:59:52
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 9:19:03
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="header">
        <mt-header fixed :title="title" v-if="isHeadShow">
            <router-link to="/" slot="left" v-if="isLeftShow">
                <mt-button icon="back" v-if="isBack" @click="go">返回</mt-button>
                <mt-button icon="back" v-if="!isBack">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" v-if="isRightShow"></mt-button>
        </mt-header>
    </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
    data() {
        return {
            go:null,
            isBack:true
        }
    },
    props: {
        isHeadShow: {
            type: Boolean,
            default:true
        },
        isLeftShow:{
            type: Boolean,
            default:false
        },
        title:{
            type: String,
            default:''
        },
        isRightShow:{
            type: Boolean,
            default:false
        },
        backHandler:{
            type:Function
        }
    },
    components: {
        Header,
    },
    created(){
       if(this.$router.currentRoute.name){
           this.isBack=false;
           return;
       }
       if(this.backHandler!=undefined && typeof(eval(this.backHandler)) == "function"){
           this.go = this.backHandler;
       }else{
            this.go = function(){
                this.$router.forward(-1);
            };
       }
    }
}
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .header{
        .mint-header{
            height:50px;
            line-height:50px;
            font-size:1.5rem;
            background-color: nth($baseColor,5);
           .mint-header-button{
               a{
                   font-size:1rem;
               }
           }
        }
    }
</style>