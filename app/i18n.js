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
          "Basis International School Park Lane Harbor": "贝赛思国家学校小径湾校区",
          "in Huizhou, China. I've completed 4 AP classes (": "，位于中国广东省惠州市。我已经完成了4门AP课程（",
          "AP Macro and Microeconomics, AP World History, AP Physics 1": "AP宏观和微观经济学，AP世界历史，AP物理1",
          "), and I am studying 4 more AP classes (": "），并且正在学习4门AP课程（",
          "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2": "AP微积分AB，AP计算机科学A，AP欧洲历史，AP物理2",
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
