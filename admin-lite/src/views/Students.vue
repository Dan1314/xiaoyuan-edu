<script setup lang="ts">
import { students } from '../mock/data';
const columns = [['学员','name'],['校区','campus'],['课程','course'],['剩余课时','remain'],['状态','status']].map(([title, dataIndex]) => ({ title, dataIndex }));
</script>
<template>
  <a-card><a-table row-key="id" :columns="columns" :data-source="students" :pagination="false" /></a-card>
</template>
