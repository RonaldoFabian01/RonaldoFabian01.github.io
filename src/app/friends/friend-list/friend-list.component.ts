import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {
  Listfriend =
    [
      {
        "id": 1,
        "name": "Juan Pérez",
        "age": 28,
        "gender": "Masculino",
        "book_favorite": "Cien años de soledad",
        "description": "Un ávido lector que disfruta sumergirse en mundos imaginarios. Le encanta discutir sobre tramas y personajes, y siempre está en busca de recomendaciones de nuevos libros.",
        "location": "Madrid, España",
        "image": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Has leído algo interesante últimamente?",
            "time": "10:00"
          },
          {
            "type": "received",
            "content": "Sí, estoy con 'Rayuela'. Es fascinante.",
            "time": "10:01"
          },
          {
            "type": "sent",
            "content": "¡Es un gran libro! ¿Te gusta el estilo de Cortázar?",
            "time": "10:02"
          },
          {
            "type": "received",
            "content": "Sí, es muy diferente. Me encanta.",
            "time": "10:03"
          },
          {
            "type": "sent",
            "content": "Deberías leer 'Cien años de soledad' si no lo has hecho.",
            "time": "10:04"
          }
        ]
      },
      {
        "id": 2,
        "name": "Ana García",
        "age": 25,
        "gender": "Femenino",
        "book_favorite": "El amor en los tiempos del cólera",
        "description": "Apasionada de la literatura romántica, pasa horas en su rincón de lectura. Siempre tiene un libro en la mano y disfruta de compartir sus historias favoritas con amigos.",
        "location": "Barcelona, España",
        "image": "https://i.pinimg.com/236x/76/9b/49/769b491a680bbfedcb6ccaa9b90247cf.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué opinas de la novela 'El amor en los tiempos del cólera'?",
            "time": "10:10"
          },
          {
            "type": "received",
            "content": "Me encanta, es tan profundo y emocional.",
            "time": "10:11"
          },
          {
            "type": "sent",
            "content": "Totalmente de acuerdo. García Márquez tiene un don.",
            "time": "10:12"
          },
          {
            "type": "received",
            "content": "Sí, es un maestro de la prosa.",
            "time": "10:13"
          },
          {
            "type": "sent",
            "content": "¿Tienes algún otro favorito de él?",
            "time": "10:14"
          }
        ]
      },
      {
        "id": 3,
        "name": "Carlos López",
        "age": 32,
        "gender": "Masculino",
        "book_favorite": "Sapiens: De animales a dioses",
        "description": "Un lector curioso que se siente fascinado por la historia y la filosofía. Le gusta profundizar en libros que desafían su forma de pensar y abren su mente a nuevas ideas.",
        "location": "Valencia, España",
        "image": "https://cdn.prod.website-files.com/6068edfd58b664357f69cc3f/62888a9e6efe4469735e89db_Joel%20Mason%20Career%20Expert.png",
        "chat": [
          {
            "type": "sent",
            "content": "¿Has leído 'Sapiens'? Es impresionante.",
            "time": "10:20"
          },
          {
            "type": "received",
            "content": "Sí, lo leí el año pasado. Me abrió los ojos.",
            "time": "10:21"
          },
          {
            "type": "sent",
            "content": "¿Qué parte te impactó más?",
            "time": "10:22"
          },
          {
            "type": "received",
            "content": "La evolución del pensamiento humano. Muy provocador.",
            "time": "10:23"
          },
          {
            "type": "sent",
            "content": "Sin duda, un libro que invita a reflexionar.",
            "time": "10:24"
          }
        ]
      },
      {
        "id": 4,
        "name": "María Fernández",
        "age": 30,
        "gender": "Femenino",
        "book_favorite": "Orgullo y prejuicio",
        "description": "Una apasionada de los clásicos, encuentra en cada página una nueva lección sobre la vida y el amor. Siempre lleva consigo un libro para disfrutar en cualquier momento libre.",
        "location": "Sevilla, España",
        "image": "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué opinas de 'Orgullo y prejuicio'?",
            "time": "10:30"
          },
          {
            "type": "received",
            "content": "Es mi favorito. Austen es brillante.",
            "time": "10:31"
          },
          {
            "type": "sent",
            "content": "Me encanta la forma en que retrata las relaciones.",
            "time": "10:32"
          },
          {
            "type": "received",
            "content": "Sí, es tan actual a pesar del tiempo.",
            "time": "10:33"
          },
          {
            "type": "sent",
            "content": "¿Tienes algún otro clásico que recomiendes?",
            "time": "10:34"
          }
        ]
      },
      {
        "id": 5,
        "name": "Luis Martínez",
        "age": 35,
        "gender": "Masculino",
        "book_favorite": "El alquimista",
        "description": "Un amante de la narrativa inspiradora, busca en cada lectura una conexión con su propia vida y sueños. Comparte su amor por los libros en un club de lectura local.",
        "location": "Bilbao, España",
        "image": "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
        "chat": [
          {
            "type": "sent",
            "content": "¿Te ha impactado 'El alquimista'?",
            "time": "10:40"
          },
          {
            "type": "received",
            "content": "Sí, fue una experiencia transformadora.",
            "time": "10:41"
          },
          {
            "type": "sent",
            "content": "Es increíble cómo nos conecta con nuestros sueños.",
            "time": "10:42"
          },
          {
            "type": "received",
            "content": "Totalmente, lo recomiendo a todos mis amigos.",
            "time": "10:43"
          },
          {
            "type": "sent",
            "content": "¿Has leído otros libros de Coelho?",
            "time": "10:44"
          }
        ]
      },
      {
        "id": 6,
        "name": "Elena Torres",
        "age": 27,
        "gender": "Femenino",
        "book_favorite": "La sombra del viento",
        "description": "Una amante de los misterios literarios que disfruta explorando historias complejas y giros inesperados. Siempre está lista para una buena discusión sobre sus lecturas.",
        "location": "Granada, España",
        "image": "https://i.pinimg.com/736x/ae/b4/27/aeb4271447a6f26baa4b95b8766b0242.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Has leído 'La sombra del viento'?",
            "time": "10:50"
          },
          {
            "type": "received",
            "content": "Sí, me atrapó desde la primera página.",
            "time": "10:51"
          },
          {
            "type": "sent",
            "content": "Es una obra maestra. ¿Te gustó el final?",
            "time": "10:52"
          },
          {
            "type": "received",
            "content": "Totalmente inesperado, me encantó.",
            "time": "10:53"
          },
          {
            "type": "sent",
            "content": "Deberíamos discutirlo más a fondo.",
            "time": "10:54"
          }
        ]
      },
      {
        "id": 7,
        "name": "Andrés Jiménez",
        "age": 40,
        "gender": "Masculino",
        "book_favorite": "1984",
        "description": "Un lector reflexivo que busca entender el mundo a través de la literatura distópica. Le apasiona analizar las implicaciones de las obras en la sociedad actual.",
        "location": "Málaga, España",
        "image": "https://storage.googleapis.com/www-paredro-com/uploads/2015/08/shutterstock_188419790-e1439475344980.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué te pareció '1984'?",
            "time": "11:00"
          },
          {
            "type": "received",
            "content": "Es perturbador pero muy relevante.",
            "time": "11:01"
          },
          {
            "type": "sent",
            "content": "Me hizo reflexionar sobre la libertad.",
            "time": "11:02"
          },
          {
            "type": "received",
            "content": "Exacto, es más actual que nunca.",
            "time": "11:03"
          },
          {
            "type": "sent",
            "content": "¿Te gustaría leer algo similar después?",
            "time": "11:04"
          }
        ]
      },
      {
        "id": 8,
        "name": "Lucía Morales",
        "age": 22,
        "gender": "Femenino",
        "book_favorite": "Harry Potter y la piedra filosofal",
        "description": "Una joven que ha crecido con la magia de la literatura juvenil. Le encanta sumergirse en mundos fantásticos y siempre busca nuevos títulos para explorar.",
        "location": "Murcia, España",
        "image": "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Te gustó 'Harry Potter'?",
            "time": "11:10"
          },
          {
            "type": "received",
            "content": "¡Me encantó! Crecí con esos libros.",
            "time": "11:11"
          },
          {
            "type": "sent",
            "content": "Es un mundo mágico, ¿verdad?",
            "time": "11:12"
          },
          {
            "type": "received",
            "content": "Sí, siempre quiero volver a leerlo.",
            "time": "11:13"
          },
          {
            "type": "sent",
            "content": "¿Cuál es tu personaje favorito?",
            "time": "11:14"
          }
        ]
      },
      {
        "id": 9,
        "name": "Roberto Sánchez",
        "age": 33,
        "gender": "Masculino",
        "book_favorite": "El túnel",
        "description": "Un lector introspectivo que se siente atraído por las obras que exploran la psicología humana. Le gusta escribir reflexiones sobre sus lecturas.",
        "location": "Alicante, España",
        "image": "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué te pareció 'El túnel'?",
            "time": "11:20"
          },
          {
            "type": "received",
            "content": "Es inquietante, me dejó pensando.",
            "time": "11:21"
          },
          {
            "type": "sent",
            "content": "La psicología de los personajes es compleja.",
            "time": "11:22"
          },
          {
            "type": "received",
            "content": "Sí, es un reflejo de la obsesión humana.",
            "time": "11:23"
          },
          {
            "type": "sent",
            "content": "¿Te gustaría leer algo similar?",
            "time": "11:24"
          }
        ]
      },
      {
        "id": 10,
        "name": "Sofía Castillo",
        "age": 29,
        "gender": "Femenino",
        "book_favorite": "Mujer en punto cero",
        "description": "Interesada en la literatura feminista, disfruta de relatos que desafían normas y roles establecidos. Comparte sus lecturas en un blog de libros.",
        "location": "Zaragoza, España",
        "image": "https://www.kapwing.com/resources/content/images/2021/04/tiktok-profile-picture-idea-4--1--1.jpeg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Te impactó 'Mujer en punto cero'?",
            "time": "11:30"
          },
          {
            "type": "received",
            "content": "Sí, es una historia muy poderosa.",
            "time": "11:31"
          },
          {
            "type": "sent",
            "content": "La voz de la protagonista es tan fuerte.",
            "time": "11:32"
          },
          {
            "type": "received",
            "content": "Exactamente, es un gran ejemplo de resistencia.",
            "time": "11:33"
          },
          {
            "type": "sent",
            "content": "Deberíamos hablar más de literatura feminista.",
            "time": "11:34"
          }
        ]
      },
      {
        "id": 11,
        "name": "Fernando Ruiz",
        "age": 31,
        "gender": "Masculino",
        "book_favorite": "Rayuela",
        "description": "Un apasionado de la literatura experimental que disfruta de los libros que rompen con la narrativa convencional. Le encanta participar en grupos de lectura.",
        "location": "Bilbao, España",
        "image": "https://img.freepik.com/premium-photo/portrait-young-man-white-background_392895-225528.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Te gusta 'Rayuela'?",
            "time": "11:40"
          },
          {
            "type": "received",
            "content": "Es una obra única, me fascina.",
            "time": "11:41"
          },
          {
            "type": "sent",
            "content": "La forma en que juega con la narrativa es genial.",
            "time": "11:42"
          },
          {
            "type": "received",
            "content": "Sí, cada lectura es una nueva experiencia.",
            "time": "11:43"
          },
          {
            "type": "sent",
            "content": "¿Tienes algún otro libro experimental que recomiendes?",
            "time": "11:44"
          }
        ]
      },
      {
        "id": 12,
        "name": "Claudia Gómez",
        "age": 26,
        "gender": "Femenino",
        "book_favorite": "Cumbres borrascosas",
        "description": "Fascinada por las historias de amor y venganza, siempre busca lecturas que la hagan sentir intensamente. Le gusta discutir sus impresiones con otros lectores.",
        "location": "Salamanca, España",
        "image": "https://img.freepik.com/free-photo/young-woman-having-brow-color-added-her-eyebrows_231208-3535.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué opinas de 'Cumbres borrascosas'?",
            "time": "11:50"
          },
          {
            "type": "received",
            "content": "Es apasionante y trágico.",
            "time": "11:51"
          },
          {
            "type": "sent",
            "content": "La relación entre los personajes es intensa.",
            "time": "11:52"
          },
          {
            "type": "received",
            "content": "Sí, es una historia de amor y desamor.",
            "time": "11:53"
          },
          {
            "type": "sent",
            "content": "Deberíamos hablar más de eso algún día.",
            "time": "11:54"
          }
        ]
      },
      {
        "id": 13,
        "name": "Diego Martínez",
        "age": 37,
        "gender": "Masculino",
        "book_favorite": "El nombre de la rosa",
        "description": "Un amante de la historia que disfruta de las novelas de misterio ambientadas en el pasado. Se dedica a investigar sobre autores clásicos.",
        "location": "Bilbao, España",
        "image": "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Te gustó 'El nombre de la rosa'?",
            "time": "12:00"
          },
          {
            "type": "received",
            "content": "Sí, es intrigante y bien escrito.",
            "time": "12:01"
          },
          {
            "type": "sent",
            "content": "La mezcla de historia y misterio es genial.",
            "time": "12:02"
          },
          {
            "type": "received",
            "content": "Exactamente, es un gran clásico.",
            "time": "12:03"
          },
          {
            "type": "sent",
            "content": "¿Te gustaría leer más novelas históricas?",
            "time": "12:04"
          }
        ]
      },
      {
        "id": 14,
        "name": "Paula Fernández",
        "age": 24,
        "gender": "Femenino",
        "book_favorite": "Bajo la misma estrella",
        "description": "Una lectora sensible que se siente atraída por historias de amor y superación. Le gusta participar en actividades literarias en su comunidad.",
        "location": "Toledo, España",
        "image": "https://wallpapers.com/images/hd/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué te pareció 'Bajo la misma estrella'?",
            "time": "12:10"
          },
          {
            "type": "received",
            "content": "Me hizo llorar, es tan conmovedor.",
            "time": "12:11"
          },
          {
            "type": "sent",
            "content": "La historia de amor es muy hermosa.",
            "time": "12:12"
          },
          {
            "type": "received",
            "content": "Sí, pero también toca temas difíciles.",
            "time": "12:13"
          },
          {
            "type": "sent",
            "content": "Definitivamente un libro para recordar.",
            "time": "12:14"
          }
        ]
      },
      {
        "id": 15,
        "name": "Javier Castro",
        "age": 39,
        "gender": "Masculino",
        "book_favorite": "Crónica de una muerte anunciada",
        "description": "Interesado en las narrativas de realismo mágico, disfruta de la prosa de Gabriel García Márquez. A menudo escribe críticas sobre sus lecturas.",
        "location": "Córdoba, España",
        "image": "https://st4.depositphotos.com/11585370/21426/i/450/depositphotos_214267674-stock-photo-choice-concept-portrait-young-man.jpg",
        "chat": [
          {
            "type": "sent",
            "content": "¿Qué opinas de 'Crónica de una muerte anunciada'?",
            "time": "12:20"
          },
          {
            "type": "received",
            "content": "Es fascinante, la narrativa es única.",
            "time": "12:21"
          },
          {
            "type": "sent",
            "content": "La forma en que se cuenta la historia es brillante.",
            "time": "12:22"
          },
          {
            "type": "received",
            "content": "Sí, es como ver un rompecabezas.",
            "time": "12:23"
          },
          {
            "type": "sent",
            "content": "¿Qué otros libros de Márquez recomiendas?",
            "time": "12:24"
          }
        ]
      }
    ]

  friend: any
  openchat(amigo: any) {
    this.friend = amigo
  }
}