
export interface Trabajos {
    id:number
    titulus: string
    imago: string
    imago2: string
    imago3: string
    imago4: string
    imago5: string
    descripcione: string
    date: string
    cliente: string
    creditos: string
    
}

export const trabajos: Trabajos[] = [
    {
    id: 0,
    titulus: 'Diseño tipográfico',
    imago: 'Tipografia/O.jpg',
    imago2:'Tipografia/Z.jpg',
    imago3:'Tipografia/X.jpg',
    imago5: '',
    imago4: '',
    descripcione:'Proyecto de creación de tipografías para el desafío de 36 days of Type. El objetivo de este proyecto fue jugar con la expresividad de la tipografía mediante la forma, el color, el acabado y la composición. Inspiradas en las siluetas, colores y texturas gráficas de unas típicas cartas de la baraja española.',
    date:'Año 2025' ,
    cliente: 'Cliente: Proyecto Universitario',
    creditos: '',
    },
    {
    id: 1,
    titulus: 'Cartel Gula',
    imago: 'CartelTeatro/GulaCartel.jpg',
    imago2:'', //mockup ???
    imago3:'', //mockup??
    imago5: '',
    imago4: '',
    descripcione:'Diseño de cartelería para la obra de Teatro "Siete", escrita y dirigida por Alejandra Winker, en la cual se habla de manera satírica sobre los siete pecados capitales institucionalizados por la Iglesia Católica. En particular, el cartel se centra en el pecado de la Gula.',
    cliente: 'Cliente: Proyecto Universitario',
    date: 'Años 2025 y 2026',
    creditos: 'Equipo: Lucía Rodríguez Fernández',
    },
    {
    id: 2,
    titulus: 'Congreso Iberoamericano',
    imago: 'CartelCongreso/CongresoCartel.jpg',
    imago2:'', //mockup ???
    imago3:'', //mockup??
    imago5: '',
    imago4: '',
    descripcione:'Diseño de cartel para el 1er Congreso Iberoamericano de Creación y Fabricación Digital',
    cliente: 'Cliente: Proyecto Universitario',
    date: 'Año 2025',
    creditos: 'Equipo: Lucía Rodríguez Fernández y Vanesa Fernández Peris',
    },
    {
    id: 3,
    titulus: 'Ilustración de "Mujercitas"',
    imago: 'Novela/Mujercitas1.png',
    imago2:'Novela/Mujercitas2.png',
    imago3:'Novela/Doblepag.png', 
    imago4: 'Novela/Guardas.png',
    imago5: 'Novela/Mujercitas3.png',
    descripcione:'Diseño de portada, contraportada, guardas, y dos dobles páginas de la novela "Mujercitas", realizadas con ilustraciones hechas a partir de la técnica gouache, posteriormente escaneadas y editadas.',
    date:'Año 2025',
    cliente: 'Cliente: Proyecto Universitario',
    creditos: '',
    },
    {
    id: 4,
    titulus: 'Juego de mesa MOOD',
    imago: 'Mood/moodCartel.jpg', 
    imago2:'Mood/mood.jpg', 
    imago3:'Mood/mood3.jpg', 
    imago5: '',
    imago4: 'Mood/moood2.jpg',
    descripcione:'"Mood" un juego de mesa el cual su objetivo es tratar la temática de la salud mental a partir del humor y del carisma, de tal forma que los jugadores puedan expresar sus sentimientos, escucharse entre si y apoyarse. Con el equipo creamos la metodología del juego, sus reglas, sus consignas y los objetivos, al igual que nos encargamos del diseño de todas sus partes como lo son, el tablero, las cartas, las fichas de juego, el Manual de uso, las instrucciones y la cartelería promocional', // rellenar
    date:'Año 2025' ,
    cliente: 'Cliente: Proyecto Universitario',
    creditos: 'Equipo: Natalia Alarcón De Oñate, Álex Pérez Hidalgo y Lucía Rodríguez Fernández',
    },
    {
    id: 5,
    titulus: 'Fotografías homenaje a Ouka Leele',
    imago: 'Fotografia/Foto1.JPG',
    imago2:'Fotografia/Foto2.JPG',
    imago3:'Fotografia/Foto8.JPG', //
    imago5: 'Fotografia/Foto6.JPG',
    imago4: 'Fotografia/Foto5.JPG',
    descripcione:'Sesión fotográfica inspirada en las obras de la emblemática artista Ouka Leele.',
    date:'Año 2025' ,
    cliente: 'Cliente: Proyecto Universitario',
    creditos: 'Equipo: Natalia Alarcón De Oñate, Álex Pérez Hidalgo y Lucía Rodríguez Fernández',
    },
    {
    id: 6,
    titulus: '"Stand Still"',
    imago: 'Fotografia/granylook.png', 
    imago2:'Fotografia/Groove.png', // poner img
    imago3:'Fotografia/SeriousGrain2.png', // poner img
    imago4: 'Fotografia/StandStillWarmer.png',
    imago5: '',
    descripcione:'"Stand Still" es una sesión fotográfica en la que se realza el movimiento y la falta de enfoque, reflejando también como es la vida misma que simpre está en constante movimiento y es ahi donde se encuentra la mágia y la espontaneidad. Pero que a su vez, es necesario detenerse a enfocar la atención a ciertas cosas como lo es una mirada', // rellenar
    date:'Año 2025' ,
    cliente: 'Cliente: Proyecto propio',
    creditos: 'Fotografías tomadas por Jiaqi Ye y edición llevada acabo por mi',
    },
    {
    id: 7,
    titulus: 'Observando florecer Valencia',
    imago: 'Fotografia/Flowers.jpg',
    imago4:'Fotografia/Plaza del Ayuntamiento.jpg', //mockup ???
    imago2:'Fotografia/PuenteAlameda.jpg', //mockup??
    imago5: '',
    imago3: 'Fotografia/ciences.JPG',
    descripcione:'"Observando florecer Valencia" es una serie de fotografías las cuales encuadran mis primeras impresiones al vivir primavera en la ciudad de Valencia. ',
    cliente: '',
    date: 'Año 2025',
    creditos: '',
    },
]
