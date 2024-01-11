<template>
  <header class="header">
    <nav class="navbar">
      <a href="/" class="navbar-brand">KHS Comp Ex page</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
        <li class="nav-item">
          <a href="/contact" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: #005590;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 20px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-weight: bold;
  color: #fff;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}
</style>
