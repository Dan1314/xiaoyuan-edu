<script setup lang="ts">
import { summary } from '../mock/data';
</script>
<template>
  <a-row :gutter="16">
    <a-col :span="8"><a-card><a-statistic title="在读学员" :value="summary.students" /></a-card></a-col>
    <a-col :span="8"><a-card><a-statistic title="本月新增线索" :value="summary.newLeads" /></a-card></a-col>
    <a-col :span="8"><a-card><a-statistic title="今日课次" :value="summary.todayLessons" /></a-card></a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 16px">
    <a-col :span="8"><a-card><a-statistic title="本月收入（元）" :value="summary.monthIncome" /></a-card></a-col>
    <a-col :span="8"><a-card><a-statistic title="出勤率" :value="summary.attendance * 100" suffix="%" /></a-card></a-col>
    <a-col :span="8"><a-card><a-statistic title="续费率" :value="summary.renewRate * 100" suffix="%" /></a-card></a-col>
  </a-row>
</template>
