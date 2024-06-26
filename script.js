let _controls = [
    { id: 'intro', bgColor: '#ffffff66', dollInCard: true, dollInPhoto: false, showBg: false },
    { id: 'photo', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: true, showBg: false },
    { id: 'map', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false },
    { id: 'seat', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false },
    { id: 'ig', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: true },
    { id: 'help', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false }
];

let _seats = [
    { id: 'seat0', top: 12, left: 50 },
    { id: 'seat1', top: 16, left: 85 },
    { id: 'seat2', top: 28, left: 65 },
    { id: 'seat3', top: 26, left: 85 },
    { id: 'seat4', top: 43, left: 65 },
    { id: 'seat5', top: 43, left: 85 },
    { id: 'seat6', top: 55, left: 65 },
    { id: 'seat7', top: 55, left: 85 },
    { id: 'seat8', top: 6, left: 12 },
    { id: 'seat9', top: 18, left: 12 },
    { id: 'seat10', top: 18, left: 32 },
    { id: 'seat11', top: 29, left: 12 },
    { id: 'seat12', top: 29, left: 32 },
    { id: 'seat13', top: 44, left: 12 },
    { id: 'seat14', top: 44, left: 32 },
    { id: 'seat15', top: 66, left: 16 },
    { id: 'seat16', top: 66, left: 34 },
    { id: 'seat17', top: 66, left: 52 },
    { id: 'seat18', top: 66, left: 70 },
    { id: 'seat19', top: 66, left: 88 }
];

let _seatmap = [
    {
        groupname: '主桌',
        num: 0,
        member: [
            '新郎爸媽',
            '新郎舅舅舅媽',
            '新娘爸媽',
            '新娘舅舅舅媽',
            '新娘大叔叔(王朝君)',
            '新娘姨婆'
        ]
    },
    {
        groupname: '新郎親戚',
        num: 1,
        member: [
            '新郎哥哥一家',
            '小瑜',
            '昭瑩一家',
            '許書萍'
        ]
    },
    {
        groupname: '小腳丫1',
        num: 2,
        member: [
            '龍頭',
            '阿比',
            '智睿一家',
            'V帥',
            '小歐',
            'Amy',
        ]
    },
    {
        groupname: '彰友會',
        num: 3,
        member: [
            '王琪',
            'Peggy一家',
            '予佩',
            '小毛夫婦',
            '佳良',
            '秋嬑',
            '岱洋'
        ]
    },
    {
        groupname: '小腳丫2',
        num: 4,
        member: [
            '鈺涵',
            '小凰',
            '米森',
            '阿德',
            '阿原',
            '哲明',
            'Mike',
            '費歐',
            '欣怡',
            '瓜瓜'
        ]
    },
    {
        groupname: '同事&朋友',
        num: 5,
        member: [
            '林源祥',
            '賴泓俊',
            '吳世民',
            '徐易成',
            '陳勇杕',
            '均怡',
            '惠美一家人'
        ]
    },
    {
        groupname: '小腳丫3&山友',
        num: 6,
        member: [
            '楊浩',
            '李珩',
            '祥儀',
            '奶奶',
            '婉君',
            '鈉鎂',
            '家秀',
            '寶哥',
            '五香',
            '梅振群'
        ]
    },
    {
        groupname: '益群與閨密',
        num: 7,
        member: [
            'Frankie',
            'Ben',
            'Steven H.', 
            'Ligo', 
            'Abbey', 
            '假問一家', 
            '祥徵', 
            '涵文', 
            '鄭杰明'
        ]
    },
    {
        groupname: '新娘親戚-王家2',
        num: 8,
        member: [
            '惠珠小姑姑一家', 
            '徐同權一家', 
            '王姿云一家', 
            '邱宏源', 
            '葉斯松'
        ]
    },
    {
        groupname: '新娘親戚-朱家3',
        num: 9,
        member: [
            '桂美大阿姨一家', 
            '雅慧姐姐',
            '梓傑一家',
            '呂碧瑄',
            '呂碧璟',
        ]
    },
    {
        groupname: '新娘親戚-王家1',
        num: 10,
        member: [
            '朝正小叔叔一家', 
            '麗玲大姑媽', 
            '俊博', 
            '丁秀雲一家', 
            '丁鴻儒一家'
        ]
    },
    {
        groupname: '新娘親戚-朱家2',
        num: 11,
        member: [
            '錦雯阿姨一家',
            '崔婷一家',
            '崔茜茜一家',
            '傅金娟',
            '楊振宇'
        ]
    },
    {
        groupname: '新娘親戚-朱家1',
        num: 12,
        member: [
            '王韋勝哥哥一家', 
            '朱禹一家',
            '朱芸萱',
            '朱芸蒂',
            '何寶生', 
            '李銘堯'
        ]
    },
    {
        groupname: '小花同事1',
        num: 13,
        member: [
            'Joanne', 
            '如一', 
            '玫如', 
            'Freya', 
            'Vivien', 
            'Nic', 
            '藹倫夫婦', 
            '爵宇夫婦'
        ]
    },
    {
        groupname: '小花同事2',
        num: 14,
        member: [
            '連san', 
            '巧如一家', 
            '溫san一家', 
            '秀蜜', 
            '明業', 
            'Jack'
        ]
    },
    {
        groupname: '東吳基服',
        num: 15,
        member: [
            '毓茜一家', 
            '又魚一家', 
            '張惠玲', 
            '宛君',
            '廖哲男',
            '吳昌紘'
        ]
    },
    {
        groupname: '不分你我愛羽球',
        num: 16,
        member: [
            '貝蒂', 
            '747', 
            '馥庭', 
            '定澤', 
            '邱恩容', 
            '楊0', 
            '闕楷諭', 
            '嘉珍', 
            '逸飛夫婦'
        ]
    },
    {
        groupname: '新娘媽媽朋友同事',
        num: 17,
        member: [
            '許丁財夫婦', 
            '廖雪珀Cecile夫婦', 
            '徐正光夫婦', 
            '游麗雯', 
            '劉中榮', 
            '孔慶勇'
        ]
    },
    {
        groupname: '新娘爸爸恆毅同學1',
        num: 19,
        member: [
            '王慧國夫婦', 
            '韓錫恆夫婦', 
            '黃育才/鄭霞夫婦', 
            '陳光頫夫婦', 
            '陳豪華'
        ]
    },
    {
        groupname: '新娘爸爸恆毅同學2',
        num: 18,
        member: [
            '徐明', 
            '戴士誠', 
            '費樹城', 
            '陳達锋', 
            '黃文輝',
            '胡聖國',
            '鄧華泉',
            '王慧鈞',
            '廖秋昌',
            '王景富'
        ]
    }
];

