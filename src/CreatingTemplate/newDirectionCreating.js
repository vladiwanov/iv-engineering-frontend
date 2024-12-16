// import { routes } from "../routesTest.js";
// const { log } = require("console");
// const { appendFile } = require("fs");
const path = require("path");
// import path from "path";
const fs = require("fs").promises;
// import fs from "fs/promises";
// const routes = require("../routesTest");
const { log } = require("console");

// console.log(__dirname);

// console.log("!!!!!!!!!!!!!!!!!!!!!\n", routes);

// -------------------cb--------------------------------------------

const onErr = (err) => {
  const errMes = "❌ ERROR MESSAGE IS ❗️:::" + err;
  throw errMes;
};

const cbReadFile = (data) => {
  console.log("✅✅ CONTENT:::::", data);
  return data;
};

const readInfo = async (arg) => {
  const rez = fs.readFile(arg, "utf-8", async (err, data) => {
    try {
      await cbReadFile(data);
    } catch (err) {
      // onErr(err);
      throw err;
    }
  });
  return await rez;
};

const writeInfo = async (arg1, arg2) => {
  const res = fs.writeFile(arg1, arg2, async (data) => {
    try {
      return await data;
    } catch (err) {
      // onErr(err);
      throw err;
    }
  });
};

const appendInfo = async (pathArg, contentArg, destObject) => {
  const res = fs.appendFile(pathArg, contentArg, async (data) => {
    try {
      return data;
    } catch (err) {
      onErr(err);
    }
  });
  return await res;
};

const creatingNewDirection = async () => {
  try {
    // -----------------------------path from-------------------------------------------------

    const newDirectionDescrPath = path.resolve(
      __dirname,
      "../CreatingTemplate",
      "directionDescription.json"
    );

    const readContentPath = path.resolve(
      __dirname,
      "../CreatingTemplate",
      "contentItemTemplate.js"
    );

    const readStylePath = path.resolve(
      __dirname,
      "../CreatingTemplate",
      "stylesTemplate.scss"
    );
    // console.log(":::::::::::🍑🥥:::::", readStylePath);

    const langEnPath = path.resolve(
      __dirname,
      "../CreatingTemplate",
      "contentTemplate-en.json"
    );

    const langUaPath = path.resolve(
      __dirname,
      "../CreatingTemplate",
      "contentTemplate-ua.json"
    );

    const content = readInfo(newDirectionDescrPath);

    // ----------------------MAIN-----------------------------------------
    //* creating new destination Folder

    // const folderContent = await readInfo(newDirectionDescrPath);
    // const newDirContent = await readInfo(newDirectionDescrPath);

    const newDirectionContent = JSON.parse(
      await readInfo(newDirectionDescrPath)
    );
    // console.log(
    //   "NEWDIRECTION CONTENT IS ::::::🛜:::::📉:::::::",
    //   newDirectionContent
    // );

    const directionName = newDirectionContent.dirname;
    // console.log("✅::::::💹::🍎::::😚", directionName);

    // const newDirPath = path.resolve(
    //   __dirname,
    //   "../content-components",
    //   directionName
    // );
    // const newFolder = fs.mkdir(newDirPath, async (data) => {
    //   try {
    //     return data;
    //   } catch (err) {
    //     onErr(err);
    //   }
    // });

    // //* path for creating new direction file
    // const directionContentPath = path.resolve(
    //   newDirPath,
    //   `${directionName}.js`
    // );

    // //* creating new direction file
    // const fileContent = await readInfo(readContentPath);
    // fs.writeFile(directionContentPath, fileContent, async (data) => {
    //   try {
    //     return data;
    //   } catch (err) {
    //     onErr(err);
    //   }
    // });

    // // * creating style file
    // const newDirStylePath = path.resolve(
    //   newDirPath,
    //   `${directionName}.module.scss`
    // );
    // const styleContent = await readInfo(readStylePath);
    // await writeInfo(newDirStylePath, styleContent);

    // // * creating index.js file
    // await writeInfo(
    //   path.resolve(newDirPath, "index.js"),
    //   `export { default } from "./${directionName}"`
    // );

    // // * creating language-En content
    // const langEnPathDest = path.resolve(
    //   __dirname,
    //   "../utils/db/en",
    //   `${directionName}-en.json`
    // );
    // const readEnContent = await readInfo(langEnPath);
    // await writeInfo(langEnPathDest, readEnContent);

    // // * creating language-Ua content
    // const langUaPathDest = path.resolve(
    //   __dirname,
    //   "../utils/db/ua",
    //   `${directionName}-ua.json`
    // );
    // const readUaContent = await readInfo(langUaPath);
    // await writeInfo(langUaPathDest, readUaContent);
    // -------------------------------------------------------------------------------

    // ------------add route to routes----------------------------------------------------
    const routesPath = path.resolve(__dirname, "../routesTest.js");
    const routKey = newDirectionContent.routeKey;
    const newRoute = { [routKey]: directionName };

    // const routeRead = await readInfo(routesPath);
    // const routeRead2 = JSON.parse(await readInfo(routesPath));
    // const routesTest = { ...routes };
    // console.log("ALARM FROM ROUTES::::🥰😘💕:::::", routes.alarm);

    // console.log("ROUTES  ::::::🔯✝️🕉️☸️🪯::::::", routesTest);
    // console.log("ROUTES IN MEMOTY ::::🥲::🔯✝️🕉️☸️🪯::::::", routeRead);
    // const newRoutes = { ...routesTest, [routKey]: directionName };
    // console.log("::::::::::NEW FILE ROUTES:::::::🍑", newRoutes);

    // console.log("NEW_ROUTE:::⏩️:::💹::::💟:", newRoute);

    // -------------------------------------------------------------------------------
  } catch (err) {
    // onErr(err);
    throw err;
  }
};

creatingNewDirection();

// const testArray = require("./testArray.js");
// testArray.map((item) => console.log(`${item}En`));
// module.exports = testArray;
