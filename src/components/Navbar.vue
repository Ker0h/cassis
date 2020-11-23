<template>
  <div id="app">
    <div id="nav">
      <b-navbar id="navbar" toggleable="lg" style="background-color: rgb(27, 25, 52);" type="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="https://github.com/Ker0h" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand href="#">
          <code>Cassis</code>
        </b-navbar-brand>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
#logo {
  padding: 0 20px;
}
#main-nav {
  padding-left: 40%;
}
.nav-wrapper {
  grid-area: navbar;
}
</style>
