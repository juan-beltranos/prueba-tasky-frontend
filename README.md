# Frontend para Gestión de Mensajes de Usuario

Este proyecto es una aplicación frontend que permite visualizar mensajes enviados por los usuarios, con la capacidad de mostrar los detalles de cada mensaje y la información del usuario. Utiliza Nextjs para la interfaz de usuario.

## Requisitos

- **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
- **npm** o **yarn**: Gestores de paquetes para instalar dependencias.

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <DIRECTORIO_DEL_REPOSITORIO>
    ```

2. **Instala las dependencias**:

    Con npm:
    ```bash
    npm install
    ```

    O con yarn:
    ```bash
    yarn install
    ```

3. **Instala `date-fns`**:

    Con npm:
    ```bash
    npm install date-fns
    ```

    O con yarn:
    ```bash
    yarn add date-fns
    ```

## Uso

1. **Inicia la aplicación**:

    Con npm:
    ```bash
    npm start
    ```

    O con yarn:
    ```bash
    yarn start
    ```

    Esto abrirá la aplicación en [http://localhost:3000](http://localhost:3000).

2. **Visualiza los mensajes**:

    La aplicación mostrará una lista de mensajes enviados por los usuarios. Los detalles incluyen el nombre del usuario, el número de teléfono y el contenido del mensaje, así como la fecha y hora del mensaje formateada.

## Estructura del Proyecto

- **`/src`**: Contiene todos los archivos de código fuente.
  - **`/components`**: Componentes reutilizables como tablas y modales.
  - **`/hooks`**: Hooks personalizados, como `useUsers` para obtener la lista de usuarios.
  - **`/pages`**: Archivos de la página principal y otros componentes de nivel superior.
  - **`/types`**: Definiciones de tipos TypeScript.
  - **`/utils`**: Utilidades como la configuración de la API.

- **`/public`**: Archivos estáticos como `index.html`.

- **`package.json`**: Archivo de configuración de npm con scripts y dependencias.

## Notas

- **`date-fns`**: La librería `date-fns` se utiliza para formatear fechas en la aplicación. Asegúrate de que esté correctamente instalada.
- **API**: La aplicación espera que la API esté disponible en `/users/messages` para obtener los mensajes de los usuarios.

