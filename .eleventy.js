module.exports = (config) => {
  config.addPassthroughCopy({ 'src/assets': 'assets' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  config.addShortcode("team", function(name, twitterUsername) {
    return `<div class="user">
    <div class="user_name">${name}</div>
    <div class="user_twitter">@${twitterUsername}</div>
    </div>`;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
