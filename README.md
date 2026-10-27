# 風呂屋の女

くさい客にからまったガラクタを、綱で引っぱり出せ！ 長押しの力加減ひとつで勝負するブラウザゲーム。

- 遊ぶ：https://nasubi-no-oniwa.github.io/furoya-no-onna/
- 操作：画面を長押しで引く（離すとゆるむ）。パソコンはスペースキーかクリック
- 管理画面：admin.html（ランキングのあやしい記録の検算・隠す）

## ファイル
- index.html：ゲーム本体
- config.js：Firebase の apiKey と databaseURL
- admin.html：管理画面
- database.rules.json：Firebase Realtime Database のルール（GitHub に上げると自動で反映）
- firebase.json / .firebaserc / .github/workflows/firebase-rules.yml：ルールの自動反映の設定
- assets/：絵（ChatGPT で作成）

## 絵の差しかえ
assets/ に次の名前で置くと自動で使われます（無いときは仮の絵）。
- onna_normal.webp / onna_strong.webp / onna_gentle.webp：湯屋の女（ふつう・もっと強く・やさしく）
- guest.webp：くさい客　bg.jpg：背景

## 綱を引く人
わざと3Dのデッサン人形ふうの棒人間（プログラムで描画、顔なし）。力むほどのけぞり、強すぎると腕がゴムのように伸びる。

## 素材
- 絵：ChatGPT で作成
- BGM・効果音：ゲーム内で自作
