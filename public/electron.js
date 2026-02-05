import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import isDev from "electron-is-dev";

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("Dirname ", __dirname, __filename);
function createWindow() {
  mainWindow = new BrowserWindow({
    height: 1500,
    width: 800,
    title: "Musicfy",
    titleBarStyle: "hiddenInset",
    resizable: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => (mainWindow = null));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
