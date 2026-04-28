# Aplicación de Agenda

Aplicación web para la gestión de tareas y eventos, desarrollada con React y Vite. Incluye navegación entre páginas, lista de tareas, eventos programados y perfil de usuario.

## Requisitos Previos

Antes de instalar el proyecto, asegúrate de tener instalado:
- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes, incluido con Node.js)

### Verificar si tienes Node.js instalado

Puedes verificar si los tienes instalados con los siguientes comandos:
```bash
node --version
npm --version
```

### Instalar Node.js

Si no tienes Node.js instalado, elige uno de estos métodos según tu sistema operativo:

#### **Windows**

**Opción 1: Con winget (recomendado, más rápido)**
```bash
winget install OpenJS.NodeJS
```

**Opción 2: Con Chocolatey (si lo tienes instalado)**
```bash
choco install nodejs
```

**Opción 3: Descargar e instalar manualmente**
1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión LTS (Long Term Support) recomendada
3. Ejecuta el instalador y sigue los pasos
4. Reinicia tu ordenador

#### **macOS**

**Opción 1: Con Homebrew (recomendado)**
```bash
brew install node
```

**Opción 2: Descargar manualmente**
1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión LTS para macOS
3. Ejecuta el instalador y sigue los pasos

#### **Linux (Ubuntu/Debian)**

**Opción 1: NodeSource repository (recomendado)**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Opción 2: Con apt (versión puede no ser la más reciente)**
```bash
sudo apt-get install nodejs npm
```

#### **Verificar la instalación**

Después de instalar, abre una **nueva terminal** y verifica:
```bash
node --version
npm --version
```

## Instalación

1. Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/Hsandin7/AplicacionAgendaIA.git
```

2. Accede al directorio del proyecto:
```bash
cd AplicacionAgendaIA
```

3. Instala las dependencias ejecutando:
```bash
npm install
```

## Ejecución Local

Para ejecutar el proyecto en tu máquina local:

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173/`. Cualquier cambio que hagas en el código se reflejará en tiempo real gracias a Hot Module Replacement (HMR).

## Ejecución en Red (Acceso desde otros dispositivos)

Para ejecutar la aplicación y permitir el acceso desde otros dispositivos en tu red local:

```bash
npm run dev -- --host
```

Después de ejecutar este comando, la terminal mostrará direcciones IP locales como:
- `http://localhost:5173/` (acceso desde tu máquina)
- `http://192.168.x.x:5173/` (acceso desde otros dispositivos en la red)

Usa la dirección IP de tu máquina para acceder desde otros dispositivos en la misma red.

## Comandos Útiles

### Build para Producción
Compila el proyecto para su distribución en producción:
```bash
npm run build
```

### Vista Previa de Build
Visualiza cómo se verá la aplicación compilada:
```bash
npm run preview
```

### Lint (Verificar Código)
Verifica que el código cumpla con los estándares de ESLint:
```bash
npm run lint
```

## Pautas Útiles

### Estructura del Proyecto
- **`src/pages/`** - Páginas principales de la aplicación (Home, Tareas, Perfil, Documentos)
- **`src/components/`** - Componentes reutilizables (Header, BottomNav, EventsList, TasksList, etc.)
- **`src/assets/`** - Recursos estáticos (imágenes, iconos, etc.)
- **`src/styles/`** - Estilos globales

### Durante el Desarrollo
- El servidor de desarrollo recarga automáticamente (HMR) cuando editas archivos
- Abre la consola del navegador (F12) para ver mensajes de error
- Ejecuta `npm run lint` regularmente para mantener la calidad del código

### Antes de Desplegar
- Ejecuta `npm run lint` para verificar errores de linting
- Ejecuta `npm run build` para compilar la aplicación
- Prueba el build compilado con `npm run preview`
- Comprueba que la aplicación funciona correctamente en diferentes navegadores

### Acceso en Red
- Asegúrate de que tu firewall permite conexiones en el puerto 5173
- Si otros dispositivos no pueden acceder, verifica que ambos estén en la misma red
- En algunos casos puede ser necesario desactivar VPN o firewall temporalmente para pruebas

## Dependencias Principales

- **React 19** - Librería de interfaz de usuario
- **React Router DOM** - Enrutamiento entre páginas
- **Vite** - Herramienta de construcción y desarrollo
- **Vite Plugin PWA** - Soporte para Progressive Web App
