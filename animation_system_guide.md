# Guía del Sistema de Animaciones (GSAP + Lenis)

Este documento describe la arquitectura de animaciones implementada en este proyecto. Está diseñado para ser leído por un desarrollador o una IA para replicar o extender el sistema.

## 1. Stack Tecnológico
- **Motor de Animación**: [GSAP](https://gsap.com/) (GreenSock Animation Platform).
- **Scroll Suave**: [Lenis](https://lenis.darkroom.engineering/).
- **Framework**: Next.js (App Router).

## 2. Arquitectura del Sistema

### A. Inicialización Global (`app/layout.tsx`)
El sistema se inicializa en el layout raíz para asegurar que esté disponible en toda la aplicación.
- `GSAPInitializer`: Registra los plugins de GSAP (`ScrollTrigger`) en el lado del cliente.
- `LenisProvider`: Envuelve la aplicación para habilitar el scroll suave.

### B. Transiciones de Página (`app/template.tsx`)
Utilizamos `template.tsx` en lugar de `layout.tsx` para las transiciones de página. 
**Razón técnica**: Los layouts en Next.js son persistentes y no se vuelven a montar al navegar. Los templates se desmontan y montan en cada cambio de ruta, lo que permite disparar la animación de entrada de GSAP siempre.

**Efecto actual**: Opacidad + Blur + Desplazamiento Vertical (Slide Up).

### C. Componente de Revelado (`app/Components/Animations/Reveal.tsx`)
Un componente reutilizable para animar elementos cuando entran en el viewport.
- **Props**:
  - `direction`: "up" | "down" | "left" | "right" | "none".
  - `delay`: Retraso en segundos.
  - `duration`: Duración de la animación.

## 3. Cómo usar el sistema

### Para animar una nueva sección:
Simplemente envuelve el componente o etiqueta HTML con `<Reveal>`:

```tsx
import Reveal from '@/app/Components/Animations/Reveal';

<Reveal direction="up" delay={0.2}>
  <section>
    <h2>Contenido Animado</h2>
  </section>
</Reveal>
```

### Para modificar la transición global de página:
Edita el archivo `app/template.tsx`. El `useEffect` contiene la línea de tiempo de GSAP que se ejecuta al cambiar el `pathname`.

## 4. Notas de Mantenimiento
- **ScrollTrigger**: Asegúrate siempre de usar `gsap.context()` dentro de los `useEffect` para limpiar las animaciones y evitar fugas de memoria o duplicados en Strict Mode.
- **CSS**: El archivo `globals.css` contiene los estilos necesarios para que Lenis funcione correctamente (`html.lenis { height: auto; }`).
