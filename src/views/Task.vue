<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card class="mb-3">
          <v-card-title primary-title>
            <div>
              <div class="headline">さあ、プログラミングを始めてください！</div>
              <span>
                参加はこちらから:
                <a href="https://us04web.zoom.us/j/914013185">参加する</a>
              </span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" v-on:click="openGacha">課題ガチャを引く</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mb-3" v-if="gachaOpened">
          <v-card-title primary-title>
            <div>
              <div class="headline">課題はこちら！</div>
              <div>
                ■ 言語:
                <strong>JavaScript</strong>
              </div>
              <div>
                ■ 課題:
                <strong>ソートプログラム</strong>
              </div>
              <div>
                ■ 入力値:
                <code>3 2 1</code>
              </div>
              <div>
                ■ 出力値:
                <code>1 2 3</code>
              </div>
            </div>
          </v-card-title>
        </v-card>

        <v-card v-if="gachaOpened">
          <form v-on:submit="submitForm">
            <v-card-title primary-title>
              <div>
                <div class="headline">こちらから提出してください</div>
                <v-textarea
                  name="input-7-1"
                  label="回答"
                  hint="ここにコードを貼り付けてください"
                  placeholder="ここにコードを貼り付けてください"
                  v-model="code"
                ></v-textarea>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" v-on:click="submitForm">提出する</v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
// eslint-disable-next-line
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
          } else {
            alert("おめでとうございます！");
          }
        })
        .catch(console.error);
    }
  }
};
</script>
