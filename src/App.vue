<template>
  <div id="app" >
    <NavBar v-if="this.$store.state.token" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar
  },
  created() {
    if(!this.$store.state.token) {
      this.$router.push('/login')
    }
  }

}
</script>
<style lang="scss">
  body  {
    background:whitesmoke;
    height:100%;
    min-height: 100vh;
    display:flex;
    flex-direction: column
  }
  a.navbar-item {
    &:hover {
      color:#167df0 !important;
    }
  }
  #app {
    flex: 1;
  }
  span.has-text-primary {
    color: #167df0 !important;
  }
  .footer {
    padding: 3rem 1.5rem !important;
    a {
      color: whitesmoke;
      &:hover {
        color: white;
        font-weight: bold;
      }
    }
  }
  .container {
    @media (max-width: 800px) {
      margin: 0 0 !important;
    }
  }
  .page-title {
    height: 400px;
    margin-bottom: -200px;
    align-items:center !important;
    padding-top: 100px;
    background-image:  linear-gradient(#015febd5, #00a2ffda), 
    url('https://cdn.hipwallpaper.com/i/53/10/WG8TNb.jpg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size:contain;
    &.dashboard {
      padding-top: 150px;
      margin-bottom: -100px;
    }
  }
  .page-title-clan {
    height: 400px;
    margin-bottom: -80px;
    align-items:center !important;
    padding-top: 80px;
    background-image:  linear-gradient(#198822d5, #49ce54da), 
    url('https://cdn.hipwallpaper.com/i/53/10/WG8TNb.jpg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size:contain;
  }
  .search-box {
    max-width:500px;
    margin: 10px auto 40px auto;
  }
  .title {
    text-align:center;
    font-size: 4rem !important;
    color: #fff !important;
  }
  .avatar {
    width: auto;
    height: 100%;
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    border: none;
    img {
        display: block;
        position: absolute;
        bottom: -42px;
        border: 4px solid white;
    }
}
.overline {
  font-size: 0.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  line-height: 2.66;
  letter-spacing: 0.08333em;
  text-transform: uppercase;
}
.margin {
  &.x1 {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
}
.pagination-link.is-current {
  background: #167df0 !important;
}
</style>
