<template>
  <div>
    <!--フォームの表示ボタン-->
    <v-btn
        class="mt-5"
        color="blue"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <v-icon>comment</v-icon>
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>募集を立てる</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputName"
                label="名前"
            ></v-text-field>
            <v-text-field
                v-model="inputTitle"
                label="タイトル"
            ></v-text-field>
            <v-text-field
                v-model="inputMessage"
                label="メッセージ"
            ></v-text-field>
            <v-btn
                block
                color="primary"
                @click="addComment"
            >
              投稿する
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "./App";

export default {
  data: () => ({
    // form入力データ
    inputMessage: "",
    inputTitle: "",
    inputName: "",
    // バリデーション
    valid: true,
    displayForm: false,
  }),
  methods: {
    // コメント追加
    addComment() {
      const now = new Date()
      // コメントをFirestoreへ登録
      db.collection('wantedly').add({
        message: this.inputMessage,
        title: this.inputTitle,
        name: this.inputName,
        createdAt: now
      });
      // ダイアログを閉じる
      this.hideCreateForm()
    },
    // Formの初期化
    clear() {
      this.$refs.form.reset()
    },
    // Formダイアログの表示
    showCreateForm() {
      this.displayForm = true
    },
    //
    // Formダイアログの非表示
    hideCreateForm() {
      this.clear()
      this.displayForm = false
    },
  },
}
</script>
