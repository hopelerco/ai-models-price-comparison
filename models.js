/**
 * models.js - Base de datos centralizada de modelos de IA
 * Proyecto: Comparador de Costos Hopeler (Gemini vs Claude vs OpenAI)
 */

const PROVIDER_BADGES = {
    Google: {
        label: "Google",
        badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
        chartGradient: "from-blue-400 to-indigo-500",
        chartBadge: "bg-blue-100 text-blue-800"
    },
    Anthropic: {
        label: "Anthropic",
        badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
        chartGradient: "from-amber-400 to-orange-500",
        chartBadge: "bg-orange-100 text-orange-800"
    },
    OpenAI: {
        label: "OpenAI",
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
        chartGradient: "from-emerald-400 to-teal-500",
        chartBadge: "bg-emerald-100 text-emerald-800"
    }
};

const MODELS_DATA = [
    // --- Anthropic ---
    {
        id: "claude-fable-5",
        name: "Claude Fable 5",
        provider: "Anthropic",
        rates: {
            input: 10.00,
            output: 50.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 161.5,
            generalCi: [158.9, 164.7],
            swe: 162.5,
            sweCi: [159.4, 166.9],
            math: 162.3,
            mathCi: [159.2, 166.0]
        },
        useCase: "Razonamiento especulativo avanzado, diseño de arquitectura de sistemas complejos y decisiones de diseño crítico a gran escala."
    },
    {
        id: "claude-opus-5",
        name: "Claude Opus 5",
        provider: "Anthropic",
        rates: {
            input: 5.00,
            output: 25.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 161.0,
            generalCi: [158.7, 164.2],
            swe: 161.6,
            sweCi: [158.9, 165.5],
            math: 160.8,
            mathCi: [158.2, 163.8]
        },
        useCase: "Nuevo modelo insignia para razonamiento de nivel experto, depuración profunda de microservicios y generación de código crítico multi-archivo."
    },
    {
        id: "claude-opus-4.8",
        name: "Claude Opus 4.8",
        provider: "Anthropic",
        rates: {
            input: 5.00,
            output: 25.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 157.9,
            generalCi: [155.8, 160.2],
            swe: 159.1,
            sweCi: [156.6, 162.4],
            math: 158.5,
            mathCi: [156.2, 161.2]
        },
        useCase: "Generación Opus previa de alta potencia para análisis profundo de código, lógica compleja y refactorizaciones críticas."
    },
    {
        id: "claude-sonnet-5",
        name: "Claude Sonnet 5",
        provider: "Anthropic",
        rates: {
            input: 3.00,
            output: 15.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 155.5,
            generalCi: [153.0, 157.6],
            swe: 155.7,
            sweCi: [152.9, 158.1],
            math: 156.0,
            mathCi: [152.9, 159.4]
        },
        useCase: "Estándar líder de la industria para desarrollo. Excelente equilibrio en refactorización profunda, pruebas unitarias y auto-completado."
    },
    {
        id: "claude-sonnet",
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        rates: {
            input: 3.00,
            output: 15.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 152.4,
            generalCi: [149.9, 154.3],
            swe: 151.3,
            sweCi: [149.3, 153.4],
            math: 152.3,
            mathCi: [149.0, 155.5]
        },
        useCase: "El estándar de la industria en desarrollo. Excelente equilibrio en refactorización profunda, pruebas unitarias y auto-completado."
    },
    {
        id: "claude-haiku",
        name: "Claude Haiku 4.5",
        provider: "Anthropic",
        rates: {
            input: 1.00,
            output: 5.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 142.8,
            generalCi: [139.9, 144.5],
            swe: 145.3,
            sweCi: [142.6, 148.0],
            math: 141.5,
            mathCi: [139.5, 144.4]
        },
        useCase: "Extrema velocidad. Perfecto para pre-linter, análisis de sintaxis rápidos, generación de documentación en línea o CI/CD."
    },

    // --- OpenAI ---
    {
        id: "gpt-5.6-sol",
        name: "GPT-5.6 Sol",
        provider: "OpenAI",
        rates: {
            input: 5.00,
            output: 30.00,
            contextLimit: 272000,
            contextPenalty: {
                type: "multiplier",
                inputMultiplier: 2,
                outputMultiplier: 1.5
            }
        },
        eci: {
            general: 161.7,
            generalCi: [159.1, 164.8],
            swe: 161.3,
            sweCi: [158.5, 164.9],
            math: 161.8,
            mathCi: [159.0, 165.4]
        },
        useCase: "Flagship de frontera con razonamiento superior y ejecución de agentes autónomos multinivel en entornos complejos de Codex."
    },
    {
        id: "gpt-5.5",
        name: "GPT-5.5",
        provider: "OpenAI",
        rates: {
            input: 5.00,
            output: 30.00,
            contextLimit: 272000,
            contextPenalty: {
                type: "multiplier",
                inputMultiplier: 2,
                outputMultiplier: 1.5
            }
        },
        eci: {
            general: 159.2,
            generalCi: [156.8, 162.0],
            swe: 160.1,
            sweCi: [157.3, 164.2],
            math: 158.6,
            mathCi: [155.7, 162.3]
        },
        useCase: "Razonamiento pionero de frontera y ejecución de agentes multinivel de alto rendimiento en entornos complejos de Codex."
    },
    {
        id: "gpt-5.6-terra",
        name: "GPT-5.6 Terra (Mini)",
        provider: "OpenAI",
        rates: {
            input: 2.00,
            output: 12.00,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 159.0,
            generalCi: [156.5, 161.6],
            swe: 159.5,
            sweCi: [156.8, 162.4],
            math: 160.0,
            mathCi: [157.7, 162.9]
        },
        useCase: "Asistente intermedio eficiente para lógica de subagentes, refactorización ágil y tareas cotidianas de ingeniería de software."
    },
    {
        id: "gpt-5.6-luna",
        name: "GPT-5.6 Luna (Nano)",
        provider: "OpenAI",
        rates: {
            input: 0.20,
            output: 1.20,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 156.1,
            generalCi: [153.9, 158.3],
            swe: 156.5,
            sweCi: [151.5, 159.4],
            math: 157.9,
            mathCi: [155.7, 160.5]
        },
        useCase: "Micro-asistente ultra económico para pipelines continuos de CI/CD, formateo estructurado y procesamiento masivo de datos."
    },

    // --- Google Gemini ---
    {
        id: "gemini-3.1-pro",
        name: "Gemini 3.1 Pro",
        provider: "Google",
        rates: {
            input: 2.00,
            output: 12.00,
            contextLimit: 200000,
            contextPenalty: {
                type: "fixed",
                inputRate: 4.00,
                outputRate: 18.00
            }
        },
        eci: {
            general: 154.8,
            generalCi: [152.6, 157.1],
            swe: 152.2,
            sweCi: [148.1, 156.7],
            math: 152.8,
            mathCi: [151.3, 154.4]
        },
        useCase: "Increíble ventana de contexto masiva. Ideal para digerir repositorios gigantescos completos o documentación técnica masiva."
    },
    {
        id: "gemini-3.8-flash",
        name: "Gemini 3.8 Flash",
        provider: "Google",
        rates: {
            input: 1.50,
            output: 7.50,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: null,
            generalCi: null,
            swe: null,
            sweCi: null,
            math: null,
            mathCi: null
        },
        useCase: "Inteligencia multimodal de alta velocidad y token-eficiente para bucles agénticos paralelos y generación de código en tiempo real."
    },
    {
        id: "gemini-3.7-flash",
        name: "Gemini 3.7 Flash",
        provider: "Google",
        rates: {
            input: 1.50,
            output: 7.50,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 157.3,
            generalCi: [155.3, 159.9],
            swe: 159.0,
            sweCi: [156.7, 161.6],
            math: 156.3,
            mathCi: [154.3, 158.3]
        },
        useCase: "Balancear velocidad de respuesta, ventana de contexto masiva (1M de tokens) y bajo coste por token frente a modelos más pesados."
    },
    {
        id: "gemini-2.5-pro",
        name: "Gemini 2.5 Pro (Jun 2025)",
        provider: "Google",
        rates: {
            input: 1.25,
            output: 10.00,
            contextLimit: 200000,
            contextPenalty: {
                type: "fixed",
                inputRate: 2.50,
                outputRate: 15.00
            }
        },
        eci: {
            general: 145.8,
            generalCi: [144.1, 147.4],
            swe: 145.2,
            sweCi: [142.2, 147.1],
            math: 144.6,
            mathCi: [141.5, 146.1]
        },
        useCase: "Excelente alternativa rentable de alta complejidad. Muy bueno para automatización compleja de scripts y DevOps."
    },
    {
        id: "gemini-3.5-flash-lite",
        name: "Gemini 3.5 Flash-Lite",
        provider: "Google",
        rates: {
            input: 0.30,
            output: 2.50,
            contextLimit: null,
            contextPenalty: null
        },
        eci: {
            general: 145.1,
            generalCi: [142.5, 146.7],
            swe: null,
            sweCi: null,
            math: 144.3,
            mathCi: [142.4, 145.8]
        },
        useCase: "Ultra costo-eficiente para automatizaciones a gran escala, clasificación de prompts, linting rápido y micro-servicios."
    }
];

