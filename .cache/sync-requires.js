const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-writing-js": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/src/pages/writing.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/src/pages/project.js"))),
  "component---src-pages-writing-posts-00-post-one-post-one-mdx": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/src/pages/writing-posts/00-post-one/post-one.mdx"))),
  "component---src-pages-writing-posts-01-post-two-post-two-mdx": hot(preferDefault(require("/Users/vancetan/Documents/Experiments/Portfolio-Two/src/pages/writing-posts/01-post-two/post-two.mdx")))
}

