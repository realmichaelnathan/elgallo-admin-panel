<template>
    <div class="has-background-light login-container">
        <section class="box">
            <img class="logo" src="../assets/elgallo.png" />
            <b-field label="Email" >
                <b-input v-model="email" icon="email" type="email" rounded>
                </b-input>
            </b-field>
            <b-field label="Password">
                <b-input password-reveal v-model="password"  icon="lock" type="password" rounded>
                </b-input>
            </b-field>
            <b-button @click="login()" type="is-info" rounded>Login</b-button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
           this.$axios.post('https://api.fortniteclan.com/auth/login', {email: this.email, password: this.password})
            .then(response => {
                this.$store.dispatch('login', response.data)
                this.$router.push('/')
            })
            .catch(error => {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Login Failed`,
                    type: 'is-danger'
                })
            })
        }
    }
    
}
</script>

<style lang="scss">
    .login-container {
        height: 100vh;
        width: 100%;
        display:flex;
        justify-content: center;
        align-items:center;
        position:absolute;
        top:0;
        background-image:  linear-gradient(#015febd5, #00a2ffda), 
        url('https://cdn.hipwallpaper.com/i/53/10/WG8TNb.jpg');
        background-position: top right;
        background-repeat: no-repeat;
        background-size:contain;
    }
    .logo {
        height: 100px;
        width: auto;
        @media (max-width: 700px) {
            height: 70px;
        }
    }
    .box {
        padding: 1.25rem 2.5rem !important;
    }
</style>