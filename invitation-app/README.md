# Modulo creación Invitaciones a complejo de departamentos Privados
## Proyecto personal de práctica

### Descripción
El módulo forma parte de una supuesta aplicación de administración de condomino de departamentos.
Cuenta con módulos especializados para gestión de anuncios y quejas, control de acceso de visitas y proveedores;
finanzas y reserva de espacios comunes.
Se trata de un incremento en la funcionalidad del producto completo; y se requiere que los usuarios puedan generar invitaciones digitales para sus invitados en forma de QR,
que podrán compartir con sus invitados para acelerar el proceso de entrada a su residencia.

Los datos son obtenidos desde una API propia que se encuentra dentro del mismo proyecto desarrollada en Express contra una base de datos Mongo.

## Requisitos previos:
- Node.js
- npm
- MongoDB

## Instalación
Para instalar todas las dependencias necesarias:

#### API (backend)
```bash
cd api-service
npm install
```
#### Front
```bash
cd invitation-app
npm install
```
## Ejecución en desarrollo

#### API
```bash
npm run generateUsers
npm run dev
```
El servicio se ejecutará en `http://localhost:3001` 
generateUsers: se ejecuta una sola vez para hecer una pre-carga de usuarios que se supone ya fueron creados por los administradores de la aplicación.
#### Front
```bash
npm run dev
```
La aplicación se ejecutará en `http://localhost:5173`

### Funcionalidades:
- Login de usuario
- Gestión de invitaciones

