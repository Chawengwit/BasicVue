<template>
  <div>
    <form>
      <input type="text" name="title" placeholder="Add Todo..." />
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    form {
    display: flex;
    }
    input[type="text"] {
    flex: 10;
    padding: 15px;
    }
    input[type="submit"] {
    flex: 2;
    }
</style>