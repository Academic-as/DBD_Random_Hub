
        const tierlistData = {
            current: {
                S: [
                    { name: 'Кукловод', file: 'Кукловод.png' },
                    { name: 'Медсестра', file: 'Медсестра.png' },
                    { name: 'Слэшер', file: 'Слэшер.png' }
                ],
                A: [
                    { name: 'Тень', file: 'Тень.png' },
                    { name: 'Мор', file: 'Мор.png' },
                    { name: 'Темный Лорд', file: 'Темный лорд.png' },
                    { name: 'Немезис', file: 'Немезис.png' },
                    { name: 'Лич', file: 'Лич.png' },
                    { name: 'Каннибал', file: 'Канибал.png' },
                    { name: 'Они', file: 'Они.png' },
                    { name: 'Охотница', file: 'Охотница.png' },
                    { name: 'Деревенщина', file: 'Деревенщина.png' },
                    { name: 'Один', file: 'Один.webp' },
                ],
                B: [
                    { name: 'Палач', file: 'Палач.png' },
                    { name: 'Ксеноморф', file: 'Ксеноморф.png' },
                    { name: 'Правосудие', file: 'Правосудие.webp' },
                    { name: 'Дух', file: 'Дух.png' },
                    { name: 'Аниматроник', file: 'Аниматроник.png' },
                    { name: 'Гоуст Фейс', file: 'Гоуст Фейс.png' },
                    { name: 'Сингулярность', file: 'Сингулярность.png' },
                    { name: 'Легион', file: 'Легион.png' },
                    { name: 'Гуль', file: 'Гуль.png' },
                    { name: 'Чума', file: 'Чума.png' },
                    { name: 'Хороший парень', file: 'Хороший парень.png' },
                    { name: 'Стрелок', file: 'Стрелок.png' }
                ],
                C: [
                    { name: 'Демогоргон', file: 'Демогоргон.png' },
                    { name: 'Рыцарь', file: 'Рыцарь.png' },
                    { name: 'Грязь', file: 'Грязь.png' },
                    { name: 'Призрак', file: 'Призрак.png' },
                    { name: 'Неведомое', file: 'Неведомаое.png' },
                    { name: 'Художница', file: 'Художница.png' },
                    { name: 'Кошмар', file: 'Кошмар.png' },
                    { name: 'Онрё', file: 'Онрё.png' },
                    { name: 'Свинья', file: 'Свинья.png' },
                    { name: 'Клоун', file: 'Клоун.png' }
                ],
                D: [
                    { name: 'Трюкач', file: 'Трюкач.png' },
                    { name: 'Сенобит', file: 'Сенобит.png' },
                    { name: 'Доктор', file: 'Доктор.png' },
                    { name: 'Красу', file: 'Красу.png' },
                    { name: 'Близнецы', file: 'Близнецы.png' },
                    { name: 'Егерь', file: 'Егерь.png' },
                    { name: 'Траппер', file: 'Траппер.png' },
                    { name: 'Торговка черепами', file: 'Торговка черепами.png' },
                    { name: 'Ведьма', file: 'Ведьма.png' }
                ]
            },
            custom: {
                S: [],
                A: [],
                B: [],
                C: [],
                D: []
            }
        };

        const killerNameTranslations = {
            'Кукловод': 'The Clown',
            'Тень': 'The Wraith',
            'Медсестра': 'The Nurse',
            'Слэшер': 'The Slasher',
            'Мор': 'The Blight',
            'Темный Лорд': 'The Dark Lord',
            'Лич': 'The Lich',
            'Немезис': 'The Nemesis',
            'Охотница': 'The Huntress',
            'Каннибал': 'The Cannibal',
            'Палач': 'The Executioner',
            'Один': 'The Oni',
            'Деревенщина': 'The Hillbilly',
            'Они': 'The Oni',
            'Дух': 'The Spirit',
            'Ксеноморф': 'The Xenomorph',
            'Правосудие': 'The Executioner',
            'Аниматроник': 'The Animatronic',
            'Гоуст Фейс': 'The Ghost Face',
            'Сингулярность': 'The Singularity',
            'Легион': 'The Legion',
            'Гуль': 'The Ghoul',
            'Хороший парень': 'The Good Guy',
            'Чума': 'The Plague',
            'Стрелок': 'The Deathslinger',
            'Демогоргон': 'The Demogorgon',
            'Рыцарь': 'The Knight',
            'Грязь': 'The Dredge',
            'Призрак': 'The Wraith',
            'Неведомое': 'The Unknown',
            'Художница': 'The Artist',
            'Кошмар': 'The Nightmare',
            'Онрё': 'The Onryo',
            'Свинья': 'The Pig',
            'Клоун': 'The Clown',
            'Доктор': 'The Doctor',
            'Сенобит': 'The Cenobite',
            'Трюкач': 'The Trickster',
            'Красу': 'The Krasue',
            'Близнецы': 'The Twins',
            'Егерь': 'The Deathslinger',
            'Траппер': 'The Trapper',
            'Торговка черепами': 'The Skull Merchant',
            'Ведьма': 'The Hag',
            'Дредж': 'The Dredge',
            'Слэшер': 'The Slasher',
            'Мор': 'The Blight',
            'Тень': 'The Wraith',
            'Они': 'The Oni',
            'Кукловод': 'The Clown'
        };

        function getLocalizedKillerName(name) {
            if (!name) return name;
            if (currentLang === 'en') {
                return killerNameTranslations[name] || name;
            }
            return name;
        }

        const aliases = {
            killers: {
                "Ксеноморф (Xenomorph)": ["кошка", "кот", "котик", "мяу", "ксеноформ", "чужой", "xenomorph", "xeno", "cat"],
                "Охотник (Trapper)": ["траппер", "ловушка"],
                "Призрак (Wraith)": ["колокольчик", "врейт"],
                "Деревенщина (Hillbilly)": ["билли", "пила"],
                "Медсестра (Nurse)": ["нюрса", "нурса"],
                "Форма / Майкл Майерс (Shape)": ["майерс", "майкл", "форма"],
                "Ведьма (Hag)": ["хага", "бабка"],
                "Доктор (Doctor)": ["док"],
                "Охотница (Huntress)": ["анна", "топоры", "хунтресс"],
                "Каннибал (Cannibal)": ["бубба", "кожаное лицо"],
                "Кошмар (Nightmare)": ["фредди", "крюгер"],
                "Свинья (Pig)": ["пиг", "аманда"],
                "Клоун (Clown)": ["пухляк", "газ"],
                "Дух (Spirit)": ["спирит", "рин"],
                "Легион (Legion)": ["заяц", "нож"],
                "Чума (Plague)": ["п吐ка", "рвота", "тошнит"],
                "Призрачное Лицо (Ghost Face)": ["гостфейс", "крик"],
                "Демогоргон (Demogorgon)": ["демо", "собака", "петух"],
                "Они (Oni)": ["демон", "дубина"],
                "Ковбой (Deathslinger)": ["стрелок", "дефслингер", "гарпун"],
                "Палач (Executioner)": ["пирамидоголовый", "пирамида"],
                "Мор (Blight)": ["блаqт", "блайт", "жижа"],
                "Близнецы (Twins)": ["виктор", "шпунтик"],
                "Трикстер (Trickster)": ["кореец", "ножи"],
                "Немезис (Nemesis)": ["зомби", "кулак"],
                "Сенобит (Cenobite)": ["пинхед", "шкатулка", "гвоздеголовый"],
                "Художница (Artist)": ["птицы", "художка"],
                "Онрё (Onryō)": ["садако", "звонок", "телевизор"],
                "Дредж (Dredge)": ["шкаф", "тьма"],
                "Гений / Вескер (Mastermind)": ["вескер", "альберт"],
                "Рыцарь (Knight)": ["стража", "рыцари"],
                "Торговка черепами (Skull Merchant)": ["мерчант", "дроны"],
                "Сингулярность (Singularity)": ["робот", "камеры"],
                "Хороший парень / Чаки (Good Guy)": ["чаки", "кукла"],
                "Неизвестный (Unknown)": ["анкноун", "галлюцинация"],
                "Лич / Векна (Lich)": ["векна", "магия"],
                "Тёмный Владыка / Дракула (Dark Lord)": ["дракула", "вампир", "волк", "летучая мышь"],
                "Хозяин гончих (Houndmaster)": ["собачник", "гончая"],
                "Гуль / Канеки (Ghoul)": ["канеки", "гуль", "токийский гуль", "Дед инсайд", "1000-7", "993?", " dead inside", "Мертвый внутри"],
                "Аниматроник / Спрингтрап (Animatronic)": ["спрингтрап", "фнаф", "fnaf"],
                "Красу (Krasue)": ["голова", "летучая голова"],
                "Первый / Генри Крил (First)": ["генри", "001", "одиннадцать"],
                "Маньяк / Джейсон (Slasher)": ["джейсон", "пятница 13"],
                "Судья (Judgment)": ["судья"]
            },
            survivors: {
                "Ада Вонг (Ada Wong)": ["ада", "платье"],
                "Леон С. Кеннеди (Leon S. Kennedy)": ["леон"],
                "Джилл Валентайн (Jill Valentine)": ["джилл"],
                "Шерил Мэйсон (Cheryl Mason)": ["шерил"],
                "Николас Кейдж (Nicolas Cage)": ["кедж", "актер"],
                "Лара Крофт (Lara Croft)": ["лара", "томб райдер"]
            }
        };

        const i18n = {
            ru: {
                tabHome: "Главная",
                tabWheel: "Колесо",
                tabEscapes: "Побег",
                tabTierlist: "Тир-лист",
                tabChallenges: "Челленджи",
                challengeKillersTab: "Маньяки",
                challengeSurvivorsTab: "Выжившие",
                tierlistTitle: "Текущий визуальный тир-лист маньяков",
                tierlistCurrent: "Текущий тир-лист",
                tierlistSource: "Текущий тир-лист взят с сайта",
                tierlistGuide: [
                    ["S", "Элита тир-листа: сильнейшее давление и высокий винрейт."],
                    ["A", "Очень сильные и стабильные убийцы почти на любой карте."],
                    ["B", "Надёжные персонажи без явной имбы, но с хорошим потенциалом."],
                    ["C", "Ситуативные маньяки, которым важны карта и ошибки выживших."],
                    ["D", "Слабые или заметно устаревшие по текущему балансу персонажи."]
                ],
                tierlistCustom: "Свой",
                homeHeroTitle: "DBD Randomizer & Hub",
                homeHeroDesc: "Панель для Dead by Daylight: выбирайте персонажей, ведите статистику матчей, изучайте тир-лист и запускайте игровые челленджи в одном месте.",
                feature1Title: "🎡 Колесо Судьбы",
                feature1Desc: "Выбирайте случайного убийцу или выжившего, настраивайте список персонажей и фильтруйте варианты под текущую катку.",
                feature2Title: "🏆 Побеги",
                feature2Desc: "Записывайте личные и командные результаты в режимах 1vs4 и 2vs8, а затем быстро оценивайте процент успеха.",
                feature3Title: "🌐 Челленджи",
                feature3Desc: "Испытайте удачу в LUCKY: вращайте колеса, тратьте игровую валюту и собирайте необычные условия для следующей катки.",
                feature4Title: "📊 Тир-лист",
                feature4Desc: "Сравнивайте убийц по категориям S–D: от самых сильных и стабильных до ситуативных и слабых. Открывайте текущий список или создавайте свой.",
                homeFooter: "Ваш прогресс доступен в течение текущего сеанса: переключайтесь между разделами и возвращайтесь к настройкам без потери данных.",
                homeStatTools: "инструмента",
                homeStatLanguage: "язык",
                homeStatVariations: "вариаций",
                escapeHeader: "Побег",
                escapeDescription: "Считайте свои побеги, неудачные попытки и пойманных отдельно для себя и отдельно для команды.",
                escapeSelfTitle: "Я / Свой показатель",
                escapeSelfEscaped: "Сбежал",
                escapeSelfFailed: "Не смог",
                escapeSelfCaught: "Пойман",
                escapePercent: "Процент побега",
                escapeSelfActionEscaped: "+ Сбежал",
                escapeSelfActionFailed: "+ Не смог",
                escapeSelfActionCaught: "+ Пойман",
                escapeReset: "Сбросить",
                escapeDownload: "Скачать показатель",
                escapeTeamTitle: "Команда",
                escapeTeamEscaped: "Сбежала",
                escapeTeamFailed: "Не смогла",
                escapeTeamCaught: "Поймана",
                escapeTeamActionEscaped: "+ Сбежала",
                escapeTeamActionFailed: "+ Не смогла",
                escapeTeamActionCaught: "+ Поймана",
                escapeCountdownLabel: "До окончания режима 2 VS 8",
                escapeCountdownFinished: "Событие уже началось",
                escapeCountdownTarget: "Режим закончится 29 сентября 2026, 18:00 МСК",
                manaTitle: "Маньяк",
                manaLabel: "Поймано",
                manaRateLabel: "Сумма",
                manaPlus: "+ Поймано",
                manaMinus: "- Поймано",
                killersSubtab: "Убийцы",
                survivorsSubtab: "Выжившие",
                selectAll: "Выбрать всех",
                deselectAll: "Убрать всех",
                searchPlaceholder: "Поиск (например: кошка, билли...)...",
                spinMainBtn: "Крутить персонажа",
                modalSubtitle: "Сущность выбрала:",
                challengesTitle: "Челленджи",
                challengesDesc: "Откройте вкладку LUCKY для челленджа.",
                emptyWheel: "Выберите хотя бы 1 вариант",
                singleMeme: "Вот это выбор! А точно ли нужно было крутить колесо ради этого? 😂",
                killers: [
                    "Охотник (Trapper)", "Призрак (Wraith)", "Деревенщина (Hillbilly)", "Медсестра (Nurse)",
                    "Форма / Майкл Майерс (Shape)", "Ведьма (Hag)", "Доктор (Doctor)", "Охотница (Huntress)",
                    "Каннибал (Cannibal)", "Кошмар (Nightmare)", "Свинья (Pig)", "Клоун (Clown)",
                    "Дух (Spirit)", "Легион (Legion)", "Чума (Plague)", "Призрачное Лицо (Ghost Face)",
                    "Демогоргон (Demogorgon)", "Они (Oni)", "Ковбой (Deathslinger)", "Палач (Executioner)",
                    "Мор (Blight)", "Близнецы (Twins)", "Трикстер (Trickster)", "Немезис (Nemesis)",
                    "Сенобит (Cenobite)", "Художница (Artist)", "Онрё (Onryō)", "Дредж (Dredge)",
                    "Гений / Вескер (Mastermind)", "Рыцарь (Knight)", "Торговка черепами (Skull Merchant)",
                    "Сингулярность (Singularity)", "Ксеноморф (Xenomorph)", "Хороший парень / Чаки (Good Guy)",
                    "Неизвестный (Unknown)", "Лич / Векна (Lich)", "Тёмный Владыка / Дракула (Dark Lord)",
                    "Хозяин гончих (Houndmaster)", "Гуль / Канеки (Ghoul)", "Аниматроник / Спрингтрап (Animatronic)",
                    "Красу (Krasue)", "Первый / Генри Крил (First)", "Маньяк / Джейсон (Slasher)", "Судья (Judgment)"
                ],
                survivors: [
                    "Дуайт Фэйрфилд (Dwight Fairfield)", "Мэг Томас (Meg Thomas)", "Клодетт Морель (Claudette Morel)",
                    "Джейк Парк (Jake Park)", "Неа Карлссон (Nea Karlsson)", "Лори Строуд (Laurie Strode)",
                    "Эйс Висконти (Ace Visconti)", "Билл Овербек (Bill Overbeck)", "Фэн Мин (Feng Min)",
                    "Дэвид Кинг (David King)", "Квентин Смит (Quentin Smith)", "Дэвид Тапп (David Tapp)",
                    "Кейт Денсон (Kate Denson)", "Адам Фрэнсис (Adam Francis)", "Джефф Йохансен (Jeff Johansen)",
                    "Джейн Ромеро (Jane Romero)", "Эш Уильямс (Ash Williams)", "Нэнси Уилер (Nancy Wheeler)",
                    "Стив Харрингтон (Steve Harrington)", "Юи Кимура (Yui Kimura)", "Зарина Кассир (Zarina Kassir)",
                    "Шерил Мэйсон (Cheryl Mason)", "Феликс Рихтер (Felix Richter)", "Элоди Ракото (Élodie Rakoto)",
                    "Юн-Джин Ли (Yun-Jin Lee)", "Леон С. Кеннеди (Leon S. Kennedy)", "Джилл Валентайн (Jill Valentine)",
                    "Микаэла Рид (Mikaela Reid)", "Джона Васкес (Jonah Vasquez)", "Ёити Асакава (Yoichi Asakawa)",
                    "Хэдди Каур (Haddie Kaur)", "Ада Вонг (Ada Wong)", "Ребекка Чамберс (Rebecca Chambers)",
                    "Витторио Тоскано (Vittorio Toscano)", "Талита Лира (Thalita Lyra)", "Ренато Лира (Renato Lyra)",
                    "Габриэль Сома (Gabriel Soma)", "Николас Кейдж (Nicolas Cage)", "Эллен Рипли (Ellen Ripley)",
                    "Алан Уэйк (Alan Wake)", "Сэйбл Уорд (Sable Ward)", "Эстри Язар (Aestri Yazar)",
                    "Беймар Ураз (Baermar Uraz)", "Лара Крофт (Lara Croft)", "Тревор Бельмонт (Trevor Belmont)",
                    "Таури Кейн (Taurie Cain)", "Орела Роуз (Orela Rose)", "Рик Граймс (Rick Grimes)",
                    "Мишонн Граймс (Michonne Grimes)", "Ви Бунясак (Vee Boonyasak)", "Дастин Хендерсон (Dustin Henderson)",
                    "Одиннадцать (Eleven)", "Квон Тэ-ён (Kwon Tae-young)", "Аврора (Aurora)"
                ]
            },
            en: {
                tabHome: "Home",
                tabWheel: "Wheel",
                tabEscapes: "Escapes",
                tabTierlist: "Tier list",
                tabChallenges: "Challenges",
                challengeKillersTab: "Killers",
                challengeSurvivorsTab: "Survivors",
                tierlistTitle: "Current visual killer tier list",
                tierlistCurrent: "Current tier list",
                tierlistSource: "Current tier list sourced from",
                tierlistGuide: [
                    ["S", "The elite tier: exceptional pressure and a high win rate."],
                    ["A", "Very strong and consistent killers on most maps."],
                    ["B", "Reliable characters without overpowered tools, but with solid potential."],
                    ["C", "Situational killers who depend on the map and survivor mistakes."],
                    ["D", "Weak or noticeably outdated characters in the current balance."]
                ],
                tierlistCustom: "Custom",
                homeHeroTitle: "DBD Randomizer & Hub",
                homeHeroDesc: "Your Dead by Daylight dashboard: choose characters, track match results, check the tier list, and launch game challenges from one place.",
                feature1Title: "🎡 Wheel of Fate",
                feature1Desc: "Choose a random killer or survivor, customize the character pool, and filter options for the current match.",
                feature2Title: "🏆 Escapes",
                feature2Desc: "Record personal and team results in 1vs4 and 2vs8, then review your success percentage at a glance.",
                feature3Title: "🌐 Challenges",
                feature3Desc: "Try your luck in LUCKY: spin the wheels, spend in-game currency, and build unusual conditions for your next match.",
                feature4Title: "📊 Tier list",
                feature4Desc: "Compare killers by S–D tiers, from the strongest and most consistent to situational and weaker picks. Open the current list or create your own.",
                homeFooter: "Your progress is available during the current session: move between sections and return to your settings without losing data.",
                homeStatTools: "tools",
                homeStatLanguage: "language",
                homeStatVariations: "variations",
                escapeHeader: "Escapes",
                escapeDescription: "Track your escapes, failed attempts, and caught survivors separately for yourself and for the team.",
                escapeSelfTitle: "Me / My stats",
                escapeSelfEscaped: "Escaped",
                escapeSelfFailed: "Failed",
                escapeSelfCaught: "Caught",
                escapePercent: "Escape rate",
                escapeSelfActionEscaped: "+ Escaped",
                escapeSelfActionFailed: "+ Failed",
                escapeSelfActionCaught: "+ Caught",
                escapeReset: "Reset",
                escapeDownload: "Download stats",
                escapeTeamTitle: "Team",
                escapeTeamEscaped: "Escaped",
                escapeTeamFailed: "Failed",
                escapeTeamCaught: "Caught",
                escapeTeamActionEscaped: "+ Escaped",
                escapeTeamActionFailed: "+ Failed",
                escapeTeamActionCaught: "+ Caught",
                escapeCountdownLabel: "Time until 2 VS 8 ends",
                escapeCountdownFinished: "The event has started",
                escapeCountdownTarget: "Mode ends September 29, 2026, 6:00 PM",
                manaTitle: "Maniac",
                manaLabel: "Caught",
                manaRateLabel: "Total",
                manaPlus: "+ Caught",
                manaMinus: "- Caught",
                killersSubtab: "Killers",
                survivorsSubtab: "Survivors",
                selectAll: "Select All",
                deselectAll: "Deselect All",
                searchPlaceholder: "Search (e.g. cat, xeno)...",
                spinMainBtn: "Spin Character",
                modalSubtitle: "The Entity chose:",
                challengesTitle: "Challenges",
                challengesDesc: "Open the LUCKY tab to play the challenge.",
                emptyWheel: "Select at least 1 item",
                singleMeme: "Now that's a choice! Did you really need to spin the wheel for this? 😂",
                killers: [
                    "The Trapper", "The Wraith", "The Hillbilly", "The Nurse",
                    "The Shape", "The Hag", "The Doctor", "The Huntress",
                    "The Cannibal", "The Nightmare", "The Pig", "The Clown",
                    "The Spirit", "The Legion", "The Plague", "The Ghost Face",
                    "The Demogorgon", "The Oni", "The Deathslinger", "The Executioner",
                    "The Blight", "The Twins", "The Trickster", "The Nemesis",
                    "The Cenobite", "The Artist", "The Onryō", "The Dredge",
                    "The Mastermind", "The Knight", "The Skull Merchant",
                    "The Singularity", "The Xenomorph", "The Good Guy",
                    "The Unknown", "The Lich", "The Dark Lord",
                    "The Houndmaster", "The Ghoul", "The Animatronic",
                    "The Krasue", "The First", "The Slasher", "The Judgment"
                ],
                survivors: [
                    "Dwight Fairfield", "Meg Thomas", "Claudette Morel",
                    "Jake Park", "Nea Karlsson", "Laurie Strode",
                    "Ace Visconti", "Bill Overbeck", "Feng Min",
                    "David King", "Quentin Smith", "David Tapp",
                    "Kate Denson", "Adam Francis", "Jeff Johansen",
                    "Jane Romero", "Ash Williams", "Nancy Wheeler",
                    "Steve Harrington", "Yui Kimura", "Zarina Kassir",
                    "Cheryl Mason", "Felix Richter", "Élodie Rakoto",
                    "Yun-Jin Lee", "Leon S. Kennedy", "Jill Valentine",
                    "Mikaela Reid", "Jonah Vasquez", "Yoichi Asakawa",
                    "Haddie Kaur", "Ada Wong", "Rebecca Chambers",
                    "Vittorio Toscano", "Thalita Lyra", "Renato Lyra",
                    "Gabriel Soma", "Nicolas Cage", "Ellen Ripley",
                    "Alan Wake", "Sable Ward", "Aestri Yazar",
                    "Baermar Uraz", "Lara Croft", "Trevor Belmont",
                    "Taurie Cain", "Orela Rose", "Rick Grimes",
                    "Michonne Grimes", "Vee Boonyasak", "Dustin Henderson",
                    "Eleven", "Kwon Tae-young", "Aurora"
                ]
            }
        };

        const colors = ['#1b1b22', '#26191b', '#192226', '#221926', '#262319', '#19261d', '#261922', '#1d1d26'];
        const sessionStorageKey = 'dbd-randomizer-session-v1';

        const escapeTracker = {
            '1vs4': {
                self: { escaped: 0, failed: 0, caught: 0 },
                team: { escaped: 0, failed: 0, caught: 0 }
            },
            '2vs8': {
                self: { escaped: 0, failed: 0, caught: 0 },
                team: { escaped: 0, failed: 0, caught: 0 }
            }
        };

        const SITE_THEME = 'normal'; //normal, christmas, halloween
        document.documentElement.dataset.theme = SITE_THEME;

        let currentLang = 'ru';
        let currentMode = 'killers';
        let currentEscapeMode = '1vs4';
        let activeTab = 'home';
        let selectedIndices = [];
        let selectedIndicesByMode = {
            killers: Array.from(Array(i18n.ru.killers.length).keys()),
            survivors: Array.from(Array(i18n.ru.survivors.length).keys())
        };
        let temporarilyExcludedIndex = null;
        let sessionStateWasRecovered = false;
        let luckySelectedKillers = Array.from(Array(i18n.ru.killers.length).keys());

        let currentRotationMain = 0;
        let isMainSpinning = false;

        const mainCanvas = document.getElementById('wheel');
        const mainCtx = mainCanvas.getContext('2d');

        const spinMainBtn = document.getElementById('spin-main-btn');
        const entityListEl = document.getElementById('entity-list');
        const selectedCountEl = document.getElementById('selected-count');
        const searchInput = document.getElementById('search');
        const removeWinnerToggle = document.getElementById('remove-winner-toggle');
        removeWinnerToggle.checked = false;

        function getSavedSelection(mode) {
            if (Array.isArray(selectedIndicesByMode?.[mode])) {
                return [...selectedIndicesByMode[mode]];
            }
            const max = i18n.ru[mode].length;
            return Array.from(Array(max).keys());
        }

        function exportWheelPreset() {
            const preset = {
                app: 'DBD-WHEEL',
                version: 1,
                savedAt: new Date().toISOString(),
                selections: {
                    [currentMode]: selectedIndices.map(index => i18n.ru[currentMode][index])
                }
            };
            const blob = new Blob([JSON.stringify(preset, null, 2)], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'dbd-wheel-preset.json';
            link.click();
            URL.revokeObjectURL(link.href);
        }

        function importWheelPreset(file) {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const imported = JSON.parse(reader.result);
                    if (imported.app !== 'DBD-WHEEL' || !imported.selections || typeof imported.selections !== 'object') throw new Error('Invalid preset');
                    const names = imported.selections[currentMode];
                    if (!Array.isArray(names)) throw new Error('Preset has no selection for this mode');
                    selectedIndices = names.map(name => i18n.ru[currentMode].indexOf(name)).filter(index => index >= 0);
                    temporarilyExcludedIndex = null;
                    renderEntityList(searchInput.value);
                    drawMainWheel();
                    saveSessionState();
                } catch (error) {
                    window.alert(currentLang === 'ru' ? 'Не удалось импортировать этот пресет.' : 'This preset could not be imported.');
                }
            };
            reader.readAsText(file);
        }

        function buildTierRow(tierName, entries) {
            const safeEntries = Array.isArray(entries) ? entries : [];
            const cells = safeEntries.length ? safeEntries.map((item) => {
                const fileName = String(item.file || '').trim();
                const imagePath = getImageSource(fileName);
                const name = getLocalizedKillerName(item.name || 'Unknown');
                return `
                    <div class="killer-card">
                        ${imagePath ? `<img src="${imagePath}" alt="${name}" loading="lazy">` : '<div class="tier-empty">No image</div>'}
                        <span>${name}</span>
                    </div>
                `;
            }).join('') : '<div class="tier-empty">Пусто</div>';

            return `
                <div class="tier-row tier-${tierName.toLowerCase()}">
                    <div class="tier-letter">${tierName}</div>
                    <div class="tier-content">${cells}</div>
                </div>
            `;
        }

        function getTierOptionsMarkup(selectedTier = 'S') {
            return ['S', 'A', 'B', 'C', 'D']
                .map((tier) => `<option value="${tier}" ${selectedTier === tier ? 'selected' : ''}>${tier}</option>`)
                .join('');
        }

        function getTierlistEntries() {
            return Object.values(tierlistData.current).flat();
        }

        const tierlistImageCache = new Map();
        let cachedCustomTierExportCanvas = null;

        function getImageSource(fileName) {
            const safeFileName = String(fileName || '').trim();
            if (!safeFileName) return '';
            const normalized = safeFileName.split('/').pop();
            return `tir-list/${encodeURIComponent(normalized)}`;
        }

        function loadAssetImage(fileName) {
            const src = getImageSource(fileName);
            if (!src) {
                return Promise.resolve(null);
            }

            if (tierlistImageCache.has(fileName)) {
                const cached = tierlistImageCache.get(fileName);
                return cached instanceof Promise ? cached : Promise.resolve(cached || null);
            }

            const promise = fetch(new URL(src, document.baseURI).href, { cache: 'no-store' })
                .then((response) => {
                    if (!response.ok) throw new Error(`Image request failed: ${response.status}`);
                    return response.blob();
                })
                .then((blob) => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const img = new Image();
                        img.onload = () => resolve(img);
                        img.onerror = () => reject(new Error('Image decoding failed'));
                        img.src = reader.result;
                    };
                    reader.onerror = () => reject(new Error('Image reading failed'));
                    reader.readAsDataURL(blob);
                }))
                .then((image) => {
                    tierlistImageCache.set(fileName, image);
                    return image;
                })
                .catch(() => {
                    tierlistImageCache.set(fileName, null);
                    return null;
                });

            tierlistImageCache.set(fileName, promise);
            return promise;
        }

        function getCachedImage(fileName) {
            const cached = tierlistImageCache.get(fileName);
            return cached && !(cached instanceof Promise) ? cached : null;
        }

        function preloadTierlistAssets() {
            const assets = [...new Set(getTierlistEntries().map((item) => item.file).filter(Boolean))];
            assets.forEach((fileName) => {
                if (!tierlistImageCache.has(fileName)) {
                    loadAssetImage(fileName);
                }
            });
        }

        function getAvailableCustomKillers() {
            const usedNames = new Set(
                ['S', 'A', 'B', 'C', 'D']
                    .flatMap((tier) => tierlistData.custom[tier].map((item) => item.name))
            );
            return getTierlistEntries().filter((item) => !usedNames.has(item.name));
        }

        function resetCustomTierList() {
            ['S', 'A', 'B', 'C', 'D'].forEach((tier) => {
                tierlistData.custom[tier] = [];
            });
        }

        function getCustomTierSummary() {
            const tiers = ['S', 'A', 'B', 'C', 'D'];
            const total = Object.values(tierlistData.current).flat().length;
            const used = tiers.reduce((sum, tier) => sum + tierlistData.custom[tier].length, 0);
            return {
                used,
                total,
                left: total - used,
                byTier: Object.fromEntries(tiers.map((tier) => [tier, tierlistData.custom[tier].length]))
            };
        }

        function buildCustomTierRow(tierName, entries) {
            const safeEntries = Array.isArray(entries) ? entries : [];
            const emptyText = currentLang === 'en' ? 'Empty' : 'Пусто';
            const removeText = currentLang === 'en' ? 'Remove' : 'Удалить';
            const cells = safeEntries.length ? safeEntries.map((item) => {
                const fileName = String(item.file || '').trim();
                const imagePath = getImageSource(fileName);
                const name = getLocalizedKillerName(item.name || 'Unknown');
                return `
                    <div class="killer-card custom-killer-card" data-name="${item.name}">
                        ${imagePath ? `<img src="${imagePath}" alt="${name}" loading="lazy">` : `<div class="tier-empty">${currentLang === 'en' ? 'No image' : 'Нет изображения'}</div>`}
                        <span>${name}</span>
                        <div class="custom-killer-actions">
                            <button class="custom-killer-remove" data-name="${item.name}" aria-label="${removeText} ${name}" title="${removeText}"><span aria-hidden="true">&times;</span></button>
                        </div>
                    </div>
                `;
            }).join('') : `<div class="tier-empty">${emptyText}</div>`;

            return `
                <div class="tier-row tier-${tierName.toLowerCase()}">
                    <div class="tier-letter">${tierName}</div>
                    <div class="tier-content custom-tier-dropzone" data-tier="${tierName}">
                        ${cells}
                    </div>
                </div>
            `;
        }

        function buildCustomTierPool(entries) {
            const emptyText = currentLang === 'en' ? 'All characters have been placed' : 'Все персонажи уже распределены';
            const cards = entries.map((item) => {
                const name = getLocalizedKillerName(item.name || 'Unknown');
                const imagePath = getImageSource(item.file);
                return `
                    <div class="custom-tier-source-card" data-name="${item.name}">
                        ${imagePath ? `<img src="${imagePath}" alt="${name}" loading="lazy">` : ''}
                        <span>${name}</span>
                    </div>
                `;
            }).join('');

            return `
                <div class="custom-tier-pool">
                    ${cards || `<span class="custom-tier-source-empty">${emptyText}</span>`}
                </div>
            `;
        }

        function loadAssetDataUrl(fileName) {
            const src = getImageSource(fileName);
            return fetch(new URL(src, document.baseURI).href, { cache: 'no-store' })
                .then((response) => {
                    if (!response.ok) throw new Error(`Image request failed: ${response.status}`);
                    return response.blob();
                })
                .then((blob) => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(new Error('Image reading failed'));
                    reader.readAsDataURL(blob);
                }));
        }

        function escapeSvgText(value) {
            return String(value)
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;');
        }

        async function renderCustomTierExportCanvas() {
            const rows = ['S', 'A', 'B', 'C', 'D'];
            const cardWidth = 122;
            const cardHeight = 176;
            const gap = 10;
            const leftLabel = 110;
            const top = 64;
            const maxInRow = Math.max(...rows.map((tier) => tierlistData.custom[tier].length), 1);
            const totalWidth = leftLabel + maxInRow * (cardWidth + gap) + 24;
            const rowHeight = 198;
            const totalHeight = top + rows.length * rowHeight + 22;
            const tierColors = { S: '#e11818', A: '#f64b30', B: '#ff7b00', C: '#f7b100', D: '#f6ca45' };
            const customTitle = String(tierlistData.customTitle || '').trim() || (currentLang === 'en' ? 'My Killer Tier List' : 'Мой тир-лист маньяков');
            const imageEntries = await Promise.all(rows.flatMap((tier) => tierlistData.custom[tier].map(async (item) => ({
                item,
                image: await new Promise((resolve, reject) => {
                    loadAssetDataUrl(item.file).then((dataUrl) => {
                        const image = new Image();
                        image.onload = () => resolve(image);
                        image.onerror = () => reject(new Error('Image decoding failed'));
                        image.src = dataUrl;
                    }).catch(reject);
                })
            }))));
            const imageByItem = new Map(imageEntries.map((entry) => [entry.item, entry.image]));
            const canvas = document.createElement('canvas');
            canvas.width = totalWidth * 2;
            canvas.height = totalHeight * 2;
            const ctx = canvas.getContext('2d');
            ctx.scale(2, 2);
            ctx.fillStyle = '#171722';
            ctx.fillRect(0, 0, totalWidth, totalHeight);
            ctx.fillStyle = '#f3f3f3';
            ctx.font = '700 27px Segoe UI';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(customTitle, 18, 31, totalWidth - 36);
            for (const [rowIndex, tier] of rows.entries()) {
                const tierEntries = tierlistData.custom[tier];
                const rowY = top + rowIndex * rowHeight;
                ctx.fillStyle = tierColors[tier];
                ctx.fillRect(0, rowY, leftLabel, rowHeight - 3);
                ctx.fillStyle = '#fff';
                ctx.font = '700 42px Segoe UI';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(tier, leftLabel / 2, rowY + rowHeight / 2);

                const contentWidth = tierEntries.length * (cardWidth + gap) - gap;
                const startX = leftLabel + 20 + (maxInRow * (cardWidth + gap) - contentWidth) / 2;

                for (const [index, item] of tierEntries.entries()) {
                    const x = startX + index * (cardWidth + gap);
                    const y = rowY + 18;
                    ctx.fillStyle = '#111116';
                    ctx.fillRect(x, y, cardWidth, cardHeight);
                    ctx.strokeStyle = '#252530';
                    ctx.strokeRect(x, y, cardWidth, cardHeight);
                    const image = imageByItem.get(item);
                    if (image) {
                        const imageHeight = 140;
                        const scale = Math.max((cardWidth - 2) / image.width, imageHeight / image.height);
                        const imageWidth = image.width * scale;
                        const drawnHeight = image.height * scale;
                        ctx.save();
                        ctx.beginPath();
                        ctx.rect(x + 1, y + 1, cardWidth - 2, imageHeight);
                        ctx.clip();
                        ctx.drawImage(image, x + (cardWidth - imageWidth) / 2, y + 1 + (imageHeight - drawnHeight) / 2, imageWidth, drawnHeight);
                        ctx.restore();
                    }
                    const label = getLocalizedKillerName(item.name || '').length > 14
                        ? `${getLocalizedKillerName(item.name || '').slice(0, 14)}…`
                        : getLocalizedKillerName(item.name || '');
                    ctx.fillStyle = '#ededf0';
                    ctx.font = '600 13px Segoe UI';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(label, x + cardWidth / 2, y + cardHeight - 17);
                }
            }
            return canvas;
        }

        function triggerDownload(href, filename) {
            const link = document.createElement('a');
            link.href = href;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            requestAnimationFrame(() => {
                link.remove();
            });
        }

        function getTierlistExportPayload() {
            return {
                app: 'DBD-TIERLIST',
                version: 1,
                savedAt: new Date().toISOString(),
                title: String(tierlistData.customTitle || '').trim(),
                tiers: Object.fromEntries(['S', 'A', 'B', 'C', 'D'].map((tier) => [
                    tier,
                    tierlistData.custom[tier].map(({ name, file }) => ({ name, file }))
                ]))
            };
        }

        async function embedTierlistMetadata(webpBlob, payload) {
            const source = new Uint8Array(await webpBlob.arrayBuffer());
            if (source.length < 12 || new TextDecoder().decode(source.slice(0, 4)) !== 'RIFF' || new TextDecoder().decode(source.slice(8, 12)) !== 'WEBP') {
                return webpBlob;
            }

            const metadata = new TextEncoder().encode(JSON.stringify(payload));
            const paddedSize = metadata.length + (metadata.length % 2);
            const chunk = new Uint8Array(8 + paddedSize);
            chunk.set(new TextEncoder().encode('DBDT'), 0);
            new DataView(chunk.buffer).setUint32(4, metadata.length, true);
            chunk.set(metadata, 8);

            const result = new Uint8Array(source.length + chunk.length);
            result.set(source, 0);
            result.set(chunk, source.length);
            new DataView(result.buffer).setUint32(4, result.length - 8, true);
            return new Blob([result], { type: 'image/webp' });
        }

        async function readTierlistMetadata(file) {
            const source = new Uint8Array(await file.arrayBuffer());
            if (source.length < 12 || new TextDecoder().decode(source.slice(0, 4)) !== 'RIFF' || new TextDecoder().decode(source.slice(8, 12)) !== 'WEBP') {
                throw new Error('Not a WebP file');
            }

            const decoder = new TextDecoder();
            for (let offset = 12; offset + 8 <= source.length;) {
                const chunkName = decoder.decode(source.slice(offset, offset + 4));
                const chunkSize = new DataView(source.buffer, source.byteOffset + offset + 4, 4).getUint32(0, true);
                if (chunkName === 'DBDT') {
                    const data = source.slice(offset + 8, offset + 8 + chunkSize);
                    return JSON.parse(decoder.decode(data));
                }
                offset += 8 + chunkSize + (chunkSize % 2);
            }
            throw new Error('Tier-list metadata not found');
        }

        function applyImportedTierlist(imported) {
            if (imported.app !== 'DBD-TIERLIST' || !imported.tiers) {
                throw new Error('Invalid tier-list file');
            }
            const available = new Map(getTierlistEntries().map((item) => [item.name, item]));
            ['S', 'A', 'B', 'C', 'D'].forEach((tier) => {
                const entries = Array.isArray(imported.tiers[tier]) ? imported.tiers[tier] : [];
                tierlistData.custom[tier] = entries
                    .map((entry) => available.get(entry.name))
                    .filter(Boolean)
                    .map((entry) => ({ name: entry.name, file: entry.file }));
            });
                    tierlistData.customTitle = typeof imported.title === 'string' ? imported.title.trim() : '';
            saveSessionState();
            renderTierListPanels();
        }

        function bindCustomTierControls() {
            document.removeEventListener('click', handleTierExportClick);
            let draggedCustomTierName = '';
            let selectedCustomTierName = '';
            let activePointerCard = null;
            let activePointerId = null;
            let activePointerPreview = null;

            const titleInput = document.getElementById('custom-tier-title');
            if (titleInput) {
                titleInput.value = tierlistData.customTitle || '';
                titleInput.addEventListener('input', () => {
                    tierlistData.customTitle = titleInput.value;
                    saveSessionState();
                });
            }

            const moveSelectedEntryToTier = (targetTier) => {
                if (!selectedCustomTierName) return false;
                moveEntryToTier(selectedCustomTierName, targetTier);
                return true;
            };

            const moveEntryToTier = (name, targetTier) => {
                if (!name || !targetTier || !tierlistData.custom[targetTier]) return;
                const sourceTier = ['S', 'A', 'B', 'C', 'D'].find((tier) =>
                    tierlistData.custom[tier].some((item) => item.name === name)
                );
                if (sourceTier === targetTier) return;

                const entry = getTierlistEntries().find((item) => item.name === name);
                if (!entry) return;
                if (sourceTier) {
                    tierlistData.custom[sourceTier] = tierlistData.custom[sourceTier].filter((item) => item.name !== name);
                }
                tierlistData.custom[targetTier].push({ name: entry.name, file: entry.file });
                saveSessionState();
                renderTierListPanels();
            };

            document.querySelectorAll('.custom-tier-source-card, .custom-killer-card').forEach((card) => {
                card.addEventListener('click', (event) => {
                    if (event.target.closest('button')) return;
                    if (card.classList.contains('custom-tier-source-card')) {
                        document.querySelectorAll('.custom-tier-source-card.selected').forEach((item) => item.classList.remove('selected'));
                        selectedCustomTierName = card.dataset.name || '';
                        card.classList.add('selected');
                    }
                });
                card.addEventListener('pointerdown', (event) => {
                    if (event.button !== undefined && event.button !== 0) return;
                    if (event.target.closest('button')) return;
                    draggedCustomTierName = card.dataset.name || '';
                    activePointerCard = card;
                    activePointerId = event.pointerId;
                    activePointerPreview = card.cloneNode(true);
                    activePointerPreview.className = 'custom-tier-drag-preview';
                    activePointerPreview.querySelector('.custom-killer-actions')?.remove();
                    document.body.appendChild(activePointerPreview);
                    activePointerPreview.style.left = `${event.clientX}px`;
                    activePointerPreview.style.top = `${event.clientY}px`;
                    if (card.classList.contains('custom-tier-source-card')) {
                        document.querySelectorAll('.custom-tier-source-card.selected').forEach((item) => item.classList.remove('selected'));
                        selectedCustomTierName = draggedCustomTierName;
                        card.classList.add('selected');
                    }
                    card.classList.add('dragging');
                    card.setPointerCapture?.(event.pointerId);
                    event.preventDefault();
                });
            });

            document.onpointermove = (event) => {
                if (!activePointerCard || event.pointerId !== activePointerId) return;
                event.preventDefault();
                if (activePointerPreview) {
                    activePointerPreview.style.left = `${event.clientX}px`;
                    activePointerPreview.style.top = `${event.clientY}px`;
                }
                const dropTarget = document.elementFromPoint(event.clientX, event.clientY)?.closest('.custom-tier-dropzone');
                document.querySelectorAll('.custom-tier-dropzone').forEach((zone) => zone.classList.toggle('drag-over', zone === dropTarget));
            };

            document.onpointerup = (event) => {
                if (!activePointerCard || event.pointerId !== activePointerId) return;
                const dropTarget = document.elementFromPoint(event.clientX, event.clientY)?.closest('.custom-tier-dropzone');
                if (dropTarget) moveEntryToTier(draggedCustomTierName, dropTarget.dataset.tier);
                activePointerCard.classList.remove('dragging');
                activePointerPreview?.remove();
                document.querySelectorAll('.custom-tier-dropzone').forEach((zone) => zone.classList.remove('drag-over'));
                activePointerCard = null;
                activePointerId = null;
                activePointerPreview = null;
                draggedCustomTierName = '';
            };

            document.querySelectorAll('.custom-tier-dropzone').forEach((dropzone) => {
                dropzone.addEventListener('dragenter', (event) => {
                    event.preventDefault();
                    dropzone.classList.add('drag-over');
                });
                dropzone.addEventListener('dragover', (event) => {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = 'move';
                    dropzone.classList.add('drag-over');

                    const page = document.querySelector('.tierlist-page');
                    if (page) {
                        const edge = 110;
                        if (event.clientY > window.innerHeight - edge) page.scrollTop += 14;
                        if (event.clientY < edge) page.scrollTop -= 14;
                    }
                });
                dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
                dropzone.addEventListener('drop', (event) => {
                    event.preventDefault();
                    dropzone.classList.remove('drag-over');
                    const name = event.dataTransfer.getData('text/plain') || draggedCustomTierName;
                    moveEntryToTier(name, dropzone.dataset.tier);
                });
                dropzone.addEventListener('click', (event) => {
                    if (event.target.closest('button, .custom-killer-card')) return;
                    moveSelectedEntryToTier(dropzone.dataset.tier);
                });
            });

            const resetBtn = document.getElementById('custom-tier-reset');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    ['S', 'A', 'B', 'C', 'D'].forEach((tier) => tierlistData.custom[tier] = []);
                    saveSessionState();
                    renderTierListPanels();
                });
            }

            const loadCurrentBtn = document.getElementById('custom-tier-load-current');
            if (loadCurrentBtn) {
                loadCurrentBtn.addEventListener('click', () => {
                    ['S', 'A', 'B', 'C', 'D'].forEach((tier) => {
                        tierlistData.custom[tier] = [...tierlistData.current[tier]];
                    });
                    saveSessionState();
                    renderTierListPanels();
                });
            }

            const importJsonBtn = document.getElementById('custom-tier-import-json');
            const importJsonFile = document.getElementById('custom-tier-import-file');
            if (importJsonBtn && importJsonFile) {
                importJsonBtn.addEventListener('click', () => importJsonFile.click());
                importJsonFile.addEventListener('change', () => {
                    const file = importJsonFile.files?.[0];
                    if (!file) return;
                    const isWebp = file.type === 'image/webp' || file.name.toLowerCase().endsWith('.webp');
                    const importPromise = isWebp
                        ? readTierlistMetadata(file)
                        : file.text().then((text) => JSON.parse(text));
                    importPromise.then((imported) => {
                        applyImportedTierlist(imported);
                    }).catch(() => {
                        window.alert(currentLang === 'en' ? 'This tier-list file is invalid or has no embedded data.' : 'Файл тир-листа неверный или не содержит встроенных данных.');
                    }).finally(() => {
                        importJsonFile.value = '';
                    });
                });
            }

            const exportHtmlBtn = document.getElementById('custom-tier-export-html');
            if (exportHtmlBtn) {
                exportHtmlBtn.onclick = (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    exportCustomTierImage('webp');
                };
            }

            document.querySelectorAll('.custom-killer-remove').forEach((button) => {
                button.addEventListener('click', () => {
                    const name = button.dataset.name;
                    const targetTier = ['S', 'A', 'B', 'C', 'D'].find((tier) => tierlistData.custom[tier].some((item) => item.name === name));
                    if (!targetTier) return;
                    tierlistData.custom[targetTier] = tierlistData.custom[targetTier].filter((item) => item.name !== name);
                    saveSessionState();
                    renderTierListPanels();
                });
            });
        }

        function refreshCustomTierExportCache() {
            cachedCustomTierExportCanvas = null;
            const hasEntries = ['S', 'A', 'B', 'C', 'D'].some((tier) => tierlistData.custom[tier].length > 0);
            if (!hasEntries) {
                return;
            }

            renderCustomTierExportCanvas().then((canvas) => {
                cachedCustomTierExportCanvas = canvas;
            }).catch(() => {
                cachedCustomTierExportCanvas = null;
            });
        }

        async function exportCustomTierImage(type) {
            try {
                const canvas = await renderCustomTierExportCanvas();
                cachedCustomTierExportCanvas = canvas;

                if (type === 'webp') {
                    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.92));
                    if (!blob) {
                        const pngUrl = canvas.toDataURL('image/png');
                        triggerDownload(pngUrl, 'custom-tierlist.png');
                        return;
                    }
                    let downloadableWebp = blob;
                    try {
                        downloadableWebp = await embedTierlistMetadata(blob, getTierlistExportPayload());
                    } catch (metadataError) {
                    }
                    const url = URL.createObjectURL(downloadableWebp);
                    triggerDownload(url, 'custom-tierlist.webp');
                    setTimeout(() => URL.revokeObjectURL(url), 1000);
                    return;
                }

                const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
                if (!blob) {
                    triggerDownload(canvas.toDataURL('image/png'), 'custom-tierlist.png');
                    return;
                }
                const url = URL.createObjectURL(blob);
                triggerDownload(url, 'custom-tierlist.png');
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            } catch (error) {
                window.alert(currentLang === 'en'
                    ? `The tier list could not be downloaded: ${error.message || error}`
                    : `Не удалось скачать тир-лист: ${error.message || error}`);
            }
        }

        async function handleTierExportClick(event) {
            if (!event || !event.target || !event.target.closest) return;
            const webpTarget = event.target.closest('#custom-tier-export-html');
            if (webpTarget) {
                event.preventDefault();
                event.stopPropagation();
                await exportCustomTierImage('webp');
                return;
            }

        }

        function renderTierListPanels() {
            const currentPanel = document.getElementById('tier-current-panel');
            const customPanel = document.getElementById('tier-custom-panel');

            const tierGuideColors = { S: '#ff3038', A: '#ff5838', B: '#ff8610', C: '#ffc21b', D: '#ffd34c' };
            const tierGuide = i18n[currentLang].tierlistGuide.map(([tier, description]) => `
                <div class="tierlist-guide-item" style="--tier-guide-color:${tierGuideColors[tier]}">
                    <strong>${tier}</strong>
                    <span>${description}</span>
                </div>
            `).join('');
            currentPanel.innerHTML = `<div class="tierlist-guide">${tierGuide}</div><div class="tierlist-box">${['S', 'A', 'B', 'C', 'D'].map((tier) => buildTierRow(tier, tierlistData.current[tier])).join('')}</div>`;

            const available = getAvailableCustomKillers();
            const loadCurrentText = currentLang === 'en' ? 'Load current' : 'Загрузить текущий';
            const resetText = currentLang === 'en' ? 'Reset' : 'Сбросить';
            const exportWebpText = currentLang === 'en' ? 'Download WebP' : 'Скачать webp';
            const exportPngText = currentLang === 'en' ? 'Download PNG' : 'Скачать PNG';
            const titlePlaceholder = currentLang === 'en' ? 'Enter tier-list name...' : 'Введите название тир-листа...';
            customPanel.innerHTML = `
                <div class="custom-tier-toolbar">
                    <div class="custom-tier-controls">
                        <input class="custom-tier-title-input" id="custom-tier-title" type="text" maxlength="80" placeholder="${titlePlaceholder}">
                        ${buildCustomTierPool(available)}
                        <div class="custom-tier-actions">
                            <button class="btn-action" id="custom-tier-load-current">${loadCurrentText}</button>
                            <button class="btn-action" id="custom-tier-reset">${resetText}</button>
                            <button class="btn-action" id="custom-tier-import-json">Импорт WebP</button>
                            <button class="btn-action" id="custom-tier-export-html">${exportWebpText}</button>
                            <input type="file" id="custom-tier-import-file" accept="application/json,image/webp,.webp" hidden>
                        </div>
                    </div>
                </div>
                <div class="tierlist-box">${['S', 'A', 'B', 'C', 'D'].map((tier) => buildCustomTierRow(tier, tierlistData.custom[tier])).join('')}</div>
            `;

            bindCustomTierControls();
            refreshCustomTierExportCache();
        }

        function renderLuckyKillers(filter = '') {
            const list = document.getElementById('lucky-killer-list');
            const count = document.getElementById('lucky-killer-count');
            const search = filter.toLowerCase().trim();
            list.innerHTML = '';

            i18n[currentLang].killers.forEach((killer, index) => {
                if (search && !matchesSearch(killer, search, 'killers', index)) return;
                const item = document.createElement('label');
                item.className = 'lucky-killer-item';
                item.innerHTML = `<input type="checkbox" ${luckySelectedKillers.includes(index) ? 'checked' : ''}><span>${killer}</span>`;
                item.querySelector('input').addEventListener('change', event => {
                    if (event.target.checked) {
                        if (!luckySelectedKillers.includes(index)) luckySelectedKillers.push(index);
                    } else {
                        luckySelectedKillers = luckySelectedKillers.filter(selectedIndex => selectedIndex !== index);
                    }
                    saveSessionState();
                    renderLuckyKillers(document.getElementById('lucky-killer-search').value);
                });
                list.appendChild(item);
            });

            count.textContent = `(${luckySelectedKillers.length}/${i18n[currentLang].killers.length})`;
            saveSessionState();
            if (document.getElementById('killer-wheel')) drawLuckyKillerWheel();
        }

        const luckyCurrencyPrizes = [0, 20000, 60000, 100000, 130000, 160000, 200000, 300000, -50000, -100000, 'Бесплатный закуп', 'Закуп запрещен'];
        const luckyModifiers = ['-1 купленный перк', '+1 перк бесплатно', '+50.000 к банку', 'Играть без перков + улучшений/дополнений', 'Игра без улучшений/дополнений', 'Рандом билд', 'Фулл закуп', 'Худшие перки', 'Цены x2', 'Цены x3', 'Цены x4'];
        const survivorLuckyCurrencyPrizes = [400000, 250000, 180000, 100000, 50000, 35000, 15000];
        const survivorLuckyModifiers = ['+50.000', 'минус 1 купленный перк', 'Любой перк стоит 10к', 'Рандом билд', 'Запрещено бегать', 'плюс 1 перк бесплатно', 'без перков и без предметов', 'Все бесплатно', 'Бесплатный предмет + 1 улучшение бесплатно', 'Цены x2', 'Цены x3', 'Цены x4', 'Предмет превращается в серый', 'Не попадатся на глаза маньяка', 'Хужшие перки', 'Пацифист (спасать любой ценой)', 'В случае поражения стрик сохраняется но вся валюта сгорает', 'Антагонист (сбегать любой ценой)'];
        const survivorLuckyShopItems = [
            { key: 'redItem', name: 'Красный предмет', price: 20000, color: '#db4c4c', category: 'items' },
            { key: 'purpleItem', name: 'Фиолетовый предмет', price: 50000, color: '#8f5de0', category: 'items' },
            { key: 'blueItem', name: 'Синий предмет', price: 30000, color: '#4e8ef7', category: 'items' },
            { key: 'greenItem', name: 'Зеленый предмет', price: 20000, color: '#59c77f', category: 'items' },
            { key: 'grayItem', name: 'Серый предмет', price: 10000, color: '#9fa3ad', category: 'items' },
            { key: 'redUpgrade', name: 'Красное улучшение', price: 100000, color: '#e84d5b', category: 'upgrades' },
            { key: 'purpleUpgrade', name: 'Фиолетовое улучшение', price: 35000, color: '#a768ed', category: 'upgrades' },
            { key: 'blueUpgrade', name: 'Синее улучшение', price: 20000, color: '#4b8df7', category: 'upgrades' },
            { key: 'grayUpgrade', name: 'Серое улучшение', price: 10000, color: '#92929b', category: 'upgrades' },
            { key: 'perk', name: 'Один перк', price: 10000, color: '#f0c75e', category: 'perks' }
        ];
        const luckyShopItems = [
            { key: 'redUpgrade', name: 'Красное улучшение', price: 50000, color: '#e84d5b', category: 'upgrades' },
            { key: 'purpleUpgrade', name: 'Фиолетовое улучшение', price: 30000, color: '#a768ed', category: 'upgrades' },
            { key: 'greenUpgrade', name: 'Зеленое улучшение', price: 15000, color: '#56c784', category: 'upgrades' },
            { key: 'grayUpgrade', name: 'Серое улучшение', price: 10000, color: '#92929b', category: 'upgrades' },
            { key: 'perk', name: 'Один перк', price: 25000, color: '#f0c75e', category: 'perks' },
            { key: 'twoPerks', name: 'Два перка', price: 50000, color: '#e6b84d', category: 'perks' },
            { key: 'threePerks', name: 'Три перка', price: 75000, color: '#d89d38', category: 'perks' },
            { key: 'fourPerks', name: 'Четыре перка', price: 100000, color: '#c9832e', category: 'perks' },
            { key: 'redMemento', name: 'Красное мементо', price: 50000, color: '#ff704d', category: 'mementos' }
        ];
        const luckyPerkAmounts = { perk: 1, twoPerks: 2, threePerks: 3, fourPerks: 4 };
        const defaultLuckyState = { balance: 0, matches: 0, escaped: 0, perkBlocked: false, upgradeBlocked: false, buyBlocked: false, buyFree: false, priceMultiplier: 1, spins: { currency: false, modifier: false, killer: false }, results: { currency: '', modifier: '', killer: '' }, inventory: {} };
        let luckyState = structuredClone(defaultLuckyState);
        let pendingLuckyPurchases = [];
        if (luckyState.buyFree && (!luckyState.spins?.currency || luckyState.results.currency !== 'Бесплатный закуп')) luckyState.buyFree = false;
        const luckyRotations = { currency: 0, modifier: 0, killer: 0 };

        function luckyMoney(value) {
            return `${Number(value).toLocaleString('ru-RU').replace(/\u00a0/g, '.')} FanCoin`;
        }

        function luckyText() {
            return currentLang === 'en' ? {
                author: 'Idea Borrowed: <a href="https://www.youtube.com/@Des4rme" target="_blank" rel="noopener noreferrer">Desarme</a>',
                description: 'Bank, risk and randomness. Spin the wheels, build your loadout and track your progress.',
                rules: 'MATCH RULES',
                matches: 'Matches played',
                escaped: 'Survivors escaped',
                perkBlocked: 'Perks blocked',
                buy: 'Shopping',
                allowed: 'Allowed',
                no: 'No',
                lossNotice: 'After a loss, the bank and all purchases are reset. If 2 or more survivors escape, press "I lost".',
                challengeWheels: 'CHALLENGE WHEELS',
                currencyWheel: 'Currency wheel',
                modifierWheel: 'Modifier wheel',
                killerWheel: 'Killer wheel',
                ready: 'Ready to spin',
                spinCurrency: 'Spin currency',
                spinModifier: 'Spin modifier',
                spinKiller: 'Spin killer',
                wheelNotice: 'Both wheels can be spun once per match. After the result, choose a win or a loss.',
                win: 'I won (+1 match)',
                lose: 'I lost',
                export: 'Download progress',
                import: 'Import file',
                killers: 'KILLERS FOR THE CHALLENGE',
                selectAll: 'Select all',
                deselectAll: 'Deselect all',
                search: 'Search killer...',
                shop: 'BANK SHOP',
                upgrades: 'Upgrades',
                perks: 'Perks',
                mementos: 'Mementos',
                escapedTitle: 'How many survivors were caught?',
                escapedHelp: 'If 0, 1 or 2 were caught, the win counts. With 3 or 4, it is a loss and everything resets.',
                cancel: 'Cancel',
                confirm: 'Confirm',
                messages: ['Nobody escaped? What a legend!', 'One escaped, but the others are still down!', 'Two? A draw, but still a win for the challenge!', 'Well... you tried, but that is a loss.', 'Did you even try? That is a brutal loss!'],
                itemNames: { redUpgrade: 'Red upgrade', purpleUpgrade: 'Purple upgrade', greenUpgrade: 'Green upgrade', grayUpgrade: 'Gray upgrade', perk: 'One perk', twoPerks: 'Two perks', threePerks: 'Three perks', fourPerks: 'Four perks', redMemento: 'Red memento' }
            } : {
                author: 'Идея взята: <a href="https://www.youtube.com/@Des4rme" target="_blank" rel="noopener noreferrer">Desarme</a>',
                description: 'Банк, риск и случайность. Крутите колеса, собирайте билд и фиксируйте прогресс.',
                rules: 'ПРАВИЛА КАТКИ', matches: 'Каток сыграно', escaped: 'Поймано выживших', perkBlocked: 'Перк-блокировка', buy: 'Закуп', allowed: 'Разрешен', no: 'Нет',
                lossNotice: 'При поражении банк и все покупки обнуляются. Если поймано 3 или более выживших, нажмите «Я проиграл».',
                challengeWheels: 'КОЛЕСА ИСПЫТАНИЯ', currencyWheel: 'Колесо валюты', modifierWheel: 'Колесо модификатора', killerWheel: 'Колесо маньяков', ready: 'Готово к вращению', spinCurrency: 'Крутить валюту', spinModifier: 'Крутить модификатор', spinKiller: 'Крутить маньяка',
                wheelNotice: 'Оба колеса можно крутить один раз за катку. После результата выберите победу или поражение.', win: 'Я выиграл (+1 катка)', lose: 'Я проиграл', export: 'Скачать прогресс', import: 'Импортировать файл', killers: 'МАНЬЯКИ ДЛЯ ИСПЫТАНИЯ', selectAll: 'Выбрать всех', deselectAll: 'Убрать всех', search: 'Поиск маньяка...', shop: 'ЗАКУП В БАНКЕ', upgrades: 'Улучшения', perks: 'Перки', mementos: 'Мементо', escapedTitle: 'Сколько сбежало выживших?', escapedHelp: 'Если сбежали 0, 1 или 2 - победа засчитана. При 3 или 4 срабатывает поражение и полный сброс.', cancel: 'Отмена', confirm: 'Подтвердить', messages: ['Никто не сбежал? Вот это крутышка!', 'Один сбежал, зато остальные остались лежать!', 'Двое? Ничья, но для челленджа это тоже победа!', 'Ну... ты старался, но это поражение.', 'Ты вообще старался? Это уже лютый проигрыш!'], itemNames: { redUpgrade: 'Красное улучшение', purpleUpgrade: 'Фиолетовое улучшение', greenUpgrade: 'Зеленое улучшение', grayUpgrade: 'Серое улучшение', perk: 'Один перк', twoPerks: 'Два перка', threePerks: 'Три перка', fourPerks: 'Четыре перка', redMemento: 'Красное мементо' }
            };
        }

        function resetLuckySpins() {
            luckyState.spins = { currency: false, modifier: false, killer: false };
            luckyState.results = { currency: '', modifier: '', killer: '' };
            ['currency', 'modifier', 'killer'].forEach(type => {
                luckyRotations[type] = 0;
                const wheel = document.getElementById(`${type}-wheel`);
                if (wheel) wheel.style.transform = 'rotate(0deg)';
            });
        }

        function resetLuckyBank() {
            luckyState.balance = 0;
            luckyState.inventory = {};
            luckyState.perkBlocked = false;
            luckyState.upgradeBlocked = false;
            luckyState.buyBlocked = false;
            luckyState.buyFree = false;
            luckyState.priceMultiplier = 1;
        }

        function resetLuckyModifiers() {
            luckyState.perkBlocked = false;
            luckyState.upgradeBlocked = false;
            luckyState.buyBlocked = false;
            luckyState.buyFree = false;
            luckyState.priceMultiplier = 1;
        }

        function renderLuckyShop() {
            const shop = document.getElementById('lucky-shop-grid');
            const text = luckyText();
            const categories = [
                { key: 'upgrades', name: text.upgrades },
                { key: 'perks', name: text.perks },
                { key: 'mementos', name: text.mementos }
            ];
            shop.innerHTML = categories.map(category => {
                const items = luckyShopItems.filter(item => item.category === category.key);
                return `<div class="shop-category"><h3 class="shop-category-title">${category.name}</h3><div class="shop-category-items">${items.map(item => `<article class="shop-item" style="--item-color:${item.color}"><h3>${text.itemNames[item.key]}</h3><p>${luckyState.buyFree ? (currentLang === 'en' ? 'Free shopping' : 'Бесплатный закуп') : luckyMoney(item.price * luckyState.priceMultiplier)}</p><button class="btn-action shop-buy" data-shop-key="${item.key}">${currentLang === 'en' ? 'Buy' : 'Купить'}</button></article>`).join('')}</div></div>`;
            }).join('');
            shop.querySelectorAll('.shop-buy').forEach(button => button.addEventListener('click', () => openLuckyPurchaseModal(button.dataset.shopKey)));
        }

        function drawLuckyWheel(type) {
            const options = type === 'currency' ? luckyCurrencyPrizes : luckyModifiers;
            const colors = ['#5d35a4', '#d74d75', '#277f77', '#b77a35', '#443b83', '#9a3f54', '#367d53', '#777477', '#b14b91', '#3d7898', '#8c5b3c'];
            const shortLabels = type === 'currency' ? ['0', '20K', '60K', '100K', '130K', '160K', '200K', '300K', '-50K', '-100K', 'FREE', 'NO BUY'] : ['-1 PERK', '+1 FREE', '+50K', 'NO PERKS', 'NO UPGR.', 'RANDOM', 'FULL BUY', 'WORST', 'X2', 'X3', 'X4'];
            const wheel = document.getElementById(`${type}-wheel`);
            const context = wheel.getContext('2d');
            const center = wheel.width / 2;
            const radius = center - 7;
            const slice = 360 / options.length;
            context.clearRect(0, 0, wheel.width, wheel.height);
            context.save();
            context.translate(center, center);
            options.forEach((_, index) => {
                const start = -Math.PI / 2 + index * (Math.PI * 2 / options.length);
                const end = start + Math.PI * 2 / options.length;
                context.beginPath();
                context.moveTo(0, 0);
                context.arc(0, 0, radius, start, end);
                context.closePath();
                context.fillStyle = colors[index % colors.length];
                context.fill();
                context.strokeStyle = '#0a0a0c';
                context.lineWidth = 3;
                context.stroke();

                const textAngle = start + (end - start) / 2;
                context.save();
                context.rotate(textAngle);
                context.textAlign = 'right';
                context.textBaseline = 'middle';
                context.fillStyle = '#f1edf7';
                context.font = options.length > 10 ? 'bold 14px Segoe UI' : 'bold 16px Segoe UI';
                context.fillText(shortLabels[index], radius - 18, 0);
                context.restore();
            });
            context.beginPath();
            context.arc(0, 0, 34, 0, Math.PI * 2);
            context.fillStyle = '#09090c';
            context.fill();
            context.strokeStyle = '#2b2535';
            context.lineWidth = 4;
            context.stroke();
            context.restore();
        }

        function drawLuckyKillerWheel() {
            const wheel = document.getElementById('killer-wheel');
            const context = wheel.getContext('2d');
            const center = wheel.width / 2;
            const radius = center - 7;
            const options = luckySelectedKillers;
            context.clearRect(0, 0, wheel.width, wheel.height);
            context.save();
            context.translate(center, center);

            if (options.length === 0) {
                context.fillStyle = '#15131b';
                context.beginPath();
                context.arc(0, 0, radius, 0, Math.PI * 2);
                context.fill();
                context.fillStyle = '#9a94a5';
                context.font = 'bold 18px Segoe UI';
                context.textAlign = 'center';
                context.fillText(currentLang === 'en' ? 'Add killers' : 'Добавьте маньяков', 0, 5);
                context.restore();
                return;
            }

            const colors = ['#5d35a4', '#d74d75', '#277f77', '#b77a35', '#443b83', '#9a3f54', '#367d53', '#777477'];
            const slice = (Math.PI * 2) / options.length;
            options.forEach((killerIndex, index) => {
                const start = -Math.PI / 2 + index * slice;
                const end = start + slice;
                context.beginPath();
                context.moveTo(0, 0);
                context.arc(0, 0, radius, start, end);
                context.closePath();
                context.fillStyle = colors[index % colors.length];
                context.fill();
                context.strokeStyle = '#0a0a0c';
                context.lineWidth = 3;
                context.stroke();

                context.save();
                context.rotate(start + slice / 2);
                context.textAlign = 'right';
                context.textBaseline = 'middle';
                context.fillStyle = '#f1edf7';
                const killerName = i18n[currentLang].killers[killerIndex].split(' (')[0].replace(/^The /, '');
                const wheelLabel = options.length > 18 && killerName.length > 6 ? `${killerName.slice(0, 6)}.` : killerName;
                context.font = options.length > 24 ? 'bold 9px Segoe UI' : (options.length > 12 ? 'bold 11px Segoe UI' : 'bold 14px Segoe UI');
                context.fillText(wheelLabel, radius - 12, 0);
                context.restore();
            });
            context.beginPath();
            context.arc(0, 0, 34, 0, Math.PI * 2);
            context.fillStyle = '#09090c';
            context.fill();
            context.strokeStyle = '#2b2535';
            context.lineWidth = 4;
            context.stroke();
            context.fillStyle = '#d8bdff';
            context.font = 'bold 12px Segoe UI';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('LUCKY', 0, 0);
            context.restore();
        }

        const defaultSurvivorLuckyState = {
            balance: 0,
            matches: 0,
            escaped: 0,
            perkBlocked: false,
            itemBlocked: false,
            upgradeBlocked: false,
            buyBlocked: false,
            buyFree: false,
            priceMultiplier: 1,
            spins: { currency: false, modifier: false },
            results: { currency: '', modifier: '' },
            inventory: {}
        };
        let survivorLuckyState = structuredClone(defaultSurvivorLuckyState);
        let survivorLuckyRotations = { currency: 0, modifier: 0 };

        function drawSurvivorLuckyWheel(type) {
            const wheel = document.getElementById(`survivor-${type}-wheel`);
            if (!wheel) return;
            const options = type === 'currency' ? survivorLuckyCurrencyPrizes : survivorLuckyModifiers;
            const colors = ['#6f52d9', '#c94d4d', '#2e8f6b', '#d18a38', '#4f7ce3', '#9d5b9a', '#5aa9ea'];
            const ctx = wheel.getContext('2d');
            const center = wheel.width / 2;
            const radius = center - 8;
            const slice = 360 / options.length;
            ctx.clearRect(0, 0, wheel.width, wheel.height);
            ctx.save();
            ctx.translate(center, center);
            options.forEach((_, index) => {
                const start = -Math.PI / 2 + index * (Math.PI * 2 / options.length);
                const end = start + Math.PI * 2 / options.length;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, radius, start, end);
                ctx.closePath();
                ctx.fillStyle = colors[index % colors.length];
                ctx.fill();
                ctx.strokeStyle = '#0a0a0c';
                ctx.lineWidth = 3;
                ctx.stroke();
                const textAngle = start + (end - start) / 2;
                ctx.save();
                ctx.rotate(textAngle);
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#f1edf7';
                ctx.font = 'bold 12px Segoe UI';
                const label = String(options[index]).slice(0, 12);
                ctx.fillText(label, radius - 16, 0);
                ctx.restore();
            });
            ctx.beginPath();
            ctx.arc(0, 0, 34, 0, Math.PI * 2);
            ctx.fillStyle = '#0c0b10';
            ctx.fill();
            ctx.strokeStyle = '#2b2535';
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.fillStyle = '#d8bdff';
            ctx.font = 'bold 12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(type === 'currency' ? 'FC' : 'MOD', 0, 0);
            ctx.restore();
        }

        function resetSurvivorLuckySpins() {
            survivorLuckyState.spins = { currency: false, modifier: false };
            survivorLuckyState.results = { currency: '', modifier: '' };
            survivorLuckyRotations = { currency: 0, modifier: 0 };
            ['currency', 'modifier'].forEach((type) => {
                const wheel = document.getElementById(`survivor-${type}-wheel`);
                if (wheel) wheel.style.transform = 'rotate(0deg)';
            });
        }

        function renderSurvivorLuckyShop() {
            const shop = document.getElementById('survivor-lucky-shop-grid');
            if (!shop) return;
            const categories = [{ key: 'items', name: 'Предметы' }, { key: 'upgrades', name: 'Улучшения' }, { key: 'perks', name: 'Перки' }];
            shop.innerHTML = categories.map((category) => {
                const items = survivorLuckyShopItems.filter((item) => item.category === category.key);
                return `<div class="shop-category"><h3 class="shop-category-title">${category.name}</h3><div class="shop-category-items">${items.map((item) => `<article class="shop-item" style="--item-color:${item.color}"><h3>${item.name}</h3><p>${luckyMoney(item.price * survivorLuckyState.priceMultiplier)}</p><button class="btn-action shop-buy" data-survivor-shop-key="${item.key}">${currentLang === 'en' ? 'Buy' : 'Купить'}</button></article>`).join('')}</div></div>`;
            }).join('');
            shop.querySelectorAll('.shop-buy').forEach((button) => {
                button.addEventListener('click', () => {
                    const key = button.dataset.survivorShopKey;
                    const item = survivorLuckyShopItems.find((shopItem) => shopItem.key === key);
                    const limit = getSurvivorLuckyPurchaseLimitError(key);
                    if (limit) {
                        const status = document.getElementById('survivor-lucky-status');
                        status.textContent = limit;
                        return;
                    }
                    survivorLuckyState.inventory[key] = (survivorLuckyState.inventory[key] || 0) + 1;
                    survivorLuckyState.balance -= item.price * survivorLuckyState.priceMultiplier;
                    renderSurvivorLuckyState();
                });
            });
        }

        function getSurvivorLuckyPurchaseLimitError(key) {
            const item = survivorLuckyShopItems.find((shopItem) => shopItem.key === key);
            if (!item) return currentLang === 'en' ? 'Unknown item.' : 'Неизвестный предмет.';
            const itemTotal = Object.keys(survivorLuckyState.inventory).filter((k) => k.endsWith('Item') && k !== key).length;
            if (item.category === 'items' && itemTotal >= 1) return currentLang === 'en' ? 'Only 1 item is allowed.' : 'Можно взять только 1 предмет.';
            if (item.category === 'upgrades' && (survivorLuckyState.inventory.redUpgrade || 0) + (survivorLuckyState.inventory.purpleUpgrade || 0) + (survivorLuckyState.inventory.blueUpgrade || 0) + (survivorLuckyState.inventory.grayUpgrade || 0) >= 2) return currentLang === 'en' ? 'Maximum 2 upgrades.' : 'Максимум 2 улучшения.';
            if (survivorLuckyState.balance < item.price * survivorLuckyState.priceMultiplier) return currentLang === 'en' ? 'Not enough FanCoin.' : 'Недостаточно FanCoin.';
            return '';
        }

        function applySurvivorLuckyPrize(prize, type) {
            if (type === 'currency') {
                if (typeof prize === 'number') survivorLuckyState.balance += prize;
                if (prize === 'Бесплатный предмет + 1 улучшение бесплатно') survivorLuckyState.buyFree = true;
                if (prize === 'Все бесплатно') survivorLuckyState.buyFree = true;
                if (prize === 'минус 1 купленный перк') survivorLuckyState.perkBlocked = true;
            }
            if (prize === 'Любой перк стоит 10к') survivorLuckyState.priceMultiplier = 1;
            if (prize === 'Цены x2') survivorLuckyState.priceMultiplier = 2;
            if (prize === 'Цены x3') survivorLuckyState.priceMultiplier = 3;
            if (prize === 'Цены x4') survivorLuckyState.priceMultiplier = 4;
            if (prize === 'плюс 1 перк бесплатно') survivorLuckyState.inventory.perkFree = (survivorLuckyState.inventory.perkFree || 0) + 1;
            if (prize === 'без перков и без предметов') {
                survivorLuckyState.perkBlocked = true;
                survivorLuckyState.itemBlocked = true;
            }
            if (prize === 'Запрещено бегать') survivorLuckyState.buyBlocked = true;
            if (prize === 'Рандом билд') survivorLuckyState.buyBlocked = true;
            if (prize === 'Предмет превращается в серый') survivorLuckyState.itemBlocked = true;
            if (prize === 'Хужшие перки') survivorLuckyState.perkBlocked = true;
            if (prize === 'Пацифист (спасать любой ценой)') survivorLuckyState.buyBlocked = true;
            if (prize === 'Антагонист (сбегать любой ценой)') survivorLuckyState.buyBlocked = true;
        }

        function spinSurvivorLuckyWheel(type) {
            if (survivorLuckyState.spins[type]) return;
            const wheel = document.getElementById(`survivor-${type}-wheel`);
            const options = type === 'currency' ? survivorLuckyCurrencyPrizes : survivorLuckyModifiers;
            const winnerIndex = Math.floor(Math.random() * options.length);
            const result = options[winnerIndex];
            const slice = 360 / options.length;
            const winnerCenter = winnerIndex * slice + slice / 2;
            const currentRotation = survivorLuckyRotations[type];
            const correction = ((-winnerCenter - currentRotation) % 360 + 360) % 360;
            const destination = currentRotation + 5 * 360 + correction;
            survivorLuckyState.spins[type] = true;
            survivorLuckyRotations[type] = destination;
            wheel.style.transform = `rotate(${destination}deg)`;
            setTimeout(() => {
                survivorLuckyState.results[type] = typeof result === 'number' ? luckyMoney(result) : result;
                applySurvivorLuckyPrize(result, type);
                document.getElementById('survivor-lucky-status').textContent = currentLang === 'en' ? 'Result locked. Finish the match and choose the outcome.' : 'Результат зафиксирован. Завершите катку и выберите итог.';
                renderSurvivorLuckyState();
            }, 1750);
        }

        function renderSurvivorLuckyState() {
            document.getElementById('survivor-lucky-balance').textContent = luckyMoney(survivorLuckyState.balance);
            document.getElementById('survivor-matches-count').textContent = survivorLuckyState.matches;
            document.getElementById('survivor-escaped-count').textContent = survivorLuckyState.escaped;
            document.getElementById('survivor-currency-result').textContent = survivorLuckyState.results.currency || 'Готово к вращению';
            document.getElementById('survivor-modifier-result').textContent = survivorLuckyState.results.modifier || 'Готово к вращению';
            document.getElementById('survivor-currency-spin').disabled = survivorLuckyState.spins.currency;
            document.getElementById('survivor-modifier-spin').disabled = survivorLuckyState.spins.modifier;
            document.getElementById('survivor-confirm-win').disabled = !(survivorLuckyState.spins.currency || survivorLuckyState.spins.modifier);
            renderSurvivorLuckyShop();
            saveSessionState();
        }

        function resolveSurvivorLuckyWin() {
            const escaped = Number(document.getElementById('survivor-lucky-escape-count').value || 0);
            survivorLuckyState.matches += 1;
            survivorLuckyState.escaped = escaped;
            survivorLuckyState.balance += escaped <= 2 ? 35000 : 0;
            resetSurvivorLuckySpins();
            document.getElementById('survivor-lucky-status').textContent = currentLang === 'en' ? 'Match resolved. New round available.' : 'Катка завершена. Можно начать новый раунд.';
            renderSurvivorLuckyState();
        }

        function loseSurvivorLuckyMatch() {
            survivorLuckyState.matches = 0;
            survivorLuckyState.escaped = 0;
            survivorLuckyState.balance = 0;
            survivorLuckyState.inventory = {};
            survivorLuckyState.perkBlocked = false;
            survivorLuckyState.itemBlocked = false;
            survivorLuckyState.upgradeBlocked = false;
            survivorLuckyState.buyBlocked = false;
            survivorLuckyState.buyFree = false;
            survivorLuckyState.priceMultiplier = 1;
            resetSurvivorLuckySpins();
            document.getElementById('survivor-lucky-status').textContent = currentLang === 'en' ? 'Loss recorded. Bank reset.' : 'Поражение зафиксировано. Банк сброшен.';
            renderSurvivorLuckyState();
        }

        function exportSurvivorLuckyProgress() {
            const blob = new Blob([JSON.stringify({ app: 'SURVIVOR_LUCKY', version: 1, savedAt: new Date().toISOString(), state: survivorLuckyState }, null, 2)], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'survivor-lucky-progress.json';
            link.click();
            URL.revokeObjectURL(link.href);
        }

        function importSurvivorLuckyProgress(file) {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const imported = JSON.parse(reader.result);
                    if (imported.app !== 'SURVIVOR_LUCKY' || !imported.state) throw new Error('Invalid file');
                    survivorLuckyState = { ...structuredClone(defaultSurvivorLuckyState), ...imported.state, spins: { ...defaultSurvivorLuckyState.spins, ...(imported.state.spins || {}) }, results: { ...defaultSurvivorLuckyState.results, ...(imported.state.results || {}) }, inventory: { ...(imported.state.inventory || {}) } };
                    renderSurvivorLuckyState();
                } catch (error) {
                    document.getElementById('survivor-lucky-status').textContent = currentLang === 'en' ? 'Invalid file.' : 'Неверный файл.';
                }
            };
            reader.readAsText(file);
        }

        document.getElementById('survivor-currency-spin')?.addEventListener('click', () => spinSurvivorLuckyWheel('currency'));
        document.getElementById('survivor-modifier-spin')?.addEventListener('click', () => spinSurvivorLuckyWheel('modifier'));
        document.getElementById('survivor-confirm-win')?.addEventListener('click', resolveSurvivorLuckyWin);
        document.getElementById('survivor-lose-match')?.addEventListener('click', loseSurvivorLuckyMatch);
        document.getElementById('survivor-export-progress')?.addEventListener('click', exportSurvivorLuckyProgress);
        document.getElementById('survivor-import-progress')?.addEventListener('click', () => document.getElementById('survivor-progress-file').click());
        document.getElementById('survivor-progress-file')?.addEventListener('change', (event) => { if (event.target.files[0]) importSurvivorLuckyProgress(event.target.files[0]); event.target.value = ''; });

        drawSurvivorLuckyWheel('currency');
        drawSurvivorLuckyWheel('modifier');
        renderSurvivorLuckyState();

        function renderLuckyState() {
            const text = luckyText();
            document.getElementById('lucky-balance').textContent = luckyMoney(luckyState.balance);
            document.getElementById('matches-count').textContent = luckyState.matches;
            document.getElementById('escaped-count').textContent = luckyState.escaped;
            document.getElementById('perk-status').textContent = luckyState.perkBlocked ? (currentLang === 'en' ? 'BLOCKED' : 'ЗАПРЕЩЕН') : text.no;
            document.getElementById('buy-status').textContent = luckyState.buyBlocked ? (currentLang === 'en' ? 'BLOCKED' : 'ЗАПРЕЩЕН') : text.allowed;
            document.getElementById('currency-result').textContent = luckyState.results.currency || text.ready;
            document.getElementById('modifier-result').textContent = luckyState.results.modifier || text.ready;
            document.getElementById('killer-result').textContent = luckyState.results.killer || text.ready;
            document.getElementById('currency-spin').disabled = luckyState.spins.currency;
            document.getElementById('modifier-spin').disabled = luckyState.spins.modifier;
            document.getElementById('killer-spin').disabled = luckyState.spins.killer || luckySelectedKillers.length === 0;
            document.getElementById('confirm-win').disabled = !(luckyState.spins.currency || luckyState.spins.modifier || luckyState.spins.killer);
            renderLuckyShop();
            document.querySelectorAll('.shop-buy').forEach(button => {
                const item = luckyShopItems.find(shopItem => shopItem.key === button.dataset.shopKey);
                button.disabled = luckyState.buyBlocked || (item.category === 'upgrades' && luckyState.upgradeBlocked) || (item.key === 'perk' && luckyState.perkBlocked);
            });
            saveSessionState();
        }

        function applyLuckyPrize(prize, type) {
            if (type === 'currency') {
                if (typeof prize === 'number') luckyState.balance += prize;
                if (prize === 'Бесплатный закуп') luckyState.buyFree = true;
                if (prize === 'Закуп запрещен') luckyState.buyBlocked = true;
            } else if (prize === '-1 купленный перк') {
                luckyState.perkBlocked = true;
            } else if (prize === '+1 перк бесплатно') {
                luckyState.inventory.perkFree = (luckyState.inventory.perkFree || 0) + 1;
            } else if (prize === '+50.000 к банку') {
                luckyState.balance += 50000;
            } else if (prize === 'Играть без перков + улучшений/дополнений') {
                luckyState.perkBlocked = true;
                luckyState.buyBlocked = true;
            } else if (prize === 'Игра без улучшений/дополнений') {
                luckyState.upgradeBlocked = true;
            } else if (prize === 'Цены x2') {
                luckyState.priceMultiplier = 2;
            } else if (prize === 'Цены x3') {
                luckyState.priceMultiplier = 3;
            } else if (prize === 'Цены x4') {
                luckyState.priceMultiplier = 4;
            }
        }

        function spinLuckyWheel(type) {
            if (luckyState.spins[type]) return;
            const wheel = document.getElementById(`${type}-wheel`);
            const options = type === 'currency' ? luckyCurrencyPrizes : luckyModifiers;
            const winnerIndex = Math.floor(Math.random() * options.length);
            const result = options[winnerIndex];
            const slice = 360 / options.length;
            const winnerCenter = winnerIndex * slice + slice / 2;
            const currentRotation = luckyRotations[type];
            const correction = ((-winnerCenter - currentRotation) % 360 + 360) % 360;
            const destination = currentRotation + 5 * 360 + correction;
            luckyState.spins[type] = true;
            luckyRotations[type] = destination;
            wheel.style.transform = `rotate(${destination}deg)`;
            setTimeout(() => {
                luckyState.results[type] = typeof result === 'number' ? luckyMoney(result) : result;
                applyLuckyPrize(result, type);
                document.getElementById('lucky-status').textContent = currentLang === 'en' ? 'Result locked in. Confirm your win to start the next match.' : 'Результат зафиксирован. Подтвердите победу, чтобы открыть следующую катку.';
                renderLuckyState();
            }, 1750);
        }

        function spinLuckyKillerWheel() {
            if (luckyState.spins.killer || luckySelectedKillers.length === 0) return;
            const wheel = document.getElementById('killer-wheel');
            const winnerIndex = Math.floor(Math.random() * luckySelectedKillers.length);
            const killerIndex = luckySelectedKillers[winnerIndex];
            const slice = 360 / luckySelectedKillers.length;
            const winnerCenter = winnerIndex * slice + slice / 2;
            const currentRotation = luckyRotations.killer;
            const correction = ((-winnerCenter - currentRotation) % 360 + 360) % 360;
            const destination = currentRotation + 5 * 360 + correction;
            luckyState.spins.killer = true;
            luckyRotations.killer = destination;
            wheel.style.transform = `rotate(${destination}deg)`;
            document.getElementById('killer-spin').disabled = true;
            setTimeout(() => {
                luckyState.results.killer = i18n[currentLang].killers[killerIndex];
                document.getElementById('lucky-status').textContent = currentLang === 'en' ? 'Killer selected. Confirm your win to start the next match.' : 'Маньяк выбран. Подтвердите победу, чтобы открыть следующую катку.';
                renderLuckyState();
            }, 1750);
        }

        function getPendingLuckyPurchaseCount(key) {
            return pendingLuckyPurchases.filter(purchaseKey => purchaseKey === key).length;
        }

        function getLuckyPurchaseTotals() {
            const totals = { upgrades: 0, perks: 0, mementos: 0 };
            luckyShopItems.forEach(item => {
                const owned = luckyState.inventory[item.key] || 0;
                if (item.category === 'upgrades') totals.upgrades += owned;
                if (item.category === 'perks') totals.perks += owned * (luckyPerkAmounts[item.key] || 0);
                if (item.category === 'mementos') totals.mementos += owned;
            });
            pendingLuckyPurchases.forEach(key => {
                const item = luckyShopItems.find(shopItem => shopItem.key === key);
                if (!item) return;
                if (item.category === 'upgrades') totals.upgrades++;
                if (item.category === 'perks') totals.perks += luckyPerkAmounts[key] || 0;
                if (item.category === 'mementos') totals.mementos++;
            });
            return totals;
        }

        function getLuckyPurchaseLimitError(key) {
            const item = luckyShopItems.find(shopItem => shopItem.key === key);
            if (!item) return '';
            const totals = getLuckyPurchaseTotals();
            const isEnglish = currentLang === 'en';
            if (item.category === 'upgrades' && luckyState.upgradeBlocked) return isEnglish ? 'Upgrades are blocked.' : 'Улучшения запрещены.';
            if (item.category === 'upgrades' && totals.upgrades >= 2) return isEnglish ? 'Only 2 upgrades are allowed.' : 'Можно взять максимум 2 улучшения.';
            if (item.category === 'perks' && totals.perks + (luckyPerkAmounts[key] || 0) > 4) return isEnglish ? 'Only 4 perks are allowed.' : 'Можно взять максимум 4 перка.';
            if (item.category === 'mementos' && totals.mementos >= 1) return isEnglish ? 'Only 1 memento is allowed.' : 'Можно взять максимум 1 мементо.';
            return '';
        }

        function getPendingLuckyPurchaseCost() {
            let total = 0;
            let freePerks = luckyState.inventory.perkFree || 0;
            pendingLuckyPurchases.forEach(key => {
                const item = luckyShopItems.find(shopItem => shopItem.key === key);
                if (!item || luckyState.buyFree) return;
                if (key === 'perk' && freePerks > 0) {
                    freePerks--;
                    return;
                }
                total += item.price * luckyState.priceMultiplier;
            });
            return total;
        }

        function renderLuckyPurchaseModal() {
            const list = document.getElementById('lucky-purchase-list');
            const error = document.getElementById('lucky-purchase-error');
            const grouped = luckyShopItems.filter(item => getPendingLuckyPurchaseCount(item.key) > 0);
            const isEnglish = currentLang === 'en';
            list.innerHTML = grouped.length ? grouped.map(item => {
                const count = getPendingLuckyPurchaseCount(item.key);
                const price = luckyState.buyFree ? (isEnglish ? 'Free' : 'Бесплатно') : luckyMoney(item.price * luckyState.priceMultiplier);
                return `<div class="lucky-purchase-row"><strong>${luckyText().itemNames[item.key]}</strong><span>${price}</span><button class="btn-action lucky-purchase-step" data-purchase-action="remove" data-shop-key="${item.key}">−</button><span class="lucky-purchase-quantity">${count}</span><button class="btn-action lucky-purchase-step" data-purchase-action="add" data-shop-key="${item.key}">+</button><button class="btn-action lucky-purchase-remove" data-purchase-action="clear" data-shop-key="${item.key}">${isEnglish ? 'Remove' : 'Убрать'}</button></div>`;
            }).join('') : `<p>${isEnglish ? 'No items selected.' : 'Покупки не выбраны.'}</p>`;
            const total = getPendingLuckyPurchaseCost();
            const remaining = luckyState.buyFree ? luckyState.balance : luckyState.balance - total;
            document.getElementById('lucky-purchase-total').textContent = luckyMoney(total);
            document.getElementById('lucky-purchase-remaining').innerHTML = `${isEnglish ? 'Remaining' : 'Останется'}: <strong>${luckyMoney(remaining)}</strong>`;
            error.textContent = '';
            list.querySelectorAll('[data-purchase-action]').forEach(button => button.addEventListener('click', () => {
                const key = button.dataset.shopKey;
                const action = button.dataset.purchaseAction;
                let limitError = '';
                if (action === 'add') {
                    limitError = getLuckyPurchaseLimitError(key);
                    if (!limitError) pendingLuckyPurchases.push(key);
                }
                if (action === 'remove') {
                    const index = pendingLuckyPurchases.lastIndexOf(key);
                    if (index >= 0) pendingLuckyPurchases.splice(index, 1);
                }
                if (action === 'clear') pendingLuckyPurchases = pendingLuckyPurchases.filter(purchaseKey => purchaseKey !== key);
                renderLuckyPurchaseModal();
                if (limitError) document.getElementById('lucky-purchase-error').textContent = limitError;
            }));
        }

        function openLuckyPurchaseModal(key) {
            const limitError = getLuckyPurchaseLimitError(key);
            if (!limitError) pendingLuckyPurchases.push(key);
            document.getElementById('lucky-purchase-title').textContent = currentLang === 'en' ? 'Choose purchases' : 'Выбор покупок';
            document.getElementById('lucky-purchase-help').textContent = currentLang === 'en' ? 'Add or remove items, then confirm the order.' : 'Добавьте или уберите предметы и подтвердите заказ.';
            document.getElementById('lucky-purchase-total-label').textContent = currentLang === 'en' ? 'Total' : 'Итого';
            document.getElementById('cancel-purchases').textContent = currentLang === 'en' ? 'Cancel' : 'Отмена';
            document.getElementById('confirm-purchases').textContent = currentLang === 'en' ? 'Confirm purchases' : 'Подтвердить покупки';
            renderLuckyPurchaseModal();
            if (limitError) document.getElementById('lucky-purchase-error').textContent = limitError;
            document.getElementById('lucky-purchase-modal').classList.add('open');
        }

        function cancelLuckyPurchases() {
            pendingLuckyPurchases = [];
            document.getElementById('lucky-purchase-modal').classList.remove('open');
        }

        function confirmLuckyPurchases() {
            if (!pendingLuckyPurchases.length) return;
            const totals = getLuckyPurchaseTotals();
            const total = getPendingLuckyPurchaseCost();
            const hasBlockedPerk = luckyState.perkBlocked && pendingLuckyPurchases.includes('perk');
            const hasBlockedUpgrade = luckyState.upgradeBlocked && pendingLuckyPurchases.some(key => luckyShopItems.find(item => item.key === key)?.category === 'upgrades');
            let purchaseError = '';
            if (totals.upgrades > 2) purchaseError = currentLang === 'en' ? 'Only 2 upgrades are allowed.' : 'Можно взять максимум 2 улучшения.';
            if (totals.perks > 4) purchaseError = currentLang === 'en' ? 'Only 4 perks are allowed.' : 'Можно взять максимум 4 перка.';
            if (totals.mementos > 1) purchaseError = currentLang === 'en' ? 'Only 1 memento is allowed.' : 'Можно взять максимум 1 мементо.';
            if (luckyState.buyBlocked || hasBlockedPerk) purchaseError = currentLang === 'en' ? 'Shopping is blocked.' : 'Закуп запрещен.';
            if (hasBlockedUpgrade) purchaseError = currentLang === 'en' ? 'Upgrades are blocked.' : 'Улучшения запрещены.';
            if (!purchaseError && !luckyState.buyFree && total > luckyState.balance) purchaseError = currentLang === 'en' ? 'Not enough FanCoin for this order.' : 'Недостаточно FanCoin для этой покупки.';
            if (purchaseError) {
                document.getElementById('lucky-purchase-error').textContent = purchaseError;
                return;
            }
            let freePerks = luckyState.inventory.perkFree || 0;
            pendingLuckyPurchases.forEach(key => {
                if (key === 'perk' && freePerks > 0) {
                    freePerks--;
                }
                luckyState.inventory[key] = (luckyState.inventory[key] || 0) + 1;
            });
            luckyState.inventory.perkFree = freePerks;
            if (!luckyState.buyFree) luckyState.balance -= total;
            pendingLuckyPurchases = [];
            document.getElementById('lucky-purchase-modal').classList.remove('open');
            renderLuckyState();
        }

        function completeLuckyRound() {
            luckyState.matches++;
            const escaped = getEscapedCount();
            luckyState.escaped = escaped;
            const escapeReward = [30000, 20000, 10000][escaped] || 0;
            luckyState.balance += escapeReward;
            resetLuckySpins();
            resetLuckyModifiers();
            document.getElementById('lucky-match-modal').classList.remove('open');
            document.getElementById('lucky-status').textContent = currentLang === 'en'
                ? `New match started. Both wheels are available again. Escape bonus: +${luckyMoney(escapeReward)}.`
                : `Новая катка открыта. Оба колеса снова доступны. Бонус за пойманных: +${luckyMoney(escapeReward)}.`;
            renderLuckyState();
        }

        function loseLuckyMatch(escaped = 0) {
            luckyState.matches = 0;
            luckyState.escaped = 0;
            resetLuckyBank();
            resetLuckySpins();
            document.getElementById('lucky-match-modal').classList.remove('open');
            document.getElementById('lucky-status').textContent = currentLang === 'en' ? 'Loss recorded. The bank, purchases and effects were reset.' : 'Поражение зафиксировано. Банк, закуп и эффекты обнулены.';
            renderLuckyState();
        }

        function openLuckyWinDialog() {
            setEscapedCount(0);
            document.getElementById('lucky-match-modal').classList.add('open');
            document.querySelector('.escape-option.active').focus();
        }

        function getEscapedCount() {
            return Number(document.getElementById('lucky-escaped-input').dataset.value) || 0;
        }

        function setEscapedCount(value) {
            const input = document.getElementById('lucky-escaped-input');
            const messages = luckyText().messages;
            input.dataset.value = String(value);
            input.querySelectorAll('.escape-option').forEach(button => {
                button.classList.toggle('active', button.dataset.value === String(value));
            });
            document.getElementById('escape-message').textContent = messages[value];
            saveSessionState();
        }

        function resolveLuckyWin() {
            const escaped = getEscapedCount();
            if (escaped > 2) {
                loseLuckyMatch(escaped);
            } else {
                completeLuckyRound();
            }
        }

        function exportLuckyProgress() {
            const blob = new Blob([JSON.stringify({ app: 'LUCKY', version: 1, savedAt: new Date().toISOString(), state: luckyState }, null, 2)], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'lucky-progress.json';
            link.click();
            URL.revokeObjectURL(link.href);
        }

        function importLuckyProgress(file) {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const imported = JSON.parse(reader.result);
                    if (imported.app !== 'LUCKY' || !imported.state) throw new Error('Invalid file');
                    luckyState = { ...structuredClone(defaultLuckyState), ...imported.state, spins: { ...defaultLuckyState.spins, ...imported.state.spins }, results: { ...defaultLuckyState.results, ...imported.state.results }, inventory: { ...imported.state.inventory } };
                    document.getElementById('lucky-status').textContent = 'Прогресс успешно импортирован.';
                    renderLuckyState();
                } catch (error) {
                    document.getElementById('lucky-status').textContent = currentLang === 'en' ? 'Could not import this progress file.' : 'Не удалось импортировать этот файл прогресса.';
                }
            };
            reader.readAsText(file);
        }

        document.getElementById('currency-spin').addEventListener('click', () => spinLuckyWheel('currency'));
        document.getElementById('modifier-spin').addEventListener('click', () => spinLuckyWheel('modifier'));
        document.getElementById('killer-spin').addEventListener('click', spinLuckyKillerWheel);
        document.getElementById('confirm-win').addEventListener('click', openLuckyWinDialog);
        document.getElementById('lose-match').addEventListener('click', loseLuckyMatch);
        document.getElementById('cancel-win').addEventListener('click', () => document.getElementById('lucky-match-modal').classList.remove('open'));
        document.getElementById('confirm-win-result').addEventListener('click', resolveLuckyWin);
        document.querySelectorAll('.escape-option').forEach(button => {
            button.addEventListener('click', () => setEscapedCount(button.dataset.value));
        });
        document.getElementById('export-progress').addEventListener('click', exportLuckyProgress);
        document.getElementById('import-progress').addEventListener('click', () => document.getElementById('progress-file').click());
        document.getElementById('progress-file').addEventListener('change', event => { if (event.target.files[0]) importLuckyProgress(event.target.files[0]); event.target.value = ''; });
        document.getElementById('cancel-purchases').addEventListener('click', cancelLuckyPurchases);
        document.getElementById('confirm-purchases').addEventListener('click', confirmLuckyPurchases);
        document.getElementById('lucky-killer-search').addEventListener('input', event => renderLuckyKillers(event.target.value));
        document.getElementById('lucky-select-all-killers').addEventListener('click', () => {
            luckySelectedKillers = Array.from(Array(i18n.ru.killers.length).keys());
            renderLuckyKillers(document.getElementById('lucky-killer-search').value);
        });
        document.getElementById('lucky-deselect-all-killers').addEventListener('click', () => {
            luckySelectedKillers = [];
            renderLuckyKillers(document.getElementById('lucky-killer-search').value);
        });
        restoreSessionState();
        renderLuckyShop();
        drawLuckyWheel('currency');
        drawLuckyWheel('modifier');
        drawLuckyKillerWheel();
        renderLuckyState();

        function initMode(mode, resetSelection = false) {
            currentMode = mode;

            if (resetSelection) {
                temporarilyExcludedIndex = null;
                selectedIndicesByMode[mode] = getDefaultSelection(mode);
            } else if (!Array.isArray(selectedIndicesByMode[mode])) {
                selectedIndicesByMode[mode] = getDefaultSelection(mode);
            }

            selectedIndices = getSavedSelection(mode);
            renderEntityList(searchInput.value);
            drawMainWheel();
        }

        function getDefaultSelection(mode) {
            return Array.from(Array(i18n.ru[mode].length).keys());
        }

        function getEscapeRate(scope, mode = currentEscapeMode) {
            const stats = escapeTracker[mode][scope];
            const total = stats.escaped + stats.failed;
            return total ? Math.round((stats.escaped / total) * 100) : 0;
        }

        function getEscapeCountdownTarget() {
            if (currentLang === 'ru') {
                return {
                    date: new Date(Date.UTC(2026, 8, 29, 15, 0, 0)),
                    timeZone: 'Europe/Moscow'
                };
            }

            const localTarget = new Date(2026, 8, 29, 18, 0, 0);
            return {
                date: localTarget,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || undefined
            };
        }

        function getEscapeCountdownTimeZoneLabel(timeZone) {
            return new Intl.DateTimeFormat(currentLang === 'ru' ? 'ru-RU' : 'en-US', {
                timeZone,
                timeZoneName: 'short'
            }).formatToParts(new Date()).find(part => part.type === 'timeZoneName')?.value || timeZone;
        }

        function updateEscapeModeAvailability() {
            const modeButton = document.querySelector('[data-escape-mode="2vs8"]');
            const isAvailable = getEscapeCountdownTarget().date.getTime() > Date.now();

            modeButton.hidden = !isAvailable;
            modeButton.disabled = !isAvailable;
            modeButton.setAttribute('aria-hidden', String(!isAvailable));

            if (!isAvailable && currentEscapeMode === '2vs8') {
                currentEscapeMode = '1vs4';
                return true;
            }

            return false;
        }

        function renderEscapeCountdown() {
            const countdown = document.getElementById('escape-countdown');
            const modeChanged = updateEscapeModeAvailability();
            if (modeChanged) {
                renderEscapeTracker();
                return;
            }
            if (currentEscapeMode !== '2vs8') {
                countdown.classList.remove('visible');
                return;
            }

            const target = getEscapeCountdownTarget();
            const remaining = Math.max(0, target.date.getTime() - Date.now());
            const totalSeconds = Math.floor(remaining / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            const pad = value => String(value).padStart(2, '0');
            const daySuffix = currentLang === 'ru' ? 'д' : 'd';
            const targetDate = new Intl.DateTimeFormat(currentLang === 'ru' ? 'ru-RU' : 'en-US', {
                dateStyle: 'long',
                timeStyle: 'short',
                timeZone: target.timeZone
            }).format(target.date);
            const timeZoneLabel = getEscapeCountdownTimeZoneLabel(target.timeZone);

            document.getElementById('escape-countdown-label').textContent = i18n[currentLang].escapeCountdownLabel;
            document.getElementById('escape-countdown-value').textContent = remaining
                ? `${days}${daySuffix} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
                : i18n[currentLang].escapeCountdownFinished;
            document.getElementById('escape-countdown-target').textContent = `${i18n[currentLang].escapeCountdownTarget} (${targetDate}, ${timeZoneLabel})`;
            countdown.classList.add('visible');
        }

        function renderEscapeTracker() {
            const modeStats = escapeTracker[currentEscapeMode];

            document.getElementById('self-escaped-count').textContent = modeStats.self.escaped;
            document.getElementById('self-failed-count').textContent = modeStats.self.failed;
            document.getElementById('team-escaped-count').textContent = modeStats.team.escaped;
            document.getElementById('team-failed-count').textContent = modeStats.team.failed;
            document.getElementById('self-escape-rate').textContent = `${getEscapeRate('self')}%`;
            document.getElementById('team-escape-rate').textContent = `${getEscapeRate('team')}%`;
            document.querySelectorAll('.escape-mode-btn').forEach(button => {
                button.classList.toggle('active', button.dataset.escapeMode === currentEscapeMode);
            });
            renderEscapeCountdown();
            saveSessionState();
        }

        function resetEscapeTracker(scope, mode = currentEscapeMode) {
            if (scope === 'self' || scope === 'all') {
                escapeTracker[mode].self.escaped = 0;
                escapeTracker[mode].self.failed = 0;
                escapeTracker[mode].self.caught = 0;
            }
            if (scope === 'team' || scope === 'all') {
                escapeTracker[mode].team.escaped = 0;
                escapeTracker[mode].team.failed = 0;
                escapeTracker[mode].team.caught = 0;
            }
            renderEscapeTracker();
        }

        function downloadStatsPayload(scope = 'all', mode = currentEscapeMode) {
            const payload = {
                savedAt: new Date().toISOString(),
                mode,
                scope,
                stats: scope === 'all'
                    ? { '1vs4': escapeTracker['1vs4'], '2vs8': escapeTracker['2vs8'] }
                    : { [scope]: escapeTracker[mode][scope] },
                rates: scope === 'all'
                    ? {
                        '1vs4': { self: `${getEscapeRate('self', '1vs4')}%`, team: `${getEscapeRate('team', '1vs4')}%` },
                        '2vs8': { self: `${getEscapeRate('self', '2vs8')}%`, team: `${getEscapeRate('team', '2vs8')}%` }
                    }
                    : {
                        self: `${getEscapeRate('self', mode)}%`,
                        team: `${getEscapeRate('team', mode)}%`
                    }
            };
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = scope === 'all' ? `dbd-escape-stats-${mode}.json` : `dbd-escape-stats-${mode}-${scope}.json`;
            link.click();
            URL.revokeObjectURL(url);
        }

        function saveSessionState() {
            selectedIndicesByMode = {
                killers: Array.isArray(selectedIndicesByMode?.killers) ? [...selectedIndicesByMode.killers] : getSavedSelection('killers'),
                survivors: Array.isArray(selectedIndicesByMode?.survivors) ? [...selectedIndicesByMode.survivors] : getSavedSelection('survivors')
            };
            if (currentMode === 'killers') {
                selectedIndicesByMode.killers = [...selectedIndices];
            } else if (currentMode === 'survivors') {
                selectedIndicesByMode.survivors = [...selectedIndices];
            }

            const payload = {
                currentLang,
                currentMode,
                currentEscapeMode,
                activeTab,
                selectedIndices,
                selectedIndicesByMode: {
                    killers: [...selectedIndicesByMode.killers],
                    survivors: [...selectedIndicesByMode.survivors]
                },
                tierlistData: {
                    customTitle: tierlistData.customTitle,
                    custom: {
                        S: [...tierlistData.custom.S],
                        A: [...tierlistData.custom.A],
                        B: [...tierlistData.custom.B],
                        C: [...tierlistData.custom.C],
                        D: [...tierlistData.custom.D]
                    }
                },
                temporarilyExcludedIndex,
                removeWinnerToggle: removeWinnerToggle.checked,
                luckySelectedKillers,
                escapeTracker: {
                    '1vs4': {
                        self: { ...escapeTracker['1vs4'].self },
                        team: { ...escapeTracker['1vs4'].team }
                    },
                    '2vs8': {
                        self: { ...escapeTracker['2vs8'].self },
                        team: { ...escapeTracker['2vs8'].team }
                    }
                },
                luckyState: {
                    ...structuredClone(defaultLuckyState),
                    ...luckyState,
                    spins: { ...defaultLuckyState.spins, ...(luckyState?.spins || {}) },
                    results: { ...defaultLuckyState.results, ...(luckyState?.results || {}) },
                    inventory: { ...(luckyState?.inventory || {}) }
                }
            };
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(payload));
        }

        function restoreSessionState() {
            const raw = sessionStorage.getItem(sessionStorageKey);
            if (!raw) return;

            try {
                const state = JSON.parse(raw);
                sessionStateWasRecovered = true;
                if (state.currentLang) currentLang = state.currentLang;
                if (state.currentMode) currentMode = state.currentMode;
                if (state.currentEscapeMode && escapeTracker[state.currentEscapeMode]) currentEscapeMode = state.currentEscapeMode;
                if (state.activeTab) activeTab = state.activeTab;
                if (state.selectedIndicesByMode) {
                    selectedIndicesByMode = {
                        killers: Array.isArray(state.selectedIndicesByMode.killers) ? [...state.selectedIndicesByMode.killers] : getSavedSelection('killers'),
                        survivors: Array.isArray(state.selectedIndicesByMode.survivors) ? [...state.selectedIndicesByMode.survivors] : getSavedSelection('survivors')
                    };
                }
                if (Array.isArray(state.selectedIndices)) selectedIndices = state.selectedIndices;
                if (!Array.isArray(selectedIndicesByMode?.[currentMode]) || selectedIndicesByMode[currentMode].length === 0) {
                    selectedIndicesByMode[currentMode] = getSavedSelection(currentMode);
                }
                selectedIndices = getSavedSelection(currentMode);
                if (state.temporarilyExcludedIndex !== undefined) temporarilyExcludedIndex = state.temporarilyExcludedIndex;
                if (state.tierlistData && state.tierlistData.custom) {
                    if (typeof state.tierlistData.customTitle === 'string') {
                        tierlistData.customTitle = state.tierlistData.customTitle;
                    }
                    ['S', 'A', 'B', 'C', 'D'].forEach((tier) => {
                        tierlistData.custom[tier] = Array.isArray(state.tierlistData.custom[tier]) ? [...state.tierlistData.custom[tier]] : [];
                    });
                }
                if (state.removeWinnerToggle !== undefined) removeWinnerToggle.checked = Boolean(state.removeWinnerToggle);
                if (Array.isArray(state.luckySelectedKillers)) luckySelectedKillers = state.luckySelectedKillers;
                if (state.escapeTracker) {
                    if (state.escapeTracker['1vs4']) {
                        escapeTracker['1vs4'] = {
                            self: { escaped: 0, failed: 0, caught: 0, ...(escapeTracker['1vs4'].self || {}), ...(state.escapeTracker['1vs4'].self || {}) },
                            team: { escaped: 0, failed: 0, caught: 0, ...(escapeTracker['1vs4'].team || {}), ...(state.escapeTracker['1vs4'].team || {}) }
                        };
                    }
                    if (state.escapeTracker['2vs8']) {
                        escapeTracker['2vs8'] = {
                            self: { escaped: 0, failed: 0, caught: 0, ...(escapeTracker['2vs8'].self || {}), ...(state.escapeTracker['2vs8'].self || {}) },
                            team: { escaped: 0, failed: 0, caught: 0, ...(escapeTracker['2vs8'].team || {}), ...(state.escapeTracker['2vs8'].team || {}) }
                        };
                    }
                }
                if (state.luckyState) {
                    luckyState = {
                        ...structuredClone(defaultLuckyState),
                        ...state.luckyState,
                        spins: { ...defaultLuckyState.spins, ...(state.luckyState.spins || {}) },
                        results: { ...defaultLuckyState.results, ...(state.luckyState.results || {}) },
                        inventory: { ...(state.luckyState.inventory || {}) }
                    };
                }
            } catch (error) {
                console.warn('Failed to restore session state', error);
            }
        }

        function setLanguage(lang) {
            currentLang = lang;
            document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
            document.getElementById('lang-en').classList.toggle('active', lang === 'en');

            document.getElementById('tab-home-btn').textContent = i18n[lang].tabHome;
            document.getElementById('tab-wheel-btn').textContent = i18n[lang].tabWheel;
            document.getElementById('tab-escapes-btn').textContent = i18n[lang].tabEscapes;
            document.getElementById('tab-tierlist-btn').textContent = i18n[lang].tabTierlist;
            document.getElementById('tab-challenges-btn').textContent = i18n[lang].tabChallenges;
            const mainChallengeButtons = document.querySelectorAll('.challenge-tab-btn');
            if (mainChallengeButtons.length >= 2) {
                mainChallengeButtons[0].textContent = i18n[lang].challengeKillersTab;
                mainChallengeButtons[1].textContent = i18n[lang].challengeSurvivorsTab;
            }
            const killerSubtabs = document.querySelectorAll('.challenge-subtab-btn');
            if (killerSubtabs.length >= 2) {
                killerSubtabs[0].textContent = 'LUCKY';
                killerSubtabs[1].textContent = lang === 'en' ? 'In development' : 'В разработке';
            }
            document.getElementById('tierlist-title').textContent = i18n[lang].tierlistTitle;
            document.querySelectorAll('.tierlist-subtab-btn')[0].textContent = i18n[lang].tierlistCurrent;
            document.querySelectorAll('.tierlist-subtab-btn')[1].textContent = i18n[lang].tierlistCustom;
            document.getElementById('tierlist-source-text').textContent = i18n[lang].tierlistSource;
            document.getElementById('download-escape-stats').textContent = lang === 'en' ? 'Download all stats' : 'Скачать все показатели';
            document.querySelectorAll('.download-btn').forEach(button => {
                button.textContent = lang === 'en' ? 'Download stats' : 'Скачать показатель';
            });

            document.getElementById('home-hero-title').textContent = i18n[lang].homeHeroTitle;
            document.getElementById('home-hero-desc').textContent = i18n[lang].homeHeroDesc;
            document.getElementById('feature-1-title').textContent = i18n[lang].feature1Title;
            document.getElementById('feature-1-desc').textContent = i18n[lang].feature1Desc;
            document.getElementById('feature-2-title').textContent = i18n[lang].feature2Title;
            document.getElementById('feature-2-desc').textContent = i18n[lang].feature2Desc;
            document.getElementById('feature-3-title').textContent = i18n[lang].feature3Title;
            document.getElementById('feature-3-desc').textContent = i18n[lang].feature3Desc;
            document.getElementById('feature-4-title').textContent = i18n[lang].feature4Title;
            document.getElementById('feature-4-desc').textContent = i18n[lang].feature4Desc;
            document.getElementById('home-stat-tools').textContent = i18n[lang].homeStatTools;
            document.getElementById('home-stat-language').textContent = i18n[lang].homeStatLanguage;
            document.getElementById('home-stat-variations').textContent = i18n[lang].homeStatVariations;
            document.getElementById('home-footer-note').textContent = i18n[lang].homeFooter;

            document.getElementById('escapes-title').textContent = i18n[lang].escapeHeader;
            document.getElementById('escapes-description').textContent = i18n[lang].escapeDescription;
            document.getElementById('escape-self-title').innerHTML = '<span>01</span> ' + i18n[lang].escapeSelfTitle;
            document.getElementById('self-escaped-label').textContent = i18n[lang].escapeSelfEscaped;
            document.getElementById('self-failed-label').textContent = i18n[lang].escapeSelfFailed;
            document.getElementById('self-escape-rate-label').textContent = i18n[lang].escapePercent;
            document.getElementById('self-escaped-btn').textContent = i18n[lang].escapeSelfActionEscaped;
            document.getElementById('self-failed-btn').textContent = i18n[lang].escapeSelfActionFailed;
            document.getElementById('self-reset-btn').textContent = i18n[lang].escapeReset;
            document.getElementById('self-download-btn').textContent = i18n[lang].escapeDownload;
            document.getElementById('escape-team-title').innerHTML = '<span>02</span> ' + i18n[lang].escapeTeamTitle;
            document.getElementById('team-escaped-label').textContent = i18n[lang].escapeTeamEscaped;
            document.getElementById('team-failed-label').textContent = i18n[lang].escapeTeamFailed;
            document.getElementById('team-escape-rate-label').textContent = i18n[lang].escapePercent;
            document.getElementById('team-escaped-btn').textContent = i18n[lang].escapeTeamActionEscaped;
            document.getElementById('team-failed-btn').textContent = i18n[lang].escapeTeamActionFailed;
            document.getElementById('team-reset-btn').textContent = i18n[lang].escapeReset;
            document.getElementById('team-download-btn').textContent = i18n[lang].escapeDownload;

            document.getElementById('subtab-killers').textContent = i18n[lang].killersSubtab;
            document.getElementById('subtab-survivors').textContent = i18n[lang].survivorsSubtab;
            document.getElementById('select-all').textContent = i18n[lang].selectAll;
            document.getElementById('deselect-all').textContent = i18n[lang].deselectAll;
            document.getElementById('search').placeholder = i18n[lang].searchPlaceholder;
            spinMainBtn.textContent = i18n[lang].spinMainBtn;
            document.getElementById('modal-subtitle').textContent = i18n[lang].modalSubtitle;
            applyLuckyLanguage();

            renderEntityList(searchInput.value);
            renderLuckyKillers(document.getElementById('lucky-killer-search').value);
            renderTierListPanels();
            drawMainWheel();
        }

        function applyLuckyLanguage() {
            const text = luckyText();
            const panelHeadings = document.querySelectorAll('#lucky-challenge-panel .lucky-panel h2');
            const wheelCards = document.querySelectorAll('#lucky-challenge-panel .lucky-wheel-card h3');
            const luckyButtons = document.querySelectorAll('#lucky-challenge-panel .lucky-tools .btn-action');
            const escapeButtons = document.querySelectorAll('.lucky-match-dialog-actions .btn-action');
            document.querySelector('.lucky-hero p:not(.lucky-author)').textContent = text.description;
            document.querySelector('.lucky-author').innerHTML = text.author;
            panelHeadings[0].innerHTML = `<span>01</span> ${text.rules}`;
            panelHeadings[1].innerHTML = `<span>02</span> ${text.challengeWheels}`;
            panelHeadings[2].innerHTML = `<span>03</span> ${text.killers} <span class="lucky-killer-count" id="lucky-killer-count">(${luckySelectedKillers.length}/${i18n[currentLang].killers.length})</span>`;
            panelHeadings[3].innerHTML = `<span>04</span> ${text.shop}`;
            document.querySelectorAll('#lucky-challenge-panel .lucky-list label')[0].childNodes[0].textContent = `${text.matches} `;
            document.querySelectorAll('#lucky-challenge-panel .lucky-list label')[1].childNodes[0].textContent = `${text.escaped} `;
            document.querySelectorAll('#lucky-challenge-panel .lucky-list label')[2].childNodes[0].textContent = `${text.perkBlocked} `;
            document.querySelectorAll('#lucky-challenge-panel .lucky-list label')[3].childNodes[0].textContent = `${text.buy} `;
            document.querySelector('.lucky-notice:not(#lucky-status)').textContent = text.lossNotice;
            wheelCards[0].textContent = text.currencyWheel;
            wheelCards[1].textContent = text.modifierWheel;
            wheelCards[2].textContent = text.killerWheel;
            document.getElementById('currency-spin').textContent = text.spinCurrency;
            document.getElementById('modifier-spin').textContent = text.spinModifier;
            document.getElementById('killer-spin').textContent = text.spinKiller;
            document.getElementById('lucky-status').textContent = text.wheelNotice;
            luckyButtons[0].textContent = text.win;
            luckyButtons[1].textContent = text.lose;
            luckyButtons[2].textContent = text.export;
            luckyButtons[3].textContent = text.import;
            document.getElementById('lucky-select-all-killers').textContent = text.selectAll;
            document.getElementById('lucky-deselect-all-killers').textContent = text.deselectAll;
            document.getElementById('lucky-killer-search').placeholder = text.search;
            document.querySelector('.lucky-match-dialog h2').textContent = text.escapedTitle;
            document.querySelector('.lucky-match-dialog p').textContent = text.escapedHelp;
            escapeButtons[0].textContent = text.cancel;
            escapeButtons[1].textContent = text.confirm;
            setEscapedCount(getEscapedCount());
            renderLuckyShop();
            renderLuckyState();
        }

        function syncCurrentModeUI() {
            const isSurvivors = currentMode === 'survivors';
            const killersButton = document.getElementById('subtab-killers');
            const survivorsButton = document.getElementById('subtab-survivors');

            if (killersButton) killersButton.classList.toggle('active', !isSurvivors);
            if (survivorsButton) survivorsButton.classList.toggle('active', isSurvivors);
        }

        function applySavedTabState() {
            const tabToActivate = activeTab && document.querySelector(`[data-tab="${activeTab}"]`) ? activeTab : 'home';
            switchTab(tabToActivate);
            syncCurrentModeUI();
        }

        function switchTab(tabName) {
            activeTab = tabName;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
            saveSessionState();

            if (tabName === 'wheel') {
                drawMainWheel();
            }
        }

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('data-tab');
                switchTab(tabName);
            });
        });

        document.querySelectorAll('.challenge-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const challengeTab = btn.getAttribute('data-challenge-tab');
                document.querySelectorAll('.challenge-tab-btn').forEach(tabButton => tabButton.classList.remove('active'));
                document.querySelectorAll('.challenge-tab-panel').forEach(panel => panel.classList.remove('active'));
                btn.classList.add('active');
                const targetPanel = document.getElementById(`${challengeTab}-challenge-panel`);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });

        document.querySelectorAll('.challenge-subtab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const subchallengeTab = btn.getAttribute('data-subchallenge-tab');
                document.querySelectorAll('.challenge-subtab-btn').forEach(tabButton => tabButton.classList.remove('active'));
                document.querySelectorAll('.challenge-subpanel').forEach(panel => panel.classList.remove('active'));
                btn.classList.add('active');
                const targetPanel = document.getElementById(`${subchallengeTab}-challenge-panel`);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });

        document.querySelectorAll('.tierlist-subtab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tierSubtab;
                document.querySelectorAll('.tierlist-subtab-btn').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.tier-panel').forEach(panel => panel.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('tierlist-source-label').classList.toggle('hidden', target !== 'current');
                document.getElementById(target === 'current' ? 'tier-current-panel' : 'tier-custom-panel').classList.add('active');
            });
        });

        document.getElementById('subtab-killers').addEventListener('click', () => {
            document.getElementById('subtab-killers').classList.add('active');
            document.getElementById('subtab-survivors').classList.remove('active');
            initMode('killers');
            saveSessionState();
        });

        document.getElementById('subtab-survivors').addEventListener('click', () => {
            document.getElementById('subtab-survivors').classList.add('active');
            document.getElementById('subtab-killers').classList.remove('active');
            initMode('survivors');
            saveSessionState();
        });

        function matchesSearch(itemText, filter, mode, index) {
            if (!filter) return true;
            const query = filter.toLowerCase().trim();
            
            if (itemText.toLowerCase().includes(query)) return true;

            const ruKey = i18n.ru[mode][index];
            const itemAliases = aliases[mode]?.[ruKey] || [];
            
            return itemAliases.some(alias => alias.toLowerCase().includes(query) || query.includes(alias.toLowerCase()));
        }

        function renderEntityList(filter = '') {
            entityListEl.innerHTML = '';
            const list = i18n[currentLang][currentMode];

            list.forEach((itemText, index) => {
                if (matchesSearch(itemText, filter, currentMode, index)) {
                    const item = document.createElement('div');
                    item.className = 'entity-item';
                    const isChecked = selectedIndices.includes(index);
                    item.innerHTML = `<span>${itemText}</span><input type="checkbox" ${isChecked ? 'checked' : ''}>`;

                    item.addEventListener('click', (e) => {
                        if (e.target.tagName !== 'INPUT') {
                            const checkbox = item.querySelector('input');
                            checkbox.checked = !checkbox.checked;
                        }
                        toggleEntity(index);
                    });

                    entityListEl.appendChild(item);
                }
            });
            selectedCountEl.textContent = `(${selectedIndices.length}/${list.length})`;
        }

        function toggleEntity(index) {
            if (selectedIndices.includes(index)) {
                selectedIndices = selectedIndices.filter(i => i !== index);
            } else {
                selectedIndices.push(index);
            }
            selectedIndicesByMode[currentMode] = [...selectedIndices];
            selectedCountEl.textContent = `(${selectedIndices.length}/${i18n[currentLang][currentMode].length})`;
            drawMainWheel();
            saveSessionState();
        }

        function drawMainWheel() {
            const wheelIndices = selectedIndices.filter(index => index !== temporarilyExcludedIndex);
            const numSlices = wheelIndices.length;
            mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

            if (numSlices === 0) {
                mainCtx.fillStyle = '#18181c';
                mainCtx.beginPath();
                mainCtx.arc(300, 300, 290, 0, 2 * Math.PI);
                mainCtx.fill();
                mainCtx.fillStyle = '#666';
                mainCtx.font = '18px Segoe UI';
                mainCtx.textAlign = 'center';
                mainCtx.fillText(i18n[currentLang].emptyWheel, 300, 305);
                spinMainBtn.disabled = true;
                return;
            }

            spinMainBtn.disabled = isMainSpinning;
            const sliceAngle = (2 * Math.PI) / numSlices;

            for (let i = 0; i < numSlices; i++) {
                const angle = i * sliceAngle;
                const entityIndex = wheelIndices[i];
                
                mainCtx.beginPath();
                mainCtx.fillStyle = colors[i % colors.length];
                mainCtx.moveTo(300, 300);
                mainCtx.arc(300, 300, 295, angle, angle + sliceAngle);
                mainCtx.lineTo(300, 300);
                mainCtx.fill();
                mainCtx.strokeStyle = '#0a0a0c';
                mainCtx.lineWidth = 2;
                mainCtx.stroke();

                mainCtx.save();
                mainCtx.translate(300, 300);
                mainCtx.rotate(angle + sliceAngle / 2);
                mainCtx.textAlign = 'right';
                mainCtx.fillStyle = '#e0e0e0';
                mainCtx.font = numSlices > 30 ? '11px Segoe UI' : (numSlices > 15 ? '13px Segoe UI' : '15px Segoe UI');
                
                let text = i18n[currentLang][currentMode][entityIndex].split(' (')[0];
                mainCtx.fillText(text, 280, 5);
                mainCtx.restore();
            }
        }

        spinMainBtn.addEventListener('click', () => {
            const wheelIndices = selectedIndices.filter(index => index !== temporarilyExcludedIndex);
            const availableIndices = wheelIndices.length > 0 ? wheelIndices : selectedIndices;
            if (isMainSpinning || availableIndices.length === 0) return;

            isMainSpinning = true;
            spinMainBtn.disabled = true;

            const extraRounds = 5 + Math.floor(Math.random() * 5);
            const randomDegree = Math.floor(Math.random() * 360);
            currentRotationMain += extraRounds * 360 + randomDegree;
            mainCanvas.style.transform = `rotate(${currentRotationMain}deg)`;

            setTimeout(() => {
                isMainSpinning = false;
                spinMainBtn.disabled = false;

                const actualDegree = currentRotationMain % 360;
                const numSlices = availableIndices.length;
                const sliceAngle = 360 / numSlices;
                let winnerSlice = Math.floor((360 - (actualDegree % 360) + 270) % 360 / sliceAngle);
                const winnerIndex = availableIndices[winnerSlice];

                document.getElementById('winner-name').textContent = i18n[currentLang][currentMode][winnerIndex];
                document.getElementById('winner-extra-info').innerHTML = '';

                if (removeWinnerToggle.checked) {
                    temporarilyExcludedIndex = winnerIndex;
                    drawMainWheel();
                } else {
                    temporarilyExcludedIndex = null;
                }

                const memeContainer = document.getElementById('meme-container');
                if (numSlices === 1) {
                    memeContainer.innerHTML = `<div class="meme-text">${i18n[currentLang].singleMeme}</div>`;
                } else {
                    memeContainer.innerHTML = '';
                }

                document.getElementById('modal').style.display = 'flex';
            }, 4000);
        });

        document.getElementById('select-all').addEventListener('click', () => {
            const max = i18n[currentLang][currentMode].length;
            selectedIndices = Array.from(Array(max).keys());
            selectedIndicesByMode[currentMode] = [...selectedIndices];
            renderEntityList(searchInput.value);
            drawMainWheel();
            saveSessionState();
        });

        document.getElementById('deselect-all').addEventListener('click', () => {
            selectedIndices = [];
            selectedIndicesByMode[currentMode] = [];
            renderEntityList(searchInput.value);
            drawMainWheel();
            saveSessionState();
        });

        document.getElementById('export-wheel-preset').addEventListener('click', exportWheelPreset);
        document.getElementById('import-wheel-preset').addEventListener('click', () => document.getElementById('wheel-preset-file').click());
        document.getElementById('wheel-preset-file').addEventListener('change', event => {
            if (event.target.files[0]) importWheelPreset(event.target.files[0]);
            event.target.value = '';
        });
        removeWinnerToggle.addEventListener('change', () => {
            if (!removeWinnerToggle.checked) {
                temporarilyExcludedIndex = null;
                drawMainWheel();
            }
            saveSessionState();
        });

        searchInput.addEventListener('input', (e) => {
            renderEntityList(e.target.value);
        });

        document.querySelectorAll('.escape-mode-btn').forEach(button => {
            button.addEventListener('click', () => {
                updateEscapeModeAvailability();
                if (button.disabled) return;
                currentEscapeMode = button.dataset.escapeMode;
                renderEscapeTracker();
            });
        });

        document.querySelectorAll('[data-scope][data-result]').forEach(button => {
            button.addEventListener('click', () => {
                const { scope, result } = button.dataset;
                if (result === 'reset') {
                    resetEscapeTracker(scope, currentEscapeMode);
                    return;
                }
                if (result === 'download') {
                    downloadStatsPayload(scope, currentEscapeMode);
                    return;
                }
                if (scope === 'self' || scope === 'team') {
                    const field = result === 'escaped' ? 'escaped' : result === 'failed' ? 'failed' : 'caught';
                    escapeTracker[currentEscapeMode][scope][field] += 1;
                    renderEscapeTracker();
                }
                if (scope === 'mana') {
                    renderEscapeTracker();
                }
            });
        });

        document.getElementById('download-escape-stats').addEventListener('click', () => downloadStatsPayload('all', currentEscapeMode));

        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });

        document.getElementById('lang-ru').addEventListener('click', () => setLanguage('ru'));
        document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

        initMode(currentMode, !sessionStateWasRecovered);
        renderEscapeTracker();
        setInterval(renderEscapeCountdown, 1000);
        renderTierListPanels();
        renderLuckyKillers(document.getElementById('lucky-killer-search')?.value || '');
        drawLuckyWheel('currency');
        drawLuckyWheel('modifier');
        drawLuckyKillerWheel();
        renderLuckyState();
        setLanguage(currentLang || 'ru');
        applySavedTabState();
    