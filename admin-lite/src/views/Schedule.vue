<script setup lang="ts">
import { lessons } from '../mock/data';
const columns = [['时间','time'],['班级','className'],['老师','teacher'],['教室','room'],['签到','signed']].map(([title, dataIndex]) => ({ title, dataIndex }));
</script>
<template>
  <a-card><a-table row-key="id" :columns="columns" :data-source="lessons" :pagination="false" /></a-card>
</template>
