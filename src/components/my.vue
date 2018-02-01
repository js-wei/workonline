/**
 * File: e:\workonline.com\src\components\my.vue
 * Created Date: 2018-01-31 3:04:20
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 5:01:15
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="container my">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile">
            <img :src="userInfo.head" :alt="userInfo.nickname">
            <p class="user-info">
                {{userInfo.nickname}}({{userInfo.username}})
                <i class="icon iconfont icon-nv" v-if="userInfo.sex==1"></i>
                <i class="icon iconfont icon-nan" v-else-if="userInfo.sex==0"></i>
                <i v-else>未知</i>
                <i class="icon" @click="showQrcode">
                    <icon name="qrcode" class="qrcode"></icon>
                </i>
            </p>
            <v-qrcode :Options="Options" :showQrcode="isShowQrcode"></v-qrcode>
        </div>
        <div class="noun">
            <!-- <ul>
                <li>
                    <icon name="calendar-check-o"></icon>
                    <router-link to="/">
                        正点记录
                    </router-link>
                </li>
                <li>
                    <icon name="calendar-times-o"></icon>
                    <router-link to="/">
                        迟到记录
                    </router-link>
                </li>
                <li>
                    <icon name="fighter-jet"></icon>
                    <router-link to="/">
                        早退记录
                    </router-link>
                </li>
                <li>
                    <icon name="user-o"></icon>
                    <router-link to="/">
                        日常申请
                    </router-link>
                </li>
                <li>
                    <icon name="user-o"></icon>
                    <router-link to="/">
                        个人信息
                    </router-link>
                </li>
                <li>
                    <icon name="cog"></icon>
                    <router-link to="/">
                        系统设置
                    </router-link>
                </li>
            </ul> -->
            <mt-cell title="正点记录" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
            <mt-cell title="迟到记录" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
            <mt-cell title="早退记录" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
            <mt-cell title="日常申请" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
            <mt-cell title="个人信息" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
            <mt-cell title="系统设置" href="//github.com" is-link>
                <img slot="icon" src="/static/images/02.jpg" width="24" height="24">
            </mt-cell>
        </div>
        <v-tabbar></v-tabbar>
    </div>
</template>

<script>
    import vHeader from './component/header.vue'
    import vTabbar from './component/tabbar.vue'
    import vQrcode from './component/qrcode.vue'
    import { Cell } from 'mint-ui';

    export default {
        data() {
            return {
                title:'我的',
                isLeftShow:true,
                userInfo:{
                    id:1,
                    username:'13584866592',
                    head:'static/images/02.jpg',
                    nickname:'且行且珍惜',
                    sex:0,
                },
                Options:{
                    data:1,
                    size:100,
                    logo: {
                        image:null
                    }
                },
                isShowQrcode:false
            }
        },
        components: {
            vHeader,
            vTabbar,
            vQrcode,
            Cell
        },
        methods: {
            showQrcode(e) {
                this.isShowQrcode = !this.isShowQrcode;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .container.my{
        height:100vh;
        width:100vw;
        background-color:nth($baseColor,1);
        padding-top:50px;
        .profile{
            width:100%;
            height:180px;
            background-color:lighten(nth($baseColor,5),15%);
            box-shadow:1px 2px 4px lighten(nth($baseColor,5),15%);
            text-align: center;
            position: relative;
            img{
                width:70px;
                height:70px;
                border-radius:50%;
                margin-top:30px;
            }
            .user-info{
                margin-top:5px;
                color:lighten(nth($baseColor,2),20%);
                font-size:1.2rem;
                i{
                    margin:0;
                    padding:0;
                    position: relative;
                    left:-8px;
                    .qrcode{
                        position: absolute;
                        top:4px;
                        left:5px;
                    }
                }
            }
            .qrcanvas{
                position: absolute;
                right:20px;
                bottom:70px;
            }
        }
        .noun{
            // ul{
            //     list-style-type:none;
            //     padding:0;
            //     margin:10px 0;
            //     li{
            //         margin-left:20px;
            //         margin-right:20px;
            //         height:50px;
            //         line-height:50px;
            //         border-bottom:1px solid lighten(nth($baseColor,2),90%);
            //         a{
            //             text-decoration: none;
            //             color: nth($baseColor,2);
            //             font-size:1.2rem;
            //         }
            //     }
            // }
        }
    }
</style>