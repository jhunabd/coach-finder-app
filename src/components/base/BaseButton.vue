<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

button:hover,
button:active {
  background-color: #edd2ff;
  border-color: #edd2ff;
}
</style>