/**
 * @file type definitions
 * @author meixuguang
 */

namespace nbjump.runtime {
    interface runtimeGulpPluginOptions {
        framework: any;
        target: string;
        dest: destObj;
    }
}

namespace nbjump.script {
    interface compileScriptResult {
        code: string;
        config: any;
        components: {
            [name: string]: string;
        };
        computedKeys: string[];
        moduleType: moduleType
    }

    enum moduleType {
        esm = 'esm',
        cmd = 'cmd'
    }
}
