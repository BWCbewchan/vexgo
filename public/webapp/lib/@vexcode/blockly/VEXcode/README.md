# Read Me

This document should include all the process for building Blockly & publishing a new version.
If you want to read it online use this [link](https://git.innovationfirst.net/vexcode/vexcode-blockly/-/tree/vexcode/VEXcode).

## Table of Contents

1. [Get Started](#get-started)
2. [Making a build](#making-a-build)
3. [Definitions](#definitions)
4. [Project Versioning Documentation](#project-versioning-documentation)

----

## Get Started

Get started by making you own Blockly build. Follow the instructions carefully as this requires a manual process.

### Just Testing

Use this if you just want to make a local build and test it with VEXcode

1. Checkout the correct branch
2. Making a build using the following instructions: [Making a build](#making-a-build)
3. Go to VEXcode and do `npm i ../../../vexcode-blockly`
    1. Here the path would depend on where you installed vexcode-blockly repo
4. Make a build in VEXcode

### Publishing to NPM

Use this if you want to bump the Blockly version and publish it npm.

#### In Blockly

1. Make sure you are on the correct branch
2. Reset to remote `git reset --hard`
3. Go to `package.json` and bump up the version. For example `"version": "x.x.3" -> "version": "x.x.4"`
4. Making a build using the following instructions: [Making a build](#making-a-build)
5. Add all of your changes `git add .`
6. Commit your changes `git commit -m "Bumped version to x.x.x"`
    1. When selecting a version to bump use the following guidelines: [Project Versioning Documentation](#project-versioning-documentation)
7. Push your changes `git push`
8. Publish to NPM `npm publish`

#### In VEXcode repo

1. Make sure you are on the correct branch
2. Reset to remote `git reset --hard`
3. Go to `package.json` and bumpe up the version for `@vexcode/blockly` to `x.x.x` - whatever you set it to
4. Run `npm i`
5. Make a build and sanity check
6. Add all of your changes `git add .`
7. Commit your changes git commit -m `"Bumped @vexcode/blockly version to x.x.x"`
8. Push your changes `git push`

----

## Making a build

These instructions are to help you make a build.

If you haven't before, make sure you are connected to the VEXcode package manager [setup guide](https://git.innovationfirst.net/vexcode/npm-packages/-/wikis/npm-registry-setup)

### Initial

1. Run `npm i`

### Building with no type changes

Run this if you are changes don't include updating any types.

1. `npm run build`
2. `npm run package`

### Building with type changes

Run this if your changes include updating any types.

1. `npm run build`
2. build types
    1. `npx gulp typings typingsUncompressed`
    2. replace everything in `cpp.d.ts` with [CPP in cpp.d.ts 🔧](#cpp-in-cppdts-)
    3. replace everything in `javascript.d.ts` with [JavaScript in javascript.d.ts 🟨](#javascript-in-javascriptdts-)
    4. replace everything in `python.d.ts` with [Python in python.d.ts 🐍](#python-in-pythondts-)
    5. God why
        1. update `interface BlockInfo` in `blockly.d.ts` and `core.d.ts` with [Interface BlockInfo](#interface-blockinfo)
        2. update `Blockly.FieldMultilineInput` in `blockly.d.ts` and `core.d.ts` with [Module Blockly.FieldMultilineInput](#module-blocklyfieldmultilineinput)
        3. update CPP definition in `blockly.d.ts` with [CPP in blockly.d.ts](#cpp-in-blocklydts)
        4. update Javascript definition in `blockly.d.ts` with [Javascript in blockly.d.ts](#javascript-in-blocklydts)
        5. update Python definition in `blockly.d.ts` with [Python in blockly.d.ts](#python-in-blocklydts)

3. `npm run package`

----

## Definitions

These are the definitions you want to replace with.

### Interface BlockInfo

Replace the interface in both of these files.

- `typings/blockly.d.ts`

- `typings/core.d.ts`

```javascript
interface BlockInfo {
    kind: string;
    blockxml?: string|Node;
    type?: string;
    gap?: string|number;
    disabled?: string|boolean
}
```

### Module Blockly.FieldMultilineInput

Definition for `Blockly.FieldMultilineInput` is in two files. You have to replace both of instances with the following. Note, only replace what is listed, there are functions that needs to stay as is.

- `typings/blockly.d.ts`

- `typings/core.d.ts`

```javascript
declare module Blockly.FieldMultilineInput {
    ... (keep above and only replace whats listed below)
    /**
     * @param containerDiv the div that will contain the custom editor
     * @param currentValue the starting value to display in the editor
     * @param scale the current scale of the workspace
     * @param onChangeCallback a callback function that will get called any
     * time the value in the editor changes
     * @param onCancelCallback a callback function that will get called any
     * time editor detects that the escape button is pressed.
     * @param setDisposeFunction a function that gets called to tell Blockly
     * what function to call to handle disposing of the custom editor.
     * @returns a value (not undefined) if a custom editor was created
     */
    type CustomEditorFunction = (
      containerDiv: HTMLDivElement, 
      currentValue: string,
      scale: number,
      onChangeCallback: (newValue: string) => void,
      onCancelCallback: () => void,
      setDisposeFunction: (disposeFunction: () => void) => void) => any;

    /**
     * @param containerDiv the div that will contain the custom viewer
     * @param currentValue the starting value to display in the viewer
     * @returns true if the custom viewer was created
     */
    type CustomViewerFunction = (containerDiv: HTMLDivElement, currentValue: string) => boolean;

    /**
     * a function that can be set to override the default editor used by the multiline input
     * @type {Blockly.FieldMultilineInput.CustomEditorFunction}
     */
    var customEditor: Blockly.FieldMultilineInput.CustomEditorFunction;

    /**
     * a function that can be set to override the default viewer used by the multiline input
     * @type {Blockly.FieldMultilineInput.CustomViewerFunction}
     */
    var customViewer: Blockly.FieldMultilineInput.CustomViewerFunction;
}
```

### CPP in blockly.d.ts

This is all located inside `typings/blockly.d.ts`.

Replace `declare module Blockly` definition like such:

```javascript
declare module Blockly {
    /**
     * CPP code generator.
     * @type {!Blockly.Generator}
     */
    var CPP: Blockly.Generator & BlocklyCPPGeneratorExt;
}
```

Then remove the following module:

```javascript
declare module Blockly.CPP {
    ...// Yes, including all the code inside
}
```

### JavaScript in blockly.d.ts

This is all located inside `typings/blockly.d.ts`.

Replace `declare module Blockly` definition like such:

```javascript
declare module Blockly {
    /**
     * JavaScript code generator.
     * @type {!Blockly.Generator}
     */
    var JavaScript: Blockly.Generator & BlocklyJavaScriptGeneratorExt;
}
```

Then remove the following module:

```javascript
declare module Blockly.JavaScript {
    ...// Yes, including all the code inside
}
```

### Python in blockly.d.ts

This is all located inside `typings/blockly.d.ts`.

Replace `declare module Blockly` definition like such:

```javascript
declare module Blockly {
    /**
     * Python code generator.
     * @type {!Blockly.Generator}
     */
    var Python: Blockly.Generator & BlocklyPythonGeneratorExt;
}
```

Then remove the following module:

```javascript
declare module Blockly.Python {
    ...// Yes, including all the code inside
}
```


### CPP in cpp.d.ts 🔧

Replace everything in `typings/cpp.d.ts` with the following. Yes everything.

```javascript
declare module Blockly {
    /**
     * CPP code generator.
     * @type {!Blockly.Generator}
     */
    var CPP: any;
}
```

### JavaScript in javascript.d.ts 🟨

Replace everything in `typings/javascript.d.ts` with the following. Yes everything.

```javascript
declare module Blockly {
    /**
     * JavaScript code generator.
     * @type {!Blockly.Generator}
     */
    var JavaScript: any;
}
```

### Python in python.d.ts 🐍

Replace everything in `typings/python.d.ts` with the following. Yes everything.

```javascript
declare module Blockly {
    /**
     * Python code generator.
     * @type {!Blockly.Generator}
     */
    var Python: any;
}
```

## Project Versioning Documentation

Our project uses a standard semantic versioning format: `X.Y.Z`, where:

- `X` is the major version.
- `Y` is the minor version.
- `Z` is the patch version.

Each element in the version number indicates a specific level of changes made to the project.

**Major Version** - `X`:

- When to Bump: The major version should be increased when there are significant changes that are incompatible with the previous version. This includes backward-incompatible API changes or major alterations in functionality.
- How to Bump:  `1.2.3` becomes `2.0.0`.

**Minor Version** - `Y`:

- When to Bump: The minor version should be increased when new features or interfaces are added in a backward-compatible manner.
- How to Bump:  `1.2.3` becomes `1.3.0`.

**Patch Version** - `Z`:

- When to Bump: The patch version should be increased for backward-compatible bug fixes that do not affect the functionality or interfaces of the software.
- How to Bump:  `1.2.3` becomes `1.2.4`.
