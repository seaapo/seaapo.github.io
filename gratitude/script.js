const default_thank_p = [
    '衷心感謝 <strong class="highlight">{{name}}</strong> 協助搜救行動，',
    '在寒冷又降雨不斷的環境中，',
    '仰賴你們無私投入專業搜救技能，與其他夥伴通力合作，',
    '得以幸運尋獲傷者，平安護送下山。',
    '~~ 真摯感謝 ~~',
    '{{people}}',
    '參與搜救，',
    '以及幕後協助的夥伴，',
    '感謝有您，寒溪搜救有了最暖的結果！'
];

const default_question_p = [
    '誠摯邀請 <strong class="highlight">{{name}}</strong> 撥冗填寫問卷，',
    '提供對本次搜救行動的寶貴建議。',
    '我們將珍惜每一份回饋，',
    '作為未來改進搜救工作的方向參考。'
];

const datas = [
    { name: '台灣樂山協會', peoples: ['劉崑耀', '周子溱', '陳瀅年', '楊懿惟', '張歆儀', '郭宜帆'] },
    { name: '宜蘭登山協會', peoples: ['陳正輝(飛鴿)', '呂文賢(飛鼠)', '林蒼淯'] },
    { name: '新板山搜義消', peoples: ['吳慰宗', '蔡宏億', '李永盛', '蘇凡雁', '林逸智', '詹喬瑜', '陳春祈', '廖國凱', '潘正義'] },
    { name: '廣興義消', peoples: ['陳秋霞', '呂永豐', '卓恆安'] },
    { name: '寒溪狩獵協會', peoples: ['董駿森(獵協理事長)', '董經國(寒溪村村長)', '鐘祥宇', '黃保孝', '潘秉翰', '藍三和', '涂金復', '鐘進福', '林嘉祥', '梁克葉', '鐘祥宇', '董精義'] },
    { name: '北搜', peoples: ['王耀輝', '徐淑慧', '林家毅', '陳韻涵', '吳聖銘', '陶義明', '吳愷祥', '廖坤聰', '楊翰昌'] },
    { name: '東搜', peoples: ['陸怡君', '王思元', '張光承', '陳文昌', '陳裕濠', '鄭文祥', '陳品維', '徐佳玲', '李美琪', '張益銘', '吳勁宏', '彭濬杰'] },
    { name: '台北市義消山仔后山搜分隊', peoples: ['陳力仁'] },
    { name: '警消與林業署', peoples: [
        '宋良軍', '余志明',
        '江冀聖', '林光正', '林佶戊', '周煇凱', '盧建宇',
        '藍文宏', '劉志堅', '李長青', '吳秋文', '洪翊銓', '游胡鍠', '李伊宸', '許世益', '蔡明諺', '李哲瑜', '簡暉庭', '杜糧宇', '楊鎮瑋',
        '許瑋婷', '簡呈軒', '吳浩瑋', '周昱佐', '陳佳敬', '薛智友', '陳治堯', '羅智麒', '林俊良', '謝源舜', '陳孟陞',
        '林奕駒', '林志宇', '石立杰', '江恩澤', '朱家興', '林世偉'
    ]}
];

window.onload = () => {
    const menuThank = document.getElementById('menu-thank');
    const menuQuestion = document.getElementById('menu-questionnaire');
    const blockThank = document.getElementById('block-thank');
    const blockQuestion = document.getElementById('block-questionnaire');
    const hintThank = document.getElementById('hint-thank');
    const hintQuestion = document.getElementById('hint-questionnaire');

    const contentThank = document.getElementById('content-thank');
    const contentQuestion = document.getElementById('content-questionnaire');

    console.log('--- window url', window.location.href);
    const url_pieces = decodeURIComponent(window.location.href).split('/');
    const organization = url_pieces[url_pieces.length - 2];
    console.log('---- organization: ', organization);

    const data = datas.find(d => d.name === organization);
    if (data) {
        createThankContent(default_thank_p, data, contentThank);
        createQuestionContent(default_question_p, data, contentQuestion);
    }

    menuThank.addEventListener('click', () => {
        console.log('click menu thank');
        menuThank.classList.add('active');
        menuQuestion.classList.remove('active');
        blockThank.classList.remove('hidden');
        blockQuestion.classList.add('hidden');
        hintThank.classList.remove('hidden');
        hintQuestion.classList.add('hidden');
    });

    menuQuestion.addEventListener('click', () => {
        console.log('click menu question');
        menuQuestion.classList.add('active');
        menuThank.classList.remove('active');
        blockThank.classList.add('hidden');
        blockQuestion.classList.remove('hidden');
        hintQuestion.classList.remove('hidden');
        hintThank.classList.add('hidden');
    })
};

function createThankContent(template, data, container) {
    template.forEach(text => {
        const p = document.createElement('p');
        if (text.indexOf('{{name}}') >= 0) {
            text = text.replace(/{{name}}/, data.name);
        }
        if (text.indexOf('{{people}}') >= 0) {
            text = text.replace(/{{people}}/, data.peoples.join('、'));
            p.classList.add('name');
        }
        p.innerHTML = text;
        container.appendChild(p);
    });
}

function createQuestionContent(template, data, container) {
    template.forEach(text => {
        const p = document.createElement('p');
        if (text.indexOf('{{name}}') >= 0) {
            text = text.replace(/{{name}}/, data.name);
        }

        p.innerHTML = text;
        container.appendChild(p);
    });
}