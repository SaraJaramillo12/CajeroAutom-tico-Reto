# Simulación de Cajero Automático

## Descripción del Proyecto

Este proyecto es una simulación de un cajero automático básico utilizando JavaScript. Permite a los usuarios iniciar sesión como administradores o clientes y realizar diferentes acciones según su tipo de usuario.

## Funcionalidades

1. **Inicio de Sesión**:
   - Los usuarios pueden iniciar sesión ingresando su documento y contraseña.
   - Hay dos tipos de usuarios: administradores y clientes.
   - Los administradores pueden cargar el cajero con billetes.
   - Los clientes pueden retirar dinero si hay suficientes billetes en el cajero.

2. **Cargar el Cajero (Administrador)**:
   - Los administradores pueden agregar billetes de diferentes denominaciones al cajero.
   - Se muestra un resumen de los billetes disponibles y el total de dinero en el cajero.

3. **Retirar Dinero (Cliente)**:
   - Los clientes pueden retirar una cantidad específica de dinero.
   - Si no hay suficientes billetes para completar el retiro, se muestra un mensaje de error.
   - Se muestra un resumen de los billetes restantes después de un retiro exitoso.

## Estructura del Código

- **Lista de Usuarios**: Contiene los datos de los usuarios (nombre, documento, contraseña, tipo).
- **Inicialización de Billetes**: Define las denominaciones de los billetes y sus cantidades iniciales.
- **Funciones**:
  - `encontrarUsuario`: Encuentra un usuario por documento y contraseña.
  - `mostrarResumen`: Muestra un resumen de los billetes y el total de dinero en el cajero.
  - `iniciarSesion`: Gestiona el inicio de sesión de los usuarios.
  - `cargarCajero`: Permite a los administradores cargar el cajero con billetes.
  - `retirarDinero`: Permite a los clientes retirar dinero del cajero.
  - `reset`: Reinicia la interfaz de usuario.

## Uso del Proyecto

1. **Iniciar Sesión**:
   - Ingrese el documento y la contraseña en el formulario de inicio de sesión.
   - Haga clic en "Iniciar Sesión".

2. **Cargar el Cajero (Solo Administradores)**:
   - Ingrese las cantidades de billetes en los campos correspondientes.
   - Haga clic en "Cargar Cajero".
   - Se actualizará el resumen de billetes y el total de dinero en el cajero.

3. **Retirar Dinero (Solo Clientes)**:
   - Ingrese la cantidad a retirar en el campo correspondiente.
   - Haga clic en "Retirar Dinero".
   - Si el retiro es exitoso, se actualizará el resumen de billetes.