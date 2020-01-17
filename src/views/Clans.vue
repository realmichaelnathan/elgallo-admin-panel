<template>
  <div>
    <div class="hero page-title">
      <h1 class="title">
        ⚔️ Clans 
      </h1>
    </div>
    <div class="container">
      <b-input rounded icon="magnify" class="search-box" v-model="search"></b-input>
      <b-table 
      :data="data"
      default-sort="['created_at', 'desc']"
      paginated
      hoverable
      :loading="loading"
      striped
      per-page="10"
      sort-icon="arrow-up"
      >
        <template slot-scope="props">
          <b-table-column field="picture" label="Logo">
            <v-avatar>
              <v-img :src="'https://fortniteclan.com/images/' + props.row.picture" />
            </v-avatar>
          </b-table-column>
          <b-table-column field="name" label="Name" sortable>
              {{ props.row.name }}
          </b-table-column>
          <b-table-column field="owner.name" label="Owner">
            <UserPill v-if="props.row.owner" :image="props.row.owner.profilepic" :name="props.row.owner.name" :id="props.row.owner.id" />
            <span v-else class="tag is-medium is-rounded">No Owner</span>  
          </b-table-column>
          <b-table-column field="votes_count" label="Votes" sortable numeric>
              {{ props.row.votes_count }}
          </b-table-column>
          <b-table-column field="bumps" label="Bumps" sortable numeric>
              {{ props.row.bumps }}
          </b-table-column>
          <b-table-column field="created_at" label="Created" sortable centered>
              <span class="tag is-success is-medium is-rounded">
                  {{ new Date(props.row.created_at).toLocaleDateString() }}
              </span>
          </b-table-column>
          <b-table-column field="" label="Actions" centered>
            <div>
              <b-button type="is-info" icon-right="eye"  @click="$router.push('/clan/' + props.row.id)"  />
              <b-button type="is-danger" icon-right="delete" @click="delete_clan(props.row.id)" style="margin-left:5px" />
            </div>
          </b-table-column> 
        </template>
      </b-table>

    </div>
  </div>
</template>

<script>
import { VAvatar, VImg } from 'vuetify/lib'
import UserPill from '../components/UserPill'

export default {
  name: 'clans',
  components: {
    VAvatar, VImg, UserPill
  },
  data() {
    return {
      search: '',
      clans: [],
      loading: true
    }
  },
  methods: {
    delete_clan(id) {
      this.clans = this.clans.filter(clan => clan.id != id)
    }
  }, 
  computed: {
    data() {
      if (this.search == '') {
        return this.clans
      } else {
        return this.clans.filter(
            item => item.name.toLowerCase().includes(this.search.toLowerCase())
          );

      }
    }
  },
  created() {
      this.$axios.get('https://api.fortniteclan.com/clans?token=' + this.$store.state.token).then(response => {
        this.clans = response.data.filter(clan => clan.owner != null)
        this.loading = false
      })
      .catch(error => console.log(error))
    }
}
</script>