<template>
  <view class="wrap">
    <view class="card">孩子课表、课消提醒、请假、成长档案（家长端 / 小程序）</view>
    <view class="card" @click="toHw">作业与点评 ›</view>
  </view>
</template>
<script setup>
const toHw = () => uni.navigateTo({ url: '/pages/parent/homework/index' });
</script>
<style>.wrap{padding:24rpx}.card{background:#fff;border-radius:16rpx;padding:32rpx;margin-bottom:20rpx}</style>
