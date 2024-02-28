import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          
        },
      },
      zh: {
        translation: {
          "Yihao Qin's Profile": "覃逸昊的个人资料",
          "Yihao Qin (Nickname: Leo)": "覃逸昊(Leo)",
          "Hii! I am a high school student currently studying in": "你好！我是一名高中生，目前就读于",
          "Basis International School Park Lane Harbor": "贝赛思国际学校小径湾校区",
          "in Huizhou, China. I've completed 4 AP classes (": "，位于中国广东省惠州市。我已经完成了4门AP课程（",
          "AP Macro and Microeconomics, AP World History, AP Physics 1": "AP宏观和微观经济学，AP世界历史，AP物理1",
          "), and I am studying 4 more AP classes (": "），并且正在学习4门AP课程（",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2": "AP微积分AB，AP计算机科学A，AP欧洲历史，AP物理2",
          ").": "）。",
          "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as": "我是一名专注自主开发与研究的程序员，目前主要专注于Web开发。我已经使用前端框架构建了几个全栈Web应用程序，例如",
          "React, Vue, Angular": "React，Vue，Angular",
          ", and backend framework such as": "，以及后端框架，例如",
          "Express and nodejs": "Express和nodejs",
          ". I am also familiar with other programming languages such as": "。我也熟悉其他编程语言，例如",
          "C++, Java, Python, and JavaScript (Typescript as well)": "C++，Java，Python和JavaScript（也包括Typescript）",
          ".": "。",
          "My Github": "我的Github",
          "Find me through github by clicking this tab (LQ458).": "通过点击这个标签（LQ458）找到我的Github。",
          "LQ Notes": "LQ笔记",
          "Find in-depth information about me and my studing notes.": "了解关于我的详细信息和学习笔记。",
          "News": "公告",
          "Always catch up with my latest projects and development news.": "随时了解我的最新项目和开发动态。",
          "LQ Life": "LQ生活",
          "Find more interesting aspects about me in this block.": "在这个板块中找到更多关于我有趣的一面。",
          "Your Name": "你的署名",
          "Your Email": "你的邮箱",
          "Any Problems?*": "任何问题？*",
          "Leave a Message...*": "留言...*",
          "Send": "发送",
        },
      },
      es: {
        translation: {
          
        },
      },
      fr: {
        translation: {
          
        },
      },
      ja: {
        translation: {
          
        },
      },
    },
    fallbackLng: "en", // use English as the fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
