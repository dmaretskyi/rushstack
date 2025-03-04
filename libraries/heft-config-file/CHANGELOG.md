# Change Log - @rushstack/heft-config-file

This log was last generated on Thu, 29 Sep 2022 07:13:06 GMT and should not be manually modified.

## 0.11.1
Thu, 29 Sep 2022 07:13:06 GMT

_Version update only_

## 0.11.0
Tue, 27 Sep 2022 22:17:20 GMT

### Minor changes

- Allow a schema object to be passed to the ConfigurationFile constructor instead of the path to a schema file.

## 0.10.0
Wed, 21 Sep 2022 20:21:10 GMT

### Minor changes

- Add a "propertyInheritanceDefaults" option that allows the default property inheritance type to be configured.

## 0.9.6
Thu, 15 Sep 2022 00:18:52 GMT

_Version update only_

## 0.9.5
Wed, 24 Aug 2022 03:01:22 GMT

_Version update only_

## 0.9.4
Wed, 24 Aug 2022 00:14:38 GMT

_Version update only_

## 0.9.3
Fri, 19 Aug 2022 00:17:19 GMT

_Version update only_

## 0.9.2
Wed, 03 Aug 2022 18:40:35 GMT

_Version update only_

## 0.9.1
Mon, 01 Aug 2022 02:45:32 GMT

_Version update only_

## 0.9.0
Wed, 13 Jul 2022 21:31:13 GMT

### Minor changes

- (BREAKING API CHANGE) Deprecate `PathResolutionMethod.NodeResolve` in favor of `PathResolutionMethod.nodeResolve`.

### Patches

- Improve types strictness of `IJsonPathsMetadata`

## 0.8.10
Tue, 28 Jun 2022 22:47:13 GMT

_Version update only_

## 0.8.9
Tue, 28 Jun 2022 00:23:32 GMT

_Version update only_

## 0.8.8
Mon, 27 Jun 2022 18:43:09 GMT

_Version update only_

## 0.8.7
Sat, 25 Jun 2022 01:54:29 GMT

_Version update only_

## 0.8.6
Fri, 17 Jun 2022 09:17:54 GMT

_Version update only_

## 0.8.5
Fri, 17 Jun 2022 00:16:18 GMT

_Version update only_

## 0.8.4
Tue, 10 May 2022 01:20:43 GMT

_Version update only_

## 0.8.3
Sat, 23 Apr 2022 02:13:07 GMT

_Version update only_

## 0.8.2
Fri, 15 Apr 2022 00:12:36 GMT

_Version update only_

## 0.8.1
Sat, 09 Apr 2022 02:24:26 GMT

### Patches

- Rename the "master" branch to "main".

## 0.8.0
Sat, 19 Mar 2022 08:05:37 GMT

### Minor changes

- Add support for an inline "$<propertyName>.inheritanceType" property. This feature allows for configuration files to specify how object and array properties are inherited, overriding the default inheritance behavior provided by the configuration file class.

## 0.7.12
Tue, 15 Mar 2022 19:15:53 GMT

_Version update only_

## 0.7.11
Wed, 05 Jan 2022 16:07:47 GMT

_Version update only_

## 0.7.10
Mon, 27 Dec 2021 16:10:40 GMT

_Version update only_

## 0.7.9
Thu, 09 Dec 2021 20:34:41 GMT

_Version update only_

## 0.7.8
Mon, 06 Dec 2021 16:08:33 GMT

_Version update only_

## 0.7.7
Fri, 03 Dec 2021 03:05:22 GMT

_Version update only_

## 0.7.6
Sat, 06 Nov 2021 00:09:13 GMT

_Version update only_

## 0.7.5
Fri, 05 Nov 2021 15:09:18 GMT

_Version update only_

## 0.7.4
Wed, 27 Oct 2021 00:08:15 GMT

### Patches

- Update the package.json repository field to include the directory property.

## 0.7.3
Wed, 13 Oct 2021 15:09:54 GMT

_Version update only_

## 0.7.2
Fri, 08 Oct 2021 08:08:34 GMT

_Version update only_

## 0.7.1
Thu, 07 Oct 2021 07:13:35 GMT

_Version update only_

## 0.7.0
Tue, 05 Oct 2021 15:08:37 GMT

### Minor changes

- Use ITerminal instead of Terminal to allow for compatibility with other versions of @rushstack/node-core-library.

## 0.6.8
Fri, 24 Sep 2021 00:09:29 GMT

_Version update only_

## 0.6.7
Thu, 23 Sep 2021 00:10:40 GMT

### Patches

- Upgrade the `@types/node` dependency to version to version 12.

## 0.6.6
Tue, 14 Sep 2021 01:17:04 GMT

_Version update only_

## 0.6.5
Mon, 13 Sep 2021 15:07:06 GMT

_Version update only_

## 0.6.4
Wed, 08 Sep 2021 19:06:22 GMT

### Patches

- Fix issue with overwriting configuration properties using falsey values

## 0.6.3
Fri, 27 Aug 2021 00:07:25 GMT

_Version update only_

## 0.6.2
Wed, 11 Aug 2021 00:07:21 GMT

### Patches

- Move detailed logging from verbose to debug severity.

## 0.6.1
Mon, 12 Jul 2021 23:08:26 GMT

