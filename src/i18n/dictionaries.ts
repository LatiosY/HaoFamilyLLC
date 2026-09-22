import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/config/site";

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    buyTitle: string;
    buyDescription: string;
    sellTitle: string;
    sellDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    home: string;
    buy: string;
    sell: string;
    contact: string;
    languageName: string;
    otherLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    title: string;
    companyLine: string;
    dreLine: string;
  };
  services: {
    buyersTitle: string;
    buyersBody: string;
    sellersTitle: string;
    sellersBody: string;
    contactTitle: string;
    contactBody: string;
    learnMore: string;
  };
  meet: {
    title: string;
    p1: string;
    p2: string;
    photoAlt: string;
  };
  buy: {
    kicker: string;
    title: string;
    intro: string;
    stepsTitle: string;
    steps: { title: string; body: string }[];
    valuesTitle: string;
    values: { title: string; body: string }[];
    cta: string;
  };
  sell: {
    kicker: string;
    title: string;
    intro: string;
    stepsTitle: string;
    steps: { title: string; body: string }[];
    valuesTitle: string;
    values: { title: string; body: string }[];
    cta: string;
  };
  contact: {
    kicker: string;
    title: string;
    phone: string;
    email: string;
    wechat: string;
    wechatId: string;
    address: string;
    qrLabel: string;
    qrHint: string;
  };
  footer: {
    navigation: string;
    contact: string;
    fairHousing: string;
    disclaimer: string;
    dre: string;
  };
};

