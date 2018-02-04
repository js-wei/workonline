/**
 * File: d:\项目\workonline\src\components\my\profile.vue
 * Created Date: 2018-02-02 1:08:08
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-04 3:00:50
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="profile">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        <div class="profile-header">
            <div class="head" @click="upgrade_heade">
                <img :src="userInfo.head" :alt="userInfo.nickname">
                <icon name="camera-retro" class="camera"></icon>
            </div>
            <p class="user-info">
                {{userInfo.nickname}}({{userInfo.username}})
                <i class="icon iconfont icon-nv" v-if="userInfo.sex==1"></i>
                <i class="icon iconfont icon-nan" v-else-if="userInfo.sex==0"></i>
                <i v-else>未知</i>
            </p>
        </div>
        <div class="profile-information">
            <mt-cell title="昵称">
                <span @click="upgrade_nickname">{{userInfo.nickname}}</span>
            </mt-cell>
             <mt-cell title="介绍" class="information">
                <span>{{userInfo.information}}</span>
            </mt-cell>
            <mt-cell title="性别" v-if="userInfo.sex==1">
                <span @click="upgrade_sex(1)">女</span>
            </mt-cell>
            <mt-cell title="性别" v-if="userInfo.sex==0">
                <span @click="upgrade_sex(0)">男</span>
            </mt-cell>
            <mt-cell title="生日">
                <span @click="openPicker" v-if="!selectDateValue">{{userInfo.birthday}}</span>
                <span @click="openPicker" v-if="selectDateValue">{{selectDateValue}}</span>
            </mt-cell>
            <mt-cell title="地区">
                <span @click="upgrade_address">{{userInfo.address}}</span>
            </mt-cell>
        </div>
        <mt-actionsheet 
        :actions="actions"
        v-model="sheetVisible">
        </mt-actionsheet>
        <mt-datetime-picker
            ref="picker"
            type="date"
            v-model="pickerValue"
            :startDate="startDate"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="handleConfirm">
        </mt-datetime-picker>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <mt-radio
                title="单选框列表"
                v-model="sex_value"
                :options="['男', '女']">
            </mt-radio>
        </mt-popup>
        <mt-popup
            v-model="myAddressPicker"
            position="bottom">
            <mt-button type="primary" @click="cancel_address">取消</mt-button>
            <mt-button type="primary" @click="yes_address">确认</mt-button>
            <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker> 
        </mt-popup>
    </div>
</template>

<script>
    import vHeader from '@/components/component/header.vue'
    import { Actionsheet,Cell,DatetimePicker,Popup,Radio,Toast,Picker,Button
            ,MessageBox  } from 'mint-ui'
    import myaddress from '../../../static/javascript/address3.json'     //引入省市区数据 
    import loginVue from '../login.vue';
    
    export default {
        data() {
            return {
                title:'个人信息',
                isLeftShow:true,
                userInfo:{
                    id:1,
                    username:'13584866592',
                    head:'/static/images/02.jpg',
                    nickname:'且行且珍惜',
                    sex:0,
                    information:'谁说我是一个坏人,只是没人安心了解我,我行自我素不是的吗?',
                    birthday:'2012-12-24',
                    address:'江苏徐州市'
                },
                startDate: new Date('1972-01-01'),
                pickerValue:'2012-12-24',
                selectDateValue:'',
                sheetVisible:false,
                actions:[
                    {
                        name:'拍照',
                        method:this.camera
                    },
                    {
                        name:'从相册中选择',
                        method:this.album
                    }
                ],
                popupVisible:false,
                sex_value:'',
                myAddressPicker:false,
                myAddressSlots: [ 
                    { 
                        flex: 1, 
                        defaultIndex: 1,     
                        values: Object.keys(myaddress),  //省份数组 
                        className: 'slot1', 
                        textAlign: 'center'
                    }, { 
                        divider: true, 
                        content: '-', 
                        className: 'slot2'
                    }, { 
                        flex: 1, 
                        values: [], 
                        className: 'slot3', 
                        textAlign: 'center'
                    }, 
                    { 
                        divider: true, 
                        content: '-', 
                        className: 'slot4'
                    }, 
                    { 
                        flex: 1, 
                        values: [], 
                        className: 'slot5', 
                        textAlign: 'center'
                    } 
                ], 
                myAddressProvince:'省', 
                myAddressCity:'市', 
                myAddresscounty:'区/县', 
            }
        },
        components: {
            vHeader,
            Actionsheet,
            Cell,
            DatetimePicker,
            Popup,
            Radio,
            Toast,
            Picker,
            Button,
            MessageBox 
        },
        methods: {
            upgrade_heade() {
                this.sheetVisible = true;
            },
            upgrade_sex(value){
                this.popupVisible = true;
            },
            camera(){
                console.log('camera');
            },
            album(){
                console.log('album');
            },
            openPicker() {
                this.$refs.picker.open();
            },
            handleConfirm(value){
                this.selectDateValue = this.formart_date(value,'yyyy-MM-dd');
            },
            setSet(value){
                let newValue = (value=='男')?0:1;
                this.userInfo.sex = newValue;
                // Toast({
                //     message:'不在打开范围之内',
                //     iconClass:'icon iconfont icon-dingdanzhuangtaishibai',
                //     duration: 4e3
                // });
                Toast({
                    message:'性别已修改成:'+value,
                    iconClass:'icon iconfont icon-msnui-success',
                    duration: 4e3
                });
            },
            upgrade_address(){
                this.myAddressPicker=true;
                this.$nextTick(() => {
                    setTimeout(() => {//这个是一个初始化默认值的一个技巧
                        this.myAddressSlots[0].defaultIndex = 0;
                    }, 100);
                });
            },
            onMyAddressChange(picker, values) { 
                if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽） 
                    picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组 
                    picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组 
                    this.myAddressProvince = values[0]; 
                    this.myAddressCity = values[1]; 
                    this.myAddresscounty = values[2]; 
                } 
            }, 
            cancel_address(){
                this.myAddressPicker=false;
                this.$nextTick(() => {
                    setTimeout(() => {//这个是一个初始化默认值的一个技巧
                        this.myAddressSlots[0].defaultIndex = 0;
                    }, 100);
                });
            },
            yes_address(){
                this.myAddressPicker=false;
                let address = this.myAddressProvince + this.myAddressCity + this.myAddresscounty;
                this.userInfo.address = address;
                Toast({
                    message:'地区已修改成:'+address,
                    iconClass:'icon iconfont icon-msnui-success',
                    duration: 4e3
                });
            },
            upgrade_nickname(){
                MessageBox.prompt('请输入昵称').then(({ value, action }) => {
                    console.log(value,action)
                });
            }
        },
        watch: {
            sex_value(newValue, oldValue) {
                this.setSet(newValue);
                this.popupVisible=false;
            }
        }
    }
</script>

<style lang="scss" scoped>
     @import 'static/sass/base';
    .profile{
        margin-top:50px;
        .profile-header{
            width:100%;
            height:180px;
            background-color:lighten(nth($baseColor,5),15%);
            box-shadow:1px 2px 4px lighten(nth($baseColor,5),15%);
            text-align: center;
            position: relative;
            .head{
                height:120px;
                width:150px;
                margin:0 auto;
                position: relative;
                img{
                    width:100px;
                    height:100px;
                    border-radius:50%;
                    margin-top:20px;
                }
                .camera{
                    width:20px;
                    height:20px;
                    position: absolute;
                    bottom:10%;
                    right:20%;
                    z-index:100;
                    color:nth($baseColor,1);
                }
            }
            .user-info{
                margin-top:10px;
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
        }
        .profile-information{
            margin-top:20px;
        }
    }
</style>