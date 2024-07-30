<template>
  <div class="dashboard-page">
    <div class="container">
      <nav class="menu">
        <h2>Admin</h2>
        <ul>
          <li><a href="#">Users</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </nav>
      <main class="content">
        <h1>Users Management</h1>
        <p>user</p>
      </main>
    </div>
    <ul>
      <!-- <li v-for="(el, indx) in products" :key="indx">{{ el.id }} - {{ el.title }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
    name: "DashboardPage"
}
</script>