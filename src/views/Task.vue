<template>
  <div>
    <h1>さあ、プログラミングを始めてください！</h1>
    <div>
      参加はこちらから:
      <a href="https://us04web.zoom.us/j/914013185">参加する</a>
    </div>
    <div v-if="result !== 'ok'">
      <button v-if="!gachaOpened" v-on:click="openGacha">ガチャを引く！</button>
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
        <form v-on:submit="submitForm">
          <textarea placeholder="ここにコードを貼り付けてください" cols="10" rows="10" v-model="code"></textarea>
          <button>提出する</button>
        </form>
      </div>
    </div>
    <div v-if="result === 'ok'">おめでとうございます！</div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import functions from "firebase/functions";
// ローカル実行用
// firebase.functions().useFunctionsEmulator(`http://localhost:5000`);
const submitAnswer = firebase.functions().httpsCallable("submitAnswer");
export default {
  name: "Task",
  data() {
    return {
      gachaOpened: this.gachaOpened,
      result: this.result
    };
  },
  mounted() {
    this.languageName = "js";
    this.task = "sort";
    this.code = "";
    this.result = "";
  },
  methods: {
    openGacha() {
      this.gachaOpened = true;
    },
    submitForm(e) {
      e.preventDefault();
      const obj = {
        language_name: this.languageName,
        task: this.task,
        code: this.code
      };
      submitAnswer(obj)
        .then(res => res.data.result)
        .then(res => {
          this.result = res;
          if (this.result == "ng") {
            alert("残念！再提出してください。");
          }
        })
        .catch(console.error);
    }
  }
};
</script>
