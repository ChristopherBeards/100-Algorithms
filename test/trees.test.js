const assert = require('chai').assert;
const expect = require('chai').expect;
const T = require('../trees/trees.js');

const Node = T.Node;
const Tree = T.Tree;

describe('Trees; BFS Works', () => {
  const letters = [];
  const t = new Tree(); // Creates the Tree
  t.root = new Node('a'); // Creates root node `a` in our Tree
  t.root.add('b'); // Adds `b` to the root
  t.root.add('c'); // Adds `c` to the root
  t.root.children[0].add('d'); // Adds `d` as a child

  t.BFS(node => {
    letters.push(node.data); // Passinng in a callback to our BFS
  });

  it('Should return the correct array', () => {
    expect(letters).to.eql(['a', 'b', 'c', 'd']);
  });
});

describe('Trees; DFS Works', () => {
  const letters = [];
  const t = new Tree();
  t.root = new Node('a');
  t.root.add('b');
  t.root.add('d');
  t.root.children[0].add('c');

  t.DFS(node => {
    letters.push(node.data);
  });

  it('Should return the correct array', () => {
    expect(letters).to.eql(['a', 'b', 'c', 'd']);
  });
});
