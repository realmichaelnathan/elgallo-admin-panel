<template>
  <div>
    <div class="hero page-title">
      <h1 class="title">
        👥 Users 
      </h1>
    </div>
    <div class="container">
      <b-input rounded icon="magnify" class="search-box" v-model="search"></b-input>
      <b-table 
      :data="data"
      default-sort="['created_at', 'desc']"
      paginated
      hoverable
      striped
      :loading="loading"
      per-page="10"
      sort-icon="arrow-up"
      >
        <template slot-scope="props">
          <b-table-column field="profilepic" label="Avatar">
            <v-avatar>
              <v-img :src="'https://fortniteclan.com/images/users/' + props.row.profilepic" />
            </v-avatar>
          </b-table-column>
          <b-table-column field="name" label="Name" sortable>
              {{ props.row.name }}
          </b-table-column>
          <b-table-column field="email" label="Email" sortable>
              {{ props.row.email }}
          </b-table-column>
          <b-table-column field="email_verified_at" label="Verified" centered sortable>
              <span v-if="props.row.email_verified_at != null" class="tag is-info is-medium is-rounded">
                  {{ new Date(props.row.email_verified_at).toLocaleDateString() }}
              </span>
              <span v-else class="tag is-medium is-rounded">
                  Not Verified
              </span>
          </b-table-column>
          <b-table-column field="created_at" label="Created" sortable centered>
              <span class="tag is-success is-medium is-rounded">
                  {{ new Date(props.row.created_at).toLocaleDateString() }}
              </span>
          </b-table-column>
          <b-table-column field="" label="Actions" centered>
              <b-button type="is-info" icon-right="eye"  @click="$router.push('/user/' + props.row.id)"  />
              <b-button type="is-danger" icon-right="delete" @click="delete_user(props.row.id)" style="margin-left:5px" />
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
  name: 'users',
  components: {
    VAvatar, VImg, UserPill
  },
  data() {
    return {
      search: '',
      users: [],
      loading: true
    } 
  },
  methods: {
    delete_user(id) {
      this.users = this.users.filter(user => user.id != id)
    }
  },
  computed: {
    data() {
        if (this.search == '') {
            return this.users
        } else {
            return this.users.filter(
            item => item.name.toLowerCase().includes(this.search.toLowerCase())
          );
        }
    }
  },
  created() {
      this.$axios.get('https://api.fortniteclan.com/users?token=' + this.$store.state.token).then(response => {
        this.users = response.data.filter(user => user.name != null)
        this.loading = false
      })
      .catch(error => console.log(error))
    }
}
</script>