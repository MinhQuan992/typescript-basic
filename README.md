# GETTING STARTED WITH TYPESCRIPT

## 1. Install TypeScript using npm
```shell
npm install -g typescript
```

## 2. Create new project
- Create new folder and new files.
- Run these commands:

    ```shell
    npm init
    npm install --save-dev lite-server
    ```
- After that, go to **package.json** and add this line into _"script"_:

    ```json
    "start": "lite-server"
    ```
- Compile the TypeScript file into Javascript file by using this command:
    
    ```shell
    tsc app.ts
    ```
- Open new terminal, run the project by using this command:

    ```shell
    npm start
    ```
- Every time you change your TypeScript file, you only need to recompile that file. Lite-server will show the new result in the browser immediately.
- You can use this command to compile the TypeScript file in watch mode. In this mode, it automatically recompile the file after you save changes in that file.
    ```shell
    tsc app.ts -w
    ```

## NOTE: Compile the entire project
If you want to compile the entire project, you can follow these steps:
- Run ```tsc --init``` to generate **tsconfig.json**.
- _exclude_: If there are any TypeScript files that you don't want to compile, you can exclude them by adding _"exclude"_ into **tsconfig.json** like this:

    ```json
    "exclude": [
        "./src/01-basics.ts",
        "./src/02-obj-array-enum.ts",
        "./src/03-union-aliases.ts",
        "./src/04-functions.ts",
        "./src/05-unknown-never.ts"
    ]
    ```
- _include_: If you only want to compile some specific TypeScript files (not all), you can include them by adding _"include"_ into **tsconfig.json** like this:

    ```json
    "include": [
        "./src/app.ts",
        "./src/analytics.ts"
    ]
    ```
- After that, you can compile the entire project by running this command ```tsc``` (or ```tsc -w``` if you want to compile in watch mode).