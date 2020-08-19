/**
 * `patch-package` package doesn't support changes in `package.json`
 * @see https://github.com/ds300/patch-package/issues/250
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { patchesPackageJson } from './packageJsonConfigs';

for (const change of patchesPackageJson) {
    const pkgPath = join('node_modules', change.to, 'package.json');
    const currentContent = JSON.parse(readFileSync(pkgPath, 'utf8'));
    const newContent = {...currentContent, ...change.content};

    writeFileSync(pkgPath, JSON.stringify(newContent, null, 2));
}