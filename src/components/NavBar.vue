<template>
    <b-navbar wrapper-class="container" fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/elgallo.png" >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
               📊 Dashboard
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/clans' }">
               ⚔️ Clans
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/users' }">
               👥 Users
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a @click="logout()" class="button is-light">
                        Log Out
                    </a>
                </div>
            </b-navbar-item>
        </template>

    </b-navbar>
</template>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
  methods: {
      logout() {
          this.$store.dispatch('logout').then(() => {
              this.$router.push('/login')
          })
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
