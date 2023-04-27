<template>
  <div class="stavka">
      <h5>{{data.naziv}}</h5>
      <h4>{{data.cena}} din</h4>
  </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped>
    .stavka{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        border: 1px solid gray;
        margin: 5px;
        cursor:pointer;
        padding: 5px;
    }
</style>