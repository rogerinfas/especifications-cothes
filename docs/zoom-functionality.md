# Documentación de la Funcionalidad de Zoom

## Descripción

Este documento detalla la implementación de la funcionalidad de zoom en el visor de imágenes de la aplicación de especificaciones de ropa. La funcionalidad permite a los usuarios ampliar, reducir y desplazarse por las imágenes para examinar los detalles de las prendas.

## Librería Utilizada

**react-zoom-pan-pinch**
- Versión: 3.7.0
- Repositorio: [https://github.com/Prcovic/react-zoom-pan-pinch](https://github.com/Prcovic/react-zoom-pan-pinch)
- Documentación oficial: [https://www.npmjs.com/package/react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch)

## Características Implementadas

### 1. Controles de Zoom
- **Acercar (+):** Aumenta el nivel de zoom en pasos del 10%
- **Alejar (-):** Disminuye el nivel de zoom en pasos del 10%
- **Restablecer (⟲):** Vuelve a la vista original (zoom 100%)

### 2. Interacciones
- **Rueda del ratón:** Permite hacer zoom hacia adentro/afuera
- **Arrastre:** Mover la imagen con el mouse o dedo (en dispositivos táctiles)
- **Toque en dispositivos móviles:** Gestos de pellizco para hacer zoom

### 3. Límites de Zoom
- Zoom mínimo: 100% (1x)
- Zoom máximo: 500% (5x)
- Zoom inicial: 100% (1x)

## Estructura del Código

### Componente Principal: `ZoomableImage.tsx`

```tsx
<TransformWrapper
  initialScale={1}
  minScale={1}
  maxScale={5}
  centerOnInit
  wheel={{ step: 0.1 }}
>
  {({ zoomIn, zoomOut, resetTransform }) => (
    <>
      {/* Controles de zoom */}
      <div className="zoom-controls">
        <button onClick={() => zoomIn()}>+</button>
        <button onClick={() => zoomOut()}>-</button>
        <button onClick={() => resetTransform()}>⟲</button>
      </div>
      
      {/* Contenedor de la imagen */}
      <TransformComponent>
        <img 
          src={src} 
          alt={alt}
          draggable={false}
        />
      </TransformComponent>
    </>
  )}
</TransformWrapper>
```

## Uso

### Instalación

```bash
pnpm add react-zoom-pan-pinch
```

### Implementación Básica

```tsx
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function MiComponente() {
  return (
    <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>Reset</button>
          <TransformComponent>
            <img src="imagen.jpg" alt="Ejemplo" />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
```

## Personalización

### Props del TransformWrapper

| Propiedad      | Tipo     | Valor por defecto | Descripción                                   |
|----------------|----------|-------------------|-----------------------------------------------|
| initialScale   | number   | 1                 | Escala inicial de la imagen                   |
| minScale       | number   | 1                 | Escala mínima permitida                       |
| maxScale       | number   | 8                 | Escala máxima permitida                       |
| wheel.step     | number   | 0.1               | Incremento/decremento del zoom con la rueda   |
| centerOnInit   | boolean  | false             | Centrar la imagen al cargar                   |
| limitToBounds  | boolean  | true              | Limitar el desplazamiento a los bordes        |

## Consideraciones de Rendimiento

1. **Optimización de imágenes**: 
   - Las imágenes deben estar optimizadas para la web
   - Usar formatos modernos como WebP cuando sea posible

2. **Tamaño de la imagen**:
   - Evitar imágenes extremadamente grandes
   - Considerar el uso de `loading="lazy"` para imágenes que no están en la vista inicial

3. **Desmontaje de componentes**:
   - El componente se desmonta correctamente al cambiar de ruta
   - No deja listeners de eventos activos

## Solución de Problemas Comunes

### La imagen no responde a los gestos táctiles
- Verificar que no haya elementos superpuestos que intercepten los eventos táctiles
- Asegurarse de que el contenedor tenga dimensiones definidas

### El zoom no funciona en dispositivos móviles
- Verificar que la vista móvil tenga la etiqueta `viewport` correcta
- Asegurarse de que no haya eventos táctiles conflictivos

## Mejoras Futuras

1. **Zoom a región específica**: Permitir hacer zoom a una región seleccionada
2. **Rotación de imagen**: Añadir controles para rotar la imagen
3. **Modo pantalla completa**: Implementar un visor a pantalla completa
4. **Anotaciones**: Permitir agregar anotaciones sobre la imagen

## Referencias

- [Documentación oficial de react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch)
- [Ejemplos de implementación](https://github.com/Prcovic/react-zoom-pan-pinch/tree/develop/src/examples)
- [Guía de optimización de imágenes en React](https://web.dev/optimize-cls/)
