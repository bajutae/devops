const autometa_options = {
  title: "DevOps 안내서",
  description: "초보 개발자를 위한 넓고 얕은 DevOps 맛보기",
  canonical_base: "https://subicura.com/devops",
  author: {
    name: "subicura",
    twitter: "subicura",
  },
  site: {
    name: "DevOps 안내서",
    twitter: "subicura",
  },
  description_sources: ["frontmatter"],
  image_sources: ["frontmatter"],
};

module.exports = {
  locales: {
    "/": {
      lang: "ko-KR",
      title: "DevOps 안내서",
      description: "초보 개발자를 위한 넓고 얕은 DevOps 맛보기",
    },
  },
  dest: "dist/devops",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "DevOps 안내서",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "초보 개발자를 위한 넓고 얕은 DevOps 맛보기",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "link",
      {
        href: "https://css.gg/css?=|calendar-dates|folder|tag",
        rel: "stylesheet",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/devops/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    // [
    //   "script",
    //   {
    //     async: "true",
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //   },
    // ],
    ["meta", { property: "fb:app_id", content: "1611862309129685" }],
  ],

  base: "/devops/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "subicura/devops",
    editLinks: true,
    docsDir: "src",
    editLinkText: "",
    lastUpdated: true,
    // algolia: {
    //   apiKey: "6b02d4c7b823f2f9dd607f57d047175e",
    //   indexName: "subicura",
    // },
    locales: {
      "/": {
        nav: [
          {
            text: "📔 가이드",
            link: "/guide/",
          },
        ],
        sidebar: {
          "/guide/": getGuideSidebar(
            "개발과 테스트 코드",
            "배포",
            "컨테이너",
            "지속적 통합(CI)",
            "쿠버네티스"
          ),
        },
      },
    },
    yuu: {
      disableThemeIgnore: true,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    // [
    //   "@vuepress/blog",
    //   {
    //     directories: [
    //       // {
    //       //   id: "news",
    //       //   dirname: "_news",
    //       //   path: "/news/",
    //       //   layout: "LayoutNews",
    //       //   itemLayout: "LayoutNews",
    //       //   pagination: {
    //       //     perPagePosts: 2,
    //       //   },
    //       // },
    //       {
    //         id: "archive",
    //         dirname: "_archive",
    //         path: "/archive/",
    //         layout: "LayoutArchive",
    //         itemLayout: "LayoutArchive",
    //         pagination: {
    //           lengthPerPage: 20,
    //         },
    //       },
    //     ],
    //     frontmatters: [
    //       {
    //         id: "tag",
    //         keys: ["tag", "tags"],
    //         path: "/tag/",
    //         frontmatter: { title: "Tag" },
    //         layout: "LayoutTag",
    //         scopeLayout: "LayoutTag",
    //         pagination: {
    //           lengthPerPage: 20,
    //         },
    //       },
    //     ],
    //   },
    // ],
    [
      "sitemap",
      {
        hostname: "https://subicura.com",
      },
    ],
    [
      "container",
      {
        type: "mermaid",
        before: '<pre class="mermaid-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, _lang) => {
          var d = new Date(timestamp),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        },
      },
    ],
    [require("./plugins/vuepress-plugin-autometa.js"), autometa_options],
    [
      "mermaidjs",
      {
        sequence: {
          mirrorActors: false,
          actorFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Spoqa Han Sans Neo'",
          actorFontWeight: "bold",
          noteFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Spoqa Han Sans Neo'",
          noteFontWeight: "normal",
          messageFontFamily:
            '"Spoqa Han Sans Neo", "Apple SD Neo Gothic", "Malgun Gothic", "맑은고딕", Dotum, "돋움", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          messageFontWeight: "normal",
        },
      },
    ],
  ],
};

function getGuideSidebar(groupA, groupB, groupC, groupD, groupE) {
  return [
    {
      title: "들어가기",
      collapsable: true,
      children: [""],
    },
    {
      title: groupA,
      collapsable: true,
      children: ["web", "git", "github", "validate"],
    },
    {
      title: groupB,
      collapsable: true,
      children: ["aws-deploy", "aws-multi-deploy", "aws-certificate"],
    },
    {
      title: groupC,
      collapsable: true,
      children: ["docker"],
    },
    {
      title: groupD,
      collapsable: true,
      children: ["jenkins", "jenkins-report", "jenkins-github"],
    },
    {
      title: groupE,
      collapsable: true,
      children: [
        "kubernetes",
        "helm",
        "gitops",
        "autoscaling",
        "jenkins-gitops",
        "monitoring",
        "alert",
      ],
    },
  ];
}
