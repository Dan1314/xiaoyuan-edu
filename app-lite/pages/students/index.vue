<template>
  <view class="wrap">
    <view class="card" v-for="s in list" :key="s.id">{{ s.name }} · {{ s.course }} · 剩余 {{ s.remain }} 课时</view>
  </view>
</template>
<script setup>
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { getStudents } from '../../api/edu.js';
const list = ref([]);
onShow(async () => (list.value = await getStudents()));
</script>
<style>.wrap{padding:24rpx}.card{background:#fff;border-radius:16rpx;padding:28rpx;margin-bottom:20rpx}</style>
