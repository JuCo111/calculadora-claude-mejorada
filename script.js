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
    
    // Mostrar la paleta de colores
    const paletteImage = document.getElementById('palette-image');
    paletteImage.className = 'palette-image';
    paletteImage.classList.add(season.paletteClass);
    
    // Por ahora, como placeholder, usaremos clases CSS para las paletas
    // En una implementación final, se sustituirían por imágenes reales
    // De momento haremos una representación simple con CSS
    setupPalettes();
}

// Configurar las paletas de colores (temporalmente con CSS)
function setupPalettes() {
    // Estilos para las paletas temporales
    const style = document.createElement('style');
    style.textContent = `
        .deep-autumn-palette {
            background: linear-gradient(to right,
                #5B3A29 0%, #723F28 10%, #9B4522 20%, #B36A3F 30%, #C87A53 40%,
                #D18A44 50%, #BF873B 60%, #A67E52 70%, #7A5230 80%, #5D4027 90%, #3B2918 100%);
        }
        .warm-autumn-palette {
            background: linear-gradient(to right,
                #9B6A3F 0%, #BB8E51 10%, #D9A760 20%, #E5B87C 30%, #EFC26E 40%,
                #B1753A 50%, #A34E21 60%, #85461D 70%, #6D3B27 80%, #5E3020 90%, #472113 100%);
        }
        .soft-autumn-palette {
            background: linear-gradient(to right,
                #B89E83 0%, #C9AB8C 10%, #D4B59A 20%, #D9BFA8 30%, #E0CCBA 40%,
                #BD9D7E 50%, #A68268 60%, #8C6D55 70%, #766055 80%, #614D41 90%, #4E3D32 100%);
        }
        .warm-spring-palette {
            background: linear-gradient(to right,
                #FFF0AA 0%, #FFE57A 10%, #FFC14A 20%, #FF9D55 30%, #FF8A5C 40%,
                #FF7048 50%, #E6C646 60%, #C8D900 70%, #8FB03F 80%, #57A639 90%, #2E8B33 100%);
        }
        .clear-spring-palette {
            background: linear-gradient(to right,
                #FFEB6B 0%, #FFD54F 10%, #FF8E3C 20%, #FF7043 30%, #FF5D62 40%,
                #FF5A98 50%, #DA3287 60%, #8ED8F8 70%, #1E88E5 80%, #6BD46F 90%, #4CAF50 100%);
        }
        .light-spring-palette {
            background: linear-gradient(to right,
                #FFF5BA 0%, #FFE79E 10%, #FFD485 20%, #FFC286 30%, #FFB59B 40%,
                #FFB5B8 50%, #FFB6C1 60%, #D4E7C5 70%, #A5DBB2 80%, #7ACCBE 90%, #89C3EB 100%);
        }
        .clear-winter-palette {
            background: linear-gradient(to right,
                #FFFFFF 0%, #E2E2E2 10%, #C8C8C8 20%, #5E5E5E 30%, #2C2C2C 40%,
                #000000 50%, #0A3A7D 60%, #C90016 70%, #E91E63 80%, #4A26AB 90%, #03A9F4 100%);
        }
        .cool-winter-palette {
            background: linear-gradient(to right,
                #FCFEFF 0%, #DBE9F4 10%, #B8D5ED 20%, #60A1D9 30%, #2570B5 40%,
                #0E4485 50%, #9E0D38 60%, #DA1C5C 70%, #991B4A 80%, #6B0E38 90%, #4A0D3A 100%);
        }
        .deep-winter-palette {
            background: linear-gradient(to right,
                #07004D 0%, #2E1A4A 10%, #4C1C48 20%, #641537 30%, #77102D 40%,
                #A10A26 50%, #1F2A5A 60%, #103667 70%, #0A4D68 80%, #223F4A 90%, #1D2A35 100%);
        }
        .cool-summer-palette {
            background: linear-gradient(to right,
                #E6F5F9 0%, #BDD9E5 10%, #A1C6D7 20%, #5E92AA 30%, #4E7A8A 40%,
                #30596D 50%, #CDB3BC 60%, #AA7C8D 70%, #965D76 80%, #81495E 90%, #6B3D4E 100%);
        }
        .light-summer-palette {
            background: linear-gradient(to right,
                #F0F6FB 0%, #D9E8F5 10%, #C6DBEF 20%, #BFD1E5 30%, #A8C4E2 40%,
                #95ADC9 50%, #BFC9DD 60%, #C6B2C2 70%, #D7BFC9 80%, #EED0D7 90%, #FADBE0 100%);
        }
        .soft-summer-palette {
            background: linear-gradient(to right,
                #D6DCE5 0%, #C6CED9 10%, #A8B2BB 20%, #8A979E 30%, #717A85 40%,
                #59636E 50%, #A29997 60%, #A38E8A 70%, #947D78 80%, #7E6B65 90%, #6A5A53 100%);
        }
    `;
    document.head.appendChild(style);
}

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