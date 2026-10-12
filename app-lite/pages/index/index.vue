<template>
  <view class="wrap">
    <view class="card" v-for="e in entries" :key="e.url" @click="go(e.url)">{{ e.text }}</view>
  </view>
</template>
<script setup>
const entries = [
  { text: '今日课表 / 点名签到', url: '/pages/schedule/index' },
  { text: '学员管理', url: '/pages/students/index' },
  { text: '家校：作业与点评', url: '/pages/parent/homework/index' },
];
const go = (url) => (url.includes('schedule') || url.includes('students') ? uni.switchTab({ url }) : uni.navigateTo({ url }));
</script>
<style>.wrap{padding:24rpx}.card{background:#fff;border-radius:16rpx;padding:32rpx;margin-bottom:20rpx}</style>