let btnEnter;

window.onload = function () {
    // welcome page
    const pgWelcome = document.getElementById('pg-welcome');
    const pgMain = document.getElementById('pg-content');
    btnEnter = document.getElementById('btn-enter');
    btnEnter.addEventListener('click', function (e) {
        pgMain.classList.remove('d-none');
        pgWelcome.classList.add('d-none');
    });

    // ig filter

    // door
    var door = document.getElementById("door");
    door.addEventListener("click", openDoor);

    // seats
    for (let seat of _seats) {
        const ts = document.getElementById(seat.id);
        ts.style['top'] = seat.top + 'vh';
        ts.style['left'] = seat.left + '%';
    }

    // seat search
    const seatSelect = document.getElementById('selectSeatSearch');
    const txtSeatRet = document.getElementById('txtSeatRet');

    for (let seatg of _seatmap) {
        const opg = document.createElement("optgroup");
        opg.label = '< ' + seatg.groupname + ' >';
        seatSelect.add(opg);

        for (let member of seatg.member) {
            const op = document.createElement("option");
            op.text = member;
            opg.appendChild(op);
        }
    }

    seatSelect.addEventListener('change', function (e) {
        let foundSeatg = _seatmap.find(sg => sg.member.find(s => s == e.target.value));

        if (foundSeatg) {
            const foundSeatEle = document.getElementById('seat' + foundSeatg.num);
            if (foundSeatEle) {
                // clear last data
                txtSeatRet.textContent = '';
                for (let seat of _seats) {
                    const ts = document.getElementById(seat.id);
                    ts?.classList.remove('active');
                }

                foundSeatEle.classList.add('active');
                txtSeatRet.textContent = foundSeatg.num;
            }
        }

    });

    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).addEventListener('click', function (e) {
            hideAllContent();
            document.getElementById('anchor-' + control.id).classList.add('active');
            document.getElementById('card-' + control.id).classList.remove('d-none');
        });

        // map
        const mapDatas = [{
            linkId: 'link-map-img1', targetId: 'map-img1'
        }, {
            linkId: 'link-map-img2', targetId: 'map-img2'
        }, {
            linkId: 'link-map-img3', targetId: 'map-img3'
        }];

        for (let map of mapDatas) {
            const linkMap = document.getElementById(map.linkId);
            const targetMap = document.getElementById(map.targetId);
            if (linkMap && targetMap) {
                linkMap.addEventListener('click', function (e) {

                    for (let m of mapDatas) {
                        if (m.targetId !== map.targetId) {
                            const otherLink = document.getElementById(m.linkId);
                            const otherMap = document.getElementById(m.targetId);
                            if (otherMap) {
                                otherMap.classList.add('d-none');
                            }
                            if (otherLink) {
                                otherLink.classList.remove('active');
                            }
                        }
                    }

                    linkMap.classList.add('active');
                    targetMap.classList.remove('d-none');
                });
            }
        }
    }

    const imgPlaceHolder = document.getElementById('wedding-photo');
    if (imgPlaceHolder) {
        for (let i = 1; i <= 60; i++) {
            const img = document.createElement("img");
            img.src = './resources/thumb/a' + i + '.jpg';
            img.classList.add('photo');
            const gallery = document.getElementById('photo-gallery');
            gallery.appendChild(img);
            img.addEventListener('click', function () {
                const pieces = img.src.split('/');
                imgPlaceHolder.src = 'resources/wedding/' + pieces[pieces.length - 1];
            });
        }
    }
}

function openDoor() {
    console.log('open door');
    const dollInDoor = document.getElementById('wedding-doll-g');
    const heart = document.getElementById('hint-heart');
    const hintDot = document.getElementById('hint-dot');

    this.classList.toggle("door-open");
    dollInDoor.classList.toggle('shake');
    heart.classList.toggle('d-none');
    hintDot.classList.toggle('d-none');

    this.removeEventListener('click', openDoor);

    setTimeout(function () {
        btnEnter.click();
    }, 3000);
}

function hideAllContent() {
    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).classList.remove('active');
        document.getElementById('card-' + control.id).classList.add('d-none');
    }
}