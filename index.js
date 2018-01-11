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

    const jsTree = mergeTrees([tree, concat(tree, {
      headerFiles: [
        'assets/vendor.js',
        `assets/${this.project.pkg.name}.js`
      ],
      outputFile: 'assets/app.js'
    })]);

    return mergeTrees([jsTree, concat(jsTree, {
      headerFiles: [
        'assets/vendor.css',
        `assets/${this.project.pkg.name}.css`
      ],
      outputFile: 'assets/app.css'
    })]);
  }
};
