<!-- 單一元件 -->
<template>
  <el-list-item>
      <el-checkbox :model-value="done" @update:model-value="toggle">
        {{ text }}  
      </el-checkbox> 
      <el-button type="danger" size="mini" @click="remove">刪除</el-button>
  </el-list-item>
</template>
<script setup lang="ts">
import type { Todo } from '@/stores/todo';
import { useTodoStore } from '@/stores/todo';

// prop 傳入 todo
const props = defineProps<{
    id: number,
    text: string,
    done: boolean
}>()

// 傳入 prop.id
const store = useTodoStore();
const toggle = () => store.toggleTodo(props.id);
const remove = () => store.removeTodo(props.id);
</script>
