// Seed temporal de los 17 hoteles. En Fase 2 esto se migra a Firestore
// vía un script de seed, y el resto de la app deja de importar este archivo.
// Cuando llegue Firestore, cada campo de texto admitirá _es y _en.

export const hotelesDiestra = [
  {
    id: 'e-acapulco',
    name: 'Emporio Acapulco',
    ciudad: 'Acapulco',
    estado: 'Guerrero',
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
        contacto: '+527444690505',
        extension: '5036',
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
        contacto: '+527444690505',
        extension: '5056',
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
        contacto: '+527444690505',
        extension: '5075',
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
        contacto: '+527444690505',
        extension: '5057',
        fechaHorarioPublicacion: '2026-06-14T19:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/ARKA3-1920X1124.jpg'
      }
    ]
  },
  {
    id: 'e-cancun',
    name: 'Emporio Cancún',
    ciudad: 'Cancún',
    estado: 'Quintana Roo',
    zona: 'Zona Hotelera',
    restaurantes: [
      {
        nombreCentroConsumo: 'Fasano',
        tipoCocina: 'Parrilla argentina y uruguaya',
        descripcionRestaurante:
          'Interpretación artística y armoniosa de las cocinas argentina y uruguaya: ambiente impresionante, servicio excepcional y jugosos cortes a la parrilla. Reservación previa obligatoria, cupo limitado.',
        especialidades: [
          'Cortes a la parrilla',
          'Choripán',
          'Tapas de chistorra y mollejas',
          'Panqueque con dulce de leche'
        ],
        horarios: [
          { servicio: 'Martes a domingo', horario: '18:30 — 23:00', dias: [2, 3, 4, 5, 6, 0] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/fasano/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2022/09/Fasano1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Beach Bar',
        tipoCocina: 'Bar de playa · Bebidas y botanas',
        descripcionRestaurante:
          'Servicio excepcional sobre la arena blanca con vista al Mar Caribe, acompañado de un extenso y elegante menú de bebidas y platos internacionales.',
        especialidades: ['Miami Vice', 'La Clementina', 'Limonada eléctrica', 'Botanas internacionales'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 18:00' }],
        web: 'https://hotelesemporio.com/restaurantes/cancun-beach-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/BeachBar1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Wet Bar & Área Lounge',
        tipoCocina: 'Bar de alberca · Bebidas y botanas',
        descripcionRestaurante:
          'Refugio exclusivo junto a la piscina infinity, con hamacas tejidas por artesanos mexicanos, bebidas refrescantes y botanas.',
        especialidades: ['Margarita frozen de mango', 'Mango Tango', 'Tequila Sunrise', 'Botanas variadas'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 18:00' }],
        web: 'https://hotelesemporio.com/restaurantes/cancun-wet-bar-area-lounge/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Wetbar1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Legacy Room',
        tipoCocina: 'Lounge bar · Coctelería',
        descripcionRestaurante:
          'Salón de entretenimiento con elegantes mesas de juego, coctelería de autor y botanas exclusivas.',
        especialidades: ['Cosmopolitan', 'Bellini', 'París de noche', 'Medias de seda'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '17:00 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/cancun-legacy-room/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Legancy-1.jpg'
      },
      {
        nombreCentroConsumo: 'Bacoli Trattoria',
        tipoCocina: 'Cocina italiana',
        descripcionRestaurante:
          'Auténticos sabores italianos artesanales que respetan la tradición, con una selecta carta de vinos. Reservación previa obligatoria; código de vestimenta casual elegante.',
        especialidades: [
          'Pizzas en horno de piedra',
          'Lasaña a la boloñesa',
          'Canelones de espinaca y ricotta',
          'Tiramisú'
        ],
        horarios: [
          { servicio: 'Jueves a martes', horario: '18:00 — 23:00', dias: [4, 5, 6, 0, 1, 2] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-bacoli-trattoria/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Bacoli4-1.jpg'
      },
      {
        nombreCentroConsumo: 'CúA Culinary Artisans',
        tipoCocina: 'Buffet internacional',
        descripcionRestaurante:
          'Festín culinario en buffet internacional con vista panorámica al Mar Caribe, desde el desayuno hasta la cena.',
        especialidades: [
          'Tacos de cochinita pibil',
          'Pescado Tikin Xic',
          'Sushi rolls',
          'Pan recién horneado'
        ],
        horarios: [
          { servicio: 'Desayuno buffet', horario: '06:30 — 12:00' },
          { servicio: 'Cena buffet',     horario: '18:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-cua-culinary-artisans/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Cua1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Sunset Grill',
        tipoCocina: 'Grill y mariscos · Buffet',
        descripcionRestaurante:
          'Experiencia gastronómica que combina el sabor del grill con la frescura del mar, en una terraza con vista al océano y postrería artesanal Emporio. Reservación previa obligatoria.',
        especialidades: [
          'Carnes y pescados a la parrilla',
          'Salad bar',
          'Pizzas',
          'Sushi y poke bowl'
        ],
        horarios: [{ servicio: 'Comida buffet', horario: '13:00 — 17:00' }],
        web: 'https://hotelesemporio.com/restaurantes/cancun-sunset-grill/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/SunsetGrill1-1.jpg'
      }
    ]
  },
  {
    id: 'e-mexico',
    name: 'Emporio Ciudad de México',
    ciudad: 'Ciudad de México',
    estado: 'CDMX',
    zona: 'Paseo de la Reforma',
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
          { servicio: 'Brunch sáb. y dom.', horario: '10:00 — 17:00', dias: [0, 6] }
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
        contacto: '+525547245100',
        fechaHorarioPublicacion: '2026-06-12T08:00:00Z',
        portada:
          'https://hotelesemporio.com/wp-content/uploads/2021/10/GC-MEX3-1920x1124-1.jpg'
      }
    ]
  },
  {
    id: 'e-ixtapa',
    name: 'Emporio Ixtapa',
    ciudad: 'Ixtapa-Zihuatanejo',
    estado: 'Guerrero',
    restaurantes: [
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: 'Bar de alberca · Coctelería',
        descripcionRestaurante:
          'Ambiente relajado en el área de la alberca con un amplio menú de cócteles y servicio de meseros mientras estás en el agua o tomas el sol en los camastros.',
        especialidades: ['Emporio especial', 'Tequila Sunrise', 'Sangría', 'Limonada eléctrica'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '11:30 — 18:30' }],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/PB-IXT2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Snack Bar',
        tipoCocina: 'Snacks y aperitivos',
        descripcionRestaurante:
          'Con la brisa del mar y vista al Océano Pacífico, un amplio menú de snacks y aperitivos como la clásica hamburguesa o el hot dog a la parrilla con papas.',
        especialidades: ['Hamburguesas', 'Hot dog a la parrilla', 'Papas'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '13:00 — 17:30' }],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-snack-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/SNACK-IXT2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Arka Bar',
        tipoCocina: 'Bar de lobby · Coctelería',
        descripcionRestaurante:
          'El punto de encuentro a tu llegada, en el lobby con vista al jardín y a la playa. Coctelería de autor y entretenimiento nocturno en vivo.',
        especialidades: ['Piña colada', 'Cosmopolitan', 'Ruso Blanco', 'Happy Hour 18:00–19:00'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '16:00 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-arka-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ARK4-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Arrecife',
        tipoCocina: 'Cocina italiana',
        descripcionRestaurante:
          'Cocina italiana para una noche especial en pareja, familia o amigos. Servicio previa reservación.',
        especialidades: [
          'Pizza al horno',
          'Domo de salmón',
          'Pasta de mariscos',
          'Filete mignon',
          'Tiramisú'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '19:00 — 22:45' }],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-restaurante-arrecife/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ARR6-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Mexicana e internacional · Buffet',
        descripcionRestaurante:
          'Vista al mar y cocina mexicana e internacional en modalidad buffet para desayuno, comida y cena, con cenas temáticas diarias.',
        especialidades: [
          'Tiritas de pescado',
          'Langosta a la mantequilla',
          'Salmón al grill',
          'Cenas temáticas'
        ],
        horarios: [
          { servicio: 'Desayuno', horario: '07:00 — 11:30' },
          { servicio: 'Comida',   horario: '13:00 — 16:00' },
          { servicio: 'Cena',     horario: '19:00 — 22:45' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-restaurante-condimento/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/CONDIXT2-1920X1124.jpg'
      }
    ]
  },
  {
    id: 'e-mazatlan',
    name: 'Emporio Mazatlán',
    ciudad: 'Mazatlán',
    estado: 'Sinaloa',
    restaurantes: [
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: 'Bar de alberca · Snacks',
        descripcionRestaurante:
          'Increíble vista a la zona de albercas y acceso exclusivo al jacuzzi, con un variado menú de snacks, cócteles y aperitivos para disfrutar dentro del agua o en los camastros.',
        especialidades: ['Tequila Sunrise', 'Blue Lagoon', 'Conga Emporio', 'Snacks y aperitivos'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/mazatlan-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaPoolbar.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Mexicana e internacional · Buffet y a la carta',
        descripcionRestaurante:
          'Lo más exquisito de la cocina mexicana e internacional con las especialidades del chef: desayuno buffet, comida y cena a la carta, en terraza con vista al mar o espacio climatizado.',
        especialidades: [
          'Aguachile de camarón',
          'Tacos de rib eye',
          'Panini de arrachera',
          'Cheesecake New York'
        ],
        horarios: [
          { servicio: 'Desayuno (lun–sáb)', horario: '07:00 — 12:00', dias: [1, 2, 3, 4, 5, 6] },
          { servicio: 'Desayuno (domingo)', horario: '07:00 — 13:00', dias: [0] },
          { servicio: 'Comida y cena',      horario: '12:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/mazatlan-restaurante-condimento/',
        contacto: '+526699834611',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaCondimento.jpg'
      }
    ]
  },
  {
    id: 'e-veracruz',
    name: 'Emporio Veracruz',
    ciudad: 'Veracruz',
    estado: 'Veracruz',
    restaurantes: [
      {
        nombreCentroConsumo: 'Sky Lounge',
        tipoCocina: 'Rooftop bar · Coctelería',
        descripcionRestaurante:
          'Ambiente sofisticado y moderno en el piso 9, con una de las vistas más espectaculares del puerto de Veracruz. Menú de cócteles y botanas nacionales e internacionales. Sábados y domingos el servicio se traslada al Restaurante Condimento.',
        especialidades: ['Cócteles de autor', 'Canapés', 'Botanas internacionales', 'Desayuno buffet'],
        horarios: [
          { servicio: 'Desayuno', horario: '07:00 — 12:00', dias: [1, 2, 3, 4, 5] },
          { servicio: 'Canapés',  horario: '18:00 — 22:00', dias: [1, 2, 3, 4, 5] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/sky-lounge/',
        nombrePromocion: 'Viewing Party en la Terraza',
        descuento: '2x1 en cócteles de autor',
        porcentaje: '50%',
        descripcionPromo:
          'Vive la Copa del Mundo desde el rooftop más alto de Veracruz. Coctelería de autor al 2x1 y canapés con la mejor vista panorámica del puerto durante los partidos.',
        fechaHorarioPublicacion: '2026-06-11T18:00:00Z',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2024/09/SkyLounge1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Great Lounge',
        tipoCocina: 'Lounge bar · Coctelería',
        descripcionRestaurante:
          'Espacio contemporáneo y sofisticado para el entretenimiento, con menú de cócteles y botanas nacionales e internacionales. Música en vivo los sábados por la noche.',
        especialidades: ['Mojito clásico', 'Negroni', 'Tacos de arrachera', 'Panini steak & cheese'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-great-lounge/',
        nombrePromocion: 'Match Day en Great Lounge',
        descuento: 'Tabla de botanas + cubeta de cerveza a precio especial',
        porcentaje: '25%',
        descripcionPromo:
          'El punto de reunión para cada partido del Mundial: pantallas, música en vivo los sábados y una tabla de botanas con cubeta de cerveza nacional a precio especial.',
        fechaHorarioPublicacion: '2026-06-11T12:00:00Z',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GreatLounge1.jpg'
      },
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: 'Bar de alberca · Snacks',
        descripcionRestaurante:
          'Con vista a las tres albercas y servicio directo al jacuzzi: amplio menú de snacks, cócteles y aperitivos mientras estás en el agua o tomas el sol.',
        especialidades: [
          'Tostadas de camarón',
          'Alitas de tocino con limón',
          'Daiquiri de mango con chile',
          'Bloody Mary'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 19:00' }],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/PB-VER1-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'La Cevichería',
        tipoCocina: 'Mariscos · Cocina fría del mar',
        descripcionRestaurante:
          'Especialidades del mar en frío con un toque único: tostadas de atún, aguachile de camarón, Vuelve a la Vida y ceviches al estilo veracruzano, en un ambiente relajado con vista a la alberca.',
        especialidades: ['Tostadas de atún', 'Aguachile de camarón', 'Vuelve a la Vida', 'Ceviche veracruzano'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '10:00 — 18:00' }],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-la-cevicheria/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/CEVI2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Nacional e internacional · Buffet',
        descripcionRestaurante:
          'Vista al Puerto de Veracruz y lo mejor de la cocina nacional e internacional con especialidades del chef en buffet para desayuno, comida y cena. Jueves Pozolero y Buffet Mar y Tierra.',
        especialidades: ['Sopecitos de short rib', 'Sabanita de res', 'Buffet Mar y Tierra', 'Tardes Pasteleras'],
        horarios: [
          { servicio: 'Desayuno', horario: '07:00 — 12:00' },
          { servicio: 'Comida',   horario: '13:00 — 17:00' },
          { servicio: 'Cena',     horario: '18:00 — 22:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-restaurante-condimento/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Condi5.jpg'
      }
    ]
  },
  {
    id: 'e-zacatecas',
    name: 'Emporio Zacatecas',
    ciudad: 'Zacatecas',
    estado: 'Zacatecas',
    restaurantes: [
      {
        nombreCentroConsumo: 'Bar Los Canteros',
        tipoCocina: 'Bar · Coctelería y botanas',
        descripcionRestaurante:
          'Al caer la noche, tu bebida favorita y una variedad de botanas en un ambiente con un toque de sofisticación, con extensión al patio de las 100 ventanas al aire libre.',
        especialidades: [
          'Mezcalita en rocas',
          'Frozen de frutas de temporada',
          'Mezcal zacatecano añejo',
          'Alitas y pizzas'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '18:00 — 01:00' }],
        web: 'https://hotelesemporio.com/restaurantes/zacatecas-bar-los-canteros/',
        contacto: '+524929256500',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaBar.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Mexicana local e internacional · Buffet',
        descripcionRestaurante:
          'Lo mejor de la gastronomía local y mexicana: desayuno buffet con gorditas, menudo y birria, y especialidades regionales como el asado de boda y las enchiladas zacatecanas.',
        especialidades: [
          'Asado de boda',
          'Enchiladas zacatecanas',
          'Gorditas y menudo',
          'Tacos de rib eye'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '06:30 — 23:00' }],
        web: 'https://hotelesemporio.com/restaurantes/zacatecas-restaurante-condimento/',
        contacto: '+524929256500',
        extension: '1732',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaCondimento-1.jpg'
      }
    ]
  },
  {
    id: 'samba-vallarta',
    name: 'Samba Vallarta by Emporio',
    ciudad: 'Nuevo Vallarta',
    estado: 'Nayarit',
    zona: 'Riviera Nayarit',
    restaurantes: [
      {
        nombreCentroConsumo: 'Lobby Bar',
        tipoCocina: 'Bar de lobby · Coctelería',
        descripcionRestaurante:
          'Punto de encuentro a tu llegada, junto a la recepción y con vista al jardín: un ambiente relajado para iniciar las vacaciones con un buen cóctel.',
        especialidades: ['Lluvia Púrpura', 'Dama Azul', 'Ilusión'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '18:00 — 23:00' }],
        web: 'https://sambavallarta.mx/restaurantes/lobby-bar/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/LobbyGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'Snack Bar',
        tipoCocina: 'Snacks · Vista a la bahía',
        descripcionRestaurante:
          'Espectacular vista a la bahía mientras disfrutas de los platillos clásicos que no pueden faltar en unas vacaciones.',
        especialidades: ['Hamburguesas con papas', 'Hot dogs', 'Barra de ensaladas', 'Ceviche de pescado'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '12:30 — 17:30' }],
        web: 'https://sambavallarta.mx/restaurantes/snack-bar/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/SnackGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'El Mexicano',
        tipoCocina: 'Cocina mexicana · A la carta',
        descripcionRestaurante:
          'La mejor vista del mar y los atardeceres acompañada de los platillos más representativos de la gastronomía mexicana a la carta. Requiere previa reservación.',
        especialidades: ['Taquitos al pastor', 'Pechuga poblana', 'Trucha veracruzana', 'Camarones campesinos'],
        horarios: [{ servicio: 'Lunes a domingo', horario: '18:30 — 22:30' }],
        web: 'https://sambavallarta.mx/restaurantes/el-mexicano/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/GaleriaMexicano.jpg'
      },
      {
        nombreCentroConsumo: 'Venezia',
        tipoCocina: 'Cocina italiana',
        descripcionRestaurante:
          'Una noche especial en pareja, familia o amigos en un restaurante de cocina italiana con ambiente elegante y sofisticado. Requiere previa reservación.',
        especialidades: [
          'Trucha salmonada mediterránea',
          'Grissini de prosciutto y melón',
          'Carpaccio de res',
          'Frutti di mare'
        ],
        horarios: [{ servicio: 'Lunes a domingo', horario: '18:00 — 22:30' }],
        web: 'https://sambavallarta.mx/restaurantes/venezia/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/VeneziaGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'La Hacienda',
        tipoCocina: 'Nacional e internacional · Buffet',
        descripcionRestaurante:
          'Espacio climatizado o terraza para disfrutar lo mejor de la cocina nacional e internacional con especialidades del chef: desayuno buffet, comida a la carta y cenas temáticas rotativas.',
        especialidades: ['Cenas temáticas (BBQ, mariscada, italiana)', 'Huevos a la vista', 'Pizzas y pastas'],
        horarios: [
          { servicio: 'Desayuno', horario: '07:00 — 11:30' },
          { servicio: 'Comida',   horario: '13:00 — 16:30' },
          { servicio: 'Cena',     horario: '18:30 — 22:30' }
        ],
        web: 'https://sambavallarta.mx/restaurantes/la-hacienda/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/HaciendaMexicano.jpg'
      }
    ]
  },
  {
    id: 'm-aguascalientes',
    name: 'Marriott Aguascalientes',
    ciudad: 'Aguascalientes',
    estado: 'Aguascalientes',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/agumc-aguascalientes-marriott-hotel/dining/',
        contacto: '+524491394060'
      }
    ]
  },
  {
    id: 'm-tijuana',
    name: 'Marriott Tijuana',
    ciudad: 'Tijuana',
    estado: 'Baja California',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/tijmc-tijuana-marriott-hotel/dining/',
        contacto: '+526646226600'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: 'Lobby lounge · Bar',
        web: 'https://www.marriott.com/es/hotels/tijmc-tijuana-marriott-hotel/dining/',
        contacto: '+526649729935'
      },
      {
        nombreCentroConsumo: 'Coffee & Deli Shop',
        tipoCocina: 'Café y deli',
        web: 'https://www.marriott.com/es/hotels/tijmc-tijuana-marriott-hotel/dining/',
        contacto: '+526646226600'
      }
    ]
  },
  {
    id: 'm-reforma',
    name: 'Marriott Reforma',
    ciudad: 'Ciudad de México',
    estado: 'CDMX',
    zona: 'Paseo de la Reforma',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/mexmc-mexico-city-marriott-reforma-hotel/dining/',
        contacto: '+525511027030',
        extension: '2210'
      },
      {
        nombreCentroConsumo: 'La Mansión',
        tipoCocina: 'Steakhouse · Cortes',
        web: 'https://www.marriott.com/es/hotels/mexmc-mexico-city-marriott-reforma-hotel/dining/',
        contacto: '+525511027021',
        extension: '2143'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: 'Lobby lounge · Bar',
        web: 'https://www.marriott.com/es/hotels/mexmc-mexico-city-marriott-reforma-hotel/dining/',
        contacto: '+525511027030',
        extension: '2130'
      }
    ]
  },
  {
    id: 'm-villahermosa',
    name: 'Marriott Villahermosa',
    ciudad: 'Villahermosa',
    estado: 'Tabasco',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/vsamc-villahermosa-marriott-hotel/dining/',
        contacto: '+529933100201'
      }
    ]
  },
  {
    id: 'm-tuxtla',
    name: 'Marriott Tuxtla Gutiérrez',
    ciudad: 'Tuxtla Gutiérrez',
    estado: 'Chiapas',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/tgzmc-marriott-tuxtla-gutierrez-hotel/dining/',
        contacto: '+529616177777'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: 'Lobby lounge · Bar',
        web: 'https://www.marriott.com/es/hotels/tgzmc-marriott-tuxtla-gutierrez-hotel/dining/',
        contacto: '+529616177777'
      },
      {
        nombreCentroConsumo: 'La Mansión',
        tipoCocina: 'Steakhouse · Cortes',
        web: 'https://www.marriott.com/es/hotels/tgzmc-marriott-tuxtla-gutierrez-hotel/dining/',
        contacto: '+529616177777'
      }
    ]
  },
  {
    id: 'renaissance-cancun',
    name: 'Renaissance Cancun Marina Resort',
    ciudad: 'Cancún',
    estado: 'Quintana Roo',
    zona: 'Puerto Cancún',
    restaurantes: [
      {
        nombreCentroConsumo: 'Kaajal',
        tipoCocina: 'Cocina mexicana e internacional',
        web: 'https://www.marriott.com/es/hotels/cunbr-renaissance-cancun-resort-and-marina/dining/',
        contacto: '+529988685100'
      },
      {
        nombreCentroConsumo: 'Nüup Deli Café',
        tipoCocina: 'Deli y café',
        web: 'https://www.marriott.com/es/hotels/cunbr-renaissance-cancun-resort-and-marina/dining/',
        contacto: '+529988685100'
      },
      {
        nombreCentroConsumo: 'Zek Bar',
        tipoCocina: 'Bar · Coctelería',
        web: 'https://www.marriott.com/es/hotels/cunbr-renaissance-cancun-resort-and-marina/dining/',
        contacto: '+529988685100'
      }
    ]
  },
  {
    id: 'jw-santa-fe',
    name: 'JW Marriott Santa Fe',
    ciudad: 'Ciudad de México',
    estado: 'CDMX',
    zona: 'Santa Fe',
    restaurantes: [
      {
        nombreCentroConsumo: 'Quattro Gastronomia Italiana',
        tipoCocina: 'Cocina italiana',
        web: 'https://www.marriott.com/es/hotels/mexsf-jw-marriott-hotel-mexico-city-santa-fe/dining/',
        contacto: '+525591779727'
      },
      {
        nombreCentroConsumo: 'Cúa Culinary Artisans',
        tipoCocina: 'Buffet internacional',
        web: 'https://www.marriott.com/es/hotels/mexsf-jw-marriott-hotel-mexico-city-santa-fe/dining/',
        contacto: '+525552927272'
      }
    ]
  },
  {
    id: 'jw-los-cabos',
    name: 'JW Marriott Los Cabos Beach Resort & Spa',
    ciudad: 'San José del Cabo',
    estado: 'Baja California Sur',
    restaurantes: [
      {
        nombreCentroConsumo: 'Café des Artistes',
        tipoCocina: 'Alta cocina',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600',
        extension: '2016'
      },
      {
        nombreCentroConsumo: 'Niparaya JW Bar',
        tipoCocina: 'Bar · Coctelería',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Auka Deli',
        tipoCocina: 'Deli y café',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600',
        extension: '2016'
      },
      {
        nombreCentroConsumo: 'MarHumo',
        tipoCocina: 'Mariscos y parrilla',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'UÁ Culinary Artisans',
        tipoCocina: 'Buffet internacional',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Kaha Bar',
        tipoCocina: 'Bar · Coctelería',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'El Santo José',
        tipoCocina: 'Cocina mexicana',
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600'
      }
    ]
  },
  {
    id: 'casa-maat',
    name: 'Casa Maat at JW Marriott',
    ciudad: 'San José del Cabo',
    estado: 'Baja California Sur',
    restaurantes: [
      {
        nombreCentroConsumo: 'El Santo José',
        tipoCocina: 'Cocina mexicana',
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600'
      },
      {
        nombreCentroConsumo: 'MarHumo',
        tipoCocina: 'Mariscos y parrilla',
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Uá Culinary Artisans',
        tipoCocina: 'Buffet internacional',
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      }
    ]
  }
];
