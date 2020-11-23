<template>
  <div id="app">
    <div id="nav">
      <b-navbar
        id="navbar"
        toggleable="lg"
        style="background-color: rgb(27, 25, 52)"
        type="dark"
      >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="https://github.com/Ker0h/cassis" target="_blank">
              <b-icon-code-slash></b-icon-code-slash> Repository
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand href="#">
          <code>Yannick Willems, 2128086</code>
        </b-navbar-brand>
      </b-navbar>
    </div>

    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="12" md="3" order="12" order-md="1">
          <Sidebar title="Albums"/>
        </b-col>
        <b-col cols="12" sm="12" md="auto" order="1" order-md="12">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#navbar {
  background-color: rgb(27, 25, 52);
  border-bottom: 1px solid rgb(16, 17, 38) !important;
}
h4 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
h5 {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
