export type Locale = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      services: 'Services',
      fades: 'Fades',
      hair: 'Hair Types',
      beards: 'Beards',
      pricing: 'Pricing',
      visit: 'Visit',
      book: 'Book a chair',
    },
    hero: {
      tagline: 'Precision cuts for the modern gentleman.',
      sub: "Men's-only barbering — fades, shaves, and beard craft in Brooklyn.",
      ctaServices: 'View services',
      ctaPricing: 'See pricing',
    },
    services: {
      eyebrow: 'The Craft',
      title: 'Cuts that hold their shape.',
      sub: 'Every chair starts with consultation — how you live, how you style, how your hair grows.',
      items: [
        {
          title: 'Signature Cut',
          desc: 'Scissor and clipper work tailored to your face shape and routine.',
        },
        {
          title: 'Custom Fade',
          desc: 'Low, mid, high, drop, or bald — blended clean with crisp edges.',
        },
        {
          title: 'Complete Head Shave',
          desc: 'Hot towel, razor precision, and a finish that feels brand new.',
        },
        {
          title: 'Beard Sculpt',
          desc: 'Lines, bulk, and conditioning shaped for your growth pattern.',
        },
        {
          title: 'Cut + Beard',
          desc: 'Full head-to-jaw service so the blend reads as one piece.',
        },
        {
          title: 'Young Gents',
          desc: 'Ages 10–17 — patient coaching with the same barbershop standards.',
        },
      ],
    },
    fades: {
      eyebrow: 'Fade Studio',
      title: 'Heights, blends, and edge work.',
      sub: 'The fade is architecture. We map the blend to your skull shape and hair density.',
      items: [
        { title: 'Low Fade', desc: 'Tight near the ear, soft rise into the crown.' },
        { title: 'Mid Fade', desc: 'Balanced contrast — versatile for work and weekends.' },
        { title: 'High Fade', desc: 'Bold lift with a clean temple and strong silhouette.' },
        { title: 'Drop Fade', desc: 'Curves behind the ear for a sculpted rear profile.' },
        { title: 'Bald / Skin Fade', desc: 'Razor-to-skin transition with polished edges.' },
        { title: 'Taper', desc: 'Natural neckline and side fade without hard contrast.' },
      ],
    },
    hair: {
      eyebrow: 'Hair Expertise',
      title: 'Every texture. Every heritage.',
      sub: 'Straight, wavy, curly, coily — we cut for how your hair behaves, not a one-style template.',
      items: [
        {
          title: 'Straight & Fine',
          desc: 'Weight removal and soft layers that avoid flat collapse.',
        },
        {
          title: 'Wavy & Thick',
          desc: 'Shape that rides the wave instead of fighting it.',
        },
        {
          title: 'Curly & Coily',
          desc: 'Dry-cut precision, curl grouping, and healthy edge control.',
        },
        {
          title: 'Textured & Protective',
          desc: 'Fades into twists, locs, and natural crowns with respect for density.',
        },
      ],
    },
    beards: {
      eyebrow: 'Beard Bar',
      title: 'Sculpted facial hair, every style.',
      sub: 'From crisp corporate lines to full viking volume — we shape what you grow.',
      items: [
        {
          title: 'Clean Line-Up',
          desc: 'Sharp cheek and neck lines with a natural growth field.',
        },
        {
          title: 'Short Boxed',
          desc: 'Tight cheeks, defined jaw, boardroom-ready length.',
        },
        {
          title: 'Full Beard',
          desc: 'Balanced bulk, cheek sculpt, and mustache blend.',
        },
        {
          title: 'Goatee / Anchor',
          desc: 'Focused chin and mustache structure with clean cheeks.',
        },
        {
          title: 'Stubble Fade',
          desc: 'Even density with faded sideburns into the haircut.',
        },
        {
          title: 'Mustache Focus',
          desc: 'Handlebar, chevron, or thin — shaped and conditioned.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Transparent Rates',
      title: 'Full menu pricing.',
      sub: 'No surprises. Tips appreciated; cards and cash welcome. Walk-ins when chairs are open. Appointments preferred Fridays & Saturdays.',
      groups: [
        {
          title: 'Cuts & Fades',
          items: [
            { name: 'Signature Cut', price: '$45' },
            { name: 'Custom Fade', price: '$50' },
            { name: 'Skin / Bald Fade', price: '$55' },
            { name: 'Young Gents (10–17)', price: '$35' },
          ],
        },
        {
          title: 'Shaves',
          items: [
            { name: 'Complete Head Shave', price: '$40' },
            { name: 'Hot Towel Head Shave', price: '$50' },
            { name: 'Neck Shave Add-On', price: '$12' },
          ],
        },
        {
          title: 'Beards',
          items: [
            { name: 'Beard Trim & Shape', price: '$28' },
            { name: 'Beard Sculpt + Oil', price: '$35' },
            { name: 'Mustache Only', price: '$15' },
            { name: 'Cut + Beard Combo', price: '$70' },
          ],
        },
        {
          title: 'Extras',
          items: [
            { name: 'Eyebrow Cleanup', price: '$12' },
            { name: 'Gray Blending', price: '$30' },
            { name: 'Design / Part Detail', price: '$15+' },
          ],
        },
      ],
    },
    visit: {
      eyebrow: 'Find Us',
      title: 'Brooklyn chair, purple door.',
      sub: 'Walk in when the light is on — or book ahead for Friday evenings.',
      addressLabel: 'Address',
      address: '1847 Mercer Street, Suite 2\nBrooklyn, NY 11201',
      hoursLabel: 'Hours',
      hours: 'Tue–Fri 10am–8pm\nSat 9am–6pm\nSun–Mon Closed',
      phoneLabel: 'Phone',
      phone: '(718) 555-0192',
      emailLabel: 'Email',
      email: 'book@valzbarber.com',
      maps: 'Open in Maps',
      request: 'Request a chair',
    },
    footer: {
      rights: '© VALZ Barbershop. Men\'s cuts only.',
      note: 'Mock Brooklyn location for demo purposes.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      fades: 'Fades',
      hair: 'Tipos de cabello',
      beards: 'Barbas',
      pricing: 'Precios',
      visit: 'Visítanos',
      book: 'Reservar silla',
    },
    hero: {
      tagline: 'Cortes precisos para el caballero moderno.',
      sub: 'Barbería solo para hombres — fades, afeitados y barbas en Brooklyn.',
      ctaServices: 'Ver servicios',
      ctaPricing: 'Ver precios',
    },
    services: {
      eyebrow: 'El Oficio',
      title: 'Cortes que mantienen la forma.',
      sub: 'Cada silla empieza con consulta — cómo vives, cómo te peinas y cómo crece tu cabello.',
      items: [
        {
          title: 'Corte Signature',
          desc: 'Tijera y máquina adaptadas a tu rostro y rutina.',
        },
        {
          title: 'Fade a Medida',
          desc: 'Bajo, medio, alto, drop o skin — degradado limpio y bordes nítidos.',
        },
        {
          title: 'Afeitado Completo',
          desc: 'Toalla caliente, precisión de navaja y acabado renovado.',
        },
        {
          title: 'Escultura de Barba',
          desc: 'Líneas, volumen y acondicionamiento según tu crecimiento.',
        },
        {
          title: 'Corte + Barba',
          desc: 'Servicio completo para que el degradado se lea como una sola pieza.',
        },
        {
          title: 'Jóvenes',
          desc: 'De 10 a 17 — paciencia y el mismo estándar de barbería.',
        },
      ],
    },
    fades: {
      eyebrow: 'Estudio de Fades',
      title: 'Alturas, mezclas y bordes.',
      sub: 'El fade es arquitectura. Mapeamos el degradado a tu cráneo y densidad.',
      items: [
        { title: 'Fade Bajo', desc: 'Ajustado cerca de la oreja, subida suave a la corona.' },
        { title: 'Fade Medio', desc: 'Contraste equilibrado — versátil para trabajo y fines de semana.' },
        { title: 'Fade Alto', desc: 'Elevación audaz con sien limpia y silueta fuerte.' },
        { title: 'Drop Fade', desc: 'Curva detrás de la oreja para un perfil posterior esculpido.' },
        { title: 'Skin / Bald Fade', desc: 'Transición a piel con bordes pulidos.' },
        { title: 'Taper', desc: 'Nuca natural y laterales sin contraste duro.' },
      ],
    },
    hair: {
      eyebrow: 'Experiencia Capilar',
      title: 'Cada textura. Cada herencia.',
      sub: 'Liso, ondulado, rizado o afro — cortamos según cómo se comporta tu cabello.',
      items: [
        {
          title: 'Liso y Fino',
          desc: 'Quita de peso y capas suaves que evitan el colapso plano.',
        },
        {
          title: 'Ondulado y Grueso',
          desc: 'Forma que sigue la onda en lugar de pelearla.',
        },
        {
          title: 'Rizado y Afro',
          desc: 'Corte en seco, agrupación de rizos y control saludable del borde.',
        },
        {
          title: 'Texturizado y Protector',
          desc: 'Fades hacia twists, locs y coronas naturales con respeto a la densidad.',
        },
      ],
    },
    beards: {
      eyebrow: 'Barra de Barbas',
      title: 'Vello facial esculpido, cada estilo.',
      sub: 'Desde líneas corporativas nítidas hasta volumen vikingo — damos forma a lo que creces.',
      items: [
        {
          title: 'Line-Up Limpio',
          desc: 'Mejillas y cuello definidos con campo de crecimiento natural.',
        },
        {
          title: 'Boxed Corto',
          desc: 'Mejillas firmes, mandíbula definida, largo listo para la oficina.',
        },
        {
          title: 'Barba Completa',
          desc: 'Volumen equilibrado, mejillas esculpidas y bigote integrado.',
        },
        {
          title: 'Perilla / Ancla',
          desc: 'Estructura de mentón y bigote con mejillas limpias.',
        },
        {
          title: 'Stubble Fade',
          desc: 'Densidad pareja con patillas degradadas hacia el corte.',
        },
        {
          title: 'Enfoque en Bigote',
          desc: 'Handlebar, chevron o fino — formado y acondicionado.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifas Transparentes',
      title: 'Menú completo de precios.',
      sub: 'Sin sorpresas. Se aprecian las propinas; aceptamos tarjeta y efectivo. Walk-ins cuando hay silla. Citas preferidas viernes y sábados.',
      groups: [
        {
          title: 'Cortes y Fades',
          items: [
            { name: 'Corte Signature', price: '$45' },
            { name: 'Fade a Medida', price: '$50' },
            { name: 'Skin / Bald Fade', price: '$55' },
            { name: 'Jóvenes (10–17)', price: '$35' },
          ],
        },
        {
          title: 'Afeitados',
          items: [
            { name: 'Afeitado Completo', price: '$40' },
            { name: 'Afeitado con Toalla Caliente', price: '$50' },
            { name: 'Afeitado de Nuca', price: '$12' },
          ],
        },
        {
          title: 'Barbas',
          items: [
            { name: 'Recorte y Forma', price: '$28' },
            { name: 'Escultura + Aceite', price: '$35' },
            { name: 'Solo Bigote', price: '$15' },
            { name: 'Combo Corte + Barba', price: '$70' },
          ],
        },
        {
          title: 'Extras',
          items: [
            { name: 'Limpieza de Cejas', price: '$12' },
            { name: 'Mezcla de Canas', price: '$30' },
            { name: 'Diseño / Parte', price: '$15+' },
          ],
        },
      ],
    },
    visit: {
      eyebrow: 'Encuéntranos',
      title: 'Silla en Brooklyn, puerta púrpura.',
      sub: 'Entra cuando la luz esté encendida — o reserva con anticipación los viernes por la noche.',
      addressLabel: 'Dirección',
      address: '1847 Mercer Street, Suite 2\nBrooklyn, NY 11201',
      hoursLabel: 'Horario',
      hours: 'Mar–Vie 10am–8pm\nSáb 9am–6pm\nDom–Lun Cerrado',
      phoneLabel: 'Teléfono',
      phone: '(718) 555-0192',
      emailLabel: 'Correo',
      email: 'book@valzbarber.com',
      maps: 'Abrir en Maps',
      request: 'Pedir una silla',
    },
    footer: {
      rights: '© VALZ Barbershop. Solo cortes para hombres.',
      note: 'Ubicación ficticia en Brooklyn para la demo.',
    },
  },
} as const

export type Dictionary = (typeof translations)['en']
