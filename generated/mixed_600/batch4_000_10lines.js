// Batch 4 - JavaScript
"use strict";

function buildItem(id) {
  return { id, createdAt: Date.now() };
}

const item0 = buildItem(0);
const noop = () => null;
