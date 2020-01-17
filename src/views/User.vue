<template>
    <div>
        <div class="hero page-title-clan">
            <v-avatar size="200">
                <v-img :src="'https://fortniteclan.com/images/users/' + user.profilepic" />
            </v-avatar>
        </div>
        <div class="container">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">{{user.name}}</p>
                    <div style="padding: .75rem">
                        <b-button size="is-small" type="is-info" outlined><b-icon icon="pen" size="is-small" /></b-button>
                    </div>
                </header>
                <div class="card-content">
                <v-row>
                    <v-col>
                    
                        <div class="overline">User Name</div>
                        <h1 class="mt-1 mb-4">{{user.name}}</h1>

                        <div class="overline">Created Date</div>
                        <span class="tag is-success is-medium is-rounded">
                            {{ new Date(user.created_at).toLocaleDateString() }}
                        </span>

                    </v-col>
                    <v-col>

                            <div class="overline">Email</div>
                            <h4 class="mt-1 mb-4">{{user.email}}</h4>   
                            <div class="overline">Email Verified At</div>
                            <span v-if="user.email_verified_at" class="tag is-info is-medium is-rounded">
                                {{ new Date(user.email_verified_at).toLocaleDateString() }}
                            </span>
                            <span v-else class="tag is-medium is-rounded">
                                Not Verified
                            </span>

                    </v-col>
                    <v-col>
                        <div class="overline">Clan</div>
                        <ClanPill v-if="user.clan" :image="user.clan.picture" :id="user.clan.id" :name="user.clan.name" />  
                        <v-chip v-else>No Clan</v-chip>
                        <div class="overline">Socials</div>
                        <div class="">
                            <v-avatar size="35" class="margin x1" v-if="user.discord" color="#7289da">
                                <a :href="user.discord">
                                    <v-icon size="18" dark>mdi-discord</v-icon>
                                </a>
                            </v-avatar>
                            <v-avatar size="35" class="margin x1" v-if="user.twitter" color="#38a1f3">
                                <a :href="user.twitter">
                                    <v-icon size="20" dark>mdi-twitter</v-icon>
                                </a>
                            </v-avatar>
                            <v-avatar size="35" class="margin x1" v-if="user.instagram" style="background: linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)">
                                <a :href="user.instagram">
                                    <v-icon size="21" dark>mdi-instagram</v-icon>
                                </a>
                            </v-avatar>
                            <v-avatar size="35" class="margin x1" v-if="user.youtube" color="#c4302b">
                                <a :href="user.youtube">
                                    <v-icon size="21" dark>mdi-youtube</v-icon>
                                </a>
                            </v-avatar>
                        </div>
                    </v-col>
                    
                </v-row>
                </div>
            </div> 
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">About Me</p>
                    <div style="padding: .75rem">
                        <b-button size="is-small" type="is-info" outlined><b-icon icon="pen" size="is-small" /></b-button>
                    </div>
                </header>
                <div class="card-content">
                    {{user.aboutme}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VAvatar, VImg, VRow, VCol, VIcon, VChip } from 'vuetify/lib'
import ClanPill from '../components/ClanPill'
export default {
    name: 'user',
    components: { VAvatar, VImg, VRow, VCol, VIcon, VChip, ClanPill },
    data() {
        return {
            user: []
        }
    },
    created() {
        this.$axios.get(`https://api.fortniteclan.com/user/${this.$route.params.id}?token=${this.$store.state.token}`)
        .then(response => {
            this.user = response.data
        })
        .catch(error => console.log(error))
    }
}
</script>

<style lang="scss">
    .card-content {
        padding: 0.5rem 1.5rem !important;
    }
    .card {
        margin-bottom: 10px;
    }
</style>