<template>
  <div>
    <Form/>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <div v-for="(card, index) in wantedly" :key="index">
          <v-card class="mb-5">
            <v-card-title>
              <v-layout>
                <v-flex xs3>
                  <v-img :src="`https://cdn.vuetifyjs.com/images/lists/${index + 1}.jpg`"></v-img>
                </v-flex>
                <v-flex xs8>
                  <h1 class="headline mt-0 text-xs-left">{{ card.title }}</h1>
                  <p class="body-2 text-xs-left">{{ card.name }}</p>
                  <p class="body-2 text-xs-left"> {{ card.message }} </p>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary" style="width: 100%" to="/task">start</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import {db} from "../components/App";
import Form from "../components/Form"

export default {
  name: "Wantedly",
  components: {
    Form
  },
  data: function () {
    return {
      wantedly: []
    }
  },
  firestore: {
    wantedly: db.collection('wantedly').orderBy("createdAt", "desc")
  },
}
</script>

<style scoped>

</style>
