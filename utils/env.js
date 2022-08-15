const env = "dev"
const Env_CONFIG = {
  dev: {
    ENV: "dev",
    API_URL: "http://localhost:8088/",
    UPLOAD_URL: "http://pixiu.natapp1.cc",
    IMG_URL: "http://pixiu.natapp1.cc"
  },
  pre: {
    ENV: "pre",
    API_URL: "https://www.gzihp.cn/",
    UPLOAD_URL: "http://pixiu.natapp1.cc",
    IMG_URL: "http://pixiu.natapp1.cc"
  },
  pro: {
    ENV: "pro",
    API_URL: "https://www.gzihp.cn/",
    UPLOAD_URL: "http://pixiu.natapp1.cc",
    IMG_URL: "http://pixiu.natapp1.cc"
  }
}

module.exports = Env_CONFIG[env]