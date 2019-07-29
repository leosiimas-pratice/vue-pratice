<template>
	<div id="app">
		<h1>Tarefas</h1>
		<Bar :progress="progress"/>
		<Field :createTask="createT"/>
		<h2 v-if="total==0">Sua vida esta em dia :)</h2>
		<div class="tasks">
			<div v-for="task in tasks" :key="task">
				<Task :text="task.text" :completed="task.completed" @completedChange="task.completed = $event" @click="alterarTask" :deleteTask="deleteT"/>
        	</div>
		</div>
	</div>
</template>

<script>

import Bar from './components/Bar'
import Field from './components/Field'
import Task from './components/Task'

export default {
	components: {Bar, Field, Task},
	data(){
        return{
            tasks:[
            ],
            total:'',
            completeds:'',
            progress:'',
        }
	},
	watch:{
		tasks: {
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods:{
        alterarTask(){
            this.completeds = 0
            this.total = this.tasks.length
            for (var i=0; i<this.total; i++) {
                if(this.tasks[i].completed){
                    this.completeds++
                }
			}
			if(this.total == 0){
				this.progress = 0
			}else{
				this.progress = (100*this.completeds)/this.total
			}
		},
		createT(text){
			var tag = 0
			this.tasks.forEach(task => {
				if(task.text == text){
					console.log(task.text)
					tag = 1
				}
			});
			if(tag == 0){
				this.tasks.push({text:text, completed:false})
			}						
        },
		deleteT(text){
			console.log(text)
			var temp = []
			this.tasks.forEach(task => {
				if(task.text != text){
					temp= temp.concat(task)
				}
			});
			this.tasks = temp
		}
		
	},
	mounted:function(){        
		this.alterarTask()
	},
	updated:function(){
		this.alterarTask()
	},
	created(){
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.tasks{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	h2{
		color: #AAA
	}
</style>
