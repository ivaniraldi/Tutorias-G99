const fs = require("fs")

const listaIA = [
  {
    nombre: "Google AI",
    descripcion: "Conjunto de herramientas y servicios de IA de Google, que incluyen TensorFlow, PyTorch y AutoML.",
    enlace: "https://ai.google/",
  },
  {
    nombre: "Amazon Web Services (AWS) AI",
    descripcion:
      "Plataforma de IA en la nube de Amazon, que ofrece servicios como Amazon Rekognition, Amazon Polly y Amazon SageMaker.",
    enlace: "https://aws.amazon.com/machine-learning/ai-services/",
  },
  {
    nombre: "Microsoft Azure AI",
    descripcion:
      "Suite de IA de Microsoft, que incluye Azure Cognitive Services, Azure Machine Learning y Azure Bot Framework.",
    enlace: "https://azure.microsoft.com/en-us/solutions/ai",
  },
  {
    nombre: "IBM Watson",
    descripcion:
      "Plataforma de IA de IBM que ofrece capacidades de procesamiento del lenguaje natural, aprendizaje automático y análisis de datos.",
    enlace: "https://www.ibm.com/watson",
  },
  {
    nombre: "OpenAI",
    descripcion: "Laboratorio de investigación sin fines de lucro que desarrolla tecnologías de IA de código abierto.",
    enlace: "https://openai.com/",
  },
  {
    nombre: "Salesforce Einstein",
    descripcion:
      "Plataforma de IA integrada en Salesforce CRM que ofrece análisis predictivo, automatización de tareas y chatbots.",
    enlace: "https://www.salesforce.com/news/press-releases/2023/09/12/salesforce-platform-news-dreamforce/",
  },
  {
    nombre: "DeepMind",
    descripcion:
      "Empresa de investigación de IA propiedad de Alphabet (Google) que desarrolla inteligencia artificial general.",
    enlace: "https://deepmind.google/",
  },
  {
    nombre: "UiPath",
    descripcion:
      "Plataforma de automatización robótica de procesos (RPA) que utiliza IA para automatizar tareas repetitivas.",
    enlace: "https://www.uipath.com/",
  },
  {
    nombre: "KoruAI",
    descripcion: "Plataforma de IA conversacional que permite a las empresas crear chatbots y asistentes virtuales.",
    enlace: "http://koruai.com/",
  },
  {
    nombre: "Indico",
    descripcion:
      "Plataforma de análisis de datos que utiliza IA para extraer información de documentos, imágenes y videos.",
    enlace: "https://indicodata.ai/",
  }
];

const listaEnJSON = JSON.stringify(listaIA, null, 2) // esto es para que nuestros archivos JSON queden ordenados 
fs.writeFileSync("listaIA.json", listaEnJSON)
const ias = fs.readFileSync("listaIA.json", "utf8")

console.log(JSON.parse(ias))