/* jshint node: true */
'use strict';

const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-one-script',

  postprocessTree(type, tree) {
    if (type !== 'all') {
      return tree;
    }

    return mergeTrees([tree, concat(tree, {
      headerFiles: [
        'assets/vendor.js',
        `assets/${this.project.pkg.name}.js`
      ],
      outputFile: 'assets/app.js'
    })]);
  }
};
