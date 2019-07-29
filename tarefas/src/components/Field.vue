<template>
    <div class="add-task">
        <input  v-model="text" name="newTask" class="text" type="text" placeholder="Nova tarefa?" >
        <button @click="createTask(text)" class="add">+</button>
    </div>
</template>

<script>
export default {
    props:{
        createTask: Function
    },
    data(){
        return{
            text:''
        }
    }
}
</script>

<style>

.add-task{
    margin: 40px;
    width: 45%;
    height: 50px;

    display: flex;
    flex-direction: row;
}

.add-task input{
    
    width: 100%;
    border: 1px solid white;
    border-radius: 10px 0 0 10px;

    background-color: #FFF2;
    color: white;
    font-size: 35px;
    padding-left: 10px;
}

.add{

    border: 1px solid white;
    border-radius: 0 10px 10px 0;  
    width: 54px;

    background-color: #2196F3;
    font-size: 35px;
    color: white;
}

</style>
