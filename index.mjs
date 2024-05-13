import { app, BrowserWindow } from "electron";

async function run() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadURL(`http://localhost:5173`);
}

app.whenReady().then(run);
app.on('window-all-closed', () => {
    // @ts-ignore
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        run()
    }
});
