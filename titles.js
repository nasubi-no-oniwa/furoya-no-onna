// 称号（冠25 × くせ20 × 本体20 = 10,000通り ＋ レア称号）
// 決め方は index.html の makeTitle()
window.FURO_TITLES={
ja:{
  pre:{
    box:['ちょっと固めの','■寄りの','カチカチ好きの','■ひとすじの','四角い便意の','ガチガチ肛門の'],
    ball:['ころころ気味の','○寄りの','まんまる好きの','○ひとすじの','玉コロ製造機の','まんまるウンチの'],
    cone:['ちょいとがりの','△寄りの','とんがり好きの','△ひとすじの','三角しか出ない','トゲトゲ便の'],
    mix:['まんべんなく出す','ごちゃまぜの','日替わり便の','気まぐれ肛門の','三拍子そろった','なんでも出す','バランス便の']
  },
  mid:{
    snap:['小粒なのにいきむ','ちょいちょいいきむ','いきみ癖のある','毎回いきむ','ふんばり自慢の','顔真っ赤の','血管浮き出る','力こそすべての','渾身の一撃をかます','いきんで天に召された'],
    slip:['ゆるゆるの','ふにゃふにゃの','腰が引けた','やさしすぎる','手ぬるい','気がぬけた','おしりに負けた','あと一歩ふんばれない','大物を逃した','最後にすっぽ抜けた']
  },
  body:['便秘気味','おなら係','見習い湯女','ちり紙係','下働き','ぬちゃぬちゃ番台','ムリムリ職人','ブリブリ番頭','湯屋の便利屋','肛門ソムリエ','大便職人','便意の達人','若女将','ウンチ奉行','女将','大女将','お尻の守り神','便聖','ウンコ将軍','伝説の大便女'],
  rare:{
    r0:'何も出なかった便秘界の新星',
    r1:'キリ番でひねり出す几帳面うんこ',
    r2:'■しか出さないカクカク工場長',
    r3:'○だけを産み続けるまんまる母さん',
    r4:'△に愛されしトゲトゲ肛門',
    r5:'○△■を等しく出す三位一体の尻',
    r6:'電柱級をひねり出した伝説の尻'
  }
},
zh:{
  pre:{
    box:['有點硬的','偏■的','愛硬梆梆的','■一筋的','方形便意的','鋼鐵肛門的'],
    ball:['有點圓滾的','偏○的','愛圓圓的','○一筋的','彈珠製造機的','圓滾滾大便的'],
    cone:['有點尖的','偏△的','愛尖尖的','△一筋的','只會出三角的','刺刺便的'],
    mix:['平均出貨的','亂七八糟的','每日特餐便的','任性肛門的','三拍子齊全的','什麼都出的','均衡便的']
  },
  mid:{
    snap:['小顆卻很用力的','偶爾用力的','習慣用力的','每次都用力的','以使勁自豪的','滿臉通紅的','青筋暴露的','力量至上的','使出渾身一擊的','用力到升天的'],
    slip:['鬆鬆垮垮的','軟趴趴的','腰軟腿軟的','太溫柔的','手下留情的','心不在焉的','輸給屁股的','差一點撐不住的','讓大條溜走的','最後滑脫的']
  },
  body:['便秘中','放屁係','見習湯女','衛生紙係','雜工','黏答答櫃台','擠擠職人','噗噗掌櫃','湯屋萬事通','肛門品鑑師','大便職人','便意達人','少老闆娘','大便奉行','老闆娘','大老闆娘','屁股守護神','便聖','大便將軍','傳說的大便女'],
  rare:{
    r0:'什麼都沒出的便秘界新星',
    r1:'整數才肯出的龜毛大便',
    r2:'只出■的方塊廠長',
    r3:'不停產下○的圓圓媽媽',
    r4:'受△寵愛的刺刺肛門',
    r5:'○△■平均出的三位一體臀',
    r6:'擠出電線桿級的傳說之臀'
  }
},
ko:{
  pre:{
    box:['살짝 단단한','■ 쪽인','딱딱한 걸 좋아하는','■ 외길의','네모난 변의','강철 항문의'],
    ball:['살짝 동글한','○ 쪽인','동글이를 좋아하는','○ 외길의','구슬 제조기의','동글동글 응가의'],
    cone:['살짝 뾰족한','△ 쪽인','뾰족이를 좋아하는','△ 외길의','세모만 나오는','가시가시 똥의'],
    mix:['골고루 내보내는','뒤죽박죽','오늘의 특선 똥의','변덕쟁이 항문의','삼박자를 갖춘','뭐든 내보내는','균형 잡힌 똥의']
  },
  mid:{
    snap:['작은데도 힘주는','가끔 힘주는','힘주는 버릇이 있는','매번 힘주는','버티기가 자랑인','얼굴이 새빨간','핏대가 선','힘이 전부인','혼신의 일격을 날리는','힘주다 승천한'],
    slip:['헐렁헐렁한','흐물흐물한','엉거주춤한','너무 다정한','손이 무른','정신이 팔린','엉덩이에게 진','한 끗이 모자란','대물을 놓친','마지막에 빠뜨린']
  },
  body:['변비 기미','방귀 담당','견습 목욕탕 아가씨','휴지 담당','허드레꾼','질척질척 카운터','끙끙 장인','뿡뿡 지배인','목욕탕 해결사','항문 소믈리에','대변 장인','변의의 달인','젊은 여주인','응가 봉행','여주인','큰 여주인','엉덩이 수호신','변성','응가 장군','전설의 대변녀'],
  rare:{
    r0:'아무것도 안 나온 변비계의 신성',
    r1:'딱 떨어지는 숫자로만 내보내는 꼼꼼 응가',
    r2:'■만 내보내는 네모 공장장',
    r3:'○만 계속 낳는 동글 엄마',
    r4:'△에게 사랑받는 가시 항문',
    r5:'○△■를 고루 내보내는 삼위일체 엉덩이',
    r6:'전봇대급을 짜낸 전설의 엉덩이'
  }
},
en:{
  pre:{
    box:['Slightly Firm','Cube-Leaning','Rock-Hard Loving','Cube-Devoted','Square-Pooping','Concrete-Cheeked'],
    ball:['Roly-Poly','Ball-Leaning','Round-Loving','Ball-Devoted','Marble-Factory','Perfectly Round Poo'],
    cone:['Slightly Pointy','Cone-Leaning','Pointy-Loving','Cone-Devoted','Triangle-Only','Spiky-Poo'],
    mix:['Evenly Pushing','Jumbled','Daily-Special','Moody-Bottomed','Triple-Threat','Anything-Goes','Balanced-Diet']
  },
  mid:{
    snap:['Tiny-But-Straining','Occasionally Straining','Habitually Straining','Always Straining','Proudly Pushing','Red-Faced','Vein-Popping','Brute-Force','All-Or-Nothing','Strained-To-Heaven'],
    slip:['Loose','Floppy','Half-Hearted','Too-Gentle','Limp-Wristed','Distracted','Butt-Beaten','Almost-There','Let-The-Big-One-Go','Slipped-At-The-End']
  },
  body:['Constipated One','Fart Attendant','Bath Trainee','Tissue Holder','Errand Runner','Squishy Clerk','Squeeze Artisan','Plop Manager','Bathhouse Handyman','Butt Sommelier','Poop Craftsman','Master of Urges','Young Proprietress','Poop Magistrate','Proprietress','Grand Proprietress','Guardian of Butts','Holy Pooper','Poop General','Legendary Dumpstress'],
  rare:{
    r0:'Rising Star of Constipation',
    r1:'Round-Number Neat Freak Pooper',
    r2:'Cube-Only Factory Boss',
    r3:'Mother of Endless Balls',
    r4:'Beloved of the Spiky Cone',
    r5:'Holy Trinity Butt',
    r6:'Legendary Butt Who Birthed a Pole'
  }
}
};
