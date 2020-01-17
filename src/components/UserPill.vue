<template>
     <v-chip pill @click="$router.push(`/user/${id}`)" class="userpill">
        <v-avatar style="margin-left: -12px; margin-right: 8px;">
            <v-img :src="'https://fortniteclan.com/images/users/' + image" />
        </v-avatar>
        <span>{{ name }}</span>
    </v-chip>
</template>


<script>
import { VChip, VAvatar, VImg } from 'vuetify/lib'

export default {
    name: 'UserPill',
    props: ['name','image', 'id'],
    components: {
    VChip, VAvatar, VImg
  }
}
</script>


<style lang="scss">
    .userpill {
        margin: 0 5px 5px 0;
    }
</style>