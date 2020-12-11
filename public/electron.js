const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const env = process.env.NODE_ENV || "development";
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

if (env === "development") {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (_) {
    console.log("Error");
  }
}
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    opacity: 0.95,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
