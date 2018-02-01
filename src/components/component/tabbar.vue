/**
 * File: f:\vue\workonline.com\src\components\component\troolbar.vue
 * Created Date: 2018-01-29 3:50:21
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 9:47:09
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="tabbar">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="home">
                <icon name="home" slot="icon"></icon>
                首页
            </mt-tab-item>
            <mt-tab-item id="punch">
                <icon name="credit-card" slot="icon"></icon>
                打卡
            </mt-tab-item>
            <icon name="plus-circle" class="tabbar-plus"></icon>
            <mt-tab-item id="quora">
                <icon name="quora" slot="icon"></icon>
                圈子
            </mt-tab-item>
            <mt-tab-item id="my">
                <icon name="user-circle-o" slot="icon"></icon>
                我的
            </mt-tab-item>
        </mt-tabbar>
        <mt-actionsheet 
        :actions="actions"
        v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>

<script>
    import { Tabbar, TabItem } from 'mint-ui';
    import { Actionsheet } from 'mint-ui';
    export default {
        data() {
            return {
                selected:null,
                tabHandler:null,
                sheetVisible:false,
                actions:[
                    {
                        name:'发表文字'
                        ,method:this.plusText
                    }
                    ,{
                        name:'发表图片'
                        ,method:this.plusPicture
                    }
                    ,{
                        name:'发表视频'
                        ,method:this.plusVideo
                    }
                ]
            }
        },
        components:{
           Tabbar,
           TabItem,
           Actionsheet
        },
        methods: {
            plusText() {
                console.log('text');
            },
            plusPicture() {
                console.log('picture');
            },
            plusVideo() {
                console.log('video');
            }
        },
        watch: {
            selected(newValue, oldValue) {
                this.$router.push(newValue);
            },
        },
        mounted(){
            let plus = document.querySelector('.tabbar-plus');
            plus.addEventListener('click',(e)=>{
                e.preventDefault();
                this.sheetVisible = true;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .tabbar{
        .mint-tabbar{
            background-color: nth($baseColor,5);
            color:nth($baseColor,1);
            border:1px solid nth($baseColor,5);
            background-image:none;
            .mint-tab-item{
                &.is-selected{
                    background-color: nth($baseColor,5);
                    color:lighten(nth($baseColor,4),10%);
                }
            }
            .tabbar-plus{
                width:50px;
                height:50px;
                position: relative;
                top:-10px;
                background-color:nth($baseColor,5);
                border-radius:50%;
            }
        }
    }
    :focus{
        outline:0;
        box-shadow:0;
    }
</style>