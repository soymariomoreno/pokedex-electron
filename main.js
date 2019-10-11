// Controla el ciclo de vida de la aplicación y ventana
const { app, BrowserWindow } = require('electron')

let win;

// Cuando todo se haya cargado, mediante el evento ready empezaremos a definir la aplicación
function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 400,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })

  win.loadURL(`file://${__dirname}/dist/index.html`)

  // Abrimos las opciones de desarollo
  win.webContents.openDevTools()

  // Liberamos los recursos referentes a la ventana
  win.on('closed', function () {
    win = null
  })
}

// Creamo la nueva ventana
app.on('ready', createWindow)

// Terminamos el proceso de la aplicación cuando todas las ventanas se han cerrado
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})