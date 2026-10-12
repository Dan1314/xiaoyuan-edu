<script setup lang="ts">
import { leads } from '../mock/data';
const columns = [['姓名','name'],['手机号','phone'],['来源','source'],['意向度','intent'],['跟进人','owner'],['状态','status']].map(([title, dataIndex]) => ({ title, dataIndex }));
</script>
<template>
  <a-card><a-table row-key="id" :columns="columns" :data-source="leads" :pagination="false" /></a-card>
</template>
