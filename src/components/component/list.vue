/**
 * File: e:\workonline.com\src\components\component\list.vue
 * Created Date: 2018-01-30 1:01:34
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-30 2:27:17
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="pt-8 pl-4 list">
        <h3 v-if="title">
            <icon :name="icon" class="icon-fire" 
            :style="iconColor?'color:'+iconColor+';':''"></icon>
            {{title}}
        </h3>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="item.path">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: []
            },
            title:{
                type: String,
                default:''
            },
            icon:{
                type: String,
                default:'fire'
            },
            iconColor:{
                type: String,
                default:'fire'
            }
        },
        created(){
           
        }
    }
</script>

<style lang="scss" scoped>
     @import 'static/sass/base';
    .list{
        height:100px;
        background-color: #fff;
        margin-bottom:10px;
        box-shadow:4px 5px 3px rgba(0, 0, 0, 0.11);
        h3{
            font-size:1.4rem;
            margin:0;
            color:lighten(nth($baseColor,2),30%);
            .icon-fire{
                color:nth($baseColor, 5);
            }
        }
        ul{
            list-style-type: disc;
            padding-left:20px;
            margin-top:5px;
            li{
                line-height:1.5rem;
                a{
                    font-size:1rem;
                    font-weight:normal;
                    text-decoration:none;
                    color:lighten(nth($baseColor,2),30%);
                }
            }
        }
    }
</style>