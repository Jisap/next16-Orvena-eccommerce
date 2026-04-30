Guía de Implementación del Sistema de Animaciones (GSAP + Lenis)
Esta guía detalla la arquitectura para implementar un sistema de animaciones premium en Next.js App Router.

## 1. Dependencias Necesarias
Instalar las librerías base:

```bash
npm install gsap lenis
```

## 2. Arquitectura de Archivos
El sistema se divide en cuatro pilares:

- **Providers**: Inicialización de librerías.
- **Global CSS**: Estilos base para el scroll.
- **Page Transitions**: Manejo de entradas globales vía template.tsx.
- **Components**: Herramientas reutilizables para animar elementos individuales.

## 3. Implementación Paso a Paso
### A. Inicializador de GSAP (app/Components/Providers/GSAPInitializer.tsx)
Este componente registra los plugins de GSAP una sola vez en el cliente.

```tsx
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function GSAPInitializer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power2.out", duration: 0.6 });
  }, []);
  return null;
}
```

### B. Proveedor de Lenis (app/Components/Providers/LenisProvider.tsx)
Activa el scroll suave globalmente.

```tsx
"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
export default function LenisProvider({ children }: { children: ReactNode }) {
  return <ReactLenis root options={{ duration: 1.2 }}>{children}</ReactLenis>;
}
```

### C. Transiciones Globales (app/template.tsx)
Usa template.tsx (NO layout) para asegurar que la animación se repita en cada navegación.

```tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [pathname]);
  return <div ref={containerRef}>{children}</div>;
}
```

### D. Componente Reutilizable Reveal (app/Components/Animations/Reveal.tsx)
Componente para envolver cualquier sección y animarla al hacer scroll.

```tsx
"use client";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}

export default function Reveal({ children, direction = "up", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    let x = 0, y = 0;
    if (direction === "up") y = 50;
    else if (direction === "down") y = -50;
    else if (direction === "left") x = 50;
    else if (direction === "right") x = -50;
    const ctx = gsap.context(() => {
      gsap.fromTo(element,
        { x, y, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, delay, ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    }, elementRef);
    return () => ctx.revert();
  }, [direction, delay]);
  return <div ref={elementRef}>{children}</div>;
}
```

## 4. Conexión Final
En app/layout.tsx, envolver el children con los providers y añadir los estilos CSS de Lenis en globals.css (específicamente html.lenis { height: auto; }).