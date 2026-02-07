import { defineStore } from "pinia";


export interface Todo {
    id: number,
    text: string,
    done: boolean
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        list: [] as Todo[]
    }),
    actions: {
        // 加入清單內
        addTodo(todo: Todo) { this.list.push(todo) },
        
        // 切換狀態
        toggleTodo(id: number) {
            const item = this.list.find(t => t.id === id)
            if(item) item.done = !item.done;
        },
        // 如果清單沒找到傳入的id,便保留(列入); 若找到的不保留(排除)
        removeTodo(id: number) {
            this.list = this.list.filter(t => t.id !== id)
        }
    } 
    
})