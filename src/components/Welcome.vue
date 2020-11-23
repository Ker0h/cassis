<template>
  <div class="welcome">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>Cassis</h1>
          <p>
            Welcome to Cassis. A simple <code>VueJS</code> application for
            managing your favourite musical albums. This page will give a short
            overview of the application, including it's entities and the method
            of deployment.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <h3>Entities</h3>
          <ul id="entities">
            <li><a href="">Albums</a></li>
            <li><a href="">Songs</a></li>
            <li><a href="">Artists</a></li>
            <li><a href="">Genres</a></li>
            <li><a href="">Labels</a></li>
          </ul>
        </b-col>

        <b-col cols="6">
          <h3>Deployment</h3>
          <p>
            Both this application and it's underlaying
            <a href="https://cassis-api.herokuapp.com/api/" target="blank_"
              >API</a
            >
            are deployed on Heroku.<br />
            The API uses a MongoDB hosted on an Atlas server.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3, h4 {
  margin: 30px 0 0;
}
</style>
