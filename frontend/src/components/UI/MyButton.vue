<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
    .btn{
    padding: 13px 20px;
    background: none;
    color: black;
    border: 2px solid black;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
  }

  .btn:hover{
      color: purple;
      border-radius: 50px;
      border: 2px solid purple;
      transition: .2s;
  }

  @media (min-width: 560px) and (max-width: 900px) {
    .btn{
      padding: 10px 15px;
    }

  }

    @media (max-width: 559px){
      .btn{
        padding: 10px 10px;
      }
    }

</style>