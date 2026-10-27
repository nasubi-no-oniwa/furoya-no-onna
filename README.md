# 風呂屋の女

巨大なヘドロのお尻からムリムリ出てくる○△■を、綱で引っぱり出せ！ 長押しの力加減ひとつで勝負する3Dブラウザゲーム（three.js）。

- 遊ぶ：https://nasubi-no-oniwa.github.io/furoya-no-onna/
- 操作：画面を長押しで引く（離すとゆるむ）。パソコンはスペースキーかクリック
- 管理画面：admin.html（ランキングのあやしい記録の検算・隠す）

## ファイル
- index.html：ゲーム本体
- config.js：Firebase の apiKey と databaseURL
- admin.html：管理画面
- titles.js：称号の言葉
- database.rules.json：Firebase Realtime Database のルール（GitHub に上げると自動で反映）
- firebase.json / .firebaserc / .github/workflows/firebase-rules.yml：ルールの自動反映の設定

## 遊び方のしくみ
- ■は強く、○はふつう、△はやさしく引く。大きさの合計（cm）でランキング
- 力加減は穴からの出かただけで判断（なめらかに出る＝ちょうど／吸いこまれる＝弱い／穴が伸びてガタガタ＝強い）
- 綱を引くのは顔なしのデッサン人形。強すぎると腕がゴムのように伸びる
- 穴のまわりの輪が危険度（赤＝強すぎ、青＝弱すぎ、満タンで失敗）。失敗後は最後の5秒の力をグラフで表示
- 称号は titles.js（冠25×くせ20×本体20＝1万通り＋レア称号）。ランキングには称号コード ti を保存
- ランキングは furo3 に保存（furo・furo2 は古い版の記録を残しているだけ）

## 素材
- 絵・BGM・効果音：ゲーム内で自作（プログラムで描画）
