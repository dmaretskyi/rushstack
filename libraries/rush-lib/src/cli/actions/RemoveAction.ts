// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as os from 'os';
import { ConsoleTerminalProvider, Terminal, ITerminal } from '@rushstack/node-core-library';

import { BaseAddAndRemoveAction } from './BaseAddAndRemoveAction';
import { RushCommandLineParser } from '../RushCommandLineParser';
import { RushConfigurationProject } from '../../api/RushConfigurationProject';

import type * as PackageJsonUpdaterType from '../../logic/PackageJsonUpdater';

export class RemoveAction extends BaseAddAndRemoveAction {
  private _terminalProvider: ConsoleTerminalProvider;
  private _terminal: ITerminal;

  public constructor(parser: RushCommandLineParser) {
    const documentation: string[] = [
      'Removes specified package(s) from the dependencies of the current project (as determined by the current working directory)' +
        ' and then runs "rush update".'
    ];
    super({
      actionName: 'remove',
      summary: 'Removes one or more dependencies from the package.json and runs rush update.',
      documentation: documentation.join(os.EOL),
      safeForSimultaneousRushProcesses: false,
      parser
    });
    this._terminalProvider = new ConsoleTerminalProvider();
    this._terminal = new Terminal(this._terminalProvider);
  }

  public onDefineParameters(): void {
    this._packageNameList = this.defineStringListParameter({
      parameterLongName: '--package',
      parameterShortName: '-p',
      required: true,
      argumentName: 'PACKAGE',
      description:
        'The name of the package which should be removed.' +
        ' To remove multiple packages, run "rush remove --package foo --package bar".'
    });
    this._allFlag = this.defineFlagParameter({
      parameterLongName: '--all',
      description: 'If specified, the dependency will be removed from all projects that declare it.'
    });
    super.onDefineParameters();
  }

  public getUpdateOptions(): PackageJsonUpdaterType.IPackageJsonUpdaterRushRemoveOptions {
    const projects: RushConfigurationProject[] = super.getProjects();

    const packagesToRemove: PackageJsonUpdaterType.IPackageForRushRemove[] = [];

    for (const specifiedPackageName of this.specifiedPackageNameList) {
      /**
       * Name
       */
      const packageName: string = specifiedPackageName;

      if (!this.rushConfiguration.packageNameParser.isValidName(packageName)) {
        throw new Error(`The package name "${packageName}" is not valid.`);
      }

      for (const project of projects) {
        if (
          !project.packageJsonEditor.tryGetDependency(packageName) &&
          !project.packageJsonEditor.tryGetDevDependency(packageName)
        ) {
          this._terminal.writeLine(
            `The project "${project.packageName}" do not have ${packageName} in package.json.`
          );
        }
      }

      packagesToRemove.push({ packageName });
    }

    return {
      projects: projects,
      packagesToUpdate: packagesToRemove,
      skipUpdate: this._skipUpdateFlag.value,
      debugInstall: this.parser.isDebug,
      actionName: this.actionName
    };
  }
}