const en: Dictionary = {
  meta: {
    homeTitle: "Hao Family Investment LLC | Bay Area Real Estate",
    homeDescription:
      "Zhixin Hao helps Bay Area buyers and sellers through a clear, one-agent real estate process.",
    buyTitle: "Buy a Home | Hao Family Investment LLC",
    buyDescription:
      "Buyer representation in the Bay Area: search, offers, inspection, and closing with one point of contact.",
    sellTitle: "Sell a Home | Hao Family Investment LLC",
    sellDescription:
      "Seller representation in the Bay Area: pricing, preparation, showings, and negotiation.",
    contactTitle: "Contact | Hao Family Investment LLC",
    contactDescription:
      "Call, email, or message Zhixin Hao on WeChat to talk about buying or selling in the Bay Area.",
  },
  nav: {
    home: "Home",
    buy: "Buy",
    sell: "Sell",
    contact: "Contact",
    languageName: "EN",
    otherLanguage: "中文",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    kicker: "Serving the Bay Area",
    title: "Bay Area Real Estate",
    companyLine: "Hao Family Investment LLC",
    dreLine: "DRE# TBD",
  },
  services: {
    buyersTitle: "Buyers",
    buyersBody: "A clear path from first conversation to keys — without a large team handing you off.",
    sellersTitle: "Sellers",
    sellersBody: "Pricing, preparation, and negotiation handled by one agent who stays with the file.",
    contactTitle: "Contact",
    contactBody: "Call, email, or send a WeChat message when you are ready to talk.",
    learnMore: "Learn more",
  },
  meet: {
    title: "Meet Zhixin Hao",
    p1: "Zhixin Hao is a Bay Area real estate agent who helps people buy and sell homes with clear communication and a steady process. Whether you are purchasing a first house or selling a home you have lived in for years, the work is the same: listen first, explain the tradeoffs, and keep the transaction moving without rushing a decision that does not fit.",
    p2: "Buying and selling here is rarely simple. Pricing, timing, and inspection issues stack up quickly. Zhixin works as a single point of contact, so you are not passed between a large team. You will know what happens next, what is still unknown, and when you actually need to decide.",
    photoAlt: "Portrait placeholder for Zhixin Hao",
  },
  buy: {
    kicker: "For buyers",
    title: "Buying a home in the Bay Area",
    intro:
      "The market moves fast and the paperwork is dense. The useful help is not more listings on a website — it is someone who can explain what a house is worth, what an offer needs, and what can still go wrong before closing.",
    stepsTitle: "How we work",
    steps: [
      {
        title: "Start with what you need",
        body: "Budget, commute, school preferences, and timing. We write this down so the search does not drift.",
      },
      {
        title: "Look with a filter, not a flood",
        body: "You will still use the usual listing sites. The work here is deciding which houses are worth a visit and which problems are expensive.",
      },
      {
        title: "Offer and negotiate",
        body: "Price, contingencies, and timing are written so you can see the tradeoffs before you sign.",
      },
      {
        title: "Inspect and close",
        body: "Inspection, appraisal, and lender conditions are tracked in one place until the keys change hands.",
      },
    ],
    valuesTitle: "What you can expect",
    values: [
      {
        title: "One person, the whole way",
        body: "You talk to Zhixin, not a rotating desk. Questions get answered by the person who saw the house with you.",
      },
      {
        title: "No invented urgency",
        body: "If a house is a poor fit, you will hear that. A missed listing is cheaper than a rushed purchase.",
      },
      {
        title: "Plain language",
        body: "Disclosures, contingencies, and credits are explained in ordinary sentences — in English or Chinese.",
      },
    ],
    cta: "Talk about buying",
  },
  sell: {
    kicker: "For sellers",
    title: "Selling a home in the Bay Area",
    intro:
      "A sale is a sequence of decisions: price, preparation, timing, and how you answer the first offer. The useful help is someone who will tell you what the house will likely trade for — and what work is worth doing before it goes live.",
    stepsTitle: "How we work",
    steps: [
      {
        title: "Price from the market, not a wish",
        body: "Recent nearby sales and the condition of this house set the range. We agree on a number before anything is listed.",
      },
      {
        title: "Prepare what buyers will notice",
        body: "Only the work that changes how the house shows or how an inspector will write it up. No catalog of unused upgrades.",
      },
      {
        title: "List and show",
        body: "Photos, remarks, and showing rules are set so serious buyers can see the house without a circus.",
      },
      {
        title: "Negotiate and close",
        body: "Offers, inspections, and credits are compared side by side so you can choose, not guess.",
      },
    ],
    valuesTitle: "What you can expect",
    values: [
      {
        title: "A number you can defend",
        body: "List price is tied to comparable sales and the condition of the house, not a marketing slogan.",
      },
      {
        title: "One agent on the file",
        body: "Showings, offers, and the escrow checklist stay with Zhixin through closing.",
      },
      {
        title: "Chinese or English",
        body: "Family members who prefer Chinese can follow the same process without a second translation layer.",
      },
    ],
    cta: "Talk about selling",
  },
  contact: {
    kicker: "Get in touch",
    title: "Contact Zhixin Hao",
    phone: "Phone",
    email: "Email",
    wechat: "WeChat",
    wechatId: "WeChat ID",
    address: "Office",
    qrLabel: "WeChat QR",
    qrHint: "QR code will be added here.",
  },
  footer: {
    navigation: "Navigation",
    contact: "Contact",
    fairHousing: "Equal Housing Opportunity",
    disclaimer:
      "All information is deemed reliable but not guaranteed and should be independently reviewed and verified.",
    dre: "CA DRE#",
  },
};

