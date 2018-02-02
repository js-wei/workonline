/**
 * File: d:\项目\workonline\src\components\setpassword.vue
 * Created Date: 2018-02-02 11:50:40
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-02 11:57:43
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="container setpassword">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile">
            <img src="/static/images/logo.png">
            <h3>使用集团账号登录<span>掌上办公</span></h3>
            <div class="login-container">
                <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
                <mt-field placeholder="请输入确认密码" type="password" v-model="confirm_password"></mt-field>
            </div>
            <div class="login-button">
                <mt-button type="primary" :disabled="disabled">重置密码</mt-button>
            </div>
            <div class="login-button mt-8">
                <router-link to="/login">立即登录</router-link>
                <!--<span>|</span>
                 <router-link to="/forget">忘记密码</router-link> -->
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
                title: '重置密码',
                isLeftShow:true,
                password:'',
                confirm_password:'',
                state:'none',
                disabled:true
            }
        },
        components: {
            vHeader,
            Field,
            Button
        },
    }
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .setpassword{
        margin-top:50px;
        .profile{
            width:100%;
            height:auto;
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
            .login-container{
                margin:0 auto;
                width:90%;
                height:120px;
                
            }
            .login-button{
                margin:0 auto;
                width:90%;
                border-radius:15px;
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