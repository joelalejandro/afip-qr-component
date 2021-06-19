# `@paperchest/afip-qr-react`

## Instalación

```bash
# Instalamos el componente (con npm o yarn u otro gestor de paquetes)
npm install @paperchest/afip-qr-react
```

## Modo de uso

```jsx
<AfipQR
  code="..."
  className="miAfipQR"
  title="Consultá nuestro formulario F960" />
```

El código se extrae del link del QR provisto en la página de AFIP.
Por ejemplo, si tu código es `manzana`, en el link de AFIP figurará como:

```
http://qr.afip.gob.ar/?qr=manzana,,
                          |-----|
                          |
                          | este es el valor de "code"
```
