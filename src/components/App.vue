<template>
  <v-app>
    <v-navigation-drawer fixed clipped app v-model="navBar">
      <v-list dense class="pt-0">
        <router-link to="/" v-if="!logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>トップ</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Signin" v-if="!logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>サインイン</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/wantedly" v-if="logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>募集一覧</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Signout" v-if="logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>サインアウト</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="updateNaviBar"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>モブプラ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view v-if="loaded" />
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/messaging"

import firebaseConfig from '@/firebase/firebase';

import store from '@/store/index.js';

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default {
  name: 'App',
  data () {
    return {
      navBar: false,
    }
  },
  created() {

    // for messaging
    if (firebase.messaging.isSupported() && firebaseConfig.messageKey) {
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey(firebaseConfig.messageKey);

      // Request Permission of Notifications
      messaging.requestPermission().then(() => {
        console.log('Notification permission granted.');

        // Get Token
        messaging.getToken().then((token) => {
          console.log(token)
        })
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    store.dispatch('setUser', { })
  },
  computed: {
    logined() {
      return !!this.$store.getters.getUser;
    },
    loaded() {
      return !this.$store.getters.getUserLoading;
    },
  },
  methods: {
    updateNaviBar: function() {
      this.navBar =  !this.navBar;
    },
  },
}
</script>

<style>
  p {
  margin-bottom: 2px;
  }
</style>
