/**
 * File: f:\vue\workonline.com\src\components\component\header.vue
 * Created Date: 2018-01-29 2:59:52
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-02 1:37:40
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="header">
        <mt-header fixed :title="title" v-if="isHeadShow">
            <a slot="left" v-if="isLeftShow">
                <mt-button icon="back" v-if="isBack" @click="go">返回</mt-button>
                <mt-button icon="back" v-if="!isBack">返回</mt-button>
            </a>
            <mt-button icon="more" slot="right" v-if="isRightShow"></mt-button>
        </mt-header>
    </div>
</template>

<script>
import { Header } from 'mint-ui';
import loginVue from '../login.vue';
export default {
    data() {
        let self = this;
        return {
            go:()=>self.$router.back(),
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
       if(this.backHandler!=undefined && typeof(eval(this.backHandler)) == "function"){
           this.go = this.backHandler;
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