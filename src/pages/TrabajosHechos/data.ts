
export interface Trabajos {
    id:number
    titulus: string
    imago: string
    imago2: string
    imago3: string
    descripcione: string
    date: string
    creditos: string
    
}

export const trabajos: Trabajos[] = [
    {
    id: 0,
    titulus: 'Diseño tipográfico',
    imago: 'Tipografia/O.jpg',
    imago2:'Tipografia/Z.jpg',
    imago3:'Tipografia/X.jpg',
    descripcione:'Proyecto de creación de tipografías para el desafío de 36 days of Type. El objetivo de este proyecto fue jugar con la expresividad de la tipografía mediante la forma, el color, el acabado y la composición. Inspiradas en las siluetas, colores y texturas gráficas de unas típicas cartas de la baraja española.',
    date:'Año 2025' ,
    creditos: '',
    },
    {
    id: 1,
    titulus: 'Carteles',
    imago: 'CartelTeatro/GulaCartel.jpg',
    imago2:'CartelCongreso/CongresoCartel.jpg',
    imago3:'CartelMacbeth.jpg',
    descripcione:'Diseño de cartelería para diversos proyectos universitarios.  ',
    date: 'Años 2025 y 2026',
    creditos: 'Cartel de "Gula" realizado en conjunto con Lucía Rodríguez Fernández. Cartel "1 Congreso Iberoamericano de creación y fabricación digital" realizaco en conjunto con Vanesa Fernández Peris y Lucía Rodríguez Fernández',
    },
    {
    id: 2,
    titulus: 'Ilustración',
    imago: 'Novela/Mujercitas1.png',
    imago2:'Novela/Mujercitas2.png',
    imago3:'Comic/Comic.jpg',
    descripcione:'Proyectos universitarios en los que la ilustración tomó el protagonismo.',
    date:'Año 2025',
    creditos: '',
    },
    {
    id: 3,
    titulus: 'Fotografía',
    imago: 'Fotografia/Foto1.JPG',
    imago2:'Fotografia/Foto2.JPG',
    imago3:'Tipografia/X.jpg',
    descripcione:'Sesión fotográfica inspirada en las obras de la emblemática artista Ouka Leele.',
    date:'Año 2025' ,
    creditos: 'Proyecto realizado en conjunto con Natalia Alarcón De Oñate, Álex Pérez Hidalgo y Lucía Rodríguez Fernández',
    },
]