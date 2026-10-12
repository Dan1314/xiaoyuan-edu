<template>
  <view class="wrap">
    <view class="card" v-for="h in list" :key="h.id">
      <view class="t">{{ h.title }}（截止 {{ h.due }}）</view>
      <view class="s">老师点评：{{ h.comment }}</view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getHomework } from '../../../api/edu.js';
const list = ref([]);
onLoad(async () => (list.value = await getHomework()));
</script>
<style>.wrap{padding:24rpx}.card{background:#fff;border-radius:16rpx;padding:28rpx;margin-bottom:20rpx}.t{font-weight:600}.s{color:#888;margin-top:8rpx}</style>
