# mery-jq
テキストエディタ「Mery」でjqを適用可能にするマクロ

# usage

- 1. JSONを選んでマクロを起動

<img src="./images/usage1.png" alt="テキスト中のJSONを選択した状態でマクロを起動" width=350>

- 2. フィルタを書くと

<img src="./images/usage2.png" alt="「jqで選択範囲を整形」のプロンプトにjqのfilterを指定" width=350>

- 3. 置き換わる！

<img src="./images/usage3.png" alt="expressionにしたがって選択範囲のJSONが変換され、その結果で置換される" width=350>

# requirements

- Mery 2
    - 3系では動作しませんでした
- jq
    - あらかじめインストールする必要があります
