// //練習一：

// 今天台北市長參選人為柯文哲，丁守中，姚文智

// 1.請用程式碼加入一個新的參選人

// 2.列出現在有幾位參選人

// 3.每個候選人分別說出：「你好，我是ＸＸＸ，請投給我！」

// 從以下程式碼開始

// let candidate = ["柯文哲","丁守中","姚文智"]
// 在終端機中顯示===>

// 現在參選人有4位，請他們發言：）
// 你好，我是柯文哲，請投給我！
// 你好，我是丁守中，請投給我！
// 你好，我是姚文智，請投給我！
// 你好，我是KAI，請投給我！

let candidate = ["柯文哲","丁守中","姚文智"]
candidate.push('Kai')
for(i=0;i<4;i++){
console.log('你好，我是',candidate[i],'，請投給我！')
}

// 練習二：開獎練習

// 1.利用random隨機產生一組數字

// 2.利用if else來判斷<0.2就顯示中獎，其餘顯示沒中獎(中獎機率20%)。

// 3-1.利用setInterval，每5秒開一次獎。（最終要完成的）

// 3-2.利用for迴圈連續開三次。（最終要完成的）

function lottery(){
//1
let rdmNum = Math.random()
// console.log(rdmNum)
//2
if(rdmNum<0.2){
    console.log('中獎')
}else{
    console.log('沒中獎')
}
//lottery()
}
//3-1
setInterval(function(){lottery()},5000)
//3-2
for(i=0;i<3;i++){
    lottery()
}