const zh: Dictionary = {
  meta: {
    homeTitle: "Hao Family Investment LLC | 湾区房产",
    homeDescription: "Zhixin Hao 为湾区买家与卖家提供一人经纪服务：把交易说清楚，再往下走。",
    buyTitle: "买房 | Hao Family Investment LLC",
    buyDescription: "湾区买家代理：看房、出价、检查与过户，全程同一位经纪人。",
    sellTitle: "卖房 | Hao Family Investment LLC",
    sellDescription: "湾区卖家代理：定价、整备、带看与谈判。",
    contactTitle: "联系 | Hao Family Investment LLC",
    contactDescription: "电话、邮件或微信联系 Zhixin Hao，咨询湾区买房或卖房。",
  },
  nav: {
    home: "首页",
    buy: "买房",
    sell: "卖房",
    contact: "联系",
    languageName: "中文",
    otherLanguage: "EN",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  hero: {
    kicker: "服务湾区",
    title: "湾区房产",
    companyLine: "Hao Family Investment LLC",
    dreLine: "DRE# TBD",
  },
  services: {
    buyersTitle: "买房",
    buyersBody: "从第一次沟通到交钥匙，路径清楚，不会被大团队传来传去。",
    sellersTitle: "卖房",
    sellersBody: "定价、整备与谈判由同一位经纪人跟到结束。",
    contactTitle: "联系",
    contactBody: "准备好了就打电话、发邮件，或加微信。",
    learnMore: "了解更多",
  },
  meet: {
    title: "认识 Zhixin Hao",
    p1: "Zhixin Hao 是湾区房产经纪人，帮客户买房、卖房。工作方式很直接：先听你要什么，再把利弊讲清楚，推进交易，但不催你做不合适的决定。无论是第一套房，还是住了多年的房子，都是同一套做法。",
    p2: "湾区买卖很少轻松。价格、时间窗口和房屋检查的问题会叠在一起。Zhixin 作为唯一对接人，你不用在大团队之间被转手。下一步做什么、还有什么不确定、什么时候必须拍板，都会说清楚。",
    photoAlt: "Zhixin Hao 头像占位",
  },
  buy: {
    kicker: "买房",
    title: "在湾区买房",
    intro:
      "市场快，文件也密。网站上再堆一套房源帮助有限；真正有用的，是有人能说明这套房值多少、出价要带什么条件、过户前还可能出什么问题。",
    stepsTitle: "怎么合作",
    steps: [
      {
        title: "先写清你需要什么",
        body: "预算、通勤、学校和入住时间。写下来，找房才不会漂。",
      },
      {
        title: "筛选，而不是淹没",
        body: "常用的房源网站你仍会用。这里的工作是判断哪几套值得去看，哪些问题以后会很贵。",
      },
      {
        title: "出价与谈判",
        body: "价格、附加条件和时间会写明白，让你在签字前看见取舍。",
      },
      {
        title: "检查与过户",
        body: "房屋检查、估价和贷款条件集中跟进，直到交钥匙。",
      },
    ],
    valuesTitle: "你可以期待什么",
    values: [
      {
        title: "一个人跟完全程",
        body: "对接的是 Zhixin，不是轮班前台。问题由陪你看过房的人回答。",
      },
      {
        title: "不制造假紧迫",
        body: "房子不合适会直说。错过一套，比仓促买错一套便宜。",
      },
      {
        title: "用白话讲文件",
        body: "披露、附加条件和价款调整用普通句子解释，中英文都可以。",
      },
    ],
    cta: "谈买房",
  },
  sell: {
    kicker: "卖房",
    title: "在湾区卖房",
    intro:
      "出售是一串决定：定价、整备、时机，以及怎么回应第一份要约。有用的帮助是：有人告诉你这套房大概能成交在什么区间，以及上市前哪些准备工作值得做。",
    stepsTitle: "怎么合作",
    steps: [
      {
        title: "价格跟市场，不跟愿望",
        body: "附近成交和房屋现状定出区间。数字先谈拢，再准备上市。",
      },
      {
        title: "只做买家会注意到的准备",
        body: "只处理影响呈现或检查报告的项目，不堆一套用不上的改造清单。",
      },
      {
        title: "上架与带看",
        body: "照片、描述和看房规则定好，让认真的买家看得到，场面也不至于乱。",
      },
      {
        title: "谈判与过户",
        body: "要约、检查和价款调整放在一起比较，让你选择，而不是猜测。",
      },
    ],
    valuesTitle: "你可以期待什么",
    values: [
      {
        title: "站得住的定价",
        body: "挂牌价对应成交案例和房屋状况，不是一句广告。",
      },
      {
        title: "同一人跟文件",
        body: "带看、要约和过户清单由 Zhixin 跟到结束。",
      },
      {
        title: "中文或英文",
        body: "更习惯中文的家人可以走同一流程，不必再找一层翻译。",
      },
    ],
    cta: "谈卖房",
  },
  contact: {
    kicker: "联系",
    title: "联系 Zhixin Hao",
    phone: "电话",
    email: "邮箱",
    wechat: "微信",
    wechatId: "微信号",
    address: "办公室",
    qrLabel: "微信二维码",
    qrHint: "二维码稍后放在这里。",
  },
  footer: {
    navigation: "导航",
    contact: "联系",
    fairHousing: "平等住房机会",
    disclaimer: "信息力求准确，但不作保证，请自行核实。",
    dre: "加州 DRE#",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(lang: string): Dictionary {
  if (!hasLocale(lang)) notFound();
  return dictionaries[lang];
}
