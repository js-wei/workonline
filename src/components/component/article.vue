/**
 * File: e:\workonline.com\src\components\component\article.vue
 * Created Date: 2018-01-30 2:19:02
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 8:40:27
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="article">
        <article v-for="(item,index) in articleList" :key="index">
            <router-link :to="item.path">
                <div>
                    <div class="article-left">
                        <h1 class="article-title">{{item.title}}</h1>
                        <div class="article-description">
                            {{item.description}}
                        </div>
                    </div>
                    <div class="article-right">
                        <img :src="item.image" :alt="item.title">
                    </div>
                </div>
                <div class="label">
                    <i v-for="(v,i) in item.attr" :key="i">#{{v}}</i>
                </div>
            </router-link>
        </article>
        <mt-spinner :type="3" class="spinner" v-if="isShow"></mt-spinner>
    </div>
</template>

<script>
import { Spinner } from 'mint-ui';
    export default {
        data() {
            return {
                isShow: false,
                list:[]
            }
        },
        components: {
            Spinner,
        },
        props: {
            articleList: {
                type: Array,
                default: []
            },
            isSpinnerShow:{
                type: Boolean,
                default:false
            },
            distance:{
                type:Number,
                default:20
            },
            scrollHandler:{
                type: Function,
                default:null
            }
        },
        methods: {
            scroll(fn) {
                var beforeScrollTop = document.body.scrollTop,
                    fn = fn || function() {};
                window.addEventListener("scroll", function() {
                    var afterScrollTop = document.body.scrollTop,
                        delta = afterScrollTop - beforeScrollTop;
                    if( delta === 0 ) return false;
                    beforeScrollTop = afterScrollTop;
                    if(document.documentElement.scrollHeight == document.documentElement.clientHeight + afterScrollTop){
                        fn( delta > 0 ? "down" : "up" );
                    }
                }, false);
            }
        },
        created(){
            this.isShow = this.isSpinnerShow;
            this.list = this.articleList;
            this.scroll(e=>{
                if(e=='down'){
                    this.isShow=true;
                    setTimeout(()=>{
                        this.isShow=false;
                    },6e3);
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
@import 'static/sass/base';
    .article{
        background-color: #fff;
        width:100%;
        height:auto;
        overflow: hidden;
        text-align: center;
        article{
            border-bottom:1px solid rgba(0, 0, 0, 0.082);
             padding:10px 5px;
            a{
                color:nth($baseColor,2);
                text-decoration:none;
                text-align: left;
                .article-left{
                    width:70%;
                    height:100%;
                    float: left;
                    .article-title{
                        font-size:1.4rem;
                        font-weight: normal;
                        margin:2px;
                        padding:2px;
                    }
                    .article-description{
                        line-height:1.5rem;
                        height:45px;
                        margin-left:5px;
                        overflow: hidden;
                        font-size:1rem;
                        color:nth($baseColor,2);
                    }
                }
                .article-right{
                    width:28%; 
                    height:100%;
                    float: right;
                    img{
                        width:90%;
                        height:100px;
                    }
                }
                .label{
                    clear: both;
                    padding-top:10px;
                    margin-left:5px;
                    i{
                        font-size:.8rem;
                        color:lighten(nth($baseColor,2),40%);
                        margin-right:5px;
                    }
                }
            }
        }
        .spinner{
            display:inline-block;
            padding-top:10px;
            padding-bottom:20px;
        }
    }
</style>