<template>
  <div>
    <section>
      <v-parallax :src="topimage.src" height="600">
        <v-layout column align-center justify-center class="white--text">
          <img :src="logo1.src" alt="Vuetify.js" height="200" class="mb-2" />
          <h1 class="white--text mb-2 display-1 text-center">モブプラ</h1>
          <div class="subheading mb-4 text-center">by もぶぷろん</div>
          <v-btn class="mt-12" color="blue lighten-2" dark large href="/signin">Get Started</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center justify-center">
            <h2 class="headline">あなたのプログラミングの技術向上させます</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="layout justify-center text-center">
                    <v-icon x-large class="blue--text text--lighten-2">group</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">仲間が見つかる</div>
                  </v-card-title>
                  <v-card-text>モブプロがやりたい！！ そんな同じような向上心をもったエンジニアが見つかる！！</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="layout justify-center text-center">
                    <v-icon x-large class="blue--text text--lighten-2">thumb_up_alt</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">スキルが付く</div>
                  </v-card-title>
                  <v-card-text>みんなの気付きから学習できる！ みるみるうちにスキルが付いてくる！</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="layout justify-center text-center">
                    <v-icon x-large class="blue--text text--lighten-2">emoji_emotions</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">みんなで成長</div>
                  </v-card-title>
                  <v-card-text>ドライバー、ナビゲーターは自動で振り分け！技術と経験で最適化される！</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="topimage.src" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">モブプロで成長できる最短の道</div>
          <em>さあ、仲間をみつけよう！</em>
          <v-btn class="mt-12" color="blue lighten-2" dark large href="/signin">はじめる</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">モブプロとは</div>
              </v-card-title>
              <v-card-text
                class="layout justify-center text-center"
              >Mobプログラミングは、チーム全体が同じこと、同じ時間、同じスペース、同じコンピューターで作業するソフトウェア開発アプローチです。これは、2人が同じコンピューターに座って同時に同じコードで共同作業するペアプログラミングに似ています。</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      topimage: {
        src: require("@/assets/slide3.jpg")
      },
      groupimage: {
        src: require("@/assets/group.png")
      },
      middleimage: {
        src: require("@/assets/slide2.jpg")
      },
      logo1: {
        src: require("@/assets/logo1.png")
      }
    };
  }
};
</script>
