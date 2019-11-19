export {default as Vue, PropType} from './vue/index';
import Vue from './vue/index';
import {
    swanApp,
    nbjumpApis
} from './nbjump';
export {
    swanApp,
    backgroundAudioManager
} from './nbjump';

// 补充 this. 上的属性和方法
declare module './vue/vue' {
    interface Vue {
        $myProperty: string;
        $mpUpdated: (cb?: Function) => Promise<any>;
        $api: nbjumpApis;
        $mp: {
            options: any;
            query: any;
            scope: any;
        }
    }
}

// 补充 Vue.extend() 参数对象中的 key
declare module './vue/options' {
    interface ComponentOptions<V extends Vue> {
        onLoad?: Function;
        onReady?: Function;
        onHide?: Function;
        onLaunch?: Function;
        config?: any;
        onShow?: Function;
        pageLifetimes?: {
            hide?: Function;
            show?: Function;
        },
        attached?: Function;
    }
}
