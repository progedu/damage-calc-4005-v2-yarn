'use strict';
const assert = require('assert');
const dc = require('../');

describe('#effectiveDamage()', () => {

  it('正常なダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(100, 50, 30), 83);
  });

  it('負の異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(-1, 0, 0), 0);
    assert.equal(dc.effectiveDamage(0, -1, 0), 0);
    assert.equal(dc.effectiveDamage(0, 0, -1), 0);
  });

  it('2000より大きい異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(2001, 0, 0), 2000);
    assert.equal(dc.effectiveDamage(300, 2001, 0), 14);
    assert.equal(dc.effectiveDamage(300, 2000, 2001), 300);
  });

  it('実効防御力は0未満にならない', () => {
    assert.equal(dc.effectiveDamage(500, 100, 800), 500);
  });

  it('ダメージは小数点以下を四捨五入して整数にする', () => {
    assert.equal(dc.effectiveDamage(620, 100, 30), 365);
  });

});
