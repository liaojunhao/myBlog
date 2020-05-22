module.exports = {
  "title": "junhao",
  "description": "著名CV工程师一枚，千行代码，Bug何处藏",
  // "dest": "public",
  "base": "/myBlog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "sidebar": 'auto',
    "themePicker":false,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "外链",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/liaojunhao",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "faceImage": "/avatar.png",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "junhao",
    // "record": "xxxx",
    "startYear": "2017",
    "huawei": false
  },
  "markdown": {
    "lineNumbers": true
  }
}