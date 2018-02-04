/**
 * File: g:\vue\workonline\src\components\setting.vue
 * Created Date: 2018-02-04 3:02:34
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-02-04 3:52:54
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="container setting">
        <v-header :title="title" :isLeftShow="isLeftShow"></v-header>
        111
    </div>
</template>

<script>
    import vHeader from './component/header.vue'
    export default {
        data() {
            return {
                title: '系统设置',
                isLeftShow:true,
            }
        },
        components: {
            vHeader,
        },
    }
</script>

<style lang="scss" scoped>
    .setting{
        margin-top:50px;
    }
</style>