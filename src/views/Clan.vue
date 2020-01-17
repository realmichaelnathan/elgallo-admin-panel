<template>
    <div>
        <div class="hero page-title-clan">
            <v-avatar size="200">
                <v-img :src="'https://fortniteclan.com/images/' + clan.picture" />
            </v-avatar>
        </div>
        <div class="container">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">{{clan.name}}</p>
                    <div style="padding: .75rem">
                        <b-button size="is-small" type="is-info" outlined><b-icon icon="pen" size="is-small" /></b-button>
                    </div>
                </header>
                <div class="card-content">
                    <v-row>
                        <v-col>
                            <div class="overline">Clan Name</div>
                            <h1 class="mt-1 mb-4">{{clan.name}}</h1>

                            <div class="overline">Created Date</div>
                            <span class="tag is-success is-medium is-rounded">
                                {{ new Date(clan.created_at).toLocaleDateString() }}
                            </span>

                            <div class="overline">Last Bumped Date</div>
                            <span class="tag is-primary is-medium is-rounded">
                                {{ new Date(clan.bumped_at).toLocaleDateString() }}
                            </span>
                        </v-col>
                        <v-col>
                            <div class="overline">Clan Owner</div>
                                <UserPill :image="clan.owner.profilepic" :name="clan.owner.name" :id="clan.owner.id" />
                            <div class="overline">Total Votes</div>
                            <h4 class="mt-1 mb-4">{{clan.total_votes}}</h4>

                            <div class="overline">Bump Streak</div>
                            <h4 class="mt-1 mb-4">{{clan.bumps}}</h4>
                        </v-col>
                        <v-col>
                            <div class="overline">Socials</div>
                            <div class="">
                                <v-avatar size="35" class="margin x1" v-if="clan.discord" color="#7289da">
                                    <a :href="clan.discord">
                                        <v-icon size="18" dark>mdi-discord</v-icon>
                                    </a>
                                </v-avatar>
                                <v-avatar size="35" class="margin x1" v-if="clan.twitter" color="#38a1f3">
                                    <a :href="clan.twitter">
                                        <v-icon size="20" dark>mdi-twitter</v-icon>
                                    </a>
                                </v-avatar>
                                <v-avatar size="35" class="margin x1" v-if="clan.instagram" style="background: linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)">
                                    <a :href="clan.instagram">
                                        <v-icon size="21" dark>mdi-instagram</v-icon>
                                    </a>
                                </v-avatar>
                                <v-avatar size="35" class="margin x1" v-if="clan.youtube" color="#c4302b">
                                    <a :href="clan.youtube">
                                        <v-icon size="21" dark>mdi-youtube</v-icon>
                                    </a>
                                </v-avatar>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div> 
            <div v-if="clan.votes.length > 0" class="card">
                <header class="card-header">
                    <p class="card-header-title">Voters</p>
                    <div style="padding: .75rem">
                        <b-button size="is-small" type="is-info" outlined><b-icon icon="pen" size="is-small" /></b-button>
                    </div>
                </header>
                <div class="card-content">
                    <UserPill v-for="vote in clan.votes" :key="vote.id" :id="vote.voter.id" :image="vote.voter.profilepic" :name="vote.voter.name" />
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Description</p>
                    <div style="padding: .75rem">
                        <b-button size="is-small" type="is-info" outlined><b-icon icon="pen" size="is-small" /></b-button>
                    </div>
                </header>
                <div class="card-content" v-html="clan.description">
                    {{clan.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VAvatar, VImg, VRow, VCol, VIcon } from 'vuetify/lib'
import UserPill from '../components/UserPill'
export default {
    name: 'clan',
    components: { VAvatar, VImg, VRow, VCol, VIcon, UserPill },
    data() {
        return {
            clan: []
        }
    },
    created() {
        this.$axios.get(`https://api.fortniteclan.com/clan/${this.$route.params.id}?token=${this.$store.state.token}`)
        .then(response => {
            this.clan = response.data
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