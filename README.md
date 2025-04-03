# 🚀 PWA CRUD - Gestor de Tareas Offline

## 🔍 Descripción 
Aplicación web progresiva (PWA) para gestión de tareas con capacidad **offline**, que permite:

- Crear, leer, actualizar y eliminar registros
- Funcionar sin conexión usando Service Workers
- Instalarse como app nativa en dispositivos
- Sincronizar datos al recuperar conexión

**Tecnologías clave**: React, Vite, IndexedDB, Workbox

<img width="161" alt="Captura de pantalla 2025-04-02 234312" src="https://github.com/user-attachments/assets/0e7dfa11-29a6-45c1-ad53-8fb5692e7251" />
<img width="959" alt="Captura de pantalla 2025-04-03 025337" src="https://github.com/user-attachments/assets/a7e7cea2-7f52-4b84-bd35-5e2db533df11" />
<img width="959" alt="Captura de pantalla 2025-04-03 025602" src="https://github.com/user-attachments/assets/c1206be8-6cbb-4e53-bd57-ecdb244560ee" />
<img width="959" alt="Captura de pantalla 2025-04-03 025728" src="https://github.com/user-attachments/assets/09af8c0d-0283-41bf-8985-6eb58d7df4be" />


### Interfaz Principal
*Descripción*:  
1. **Barra superior**: Botón de instalación PWA  
2. **Sección central**: Formulario para nueva tarea  
3. **Lista inferior**: Tareas almacenadas con opciones de editar/eliminar  

### Modo Offline

<img width="959" alt="Captura de pantalla 2025-04-03 025728" src="https://github.com/user-attachments/assets/6dca058d-8cae-47bf-87f7-c61341afff4d" />


## 🛠️ Tecnologías Usadas
| Tecnología | Función |
|------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Interfaz de usuario |
| ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | Bundler y servidor |
| ![IndexedDB](https://img.shields.io/badge/IndexedDB-ED1A3A?style=for-the-badge&logo=javascript&logoColor=white) | Almacenamiento local |

## ⚙️ Cómo Ejecutarlo

### Requisitos
- Node.js v18+
- Navegador Chrome/Edge/Firefox

### Pasos
```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/pwa-crud.git

# 2. Instalar dependencias
npm install

# 3. Iniciar entorno de desarrollo
npm run dev

# 4. Abrir en navegador
http://localhost:3000

# Generar build optimizado
npm run build

# Servir versión producción
npm run preview

npm run preview  # Usa el servidor integrado de Vite

npm install gh-pages --save-dev
# Agrega esto en package.json:
"homepage": "https://tu-usuario.github.io/pwa-crud",
"scripts": {
  "deploy": "gh-pages -d dist"
}

ejecuta:
npm run deploy


2. **Si usas Vite/React**:
- El comando `npm run build` generará una carpeta `/dist` con los archivos estáticos listos para producción.

3. **Para imágenes de referencia**:
![Estructura README](https://i.imgur.com/Jf6q0ZL.png)  

### 💡 Consejos adicionales:
- Si despliegas en **GitHub Pages**, añade un apartado específico:
```markdown
### GitHub Pages
1. Ve a Settings > Pages
2. Selecciona branch `gh-pages` y carpeta `/root`
3. Accede a tu app en: `https://tu-usuario.github.io/pwa-crud`

Para Firebase Hosting:
npm install -g firebase-tools
firebase init hosting
firebase deploy


---

### 📌 **Pasos Finales para Subir a GitHub**

1. **Crea el archivo README.md** en la raíz de tu proyecto
2. **Copia el contenido anterior** y personaliza:
   - Reemplaza las URLs de placeholder con tus imágenes reales
   - Actualiza `tu-usuario` en el comando de clonación
   - Ajusta las tecnologías usadas

3. **Guarda los cambios** y ejecuta:
```bash
git add README.md
git commit -m "Agrega documentación inicial"
git push
