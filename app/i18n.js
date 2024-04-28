import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {},
      },
      zh: {
        translation: {
          "Yihao Qin's Profile": "覃逸昊的个人资料",
          "Yihao Qin (Nickname: Leo)": "覃逸昊(Leo)",
          "Hii! I am a high school student currently studying in":
            "你好！我是一名高中生，目前就读于",
          "Basis International School Park Lane Harbor":
            "贝赛思国际学校小径湾校区",
          "in Huizhou, China. I've completed 4 AP classes (":
            "，位于中国广东省惠州市。我已经完成了4门AP课程（",
          "AP Macro and Microeconomics, AP World History, AP Physics 1":
            "AP宏观和微观经济学，AP世界历史，AP物理1",
          "), and I am studying 4 more AP classes (":
            "），并且正在学习4门AP课程（",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2":
            "AP微积分AB，AP计算机科学A，AP欧洲历史，AP物理2",
          ").": "）。",
          "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as":
            "我是一名专注自主开发与研究的程序员，目前主要专注于Web开发。我已经使用前端框架构建了几个全栈Web应用程序，例如",
          "React, Vue, Angular": "React，Vue，Angular",
          ", and backend framework such as": "，以及后端框架，例如",
          "Express and nodejs": "Express和nodejs",
          ". I am also familiar with other programming languages such as":
            "。我也熟悉其他编程语言，例如",
          "C++, Java, Python, and JavaScript (Typescript as well)":
            "C++，Java，Python和JavaScript（也包括Typescript）",
          ".": "。",
          "My Github": "我的Github",
          "Find me through github by clicking this tab (LQ458).":
            "通过点击这个标签（LQ458）找到我的Github。",
          "LQ Notes": "LQ笔记",
          "Find in-depth information about me and my studing notes.":
            "了解关于我的详细信息和学习笔记。",
          News: "公告",
          "Always catch up with my latest projects and development news.":
            "随时了解我的最新项目和开发动态。",
          "LQ Life": "LQ生活",
          "Find more interesting aspects about me in this block.":
            "在这个板块中找到更多关于我有趣的一面。",
          "Your Name": "你的署名",
          "Your Email": "你的邮箱",
          "Any Problems?*": "任何问题？*",
          "Leave a Message...*": "留言...*",
          Send: "发送",

          search: "搜索",
          Projects: "项目",
          Docs: "文档",
          Playground: "练习场",
          Theme: "主题",
          Start: "开始",
          Introduction: "简介",
          Preview: "预览",
          "Oasis Forum": "绿洲论坛",
          Overview: "概述",
          "Tech Used": "使用的技术",
          Features: "功能",
          "My Tech Stack": "我的技术栈",
          "Educational Experience": "教育经历",
          "I am currently a G10 high schooler in Basis International School Park Lane Harbor.":
            "我目前是贝赛思国际学校小径湾校区的高中十年级学生。",
          "I have taken the following AP courses:": "我已经修读了以下AP课程：",
          "AP Macroeconomics:": "AP宏观经济学：",
          "AP Microeconomics:": "AP微观经济学：",
          "AP Physics 1:": "AP物理1：",
          "AP World History:": "AP世界历史：",
          "AP Computer Science A:": "AP计算机科学A：",
          "AP Calculus AB:": "AP微积分AB：",
          "AP Physics 2:": "AP物理2：",
          "AP European History:": "AP欧洲历史：",
          Pending: "待定",
          "Github Stats": "Github指标",
          "Recent Projects": "近期项目",
          "BIPH Flora": "BIPH 识草木",
          "Oasis forum is a community-driven platform that encourages open discussions, fosters learning, and promotes respectful interactions. We believe in the power of diverse perspectives and the value of constructive contributions. Our guidelines are designed to ensure a safe and inclusive environment for everyone.":
            "绿洲论坛是一个以社区为驱动的平台，鼓励开放讨论，促进学习，并促进尊重的互动。我们相信多元化观点的力量和建设性贡献的价值。我们的准则旨在确保每个人都有一个安全和包容的环境。",
        },
      },
      es: {
        translation: {
          "Yihao Qin's Profile": "Perfil de Yihao Qin",
          "Yihao Qin (Nickname: Leo)": "Yihao Qin (Apodo: Leo)",
          "Hii! I am a high school student currently studying in":
            "¡Hola! Soy un estudiante de secundaria que actualmente estudia en",
          "Basis International School Park Lane Harbor":
            "Escuela Internacional Basis Park Lane Harbor",
          "in Huizhou, China. I've completed 4 AP classes (":
            "en Huizhou, China. He completado 4 clases AP (",
          "AP Macro and Microeconomics, AP World History, AP Physics 1":
            "AP Macroeconomía y Microeconomía, AP Historia Mundial, AP Física 1",
          "), and I am studying 4 more AP classes (":
            "), y estoy estudiando 4 clases AP más (",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2":
            "AP Cálculo AB, AP Ciencias de la Computación A, AP Historia Europea, AP Física 2",
          ").": ").",
          "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as":
            "Soy un programador autodidacta que se centra principalmente en el desarrollo web por ahora. Ya he construido varias aplicaciones web de pila completa utilizando marcos de frontend como",
          "React, Vue, Angular": "React, Vue, Angular",
          ", and backend framework such as": ", y marcos de backend como",
          "Express and nodejs": "Express y nodejs",
          ". I am also familiar with other programming languages such as":
            ". También estoy familiarizado con otros lenguajes de programación como",
          "C++, Java, Python, and JavaScript (Typescript as well)":
            "C++, Java, Python y JavaScript (también Typescript)",
          ".": ".",
          "My Github": "Mi Github",
          "Find me through github by clicking this tab (LQ458).":
            "Encuéntrame en Github haciendo clic en esta pestaña (LQ458).",
          "LQ Notes": "Notas LQ",
          "Find in-depth information about me and my studing notes.":
            "Encuentra información detallada sobre mí y mis notas de estudio.",
          News: "Noticias",
          "Always catch up with my latest projects and development news.":
            "Siempre mantente al día con mis últimos proyectos y noticias de desarrollo.",
          "LQ Life": "Vida LQ",
          "Find more interesting aspects about me in this block.":
            "Encuentra aspectos más interesantes sobre mí en este bloque.",
          "Your Name": "Tu nombre",
          "Your Email": "Tu correo electrónico",
          "Any Problems?*": "¿Algún problema?*",
          "Leave a Message...*": "Deja un mensaje...*",
          Send: "Enviar",
        },
      },
      fr: {
        translation: {
          "Yihao Qin's Profile": "Profil de Yihao Qin",
          "Yihao Qin (Nickname: Leo)": "Yihao Qin (Surnom: Leo)",
          "Hii! I am a high school student currently studying in":
            "Salut! Je suis un étudiant du secondaire qui étudie actuellement à",
          "Basis International School Park Lane Harbor":
            "École Internationale Basis Park Lane Harbor",
          "in Huizhou, China. I've completed 4 AP classes (":
            "à Huizhou, en Chine. J'ai terminé 4 cours AP (",
          "AP Macro and Microeconomics, AP World History, AP Physics 1":
            "AP Macro et Microéconomie, AP Histoire Mondiale, AP Physique 1",
          "), and I am studying 4 more AP classes (":
            "), et j'étudie 4 autres cours AP (",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2":
            "AP Calcul AB, AP Informatique A, AP Histoire Européenne, AP Physique 2",
          ").": ").",
          "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as":
            "Je suis un programmeur autodidacte qui se concentre principalement sur le développement web pour le moment. J'ai déjà construit plusieurs applications web full-stack en utilisant des frameworks frontend tels que",
          "React, Vue, Angular": "React, Vue, Angular",
          ", and backend framework such as":
            ", et des frameworks backend tels que",
          "Express and nodejs": "Express et nodejs",
          ". I am also familiar with other programming languages such as":
            ". Je suis également familier avec d'autres langages de programmation tels que",
          "C++, Java, Python, and JavaScript (Typescript as well)":
            "C++, Java, Python, et JavaScript (aussi Typescript)",
          ".": ".",
          "My Github": "Mon Github",
          "Find me through github by clicking this tab (LQ458).":
            "Trouvez-moi sur Github en cliquant sur cet onglet (LQ458).",
          "LQ Notes": "Notes LQ",
          "Find in-depth information about me and my studing notes.":
            "Trouvez des informations détaillées sur moi et mes notes d'étude.",
          News: "Nouvelles",
          "Always catch up with my latest projects and development news.":
            "Restez toujours à jour avec mes derniers projets et nouvelles de développement.",
          "LQ Life": "Vie LQ",
          "Find more interesting aspects about me in this block.":
            "Trouvez des aspects plus intéressants sur moi dans ce bloc.",
          "Your Name": "Votre nom",
          "Your Email": "Votre email",
          "Any Problems?*": "Des problèmes?*",
          "Leave a Message...*": "Laissez un message...*",
          Send: "Envoyer",
        },
      },
      ja: {
        translation: {
          "Yihao Qin's Profile": "Yihao Qinのプロフィール",
          "Yihao Qin (Nickname: Leo)": "Yihao Qin（ニックネーム：Leo）",
          "Hii! I am a high school student currently studying in":
            "こんにちは！私は現在",
          "Basis International School Park Lane Harbor":
            "Basis International School Park Lane Harbor",
          "in Huizhou, China. I've completed 4 AP classes (":
            "の高校生です。私はこれまでに4つのAPクラス（",
          "AP Macro and Microeconomics, AP World History, AP Physics 1":
            "APマクロ経済学とミクロ経済学、AP世界史、AP物理学1",
          "), and I am studying 4 more AP classes (":
            "）を修了し、さらに4つのAPクラス（",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2":
            "AP微積分AB、APコンピューターサイエンスA、APヨーロッパ史、AP物理学2",
          ").": "）を学んでいます。",
          "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as":
            "私は主にWeb開発に焦点を当てた独学のプログラマーです。すでに、",
          "React, Vue, Angular": "React、Vue、Angular",
          ", and backend framework such as":
            "などのフロントエンドフレームワークと、",
          "Express and nodejs": "Expressやnodejs",
          ". I am also familiar with other programming languages such as":
            "などのバックエンドフレームワークを使用して、いくつかのフルスタックWebアプリケーションを構築しました。また、",
          "C++, Java, Python, and JavaScript (Typescript as well)":
            "C++、Java、Python、JavaScript（Typescriptも含む）",
          ".": "などの他のプログラミング言語にも精通しています。",
          "My Github": "私のGithub",
          "Find me through github by clicking this tab (LQ458).":
            "このタブ（LQ458）をクリックしてGithubから私を見つけてください。",
          "LQ Notes": "LQノート",
          "Find in-depth information about me and my studing notes.":
            "私についての詳細な情報や私の学習ノートを見つけてください。",
          News: "ニュース",
          "Always catch up with my latest projects and development news.":
            "常に私の最新のプロジェクトと開発ニュースをキャッチアップしてください。",
          "LQ Life": "LQライフ",
          "Find more interesting aspects about me in this block.":
            "このブロックで私についてのより興味深い側面を見つけてください。",
          "Your Name": "あなたの名前",
          "Your Email": "あなたのメール",
          "Any Problems?*": "何か問題は？*",
          "Leave a Message...*": "メッセージを残す...*",
          Send: "送信",
        },
      },
    },
    fallbackLng: "en", // use English as the fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