_Version update only_

## 0.6.0
Wed, 30 Jun 2021 01:37:17 GMT

### Minor changes

- Allow for specifying a custom resolver when resolving paths with heft-config-file. This change removes "preresolve" property for JsonPath module resolution options and replaces it with a more flexible "customResolver" property

## 0.5.0
Fri, 11 Jun 2021 00:34:02 GMT

### Minor changes

- Add "preresolve" property to transform paths before resolution

## 0.4.2
Fri, 04 Jun 2021 19:59:53 GMT

_Version update only_

## 0.4.1
Fri, 04 Jun 2021 00:08:34 GMT

### Patches

- Reduce the number of extra file system calls made when loading many config files.

## 0.4.0
Sat, 29 May 2021 01:05:06 GMT

### Minor changes

- Expose the ConfigurationFile.projectRelativeFilePath property

## 0.3.22
Wed, 19 May 2021 00:11:39 GMT

_Version update only_

## 0.3.21
Mon, 03 May 2021 15:10:29 GMT

_Version update only_

## 0.3.20
Mon, 12 Apr 2021 15:10:29 GMT

_Version update only_

## 0.3.19
Thu, 08 Apr 2021 20:41:54 GMT

### Patches

- Remove an outdated note from the README.

## 0.3.18
Tue, 06 Apr 2021 15:14:22 GMT

_Version update only_

## 0.3.17
Thu, 04 Mar 2021 01:11:31 GMT

_Version update only_

## 0.3.16
Fri, 05 Feb 2021 16:10:42 GMT

_Version update only_

## 0.3.15
Thu, 10 Dec 2020 23:25:49 GMT

_Version update only_

## 0.3.14
Tue, 17 Nov 2020 01:17:38 GMT

### Patches

- Fix an issue where .map files were not being published

## 0.3.13
Wed, 11 Nov 2020 01:08:59 GMT

_Version update only_

## 0.3.12
Tue, 10 Nov 2020 23:13:12 GMT

_Version update only_

## 0.3.11
Fri, 06 Nov 2020 16:09:30 GMT

### Patches

- Fix an issue where an error would be thrown if a value was omitted in a parent configuration file.

## 0.3.10
Fri, 30 Oct 2020 06:38:39 GMT

_Version update only_

## 0.3.9
Fri, 30 Oct 2020 00:10:14 GMT

_Version update only_

## 0.3.8
Wed, 28 Oct 2020 01:18:03 GMT

_Version update only_

## 0.3.7
Tue, 27 Oct 2020 15:10:13 GMT

_Version update only_

## 0.3.6
Thu, 15 Oct 2020 00:59:08 GMT

_Version update only_

## 0.3.5
Tue, 06 Oct 2020 00:24:06 GMT

_Version update only_

## 0.3.4
Mon, 05 Oct 2020 22:36:57 GMT

_Version update only_

## 0.3.3
Mon, 05 Oct 2020 15:10:43 GMT

_Version update only_

## 0.3.2
Thu, 01 Oct 2020 20:27:16 GMT

_Version update only_

## 0.3.1
Wed, 30 Sep 2020 18:39:17 GMT

### Patches

- Update to build with @rushstack/heft-node-rig

## 0.3.0
Wed, 30 Sep 2020 06:53:53 GMT

### Minor changes

- (BREAKING CHANGE) Remove "propertyInheritanceTypes" option in favor of a more flexible "propertyInheritance" that allows for custom inheritance.
- (BREAKING CHANGE) Change the ConfigurationFile API to take the project-relative configuration file in the constructor. Now the configuration file loading function takes the project root instead of the configuration file path.
- Add an API to "try" to load a configuration file, and return undefined if it doesn't exist instead of throwing an exception.
- Add support for config/rig.json.
- Upgrade compiler; the API now requires TypeScript 3.9 or newer

### Patches

- Update README.md

## 0.2.7
Tue, 22 Sep 2020 05:45:57 GMT

_Version update only_

## 0.2.6
Tue, 22 Sep 2020 01:45:31 GMT

_Version update only_

## 0.2.5
Tue, 22 Sep 2020 00:08:53 GMT

_Version update only_

## 0.2.4
Sat, 19 Sep 2020 04:37:27 GMT

_Version update only_

## 0.2.3
Sat, 19 Sep 2020 03:33:07 GMT

_Version update only_

## 0.2.2
Fri, 18 Sep 2020 22:57:24 GMT

_Version update only_

## 0.2.1
Fri, 18 Sep 2020 21:49:53 GMT

### Patches

- Allow "extends" fields to refer to modules in addition to relative paths.

## 0.2.0
Sun, 13 Sep 2020 01:53:20 GMT

### Minor changes

- (BREAKING CHANGE) Change the API to require the JSON schema path to be passed via the ConfigurationFile constructor options object.

## 0.1.3
Fri, 11 Sep 2020 02:13:35 GMT

_Version update only_

## 0.1.2
Mon, 07 Sep 2020 07:37:37 GMT

_Version update only_

## 0.1.1
Sat, 05 Sep 2020 18:56:35 GMT

_Version update only_

## 0.1.0
Thu, 27 Aug 2020 11:27:06 GMT

### Minor changes

- Initial project creation.

