/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { ChromeDebugSession, logger, telemetry } from 'vscode-chrome-debug-core';
import * as path from 'path';
import * as os from 'os';

import { NodeDebugAdapter } from './nodeDebugAdapter';

ChromeDebugSession.run(ChromeDebugSession.getSession(
    {
        logFilePath: path.join(os.tmpdir(), 'sqlops-debug.txt'), // non-.txt file types can't be uploaded to github
        adapter: NodeDebugAdapter,
        extensionName: 'sqlops-debug',
        enableSourceMapCaching: true
    }));

/* tslint:disable:no-var-requires */
const debugAdapterVersion = require('../../package.json').version;
logger.log('sqlops-debug: ' + debugAdapterVersion);
telemetry.telemetry.addCustomGlobalProperty({'Versions.DebugAdapter': debugAdapterVersion});
