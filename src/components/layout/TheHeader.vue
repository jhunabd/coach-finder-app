<template>
    |<header>
        <nav>
            <h1><router-link to="/">Find a Coach</router-link></h1>
            <ul>
                <li><button>All Coaches</button></li>
                <li><button>Requests</button></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
   header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header button {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

button:active,
button:hover {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 button {
  color: white;
  margin: 0;
}

h1 button:hover,
h1 button:active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>