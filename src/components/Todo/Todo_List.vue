<!-- 列出所有 TodoItem 元件 -->
<template> 
<el-card>
    <el-list-item>
      <TodoItem v-for="todo in store.list" :key="todo.id" :id="todo.id" :text="todo.text" :done="todo.done" /> 
    </el-list-item> 
    <div style="margin-top: 12px;">
      <el-input v-model="newTodo" placeholder="新增 Todo" @keyup.enter="addTodo"></el-input>
      <el-button type="primary" @click="addTodo">新增</el-button>
    </div>
</el-card>
</template> 
<script setup lang="ts"> 
  import { useTodoStore } from '@/stores/todo'; 
  import TodoItem from './Todo_Item.vue'  
  import { ref } from 'vue';
  
  const store = useTodoStore(); 

  // 前後端互動綁定 model, 以供輸入用
  const newTodo = ref('');

  const addTodo = () => {
    if (!newTodo.value) { return }
    store.addTodo({ id: Date.now(), text: newTodo.value, done: false })
    newTodo.value = ''
  }
</script>