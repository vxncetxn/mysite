exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic("failed to create posts", results.errors);
  }

  const writingPosts = results.data.allMdx.nodes;
  writingPosts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/writing.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};
