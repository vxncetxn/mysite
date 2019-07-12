exports.createPages = async ({ actions, graphql, reporter }) => {
  const writingResults = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "writing" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (writingResults.errors) {
    reporter.panic("failed to create posts", writingResults.errors);
  }

  const projectsResults = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "projects" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (projectsResults.errors) {
    reporter.panic("failed to create posts", projectsResults.errors);
  }

  const writingPosts = writingResults.data.allMdx.nodes;
  const projectsPosts = projectsResults.data.allMdx.nodes;

  writingPosts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/writing.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
  projectsPosts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/projects.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};
