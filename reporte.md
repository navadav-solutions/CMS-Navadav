# Reporte de Auditoría: Imágenes y White-Label (Navadav CMS)

**Fecha:** 11 de Septiembre de 2026  
**Proyecto:** Navadav Headless CMS  
**Rama:** `feat/remove-squidex-branding`  

---

## 1. Resumen Ejecutivo

Este documento detalla:
1. El inventario exhaustivo de las **imágenes que efectivamente se renderizan en el Frontend**, su ubicación física en el árbol de carpetas y su posición visual en la interfaz.
2. La relación de imágenes estáticas presentes en el repositorio que actualmente **no se utilizan**.
3. Los puntos críticos donde un usuario final o técnico aún puede **identificar "Squidex"** dentro de la plataforma (imágenes, textos, enlaces, traducciones y código).

---

## 2. Imágenes Activas Renderizadas en el Frontend

La siguiente tabla resume todas las imágenes que son consumidas y mostradas en tiempo de ejecución por el Frontend de la aplicación:

| Imagen | Ruta física en el proyecto | Archivo de código fuente | Ubicación visual en pantalla |
| :--- | :--- | :--- | :--- |
| **`navadav-logo.png`** | `frontend/src/app/assets/navadav-logo.png` | `frontend/src/app/shell/pages/internal/logo.component.html:L2` | **Barra superior fija (Header/Navbar):** Logo principal en la esquina superior izquierda visible en toda la navegación interna. |
| **`logo.svg`** | `backend/src/Squidex/wwwroot/images/logo.svg` | `frontend/src/app/shell/pages/home/home-page.component.html:L4`<br>`backend/src/Squidex/Areas/IdentityServer/Views/_Layout.cshtml:L25` | **1. Pantalla de Inicio / Login:** En la tarjeta central, sobre el botón "Iniciar Sesión".<br>**2. Ventana de IdentityServer:** En la ventana emergente de autenticación. |
| **`squid.svg`** | `backend/src/Squidex/wwwroot/images/squid.svg`<br>`frontend/src/app/assets/squid.svg` | `frontend/src/app/shell/pages/not-found/not-found-page.component.html:L3`<br>`frontend/src/app/shell/pages/forbidden/forbidden-page.component.html:L3`<br>`frontend/src/app/shared/components/tour-guide.component.html:L53`<br>`frontend/src/app/framework/angular/modals/tour-template.component.html:L17`<br>`frontend/src/app/shared/components/chat-item.component.html:L14,L26`<br>`frontend/src/app/features/apps/pages/onboarding-dialog.component.html:L3`<br>`frontend/src/app/shared/components/pipes.ts:L195` | **Ilustración del calamar rosado en múltiples vistas:**<br>• Pantalla de error **404 (No Encontrado)**.<br>• Pantalla de error **403 (Prohibido)**.<br>• Guía interactiva paso a paso (**Tour**).<br>• Modal de inicio del tour.<br>• Avatar del **Chatbot / Asistente IA**.<br>• Modal de bienvenida (**Onboarding**).<br>• Avatar por defecto para usuarios del sistema/bots. |
| **`logo-white-small.png`** | `backend/src/Squidex/wwwroot/images/logo-white-small.png` | `frontend/src/app/features/apps/pages/onboarding-dialog.component.html:L9,L26,L74` | **Modal de Onboarding:** Logotipo blanco ubicado en la cabecera del modal cuando se crea o se ingresa a una App. |
| **`onboarding-background.png`** | `frontend/src/app/assets/onboarding-background.png` | `frontend/src/app/features/apps/pages/onboarding-dialog.component.scss:L38` | **Fondo del modal de Onboarding:** Gráfico decorativo de fondo en el diálogo de bienvenida. |
| **`loader.svg`** | `backend/src/Squidex/wwwroot/images/loader.svg` | `frontend/src/index.html:L59`<br>`frontend/src/app/app.component.html:L6` | **Pantalla de carga (Splash):** Spinner circular animado que se muestra mientras se descarga e inicia Angular. |
| **`folder.svg`** | `backend/src/Squidex/wwwroot/images/folder.svg` | `frontend/src/app/shared/components/assets/asset-folder.component.html:L4` | **Gestión de Recursos (Assets):** Ícono identificador para las carpetas y directorios. |
| **`dashboard-api.svg`** | `backend/src/Squidex/wwwroot/images/dashboard-api.svg` | `frontend/src/app/features/dashboard/pages/cards/api-card.component.html:L3` | **Dashboard de la App:** Ilustración en la tarjeta de acceso a la Documentación de la API. |
| **`dashboard-schema.svg`** | `backend/src/Squidex/wwwroot/images/dashboard-schema.svg` | `frontend/src/app/features/dashboard/pages/cards/schema-card.component.html:L3` | **Dashboard de la App:** Ilustración en la tarjeta informativa de Esquemas (Schemas). |
| **`add-app.svg`** | `backend/src/Squidex/wwwroot/images/add-app.svg` | `frontend/src/app/shared/components/app-form.component.html:L33` | **Modal "Crear App":** Ícono de la tarjeta para crear una aplicación en blanco. |
| **`add-template.svg`** | `backend/src/Squidex/wwwroot/images/add-template.svg` | `frontend/src/app/shared/components/app-form.component.html:L50` | **Modal "Crear App":** Ícono asignado a las plantillas predefinidas que no cuenten con logo propio. |
| **`asset_*.svg`** | `backend/src/Squidex/wwwroot/images/asset_*.svg` | `frontend/src/app/shared/components/assets/pipes.ts:L82`<br>`frontend/src/app/shared/components/assets/asset.component.html:L20` | **Gestión de Recursos (Assets):** Íconos mostrados dinámicamente según la extensión del archivo (`asset_pdf.svg`, `asset_docx.svg`, `asset_doc.svg`, `asset_xls.svg`, `asset_xlsx.svg`, `asset_ppt.svg`, `asset_pptx.svg`, `asset_video.svg`, `asset_generic.svg`). |

