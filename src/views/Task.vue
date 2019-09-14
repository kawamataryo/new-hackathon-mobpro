<template>
  <div>
    <h1>さあ、プログラミングを始めてください！</h1>
    <div>
      参加はこちらから:
      <a href="https://us04web.zoom.us/j/914013185">参加する</a>
    </div>
    <button v-on:click="openGacha">ガチャを引く！</button>
    <div v-if="gachaOpened">
      <h2>課題はこちら！</h2>
      <dl>
        <dt>言語</dt>
        <dd>JavaScript</dd>
        <dt>課題</dt>
        <dd>ソートプログラム</dd>
      </dl>
      <dl>
        <dt>入力</dt>
        <dd>
          <pre>3 2 1</pre>
        </dd>
        <dt>出力</dt>
        <dd>
          <pre>1 2 3</pre>
        </dd>
      </dl>
      <form v-on:submit="submitAnswer">
        <textarea placeholder="ここにコードを貼り付けてください" cols="10" rows="10" v-model="code"></textarea>
        <button>提出する</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

// const API_URL =
//   "https://us-central1-mobpro-2fdf0.cloudfunctions.net/submitAnswer";
const API_URL = "http://localhost:5000/mobpro-2fdf0/us-central1/submitAnswer";

export default {
  name: "Task",
  data() {
    return {
      gachaOpened: this.gachaOpened
    };
  },
  mounted() {
    this.languageName = "js";
    this.task = "sort";
    this.code = "";
  },
  methods: {
    openGacha() {
      this.gachaOpened = true;
    },
    submitAnswer(e) {
      e.preventDefault();

      const obj = {
        language_name: this.languageName,
        task: this.task,
        code: this.code
      };
      const method = "POST";
      const body = Object.keys(obj)
        .map(key => key + "=" + encodeURIComponent(obj[key]))
        .join("&");
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      };
      fetch(API_URL, { method, headers, body })
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
    }
  }
};
</script>
