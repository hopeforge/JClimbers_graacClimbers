<template>
<div class="panel panel-primary" id="result_panel">
    <div class="panel-heading"><h3 class="panel-title titulo">Templates</h3>
    </div>
    <div class="panel-body">
        <ul class="list-group">
            <li class="list-group-item"><strong>Template 1</strong></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {

    }
}
</script>

<style scoped>
    .list-group{
    max-height: 90%;
    margin-bottom: 10px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    }

    .titulo {
    background-color: rgb(187, 187, 238);
    text-align: center;
}
</style>