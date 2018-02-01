/**
 * File: e:\workonline.com\src\components\component\arclist.vue
 * Created Date: 2018-01-31 8:41:15
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-31 8:43:17
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="arclist">
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        },
    }
</script>

<style scoped>

</style>