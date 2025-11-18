
    // --- App Configuration ---
    const routines = {
        TORSO_PUSH: {
            title: '💪 Empuje y Muñecas',
            description: 'Fuerza de pecho, hombros, tríceps y salud de muñecas.',
            details: {
                exercises: [
                    { name: 'Push-ups', series: 4, reps: 'AMRAP', rest: '60s', notes: 'Fuerza de pecho con calistenia. Eleva los pies para aumentar la dificultad.' },
                    { name: 'Pilates Bar Shoulder Press', series: 4, reps: '12-15', rest: '60s', notes: 'Pisa la banda para generar resistencia' },
                    { name: 'Band Flys', series: 3, reps: '15-20', rest: '45s', notes: 'Aislar y estirar el pecho' },
                    { name: 'Band Lateral Raises', series: 3, reps: '15-20', rest: '45s', notes: 'Ancho de hombros, usa banda' },
                    { name: 'Band Triceps Pushdowns', series: 3, reps: '15-20', rest: '45s', notes: 'Aislar tríceps' },
                    { name: 'Wrist Extension (Palms down)', series: 3, reps: '15-20', rest: '30s', notes: 'Salud de las articulaciones, con barra de pilates' }
                ]
            }
        },
        LEGS_ANKLES: {
            title: '🦵 Piernas y Tobillos',
            description: 'Fuerza de piernas, glúteos y estabilidad de tobillos.',
            details: {
                exercises: [
                    { name: 'Pilates Bar Squat', series: 4, reps: '12-15', rest: '60s', notes: 'Pisa la banda, barra en la espalda' },
                    { name: 'Dumbbell Romanian Deadlift', series: 3, reps: '12-15', rest: '75s', notes: 'Enfócate en los isquiotibiales' },
                    { name: 'Static Lunge (Ankle Focus)', series: 3, reps: '10-12/side', rest: '60s', notes: 'Controla la estabilidad del tobillo' },
                    { name: 'Banded Glute Bridge', series: 3, reps: '15-20', rest: '45s', notes: 'Banda en las rodillas, empuja hacia afuera' },
                    { name: 'Calf Raises (Ankle Focus)', series: 4, reps: '20-25', rest: '45s', notes: 'Con barra de pilates para resistencia' }
                ]
            }
        },
        CORE_CARDIO: {
            title: '🔥 Core y Cardio',
            description: 'Fuerza de core, definición abdominal y acondicionamiento cardiovascular.',
            details: {
                exercises: [
                    { name: 'Plank Hold', series: 4, reps: '45-60s', rest: '45s', notes: 'Mantén el cuerpo recto, core activado' },
                    { name: 'Bicycle Crunches', series: 4, reps: '20-25', rest: '30s', notes: 'Toca codo con rodilla opuesta, movimiento controlado' },
                    { name: 'Burpees', series: 4, reps: '10-15', rest: '60s', notes: 'Explosivos, mantén buena forma' },
                    { name: 'Mountain Climbers', series: 4, reps: '30-40', rest: '45s', notes: 'Ritmo rápido pero controlado' },
                    { name: 'Russian Twists', series: 3, reps: '30-40', rest: '45s', notes: 'Usa banda o pilates bar, gira el torso' },
                    { name: 'Leg Raises', series: 3, reps: '12-15', rest: '45s', notes: 'Core bajo, piernas rectas, controlado' },
                    { name: 'Jump Squats', series: 3, reps: '15-20', rest: '60s', notes: 'Cardio explosivo, aterriza suave' }
                ]
            }
        },
        TORSO_PULL: {
            title: '🏋️‍♂️ Tracción y Muñecas',
            description: 'Fuerza de espalda, bíceps y salud de muñecas.',
            details: {
                exercises: [
                    { name: 'Pilates Bar Lat Pulldown', series: 4, reps: '12-15', rest: '60s', notes: 'Anclaje alto en la puerta' },
                    { name: 'Dumbbell Bent-Over Row', series: 4, reps: '8-12', rest: '60s', notes: 'Fuerza y densidad de la espalda' },
                    { name: 'Band Face Pulls', series: 3, reps: '15-20', rest: '45s', notes: 'Salud y postura de los hombros' },
                    { name: 'Pilates Bar Bicep Curl', series: 3, reps: '12-15', rest: '45s', notes: 'Pisa la banda para generar resistencia' },
                    { name: 'Wrist Flexion (Palms up)', series: 3, reps: '15-20', rest: '30s', notes: 'Salud de las articulaciones, con barra de pilates' }
                ]
            }
        },
        GLUTES_CORE: {
            title: '🍑 Glúteos y Core',
            description: 'Fortalecimiento de la cadena posterior y abdomen.',
            details: {
                exercises: [
                    { name: 'Pull Through', series: 4, reps: '15-20', rest: '60s', notes: 'Anclaje bajo, enfócate en los glúteos' },
                    { name: 'Banded Lateral Walk', series: 3, reps: '12 steps/side', rest: '45s', notes: 'Banda en las rodillas o tobillos' },
                    { name: 'Pilates Bar Russian Twists', series: 3, reps: '20 twists', rest: '45s', notes: 'Sostén la barra, gira el torso' },
                    { name: 'Plank', series: 3, reps: '45-75s', rest: '60s', notes: 'Mantén el cuerpo recto' },
                    { name: 'Bird-Dog', series: 3, reps: '12/side', rest: '30s', notes: 'Movimiento lento y controlado' }
                ]
            }
        },
        METABOLIC: {
            title: '⚡ Circuito Metabólico',
            description: 'Quema de grasa y resistencia cardiovascular. Realizar como circuito.',
            details: {
                exercises: [
                    { name: 'Pilates Bar Thrusters', series: '4 Rounds', reps: '15', rest: '15s', notes: 'Sentadilla + Press de Hombros' },
                    { name: 'Fast Band Rows', series: '4 Rounds', reps: '20', rest: '15s', notes: 'Ritmo rápido y constante' },
                    { name: 'Lunge with Twist', series: '4 Rounds', reps: '10/side', rest: '15s', notes: 'Con barra de pilates' },
                    { name: 'Jumping Jacks', series: '4 Rounds', reps: '45s', rest: '90s', notes: 'Descanso largo al final de la ronda' }
                ]
            }
        },
        REST: {
            title: 'Descanso', 
            description: '¡Recuperación y Crecimiento. Escucha tu cuerpo!'
        }
    };
    
    // --- Comprehensive Exercise Library ---
    const exerciseLibrary = {
        'Dumbbell Bench Press': {
            category: 'Chest',
            equipment: '🏋️ Dumbbells',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Lie flat on a bench (or floor for home gym)',
                    '2. Hold dumbbells at chest level, elbows at 90°',
                    '3. Press dumbbells upward until arms are extended',
                    '4. Lower back to chest with control',
                    '5. Keep your core engaged and back flat'
                ],
                es: [
                    '1. Acuéstate en un banco (o en el suelo para gimnasio casero)',
                    '2. Sostén las mancernas a nivel del pecho, codos a 90°',
                    '3. Empuja las mancernas hacia arriba hasta extender los brazos',
                    '4. Baja de vuelta al pecho con control',
                    '5. Mantén el core contraído y la espalda plana'
                ]
            },
            tips: {
                en: [
                    '✓ Elbows should be at ~75° angle from body',
                    '✓ Full range of motion: chest to full extension',
                    '✓ Breathe out on press, in on lower',
                    '✗ Avoid: Bouncing or rushing the movement',
                    '✗ Avoid: Elbows too wide (risk of injury)'
                ],
                es: [
                    '✓ Los codos deben estar a ~75° del cuerpo',
                    '✓ Rango completo de movimiento: pecho a extensión total',
                    '✓ Exhala al empujar, inhala al bajar',
                    '✗ Evita: Rebotar o apresurarte en el movimiento',
                    '✗ Evita: Codos muy abiertos (riesgo de lesión)'
                ]
            },
            muscleGroups: ['Chest', 'Triceps', 'Shoulders'],
            source: 'ACE (American Council on Exercise)'
        },
        'Push-ups': {
            category: 'Chest',
            equipment: '🛏️ Mat/Floor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Start in a high plank position, hands shoulder-width apart.',
                    '2. Lower your body until your chest nearly touches the floor.',
                    '3. Keep your body in a straight line from head to heels.',
                    '4. Push back up to the starting position.',
                    '5. Keep your core engaged throughout.'
                ],
                es: [
                    '1. Comienza en posición de plancha alta, manos al ancho de hombros.',
                    '2. Baja tu cuerpo hasta que el pecho casi toque el suelo.',
                    '3. Mantén tu cuerpo en línea recta desde la cabeza hasta los talones.',
                    '4. Empuja de vuelta a la posición inicial.',
                    '5. Mantén el core contraído durante todo el movimiento.'
                ]
            },
            tips: {
                en: [
                    '✓ Keep elbows close to your body to protect shoulders.',
                    '✓ Go for full range of motion.',
                    '✓ To make it harder, elevate your feet.',
                    '✓ To make it easier, do them on your knees.',
                    '✗ Avoid: Letting your hips sag.'
                ],
                es: [
                    '✓ Mantén los codos cerca del cuerpo para proteger los hombros.',
                    '✓ Busca rango completo de movimiento.',
                    '✓ Para hacerlo más difícil, eleva los pies.',
                    '✓ Para hacerlo más fácil, hazlo de rodillas.',
                    '✗ Evita: Dejar caer las caderas.'
                ]
            },
            muscleGroups: ['Chest', 'Triceps', 'Shoulders', 'Core'],
            source: 'ACE Fitness'
        },
        'Pilates Bar Shoulder Press': {
            category: 'Shoulders',
            equipment: '🎯 Pilates Bar + Resistance Band',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Stand with feet shoulder-width apart',
                    '2. Step on band with both feet (for resistance)',
                    '3. Hold pilates bar at shoulder height',
                    '4. Press bar overhead until arms extend',
                    '5. Lower back to shoulder height with control',
                    '6. Keep core engaged throughout'
                ],
                es: [
                    '1. Párate con pies al ancho de hombros',
                    '2. Pisa la banda con ambos pies (para resistencia)',
                    '3. Sostén la barra pilates a la altura de los hombros',
                    '4. Empuja la barra hacia arriba hasta extender los brazos',
                    '5. Baja de vuelta a la altura de hombros con control',
                    '6. Mantén el core contraído durante todo el movimiento'
                ]
            },
            tips: {
                en: [
                    '✓ Keep wrists neutral and stable',
                    '✓ Press straight overhead, not forward',
                    '✓ Maintain good posture - no arching',
                    '✗ Avoid: Using momentum to press',
                    '✗ Avoid: Pressing too far forward'
                ],
                es: [
                    '✓ Mantén las muñecas neutras y estables',
                    '✓ Empuja directamente hacia arriba, no hacia adelante',
                    '✓ Mantén buena postura - sin arquear la espalda',
                    '✗ Evita: Usar impulso para empujar',
                    '✗ Evita: Empujar demasiado hacia adelante'
                ]
            },
            muscleGroups: ['Shoulders', 'Triceps', 'Core'],
            source: 'NASM (National Academy of Sports Medicine)'
        },
        'Band Flys': {
            category: 'Chest',
            equipment: '🟰 Resistance Bands',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Attach band at chest height to door anchor',
                    '2. Stand with side to anchor, hold band',
                    '3. Extend arm straight out to side',
                    '4. Bring arm across body in a hugging motion',
                    '5. Slow and controlled - no swinging',
                    '6. Return to starting position'
                ],
                es: [
                    '1. Fija la banda a altura del pecho en el anclaje de puerta',
                    '2. Párate de lado al anclaje, sostén la banda',
                    '3. Extiende el brazo recto hacia el lado',
                    '4. Trae el brazo cruzando el cuerpo en movimiento de abrazo',
                    '5. Lento y controlado - sin balancear',
                    '6. Regresa a la posición inicial'
                ]
            },
            tips: {
                en: [
                    '✓ Keep slight bend in elbow throughout',
                    '✓ Move only at shoulder joint',
                    '✓ Squeeze chest at end of movement',
                    '✗ Avoid: Locking elbow straight',
                    '✗ Avoid: Using momentum or swinging'
                ],
                es: [
                    '✓ Mantén una ligera flexión en el codo durante todo el movimiento',
                    '✓ Muévete solo desde la articulación del hombro',
                    '✓ Contrae el pecho al final del movimiento',
                    '✗ Evita: Bloquear el codo completamente recto',
                    '✗ Evita: Usar impulso o balancearte'
                ]
            },
            muscleGroups: ['Chest', 'Front Shoulders'],
            source: 'ACE Fitness'
        },
        'Dumbbell Lateral Raises': {
            category: 'Shoulders',
            equipment: '🏋️ Dumbbells',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Stand with feet hip-width apart',
                    '2. Hold dumbbells at sides with slight bend in elbows',
                    '3. Raise dumbbells out to sides to shoulder height',
                    '4. Slight bend at elbow - not locked',
                    '5. Lower with control back to starting position'
                ],
                es: [
                    '1. Párate con pies al ancho de cadera',
                    '2. Sostén mancernas a los lados con ligero doblez en los codos',
                    '3. Eleva las mancernas hacia los lados hasta la altura de los hombros',
                    '4. Ligero doblez en el codo - no bloqueado',
                    '5. Baja con control de vuelta a la posición inicial'
                ]
            },
            tips: {
                en: [
                    '✓ Elbow should be slightly higher than hand',
                    '✓ Move slowly - avoid momentum',
                    '✓ Full range from hip to shoulder height',
                    '✗ Avoid: Swinging the weights',
                    '✗ Avoid: Raising above shoulder height'
                ],
                es: [
                    '✓ El codo debe estar ligeramente más alto que la mano',
                    '✓ Muévete lento - evita el impulso',
                    '✓ Rango completo desde cadera hasta altura de hombros',
                    '✗ Evita: Balancear las pesas',
                    '✗ Evita: Elevar por encima de la altura de hombros'
                ]
            },
            muscleGroups: ['Lateral Shoulders', 'Upper Back'],
            source: 'ISSA (International Sports Sciences Association)'
        },
        'Band Lateral Raises': {
            category: 'Shoulders',
            equipment: '🟰 Resistance Bands',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Stand on the middle of the band with feet hip-width apart.',
                    '2. Hold the handles at your sides with a slight bend in your elbows.',
                    '3. Raise your arms out to the sides to shoulder height.',
                    '4. Keep a slight bend at the elbow.',
                    '5. Lower with control back to the starting position.'
                ],
                es: [
                    '1. Párate sobre el centro de la banda con pies al ancho de cadera.',
                    '2. Sostén las agarraderas a los lados con ligero doblez en los codos.',
                    '3. Eleva los brazos hacia los lados hasta la altura de los hombros.',
                    '4. Mantén un ligero doblez en el codo.',
                    '5. Baja con control de vuelta a la posición inicial.'
                ]
            },
            tips: {
                en: [
                    '✓ Move slowly and avoid using momentum.',
                    '✓ Keep your core engaged and your back straight.',
                    '✓ Raise to shoulder height, not higher.',
                    '✗ Avoid: Swinging the bands.',
                    '✗ Avoid: Shrugging your shoulders.'
                ],
                es: [
                    '✓ Muévete lento y evita usar impulso.',
                    '✓ Mantén el core contraído y la espalda recta.',
                    '✓ Eleva hasta la altura de hombros, no más arriba.',
                    '✗ Evita: Balancear las bandas.',
                    '✗ Evita: Encoger los hombros.'
                ]
            },
            muscleGroups: ['Lateral Shoulders', 'Upper Back'],
            source: 'NASM'
        },
        'Band Triceps Pushdowns': {
            category: 'Triceps',
            equipment: '🟰 Resistance Band + Door Anchor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Attach band high on door',
                    '2. Face away from door, hold band at chest',
                    '3. Keep elbows at 90° angle close to body',
                    '4. Push band down until arms are extended',
                    '5. Hold briefly at bottom',
                    '6. Return to chest level with control'
                ],
                es: [
                    '1. Fija la banda en la parte alta de la puerta',
                    '2. Da la espalda a la puerta, sostén la banda a nivel del pecho',
                    '3. Mantén los codos a 90° cerca del cuerpo',
                    '4. Empuja la banda hacia abajo hasta extender los brazos',
                    '5. Mantén brevemente en la parte inferior',
                    '6. Regresa a nivel del pecho con control'
                ]
            },
            tips: {
                en: [
                    '✓ Elbows stay close to ribs throughout',
                    '✓ Only elbow joint moves - no shoulder',
                    '✓ Squeeze triceps at bottom',
                    '✗ Avoid: Letting elbows flare out',
                    '✗ Avoid: Using back muscles for movement'
                ],
                es: [
                    '✓ Los codos permanecen cerca de las costillas durante todo el movimiento',
                    '✓ Solo se mueve la articulación del codo - sin hombro',
                    '✓ Contrae los tríceps en la parte inferior',
                    '✗ Evita: Dejar que los codos se abran',
                    '✗ Evita: Usar los músculos de la espalda para el movimiento'
                ]
            },
            muscleGroups: ['Triceps'],
            source: 'NASM'
        },
        'Wrist Extension (Palms down)': {
            category: 'Forearms',
            equipment: '🎯 Pilates Bar',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Sit or stand with forearm flat on table',
                    '2. Hold pilates bar with palm facing down',
                    '3. Hand extends just past table edge',
                    '4. Lift bar by extending wrist upward',
                    '5. Lower back down with control',
                    '6. Keep forearm flat throughout'
                ],
                es: [
                    '1. Siéntate o párate con el antebrazo plano sobre la mesa',
                    '2. Sostén la barra pilates con la palma hacia abajo',
                    '3. La mano se extiende justo más allá del borde de la mesa',
                    '4. Levanta la barra extendiendo la muñeca hacia arriba',
                    '5. Baja de vuelta con control',
                    '6. Mantén el antebrazo plano durante todo el movimiento'
                ]
            },
            tips: {
                en: [
                    '✓ Move only at wrist joint',
                    '✓ Full range: curl up then extend down',
                    '✓ Use light weight for proper form',
                    '✗ Avoid: Moving forearm or elbow',
                    '✗ Avoid: Jerky movements'
                ],
                es: [
                    '✓ Muévete solo desde la articulación de la muñeca',
                    '✓ Rango completo: curva arriba luego extiende abajo',
                    '✓ Usa peso ligero para forma correcta',
                    '✗ Evita: Mover el antebrazo o codo',
                    '✗ Evita: Movimientos bruscos'
                ]
            },
            muscleGroups: ['Forearm Extensors', 'Wrist'],
            source: 'ACE Fitness'
        },
        'Pilates Bar Squat': {
            category: 'Legs',
            equipment: '🎯 Pilates Bar + Resistance Band',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Step on band with both feet, hip-width apart',
                    '2. Hold pilates bar across shoulders (behind neck)',
                    '3. Keep chest up and core engaged',
                    '4. Bend knees and hips, lower to parallel',
                    '5. Knees track over toes',
                    '6. Drive through heels to stand'
                ],
                es: [
                    '1. Pisa la banda con ambos pies, al ancho de cadera',
                    '2. Sostén la barra pilates sobre los hombros (detrás del cuello)',
                    '3. Mantén el pecho arriba y el core contraído',
                    '4. Dobla rodillas y caderas, baja hasta paralelo',
                    '5. Las rodillas siguen la línea de los dedos de los pies',
                    '6. Empuja a través de los talones para incorporarte'
                ]
            },
            tips: {
                en: [
                    '✓ Keep chest upright throughout',
                    '✓ Weight in heels, not toes',
                    '✓ Full depth: hips below knees',
                    '✗ Avoid: Knees caving inward',
                    '✗ Avoid: Heels lifting off ground'
                ],
                es: [
                    '✓ Mantén el pecho erguido durante todo el movimiento',
                    '✓ Peso en los talones, no en los dedos',
                    '✓ Profundidad completa: caderas debajo de rodillas',
                    '✗ Evita: Rodillas colapsando hacia adentro',
                    '✗ Evita: Talones levantándose del suelo'
                ]
            },
            muscleGroups: ['Quads', 'Glutes', 'Hamstrings'],
            source: 'ACE Fitness'
        },
        'Dumbbell Romanian Deadlift': {
            category: 'Hamstrings',
            equipment: '🏋️ Dumbbells',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Stand with feet hip-width apart',
                    '2. Hold dumbbells in front of thighs',
                    '3. Slight bend in knees (not locked)',
                    '4. Hinge at hips, lowering weight down legs',
                    '5. Feel stretch in hamstrings',
                    '6. Drive hips forward to return to standing'
                ],
                es: [
                    '1. Párate con pies al ancho de cadera',
                    '2. Sostén las mancernas frente a los muslos',
                    '3. Ligero doblez en las rodillas (no bloqueadas)',
                    '4. Bisagra desde las caderas, bajando el peso por las piernas',
                    '5. Siente el estiramiento en los isquiotibiales',
                    '6. Empuja las caderas hacia adelante para volver a incorporarte'
                ]
            },
            tips: {
                en: [
                    '✓ Keep back straight - slight curve natural',
                    '✓ Dumbbells stay close to legs',
                    '✓ Feel hamstring stretch at bottom',
                    '✗ Avoid: Rounding lower back',
                    '✗ Avoid: Bending knees too much'
                ],
                es: [
                    '✓ Mantén la espalda recta - ligera curva natural',
                    '✓ Las mancernas permanecen cerca de las piernas',
                    '✓ Siente el estiramiento de isquiotibiales en la parte inferior',
                    '✗ Evita: Redondear la espalda baja',
                    '✗ Evita: Doblar las rodillas demasiado'
                ]
            },
            muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
            source: 'NASM'
        },
        'Static Lunge (Ankle Focus)': {
            category: 'Legs',
            equipment: '🛏️ Mat/Floor',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Stand with feet together',
                    '2. Step forward with one leg',
                    '3. Both knees bend to 90°',
                    '4. Front knee aligned with ankle',
                    '5. Back knee hovers just above ground',
                    '6. Keep torso upright, focus on ankle stability'
                ],
                es: [
                    '1. Párate con pies juntos',
                    '2. Da un paso adelante con una pierna',
                    '3. Ambas rodillas se doblan a 90°',
                    '4. Rodilla frontal alineada con el tobillo',
                    '5. Rodilla trasera flota justo sobre el suelo',
                    '6. Mantén torso erguido, enfócate en estabilidad del tobillo'
                ]
            },
            tips: {
                en: [
                    '✓ Front knee tracks over toes',
                    '✓ Keep weight balanced between legs',
                    '✓ Activate ankle stabilizers',
                    '✗ Avoid: Front knee past toes',
                    '✗ Avoid: Leaning forward'
                ],
                es: [
                    '✓ La rodilla frontal sigue la línea de los dedos',
                    '✓ Mantén el peso equilibrado entre ambas piernas',
                    '✓ Activa los estabilizadores del tobillo',
                    '✗ Evita: Rodilla frontal pasando los dedos',
                    '✗ Evita: Inclinarte hacia adelante'
                ]
            },
            muscleGroups: ['Quads', 'Glutes', 'Ankle Stabilizers'],
            source: 'NASM'
        },
        'Banded Glute Bridge': {
            category: 'Glutes',
            equipment: '🟰 Resistance Band + Mat',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Lie on back, knees bent, feet flat',
                    '2. Place band above knees',
                    '3. Push knees outward against band',
                    '4. Drive through heels, lift hips',
                    '5. Squeeze glutes at top',
                    '6. Lower hips with control'
                ],
                es: [
                    '1. Acuéstate boca arriba, rodillas dobladas, pies planos',
                    '2. Coloca la banda sobre las rodillas',
                    '3. Empuja las rodillas hacia afuera contra la banda',
                    '4. Empuja a través de los talones, levanta caderas',
                    '5. Contrae los glúteos en la parte superior',
                    '6. Baja las caderas con control'
                ]
            },
            tips: {
                en: [
                    '✓ Maintain tension on band throughout',
                    '✓ Squeeze glutes - don\'t use lower back',
                    '✓ Knees push against band all movement',
                    '✗ Avoid: Lower back hyperextending',
                    '✗ Avoid: Losing band tension'
                ],
                es: [
                    '✓ Mantén tensión en la banda durante todo el movimiento',
                    '✓ Contrae glúteos - no uses espalda baja',
                    '✓ Las rodillas empujan contra la banda todo el tiempo',
                    '✗ Evita: Hiperextensión de espalda baja',
                    '✗ Evita: Perder tensión de la banda'
                ]
            },
            muscleGroups: ['Glutes', 'Hamstrings', 'Core'],
            source: 'ACE Fitness'
        },
        'Calf Raises (Ankle Focus)': {
            category: 'Calves',
            equipment: '🎯 Pilates Bar',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Hold pilates bar for balance',
                    '2. Stand with feet hip-width apart',
                    '3. Rise up on toes, lifting heels high',
                    '4. Pause briefly at the top',
                    '5. Lower heels back to ground',
                    '6. Focus on ankle control and stability'
                ],
                es: [
                    '1. Sostén la barra pilates para equilibrio',
                    '2. Párate con pies al ancho de cadera',
                    '3. Eleva sobre los dedos, levantando talones alto',
                    '4. Pausa brevemente en la parte superior',
                    '5. Baja los talones de vuelta al suelo',
                    '6. Enfócate en control y estabilidad del tobillo'
                ]
            },
            tips: {
                en: [
                    '✓ Full range: heels up, then fully down',
                    '✓ Move through ankle joint only',
                    '✓ Controlled pace - not bouncy',
                    '✗ Avoid: Bouncing at bottom',
                    '✗ Avoid: Turning feet inward/outward'
                ],
                es: [
                    '✓ Rango completo: talones arriba, luego completamente abajo',
                    '✓ Muévete solo a través de la articulación del tobillo',
                    '✓ Ritmo controlado - sin rebotar',
                    '✗ Evita: Rebotar en la parte inferior',
                    '✗ Evita: Girar los pies hacia adentro/afuera'
                ]
            },
            muscleGroups: ['Calves', 'Ankle'],
            source: 'ACE Fitness'
        },
        'Pilates Bar Lat Pulldown': {
            category: 'Back',
            equipment: '🎯 Pilates Bar + Door Anchor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Attach band at top of door',
                    '2. Hold pilates bar with hands shoulder-width',
                    '3. Sit with knees bent, feet flat',
                    '4. Pull bar down to chest level',
                    '5. Keep elbows pointing down',
                    '6. Return with control'
                ],
                es: [
                    '1. Fija la banda en la parte superior de la puerta',
                    '2. Sostén la barra pilates con manos al ancho de hombros',
                    '3. Siéntate con rodillas dobladas, pies planos',
                    '4. Jala la barra hacia abajo hasta nivel del pecho',
                    '5. Mantén los codos apuntando hacia abajo',
                    '6. Regresa con control'
                ]
            },
            tips: {
                en: [
                    '✓ Elbows follow straight path downward',
                    '✓ Pull elbows back and down',
                    '✓ Squeeze back muscles at bottom',
                    '✗ Avoid: Pulling bar too far down',
                    '✗ Avoid: Using arms instead of back'
                ],
                es: [
                    '✓ Los codos siguen un camino recto hacia abajo',
                    '✓ Jala los codos hacia atrás y abajo',
                    '✓ Contrae los músculos de la espalda en la parte inferior',
                    '✗ Evita: Jalar la barra demasiado abajo',
                    '✗ Evita: Usar los brazos en lugar de la espalda'
                ]
            },
            muscleGroups: ['Lats', 'Back', 'Biceps'],
            source: 'NASM'
        },
        'Dumbbell Bent-Over Row': {
            category: 'Back',
            equipment: '🏋️ Dumbbells',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Stand with feet hip-width apart',
                    '2. Hold dumbbells at sides',
                    '3. Hinge at hips, back nearly parallel to floor',
                    '4. Pull dumbbells to rib cage',
                    '5. Squeeze back muscles at top',
                    '6. Lower dumbbells with control'
                ],
                es: [
                    '1. Párate con pies al ancho de cadera',
                    '2. Sostén las mancernas a los lados',
                    '3. Bisagra desde caderas, espalda casi paralela al suelo',
                    '4. Jala las mancernas hacia la caja torácica',
                    '5. Contrae los músculos de la espalda en la parte superior',
                    '6. Baja las mancernas con control'
                ]
            },
            tips: {
                en: [
                    '✓ Keep back straight - engaged core',
                    '✓ Pull elbows close to body',
                    '✓ Full range from hang to chest',
                    '✗ Avoid: Rounding lower back',
                    '✗ Avoid: Using momentum'
                ],
                es: [
                    '✓ Mantén espalda recta - core contraído',
                    '✓ Jala los codos cerca del cuerpo',
                    '✓ Rango completo desde colgado hasta pecho',
                    '✗ Evita: Redondear la espalda baja',
                    '✗ Evita: Usar impulso'
                ]
            },
            muscleGroups: ['Back', 'Lats', 'Biceps'],
            source: 'ACE Fitness'
        },
        'Band Face Pulls': {
            category: 'Shoulders',
            equipment: '🟰 Resistance Band + Door Anchor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Attach band at face height on door',
                    '2. Stand facing door, hold band',
                    '3. Pull band toward face/head',
                    '4. Elbows stay high and flared',
                    '5. Pause briefly at end',
                    '6. Return with control'
                ],
                es: [
                    '1. Fija la banda a altura de la cara en la puerta',
                    '2. Párate de frente a la puerta, sostén la banda',
                    '3. Jala la banda hacia la cara/cabeza',
                    '4. Los codos permanecen altos y abiertos',
                    '5. Pausa brevemente al final',
                    '6. Regresa con control'
                ]
            },
            tips: {
                en: [
                    '✓ Elbows high - at or above shoulder',
                    '✓ Rotate hands outward at end',
                    '✓ Squeeze rear shoulders and upper back',
                    '✗ Avoid: Pulling down instead of to face',
                    '✗ Avoid: Letting elbows drop'
                ],
                es: [
                    '✓ Codos altos - a nivel o arriba del hombro',
                    '✓ Rota las manos hacia afuera al final',
                    '✓ Contrae hombros posteriores y parte superior de espalda',
                    '✗ Evita: Jalar hacia abajo en lugar de hacia la cara',
                    '✗ Evita: Dejar caer los codos'
                ]
            },
            muscleGroups: ['Rear Shoulders', 'Upper Back'],
            source: 'NASM'
        },
        'Pilates Bar Bicep Curl': {
            category: 'Biceps',
            equipment: '🎯 Pilates Bar + Resistance Band',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Stand with feet hip-width apart',
                    '2. Step on band with both feet',
                    '3. Hold pilates bar, arms extended',
                    '4. Bend elbows, curl bar to shoulders',
                    '5. Squeeze biceps at top',
                    '6. Lower with control'
                ],
                es: [
                    '1. Párate con pies al ancho de cadera',
                    '2. Pisa la banda con ambos pies',
                    '3. Sostén la barra pilates, brazos extendidos',
                    '4. Dobla los codos, curva la barra hacia los hombros',
                    '5. Contrae los bíceps en la parte superior',
                    '6. Baja con control'
                ]
            },
            tips: {
                en: [
                    '✓ Keep elbows close to body',
                    '✓ Only elbow joint moves',
                    '✓ Full range: extended to shoulders',
                    '✗ Avoid: Swinging or using momentum',
                    '✗ Avoid: Elbows flaring out'
                ],
                es: [
                    '✓ Mantén los codos cerca del cuerpo',
                    '✓ Solo se mueve la articulación del codo',
                    '✓ Rango completo: extendido hasta hombros',
                    '✗ Evita: Balancearte o usar impulso',
                    '✗ Evita: Codos abriéndose'
                ]
            },
            muscleGroups: ['Biceps', 'Forearms'],
            source: 'ACE Fitness'
        },
        'Wrist Flexion (Palms up)': {
            category: 'Forearms',
            equipment: '🎯 Pilates Bar',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Sit with forearm flat on table',
                    '2. Hold pilates bar with palm facing up',
                    '3. Hand extends just past table edge',
                    '4. Curl wrist upward',
                    '5. Lower back down with control',
                    '6. Keep forearm flat throughout'
                ],
                es: [
                    '1. Siéntate con antebrazo plano sobre la mesa',
                    '2. Sostén la barra pilates con palma hacia arriba',
                    '3. La mano se extiende justo más allá del borde de la mesa',
                    '4. Curva la muñeca hacia arriba',
                    '5. Baja de vuelta con control',
                    '6. Mantén el antebrazo plano durante todo el movimiento'
                ]
            },
            tips: {
                en: [
                    '✓ Move only at wrist joint',
                    '✓ Full range: down then up fully',
                    '✓ Use light weight for control',
                    '✗ Avoid: Moving forearm or elbow',
                    '✗ Avoid: Bouncing at bottom'
                ],
                es: [
                    '✓ Muévete solo desde la articulación de la muñeca',
                    '✓ Rango completo: abajo luego arriba completamente',
                    '✓ Usa peso ligero para control',
                    '✗ Evita: Mover antebrazo o codo',
                    '✗ Evita: Rebotar en la parte inferior'
                ]
            },
            muscleGroups: ['Forearm Flexors', 'Wrist'],
            source: 'ACE Fitness'
        },
        'Pull Through': {
            category: 'Glutes',
            equipment: '🔔 Kettlebell + Cable Anchor (Low)',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Attach band low on door or anchor',
                    '2. Stand facing away, hold band between legs',
                    '3. Feet hip-width apart, slight bend in knees',
                    '4. Hinge at hips, push band between legs',
                    '5. Drive hips forward',
                    '6. Return to standing'
                ],
                es: [
                    '1. Fija la banda baja en la puerta o anclaje',
                    '2. Párate dando la espalda, sostén banda entre las piernas',
                    '3. Pies al ancho de cadera, ligero doblez en rodillas',
                    '4. Bisagra desde caderas, empuja banda entre piernas',
                    '5. Empuja las caderas hacia adelante',
                    '6. Regresa a posición de pie'
                ]
            },
            tips: {
                en: [
                    '✓ Power comes from hips, not arms',
                    '✓ Keep core engaged throughout',
                    '✓ Full hip extension at top',
                    '✗ Avoid: Rounding lower back',
                    '✗ Avoid: Using arms to pull'
                ],
                es: [
                    '✓ La fuerza viene de las caderas, no de los brazos',
                    '✓ Mantén el core contraído durante todo el movimiento',
                    '✓ Extensión completa de cadera en la parte superior',
                    '✗ Evita: Redondear la espalda baja',
                    '✗ Evita: Usar los brazos para jalar'
                ]
            },
            muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back'],
            source: 'NASM'
        },
        'Banded Lateral Walk': {
            category: 'Glutes',
            equipment: '🟰 Resistance Band',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Place band above knees or at ankles',
                    '2. Stand with feet hip-width apart',
                    '3. Slight bend in knees and hips',
                    '4. Maintain tension on band',
                    '5. Step to side, keeping band tight',
                    '6. Alternate directions'
                ],
                es: [
                    '1. Coloca la banda sobre las rodillas o en los tobillos',
                    '2. Párate con pies al ancho de cadera',
                    '3. Ligero doblez en rodillas y caderas',
                    '4. Mantén tensión en la banda',
                    '5. Da un paso al lado, manteniendo la banda tensa',
                    '6. Alterna direcciones'
                ]
            },
            tips: {
                en: [
                    '✓ Keep knees bent throughout',
                    '✓ Never let knees cave inward',
                    '✓ Push against band each step',
                    '✗ Avoid: Standing upright - bend knees',
                    '✗ Avoid: Band going slack'
                ],
                es: [
                    '✓ Mantén las rodillas dobladas durante todo el movimiento',
                    '✓ Nunca dejes que las rodillas colapsen hacia adentro',
                    '✓ Empuja contra la banda en cada paso',
                    '✗ Evita: Pararte erguido - dobla las rodillas',
                    '✗ Evita: Banda aflojándose'
                ]
            },
            muscleGroups: ['Glutes', 'Hip Abductors'],
            source: 'ACE Fitness'
        },
        'Pilates Bar Russian Twists': {
            category: 'Core',
            equipment: '🎯 Pilates Bar',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Sit on floor with knees bent',
                    '2. Lean back slightly (45° angle)',
                    '3. Hold pilates bar with hands',
                    '4. Rotate torso left, tap bar to ground',
                    '5. Rotate to right, tap to ground',
                    '6. Keep core engaged throughout'
                ],
                es: [
                    '1. Siéntate en el suelo con rodillas dobladas',
                    '2. Inclínate ligeramente hacia atrás (ángulo de 45°)',
                    '3. Sostén la barra pilates con las manos',
                    '4. Rota el torso hacia la izquierda, toca el suelo con la barra',
                    '5. Rota hacia la derecha, toca el suelo',
                    '6. Mantén el core contraído durante todo el movimiento'
                ]
            },
            tips: {
                en: [
                    '✓ Rotation comes from abs, not arms',
                    '✓ Keep chest up - don\'t slouch',
                    '✓ Move with control, not speed',
                    '✗ Avoid: Jerking or bouncing',
                    '✗ Avoid: Over-rotating too far'
                ],
                es: [
                    '✓ La rotación viene de los abdominales, no de los brazos',
                    '✓ Mantén el pecho arriba - no te encorves',
                    '✓ Muévete con control, no con velocidad',
                    '✗ Evita: Movimientos bruscos o rebotes',
                    '✗ Evita: Rotar demasiado lejos'
                ]
            },
            muscleGroups: ['Obliques', 'Core'],
            source: 'NASM'
        },
        'Plank': {
            category: 'Core',
            equipment: '🛏️ Mat/Floor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Get into push-up position',
                    '2. Lower to forearms, elbows under shoulders',
                    '3. Body in straight line from head to heels',
                    '4. Engage core throughout',
                    '5. Hold position without sagging hips',
                    '6. Breathe steadily - don\'t hold breath'
                ],
                es: [
                    '1. Colócate en posición de flexión',
                    '2. Baja a los antebrazos, codos bajo los hombros',
                    '3. Cuerpo en línea recta desde cabeza hasta talones',
                    '4. Contrae el core durante todo el movimiento',
                    '5. Mantén la posición sin dejar caer las caderas',
                    '6. Respira constantemente - no aguantes la respiración'
                ]
            },
            tips: {
                en: [
                    '✓ Hips level with body - not sagging',
                    '✓ Shoulders over elbows',
                    '✓ Core squeezed tight',
                    '✗ Avoid: Hips dropping or rising',
                    '✗ Avoid: Holding breath'
                ],
                es: [
                    '✓ Caderas al nivel del cuerpo - sin hundirse',
                    '✓ Hombros sobre los codos',
                    '✓ Core apretado fuertemente',
                    '✗ Evita: Caderas cayendo o levantándose',
                    '✗ Evita: Aguantar la respiración'
                ]
            },
            muscleGroups: ['Core', 'Shoulders', 'Back'],
            source: 'ACE Fitness'
        },
        'Bird-Dog': {
            category: 'Core',
            equipment: '🛏️ Mat/Floor',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Start on hands and knees',
                    '2. Shoulders over hands, hips over knees',
                    '3. Extend opposite arm and leg',
                    '4. Hold briefly - maintain balance',
                    '5. Return slowly to start',
                    '6. Alternate sides'
                ],
                es: [
                    '1. Comienza en cuatro patas',
                    '2. Hombros sobre manos, caderas sobre rodillas',
                    '3. Extiende brazo y pierna opuestos',
                    '4. Mantén brevemente - mantiene el equilibrio',
                    '5. Regresa lentamente al inicio',
                    '6. Alterna lados'
                ]
            },
            tips: {
                en: [
                    '✓ Keep body aligned - no rotation',
                    '✓ Move slowly and controlled',
                    '✓ Squeeze core for stability',
                    '✗ Avoid: Rotating hips or shoulders',
                    '✗ Avoid: Moving too quickly'
                ],
                es: [
                    '✓ Mantén el cuerpo alineado - sin rotación',
                    '✓ Muévete lento y controlado',
                    '✓ Contrae el core para estabilidad',
                    '✗ Evita: Rotar caderas u hombros',
                    '✗ Evita: Moverte demasiado rápido'
                ]
            },
            muscleGroups: ['Core', 'Lower Back', 'Glutes'],
            source: 'NASM'
        },
        'Pilates Bar Thrusters': {
            category: 'Full Body',
            equipment: '🎯 Pilates Bar + Resistance Band',
            difficulty: 'Advanced',
            form: {
                en: [
                    '1. Stand on band with feet shoulder-width',
                    '2. Hold bar at shoulder height',
                    '3. Squat down to parallel',
                    '4. Drive through heels, stand up',
                    '5. Press bar overhead in one motion',
                    '6. Return bar to shoulders'
                ],
                es: [
                    '1. Párate sobre la banda con pies al ancho de hombros',
                    '2. Sostén la barra a altura de hombros',
                    '3. Baja en sentadilla hasta paralelo',
                    '4. Empuja a través de los talones, incorpórate',
                    '5. Empuja la barra sobre la cabeza en un solo movimiento',
                    '6. Regresa la barra a los hombros'
                ]
            },
            tips: {
                en: [
                    '✓ Squat and press as one fluid motion',
                    '✓ Drive power from legs through upper body',
                    '✓ Full extension overhead',
                    '✗ Avoid: Pressing without full leg drive',
                    '✗ Avoid: Incomplete squat depth'
                ],
                es: [
                    '✓ Sentadilla y empuje como un movimiento fluido',
                    '✓ Impulsa la fuerza desde las piernas hacia la parte superior',
                    '✓ Extensión completa sobre la cabeza',
                    '✗ Evita: Empujar sin impulso completo de piernas',
                    '✗ Evita: Profundidad incompleta de sentadilla'
                ]
            },
            muscleGroups: ['Quads', 'Shoulders', 'Full Body'],
            source: 'CrossFit'
        },
        'Fast Band Rows': {
            category: 'Back',
            equipment: '🟰 Resistance Band + Door Anchor',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Attach band at chest height on door',
                    '2. Stand facing door, hold band',
                    '3. Arms extended in front',
                    '4. Quickly pull band to chest',
                    '5. Squeeze back hard',
                    '6. Quick controlled return'
                ],
                es: [
                    '1. Fija la banda a altura del pecho en la puerta',
                    '2. Párate de frente a la puerta, sostén la banda',
                    '3. Brazos extendidos al frente',
                    '4. Jala rápidamente la banda hacia el pecho',
                    '5. Contrae la espalda fuertemente',
                    '6. Regreso rápido y controlado'
                ]
            },
            tips: {
                en: [
                    '✓ Speed is controlled, not wild',
                    '✓ Elbows pull close to body',
                    '✓ Explosive pull, controlled release',
                    '✗ Avoid: Excessive momentum',
                    '✗ Avoid: Sloppy form for speed'
                ],
                es: [
                    '✓ La velocidad es controlada, no salvaje',
                    '✓ Los codos jalan cerca del cuerpo',
                    '✓ Jalón explosivo, liberación controlada',
                    '✗ Evita: Impulso excesivo',
                    '✗ Evita: Forma descuidada por velocidad'
                ]
            },
            muscleGroups: ['Back', 'Lats', 'Biceps'],
            source: 'NASM'
        },
        'Lunge with Twist': {
            category: 'Full Body',
            equipment: '🎯 Pilates Bar',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Step forward into lunge position',
                    '2. Both knees at 90°',
                    '3. Hold pilates bar at chest',
                    '4. Rotate torso over front leg',
                    '5. Feel core and leg engagement',
                    '6. Return to center and step back'
                ],
                es: [
                    '1. Da un paso adelante en posición de estocada',
                    '2. Ambas rodillas a 90°',
                    '3. Sostén la barra pilates al pecho',
                    '4. Rota el torso sobre la pierna frontal',
                    '5. Siente el compromiso del core y la pierna',
                    '6. Regresa al centro y da paso atrás'
                ]
            },
            tips: {
                en: [
                    '✓ Controlled lunge first, then twist',
                    '✓ Twist from core, not arms',
                    '✓ Keep front knee aligned',
                    '✗ Avoid: Twisting before stable in lunge',
                    '✗ Avoid: Front knee past toes'
                ],
                es: [
                    '✓ Estocada controlada primero, luego gira',
                    '✓ Gira desde el core, no desde los brazos',
                    '✓ Mantén rodilla frontal alineada',
                    '✗ Evita: Girar antes de estar estable en estocada',
                    '✗ Evita: Rodilla frontal pasando los dedos'
                ]
            },
            muscleGroups: ['Quads', 'Core', 'Glutes'],
            source: 'NASM'
        },
        'Jumping Jacks': {
            category: 'Cardio',
            equipment: '🛏️ Space',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Stand with feet together, arms at sides',
                    '2. Jump up while spreading feet shoulder-width',
                    '3. Simultaneously raise arms to shoulder height',
                    '4. Jump back to starting position',
                    '5. Lower arms to sides',
                    '6. Repeat in continuous motion'
                ],
                es: [
                    '1. Párate con pies juntos, brazos a los lados',
                    '2. Salta mientras separas los pies al ancho de hombros',
                    '3. Simultáneamente eleva brazos a altura de hombros',
                    '4. Salta de vuelta a la posición inicial',
                    '5. Baja los brazos a los lados',
                    '6. Repite en movimiento continuo'
                ]
            },
            tips: {
                en: [
                    '✓ Land on balls of feet for cushioning',
                    '✓ Keep core engaged',
                    '✓ Smooth, rhythmic movement',
                    '✗ Avoid: Slamming feet when landing',
                    '✗ Avoid: Incomplete arm raises'
                ],
                es: [
                    '✓ Aterriza en la parte anterior de los pies para amortiguación',
                    '✓ Mantén el core contraído',
                    '✓ Movimiento suave y rítmico',
                    '✗ Evita: Golpear los pies al aterrizar',
                    '✗ Evita: Elevaciones incompletas de brazos'
                ]
            },
            muscleGroups: ['Full Body', 'Cardio'],
            source: 'ACE Fitness'
        },
        'Plank Hold': {
            category: 'Core',
            equipment: '🛏️ Mat',
            difficulty: 'Beginner',
            form: {
                en: [
                    '1. Start in forearm plank position',
                    '2. Elbows directly under shoulders',
                    '3. Keep body in straight line from head to heels',
                    '4. Engage core and glutes',
                    '5. Hold position without letting hips sag',
                    '6. Breathe normally throughout'
                ],
                es: [
                    '1. Comienza en posición de plancha de antebrazos',
                    '2. Codos directamente debajo de los hombros',
                    '3. Mantén el cuerpo en línea recta desde cabeza hasta talones',
                    '4. Contrae core y glúteos',
                    '5. Mantén la posición sin dejar caer las caderas',
                    '6. Respira normalmente durante todo el ejercicio'
                ]
            },
            tips: {
                en: [
                    '✓ Keep neck neutral - look at floor',
                    '✓ Squeeze glutes to protect lower back',
                    '✓ Engage core throughout',
                    '✗ Avoid: Letting hips drop or raise',
                    '✗ Avoid: Holding your breath'
                ],
                es: [
                    '✓ Mantén el cuello neutral - mira al piso',
                    '✓ Aprieta glúteos para proteger la espalda baja',
                    '✓ Mantén el core contraído',
                    '✗ Evita: Dejar caer o elevar las caderas',
                    '✗ Evita: Aguantar la respiración'
                ]
            },
            muscleGroups: ['Core', 'Shoulders', 'Back'],
            source: 'ACE Fitness'
        },
        'Bicycle Crunches': {
            category: 'Core',
            equipment: '🛏️ Mat',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Lie on back with hands behind head',
                    '2. Lift shoulders off ground',
                    '3. Bring right elbow to left knee',
                    '4. Extend right leg while twisting',
                    '5. Switch sides - left elbow to right knee',
                    '6. Continue alternating in pedaling motion'
                ],
                es: [
                    '1. Acuéstate boca arriba con manos detrás de la cabeza',
                    '2. Levanta hombros del suelo',
                    '3. Lleva codo derecho a rodilla izquierda',
                    '4. Extiende pierna derecha mientras giras',
                    '5. Cambia de lado - codo izquierdo a rodilla derecha',
                    '6. Continúa alternando en movimiento de pedaleo'
                ]
            },
            tips: {
                en: [
                    '✓ Touch elbow to opposite knee',
                    '✓ Full extension of leg',
                    '✓ Controlled rotation from core',
                    '✗ Avoid: Pulling on neck',
                    '✗ Avoid: Rushing the movement'
                ],
                es: [
                    '✓ Toca codo con rodilla opuesta',
                    '✓ Extensión completa de la pierna',
                    '✓ Rotación controlada desde el core',
                    '✗ Evita: Jalar el cuello',
                    '✗ Evita: Apresurarte en el movimiento'
                ]
            },
            muscleGroups: ['Abs', 'Obliques'],
            source: 'ACE Fitness'
        },
        'Burpees': {
            category: 'Full Body',
            equipment: '🛏️ Space',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Start standing',
                    '2. Drop into squat position, hands on floor',
                    '3. Jump feet back into plank',
                    '4. Optional: Do one push-up',
                    '5. Jump feet back to squat',
                    '6. Explode up into jump, arms overhead'
                ],
                es: [
                    '1. Comienza de pie',
                    '2. Baja a posición de sentadilla, manos en el piso',
                    '3. Salta pies atrás a posición de plancha',
                    '4. Opcional: Haz una lagartija',
                    '5. Salta pies de vuelta a sentadilla',
                    '6. Explota hacia arriba en salto, brazos arriba'
                ]
            },
            tips: {
                en: [
                    '✓ Land softly on jump',
                    '✓ Keep core tight in plank',
                    '✓ Full explosive movement',
                    '✗ Avoid: Sloppy form when tired',
                    '✗ Avoid: Landing hard on knees'
                ],
                es: [
                    '✓ Aterriza suavemente en el salto',
                    '✓ Mantén core apretado en plancha',
                    '✓ Movimiento explosivo completo',
                    '✗ Evita: Forma descuidada cuando estás cansado',
                    '✗ Evita: Aterrizar duro sobre las rodillas'
                ]
            },
            muscleGroups: ['Full Body', 'Cardio', 'Core'],
            source: 'NASM'
        },
        'Mountain Climbers': {
            category: 'Cardio',
            equipment: '🛏️ Mat',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Start in high plank position',
                    '2. Bring right knee toward chest',
                    '3. Quickly switch legs',
                    '4. Bring left knee toward chest',
                    '5. Continue alternating at fast pace',
                    '6. Keep hips level throughout'
                ],
                es: [
                    '1. Comienza en posición de plancha alta',
                    '2. Lleva rodilla derecha hacia el pecho',
                    '3. Cambia rápidamente de pierna',
                    '4. Lleva rodilla izquierda hacia el pecho',
                    '5. Continúa alternando a ritmo rápido',
                    '6. Mantén las caderas niveladas'
                ]
            },
            tips: {
                en: [
                    '✓ Keep core engaged',
                    '✓ Fast but controlled pace',
                    '✓ Shoulders over wrists',
                    '✗ Avoid: Letting hips bounce',
                    '✗ Avoid: Going too slow'
                ],
                es: [
                    '✓ Mantén el core contraído',
                    '✓ Ritmo rápido pero controlado',
                    '✓ Hombros sobre las muñecas',
                    '✗ Evita: Dejar rebotar las caderas',
                    '✗ Evita: Ir muy lento'
                ]
            },
            muscleGroups: ['Core', 'Cardio', 'Shoulders'],
            source: 'ACE Fitness'
        },
        'Leg Raises': {
            category: 'Core',
            equipment: '🛏️ Mat',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Lie flat on back, hands under glutes',
                    '2. Keep legs straight together',
                    '3. Raise legs up to 90 degrees',
                    '4. Lower slowly without touching floor',
                    '5. Stop just above ground',
                    '6. Repeat controlled motion'
                ],
                es: [
                    '1. Acuéstate boca arriba, manos bajo glúteos',
                    '2. Mantén piernas rectas juntas',
                    '3. Eleva piernas hasta 90 grados',
                    '4. Baja lentamente sin tocar el piso',
                    '5. Detente justo sobre el suelo',
                    '6. Repite movimiento controlado'
                ]
            },
            tips: {
                en: [
                    '✓ Press lower back into floor',
                    '✓ Straight legs throughout',
                    '✓ Slow controlled lowering',
                    '✗ Avoid: Arching lower back',
                    '✗ Avoid: Using momentum'
                ],
                es: [
                    '✓ Presiona la espalda baja contra el piso',
                    '✓ Piernas rectas durante todo el ejercicio',
                    '✓ Bajada lenta y controlada',
                    '✗ Evita: Arquear la espalda baja',
                    '✗ Evita: Usar impulso'
                ]
            },
            muscleGroups: ['Lower Abs', 'Hip Flexors'],
            source: 'ACE Fitness'
        },
        'Jump Squats': {
            category: 'Legs',
            equipment: '🛏️ Space',
            difficulty: 'Intermediate',
            form: {
                en: [
                    '1. Start in squat position',
                    '2. Lower into full squat',
                    '3. Explode upward into jump',
                    '4. Extend arms overhead',
                    '5. Land softly back into squat',
                    '6. Immediately repeat'
                ],
                es: [
                    '1. Comienza en posición de sentadilla',
                    '2. Baja a sentadilla completa',
                    '3. Explota hacia arriba en salto',
                    '4. Extiende brazos arriba',
                    '5. Aterriza suavemente de vuelta a sentadilla',
                    '6. Repite inmediatamente'
                ]
            },
            tips: {
                en: [
                    '✓ Land softly on balls of feet',
                    '✓ Full depth squat before jump',
                    '✓ Explosive power from legs',
                    '✗ Avoid: Landing with locked knees',
                    '✗ Avoid: Shallow squats'
                ],
                es: [
                    '✓ Aterriza suavemente en la parte anterior de los pies',
                    '✓ Sentadilla completa antes de saltar',
                    '✓ Poder explosivo desde las piernas',
                    '✗ Evita: Aterrizar con rodillas bloqueadas',
                    '✗ Evita: Sentadillas superficiales'
                ]
            },
            muscleGroups: ['Quads', 'Glutes', 'Cardio'],
            source: 'NASM'
        }
    };
    
    function getExerciseSlug(name) {
        return name
            .toLowerCase()
            .normalize('NFD').replace(/\p{Diacritic}/gu, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    function generateExerciseLibrary() {
        const container = document.getElementById('exercise-library');
        let html = '<div class="space-y-4">';
        
        for (const [name, data] of Object.entries(exerciseLibrary)) {
            // Get translated exercise name
            const exerciseName = getExerciseName(name);
            const slug = getExerciseSlug(name);
            
            // Get the correct form and tips based on language
            const formSteps = (typeof data.form === 'object' && data.form[currentLanguage]) 
                ? data.form[currentLanguage] 
                : (Array.isArray(data.form) ? data.form : data.form.en);
                
            const tipsList = (typeof data.tips === 'object' && data.tips[currentLanguage]) 
                ? data.tips[currentLanguage] 
                : (Array.isArray(data.tips) ? data.tips : data.tips.en);
            
            const formTitle = currentLanguage === 'es' ? '📋 FORMA CORRECTA:' : '📋 PROPER FORM:';
            const tipsTitle = currentLanguage === 'es' ? '💡 CONSEJOS PRO:' : '💡 PRO TIPS:';
            const musclesLabel = currentLanguage === 'es' ? 'Músculos:' : 'Muscles:';
            
            html += `
                <div id="exercise-${slug}" class="exercise-card">
                    <div class="exercise-header">
                        <div>
                            <h3>${exerciseName}</h3>
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span class="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">${data.category}</span>
                                <span class="px-3 py-1 bg-metabolic/20 text-metabolic text-xs font-semibold rounded-full">${data.difficulty}</span>
                                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">${data.equipment}</span>
                            </div>
                        </div>
                        <span class="text-xs text-secondary italic">Source: ${data.source}</span>
                    </div>
                    
                    <div class="exercise-content">
                        <div class="exercise-section">
                            <h4 class="section-title">${formTitle}</h4>
                            <ul class="space-y-2">
                                ${formSteps.map((step, i) => `<li class="text-secondary text-sm leading-relaxed">${step}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="exercise-section">
                            <h4 class="section-title">${tipsTitle}</h4>
                            <div class="space-y-2">
                                ${tipsList.map(tip => `<p class="text-secondary text-sm leading-relaxed">${tip}</p>`).join('')}
                            </div>
                            <div class="mt-4 pt-4 border-t border-border">
                                <p class="text-xs text-secondary"><strong>${musclesLabel}</strong> ${data.muscleGroups.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    // --- Date & Schedule Variables ---
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-11
    const day = today.getDate(); // 1-31
    // Current view date for the 'Hoy' section (can preview other dates)
    let currentViewDate = new Date();

    function dateKeyFromDate(d) {
        const y = d.getFullYear();
        const m = d.getMonth() + 1;
        const dd = d.getDate();
        return `${y}-${m}-${dd}`;
    }

    const LOCAL_STORAGE_KEY = 'ftber_progress';
    const ROUTINES_STORAGE_KEY = 'ftber_routines';

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        return weekNo;
    }

    const schedulePattern = ['TORSO_PUSH', 'LEGS_ANKLES', 'CORE_CARDIO', 'TORSO_PULL', 'GLUTES_CORE', 'METABOLIC', 'REST'];
    const monthlySchedule = {};
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    function generateMonthlySchedule() {
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, month, d);
            const dayOfWeek = date.getDay();
            const patternIndex = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;
            monthlySchedule[d] = schedulePattern[patternIndex];
        }
    }
    generateMonthlySchedule();

    // --- Language System ---
    const translations = {
        en: {
            today: 'Today',
            stats: 'Stats',
            calendar: 'Calendar',
            routines: 'Routines',
            library: 'Library',
            todaysWorkout: "Today's Workout",
            getReady: "Get ready to crush your goals 💪",
            weeklyStats: 'Weekly Statistics',
            weeklyCompletion: 'Weekly Completion',
            workoutsDone: 'Workouts Done',
            totalExercises: 'Total Exercises',
            streak: 'Streak',
            daysActive: 'Days active',
            dailyBreakdown: 'Daily Breakdown',
            lastSevenDays: 'Last 7 days',
            thisWeek: 'This week',
            completed: 'Completed',
            exercise: 'Exercise',
            sets: 'Sets',
            reps: 'Reps',
            rest: 'Rest',
            notes: 'Notes',
            done: 'Done',
            edit: 'Edit',
            dailyProgress: 'Daily Progress',
            equipmentNeeded: 'Equipment Needed',
            routineMenu: 'Routine Menu',
            customWorkout: 'Create Custom Workout',
            selectRoutine: 'Select a routine to view',
            editExercise: 'Edit Exercise',
            deleteExercise: 'Delete Exercise',
            save: 'Save',
            cancel: 'Cancel',
            addExercise: 'Add Exercise',
            exerciseLibrary: 'Exercise Library',
            category: 'Category',
            equipment: 'Equipment',
            difficulty: 'Difficulty',
            muscleGroups: 'Muscle Groups',
            formSteps: 'Form Steps',
            proTips: 'Pro Tips',
            dumbbell: 'Dumbbell',
            pilatesBar: 'Pilates Bar',
            band: 'Band',
            kettlebell: 'Kettlebell',
            mat: 'Mat',
            doorAnchor: 'Door Anchor',
            beginner: 'Beginner',
            intermediate: 'Intermediate',
            advanced: 'Advanced',
            chest: 'Chest',
            shoulders: 'Shoulders',
            triceps: 'Triceps',
            back: 'Back',
            biceps: 'Biceps',
            forearms: 'Forearms',
            legs: 'Legs',
            glutes: 'Glutes',
            hamstrings: 'Hamstrings',
            calves: 'Calves',
            core: 'Core',
            push: '💪 Push & Wrists',
            legsAnkles: '🦵 Legs & Ankles',
            coreCardio: '🔥 Core & Cardio',
            pull: '🏋️‍♂️ Pull & Wrists',
            glutesCore: '🍑 Glutes & Core',
            metabolic: '⚡ Metabolic Circuit',
            rest: '😴 Full Rest',
            chestShouldersTricepsStr: 'Chest, shoulders, triceps strength and wrist health.',
            coreCardioStr: 'Core strength, abs definition and cardiovascular conditioning.',
            legsGlutesStr: 'Legs, glutes strength and ankle stability.',
            backBicepsStr: 'Back, biceps strength and wrist health.',
            posteriorChainAbs: 'Strengthening the posterior chain and abdomen.',
            fatBurningCardio: 'Fat burning and cardiovascular endurance. Perform as a circuit.',
            recoveryGrowth: 'Recovery and Growth. Listen to your body!',
            torso: 'Torso',
            notas: 'Notes',
            exerciseLibraryDesc: 'Complete guide to all exercises with proper form and technique',
            changeRoutine: 'Change Routine',
            changeRoutineDesc: 'Select a new routine for this day. You can restore the original routine anytime.'
        },
        es: {
            today: 'Hoy',
            stats: 'Estadísticas',
            calendar: 'Calendario',
            routines: 'Rutinas',
            library: 'Biblioteca',
            todaysWorkout: "Entrenamiento de Hoy",
            getReady: "Prepárate para superar tus metas 💪",
            weeklyStats: 'Estadísticas Semanales',
            weeklyCompletion: 'Completitud Semanal',
            workoutsDone: 'Entrenamientos Realizados',
            totalExercises: 'Ejercicios Totales',
            streak: 'Racha',
            daysActive: 'Días activos',
            dailyBreakdown: 'Desglose Diario',
            lastSevenDays: 'Últimos 7 días',
            thisWeek: 'Esta semana',
            completed: 'Completados',
            exercise: 'Ejercicio',
            sets: 'Series',
            reps: 'Repeticiones',
            rest: 'Descanso',
            notes: 'Notas',
            done: 'Hecho',
            edit: 'Editar',
            dailyProgress: 'Progreso Diario',
            equipmentNeeded: 'Equipamiento Necesario',
            routineMenu: 'Menú de Rutinas',
            customWorkout: 'Crear Entrenamiento Personalizado',
            selectRoutine: 'Selecciona una rutina para ver',
            editExercise: 'Editar Ejercicio',
            deleteExercise: 'Eliminar Ejercicio',
            save: 'Guardar',
            cancel: 'Cancelar',
            addExercise: 'Añadir Ejercicio',
            exerciseLibrary: 'Biblioteca de Ejercicios',
            category: 'Categoría',
            equipment: 'Equipamiento',
            difficulty: 'Dificultad',
            muscleGroups: 'Grupos Musculares',
            formSteps: 'Pasos de Forma',
            proTips: 'Consejos Pro',
            dumbbell: 'Mancernas',
            pilatesBar: 'Barra Pilates',
            band: 'Banda',
            kettlebell: 'Pesa Rusa',
            mat: 'Tapete',
            doorAnchor: 'Ancla de Puerta',
            beginner: 'Principiante',
            intermediate: 'Intermedio',
            advanced: 'Avanzado',
            chest: 'Pecho',
            shoulders: 'Hombros',
            triceps: 'Tríceps',
            back: 'Espalda',
            biceps: 'Bíceps',
            forearms: 'Antebrazos',
            legs: 'Piernas',
            glutes: 'Glúteos',
            hamstrings: 'Isquiotibiales',
            calves: 'Pantorrillas',
            core: 'Core',
            push: '💪 Empuje y Muñecas',
            legsAnkles: '🦵 Piernas y Tobillos',
            coreCardio: '🔥 Core y Cardio',
            pull: '🏋️‍♂️ Tracción y Muñecas',
            glutesCore: '🍑 Glúteos y Core',
            metabolic: '⚡ Circuito Metabólico',
            rest: '😴 Descanso Completo',
            chestShouldersTricepsStr: 'Fuerza de pecho, hombros, tríceps y salud de muñecas.',
            coreCardioStr: 'Fuerza de core, definición abdominal y acondicionamiento cardiovascular.',
            legsGlutesStr: 'Fuerza de piernas, glúteos y estabilidad de tobillos.',
            backBicepsStr: 'Fuerza de espalda, bíceps y salud de muñecas.',
            posteriorChainAbs: 'Fortalecimiento de la cadena posterior y abdomen.',
            fatBurningCardio: 'Quema de grasa y resistencia cardiovascular. Realizar como circuito.',
            recoveryGrowth: '¡Recuperación y Crecimiento. Escucha tu cuerpo!',
            torso: 'Torso',
            notas: 'Notas',
            exerciseLibraryDesc: 'Guía completa de todos los ejercicios con forma y técnica adecuadas',
            changeRoutine: 'Cambiar Rutina',
            changeRoutineDesc: 'Selecciona una nueva rutina para este día. Puedes restaurar la rutina original en cualquier momento.'
        }
    };

    // Lock language to Spanish across the app
    let currentLanguage = 'es';

    function t(key) {
        return translations[currentLanguage]?.[key] || translations.en[key] || key;
    }

    function updateLanguageDisplay() {
        document.documentElement.lang = currentLanguage; // Update the HTML lang attribute
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            el.textContent = t(key);
        });
        document.querySelectorAll('[data-routine-key]').forEach(el => {
            const routineKey = el.getAttribute('data-routine-key');
            const routine = routines[routineKey];
            if (routine && routine.title) {
                const title = typeof routine.title === 'function' ? routine.title() : routine.title;
                el.textContent = title.split(' ').slice(1).join(' '); // Remove emoji
            }
        });
        // No language toggle in Spanish-only mode

        // Re-render dynamic content
        displayTodaysPlan();
        // Ensure progress is restored after re-render
        loadProgress();
        generateCalendar();
        const activeRoutine = document.querySelector('.routine-selector.tab-active');
        if (activeRoutine) {
            routineDetailsContainer.innerHTML = createRoutineHTML(activeRoutine.dataset.routine, false, null);
        }
        
        // Regenerate exercise library if it's the active tab
        const activeTab = document.querySelector('.nav-tab.tab-active');
        if (activeTab && activeTab.dataset.tab === 'biblioteca') {
            generateExerciseLibrary();
        }
    }

    // (Removed) updateLanguageLabels: no longer needed

    // (Removed) switchLanguage: language switching disabled in Spanish-only mode

    // Exercise name translations
    const exerciseNames = {
        'Dumbbell Bench Press': { en: 'Dumbbell Bench Press', es: 'Press de Banco con Mancernas' },
        'Push-ups': { en: 'Push-ups', es: 'Flexiones' },
        'Pilates Bar Shoulder Press': { en: 'Pilates Bar Shoulder Press', es: 'Press de Hombros con Barra Pilates' },
        'Band Flys': { en: 'Band Flys', es: 'Aperturas con Banda' },
        'Dumbbell Lateral Raises': { en: 'Dumbbell Lateral Raises', es: 'Elevaciones Laterales con Mancernas' },
        'Band Lateral Raises': { en: 'Band Lateral Raises', es: 'Elevaciones Laterales con Banda' },
        'Band Triceps Pushdowns': { en: 'Band Triceps Pushdowns', es: 'Fondos de Tríceps con Banda' },
        'Wrist Extension (Palms down)': { en: 'Wrist Extension (Palms down)', es: 'Extensión de Muñeca (Palmas abajo)' },
        'Pilates Bar Squat': { en: 'Pilates Bar Squat', es: 'Sentadilla con Barra Pilates' },
        'Dumbbell Romanian Deadlift': { en: 'Dumbbell Romanian Deadlift', es: 'Peso Muerto Rumano con Mancernas' },
        'Static Lunge (Ankle Focus)': { en: 'Static Lunge (Ankle Focus)', es: 'Estocada Estática (Enfoque en Tobillo)' },
        'Banded Glute Bridge': { en: 'Banded Glute Bridge', es: 'Puente de Glúteos con Banda' },
        'Calf Raises (Ankle Focus)': { en: 'Calf Raises (Ankle Focus)', es: 'Elevaciones de Pantorrilla (Enfoque en Tobillo)' },
        'Pilates Bar Lat Pulldown': { en: 'Pilates Bar Lat Pulldown', es: 'Jalón de Espalda con Barra Pilates' },
        'Dumbbell Bent-Over Row': { en: 'Dumbbell Bent-Over Row', es: 'Remo Inclinado con Mancernas' },
        'Band Face Pulls': { en: 'Band Face Pulls', es: 'Jalones a la Cara con Banda' },
        'Pilates Bar Bicep Curl': { en: 'Pilates Bar Bicep Curl', es: 'Curl de Bíceps con Barra Pilates' },
        'Wrist Flexion (Palms up)': { en: 'Wrist Flexion (Palms up)', es: 'Flexión de Muñeca (Palmas arriba)' },
        'Pull Through': { en: 'Pull Through', es: 'Jalón de Glúteos' },
        'Banded Lateral Walk': { en: 'Banded Lateral Walk', es: 'Caminata Lateral con Banda' },
        'Pilates Bar Russian Twists': { en: 'Pilates Bar Russian Twists', es: 'Giros Rusos con Barra Pilates' },
        'Plank': { en: 'Plank', es: 'Plancha' },
        'Bird-Dog': { en: 'Bird-Dog', es: 'Pájaro-Perro' },
        'Pilates Bar Thrusters': { en: 'Pilates Bar Thrusters', es: 'Thrusters con Barra Pilates' },
        'Fast Band Rows': { en: 'Fast Band Rows', es: 'Remos Rápidos con Banda' },
        'Lunge with Twist': { en: 'Lunge with Twist', es: 'Estocada con Giro' },
        'Jumping Jacks': { en: 'Jumping Jacks', es: 'Saltos de Tijera' }
    };

    function getExerciseName(englishName) {
        if (currentLanguage === 'es' && exerciseNames[englishName]) {
            return exerciseNames[englishName].es;
        }
        return englishName;
    }

    // Exercise descriptions in both languages
    const exerciseDescriptions = {
        'Dumbbell Bench Press': { en: 'Chest base strength', es: 'Fortaleza base del pecho' },
        'Push-ups': { en: 'Calisthenics chest strength. Elevate feet to increase difficulty.', es: 'Fuerza de pecho con calistenia. Eleva los pies para aumentar la dificultad.' },
        'Pilates Bar Shoulder Press': { en: 'Step on the band for resistance', es: 'Párate en la banda para resistencia' },
        'Band Flys': { en: 'Isolate and stretch chest', es: 'Aisla y estira el pecho' },
        'Dumbbell Lateral Raises': { en: 'Shoulder width', es: 'Ancho de hombros' },
        'Band Lateral Raises': { en: 'Shoulder width, use band', es: 'Ancho de hombros, usa banda' },
        'Band Triceps Pushdowns': { en: 'Isolate triceps', es: 'Aísla tríceps' },
        'Wrist Extension (Palms down)': { en: 'Joint health, with pilates bar', es: 'Salud articular, con barra pilates' },
        'Pilates Bar Squat': { en: 'Step on band, bar on back', es: 'Párate en la banda, barra en la espalda' },
        'Dumbbell Romanian Deadlift': { en: 'Focus on hamstrings', es: 'Enfoque en isquiotibiales' },
        'Static Lunge (Ankle Focus)': { en: 'Control ankle stability', es: 'Controla la estabilidad del tobillo' },
        'Banded Glute Bridge': { en: 'Band on knees, push outwards', es: 'Banda en rodillas, empuja hacia afuera' },
        'Calf Raises (Ankle Focus)': { en: 'With pilates bar for resistance', es: 'Con barra pilates para resistencia' },
        'Pilates Bar Lat Pulldown': { en: 'High anchor on door', es: 'Anclaje alto en la puerta' },
        'Dumbbell Bent-Over Row': { en: 'Back strength and density', es: 'Fuerza y densidad de espalda' },
        'Band Face Pulls': { en: 'Shoulder health and posture', es: 'Salud de hombros y postura' },
        'Pilates Bar Bicep Curl': { en: 'Step on band for resistance', es: 'Párate en la banda para resistencia' },
        'Wrist Flexion (Palms up)': { en: 'Joint health, with pilates bar', es: 'Salud articular, con barra pilates' },
        'Pull Through': { en: 'Low anchor, focus on glutes', es: 'Anclaje bajo, enfoque en glúteos' },
        'Banded Lateral Walk': { en: 'Band on knees or ankles', es: 'Banda en rodillas o tobillos' },
        'Pilates Bar Russian Twists': { en: 'Hold the bar, twist the torso', es: 'Sostén la barra, gira el torso' },
        'Plank': { en: 'Keep body straight', es: 'Mantén el cuerpo recto' },
        'Bird-Dog': { en: 'Slow and controlled movement', es: 'Movimiento lento y controlado' },
        'Pilates Bar Thrusters': { en: 'Squat + Shoulder Press', es: 'Sentadilla + Press de Hombros' },
        'Fast Band Rows': { en: 'Fast and steady pace', es: 'Ritmo rápido y constante' },
        'Lunge with Twist': { en: 'With pilates bar', es: 'Con barra pilates' },
        'Jumping Jacks': { en: 'Long rest at the end of the round', es: 'Descanso largo al final de la ronda' },
        'Plank Hold': { en: 'Keep body straight, core activated', es: 'Mantén el cuerpo recto, core activado' },
        'Bicycle Crunches': { en: 'Touch elbow to opposite knee, controlled movement', es: 'Toca codo con rodilla opuesta, movimiento controlado' },
        'Burpees': { en: 'Explosive, maintain good form', es: 'Explosivos, mantén buena forma' },
        'Mountain Climbers': { en: 'Fast but controlled pace', es: 'Ritmo rápido pero controlado' },
        'Russian Twists': { en: 'Use band or pilates bar, twist torso', es: 'Usa banda o pilates bar, gira el torso' },
        'Leg Raises': { en: 'Lower core, straight legs, controlled', es: 'Core bajo, piernas rectas, controlado' },
        'Jump Squats': { en: 'Explosive cardio, land softly', es: 'Cardio explosivo, aterriza suave' }
    };

    function getExerciseDescription(englishName) {
        if (currentLanguage === 'es' && exerciseDescriptions[englishName]) {
            return exerciseDescriptions[englishName].es;
        }
        return exerciseDescriptions[englishName]?.en || '';
    }
    
    // --- DOM Elements ---
    const tabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    const routineDetailsContainer = document.getElementById('routine-details-container');
    const hoyContainer = document.getElementById('hoy');
    const calendarBody = document.getElementById('calendar-body');
    const mainContent = document.getElementById('main-content');

    function openExerciseInfo(exerciseEnglishName) {
        const data = exerciseLibrary[exerciseEnglishName];
        if (!data) return;
        const exerciseName = getExerciseName(exerciseEnglishName);
        const formSteps = (typeof data.form === 'object' && data.form[currentLanguage]) 
            ? data.form[currentLanguage] 
            : (Array.isArray(data.form) ? data.form : data.form.en);
        const tipsList = (typeof data.tips === 'object' && data.tips[currentLanguage]) 
            ? data.tips[currentLanguage] 
            : (Array.isArray(data.tips) ? data.tips : data.tips.en);
        const formTitle = currentLanguage === 'es' ? '📋 FORMA CORRECTA:' : '📋 PROPER FORM:';
        const tipsTitle = currentLanguage === 'es' ? '💡 CONSEJOS PRO:' : '💡 PRO TIPS:';
        const musclesLabel = currentLanguage === 'es' ? 'Músculos:' : 'Muscles:';

        guideTitle.textContent = exerciseName;
        guideContent.innerHTML = `
            <div class="space-y-4">
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">${data.category}</span>
                    <span class="px-3 py-1 bg-metabolic/20 text-metabolic text-xs font-semibold rounded-full">${data.difficulty}</span>
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">${data.equipment}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-lg font-semibold text-primary mb-3">${formTitle}</h4>
                        <ol class="space-y-2">${formSteps.map(s=>`<li class='text-secondary text-sm'>${s}</li>`).join('')}</ol>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-primary mb-3">${tipsTitle}</h4>
                        <div class="space-y-2">${tipsList.map(t=>`<p class='text-secondary text-sm'>${t}</p>`).join('')}</div>
                        <div class="mt-4 pt-4 border-t border-border text-xs text-secondary"><strong>${musclesLabel}</strong> ${data.muscleGroups.join(', ')}</div>
                    </div>
                </div>
            </div>`;
        modal.classList.add('active');
    }

    // --- Notification System (kept for potential future use) ---
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-2xl border transition-all duration-300 transform translate-x-0 ${
            type === 'success' ? 'bg-emerald-600 border-emerald-400 text-white' : 
            type === 'error' ? 'bg-red-600 border-red-400 text-white' : 
            'bg-accent border-accent-hover text-bg-color'
        }`;
        notification.style.animation = 'slideInRight 0.3s ease-out';
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-lg">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
                <span class="font-semibold">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // --- Core Functions ---

    function createRoutineHeaderHTML(routineData, routineKey, isTodayView, date) {
        const isMetabolic = routineKey === 'METABOLIC';
        const isCoreCardio = routineKey === 'CORE_CARDIO';
        const isHighIntensity = isMetabolic || isCoreCardio;
        
        let progressHTML = '';
        if (isTodayView) {
            progressHTML = `
                <div class="mb-6">
                    <h3 class="text-center font-bold text-xl mb-2 text-primary">${t('dailyProgress')}</h3>
                    <div id="progress-text" class="text-center font-bold text-lg text-accent" style="text-shadow: var(--glow-accent);">0%</div>
                    <div id="progress-count" class="text-center text-secondary text-sm mt-1">0 de 0 ejercicios</div>
                    <div class="progress-bar-container mt-3" style="height: 1rem;">
                        <div id="progress-bar" class="progress-bar" style="width: 0%;"></div>
                    </div>
                </div>
            `;
        }

        const routineTitle = typeof routineData.title === 'function' ? routineData.title() : routineData.title;
        const routineDesc = typeof routineData.description === 'function' ? routineData.description() : routineData.description;

        return `<div class="relative bg-card-bg/80 p-4 sm:p-6 rounded-lg shadow-lg border ${isHighIntensity ? 'metabolic-border metabolic-shadow' : 'border-border'}">
                    ${progressHTML}
                    <h2 class="text-2xl font-bold mb-1 text-center ${isHighIntensity ? 'metabolic-text' : 'text-primary'}">${routineTitle}</h2>
                    <p class="text-center text-secondary mb-2">${routineDesc}</p>
                    </div>`;
    }

    function createRoutineTableHTML(exercises, isTodayView, routineKey) {
        const rows = exercises.map((ex, index) => `
            <tr class="border-b border-border last:border-b-0 hover:bg-black/20 transition">
                <td class="p-3 font-medium text-primary">
                    <div class="font-semibold flex items-center gap-2">
                        <span>${getExerciseName(ex.name)}</span>
                        ${isTodayView ? `<button class="exercise-open-library text-[10px] px-1.5 py-0.5 rounded text-secondary/60 hover:text-accent/80 hover:bg-accent/10 transition opacity-70 hover:opacity-100" data-exercise="${ex.name}" title="Ver en biblioteca">📚</button>` : ''}
                    </div>
                    <div class="text-xs text-secondary">${getExerciseDescription(ex.name)}</div>
                </td>
                <td class="p-3 text-center text-secondary">${ex.series}</td>
                <td class="p-3 text-center text-secondary">${ex.reps}</td>
                <td class="p-3 text-center text-secondary">
                    <div class="flex justify-center items-center gap-2">
                        <span class="rest-text">${ex.rest}</span>
                        ${isTodayView ? `<button class="rest-timer-btn text-[10px] px-1.5 py-0.5 rounded text-accent/60 hover:text-accent hover:bg-accent/10 transition opacity-70 hover:opacity-100" data-rest="${ex.rest}" title="Iniciar temporizador">⏱️</button>` : ''}
                        ${isTodayView ? `<span class="rest-countdown text-secondary text-xs"></span>` : ''}
                    </div>
                </td>
                <td class="p-3 text-sm text-secondary">${ex.notes || ''}</td>
                ${isTodayView ? `<td class="p-3 text-center"><input type="checkbox" data-exercise-index="${index}" class="h-5 w-5 rounded bg-card-bg border-border text-accent focus:ring-accent"></td>` : ''}
            </tr>
        `).join('');

        return `<div class="overflow-x-auto"><table class="w-full text-left"><thead class="bg-black/30"><tr><th class="p-3 font-semibold text-sm text-secondary uppercase">${t('exercise')}</th><th class="p-3 font-semibold text-sm text-center text-secondary uppercase">${t('sets')}</th><th class="p-3 font-semibold text-sm text-center text-secondary uppercase">${t('reps')}</th><th class="p-3 font-semibold text-sm text-center text-secondary uppercase">${t('rest')}</th><th class="p-3 font-semibold text-sm text-secondary uppercase">${t('notes')}</th><th class="p-3 font-semibold text-sm text-center text-secondary uppercase">${isTodayView ? t('done') : t('edit')}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    function createRoutineHTML(routineKey, isTodayView, date) {
        const routineData = routines[routineKey];
        if (!routineData || !routineData.details) return '';

        const isMetabolic = routineKey === 'METABOLIC';
        const isCoreCardio = routineKey === 'CORE_CARDIO';
        const isHighIntensity = isMetabolic || isCoreCardio;
        
        const headerHTML = createRoutineHeaderHTML(routineData, routineKey, isTodayView, date);
        const tableHTML = createRoutineTableHTML(routineData.details.exercises, isTodayView, routineKey);
        
        // Get unique equipment needed
        const equipmentSet = new Set();
        routineData.details.exercises.forEach(ex => {
            if (ex.name.includes('Dumbbell')) equipmentSet.add('🏋️ Dumbbells');
            if (ex.name.includes('Pilates Bar')) equipmentSet.add('🎯 Pilates Bar');
            if (ex.name.includes('Band') || ex.name.includes('Banded')) equipmentSet.add('🟰 Resistance Bands');
            if (ex.name.includes('Kettlebell')) equipmentSet.add('🔔 Kettlebell');
            if (ex.name.includes('Plank') || ex.name.includes('Push-up')) equipmentSet.add('🛏️ Mat/Floor');
            if (ex.name.includes('Pull') || ex.name.includes('Lat')) equipmentSet.add('🚪 Door Anchor');
            if (ex.name.includes('Squat')) equipmentSet.add('🏋️ Dumbbells or Bar');
        });
        
        let equipmentHTML = '';
        if (equipmentSet.size > 0 && isTodayView) {
            equipmentHTML = `
                <div class="mt-6 p-4 bg-metabolic/10 border border-metabolic/30 rounded-lg">
                    <h4 class="font-bold text-metabolic mb-3">⚙️ ${t('equipmentNeeded')}</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        ${Array.from(equipmentSet).map(eq => `<div class="flex items-center gap-2 text-sm text-secondary"><span class="text-base">${eq.split(' ')[0]}</span> <span>${eq.split(' ').slice(1).join(' ')}</span></div>`).join('')}
                    </div>
                </div>
            `;
        }
        
        const commonSectionsHTML = `
            <div class="mt-6 p-4 bg-accent/10 text-accent rounded-lg border border-accent/20">
                <h4 class="font-bold">▶️ WARM-UP (10 MIN BEFORE)</h4>
                <p class="text-sm text-secondary">Joint mobility (wrists, ankles, hips), 5 min light cardio (Jumping Jacks, jogging in place), Bodyweight Squats, Cat-Cow.</p>
            </div>
            <div class="mt-4 p-4 bg-metabolic/10 text-metabolic rounded-lg border border-metabolic/20">
                <h4 class="font-bold">⏸️ COOL-DOWN (10 MIN AFTER)</h4>
                <p class="text-sm text-secondary">Gentle stretches for the muscles worked. Check the Yoga tab for specific ideas based on the routine.</p>
            </div>
        `;
        
        return headerHTML + tableHTML + equipmentHTML + commonSectionsHTML + `</div>`;
    }

    async function displayTodaysPlan(dateOverride) {
        const viewDate = dateOverride instanceof Date ? dateOverride : currentViewDate;
        // Determine routine for this date using the fixed pattern
        const dow = viewDate.getDay();
        const patternIndex = (dow === 0) ? 6 : dow - 1;
        const activityKey = schedulePattern[patternIndex];
        const activity = routines[activityKey];
        
        // Error handling: check if activity exists
        if (!activity) {
            console.error(`Activity not found for key: ${activityKey}`);
            const hoyContainer = document.getElementById('hoy');
            hoyContainer.innerHTML = '<div class="p-8 text-center text-secondary">Error loading workout data. Please refresh the page.</div>';
            return;
        }
        
        const todayName = viewDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const dayOfWeekEmoji = ['🌙', '📅', '📅', '📅', '📅', '📅', '📅'][viewDate.getDay()];

        let content = '';
        
        if (activity.details) {
            // Workout day
            content = `<div class="space-y-6">
                    <!-- Header Card -->
                    <div class="relative overflow-hidden bg-gradient-to-r from-card-bg/80 to-card-bg/40 p-8 rounded-2xl shadow-2xl border border-accent/30 backdrop-blur-sm">
                        <div class="absolute -right-20 -top-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
                        <div class="relative z-10">
                            <div class="flex items-center justify-between mb-4">
                                <div class="inline-block px-4 py-2 bg-accent/20 border border-accent rounded-full">
                                    <p class="text-accent text-sm font-semibold uppercase tracking-wider">${todayName}</p>
                                </div>
                                <div class="text-4xl">${dayOfWeekEmoji}</div>
                            </div>
                            <h2 class="text-5xl sm:text-6xl font-bold animated-text-glow mb-2">${t('todaysWorkout')}</h2>
                            <p class="text-secondary text-lg">${t('getReady')}</p>
                        </div>
                    </div>
                    
                    <!-- Main Content -->
                    ${createRoutineHTML(activityKey, true, viewDate)}
                    
                    <!-- Save Progress Button (visible when viewing past/future dates) -->
                    ${!isSameDay(viewDate, new Date()) ? `
                    <div class="flex justify-center mt-6">
                        <button id="save-progress-btn" class="px-8 py-3 bg-accent hover:bg-accent-hover text-bg-color font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
                            💾 Guardar Progreso
                        </button>
                    </div>
                    ` : ''}
                </div>`;
        } else {
            // Rest/Recovery day
            const isRest = activityKey === 'REST';
            const emoji = '🛌';
            const badge = 'Descanso Completo';
            const color = 'emerald';
            
            content = `
                <div class="space-y-6">
                    <!-- Header Card -->
                    <div class="relative overflow-hidden bg-gradient-to-r from-card-bg/80 to-card-bg/40 p-8 rounded-2xl shadow-2xl border border-${color}/30 backdrop-blur-sm">
                        <div class="absolute -right-20 -top-10 w-60 h-60 bg-${color}/10 rounded-full blur-3xl"></div>
                        <div class="relative z-10">
                            <div class="flex items-center justify-between mb-4">
                                <div class="inline-block px-4 py-2 bg-${color}/20 border border-${color} rounded-full">
                                    <p class="text-${color} text-sm font-bold uppercase tracking-widest">${emoji} ${badge}</p>
                                </div>
                                <div class="text-4xl">${emoji}</div>
                            </div>
                            <h2 class="text-5xl sm:text-6xl font-bold animated-text-glow mb-2">${activity.title}</h2>
                            <p class="text-secondary text-lg">${activity.description}</p>
                        </div>
                    </div>
                    
                    <!-- Recovery Info Cards -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-card-bg/80 border border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all">
                            <div class="flex items-start gap-3">
                                <div class="text-2xl">⚡</div>
                                <div>
                                    <p class="text-accent font-bold mb-1">Why Rest Matters</p>
                                    <p class="text-secondary text-sm">Muscle recovery and growth happen during rest. Let your body adapt and rebuild stronger.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-card-bg/80 border border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all">
                            <div class="flex items-start gap-3">
                                <div class="text-2xl">💧</div>
                                <div>
                                    <p class="text-accent font-bold mb-1">Recovery Tips</p>
                                    <p class="text-secondary text-sm">Stay hydrated, eat well, get quality sleep, and listen to your body's signals.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-card-bg/80 border border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all">
                            <div class="flex items-start gap-3">
                                <div class="text-2xl">🧘‍♀️</div>
                                <div>
                                    <p class="text-accent font-bold mb-1">Mobility Work</p>
                                    <p class="text-secondary text-sm">Light stretching, yoga, or foam rolling can enhance recovery and flexibility.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-card-bg/80 border border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all">
                            <div class="flex items-start gap-3">
                                <div class="text-2xl">📊</div>
                                <div>
                                    <p class="text-accent font-bold mb-1">Plan Ahead</p>
                                    <p class="text-secondary text-sm">Check your calendar for tomorrow's workout and prepare mentally and physically.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Motivation Card -->
                    <div class="relative overflow-hidden bg-gradient-to-r from-metabolic/10 to-accent/10 p-8 rounded-2xl shadow-lg border border-accent/20 backdrop-blur-sm">
                        <div class="absolute -left-20 -bottom-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
                        <div class="relative z-10 text-center">
                            <p class="text-lg text-secondary mb-2">Recuerda:</p>
                            <p class="text-2xl font-bold text-accent">Descansar no es flojera, es parte del progreso. 💪</p>
                        </div>
                    </div>
                </div>
            `;
        }
        hoyContainer.innerHTML = content;
        // After rendering, load stored progress to restore checkbox states and update UI
        await loadProgress();
    }

    function getStoredProgress() {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        try {
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error("Error parsing stored progress:", e);
            return {};
        }
    }

    function updateProgressUI() {
        const checkboxes = document.querySelectorAll('#hoy input[type="checkbox"]');
        const total = checkboxes.length;
        if (total === 0) return;

        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        const percentage = Math.round((checked / total) * 100);
        
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const progressCount = document.getElementById('progress-count');

        if (progressBar) progressBar.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage}% Completado`;
        if (progressCount) progressCount.textContent = `${checked} de ${total} ejercicios`;
    }

    async function saveProgress(showConfirmation = false) {
        const checkboxes = document.querySelectorAll('#hoy input[type="checkbox"]');
        if (checkboxes.length === 0) return;

        // Save progress for the currently viewed date
        const currentKey = dateKeyFromDate(currentViewDate);

        const progressState = Array.from(checkboxes).map(cb => cb.checked);
        const allProgress = getStoredProgress();
        allProgress[currentKey] = progressState;

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allProgress));
        console.log(`Progreso guardado para ${currentKey}`);
        
        // Show confirmation if requested
        if (showConfirmation) {
            showSaveConfirmation();
        }
    }
    
    function showSaveConfirmation() {
        const confirmation = document.createElement('div');
        confirmation.id = 'save-confirmation';
        confirmation.className = 'fixed top-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
        confirmation.innerHTML = '✅ Progreso guardado correctamente';
        document.body.appendChild(confirmation);
        
        setTimeout(() => {
            confirmation.classList.add('animate-fade-out');
            setTimeout(() => confirmation.remove(), 300);
        }, 2000);
    }

    // --- Date Utilities ---
    function isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    // --- Confetti Celebration ---
    function launchConfetti() {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const colors = ['#00D0FF', '#9effff', '#FF00FF', '#F0E6FF'];

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 3;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'confetti-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.animationDelay = Math.random() * 0.5 + 's';
                document.body.appendChild(particle);

                setTimeout(() => particle.remove(), 3000);
            }
        }, 50);
    }

    function checkDayCompletion() {
        const checkboxes = document.querySelectorAll('#hoy input[type="checkbox"]');
        if (checkboxes.length === 0) return false;
        
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        
        // Only celebrate once per day
        const celebrationKey = `celebrated_${dateKeyFromDate(currentViewDate)}`;
        const alreadyCelebrated = sessionStorage.getItem(celebrationKey);
        
        if (allChecked && !alreadyCelebrated) {
            sessionStorage.setItem(celebrationKey, 'true');
            launchConfetti();
            showCelebrationMessage();
            return true;
        }
        
        return allChecked;
    }

    function showCelebrationMessage() {
        const messages = [
            '¡Increíble! 🎉 ¡Día completado!',
            '¡Imparable! 💪 ¡Lo lograste!',
            '¡Eres una bestia! 🔥 ¡100% completado!',
            '¡Excelente trabajo! ⭐ ¡Sigue así!',
            '¡Fenomenal! 🚀 ¡Rutina dominada!'
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        const celebration = document.createElement('div');
        celebration.className = 'celebration-message';
        celebration.innerHTML = message;
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.classList.add('fade-out');
            setTimeout(() => celebration.remove(), 500);
        }, 3000);
    }

    // --- Rest Timer Utilities ---
    const restTimerMap = new WeakMap();

    function parseRestToSeconds(restStr) {
        if (!restStr) return 60;
        const s = String(restStr).toLowerCase().trim();
        // Patterns: "60s", "90 s", "1-2 min", "1 min", "2min", "45-60s"
        let seconds = 60;
        const rangeSec = s.match(/(\d+)\s*-\s*(\d+)\s*s/);
        if (rangeSec) {
            const a = parseInt(rangeSec[1], 10), b = parseInt(rangeSec[2], 10);
            if (!isNaN(a) && !isNaN(b)) return Math.round((a + b) / 2);
        }
        const singleSec = s.match(/(\d+)\s*s/);
        if (singleSec) {
            const v = parseInt(singleSec[1], 10);
            if (!isNaN(v)) return v;
        }
        const rangeMin = s.match(/(\d+)\s*-\s*(\d+)\s*m(in)?/);
        if (rangeMin) {
            const a = parseInt(rangeMin[1], 10), b = parseInt(rangeMin[2], 10);
            if (!isNaN(a) && !isNaN(b)) return Math.round(((a + b) / 2) * 60);
        }
        const singleMin = s.match(/(\d+)\s*m(in)?/);
        if (singleMin) {
            const v = parseInt(singleMin[1], 10);
            if (!isNaN(v)) return v * 60;
        }
        return seconds;
    }

    function beep() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.setValueAtTime(880, ctx.currentTime);
            o.connect(g);
            g.connect(ctx.destination);
            g.gain.setValueAtTime(0.001, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
            o.start();
            setTimeout(() => {
                g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
                o.stop(ctx.currentTime + 0.25);
            }, 180);
        } catch (e) {}
    }

    function startOrStopRestTimer(buttonEl) {
        const row = buttonEl.closest('tr');
        if (!row) return;
        const countdownEl = row.querySelector('.rest-countdown');
        if (!countdownEl) return;

        const existing = restTimerMap.get(buttonEl);
        if (existing && existing.interval) {
            clearInterval(existing.interval);
            restTimerMap.delete(buttonEl);
            countdownEl.textContent = '';
            buttonEl.textContent = '⏱️';
            return;
        }

        const restText = buttonEl.dataset.rest || '';
        let remaining = parseRestToSeconds(restText);
        countdownEl.textContent = `${remaining}s`;
        buttonEl.textContent = '⏸️';

        const interval = setInterval(() => {
            remaining -= 1;
            if (remaining <= 0) {
                clearInterval(interval);
                restTimerMap.delete(buttonEl);
                countdownEl.textContent = '¡Listo!';
                buttonEl.textContent = '⏱️';
                if (navigator.vibrate) navigator.vibrate(200);
                beep();
                return;
            }
            countdownEl.textContent = `${remaining}s`;
        }, 1000);

        restTimerMap.set(buttonEl, { interval });
    }

    async function loadProgress() {
        const allProgress = getStoredProgress();
        const todaysProgress = allProgress[dateKeyFromDate(currentViewDate)];

        if (todaysProgress) {
            const checkboxes = document.querySelectorAll('#hoy input[type="checkbox"]');
            checkboxes.forEach((cb, index) => {
                // Only set checked if we have progress data for this index
                if (todaysProgress[index] !== undefined) {
                    cb.checked = todaysProgress[index];
                }
            });
        }
        updateProgressUI();
    }

    async function updateGlobalProgress() {
        const allProgress = getStoredProgress();
        let totalExercisesInMonth = 0;
        let completedExercisesInMonth = 0;

        for (let d = 1; d <= daysInMonth; d++) {
            const routineKey = monthlySchedule[d];
            const routine = routines[routineKey];
            if (routine && routine.details) {
                totalExercisesInMonth += routine.details.exercises.length;

                const progressKey = `${year}-${month + 1}-${d}`;
                const dayProgress = allProgress[progressKey] || [];
                if (dayProgress) {
                    completedExercisesInMonth += dayProgress.filter(Boolean).length;
                }
            }
        }

        const globalPercentage = totalExercisesInMonth > 0 ? Math.round((completedExercisesInMonth / totalExercisesInMonth) * 100) : 0;
        
        const globalProgressBar = document.getElementById('global-progress-bar');
        const globalProgressText = document.getElementById('global-progress-text');

        if (globalProgressBar) globalProgressBar.style.width = `${globalPercentage}%`;
        if (globalProgressText) globalProgressText.textContent = `${globalPercentage}% Completado`;
    }

    function generateCalendar() {
        const monthName = today.toLocaleDateString('es-ES', { month: 'long' });
        if (calendarTitle) {
            calendarTitle.textContent = `Plan de ${monthName} ${year}`;
        }
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const offset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
        const allProgress = getStoredProgress();

        calendarBody.innerHTML = '';
        for (let i = 0; i < offset; i++) {
            calendarBody.innerHTML += `<div class="bg-black/20 rounded-md"></div>`;
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const activityKey = monthlySchedule[d];
            const activity = routines[activityKey];
            const isToday = (d === day);
            const todayClass = isToday ? 'today' : '';
            const isMetabolic = activityKey === 'METABOLIC';
            const isCoreCardio = activityKey === 'CORE_CARDIO';
            const isHighIntensity = isMetabolic || isCoreCardio;
            const isRest = activityKey === 'REST';

            // Calculate progress for this day
            const progressKey = `${year}-${month + 1}-${d}`;
            const dayProgress = allProgress[progressKey] || [];
            let progressPercentage = 0;
            let progressIndicator = '';
            
            if (activity.details && activity.details.exercises) {
                const totalExercises = activity.details.exercises.length;
                const completedExercises = dayProgress.filter(Boolean).length;
                progressPercentage = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
                
                // Progress color indicator
                if (progressPercentage === 100) {
                    progressIndicator = `<div class="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border border-emerald-300 shadow-glow-green" title="Completado"></div>`;
                } else if (progressPercentage > 0) {
                    progressIndicator = `<div class="absolute top-1 right-1 w-3 h-3 rounded-full bg-yellow-500 border border-yellow-300" title="${progressPercentage}% completado"></div>`;
                }
            } else if (isRest) {
                // Mark rest days with a special indicator
                progressIndicator = `<div class="absolute top-1 right-1 text-xs">😴</div>`;
            }

            // Handle title and description as functions
            const activityTitle = typeof activity.title === 'function' ? activity.title() : activity.title;
            const activityDesc = typeof activity.description === 'function' ? activity.description() : activity.description;

            // Progress badge for workout days
            const progressBadge = activity.details && progressPercentage > 0
                ? `<span class="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full ${progressPercentage === 100 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'}">${progressPercentage}% ✓</span>`
                : '';
                
            // Rest day badge
            const restBadge = isRest
                ? `<span class="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Descanso</span>`
                : '';

            let dayCell = `
                <div class="calendar-day bg-card-bg/80 p-2 rounded-md border border-border flex flex-col ${todayClass} relative" data-date="${year}-${month + 1}-${d}">
                    ${progressIndicator}
                    <div class="font-bold text-sm text-primary">${d}</div>
                    <div class="text-xs mt-1 flex-grow">
                        <p class="font-semibold ${isHighIntensity ? 'metabolic-text' : isRest ? 'text-emerald-300' : 'text-accent'}">${activityTitle}</p>
                        <p class="text-secondary hidden sm:block">${activityDesc}</p>
                        ${progressBadge}${restBadge}
                    </div>
                </div>`;
            calendarBody.innerHTML += dayCell;
        }
    }

    function switchTab(tabName) {
        contentSections.forEach(section => section.classList.remove('active'));
        const activeSection = document.getElementById(tabName);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('tab-active');
            }
        });
    }

    // --- Statistics Functions ---
    function calculateWeeklyStats() {
        const allProgress = getStoredProgress();
        const today = new Date();
        let weeklyCompletion = 0;
        let workoutsDone = 0;
        let totalExercises = 0;
        let streak = 0;
        let lastCompletedDate = null;

        // Calculate stats for last 7 days
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const d = date.getDate();
            const m = date.getMonth() + 1;
            const y = date.getFullYear();
            const progressKey = `${y}-${m}-${d}`;
            
            const routineKey = monthlySchedule[d];
            const routine = routines[routineKey];
            
            if (routine && routine.details) {
                const exerciseCount = routine.details.exercises.length;
                totalExercises += exerciseCount;

                const dayProgress = allProgress[progressKey] || [];
                const completedCount = dayProgress.filter(Boolean).length;
                
                if (completedCount > 0) {
                    weeklyCompletion += completedCount;
                    if (completedCount === exerciseCount) {
                        workoutsDone++;
                    }
                }
            }
        }

        // Calculate streak
        let currentDate = new Date();
        for (let i = 0; i < 365; i++) {
            const d = currentDate.getDate();
            const m = currentDate.getMonth() + 1;
            const y = currentDate.getFullYear();
            const progressKey = `${y}-${m}-${d}`;
            
            const routineKey = monthlySchedule[d];
            const routine = routines[routineKey];
            
            if (routine && routine.details) {
                const dayProgress = allProgress[progressKey] || [];
                if (dayProgress.filter(Boolean).length > 0) {
                    streak++;
                } else {
                    break;
                }
            }
            
            currentDate.setDate(currentDate.getDate() - 1);
        }

        const weeklyPercentage = totalExercises > 0 ? Math.round((weeklyCompletion / totalExercises) * 100) : 0;

        return { weeklyPercentage, workoutsDone, totalExercises: weeklyCompletion, streak };
    }



    // --- Exercise Editor Functions ---


    // --- Event Listeners ---
    function addEventListeners() {
        tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));

        // Language toggle removed (Spanish-only mode)

        document.getElementById('rutinas').addEventListener('click', (e) => {
            const button = e.target.closest('.routine-selector');
            if (button) {
                const routineKey = button.dataset.routine;
                routineDetailsContainer.innerHTML = createRoutineHTML(routineKey, false, null);
                if (window.innerWidth < 640) {
                    routineDetailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
        

        
        document.querySelectorAll('.accordion-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('span:last-child');
                const isExpanded = content.style.maxHeight;

                // Close all others
                document.querySelectorAll('.accordion-content').forEach(el => {
                    el.style.maxHeight = null;
                    const otherIcon = el.previousElementSibling.querySelector('span:last-child');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });

                // Open the clicked one if it was closed
                if (!isExpanded) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
        
        hoyContainer.addEventListener('change', (e) => {
            if (e.target.matches('input[type="checkbox"]')) {
                const today = new Date();
                const isToday = isSameDay(currentViewDate, today);
                // Auto-save only for today, manual save for other dates
                if (isToday) {
                    saveProgress();
                    generateCalendar(); // Update calendar colors in real-time
                }
                updateProgressUI();
                updateGlobalProgress(); // Update global progress on change
                updateStatsDashboard(); // Update stats on change
                
                // Check if day is completed and celebrate!
                checkDayCompletion();
            }
        });
        
        // Save Progress Button Click
        hoyContainer.addEventListener('click', (e) => {
            if (e.target.closest('#save-progress-btn')) {
                saveProgress(true); // true = show confirmation
                updateGlobalProgress();
                updateStatsDashboard();
                generateCalendar(); // Update calendar colors
                checkDayCompletion(); // Check for celebration
                return;
            }
        });

        // Exercise info and library navigation from 'Hoy' (existing listener continues)
        hoyContainer.addEventListener('click', (e) => {
            // Skip if clicking save button (already handled above)
            if (e.target.closest('#save-progress-btn')) return;
            
            const infoBtn = e.target.closest('.exercise-info-btn');
            if (infoBtn) {
                const name = infoBtn.dataset.exercise;
                openExerciseInfo(name);
                return;
            }
            const openLibBtn = e.target.closest('.exercise-open-library');
            if (openLibBtn) {
                const name = openLibBtn.dataset.exercise;
                const slug = getExerciseSlug(name);
                switchTab('biblioteca');
                // Ensure library exists and scroll
                const el = document.getElementById(`exercise-${slug}`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                return;
            }
            const restBtn = e.target.closest('.rest-timer-btn');
            if (restBtn) {
                startOrStopRestTimer(restBtn);
            }
        });

        // Calendar day click → preview that date in "Hoy"
        if (calendarBody) {
            calendarBody.addEventListener('click', (e) => {
                const cell = e.target.closest('.calendar-day');
                if (!cell || !cell.dataset.date) return;
                const [y, m, d] = cell.dataset.date.split('-').map(Number);
                currentViewDate = new Date(y, m - 1, d);
                displayTodaysPlan(currentViewDate);
                switchTab('hoy');
                document.getElementById('hoy')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        // Routine changing functionality removed - using fixed pattern only
    }

    // --- Simplified App Start ---
    async function initializeApp() {
        // Add all event listeners
        addEventListeners();
        
        // Render 'Hoy' first so progress can be applied to actual checkboxes
        await displayTodaysPlan();
        generateCalendar();
        updateGlobalProgress();
        
        // Set initial UI state
        switchTab('hoy');
        routineDetailsContainer.innerHTML = createRoutineHTML('TORSO_PUSH', false);
        generateExerciseLibrary();
        
        // Register Service Worker
        if ('serviceWorker' in navigator) {
            const swPath = 'service-worker.js';
            navigator.serviceWorker.register(swPath).catch(err => {
                console.log('Service Worker registration failed:', err);
            });
        }
    }

    // --- App Entry Point ---
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize language display
        updateLanguageDisplay();
        
        initializeApp();
    });
