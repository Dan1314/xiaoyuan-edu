<script setup lang="ts">
import { campuses } from '../mock/data';
const columns = [['校区','name'],['在读学员','students'],['老师数','teachers'],['本月收入（元）','income']].map(([title, dataIndex]) => ({ title, dataIndex }));
</script>
<template>
  <a-card><a-table row-key="id" :columns="columns" :data-source="campuses" :pagination="false" /></a-card>
</template>
