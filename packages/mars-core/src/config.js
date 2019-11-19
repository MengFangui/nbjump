/**
 * @file  config helper
 * @author zhangwentao
 */

export default {
    performance: false,
    debug: {
        events: false,
        lifetimes: false
    },
    framework: process.env.NBJUMP_CONFIG_FRAMEWORK
};
