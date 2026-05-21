// Seed temporal de los 17 hoteles. En Fase 2 esto se migra a Firestore
// vía un script de seed, y el resto de la app deja de importar este archivo.
// Cuando llegue Firestore, cada campo de texto admitirá _es y _en.

export const hotelesDiestra = [
  {
    id: 'e-veracruz',
    name: 'Emporio Veracruz',
    ciudad: 'Veracruz',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Veracruz',
        nombrePromocion: 'Tradición Veracruzana Mundialista',
        descuento: '15% de descuento en el consumo total',
        porcentaje: '15%',
        descripcionPromo: 'Disfruta de la mejor cocina veracruzana, café lechero y mariscos tradicionales durante los partidos de México. Descuento válido asistiendo con tu jersey de la selección.',
        contacto: '+522299893300',
        fechaHorarioPublicacion: '2026-06-11T08:00:00Z',
        portada: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'La Cevichería Veracruz',
        nombrePromocion: 'Sabor del Puerto',
        descuento: '2x1 en Clamatos y Cerveza de Barril',
        porcentaje: '50%',
        descripcionPromo: 'La barra de mariscos más fresca frente al malecón. Vive el minuto a minuto del mundial saboreando nuestros ceviches, tostadas de pulpo y pescados con promoción al doble.',
        contacto: '+522299893305',
        fechaHorarioPublicacion: '2026-06-11T12:00:00Z',
        portada: 'https://images.unsplash.com/photo-1534080391025-0961099b73d3?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Sky Bar Emporio',
        nombrePromocion: 'Terraza Mundialista',
        descuento: 'Precio especial en Viewing Party',
        porcentaje: '25%',
        descripcionPromo: 'Acceso preferente con pantallas gigantes en el rooftop más icónico de Veracruz. Disfruta de la barra de mixología y tapas con vista panorámica.',
        contacto: '+522299893310',
        fechaHorarioPublicacion: '2026-06-11T15:00:00Z',
        portada: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'e-zacatecas',
    name: 'Emporio Zacatecas',
    ciudad: 'Zacatecas',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Zacatecas',
        nombrePromocion: 'Asado Mundialista',
        descuento: 'Mezcal zacatecano de cortesía',
        porcentaje: '10%',
        descripcionPromo: 'Celebra cada anotación de tu equipo favorito degustando el tradicional asado de boda zacatecano. Te obsequiamos un trago de mezcal de la casa para abrir apetito.',
        contacto: '+524929251285',
        fechaHorarioPublicacion: '2026-06-11T09:00:00Z',
        portada: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Bar Los Milagros',
        nombrePromocion: 'Cerveza artesanal al 3x2',
        descuento: '3x2 en Cervezas Artesanales',
        porcentaje: '33%',
        descripcionPromo: 'En el corazón colonial de Zacatecas, vive la pasión futbolera en nuestra cantina contemporánea con el mejor surtido de cervezas y botana mexicana.',
        contacto: '+524929251286',
        fechaHorarioPublicacion: '2026-06-11T13:00:00Z',
        portada: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'e-mazatlan',
    name: 'Emporio Mazatlán',
    ciudad: 'Mazatlán',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Mazatlán',
        nombrePromocion: 'Pacific Gol & Aguachile',
        descuento: 'Cubeta de cerveza nacional de regalo',
        porcentaje: '25%',
        descripcionPromo: 'Prueba el mejor marisco de la Perla del Pacífico. En el consumo de un Aguachile familiar o un pescado zarandeado, te regalamos la primera cubeta de cervezas locales.',
        contacto: '+526699833333',
        fechaHorarioPublicacion: '2026-06-12T11:00:00Z',
        portada: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Pool Bar Mazatlán',
        nombrePromocion: 'Albercada y Fútbol',
        descuento: '15% de descuento en snacks',
        porcentaje: '15%',
        descripcionPromo: 'Sintoniza los partidos estelares directamente desde nuestra alberca con vista al mar de Cortés. Bebidas tropicales y snacks con descuento exclusivo.',
        contacto: '+526699833335',
        fechaHorarioPublicacion: '2026-06-12T14:00:00Z',
        portada: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'e-mexico',
    name: 'Emporio Ciudad de México',
    ciudad: 'CDMX · Paseo de la Reforma',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Mexicana e internacional · Buffet y a la carta',
        descripcionRestaurante:
          'Cocina mexicana e internacional con especialidades del chef en formato buffet o a la carta. Pan recién horneado, paella valenciana mixta, sushi y pizza al horno de piedra. Brunch los fines de semana.',
        especialidades: ['Paella valenciana mixta', 'Rib eye', 'Sushi', 'Pizza al horno de piedra'],
        horarios: [
          { servicio: 'Desayuno',           horario: '07:00 — 12:00' },
          { servicio: 'Comida y cena',      horario: '13:00 — 23:00' },
          { servicio: 'Brunch sáb. y dom.', horario: '10:00 — 17:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ciudad-de-mexico-restaurante-condimento/',
        nombrePromocion: 'Buffet Ejecutivo Mundialista',
        descuento: '2x1 en buffet de desayuno',
        porcentaje: '50%',
        descripcionPromo:
          'Vive el debut mundialista desde el corazón de Paseo de la Reforma. Nuestro buffet de desayuno al 2x1 durante los partidos matutinos: pan recién horneado, fruta fresca, sushi, paella valenciana los viernes y mixología de autor.',
        contacto: '+525519265091',
        fechaHorarioPublicacion: '2026-06-12T07:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/CONDI-MEX5-1920x1124-1.jpg'
      },
      {
        nombreCentroConsumo: 'Galería del Café',
        tipoCocina: 'Cafetería europea · Pastelería gourmet',
        descripcionRestaurante:
          'Cafetería con aire europeo y terraza al aire libre sobre Paseo de la Reforma. Café gourmet, repostería de primera calidad y barra de mixología con carajillos y martinis.',
        especialidades: ['Short Rib Braseado', 'New York Cheesecake', 'Tarta de pera', 'Carajillo'],
        horarios: [
          { servicio: 'Lunes a domingo', horario: '07:00 — 23:00' },
          { servicio: 'Terraza',         horario: '08:00 — 22:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ciudad-de-mexico-galeria-del-cafe/',
        nombrePromocion: 'Café Mundialista en Reforma',
        descuento: 'Café americano de cortesía con cualquier postre',
        porcentaje: '15%',
        descripcionPromo:
          'Vive las transmisiones matutinas desde nuestra terraza sobre Paseo de la Reforma. En la compra de cualquier postre de la casa —cheesecake, tarta de pera o pastelería del día— te obsequiamos un café americano artesanal.',
        contacto: '+525585266436',
        fechaHorarioPublicacion: '2026-06-12T08:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/GC-MEX3-1920x1124-1.jpg'
      }
    ]
  },
  {
    id: 'e-ixtapa',
    name: 'Emporio Ixtapa',
    ciudad: 'Ixtapa Zihuatanejo',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Ixtapa',
        nombrePromocion: 'Sabores Tropicales del Mundial',
        descuento: 'Buffet temático a precio especial',
        porcentaje: '15%',
        descripcionPromo: 'Disfruta de nuestros buffets de cocina mexicana e internacional en el corazón de nuestra palapa principal frente al océano Pacífico.',
        contacto: '+527555550600',
        fechaHorarioPublicacion: '2026-06-13T12:00:00Z',
        portada: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Sunset Grill Ixtapa',
        nombrePromocion: 'Tiritas y Copa Mundial',
        descuento: 'Cóctel tropical de bienvenida',
        porcentaje: '12%',
        descripcionPromo: 'Prueba las tradicionales Tiritas de Pescado de Zihuatanejo frente a la playa mientras sigues las transmisiones en vivo con un cóctel tropical cortesía de la casa.',
        contacto: '+527555550605',
        fechaHorarioPublicacion: '2026-06-13T15:00:00Z',
        portada: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'e-acapulco',
    name: 'Emporio Acapulco',
    ciudad: 'Acapulco',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Mexicana e internacional · Buffet',
        descripcionRestaurante:
          'Cocina mexicana e internacional con especialidades del chef para desayuno, comida y cena en formato buffet, frente a la bahía de Acapulco.',
        especialidades: [
          'Salmón a la parrilla',
          'Tacos de rib eye',
          'Atún sellado con costra de ajonjolí',
          'Pastas y pizzas'
        ],
        horarios: [
          { servicio: 'Desayuno', horario: '07:00 — 12:00' },
          { servicio: 'Comida',   horario: '13:00 — 18:00' },
          { servicio: 'Cena',     horario: '19:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-restaurante-condimento/',
        nombrePromocion: 'Desayuno Campeones en la Bahía',
        descuento: '15% de descuento en buffet',
        porcentaje: '15%',
        descripcionPromo:
          'Empieza tu día mundialista frente a la bahía de Acapulco con nuestro buffet de especialidades del chef: pan horneado en casa, fruta fresca y platillos mexicanos e internacionales mientras siguen las transmisiones matutinas.',
        contacto: '+525585266436',
        fechaHorarioPublicacion: '2026-06-14T07:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/CONDI-ACA1-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Sunset Lounge',
        tipoCocina: 'Mariscos del Pacífico · Mixología',
        descripcionRestaurante:
          'Lo mejor de los mariscos de Acapulco: pulpo a las brasas, aguachile de camarón, tostadas de atún y pescado a la talla acompañados de coctelería artesanal frente al mar.',
        especialidades: [
          'Pulpo a las brasas',
          'Aguachile de camarón',
          'Tostadas de atún',
          'Pescado a la talla'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '13:00 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-sunset-lounge/',
        nombrePromocion: 'Sunset & Soccer',
        descuento: '2x1 en Margaritas y cócteles de autor',
        porcentaje: '50%',
        descripcionPromo:
          'Vive los partidos estelares al atardecer frente al mar de Acapulco. Nuestra coctelería artesanal al 2x1 y mariscos frescos para acompañar cada anotación: aguachile, pulpo a las brasas y pescado a la talla.',
        contacto: '+525585266436',
        fechaHorarioPublicacion: '2026-06-14T18:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/08/Sunset-nuevo-4.jpg'
      },
      {
        nombreCentroConsumo: 'La Isla Bar & Grill',
        tipoCocina: 'Bar & grill · Pool side',
        descripcionRestaurante:
          'Ambiente al aire libre junto a la alberca familiar con mariscos frescos, snacks al grill y bebidas tropicales en un entorno relajado.',
        especialidades: [
          'Cóctel de camarón',
          'Hamburguesa de camarón',
          'Alitas adobadas',
          'Pescadillas de camarón y pescado'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '11:00 — 19:00' }],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-la-isla-bar-grill/',
        nombrePromocion: 'Albercada Mundialista',
        descuento: '20% en alitas y bebidas tropicales',
        porcentaje: '20%',
        descripcionPromo:
          'Sigue los partidos del Mundial sin salir de la alberca. Snacks al grill, alitas adobadas, hamburguesas de camarón y bebidas tropicales a precio especial mientras te refrescas en el agua.',
        contacto: '+525585266436',
        fechaHorarioPublicacion: '2026-06-14T11:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/ISLA2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Arka Bar',
        tipoCocina: 'Coctelería de autor · Sports bar',
        descripcionRestaurante:
          'Bar con coctelería variada —mojitos, martinis, carajillos y gin con frutos rojos—, snacks como alitas, pizzas y hamburguesas, y pantallas dedicadas a eventos deportivos.',
        especialidades: ['Mojitos', 'Martinis', 'Carajillos', 'Alitas y pizzas'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '12:00 — 00:00' }],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-arka-bar/',
        nombrePromocion: 'Sports Bar Oficial del Mundial',
        descuento: 'Cubeta de cerveza + alitas a precio especial',
        porcentaje: '25%',
        descripcionPromo:
          'El sports bar oficial del Mundial en Acapulco: pantallas dedicadas a todos los partidos, coctelería de autor, cubetas de cerveza con descuento y la mejor atmósfera para vivir cada gol.',
        contacto: '+525585266436',
        fechaHorarioPublicacion: '2026-06-14T19:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/ARKA3-1920X1124.jpg'
      }
    ]
  },
  {
    id: 'e-cancun',
    name: 'Emporio Cancún',
    ciudad: 'Cancún - Zona Hotelera',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Cancún',
        nombrePromocion: 'Sabores del Caribe y México',
        descuento: '15% de descuento total',
        porcentaje: '15%',
        descripcionPromo: 'Disfruta del mundial con la mejor cocina del hotel, exquisitos buffets temáticos y platillos a la carta tradicionales de México en un ambiente caribeño único.',
        contacto: '+529988815600',
        fechaHorarioPublicacion: '2026-06-15T09:00:00Z',
        portada: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Bacoli Trattoria',
        nombrePromocion: 'Fútbol & Pasta',
        descuento: 'Copa de vino Prosecco de bienvenida',
        porcentaje: '10%',
        descripcionPromo: 'Nuestra auténtica propuesta de cocina del norte de Italia. Disfruta de pizzas artesanales al horno de leña, pastas hechas en casa y cata de vinos finos.',
        contacto: '+529988815605',
        fechaHorarioPublicacion: '2026-06-15T18:00:00Z',
        portada: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'samba-vallarta',
    name: 'Samba Vallarta by Emporio',
    ciudad: 'Riviera Nayarit',
    restaurantes: [
      {
        nombreCentroConsumo: 'La Cevichería Vallarta',
        nombrePromocion: 'Stadium Snack Experience',
        descuento: 'Snacks y Clamatos ilimitados (All-inclusive)',
        porcentaje: '100%',
        descripcionPromo: 'Para nuestros huéspedes en plan todo incluido, disfruta de la final o partidos de fase de grupos con servicio ilimitado de ceviche fresco, alitas, hamburguesas y bebidas de la casa.',
        contacto: '+523222268800',
        fechaHorarioPublicacion: '2026-06-16T11:00:00Z',
        portada: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'Restaurante Veneto',
        nombrePromocion: 'Cena de Gala Mundialista',
        descuento: 'Reserva prioritaria para huéspedes',
        porcentaje: '15%',
        descripcionPromo: 'Fina cocina italiana de especialidad en un ambiente elegante y privado ideal para ver repeticiones estelares y análisis de la Copa del Mundo.',
        contacto: '+523222268810',
        fechaHorarioPublicacion: '2026-06-16T18:30:00Z',
        portada: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'm-reforma',
    name: 'Marriott Reforma',
    ciudad: 'Ciudad de México',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Reforma',
        nombrePromocion: 'Desayuno Futbolero',
        descuento: '2x1 en Buffet de Desayuno',
        porcentaje: '50%',
        descripcionPromo: 'Disfruta de nuestro buffet de desayuno al 2x1 presentando tu reservación activa del partido o tu boleto digital.',
        contacto: '+525511027000',
        fechaHorarioPublicacion: '2026-06-17T08:00:00Z',
        portada: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop'
      },
      {
        nombreCentroConsumo: 'La Mansión Reforma',
        nombrePromocion: 'Corte & Cerveza',
        descuento: 'Cerveza nacional de cortesía',
        porcentaje: '15%',
        descripcionPromo: 'En la compra de cualquier corte premium (Rib Eye, New York o Tomahawk), recibe una cerveza nacional de cortesía para disfrutar el juego.',
        contacto: '+525555461158',
        fechaHorarioPublicacion: '2026-06-17T12:00:00Z',
        portada: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'm-aguascalientes',
    name: 'Marriott Aguascalientes',
    ciudad: 'Aguascalientes',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Aguascalientes',
        nombrePromocion: 'Buffet del Estadio',
        descuento: 'Tarifa preferencial en Buffet',
        porcentaje: '20%',
        descripcionPromo: 'Deléitate con nuestro buffet temático internacional con platillos representativos de los países en juego por solo $380 MXN.',
        contacto: '+524491494444',
        fechaHorarioPublicacion: '2026-06-18T11:00:00Z',
        portada: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'm-tuxtla',
    name: 'Marriott Tuxtla Gutiérrez',
    ciudad: 'Chiapas',
    restaurantes: [
      {
        nombreCentroConsumo: 'La Condesa Chiapas',
        nombrePromocion: 'Dulce Victoria',
        descuento: 'Postre tradicional de cortesía',
        porcentaje: '15%',
        descripcionPromo: 'Disfruta de la cocina local. Ordena el tradicional \'Platillo del Jaguar\' y te obsequiamos un postre chiapaneco artesanal para celebrar.',
        contacto: '+529616177777',
        fechaHorarioPublicacion: '2026-06-18T15:00:00Z',
        portada: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'jw-marriott-cdmx',
    name: 'JW Marriott Ciudad de México',
    ciudad: 'CDMX - Polanco',
    restaurantes: [
      {
        nombreCentroConsumo: 'Sendero Polanco',
        nombrePromocion: 'Tarde de Destilados',
        descuento: 'Cata de destilados premium',
        porcentaje: '20%',
        descripcionPromo: 'Acceso exclusivo a nuestra barra y cata guiada de mezcales y tequilas añejos al finalizar las transmisiones de partidos estelares.',
        contacto: '+525559990000',
        fechaHorarioPublicacion: '2026-06-19T18:00:00Z',
        portada: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'renaissance-cancun',
    name: 'Renaissance Cancun Marina Resort',
    ciudad: 'Cancún - Puerto Cancún',
    restaurantes: [
      {
        nombreCentroConsumo: 'Káajal Restaurante',
        nombrePromocion: 'Sunset Margaritas',
        descuento: '20% de descuento en Margaritas',
        porcentaje: '20%',
        descripcionPromo: 'Refrescante pasión mundialista. Todo nuestro menú de margaritas de autor cuenta con el 20% de descuento durante la transmisión de los juegos.',
        contacto: '+529988680100',
        fechaHorarioPublicacion: '2026-06-19T16:00:00Z',
        portada: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'm-villahermosa',
    name: 'Marriott Villahermosa',
    ciudad: 'Tabasco',
    restaurantes: [
      {
        nombreCentroConsumo: 'Condimento Tabasco',
        nombrePromocion: 'Double Draft',
        descuento: '2x1 en Cerveza de Barril',
        porcentaje: '50%',
        descripcionPromo: 'Celebremos juntos. Ofrecemos 2x1 en cerveza artesanal de barril local de cortesía durante los 90 minutos de juego de la Selección Mexicana.',
        contacto: '+529933164400',
        fechaHorarioPublicacion: '2026-06-20T14:00:00Z',
        portada: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'casa-maat',
    name: 'Casa Maat at JW Marriott',
    ciudad: 'San José del Cabo',
    restaurantes: [
      {
        nombreCentroConsumo: 'Café des Artistes Los Cabos',
        nombrePromocion: 'Degustación del Campeón',
        descuento: 'Menú degustación con maridaje',
        porcentaje: '15%',
        descripcionPromo: 'Menú especial boutique de 5 tiempos diseñado por nuestro chef ejecutivo para disfrutar en nuestra exclusiva terraza con pantallas UHD.',
        contacto: '+526241637600',
        fechaHorarioPublicacion: '2026-06-20T18:00:00Z',
        portada: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'grand-hyatt-playa',
    name: 'Grand Hyatt Playa del Carmen',
    ciudad: 'Playa del Carmen',
    restaurantes: [
      {
        nombreCentroConsumo: 'The Grill at 1-26',
        nombrePromocion: 'VIP Match Experience',
        descuento: 'Champaña de bienvenida',
        porcentaje: '10%',
        descripcionPromo: 'Reserva tu lounge privado frente a la playa con pantalla dedicada y recibe una copa de champaña Moët de cortesía por cada comensal.',
        contacto: '+529848751234',
        fechaHorarioPublicacion: '2026-06-20T17:30:00Z',
        portada: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=250&fit=crop'
      }
    ]
  },
  {
    id: 'camino-real-za',
    name: 'Camino Real Aeropuerto CDMX',
    ciudad: 'CDMX - Aeropuerto',
    restaurantes: [
      {
        nombreCentroConsumo: 'La Huerta',
        nombrePromocion: 'Lounge de Tránsito',
        descuento: 'Consumo mínimo exentado',
        porcentaje: '100%',
        descripcionPromo: 'Para pasajeros en conexión: sintoniza las transmisiones oficiales sin cargo de consumo mínimo mostrando tu pase de abordar vigente.',
        contacto: '+525530030030',
        fechaHorarioPublicacion: '2026-06-20T06:00:00Z',
        portada: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=250&fit=crop'
      }
    ]
  }
];
