/**
 * File: e:\workonline.com\src\components\punch.vue
 * Created Date: 2018-01-31 8:51:45
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-01 10:30:07
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="punch container">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="amap">
            <el-amap class="amap-demo" vid="amap" 
            :plugin="plugin" :zoom="zoom" ref="map" :events="events">
            </el-amap>
            <div class="toolbar">
                <ul v-if="loaded" class="toolbar-address">
                    <li>公司:{{company}}</li>
                    <li>地点:{{formattedAddress}}</li>
                    <li><i>提示:圆圈内为打卡区域</i></li>
                </ul>
                <div v-else>正在定位...</div>
            </div>
        </div>
        <div class="punch-button">
            <button class="btn btn-punch">打卡</button>
        </div>
    </div>
</template>

<script>
    import '../../static/iconfont/iconfont.css'
    import vHeader from './component/header.vue'
    import vTabbar from './component/tabbar.vue'
    import { Toast } from 'mint-ui';
    export default {
        data() {
            let self = this;
            return {
                title:'打卡签到',
                isLeftShow:true,
                company:'苏州三铁企业集团',
                company_address:'苏州市玉山路99号钻石广场',
                zoom: 18,
                formattedAddress:'',
                position:[120.55929,31.285518],   
                //苏州火车站:120.611057,31.329632 
                //名馨花园东工具站牌 120.55929,31.285518 
                //钻石广场中心点 120.559832,31.286366 
                //钻石广场 120.55951,31.286219
                loaded: true,
                events: {
                    init(map) {
                        let geocoder = new AMap.Geocoder({
                            city: "全国", 
                            radius: 500
                        });
                        //地理编码,返回地理编码结果
                        geocoder.getLocation(self.company_address, function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                self.geocoderCallBack(result,map,self);
                                self.addMarker(self.position,map);
                            }
                        });
                    }
                },
                plugin: [
                    /*打开使用定位,想一想不应该是使用定位的
                    {
                        pName: 'Geolocation',
                        events: {
                            init(o) {
                                let map = self.$refs.map.$$getInstance();
                                let geocoder = new AMap.Geocoder({
                                    city: "全国", 
                                    radius: 500
                                });
                                //地理编码,返回地理编码结果
                                geocoder.getLocation("苏州市玉山路99号钻石广场", function(status, result) {
                                    if (status === 'complete' && result.info === 'OK') {
                                        self.geocoderCallBack(result,map,self);
                                        self.addMarker(self.position,map);
                                    }
                                });
                            
                            }
                        }
                    }
                    */
                ]
            }
        },
        components: {
            vHeader,
            vTabbar,
            Toast
        },
        methods: {
            punch(result) {
                console.log(result);
                if(!result.flag){
                    Toast({
                        message:'你是在火星打卡的吧',
                        iconClass:'icon iconfont icon-dingdanzhuangtaishibai',
                        duration: 4e3
                    });
                    return;
                }
                
                //@todo something

                Toast({
                    message:'恭喜你打卡成功',
                    iconClass:'icon iconfont icon-msnui-success',
                    duration: 4e3
                });
            },
            geocoderCallBack(data,map,self) {
                //地理编码结果数组
                var geocode = data.geocodes;
                for (var i = 0; i < geocode.length; i++) {
                    let lnglat = [geocode[i].location.lng,geocode[i].location.lat];
                    let result = self.addCircle(lnglat,map,self);
                    let postion={
                        lng:geocode[i].location.lng,
                        lat:geocode[i].location.lat,
                        address: geocode[i].formattedAddress
                    };
                    let text = {
                        title:self.company,
                        sub:'三铁'
                    };
                    self.addSimpleMarker(postion,text,map);
                }
                map.setFitView();
            },
            addSimpleMarker(d={lng:0,lat:0,address:''},text={title:'公司全称',sub:'简称'},map){
                AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                    //添加marker
                    const marker = new SimpleMarker({
                        map: map,
                        iconLabel: text.sub,
                        iconStyle:'orange',
                        showPositionPoint:true,
                        position: [d.lng,d.lat]
                    });
                    //信息框
                    if(d.address){
                        let infoWindow = new AMap.InfoWindow({
                            content: d.address +' ' + text.title,
                            offset: {x: 0, y: -30}
                        });
                        marker.on("click", function(e) {
                            infoWindow.open(map,marker.getPosition());
                        });
                    }
                });
            },
            addMarker(position,map){
                var marker = new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: position, //基点位置
                });
            },
            addCircle(lnglat,map,self){
                let circle = new AMap.Circle({
                    center: lnglat,// 圆心位置
                    radius: 60, //半径
                    strokeColor: "#eb7d46", //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 3, //线粗细度
                    fillColor: "#eb7d46", //填充颜色
                    fillOpacity: 0.35//填充透明度
                });
                circle.setMap(map);
                let flag = circle.contains(self.position);
                document.querySelector('.btn-punch').addEventListener('click',function(e){
                    e.preventDefault();
                    self.punch({position:self.position,flag:flag,center:lnglat});
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .punch.container{
        height:100vh;
        .amap-demo{
            height: 500px;
        }
        .amap-marker .marker-route {
            position: absolute;
            width: 40px;
            height: 44px;
            color: #e90000;
            background: url(http://webapi.amap.com/theme/v1.3/images/newpc/poi-1.png) no-repeat;
            cursor: pointer;
        }
        .amap-marker .marker-marker-bus-from {
            background-position: -334px -180px;
        }
        .amap-icon{
            z-index:1;
        }
        .toolbar{
            .toolbar-address{
                list-style-type:none;
                margin:10px 0 0 0;
                padding:0px 4px;
                li{
                    margin-left:10px;
                    line-height:1.5rem;
                    font-size:1rem;
                    i{
                        font-size:.8rem;
                        color:nth($baseColor,3)
                    }
                }
            }
        }
        .punch-button{
            height:100px;
            width:100vw;
            line-height:100px;
            background-color:nth($baseColor,5);
            position: fixed;
            bottom:0;
            text-align: center;
            .btn{
                border:none;
                height:80px;
                width:80px;
                background-color:nth($baseColor,3);
                color:nth($baseColor,1);
                border-radius:50%;
            }

        }
        .iconfont{
            font-size:1.8rem;
        }
    }
    
</style>