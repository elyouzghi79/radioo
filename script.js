let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'main radio',
        music : 'http://live.mp3quran.net:8006'
    },
    {
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ahmad AlHawashi',
        music : 'http://live.mp3quran.net:9928'
    },
    {
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ahmed Altrabulsi',
        music : 'http://live.mp3quran.net:9926'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ahmad Al ajmi',
        music : 'http://live.mp3quran.net:8008'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ahmad Saber',
        music : 'http://live.mp3quran.net:9922'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ahmed Amer',
        music : 'http://live.mp3quran.net:9920'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الدوكالي محمد العالم',
        music : 'http://live.mp3quran.net:9916'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Alzain Mohammad Ahmad',
        music : 'http://live.mp3quran.net:9914'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'القرآن الكريم برواية ورش عن نافع - العيون الكوشي',
        music : 'http://live.mp3quran.net:9912'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Ibrahim AlAkhdar',
        music : 'http://live.mp3quran.net:9946'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Idrees Abkr',
        music : 'http://live.mp3quran.net:9968'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'ابراهيم الدوسري (ورش عن نافع)',
        music : 'http://live.mp3quran.net:9902'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الشيخ الفاتح محمد الزبير',
        music : 'http://live.mp3quran.net:9910'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Tawfeeq AsSayegh',
        music : 'http://live.mp3quran.net:9906'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Jamal Shaker Abdullah',
        music : 'http://live.mp3quran.net:9900'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الشيخ زكي داغستاني - حفص عن عاصم',
        music : 'http://live.mp3quran.net:9890'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Jamaan Alosaimi',
        music : 'http://live.mp3quran.net:9950'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'حاتم فريد الواعر',
        music : 'http://live.mp3quran.net:9898'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Khaled AlQahtani',
        music : 'http://live.mp3quran.net:9970'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'القارئ خالد المهنا | حفص عن عاصم ',
        music : 'http://live.mp3quran.net:9896'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'خالد عبد الكافي',
        music : 'http://live.mp3quran.net:9894'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الشيخ خليفة الطنيجي',
        music : 'http://live.mp3quran.net:9892'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'بصوت الشيخ سعد الغامدي',
        music : 'http://live.mp3quran.net:8004'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Saud Alshuraim',
        music : 'http://live.mp3quran.net:9986'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'للقارئ الشيخ سهل ياسين',
        music : 'http://live.mp3quran.net:9888'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Sayeed Ramadan',
        music : 'http://live.mp3quran.net:9886'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Shaik Abu Bakr Al Shatri',
        music : 'http://live.mp3quran.net:9966'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الشيخ : شيرزاد عبد الرحمن طاهر',
        music : 'http://live.mp3quran.net:9884'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'للقارئ الشيخ صابر عبدالحكم - حفص عن عاصم ',
        music : 'http://live.mp3quran.net:9952'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Salah Albudair',
        music : 'http://live.mp3quran.net:9882'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'للقارئ الشيخ صلاح الهاشم - حفص عن عاصم ',
        music : 'http://live.mp3quran.net:9880'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'للقارئ الشيخ طارق عبدالغني دعوب - قالون عن نافع',
        music : 'http://live.mp3quran.net:9876'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Adel AlKhalbany',
        music : 'http://live.mp3quran.net:9874'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Adel Ryyan',
        music : 'http://live.mp3quran.net:9872'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Abdelbari AlToubayti',
        music : 'http://live.mp3quran.net:9870'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Abdulbari Mohammad',
        music : 'http://live.mp3quran.net:9868'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'المصحف المجود للقارئ عبد الباسط عبد الصمد',
        music : 'http://live.mp3quran.net:9974'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Abdulbasit Abdulsamad WARSH',
        music : 'http://live.mp3quran.net:9956'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Abdulrahman Alsudaes',
        music : 'http://live.mp3quran.net:9988'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'Abdulrahman AlMajed',
        music : 'http://live.mp3quran.net:9726'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' للقارئ الشيخ عبدالرشيد صوفي',
        music : 'http://live.mp3quran.net:9866'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Abdul Aziz AlAhmad',
        music : 'http://live.mp3quran.net:9862'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Abdullah AlKandari',
        music : 'http://live.mp3quran.net:9860'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Abdullah AlMattrod Radio',
        music : 'http://live.mp3quran.net:9858'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبد الله بصفر',
        music : 'http://live.mp3quran.net:9954'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Abdullah Khayyat ',
        music : 'http://live.mp3quran.net:9948'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Abdullah AlJohany',
        music : 'http://live.mp3quran.net:9944'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبدالمحسن الحارثي',
        music : 'http://live.mp3quran.net:9856'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبد المحسن العبيكان',
        music : 'http://live.mp3quran.net:9854'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبد المحسن القاسم',
        music : 'http://live.mp3quran.net:9852'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبد الهادي كناكري',
        music : 'http://live.mp3quran.net:9850'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' عبد الودود حنيف',
        music : 'http://live.mp3quran.net:9848'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  الشيخ القارئ علي بن عبد الرحمن الحذيفي | قالون عن نافع',
        music : 'http://live.mp3quran.net:9846'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '   الشيخ القارئ علي بن عبد الرحمن الحذيفي',
        music : 'http://live.mp3quran.net:9844'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Ali Jaber',
        music : 'http://live.mp3quran.net:9964'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' مصحف القارئ علي حجاج السويسي | حفص عن عاصم',
        music : 'http://live.mp3quran.net:9842'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  عماد زهير حافظ',
        music : 'http://live.mp3quran.net:9840'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' الشيخ عمر القزابري برواية ورش عن نافع',
        music : 'http://live.mp3quran.net:9838'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' فارس عباد',
        music : 'http://live.mp3quran.net:9972'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' ماهر المعيقلي',
        music : 'http://live.mp3quran.net:8002'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ ماهر شخاشيرو',
        music : 'http://live.mp3quran.net:9836'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' محمد أيوب',
        music : 'http://live.mp3quran.net:9960'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ محمد الطبلاوي',
        music : 'http://live.mp3quran.net:9834'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' محمد اللحيدان',
        music : 'http://live.mp3quran.net:9832'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Mohammad Jibrel',
        music : 'http://live.mp3quran.net:9962'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Mohammad Rashad Alshareef',
        music : 'http://live.mp3quran.net:9830'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' محمد صالح عالم شاه',
        music : 'http://live.mp3quran.net:9828'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  تلاوة خاشعة بصوت القارئ الشيخ " محمد صديق المنشاوي " رحمه الله',
        music : 'http://live.mp3quran.net:9978'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ محمد صديق المنشاوي | المصحف المجود',
        music : 'http://live.mp3quran.net:9826'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ محمد عبدالحكيم سعيد العبدالله | البزي وقنبل عن ابن كثير',
        music : 'http://live.mp3quran.net:9814'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'القارئ محمد عبدالحكيم سعيد العبدالله | الدوري عن الكسائي',
        music : 'http://live.mp3quran.net:9816'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'محمد عبدالكريم',
        music : 'http://live.mp3quran.net:9824'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'محمد عبدالكريم - رواية ورش عن نافع من طريق أبي بكر الأصبهاني',
        music : 'http://live.mp3quran.net:9822'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' محمد عثمان خان',
        music : 'http://live.mp3quran.net:9820'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ محمود الرفاعي',
        music : 'http://live.mp3quran.net:9818'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' محمود الشيمي الأنعام الدوري عن الكسائي',
        music : 'http://live.mp3quran.net:9812'
    },

	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القرآن الكريم بصوت الشيخ محمود خليل الحصري رحمه الله ',
        music : 'http://live.mp3quran.net:9958'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'الشيخ / محمود خليل الحصري - المصحف المجود ',
        music : 'http://live.mp3quran.net:9806'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Mahmoud Ali Albanna',
        music : 'http://live.mp3quran.net:9808'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ محمود علي البنا | المصحف المجود',
        music : 'http://live.mp3quran.net:9810'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' مشاري راشد العفاسي',
        music : 'http://live.mp3quran.net:8010'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Mustafa Ismail',
        music : 'http://live.mp3quran.net:9800'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' مصطفى اللاهوني',
        music : 'http://live.mp3quran.net:9798'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  مصطفى رعد العزاوي',
        music : 'http://live.mp3quran.net:9796'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  معيض الحارثي',
        music : 'http://live.mp3quran.net:9802'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ مفتاح السلطني | الدوري عن أبي عمرو',
        music : 'http://live.mp3quran.net:9790'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Mousa Bilal',
        music : 'http://live.mp3quran.net:9786'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Nasser Alqatami',
        music : 'http://live.mp3quran.net:9994'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  القارئ : نبيل الرفاعي',
        music : 'http://live.mp3quran.net:9784'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' نعمة الحسان',
        music : 'http://live.mp3quran.net:9782'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' هاني الرفاعي',
        music : 'http://live.mp3quran.net:9780'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' القارئ وليد النائحي | قالون عن نافع من طريق أبي نشيط',
        music : 'http://live.mp3quran.net:9778'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Yasser AlDosari',
        music : 'http://live.mp3quran.net:9984'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' Yasser AlQurashi',
        music : 'http://live.mp3quran.net:9776'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' ياسر المزروعي - قراءة يعقوب الحضرمي بروايتي رويس وروح',
        music : 'http://live.mp3quran.net:9774'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' يحيى حوى',
        music : 'http://live.mp3quran.net:9772'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : '  يوسف الشويعي',
        music : 'http://live.mp3quran.net:9770'
    },
	{
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : ' يوسف بن نوح أحمد',
        music : 'http://live.mp3quran.net:9768'
    },
    {
        img : 'https://ia802304.us.archive.org/33/items/logo_20210825_20210825_2226/21.jpeg',
        name : 'radio',
        artist : 'تلاوة رائعة لسورة البقرة',
        music : 'http://live.mp3quran.net:9722'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
