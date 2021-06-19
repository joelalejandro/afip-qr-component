# `@paperchest/afip-qr-element`

## Instalación

Antes de utilizar el componente:

```html
<script src="https://paperchest.studio/js/afip-qr/afip-qr.min.js"></script>
```

## Modo de uso

```html
<afip-qr
  code="..."
  class="miAfipQR"
  title="Consultá nuestro formuario F960"></afip-qr>
```

El código se extrae del link del QR provisto en la página de AFIP.
Por ejemplo, si tu código es `manzana`, en el link de AFIP figurará como:

```
http://qr.afip.gob.ar/?qr=manzana,,
                          |-----|
                          |
                          | este es el valor de "code"
```
