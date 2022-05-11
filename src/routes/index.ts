import Koa from "koa";

import * as path from "path";

import * as fs from "fs";

export function setupRoutes(app: Koa) {
  const allFiles = fs.readdirSync(__dirname).filter((_) => _ !== "index.ts");

  allFiles.forEach(async (_) => {
    const module = await import(path.join(__dirname, _));

    app.use(module.default.routes());
  });
}
