/**
 * @file init h5 api
 * @author zhangjingyuan02
 */

import initNativeApi, {directives} from './initApi';

let Nbjump = {};
initNativeApi(Nbjump);

export {directives};
export default Nbjump;