---

## 3. Imágenes Presentes en Carpetas pero No Renderizadas en el Frontend

Los siguientes archivos se encuentran en la carpeta estática `backend/src/Squidex/wwwroot/images/`, pero **no son referenciados en ninguna plantilla ni vista activa del frontend**:

- `login-icon.png` (reemplazado por `logo.svg` en la pantalla de acceso)
- `logo-half.png`
- `logo-small.png` (se utiliza `navadav-logo.png` o `logo-white-small.png`)
- `logo-squared-120.png` (utilizado internamente en suite de pruebas)
- `logo-white.png`
- `logo-wide.png`
- `logo.png`
- `loader-white.svg`
- `add-blog.svg` (recurso de datos de muestra para template de blog)
- `add-profile.svg` (recurso de datos de muestra para template de perfil)
- `dashboard-feedback.svg` (antigua tarjeta de feedback retirada del dashboard)
- `dashboard-github.svg` (antigua tarjeta de GitHub retirada del dashboard)

---

## 4. Dónde un Usuario Aún Puede Identificar "SQUIDEX"

A pesar de los avances en el proceso de white-label, existen varios lugares donde el nombre o la imagen de Squidex siguen visibles:

### 4.1. Elementos Visuales e Ilustraciones
- **El Calamar (`squid.svg`):**  
  Aparece en **7 puntos clave** de la interfaz:
  1. Pantalla de error **404 (Página no encontrada)**.
  2. Pantalla de error **403 (Acceso denegado)**.
  3. Avatar del **Chatbot / Asistente IA** (cada mensaje del bot muestra la cara del calamar).
  4. Guía interactiva del **Tour**.
  5. Modal de inicio del **Tour**.
  6. Diálogo de bienvenida (**Onboarding**).
  7. Avatar por defecto cuando un usuario del sistema realiza cambios en el historial.

### 4.2. Textos y Enlaces en Idioma Español (`backend/i18n/frontend_es.json`)
En la configuración actual en español, aún se muestran los siguientes textos y enlaces oficiales de Squidex:
- **Línea 165:** `clients.connectWizard.cliStep1Download`  
  Enlace de descarga: `https://github.com/Squidex/squidex-samples/releases`
- **Línea 177:** `clients.connectWizard.postManDocs`  
  Enlace a documentación: `https://docs.squidex.io/02-documentation/developer-guides/api-overview/postman`
- **Línea 950:** `schemas.fieldTypes.assets.previewFormatHint`  
  Enlace a documentación: `https://docs.squidex.io/02-documentation/developer-guides/api-overview/assets-api#how-to-resize-images`
- **Línea 1029:** `schemas.indexes.notEnableHint2`  
  Texto: *"Inicia Squidex con el parámetro rebuild una vez, espera a que termine..."*
- **Línea 1127:** `search.help`  
  Enlace a documentación: `https://docs.squidex.io/04-guides/02-api.html`
- **Línea 1176:** `templates.cliHint`  
  Texto y enlace: *"Descarga el CLI en https://github.com/squidex/squidex-samples para usar las plantillas."*

### 4.3. Textos si el Usuario Cambia de Idioma (ej. Inglés `frontend_en.json`)
Si cualquier usuario cambia el idioma a inglés, verá referencias directas como:
- `common.product`: `"Squidex Headless CMS"`
- `start.login`: `"Login to Squidex"`
- `apps.welcomeSubtitle`: `"Welcome to Squidex"`
- `tour.welcomeProduct`: `"Squidex CMS"`

### 4.4. Ventana de Login y Perfil (IdentityServer Razor Views)
En `backend/src/Squidex/Areas/IdentityServer/Views/_Layout.cshtml` (líneas 33-37):
- El pie de página utiliza las claves `@T.Get("setup.madeBy")` y `@T.Get("setup.madeByCopyright")`, las cuales traducen a:
  > *"Proudly made by Sebastian Stehle and Contributors, 2016-2024"*

### 4.5. Código y Servicios Técnicos
1. **Frontend `clients.service.ts` (Línea 84):**  
   El método `createToken` sigue solicitando `scope=squidex-api`, mientras que el backend ya fue actualizado a `navadav-api`.
2. **Editor Enriquecido:**  
   En `frontend/src/app/shared/components/forms/rich-editor.component.ts` (línea 135) se carga el archivo local `editor/squidex-editor.js`.

---

## 5. Recomendaciones de Acción

1. **Reemplazo de `squid.svg`:**  
   Sustituir el archivo `squid.svg` por un isotipo o ícono corporativo de **Navadav** (en `backend/src/Squidex/wwwroot/images/squid.svg` y `frontend/src/app/assets/squid.svg`). Esto neutralizará instantáneamente las pantallas de 404, 403, onboarding, tour y el avatar del bot de IA.
2. **Limpieza de Enlaces en `frontend_es.json`:**  
   Remover o redirigir las URLs de `docs.squidex.io` y `github.com/Squidex` hacia documentación o repositorios propios de Navadav.
3. **Ajuste del Pie de Página de IdentityServer:**  
   Actualizar `_Layout.cshtml` en IdentityServer para que muestre el enlace o copyright de Navadav en lugar de Sebastian Stehle.
4. **Corrección de Scope en `clients.service.ts`:**  
   Cambiar `scope=squidex-api` por `scope=navadav-api` para alinearlo con `Constants.cs`.
