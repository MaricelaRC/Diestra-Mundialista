// Seed temporal de los 17 hoteles. En Fase 2 esto se migra a Firestore.
// Convención bilingüe: cada campo de texto traducible es { es, en }.
// Los componentes leen estos campos con el helper `tr()` de src/lib/i18nData.js,
// que devuelve el idioma activo (o fallback a es).
// Campos NO traducibles (nombres propios, geografía, URLs, tels): string plano.

export const hotelesDiestra = [
  {
    id: 'e-acapulco',
    name: 'Emporio Acapulco',
    ciudad: 'Acapulco',
    estado: 'Guerrero',
    instagram: 'https://www.instagram.com/emporioacapulco/',
    storyImg: '/stories/e-acapulco.jpg',
    coverImg: '/hoteles/e-acapulco.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Mexicana e internacional · Buffet',
          en: 'Mexican & international · Buffet'
        },
        descripcionRestaurante: {
          es: 'Cocina mexicana e internacional con especialidades del chef para desayuno, comida y cena en formato buffet, frente a la bahía de Acapulco.',
          en: 'Mexican and international cuisine with chef’s specialties for breakfast, lunch and dinner in buffet format, overlooking Acapulco Bay.'
        },
        especialidades: {
          es: ['Salmón a la parrilla', 'Tacos de rib eye', 'Atún sellado con costra de ajonjolí', 'Pastas y pizzas'],
          en: ['Grilled salmon', 'Rib eye tacos', 'Seared tuna with sesame crust', 'Pastas & pizzas']
        },
        horarios: [
          { servicio: { es: 'Desayuno', en: 'Breakfast' }, horario: '07:00 — 12:00' },
          { servicio: { es: 'Comida',   en: 'Lunch' },     horario: '13:00 — 18:00' },
          { servicio: { es: 'Cena',     en: 'Dinner' },    horario: '19:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-restaurante-condimento/',
        nombrePromocion: {
          es: 'Desayuno Campeones en la Bahía',
          en: 'Champions Breakfast on the Bay'
        },
        descuento: {
          es: '15% de descuento en buffet',
          en: '15% off the buffet'
        },
        porcentaje: '15%',
        descripcionPromo: {
          es: 'Empieza tu día futbolero frente a la bahía de Acapulco con nuestro buffet de especialidades del chef: pan horneado en casa, fruta fresca y platillos mexicanos e internacionales mientras siguen las transmisiones matutinas.',
          en: 'Start your soccer day overlooking Acapulco Bay with our chef’s specialty buffet: freshly baked bread, seasonal fruit and Mexican & international dishes while you watch the morning matches.'
        },
        contacto: '+527444690505',
        extension: '5036',
        fechaHorarioPublicacion: '2026-06-14T07:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/CONDI-ACA1-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Sunset Lounge',
        tipoCocina: {
          es: 'Mariscos del Pacífico · Mixología',
          en: 'Pacific seafood · Mixology'
        },
        descripcionRestaurante: {
          es: 'Lo mejor de los mariscos de Acapulco: pulpo a las brasas, aguachile de camarón, tostadas de atún y pescado a la talla acompañados de coctelería artesanal frente al mar.',
          en: 'The best of Acapulco seafood: grilled octopus, shrimp aguachile, tuna tostadas and pescado a la talla paired with craft cocktails by the sea.'
        },
        especialidades: {
          es: ['Pulpo a las brasas', 'Aguachile de camarón', 'Tostadas de atún', 'Pescado a la talla'],
          en: ['Grilled octopus', 'Shrimp aguachile', 'Tuna tostadas', 'Pescado a la talla']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '13:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-sunset-lounge/',
        nombrePromocion: {
          es: 'Sunset & Soccer',
          en: 'Sunset & Soccer'
        },
        descuento: {
          es: '2x1 en Margaritas y cócteles de autor',
          en: '2-for-1 Margaritas & signature cocktails'
        },
        porcentaje: '50%',
        descripcionPromo: {
          es: 'Vive los partidos estelares al atardecer frente al mar de Acapulco. Nuestra coctelería artesanal al 2x1 y mariscos frescos para acompañar cada anotación: aguachile, pulpo a las brasas y pescado a la talla.',
          en: 'Catch the prime-time matches at sunset by the Acapulco shore. Our craft cocktails 2-for-1 and fresh seafood to celebrate every goal: aguachile, grilled octopus and pescado a la talla.'
        },
        contacto: '+527444690505',
        extension: '5056',
        fechaHorarioPublicacion: '2026-06-14T18:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Sunset-nuevo-4.jpg'
      },
      {
        nombreCentroConsumo: 'La Isla Bar & Grill',
        tipoCocina: {
          es: 'Bar & grill · Pool side',
          en: 'Bar & grill · Pool side'
        },
        descripcionRestaurante: {
          es: 'Ambiente al aire libre junto a la alberca familiar con mariscos frescos, snacks al grill y bebidas tropicales en un entorno relajado.',
          en: 'Open-air vibe by the family pool with fresh seafood, grilled snacks and tropical drinks in a laid-back setting.'
        },
        especialidades: {
          es: ['Cóctel de camarón', 'Hamburguesa de camarón', 'Alitas adobadas', 'Pescadillas de camarón y pescado'],
          en: ['Shrimp cocktail', 'Shrimp burger', 'Marinated wings', 'Shrimp & fish pescadillas']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '11:00 — 19:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-la-isla-bar-grill/',
        nombrePromocion: {
          es: 'Albercada Futbolera',
          en: 'Soccer Pool Party'
        },
        descuento: {
          es: '20% en alitas y bebidas tropicales',
          en: '20% off wings & tropical drinks'
        },
        porcentaje: '20%',
        descripcionPromo: {
          es: 'Sigue los partidos del torneo sin salir de la alberca. Snacks al grill, alitas adobadas, hamburguesas de camarón y bebidas tropicales a precio especial mientras te refrescas en el agua.',
          en: 'Watch the tournament matches without leaving the pool. Grilled snacks, marinated wings, shrimp burgers and tropical drinks at special prices while you cool off in the water.'
        },
        contacto: '+527444690505',
        extension: '5075',
        fechaHorarioPublicacion: '2026-06-14T11:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ISLA2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Arka Bar',
        tipoCocina: {
          es: 'Coctelería de autor · Sports bar',
          en: 'Signature cocktails · Sports bar'
        },
        descripcionRestaurante: {
          es: 'Bar con coctelería variada —mojitos, martinis, carajillos y gin con frutos rojos—, snacks como alitas, pizzas y hamburguesas, y pantallas dedicadas a eventos deportivos.',
          en: 'Bar with a wide cocktail selection —mojitos, martinis, carajillos and berry gins—, snacks like wings, pizzas and burgers, and screens dedicated to sporting events.'
        },
        especialidades: {
          es: ['Mojitos', 'Martinis', 'Carajillos', 'Alitas y pizzas'],
          en: ['Mojitos', 'Martinis', 'Carajillos', 'Wings & pizzas']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '12:00 — 00:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/acapulco-arka-bar/',
        nombrePromocion: {
          es: 'Sports Bar Futbolero',
          en: 'Sports Bar for Soccer Fans'
        },
        descuento: {
          es: 'Cubeta de cerveza + alitas a precio especial',
          en: 'Beer bucket + wings at a special price'
        },
        porcentaje: '25%',
        descripcionPromo: {
          es: 'El sports bar futbolero de Acapulco: pantallas dedicadas a todos los partidos, coctelería de autor, cubetas de cerveza con descuento y la mejor atmósfera para vivir cada gol.',
          en: 'The go-to soccer sports bar in Acapulco: screens dedicated to every match, signature cocktails, discounted beer buckets and the best atmosphere to celebrate every goal.'
        },
        contacto: '+527444690505',
        extension: '5057',
        fechaHorarioPublicacion: '2026-06-14T19:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ARKA3-1920X1124.jpg'
      }
    ]
  },
  {
    id: 'e-cancun',
    name: 'Emporio Cancún',
    ciudad: 'Cancún',
    estado: 'Quintana Roo',
    zona: 'Zona Hotelera',
    instagram: 'https://www.instagram.com/emporiocancun/',
    storyImg: '/stories/e-cancun.jpg',
    coverImg: '/hoteles/e-cancun.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Fasano',
        tipoCocina: {
          es: 'Parrilla argentina y uruguaya',
          en: 'Argentinian & Uruguayan grill'
        },
        descripcionRestaurante: {
          es: 'Interpretación artística y armoniosa de las cocinas argentina y uruguaya: ambiente impresionante, servicio excepcional y jugosos cortes a la parrilla. Reservación previa obligatoria, cupo limitado.',
          en: 'An artistic and harmonious take on Argentinian and Uruguayan cuisine: striking atmosphere, exceptional service and juicy grilled cuts. Reservations required, limited seating.'
        },
        especialidades: {
          es: ['Cortes a la parrilla', 'Choripán', 'Tapas de chistorra y mollejas', 'Panqueque con dulce de leche'],
          en: ['Grilled cuts', 'Choripán', 'Chistorra & sweetbread tapas', 'Pancake with dulce de leche']
        },
        horarios: [
          { servicio: { es: 'Martes a domingo', en: 'Tuesday to Sunday' }, horario: '18:30 — 23:00', dias: [2, 3, 4, 5, 6, 0] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/fasano/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2022/09/Fasano1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Beach Bar',
        tipoCocina: {
          es: 'Bar de playa · Bebidas y botanas',
          en: 'Beach bar · Drinks & snacks'
        },
        descripcionRestaurante: {
          es: 'Servicio excepcional sobre la arena blanca con vista al Mar Caribe, acompañado de un extenso y elegante menú de bebidas y platos internacionales.',
          en: 'Exceptional service on the white sand overlooking the Caribbean Sea, paired with an extensive and elegant menu of drinks and international plates.'
        },
        especialidades: {
          es: ['Miami Vice', 'La Clementina', 'Limonada eléctrica', 'Botanas internacionales'],
          en: ['Miami Vice', 'La Clementina', 'Electric lemonade', 'International snacks']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 18:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-beach-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/BeachBar1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Wet Bar & Área Lounge',
        tipoCocina: {
          es: 'Bar de alberca · Bebidas y botanas',
          en: 'Pool bar · Drinks & snacks'
        },
        descripcionRestaurante: {
          es: 'Refugio exclusivo junto a la piscina infinity, con hamacas tejidas por artesanos mexicanos, bebidas refrescantes y botanas.',
          en: 'Exclusive retreat by the infinity pool, with hammocks woven by Mexican artisans, refreshing drinks and snacks.'
        },
        especialidades: {
          es: ['Margarita frozen de mango', 'Mango Tango', 'Tequila Sunrise', 'Botanas variadas'],
          en: ['Frozen mango margarita', 'Mango Tango', 'Tequila Sunrise', 'Assorted snacks']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 18:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-wet-bar-area-lounge/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Wetbar1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Legacy Room',
        tipoCocina: {
          es: 'Lounge bar · Coctelería',
          en: 'Lounge bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'Salón de entretenimiento con elegantes mesas de juego, coctelería de autor y botanas exclusivas.',
          en: 'Entertainment room with elegant gaming tables, signature cocktails and exclusive snacks.'
        },
        especialidades: {
          es: ['Cosmopolitan', 'Bellini', 'París de noche', 'Medias de seda'],
          en: ['Cosmopolitan', 'Bellini', 'Paris by night', 'Silk stockings']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '17:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-legacy-room/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Legancy-1.jpg'
      },
      {
        nombreCentroConsumo: 'Bacoli Trattoria',
        tipoCocina: {
          es: 'Cocina italiana',
          en: 'Italian cuisine'
        },
        descripcionRestaurante: {
          es: 'Auténticos sabores italianos artesanales que respetan la tradición, con una selecta carta de vinos. Reservación previa obligatoria; código de vestimenta casual elegante.',
          en: 'Authentic artisanal Italian flavors that honor tradition, with a select wine list. Reservations required; smart casual dress code.'
        },
        especialidades: {
          es: ['Pizzas en horno de piedra', 'Lasaña a la boloñesa', 'Canelones de espinaca y ricotta', 'Tiramisú'],
          en: ['Stone-oven pizzas', 'Bolognese lasagna', 'Spinach & ricotta cannelloni', 'Tiramisu']
        },
        horarios: [
          { servicio: { es: 'Jueves a martes', en: 'Thursday to Tuesday' }, horario: '18:00 — 23:00', dias: [4, 5, 6, 0, 1, 2] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-bacoli-trattoria/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Bacoli4-1.jpg'
      },
      {
        nombreCentroConsumo: 'CúA Culinary Artisans',
        tipoCocina: {
          es: 'Buffet internacional',
          en: 'International buffet'
        },
        descripcionRestaurante: {
          es: 'Festín culinario en buffet internacional con vista panorámica al Mar Caribe, desde el desayuno hasta la cena.',
          en: 'International buffet feast with a panoramic view of the Caribbean Sea, from breakfast through dinner.'
        },
        especialidades: {
          es: ['Tacos de cochinita pibil', 'Pescado Tikin Xic', 'Sushi rolls', 'Pan recién horneado'],
          en: ['Cochinita pibil tacos', 'Tikin Xic fish', 'Sushi rolls', 'Fresh-baked bread']
        },
        horarios: [
          { servicio: { es: 'Desayuno buffet', en: 'Breakfast buffet' }, horario: '06:30 — 12:00' },
          { servicio: { es: 'Cena buffet',     en: 'Dinner buffet' },    horario: '18:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/cancun-cua-culinary-artisans/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/Cua1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Sunset Grill',
        tipoCocina: {
          es: 'Grill y mariscos · Buffet',
          en: 'Grill & seafood · Buffet'
        },
        descripcionRestaurante: {
          es: 'Experiencia gastronómica que combina el sabor del grill con la frescura del mar, en una terraza con vista al océano y postrería artesanal Emporio. Reservación previa obligatoria.',
          en: 'A dining experience that pairs the flavor of the grill with the freshness of the sea, on an ocean-view terrace featuring Emporio’s artisanal pastry. Reservations required.'
        },
        especialidades: {
          es: ['Carnes y pescados a la parrilla', 'Salad bar', 'Pizzas', 'Sushi y poke bowl'],
          en: ['Grilled meats & fish', 'Salad bar', 'Pizzas', 'Sushi & poke bowl']
        },
        horarios: [
          { servicio: { es: 'Comida buffet', en: 'Lunch buffet' }, horario: '13:00 — 17:00' }
        ],
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
    instagram: 'https://www.instagram.com/emporio_cdmx/',
    storyImg: '/stories/e-mexico.jpg',
    coverImg: '/hoteles/e-mexico.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Mexicana e internacional · Buffet y a la carta',
          en: 'Mexican & international · Buffet and à la carte'
        },
        descripcionRestaurante: {
          es: 'Cocina mexicana e internacional con especialidades del chef en formato buffet o a la carta. Pan recién horneado, paella valenciana mixta, sushi y pizza al horno de piedra. Brunch los fines de semana.',
          en: 'Mexican and international cuisine with chef’s specialties served buffet or à la carte. Freshly baked bread, mixed Valencian paella, sushi and stone-oven pizza. Weekend brunch.'
        },
        especialidades: {
          es: ['Paella valenciana mixta', 'Rib eye', 'Sushi', 'Pizza al horno de piedra'],
          en: ['Mixed Valencian paella', 'Rib eye', 'Sushi', 'Stone-oven pizza']
        },
        horarios: [
          { servicio: { es: 'Desayuno',           en: 'Breakfast' },        horario: '07:00 — 12:00' },
          { servicio: { es: 'Comida y cena',      en: 'Lunch & dinner' },   horario: '13:00 — 23:00' },
          { servicio: { es: 'Brunch sáb. y dom.', en: 'Brunch Sat & Sun' }, horario: '10:00 — 17:00', dias: [0, 6] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ciudad-de-mexico-restaurante-condimento/',
        nombrePromocion: {
          es: 'Buffet Ejecutivo Futbolero',
          en: 'Soccer Executive Buffet'
        },
        descuento: {
          es: '2x1 en buffet de desayuno',
          en: '2-for-1 on the breakfast buffet'
        },
        porcentaje: '50%',
        descripcionPromo: {
          es: 'Vive el debut del torneo desde el corazón de Paseo de la Reforma. Nuestro buffet de desayuno al 2x1 durante los partidos matutinos: pan recién horneado, fruta fresca, sushi, paella valenciana los viernes y mixología de autor.',
          en: 'Experience the tournament opener from the heart of Paseo de la Reforma. Our breakfast buffet 2-for-1 during morning matches: freshly baked bread, fresh fruit, sushi, Valencian paella on Fridays and signature mixology.'
        },
        contacto: '+525519265091',
        fechaHorarioPublicacion: '2026-06-12T07:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/CONDI-MEX5-1920x1124-1.jpg'
      },
      {
        nombreCentroConsumo: 'Galería del Café',
        tipoCocina: {
          es: 'Cafetería europea · Pastelería gourmet',
          en: 'European café · Gourmet pastry'
        },
        descripcionRestaurante: {
          es: 'Cafetería con aire europeo y terraza al aire libre sobre Paseo de la Reforma. Café gourmet, repostería de primera calidad y barra de mixología con carajillos y martinis.',
          en: 'European-style café with an open-air terrace overlooking Paseo de la Reforma. Gourmet coffee, top-quality pastry and a mixology bar with carajillos and martinis.'
        },
        especialidades: {
          es: ['Short Rib Braseado', 'New York Cheesecake', 'Tarta de pera', 'Carajillo'],
          en: ['Braised short rib', 'New York cheesecake', 'Pear tart', 'Carajillo']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '07:00 — 23:00' },
          { servicio: { es: 'Terraza',         en: 'Terrace' },          horario: '08:00 — 22:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ciudad-de-mexico-galeria-del-cafe/',
        nombrePromocion: {
          es: 'Café Futbolero en Reforma',
          en: 'Soccer Coffee on Reforma'
        },
        descuento: {
          es: 'Café americano de cortesía con cualquier postre',
          en: 'Complimentary americano with any dessert'
        },
        porcentaje: '15%',
        descripcionPromo: {
          es: 'Vive las transmisiones matutinas desde nuestra terraza sobre Paseo de la Reforma. En la compra de cualquier postre de la casa —cheesecake, tarta de pera o pastelería del día— te obsequiamos un café americano artesanal.',
          en: 'Enjoy the morning broadcasts from our terrace over Paseo de la Reforma. With any house dessert —cheesecake, pear tart or pastry of the day— get a craft americano on the house.'
        },
        contacto: '+525547245100',
        fechaHorarioPublicacion: '2026-06-12T08:00:00Z',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/GC-MEX3-1920x1124-1.jpg'
      }
    ]
  },
  {
    id: 'e-ixtapa',
    name: 'Emporio Ixtapa',
    ciudad: 'Ixtapa-Zihuatanejo',
    estado: 'Guerrero',
    instagram: 'https://www.instagram.com/emporioixtapa/',
    storyImg: '/stories/e-ixtapa.jpg',
    coverImg: '/hoteles/e-ixtapa.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: {
          es: 'Bar de alberca · Coctelería',
          en: 'Pool bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'Ambiente relajado en el área de la alberca con un amplio menú de cócteles y servicio de meseros mientras estás en el agua o tomas el sol en los camastros.',
          en: 'Relaxed atmosphere by the pool with a wide cocktail menu and waiter service while you’re in the water or sunbathing on a lounger.'
        },
        especialidades: {
          es: ['Emporio especial', 'Tequila Sunrise', 'Sangría', 'Limonada eléctrica'],
          en: ['Emporio special', 'Tequila Sunrise', 'Sangria', 'Electric lemonade']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '11:30 — 18:30' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/PB-IXT2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Snack Bar',
        tipoCocina: {
          es: 'Snacks y aperitivos',
          en: 'Snacks & appetizers'
        },
        descripcionRestaurante: {
          es: 'Con la brisa del mar y vista al Océano Pacífico, un amplio menú de snacks y aperitivos como la clásica hamburguesa o el hot dog a la parrilla con papas.',
          en: 'With the sea breeze and views of the Pacific Ocean, a wide menu of snacks and appetizers like the classic burger or grilled hot dog with fries.'
        },
        especialidades: {
          es: ['Hamburguesas', 'Hot dog a la parrilla', 'Papas'],
          en: ['Burgers', 'Grilled hot dog', 'Fries']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '13:00 — 17:30' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-snack-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/SNACK-IXT2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Arka Bar',
        tipoCocina: {
          es: 'Bar de lobby · Coctelería',
          en: 'Lobby bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'El punto de encuentro a tu llegada, en el lobby con vista al jardín y a la playa. Coctelería de autor y entretenimiento nocturno en vivo.',
          en: 'The meeting point upon arrival, in the lobby with garden and beach views. Signature cocktails and live evening entertainment.'
        },
        especialidades: {
          es: ['Piña colada', 'Cosmopolitan', 'Ruso Blanco', 'Happy Hour 18:00–19:00'],
          en: ['Piña colada', 'Cosmopolitan', 'White Russian', 'Happy Hour 6–7 pm']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '16:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-arka-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ARK4-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Arrecife',
        tipoCocina: {
          es: 'Cocina italiana',
          en: 'Italian cuisine'
        },
        descripcionRestaurante: {
          es: 'Cocina italiana para una noche especial en pareja, familia o amigos. Servicio previa reservación.',
          en: 'Italian cuisine for a special night as a couple, family or with friends. Service by reservation only.'
        },
        especialidades: {
          es: ['Pizza al horno', 'Domo de salmón', 'Pasta de mariscos', 'Filete mignon', 'Tiramisú'],
          en: ['Oven-baked pizza', 'Salmon dome', 'Seafood pasta', 'Filet mignon', 'Tiramisu']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '19:00 — 22:45' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/ixtapa-restaurante-arrecife/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/ARR6-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Mexicana e internacional · Buffet',
          en: 'Mexican & international · Buffet'
        },
        descripcionRestaurante: {
          es: 'Vista al mar y cocina mexicana e internacional en modalidad buffet para desayuno, comida y cena, con cenas temáticas diarias.',
          en: 'Ocean view and Mexican & international cuisine served buffet style for breakfast, lunch and dinner, with daily themed dinners.'
        },
        especialidades: {
          es: ['Tiritas de pescado', 'Langosta a la mantequilla', 'Salmón al grill', 'Cenas temáticas'],
          en: ['Fish strips', 'Butter lobster', 'Grilled salmon', 'Themed dinners']
        },
        horarios: [
          { servicio: { es: 'Desayuno', en: 'Breakfast' }, horario: '07:00 — 11:30' },
          { servicio: { es: 'Comida',   en: 'Lunch' },     horario: '13:00 — 16:00' },
          { servicio: { es: 'Cena',     en: 'Dinner' },    horario: '19:00 — 22:45' }
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
    instagram: 'https://www.instagram.com/emporio_mazatlan/',
    storyImg: '/stories/e-mazatlan.jpg',
    coverImg: '/hoteles/e-mazatlan.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: {
          es: 'Bar de alberca · Snacks',
          en: 'Pool bar · Snacks'
        },
        descripcionRestaurante: {
          es: 'Increíble vista a la zona de albercas y acceso exclusivo al jacuzzi, con un variado menú de snacks, cócteles y aperitivos para disfrutar dentro del agua o en los camastros.',
          en: 'Incredible view of the pool area with exclusive jacuzzi access, plus a varied menu of snacks, cocktails and appetizers to enjoy in the water or on the loungers.'
        },
        especialidades: {
          es: ['Tequila Sunrise', 'Blue Lagoon', 'Conga Emporio', 'Snacks y aperitivos'],
          en: ['Tequila Sunrise', 'Blue Lagoon', 'Conga Emporio', 'Snacks & appetizers']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/mazatlan-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaPoolbar.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Mexicana e internacional · Buffet y a la carta',
          en: 'Mexican & international · Buffet and à la carte'
        },
        descripcionRestaurante: {
          es: 'Lo más exquisito de la cocina mexicana e internacional con las especialidades del chef: desayuno buffet, comida y cena a la carta, en terraza con vista al mar o espacio climatizado.',
          en: 'The finest Mexican and international cuisine with chef’s specialties: breakfast buffet, à la carte lunch and dinner, on a sea-view terrace or in air-conditioned dining.'
        },
        especialidades: {
          es: ['Aguachile de camarón', 'Tacos de rib eye', 'Panini de arrachera', 'Cheesecake New York'],
          en: ['Shrimp aguachile', 'Rib eye tacos', 'Arrachera panini', 'New York cheesecake']
        },
        horarios: [
          { servicio: { es: 'Desayuno (lun–sáb)', en: 'Breakfast (Mon–Sat)' }, horario: '07:00 — 12:00', dias: [1, 2, 3, 4, 5, 6] },
          { servicio: { es: 'Desayuno (domingo)', en: 'Breakfast (Sunday)' },  horario: '07:00 — 13:00', dias: [0] },
          { servicio: { es: 'Comida y cena',      en: 'Lunch & dinner' },      horario: '12:00 — 23:00' }
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
    instagram: 'https://www.instagram.com/emporio_veracruz/',
    storyImg: '/stories/e-veracruz.jpg',
    coverImg: '/hoteles/e-veracruz.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Sky Lounge',
        tipoCocina: {
          es: 'Rooftop bar · Coctelería',
          en: 'Rooftop bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'Ambiente sofisticado y moderno en el piso 9, con una de las vistas más espectaculares del puerto de Veracruz. Menú de cócteles y botanas nacionales e internacionales. Sábados y domingos el servicio se traslada al Restaurante Condimento.',
          en: 'Sophisticated and modern atmosphere on the 9th floor, with one of the most spectacular views of the Port of Veracruz. Cocktail menu and national & international snacks. On Saturdays and Sundays service moves to Restaurante Condimento.'
        },
        especialidades: {
          es: ['Cócteles de autor', 'Canapés', 'Botanas internacionales', 'Desayuno buffet'],
          en: ['Signature cocktails', 'Canapés', 'International snacks', 'Breakfast buffet']
        },
        horarios: [
          { servicio: { es: 'Desayuno', en: 'Breakfast' }, horario: '07:00 — 12:00', dias: [1, 2, 3, 4, 5] },
          { servicio: { es: 'Canapés',  en: 'Canapés' },   horario: '18:00 — 22:00', dias: [1, 2, 3, 4, 5] }
        ],
        web: 'https://hotelesemporio.com/restaurantes/sky-lounge/',
        nombrePromocion: {
          es: 'Viewing Party en la Terraza',
          en: 'Rooftop Viewing Party'
        },
        descuento: {
          es: '2x1 en cócteles de autor',
          en: '2-for-1 on signature cocktails'
        },
        porcentaje: '50%',
        descripcionPromo: {
          es: 'Vive el torneo desde el rooftop más alto de Veracruz. Coctelería de autor al 2x1 y canapés con la mejor vista panorámica del puerto durante los partidos.',
          en: 'Live the tournament from the highest rooftop in Veracruz. Signature cocktails 2-for-1 and canapés with the best panoramic view of the port during the matches.'
        },
        fechaHorarioPublicacion: '2026-06-11T18:00:00Z',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2024/09/SkyLounge1-1.jpg'
      },
      {
        nombreCentroConsumo: 'Great Lounge',
        tipoCocina: {
          es: 'Lounge bar · Coctelería',
          en: 'Lounge bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'Espacio contemporáneo y sofisticado para el entretenimiento, con menú de cócteles y botanas nacionales e internacionales. Música en vivo los sábados por la noche.',
          en: 'Contemporary and sophisticated space for entertainment, with a cocktail menu and national & international snacks. Live music on Saturday nights.'
        },
        especialidades: {
          es: ['Mojito clásico', 'Negroni', 'Tacos de arrachera', 'Panini steak & cheese'],
          en: ['Classic mojito', 'Negroni', 'Arrachera tacos', 'Steak & cheese panini']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 23:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-great-lounge/',
        nombrePromocion: {
          es: 'Match Day en Great Lounge',
          en: 'Match Day at Great Lounge'
        },
        descuento: {
          es: 'Tabla de botanas + cubeta de cerveza a precio especial',
          en: 'Snack board + beer bucket at a special price'
        },
        porcentaje: '25%',
        descripcionPromo: {
          es: 'El punto de reunión para cada partido del torneo: pantallas, música en vivo los sábados y una tabla de botanas con cubeta de cerveza nacional a precio especial.',
          en: 'The meeting point for every tournament match: screens, live music on Saturdays and a snack board with a domestic beer bucket at a special price.'
        },
        fechaHorarioPublicacion: '2026-06-11T12:00:00Z',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GreatLounge1.jpg'
      },
      {
        nombreCentroConsumo: 'Pool Bar',
        tipoCocina: {
          es: 'Bar de alberca · Snacks',
          en: 'Pool bar · Snacks'
        },
        descripcionRestaurante: {
          es: 'Con vista a las tres albercas y servicio directo al jacuzzi: amplio menú de snacks, cócteles y aperitivos mientras estás en el agua o tomas el sol.',
          en: 'Overlooking the three pools with direct jacuzzi service: a wide menu of snacks, cocktails and appetizers while you’re in the water or sunbathing.'
        },
        especialidades: {
          es: ['Tostadas de camarón', 'Alitas de tocino con limón', 'Daiquiri de mango con chile', 'Bloody Mary'],
          en: ['Shrimp tostadas', 'Bacon wings with lime', 'Mango chile daiquiri', 'Bloody Mary']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 19:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-pool-bar/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/PB-VER1-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'La Cevichería',
        tipoCocina: {
          es: 'Mariscos · Cocina fría del mar',
          en: 'Seafood · Cold dishes from the sea'
        },
        descripcionRestaurante: {
          es: 'Especialidades del mar en frío con un toque único: tostadas de atún, aguachile de camarón, Vuelve a la Vida y ceviches al estilo veracruzano, en un ambiente relajado con vista a la alberca.',
          en: 'Cold seafood specialties with a unique twist: tuna tostadas, shrimp aguachile, Vuelve a la Vida and Veracruz-style ceviches, in a relaxed pool-view setting.'
        },
        especialidades: {
          es: ['Tostadas de atún', 'Aguachile de camarón', 'Vuelve a la Vida', 'Ceviche veracruzano'],
          en: ['Tuna tostadas', 'Shrimp aguachile', 'Vuelve a la Vida', 'Veracruz-style ceviche']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '10:00 — 18:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/veracruz-la-cevicheria/',
        contacto: '+525585266436',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/10/CEVI2-1920X1124.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Nacional e internacional · Buffet',
          en: 'National & international · Buffet'
        },
        descripcionRestaurante: {
          es: 'Vista al Puerto de Veracruz y lo mejor de la cocina nacional e internacional con especialidades del chef en buffet para desayuno, comida y cena. Jueves Pozolero y Buffet Mar y Tierra.',
          en: 'Port of Veracruz views and the best of national and international cuisine with chef’s specialties in buffet for breakfast, lunch and dinner. Pozole Thursdays and Surf & Turf Buffet.'
        },
        especialidades: {
          es: ['Sopecitos de short rib', 'Sabanita de res', 'Buffet Mar y Tierra', 'Tardes Pasteleras'],
          en: ['Short rib sopecitos', 'Sabanita de res', 'Surf & Turf Buffet', 'Pastry Afternoons']
        },
        horarios: [
          { servicio: { es: 'Desayuno', en: 'Breakfast' }, horario: '07:00 — 12:00' },
          { servicio: { es: 'Comida',   en: 'Lunch' },     horario: '13:00 — 17:00' },
          { servicio: { es: 'Cena',     en: 'Dinner' },    horario: '18:00 — 22:00' }
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
    instagram: 'https://www.instagram.com/emporio_zacatecas/',
    storyImg: '/stories/e-zacatecas.jpg',
    coverImg: '/hoteles/e-zacatecas.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Bar Los Canteros',
        tipoCocina: {
          es: 'Bar · Coctelería y botanas',
          en: 'Bar · Cocktails & snacks'
        },
        descripcionRestaurante: {
          es: 'Al caer la noche, tu bebida favorita y una variedad de botanas en un ambiente con un toque de sofisticación, con extensión al patio de las 100 ventanas al aire libre.',
          en: 'When night falls, your favorite drink and a variety of snacks in an atmosphere with a touch of sophistication, extending into the open-air patio of the 100 windows.'
        },
        especialidades: {
          es: ['Mezcalita en rocas', 'Frozen de frutas de temporada', 'Mezcal zacatecano añejo', 'Alitas y pizzas'],
          en: ['Mezcalita on the rocks', 'Seasonal fruit frozen', 'Aged Zacatecan mezcal', 'Wings & pizzas']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '18:00 — 01:00' }
        ],
        web: 'https://hotelesemporio.com/restaurantes/zacatecas-bar-los-canteros/',
        contacto: '+524929256500',
        portada: 'https://hotelesemporio.com/wp-content/uploads/2021/08/GaleriaBar.jpg'
      },
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Mexicana local e internacional · Buffet',
          en: 'Local Mexican & international · Buffet'
        },
        descripcionRestaurante: {
          es: 'Lo mejor de la gastronomía local y mexicana: desayuno buffet con gorditas, menudo y birria, y especialidades regionales como el asado de boda y las enchiladas zacatecanas.',
          en: 'The best of local and Mexican gastronomy: breakfast buffet with gorditas, menudo and birria, and regional specialties like asado de boda and Zacatecan enchiladas.'
        },
        especialidades: {
          es: ['Asado de boda', 'Enchiladas zacatecanas', 'Gorditas y menudo', 'Tacos de rib eye'],
          en: ['Asado de boda', 'Zacatecan enchiladas', 'Gorditas & menudo', 'Rib eye tacos']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '06:30 — 23:00' }
        ],
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
    instagram: 'https://www.instagram.com/sambavallarta/',
    storyImg: '/stories/samba-vallarta.jpg',
    coverImg: '/hoteles/samba-vallarta.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Lobby Bar',
        tipoCocina: {
          es: 'Bar de lobby · Coctelería',
          en: 'Lobby bar · Cocktails'
        },
        descripcionRestaurante: {
          es: 'Punto de encuentro a tu llegada, junto a la recepción y con vista al jardín: un ambiente relajado para iniciar las vacaciones con un buen cóctel.',
          en: 'Meeting point upon arrival, next to reception with garden views: a relaxed atmosphere to kick off your vacation with a good cocktail.'
        },
        especialidades: {
          es: ['Lluvia Púrpura', 'Dama Azul', 'Ilusión'],
          en: ['Purple Rain', 'Blue Lady', 'Illusion']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '18:00 — 23:00' }
        ],
        web: 'https://sambavallarta.mx/restaurantes/lobby-bar/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/LobbyGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'Snack Bar',
        tipoCocina: {
          es: 'Snacks · Vista a la bahía',
          en: 'Snacks · Bay view'
        },
        descripcionRestaurante: {
          es: 'Espectacular vista a la bahía mientras disfrutas de los platillos clásicos que no pueden faltar en unas vacaciones.',
          en: 'Spectacular bay view while you enjoy the classic dishes no vacation is complete without.'
        },
        especialidades: {
          es: ['Hamburguesas con papas', 'Hot dogs', 'Barra de ensaladas', 'Ceviche de pescado'],
          en: ['Burgers with fries', 'Hot dogs', 'Salad bar', 'Fish ceviche']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '12:30 — 17:30' }
        ],
        web: 'https://sambavallarta.mx/restaurantes/snack-bar/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/SnackGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'El Mexicano',
        tipoCocina: {
          es: 'Cocina mexicana · A la carta',
          en: 'Mexican cuisine · À la carte'
        },
        descripcionRestaurante: {
          es: 'La mejor vista del mar y los atardeceres acompañada de los platillos más representativos de la gastronomía mexicana a la carta. Requiere previa reservación.',
          en: 'The best ocean and sunset views paired with the most representative dishes of Mexican gastronomy à la carte. Reservations required.'
        },
        especialidades: {
          es: ['Taquitos al pastor', 'Pechuga poblana', 'Trucha veracruzana', 'Camarones campesinos'],
          en: ['Al pastor taquitos', 'Poblana chicken breast', 'Veracruz-style trout', 'Campesino shrimp']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '18:30 — 22:30' }
        ],
        web: 'https://sambavallarta.mx/restaurantes/el-mexicano/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/GaleriaMexicano.jpg'
      },
      {
        nombreCentroConsumo: 'Venezia',
        tipoCocina: {
          es: 'Cocina italiana',
          en: 'Italian cuisine'
        },
        descripcionRestaurante: {
          es: 'Una noche especial en pareja, familia o amigos en un restaurante de cocina italiana con ambiente elegante y sofisticado. Requiere previa reservación.',
          en: 'A special night as a couple, family or with friends at an Italian restaurant with an elegant and sophisticated atmosphere. Reservations required.'
        },
        especialidades: {
          es: ['Trucha salmonada mediterránea', 'Grissini de prosciutto y melón', 'Carpaccio de res', 'Frutti di mare'],
          en: ['Mediterranean salmon trout', 'Prosciutto & melon grissini', 'Beef carpaccio', 'Frutti di mare']
        },
        horarios: [
          { servicio: { es: 'Lunes a domingo', en: 'Monday to Sunday' }, horario: '18:00 — 22:30' }
        ],
        web: 'https://sambavallarta.mx/restaurantes/venezia/',
        contacto: '+523222268250',
        portada: 'https://sambavallarta.mx/wp-content/uploads/2021/11/VeneziaGaleria.jpg'
      },
      {
        nombreCentroConsumo: 'La Hacienda',
        tipoCocina: {
          es: 'Nacional e internacional · Buffet',
          en: 'National & international · Buffet'
        },
        descripcionRestaurante: {
          es: 'Espacio climatizado o terraza para disfrutar lo mejor de la cocina nacional e internacional con especialidades del chef: desayuno buffet, comida a la carta y cenas temáticas rotativas.',
          en: 'Air-conditioned space or terrace to enjoy the best of national and international cuisine with chef’s specialties: breakfast buffet, à la carte lunch and rotating themed dinners.'
        },
        especialidades: {
          es: ['Cenas temáticas (BBQ, mariscada, italiana)', 'Huevos a la vista', 'Pizzas y pastas'],
          en: ['Themed dinners (BBQ, seafood, Italian)', 'Eggs to order', 'Pizzas & pastas']
        },
        horarios: [
          { servicio: { es: 'Desayuno', en: 'Breakfast' }, horario: '07:00 — 11:30' },
          { servicio: { es: 'Comida',   en: 'Lunch' },     horario: '13:00 — 16:30' },
          { servicio: { es: 'Cena',     en: 'Dinner' },    horario: '18:30 — 22:30' }
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
    instagram: 'https://www.instagram.com/marriott_aguascalientes/',
    storyImg: '/stories/m-aguascalientes.jpg',
    coverImg: '/hoteles/m-aguascalientes.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
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
    instagram: 'https://www.instagram.com/marriotttijuana/',
    storyImg: '/stories/m-tijuana.jpg',
    coverImg: '/hoteles/m-tijuana.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/tijmc-tijuana-marriott-hotel/dining/',
        contacto: '+526646226600'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: {
          es: 'Lobby lounge · Bar',
          en: 'Lobby lounge · Bar'
        },
        web: 'https://www.marriott.com/es/hotels/tijmc-tijuana-marriott-hotel/dining/',
        contacto: '+526649729935'
      },
      {
        nombreCentroConsumo: 'Coffee & Deli Shop',
        tipoCocina: {
          es: 'Café y deli',
          en: 'Coffee & deli'
        },
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
    instagram: 'https://www.instagram.com/marriottmexicocity/',
    storyImg: '/stories/m-reforma.jpg',
    coverImg: '/hoteles/m-reforma.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/mexmc-mexico-city-marriott-reforma-hotel/dining/',
        contacto: '+525511027030',
        extension: '2210'
      },
      {
        nombreCentroConsumo: 'La Mansión',
        tipoCocina: {
          es: 'Steakhouse · Cortes',
          en: 'Steakhouse · Cuts'
        },
        web: 'https://www.marriott.com/es/hotels/mexmc-mexico-city-marriott-reforma-hotel/dining/',
        contacto: '+525511027021',
        extension: '2143'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: {
          es: 'Lobby lounge · Bar',
          en: 'Lobby lounge · Bar'
        },
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
    instagram: 'https://www.instagram.com/marriott_villahermosa/',
    storyImg: '/stories/m-villahermosa.jpg',
    coverImg: '/hoteles/m-villahermosa.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
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
    instagram: 'https://www.instagram.com/marriott_tuxtla/',
    storyImg: '/stories/m-tuxtla.jpg',
    coverImg: '/hoteles/m-tuxtla.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Restaurante Condimento',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/tgzmc-marriott-tuxtla-gutierrez-hotel/dining/',
        contacto: '+529616177777'
      },
      {
        nombreCentroConsumo: 'The Great Room',
        tipoCocina: {
          es: 'Lobby lounge · Bar',
          en: 'Lobby lounge · Bar'
        },
        web: 'https://www.marriott.com/es/hotels/tgzmc-marriott-tuxtla-gutierrez-hotel/dining/',
        contacto: '+529616177777'
      },
      {
        nombreCentroConsumo: 'La Mansión',
        tipoCocina: {
          es: 'Steakhouse · Cortes',
          en: 'Steakhouse · Cuts'
        },
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
    instagram: 'https://www.instagram.com/rencancun/',
    storyImg: '/stories/renaissance-cancun.jpg',
    coverImg: '/hoteles/renaissance-cancun.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Kaajal',
        tipoCocina: {
          es: 'Cocina mexicana e internacional',
          en: 'Mexican & international cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/cunbr-renaissance-cancun-resort-and-marina/dining/',
        contacto: '+529988685100'
      },
      {
        nombreCentroConsumo: 'Nüup Deli Café',
        tipoCocina: {
          es: 'Deli y café',
          en: 'Deli & café'
        },
        web: 'https://www.marriott.com/es/hotels/cunbr-renaissance-cancun-resort-and-marina/dining/',
        contacto: '+529988685100'
      },
      {
        nombreCentroConsumo: 'Zek Bar',
        tipoCocina: {
          es: 'Bar · Coctelería',
          en: 'Bar · Cocktails'
        },
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
    instagram: 'https://www.instagram.com/jwmarriottsantafemx/',
    storyImg: '/stories/jw-santa-fe.jpg',
    coverImg: '/hoteles/jw-santa-fe.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Quattro Gastronomia Italiana',
        tipoCocina: {
          es: 'Cocina italiana',
          en: 'Italian cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/mexsf-jw-marriott-hotel-mexico-city-santa-fe/dining/',
        contacto: '+525591779727'
      },
      {
        nombreCentroConsumo: 'Cúa Culinary Artisans',
        tipoCocina: {
          es: 'Buffet internacional',
          en: 'International buffet'
        },
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
    instagram: 'https://www.instagram.com/jwloscabos/',
    storyImg: '/stories/jw-los-cabos.jpg',
    coverImg: '/hoteles/jw-los-cabos.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'Café des Artistes',
        tipoCocina: {
          es: 'Alta cocina',
          en: 'Fine dining'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600',
        extension: '2016'
      },
      {
        nombreCentroConsumo: 'Niparaya JW Bar',
        tipoCocina: {
          es: 'Bar · Coctelería',
          en: 'Bar · Cocktails'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Auka Deli',
        tipoCocina: {
          es: 'Deli y café',
          en: 'Deli & café'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600',
        extension: '2016'
      },
      {
        nombreCentroConsumo: 'MarHumo',
        tipoCocina: {
          es: 'Mariscos y parrilla',
          en: 'Seafood & grill'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'UÁ Culinary Artisans',
        tipoCocina: {
          es: 'Buffet internacional',
          en: 'International buffet'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Kaha Bar',
        tipoCocina: {
          es: 'Bar · Coctelería',
          en: 'Bar · Cocktails'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'El Santo José',
        tipoCocina: {
          es: 'Cocina mexicana',
          en: 'Mexican cuisine'
        },
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
    instagram: 'https://www.instagram.com/casamaat/',
    storyImg: '/stories/casa-maat.jpg',
    coverImg: '/hoteles/casa-maat.jpg',
    restaurantes: [
      {
        nombreCentroConsumo: 'El Santo José',
        tipoCocina: {
          es: 'Cocina mexicana',
          en: 'Mexican cuisine'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241637600'
      },
      {
        nombreCentroConsumo: 'MarHumo',
        tipoCocina: {
          es: 'Mariscos y parrilla',
          en: 'Seafood & grill'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      },
      {
        nombreCentroConsumo: 'Uá Culinary Artisans',
        tipoCocina: {
          es: 'Buffet internacional',
          en: 'International buffet'
        },
        web: 'https://www.marriott.com/es/hotels/sjdjc-casa-maat-at-jw-marriott-los-cabos-beach-resort-and-spa/dining/',
        contacto: '+526241053000'
      }
    ]
  }
];