/**
 * Calcula el costo simulado y tarifas efectivas para un modelo dado el volumen de tokens.
 * @param {Object} model Objeto del modelo dentro de MODELS_DATA
 * @param {number} inputTokens Cantidad de tokens de entrada
 * @param {number} outputTokens Cantidad de tokens de salida
 * @returns {Object} { effectiveInputRate, effectiveOutputRate, hasPenalty, inputCost, outputCost, totalCost }
 */
function calculateModelCost(model, inputTokens, outputTokens) {
    let effectiveInputRate = model.rates.input;
    let effectiveOutputRate = model.rates.output;
    let hasPenalty = false;

    if (model.rates.contextLimit && inputTokens > model.rates.contextLimit) {
        hasPenalty = true;
        const penalty = model.rates.contextPenalty;
        if (penalty) {
            if (penalty.type === "multiplier") {
                effectiveInputRate = model.rates.input * (penalty.inputMultiplier || 1);
                effectiveOutputRate = model.rates.output * (penalty.outputMultiplier || 1);
            } else if (penalty.type === "fixed") {
                effectiveInputRate = penalty.inputRate;
                effectiveOutputRate = penalty.outputRate;
            }
        }
    }

    const inputCost = (inputTokens / 1000000) * effectiveInputRate;
    const outputCost = (outputTokens / 1000000) * effectiveOutputRate;
    const totalCost = inputCost + outputCost;

    return {
        effectiveInputRate,
        effectiveOutputRate,
        hasPenalty,
        inputCost,
        outputCost,
        totalCost
    };
}

/**
 * Calcula el ratio de $/Punto ECI (tarifa salida / puntaje general)
 * @param {Object} model 
 * @returns {number|null}
 */
function calculateCostPerEciPoint(model) {
    if (!model.eci || typeof model.eci.general !== "number" || model.eci.general <= 0) {
        return null;
    }
    return model.rates.output / model.eci.general;
}

// Exportación condicional para compatibilidad con entornos Node.js / pruebas
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        PROVIDER_BADGES,
        MODELS_DATA,
        calculateModelCost,
        calculateCostPerEciPoint
    };
}
