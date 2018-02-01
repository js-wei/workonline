/**
 * File: d:\项目\workonline\src\components\login.vue
 * Created Date: 2018-02-01 2:49:47
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-01 5:12:19
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="login container">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile">
            <img src="/static/images/02.jpg">
            <h3>使用集团账号登录<span>掌上办公</span></h3>
            <div class="login-container">
                <mt-field placeholder="请输入手机号/邮箱" type="tel" v-model="phone" :state="state"></mt-field>
                <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
            </div>
            <div class="login-button">
                <mt-button type="primary" :disabled="disabled">登录</mt-button>
                <mt-button type="default" class="mt-5" @click="register">手机短信登录/注册</mt-button>
            </div>
            <div class="login-button mt-8">
                <!-- <router-link to="/">立即注册</router-link>
                <span>|</span> -->
                <router-link to="/">忘记密码</router-link>
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
                password:'',
                state:'none',
                disabled:true
            }
        },
        components: {
            vHeader,
            Field,
            Button
        },
        methods: {
            register() {
                this.$router.push('register');
            }
        },
    }
</script>
<style scoped>
    body{
        background-color:#f2f2f2;        
    }
    .mint-cell{
        border-bottom:1px solid #f2f2f2;
    }
    .mint-cell-wrapper{
        background-color: #fff;
        background-image:none;
    }
</style>
<style lang="scss" scoped>
    @import 'static/sass/base';
    .login{
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
            .login-container,.login-button{
                margin:0 auto;
                width:90%;
                height:120px;
                border-radius:15px;
            }
            .login-button{
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