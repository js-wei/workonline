/**
 * File: e:\workonline.com\src\components\punch.vue
 * Created Date: 2018-01-31 8:51:45
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-01 3:05:10
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
            <el-amap class="amap-demo" vid="amap" :zoom="zoom" ref="map" :events="events">
            </el-amap>
            <div class="toolbar">
                <ul class="toolbar-address">
                    <li>公司:{{company}}</li>
                    <li>地点:{{formattedAddress}}</li>
                    <li><i>提示:圆圈内为打卡区域</i></li>
                </ul>
            </div>
        </div>
        <div class="punch-button">
            <button class="btn btn-punch" :class="{'disabled':!isPunchDisabled}">打卡</button>
        </div>
    </div>
</template>

<script>
    import '../../static/iconfont/iconfont.css'
    import vHeader from './component/header.vue'
    import { Toast } from 'mint-ui';
    export default {
        data() {
            let self = this;
            return {
                title:'打卡签到',
                isLeftShow:true,
                company:'苏州三铁企业集团',                 //打卡公司
                company_address:'苏州市玉山路99号钻石广场',  //公司地址
                zoom: 18,
                formattedAddress:'',                       //打卡地址
                isPunchDisabled:true,                      //不在范围禁止使用打卡按钮
                position:[120.55951,31.286219],           //打卡坐标
                //苏州火车站 120.611057,31.329632 
                //名馨花园东工具站牌 120.55929,31.285518 
                //钻石广场中心点 120.559832,31.286366 
                //钻石广场 120.55951,31.286219
                //虹锦湾 120.412504,31.339436
                events: {
                    init(map) {
                        let geocoder = new AMap.Geocoder({
                            city: "全国", 
                            radius: 50
                        });
                        geocoder.getLocation(self.company_address, function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                self.geocoderCallBack(result,map,self);
                                let postion={
                                    lng:self.position[0],
                                    lat:self.position[1]
                                };
                                let text = {
                                    title:'我',
                                    sub:'我'
                                };
                                self.addSimpleMarker(postion,text,map);
                            }
                        });
                    }
                }
            }
        },
        components: {
            vHeader,
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
                    self.formattedAddress= geocode[i].formattedAddress;
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
                    map.setFitView();   
                });
            },
            addMarker(position,map){
                var marker = new AMap.Marker({ //添加自定义点标记
                    map: map,
                    zIndex:120,
                    fillColor:'#eb7d46',
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
                this.reGeocoder(self.position,(address)=>{
                    document.querySelector('.btn-punch').addEventListener('click',function(e){
                        e.preventDefault();
                        if(this.classList.contains("disabled") && !self.isPunchDisabled){
                            Toast({
                                message:'不在打开范围之内',
                                iconClass:'icon iconfont icon-dingdanzhuangtaishibai',
                                duration: 4e3
                            });
                            return;
                        }
                        let result = {flag:flag,center:lnglat,position:self.position,punch_address:address};
                        self.punch(result);
                    });
                });
            },
            reGeocoder(position,cb={}) {  //逆地理编码
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });        
                geocoder.getAddress(position, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        result = result.regeocode.formattedAddress;  //返回地址描述
                        cb(result);
                    }
                });   
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/sass/base';
    .punch.container{
        height:auto;
        overflow: hidden;
        margin-bottom:100px;
        .amap-demo{
            height: 530px;
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
                &.disabled{
                    opacity:.8;
                }
            }

        }
        .iconfont{
            font-size:1.8rem;
        }
    }
</style>