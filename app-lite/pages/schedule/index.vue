<template>
  <view class="wrap">
    <view class="card" v-for="l in list" :key="l.id">
      <view class="t">{{ l.time }} · {{ l.className }}</view>
      <view class="s">教室 {{ l.room }} · 已签到 {{ l.signed }}</view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { getTodayLessons } from '../../api/edu.js';
const list = ref([]);
onShow(async () => (list.value = await getTodayLessons()));
</script>
<style>.wrap{padding:24rpx}.card{background:#fff;border-radius:16rpx;padding:28rpx;margin-bottom:20rpx}.t{font-weight:600}.s{color:#888;margin-top:8rpx}</style>
