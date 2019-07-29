<template>
    <div class="task padding" :class="{completed: completed}" @click="complete">
        <div class="text">
            {{ text }}
        </div>
        <span @click="deleteTask(text)" class="close" :class="{'deleteClass':!completed, 'completedClose':completed}">x</span>
    </div>
</template>

<script>
export default {
    props:{
        text: String,
        completed: Boolean,
        deleteTask: Function
    },
    methods:{
        complete(){
            this.completed = !this.completed
            this.$emit('completedChange', this.completed)
        }
    } 
}
</script>

<style>
    .task{

        position: relative;
        margin: 10px;
        width: 350px;
        height: 150px;
        border-radius: 10px;
        background-color: #F44336;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        border-left: 12px solid #B73229;
        
    }

    .completed{
        background-color: #4CAF50;
        text-decoration-line: line-through;
        border-left: 12px solid #0A8F08;
    }

    .text{
        font-size: 30px;
        font-weight: 200;
    }

    .close{
        width: 20px;
        border-radius: 10px;
        position: absolute;
        right: 10px;
        top: 10px;
        display: flex;
        justify-content: center;
        height: 20px;
        align-content: center;
        
    }

    .completedClose{
        background-color: #0A8F08;
        text-decoration: none;
    }

    .deleteClass{
        background-color: #B73229;
    }
    

</style>
