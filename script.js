// Datos para el cálculo de la estación
const SEASONS = {
    'DEEP_AUTUMN': {
        name: 'Otoño Oscuro / Profundo',
        temp: { warm: 5, cool: 1 },
        value: { light: 0, dark: 6 },
        chroma: { bright: 1, soft: 5 },
        description: 'Tu colorimetría personal está determinada por tonos cálidos y profundos. Los colores otoñales intensos y oscuros realzan tu belleza natural, dándote un aspecto elegante y sofisticado.',
        characteristics: 'Tus características combinan tonalidades cálidas con un alto contraste y profundidad. Los colores que mejor te favorecen son aquellos ricos y terrosos, con una intensidad media-alta y un aspecto aterciopelado.',
        paletteClass: 'deep-autumn-palette'
    },
    'WARM_AUTUMN': {
        name: 'Otoño Cálido',
        temp: { warm: 6, cool: 0 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 3, soft: 3 },
        description: 'Tu colorimetría personal está determinada por tonos cálidos y dorados. Los colores otoñales terrosos y vibrantes realzan tu belleza natural, dándote un aspecto armónico y luminoso.',
        characteristics: 'Tus características combinan calidez y moderación en cuanto a claridad y saturación. Los colores que mejor te favorecen son los dorados, cobrizos y terrosos con una intensidad media.',
        paletteClass: 'warm-autumn-palette'
    },
    'SOFT_AUTUMN': {
        name: 'Otoño Suave',
        temp: { warm: 3, cool: 3 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 0, soft: 6 },
        description: 'Tu colorimetría personal está determinada por tonos cálidos suavizados. Los colores otoñales atenuados y delicados realzan tu belleza natural, dándote un aspecto sutil y armonioso.',
        characteristics: 'Tus características combinan una ligera calidez con un bajo contraste y suavidad. Los colores que mejor te favorecen son los terrosos apagados y suaves, con una intensidad media-baja.',
        paletteClass: 'soft-autumn-palette'
    },
    'WARM_SPRING': {
        name: 'Primavera Cálida',
        temp: { warm: 6, cool: 0 },
        value: { light: 5, dark: 1 },
        chroma: { bright: 5, soft: 1 },
        description: 'Tu colorimetría personal está determinada por tonos cálidos brillantes. Los colores primaverales luminosos y vibrantes realzan tu belleza natural, dándote un aspecto fresco y jovial.',
        characteristics: 'Tus características son predominantemente cálidas, claras y brillantes. Los colores que mejor te favorecen son los amarillos dorados, melocotón y verdes frescos con una intensidad alta.',
        paletteClass: 'warm-spring-palette'
    },
    'CLEAR_SPRING': {
        name: 'Primavera Brillante',
        temp: { warm: 4, cool: 2 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 6, soft: 0 },
        description: 'Tu colorimetría personal está determinada por tonos brillantes y claros. Los colores primaverales vibrantes y luminosos realzan tu belleza natural, dándote un aspecto radiante y dinámico.',
        characteristics: 'Tus características combinan brillo intenso con un equilibrio entre calidez y valor. Los colores que mejor te favorecen son los vivos, puros y llamativos con una intensidad muy alta.',
        paletteClass: 'clear-spring-palette'
    },
    'LIGHT_SPRING': {
        name: 'Primavera Clara',
        temp: { warm: 3, cool: 3 },
        value: { light: 6, dark: 0 },
        chroma: { bright: 3, soft: 3 },
        description: 'Tu colorimetría personal está determinada por tonos claros y luminosos. Los colores primaverales delicados y frescos realzan tu belleza natural, dándote un aspecto etéreo y juvenil.',
        characteristics: 'Tus características son predominantemente claras y ligeras. Los colores que mejor te favorecen son los pasteles suaves pero frescos, con una intensidad media y mucha luminosidad.',
        paletteClass: 'light-spring-palette'
    },
    'CLEAR_WINTER': {
        name: 'Invierno Brillante',
        temp: { warm: 1, cool: 5 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 6, soft: 0 },
        description: 'Tu colorimetría personal está determinada por tonos brillantes y fríos. Los colores invernales vibrantes y nítidos realzan tu belleza natural, dándote un aspecto impactante y sofisticado.',
        characteristics: 'Tus características combinan frialdad con un alto contraste y brillantez. Los colores que mejor te favorecen son los intensos, puros y contrastantes, con una intensidad muy alta.',
        paletteClass: 'clear-winter-palette'
    },
    'COOL_WINTER': {
        name: 'Invierno Frío',
        temp: { warm: 0, cool: 6 },
        value: { light: 2, dark: 4 },
        chroma: { bright: 5, soft: 1 },
        description: 'Tu colorimetría personal está determinada por tonos fríos y nítidos. Los colores invernales intensos y gélidos realzan tu belleza natural, dándote un aspecto elegante y definido.',
        characteristics: 'Tus características son predominantemente frías y contrastantes. Los colores que mejor te favorecen son los azules puros, morados y rojos con subtono azulado, con una intensidad alta.',
        paletteClass: 'cool-winter-palette'
    },
    'DEEP_WINTER': {
        name: 'Invierno Oscuro / Profundo',
        temp: { warm: 2, cool: 4 },
        value: { light: 0, dark: 6 },
        chroma: { bright: 4, soft: 2 },
        description: 'Tu colorimetría personal está determinada por tonos profundos y fríos. Los colores invernales intensos y oscuros realzan tu belleza natural, dándote un aspecto dramático y potente.',
        characteristics: 'Tus características combinan profundidad con un aspecto frío y contrastante. Los colores que mejor te favorecen son los oscuros, intensos y saturados con una intensidad alta.',
        paletteClass: 'deep-winter-palette'
    },
    'COOL_SUMMER': {
        name: 'Verano Frío',
        temp: { warm: 0, cool: 6 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 2, soft: 4 },
        description: 'Tu colorimetría personal está determinada por tonos fríos y suaves. Los colores veraniegos atemperados y frescos realzan tu belleza natural, dándote un aspecto sereno y refinado.',
        characteristics: 'Tus características son predominantemente frías y moderadas. Los colores que mejor te favorecen son los azules suaves, lavandas y rosas fríos con una intensidad media-baja.',
        paletteClass: 'cool-summer-palette'
    },
    'LIGHT_SUMMER': {
        name: 'Verano Claro',
        temp: { warm: 1, cool: 5 },
        value: { light: 6, dark: 0 },
        chroma: { bright: 3, soft: 3 },
        description: 'Tu colorimetría personal está determinada por tonos claros y fríos. Los colores veraniegos luminosos y delicados realzan tu belleza natural, dándote un aspecto fresco y ligero.',
        characteristics: 'Tus características combinan claridad con un aspecto fresco y suave. Los colores que mejor te favorecen son los pasteles fríos, con una intensidad media y mucha luminosidad.',
        paletteClass: 'light-summer-palette'
    },
    'SOFT_SUMMER': {
        name: 'Verano Suave',
        temp: { warm: 2, cool: 4 },
        value: { light: 3, dark: 3 },
        chroma: { bright: 0, soft: 6 },
        description: 'Tu colorimetría personal está determinada por tonos suaves y ligeramente fríos. Los colores veraniegos atenuados y delicados realzan tu belleza natural, dándote un aspecto sutil y armonioso.',
        characteristics: 'Tus características combinan suavidad con un ligero aspecto frío. Los colores que mejor te favorecen son los apagados y atemperados con una intensidad baja y aspecto polvoriento.',
        paletteClass: 'soft-summer-palette'
    }
};

