var storyContent = ﻿{"inkVersion":20,"root":[["^2013年的某天，你下班搭乘着末班电车，想要返回家中好好休息，疲劳的身体拖拽着你的意识沉入了梦境之中。","\n",{"->":"london"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"london":[["^不知睡了多，你的意识从一片混沌中醒来，你环顾四周发现车厢里除了自己没有其他的乘客，电车还在继续的奔走，窗外没有任何的街灯或是照明，有如在漆黑的隧道中一般。你发现自己所在的车厢门扉上，贴着一张便签，便签上写着","\n","^「只管前进吧 已经没有退路了」","\n",["ev",{"^->":"london.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^翻过便签看看",{"->":"$r","var":true},null]}],"ev","str","^收起便签","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"london.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"astonished"},{"#f":5}],"c-1":["^ ",{"->":"nod"},"\n",{"#f":5}]}],{"#f":1}],"astonished":[["^便签背后写着「第三个箱子里有藏着钥匙」","\n","^同时你看到旁边有写着电车的示意地图，发现7号车厢以后的地方被人蓄意涂掉，同时自己处在6号车厢","\n",["ev",{"^->":"astonished.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^前往7号车厢",{"->":"$r","var":true},null]}],"ev","str","^前往5号车厢","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"astonished.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"compartment7"},{"#f":5}],"c-1":["^ ",{"->":"compartment5"},"\n",{"#f":5}]}],{"#f":1}],"nod":[["^你看到旁边有写着电车的示意地图，发现7号车厢以后的地方被人蓄意涂掉，同时自己处在6号车厢","\n",["ev",{"^->":"nod.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^前往7号车厢",{"->":"$r","var":true},null]}],"ev","str","^前往5号车厢","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"nod.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"compartment7"},{"#f":5}],"c-1":["^ ",{"->":"compartment5"},"\n",{"#f":5}]}],{"#f":1}],"compartment5":[["^你来到了5号车厢，这辆车厢同样也没有任何任何一个人，你仔细的环视四周，发现一个座位上放着一份报纸","\n",["ev",{"^->":"compartment5.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^阅读报纸",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"compartment5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"reading"},{"->":"ending"},{"#f":5}]}],{"#f":1}],"compartment5_1":[["^你气喘吁吁的冲到了5号车厢，那恐怖的宛若地狱的场景让你再也不敢回到后面的车厢，你安定下来后，仔细的环视四周，发现一个座位上放着一份报纸","\n",["ev",{"^->":"compartment5_1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^阅读报纸",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"compartment5_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"reading"},{"#f":5}]}],{"#f":1}],"compartment7":[["^在7号车厢的门前，你闻到了一股浓厚的血腥味","\n",["ev",{"^->":"compartment7.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^坚持前往7号车厢",{"->":"$r","var":true},null]}],"ev","str","^直接折返前往5号车厢","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"compartment7.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"compartment7_1"},{"#f":5}],"c-1":["^ ",{"->":"compartment5"},"\n",{"#f":5}]}],{"#f":1}],"compartment7_1":["^被撕裂的人类肢体散落一地,车辆深处有着巨大类似嘴巴的东西正在啃蚀车厢，并且不断地朝着前方挪动着，一股恶臭从那大嘴种不断涌出，离你越来越近，恐惧不断侵蚀着你的意志，你立刻不管不顾朝着前面的车厢跑去","\n",{"->":"compartment5_1"},{"#f":1}],"reading":["^昨晚xx线电车的末班车遭遇了大规模的恐怖事件，该事件还未被确认为是否是恐怖分子所为：由于幸存的乘客们精神都变得极度异常被全部送往了精神病院，导致本案件疑点重重，警方的调查难以进行。","\n","^你惊讶的发现这份报纸的时间是这张报纸的日期是第二天的，报纸上的报道就是你现在所在的列车","\n",{"->":"ending"},{"#f":1}],"ending":[{"#":"CLASS: end"},"end",{"#f":1}],"#f":1}],"listDefs":{}};