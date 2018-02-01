/**
 * File: d:\项目\workonline\src\components\register.vue
 * Created Date: 2018-02-01 4:51:08
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-01 5:23:39
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="register container">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile">
            <img src="/static/images/02.jpg">
            <h3>使用集团账号登录<span>掌上办公</span></h3>
            <div class="register-container">
                <mt-field label="+86" placeholder="请输入手机号/邮箱" type="tel" v-model="phone" :state="state" class="phone">
                </mt-field>
                <mt-field  v-model="captcha" placeholder="短信验证码">
                   <mt-button type="default" class="verify" :disabled="verify_disabled">{{verify_massege}}</mt-button>
                </mt-field>
            </div>
            <div class="register-button">
                <mt-button type="primary" :disabled="disabled">立即登录/注册</mt-button>
                <mt-button type="default" class="mt-5" @click="login">用户账号密码登录</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import vHeader from './component/header.vue'
    import { Field } from 'mint-ui'
    import { Button } from 'mint-ui'

    export default {
        data() {
            return {
                title: '登录',
                isLeftShow:true,
                phone:'',
                captcha:'',
                state:'none',
                disabled:true,
                verify_massege:'获取验证码',
                verify_disabled:false
            }
        },
        components: {
            vHeader,
            Field,
            Button
        },
        methods: {
            login() {
                this.$router.push('login');
            }
        },
    }
</script>
<style>
    body{
        background-color:#f2f2f2;        
    }
    .mint-cell{
        border-bottom:1px solid #f2f2f2;
    }
    .mint-cell-text{
        margin-left:0 !important;
        font-size:1rem !important;
    }
    .mint-cell-wrapper{
        background-color: #fff;
        background-image:none;
    }
    .phone .mint-cell-title{
        width:40px;
        height:100%;
        line-height:50px;
        border-right:1px solid #e2dfdf;
    }
    .phone .mint-cell-value{
        margin-left:4px;
    }
</style>
<style lang="scss" scoped>
    @import 'static/sass/base';
    .register{
        background-color:lighten(nth($baseColor,2),95%);
        height:100%;
        .profile{
            width:100%;
            height:180px;
            text-align: center;
            position: relative;
            img{
                width:70px;
                height:70px;
                border-radius:10%;
                margin-top:30px;
            }
            h3{
               font-size:1.2rem;
               font-weight:normal;
               span{
                   font-size:1rem;
                   color:nth($baseColor,5);
                   margin-left:4px;
               }
            }
            .register-container,.register-button{
                margin:0 auto;
                width:90%;
                height:120px;
                border-radius:15px;
                .verify{
                    background-color:nth($baseColor,5);
                    color:nth($baseColor,1);
                    width:120px;
                    font-size:.8rem;
                }
            }
            .register-button{
                .mint-button{
                    width:100%;
                    .mint-button--default{
                        margin-top:10px;
                    }
                }
                a{
                    text-decoration: none;
                    color:lighten(nth($baseColor,2),40%);
                }
            }
        }
    }
</style>