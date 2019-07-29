<template>
    <div class='bar'>
        <span>{{progress}}%</span>
        <div class="progress" :style="{width: progress+'%'}"></div>        
    </div>
</template>

<script>

export default {
    props:{
        progress: String
    }
}
</script>

<style>

.bar{

    position: relative;
    width: 80%;
    height: 30px;
    border: 1px solid white;
    border-radius: 10px;
    color: #FFF;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 22px;
    
}

.bar span{
    z-index: 1; 
}

.progress{
    position: absolute;
    height: 100%;
    border-radius: 10px;
    background-color: #4CAF50;
    align-self: flex-start;
}

</style>
