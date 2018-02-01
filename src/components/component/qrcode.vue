/**
 * File: g:\vue\jswei.cn\src\components\public\qrcode.vue
 * Created Date: 2017-12-02 9:59:20
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 4:09:41
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="qrcanvas" v-if="showQrcode">
        <qrcanvas :options="qrOptions" ref="myQrcode"></qrcanvas>
    </div>
</template>

<script>
    import Qrcanvas from 'qrcanvas-vue'
    export default {
        data() {
            return {
                qrOptions:{}
            }
        },
        props: {
            showQrcode:{
                type:Boolean,
                default:false
            },
            Options:{
                type:Object,
                default:{
                    data:'',
                    cellSize:2,
                    size:120,
                    typeNumber:'Auto',
                    foreground:'black',
                    background:'white',
                    logo:{
                        //image:new Image(),
                        text:'',
                        color:'black',
                        fontStyle:'italic',
                        fontFamily:'Cursive',
                        margin:2,
                        size:.15
                    },
                    effect:{
                        key:'round', //liquid spot
                        value:0,
                    }
                }
            }
        },
        computed:{
           initData(){
               if(this.Options.logo.image!=undefined || this.Options.logo.image!=null){
                    let _image = new Image();
                    _image.src= this.Options.logo.image;
                    _image.onload=()=>{
                        this.Options.logo.image=_image; 
                        this.qrOptions=this.Options;
                    }
               }else{
                  this.qrOptions=this.Options;
               }
           }

        },
        components:{
            Qrcanvas
        },
        created(){
          this.initData;
        }
    }
</script>

<style lang="scss" scoped>
    .qrcanvas{
        padding-left:.8rem;
    }
</style>