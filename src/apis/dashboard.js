import {service} from "@/utils/axios";
export const getTodosAPI = () => {
    return service.get("/todos?deleteState=false").then(res => {
        let list = res.data.reverse();
        // let map = new Map();
        // list.forEach(item => {
        //     if (item.date !== ""){
        //         if (!map.has(item.date)){
        //             map.set(item.date, []);
        //         }
        //         map.get(item.date).push(item);
        //     }
        // })
        // return map;
        return list.reduce((acc, item) => {
            if (item.date !== "") {
                if (!acc.has(item.date)) {
                    acc.set(item.date, []);
                }
                acc.get(item.date).push(item);
            }
            return acc;
        }, new Map());
    })
}

export const saveTodoAPI = async (editText)=> {
    const todo = {
        date: new Date().toDateString(),
        text: editText,
        done: false,
        deleteState: false
    }
    await service.post("/todos", todo );
}
export const deleteTodoAPI = async (todo) => {
    const { date, text, done } = todo;
    const deleteData = { date, text, done, deleteState: true };
    await service.put(`/todos/${todo.id}`,deleteData);
}
export const changeTodoStateAPI = async (todo) => {
    const { date, text, deleteState, done } = todo;
    const changedTodo = { date, text, deleteState, done: !done  };
    await service.put(`/todos/${todo.id}`,changedTodo);
}
