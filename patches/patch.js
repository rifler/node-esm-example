import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { patchesPackageJson } from './redux-saga';

for (const change of patchesPackageJson) {
    const pkgPath = join('node_modules', change.to, 'package.json');
    const currentContent = JSON.parse(readFileSync(pkgPath, 'utf8'));
    const newContent = {...currentContent, ...change.content};

    writeFileSync(pkgPath, JSON.stringify(newContent, null, 2));
}