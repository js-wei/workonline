/**
 * File: d:\项目\workonline\src\components\forget.vue
 * Created Date: 2018-02-02 11:29:08
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-02 11:49:10
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="container forget">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile">
            <img src="/static/images/logo.png">
            <h3>使用集团账号登录<span>掌上办公</span></h3>
            <div class="tip">
                <p>请输入您的手机或邮箱账号</p>
            </div>
            <div class="login-container">
                <mt-field placeholder="请输入手机号/邮箱" type="tel" v-model="phone" :state="state"></mt-field>
                <mt-field v-model="captcha" placeholder="请输入验证码">
                   <img src="/static/images/verify.png">
                </mt-field>
            </div>
            <div class="login-button">
                <mt-button type="primary" :disabled="disabled">下一步</mt-button>
            </div>
            <div class="login-button mt-8">
                <router-link to="/login">立即注册</router-link>
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
                title: '忘记密码',
                isLeftShow:true,
                phone:'',
                captcha:'',
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
    .forget{
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
            .tip{
                p{
                    font-size:.8rem;
                    color:lighten(nth($baseColor,2),60%);
                }
            }
            .login-container{
                margin:0 auto;
                width:90%;
                height:120px;
                .mint-cell{
                    .mint-field-other{
                        img{
                            width:120px;
                            height:52px;
                            margin-top:0;
                        }
                    }
                }
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