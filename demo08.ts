let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，小姐姐心情美美的。"
let xiaoJieJie:RegExp = /小姐姐/g
console.log(something.replace(xiaoJieJie,'小哥哥'))
