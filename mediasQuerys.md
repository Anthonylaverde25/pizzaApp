## Estilos para Pantallas Receptivas

Para crear una aplicación web receptiva que cumpla con los requisitos de diseño para diferentes tamaños de pantalla, puedes utilizar consultas de medios en tu hoja de estilo CSS. A continuación, se muestra un ejemplo básico de cómo podrías estructurar tu CSS para lograrlo:

```css
/* Estilos base para todos los tamaños de pantalla */

/* Consulta de medios para dispositivos con un ancho de pantalla mínimo de 320px */
@media screen and (min-width: 320px) {
  /* Agrega aquí tus estilos específicos para dispositivos móviles */
}

/* Consulta de medios para dispositivos con un ancho de pantalla mínimo de 768px (tablets) */
@media screen and (min-width: 768px) {
  /* Agrega aquí tus estilos específicos para tablets */
}

/* Consulta de medios para dispositivos con un ancho de pantalla mínimo de 1024px (escritorios) */
@media screen and (min-width: 1024px) {
  /* Agrega aquí tus estilos específicos para escritorios */
}
```
