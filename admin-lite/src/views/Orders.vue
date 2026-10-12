<script setup lang="ts">
import { orders } from '../mock/data';
const columns = [['订单号','id'],['学员','student'],['购买项目','item'],['金额（元）','amount'],['支付方式','pay'],['状态','status']].map(([title, dataIndex]) => ({ title, dataIndex }));
</script>
<template>
  <a-card><a-table row-key="id" :columns="columns" :data-source="orders" :pagination="false" /></a-card>
</template>