// Variables para almacenar los resultados del usuario
let userScores = {
    skin: {
        temperature: { warm: 0, cool: 0 },
        value: { light: 0, dark: 0 },
        chroma: { bright: 0, soft: 0 }
    },
    hair: {
        temperature: { warm: 0, cool: 0 },
        value: { light: 0, dark: 0 },
        chroma: { bright: 0, soft: 0 }
    },
    eyes: {
        temperature: { warm: 0, cool: 0 },
        value: { light: 0, dark: 0 },
        chroma: { bright: 0, soft: 0 }
    },
    total: {
        temperature: { warm: 0, cool: 0 },
        value: { light: 0, dark: 0 },
        chroma: { bright: 0, soft: 0 }
    }
};

// Pesos de cada característica
const WEIGHTS = {
    skin: 3,
    hair: 2,
    eyes: 1
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});

// Inicializar la calculadora
function initializeCalculator() {
    // Botones de navegación
    setupNavigationButtons();
    
    // Configurar opciones de selección
    setupOptionSelectors();
    
    // Botón de cálculo
    document.querySelector('.calculate-btn').addEventListener('click', calculateResults);
    
    // Botón de reinicio
    document.querySelector('.restart-btn').addEventListener('click', resetCalculator);
}

// Configurar botones de navegación
function setupNavigationButtons() {
    // Botón de inicio
    document.getElementById('start-btn').addEventListener('click', function() {
        navigateToSection('skin-section');
    });
    
    // Botones de navegación (siguiente y atrás)
    document.querySelectorAll('.next-btn, .back-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-goto');
            navigateToSection(targetSection);
        });
    });
}

