module.exports = () => {
    return {
      files: [
        '/*.js',
        '/lib/*.js'
      ],
      tests: [
        'test/*.spec.js'
      ],
      env: {
        type: 'node'
      },
      debug: false
    };
  };