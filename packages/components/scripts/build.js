/**
 * Synergy Build Steps
 */
import * as jobs from './jobs/index.js';
import { getPackageJSONAsObject, getPath } from './jobs/shared.js';

const { version } = getPackageJSONAsObject();

const packageVersion = JSON.stringify(version.toString());

// The directory we want our output to be stored
const componentDir = getPath('../');
const outDir = getPath('../dist');

const angularPackageDir = getPath('../../angular');
const reactPackageDir = getPath('../../react');
const vuePackageDir = getPath('../../vue');

await jobs.runCreateSynergy({
  componentDir,
  outDir,
  packageVersion,
});

// await Promise.all([
//   jobs.runCreateReactWrappers({
//     componentDistDir: outDir,
//     componentPackageDir: componentDir,
//     reactPackageDir,
//   }),
//   jobs.runCreateAngularWrappers({
//     angularPackageDir,
//     componentDistDir: outDir,
//     componentPackageDir: componentDir,
//   }),
//   jobs.runCreateVueWrappers({
//     componentDistDir: outDir,
//     componentPackageDir: componentDir,
//     vuePackageDir,
//   }),
// ]);