// Navegar a una sección específica
function navigateToSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección deseada
    document.getElementById(sectionId).classList.add('active');
    
    // Scroll al inicio de la sección
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Configurar selectores de opciones
function setupOptionSelectors() {
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const feature = this.getAttribute('data-feature');
            const type = this.getAttribute('data-type');
            const value = parseInt(this.getAttribute('data-value'));
            
            // Deseleccionar otras opciones en la misma categoría y característica
            document.querySelectorAll(`.option[data-category="${category}"][data-feature="${feature}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Seleccionar esta opción
            this.classList.add('selected');
            
            // Actualizar puntuación
            updateScore(category, feature, type, value);
        });
    });
}

// Actualizar puntuación de una característica
function updateScore(category, feature, type, value) {
    // Resetear los valores para esta característica
    if (type === 'warm') {
        userScores[category][feature].warm = value;
        userScores[category][feature].cool = 0;
    } else if (type === 'cool') {
        userScores[category][feature].cool = value;
        userScores[category][feature].warm = 0;
    } else if (type === 'light') {
        userScores[category][feature].light = value;
        userScores[category][feature].dark = 0;
    } else if (type === 'dark') {
        userScores[category][feature].dark = value;
        userScores[category][feature].light = 0;
    } else if (type === 'bright') {
        userScores[category][feature].bright = value;
        userScores[category][feature].soft = 0;
    } else if (type === 'soft') {
        userScores[category][feature].soft = value;
        userScores[category][feature].bright = 0;
    }
    
    // Comprobar si podemos habilitar el botón siguiente
    checkSectionCompletion(category);
}

// Verificar si todas las características de una sección están completas
function checkSectionCompletion(category) {
    const requiredFeatures = ['temperature', 'value', 'chroma'];
    let allCompleted = true;
    
    for (const feature of requiredFeatures) {
        const featureValues = userScores[category][feature];
        const isCompleted = Object.values(featureValues).some(val => val > 0);
        
        if (!isCompleted) {
            allCompleted = false;
            break;
        }
    }
    
    // Si estamos en la sección de ojos, habilitamos el botón de cálculo
    if (category === 'eyes') {
        const calculateBtn = document.querySelector('.calculate-btn');
        if (allCompleted) {
            calculateBtn.removeAttribute('disabled');
            calculateBtn.classList.add('active');
        } else {
            calculateBtn.setAttribute('disabled', 'true');
            calculateBtn.classList.remove('active');
        }
    }
}

// Calcular los resultados finales
function calculateResults() {
    // Calcular puntuaciones totales según los pesos
    calculateTotalScores();
    
    // Determinar la estación según las puntuaciones
    const season = determineColorSeason();
    
    // Mostrar resultados
    displayResults(season);
    
    // Navegar a la sección de resultados
    navigateToSection('results-section');
}

// Calcular las puntuaciones totales
function calculateTotalScores() {
    // Resetear totales
    userScores.total = {
        temperature: { warm: 0, cool: 0 },
        value: { light: 0, dark: 0 },
        chroma: { bright: 0, soft: 0 }
    };
    
    // Sumar las puntuaciones con sus pesos
    for (const category in WEIGHTS) {
        const weight = WEIGHTS[category];
        
        for (const feature in userScores[category]) {
            for (const type in userScores[category][feature]) {
                userScores.total[feature][type] += userScores[category][feature][type] * weight;
            }
        }
    }
    
    // Registro de resultados para diagnóstico
    console.log('Puntuaciones calculadas:', userScores.total);
}

// Determinar la estación colorimétrica
function determineColorSeason() {
    // Primero determinamos qué valor es más alto en cada característica
    const dominantTemp = userScores.total.temperature.warm > userScores.total.temperature.cool ? 'warm' : 'cool';
    const dominantValue = userScores.total.value.light > userScores.total.value.dark ? 'light' : 'dark';
    const dominantChroma = userScores.total.chroma.bright > userScores.total.chroma.soft ? 'bright' : 'soft';
    
    // Valores para la comparación
    const tempValues = {
        warm: userScores.total.temperature.warm,
        cool: userScores.total.temperature.cool
    };
    
    const valueValues = {
        light: userScores.total.value.light,
        dark: userScores.total.value.dark
    };
    
    const chromaValues = {
        bright: userScores.total.chroma.bright,
        soft: userScores.total.chroma.soft
    };
    
    // Encontrar la estación más cercana
    let bestMatch = null;
    let minDifference = Infinity;
    
    for (const seasonKey in SEASONS) {
        const season = SEASONS[seasonKey];
        
        // Calcular la diferencia entre los resultados del usuario y esta estación
        let difference = 0;
        
        // Temperatura
        difference += Math.abs(season.temp.warm - tempValues.warm);
        difference += Math.abs(season.temp.cool - tempValues.cool);
        
        // Valor
        difference += Math.abs(season.value.light - valueValues.light);
        difference += Math.abs(season.value.dark - valueValues.dark);
        
        // Croma
        difference += Math.abs(season.chroma.bright - chromaValues.bright);
        difference += Math.abs(season.chroma.soft - chromaValues.soft);
        
        // Guardar la mejor coincidencia
        if (difference < minDifference) {
            minDifference = difference;
            bestMatch = seasonKey;
        }
    }
    
    console.log('Mejor coincidencia:', bestMatch, 'con diferencia:', minDifference);
    return bestMatch;
}

// Mostrar los resultados
function displayResults(seasonKey) {
    const season = SEASONS[seasonKey];
    
    // Mostrar el nombre de la estación
    document.getElementById('season-name').textContent = season.name;
    
    // Mostrar la descripción
    document.getElementById('season-description').textContent = season.description;
    
    // Mostrar las características
    document.getElementById('season-characteristics').textContent = season.characteristics;
    
    // Obtener el elemento de la imagen
    const paletteImage = document.getElementById('palette-image');
    
    // Mapa para convertir las claves de estaciones a nombres de archivo
    const seasonImageMap = {
        'LIGHT_SUMMER': 'verano-claro.jpg',
        'SOFT_SUMMER': 'verano-suave.jpg',
        'COOL_SUMMER': 'verano-frio.jpg',
        'CLEAR_WINTER': 'invierno-claro.jpg',
        'COOL_WINTER': 'invierno-frio.jpg',
        'DEEP_WINTER': 'invierno-oscuro.jpg',
        'WARM_AUTUMN': 'otono-calido.jpg',
        'DEEP_AUTUMN': 'otono-oscuro.jpg',
        'SOFT_AUTUMN': 'otono-suave.jpg',
        'CLEAR_SPRING': 'primavera-brillante.jpg',
        'WARM_SPRING': 'primavera-calida.jpg',
        'LIGHT_SPRING': 'primavera-clara.jpg'
    };
    
    // Establecer la ruta de la imagen
    const imagePath = `images/${seasonImageMap[seasonKey]}`;
    
    // Actualizar el elemento de imagen
    paletteImage.src = imagePath;
    paletteImage.alt = `Paleta de colores para ${season.name}`;
    
    // Asegurarnos de que el elemento sea un img en lugar de un div
    paletteImage.removeAttribute('class');
}


// Configurar las paletas de colores (temporalmente con CSS)


// Reiniciar la calculadora
function resetCalculator() {
    // Reiniciar las puntuaciones
    userScores = {
        skin: {
            temperature: { warm: 0, cool: 0 },
            value: { light: 0, dark: 0 },
            chroma: { bright: 0, soft: 0 }
        },
        hair: {
            temperature: { warm: 0, cool: 0 },
            value: { light: 0, dark: 0 },
            chroma: { bright: 0, soft: 0 }
        },
        eyes: {
            temperature: { warm: 0, cool: 0 },
            value: { light: 0, dark: 0 },
            chroma: { bright: 0, soft: 0 }
        },
        total: {
            temperature: { warm: 0, cool: 0 },
            value: { light: 0, dark: 0 },
            chroma: { bright: 0, soft: 0 }
        }
    };
    
    // Deseleccionar todas las opciones
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Volver a la pantalla de inicio
    navigateToSection('intro');
}
