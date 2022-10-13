// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们的宝贝",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "周周周周周子业",  // 同上...
        "今天你生日，送上我祝福",

        "特别的日子有灿烂的笑容",
        
        
        
        "带着满满的关爱，祝福你好运常伴",
       
        "点燃了蜡烛，许下你心愿",
        
        "未来的日子每个梦想都实现",
       
        "唱首祝福歌",

        "祝福你健康平安",
        "对所有的烦恼说 bye bye",
        "对所有的快乐说 hi hi",
        "亲爱的亲爱的生日快乐",
        
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我们的宝贝":"./imgs/zzy2.jpg",
        "周周周周周子业":"./imgs/zzy.jpg",
        "今天你生日，送上我祝福":"./imgs/szf1.jpg",

        "特别的日子有灿烂的笑容":"./imgs/hy2.jpg",
        
        
        
        "带着满满的关爱，祝福你好运常伴":"./imgs/zzy2.jpg",
       
        "点燃了蜡烛，许下你心愿":"./imgs/cake.png",
        
        "未来的日子每个梦想都实现":"./imgs/wt1.jpg",
       
        "唱首祝福歌":"./imgs/wt2.jpg",

        "祝福你健康平安":"./imgs/zzy.jpg",
        "对所有的烦恼说 bye bye":"./imgs/eg2.jpg",
        "对所有的快乐说 hi hi":"./imgs/eg.jpg",
        "亲爱的亲爱的生日快乐":"./imgs/szf2.jpg",

       
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "快上车！",
        play: "音乐",
        bannar_coming: "芜湖！",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "OUR MEMORY FOR YOU",
    }
};
