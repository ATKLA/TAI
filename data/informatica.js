const informatica = {
  titulo: "Temario de Informática",
  bloques: [
    {
      nombre: "Hardware y Arquitectura de Computadores",
      preguntas: [
        {
          pregunta: "La unidad mínima de información es:",
          opciones: ["Bit", "Byte", "Nibble", "Word"],
          correcta: 0
        },
        {
          pregunta: "Un byte equivale a:",
          opciones: ["4 bits", "8 bits", "16 bits", "32 bits"],
          correcta: 1
        },
        {
          pregunta: "La CPU se compone de:",
          opciones: ["ALU y Unidad de Control", "Solo ALU", "Solo registros", "RAM y ROM"],
          correcta: 0
        },
        {
          pregunta: "La memoria cache es:",
          opciones: ["Más rápida que la RAM", "Más lenta que la RAM", "Igual de rápida que la RAM", "No existe"],
          correcta: 0
        },
        {
          pregunta: "Los niveles de cache son:",
          opciones: ["L1, L2 y L3", "Solo L1", "L1 y L2", "No hay niveles"],
          correcta: 0
        },
        {
          pregunta: "La memoria RAM es:",
          opciones: ["Volátil", "No volátil", "Permanente", "Solo lectura"],
          correcta: 0
        },
        {
          pregunta: "La ROM es memoria:",
          opciones: ["De solo lectura", "De lectura y escritura", "Temporal", "Virtual"],
          correcta: 0
        },
        {
          pregunta: "Un disco SSD utiliza:",
          opciones: ["Memoria flash", "Discos magnéticos", "Cintas magnéticas", "Discos ópticos"],
          correcta: 0
        },
        {
          pregunta: "El bus del sistema conecta:",
          opciones: ["CPU, memoria y dispositivos E/S", "Solo CPU y memoria", "Solo dispositivos E/S", "No conecta nada"],
          correcta: 0
        },
        {
          pregunta: "La arquitectura Von Neumann se caracteriza por:",
          opciones: ["Datos e instrucciones en la misma memoria", "Memorias separadas", "No tener CPU", "Solo ROM"],
          correcta: 0
        },
        {
          pregunta: "Un procesador de 64 bits puede direccionar:",
          opciones: ["Hasta 16 GB", "Hasta 4 GB", "Teóricamente hasta 16 exabytes", "Solo 1 GB"],
          correcta: 2
        },
        {
          pregunta: "La BIOS/UEFI se encuentra en:",
          opciones: ["Memoria ROM/Flash", "RAM", "Disco duro", "Cache"],
          correcta: 0
        },
        {
          pregunta: "Un RAID 0 proporciona:",
          opciones: ["Mayor rendimiento sin redundancia", "Redundancia sin rendimiento", "Redundancia y rendimiento", "Nada útil"],
          correcta: 0
        },
        {
          pregunta: "Un RAID 1 proporciona:",
          opciones: ["Espejo/Redundancia", "Solo rendimiento", "Paridad", "Striping"],
          correcta: 0
        },
        {
          pregunta: "La resolución de una pantalla se mide en:",
          opciones: ["Píxeles", "Bits", "Bytes", "Hercios"],
          correcta: 0
        }
      ]
    },
    {
      nombre: "Sistemas Operativos",
      preguntas: [
        {
          pregunta: "El kernel del sistema operativo es:",
          opciones: ["El núcleo que gestiona recursos", "La interfaz gráfica", "Un programa de usuario", "El disco duro"],
          correcta: 0
        },
        {
          pregunta: "Los sistemas operativos pueden ser:",
          opciones: ["Monousuario o multiusuario", "Solo monousuario", "Solo multiusuario", "No hay clasificación"],
          correcta: 0
        },
        {
          pregunta: "Un proceso es:",
          opciones: ["Un programa en ejecución", "Un archivo", "Una carpeta", "Una memoria"],
          correcta: 0
        },
        {
          pregunta: "El cambio de contexto se produce cuando:",
          opciones: ["El sistema cambia entre procesos", "Se apaga el ordenador", "Se abre un archivo", "Se instala un programa"],
          correcta: 0
        },
        {
          pregunta: "La planificación de procesos puede ser:",
          opciones: ["Apropiativa y no apropiativa", "Solo apropiativa", "Solo no apropiativa", "No existe planificación"],
          correcta: 0
        },
        {
          pregunta: "Un deadlock ocurre cuando:",
          opciones: ["Procesos esperan recursos indefinidamente", "Un proceso termina", "Se reinicia el sistema", "Se libera memoria"],
          correcta: 0
        },
        {
          pregunta: "La memoria virtual permite:",
          opciones: ["Ejecutar programas mayores que la RAM", "Solo usar RAM", "Eliminar el disco", "Nada útil"],
          correcta: 0
        },
        {
          pregunta: "El swapping consiste en:",
          opciones: ["Intercambiar procesos entre RAM y disco", "Cambiar de CPU", "Formatear discos", "Instalar programas"],
          correcta: 0
        },
        {
          pregunta: "Los permisos en Linux se expresan en:",
          opciones: ["Lectura, escritura y ejecución", "Solo lectura", "Solo escritura", "No hay permisos"],
          correcta: 0
        },
        {
          pregunta: "El comando chmod en Linux sirve para:",
          opciones: ["Cambiar permisos", "Copiar archivos", "Mover archivos", "Borrar archivos"],
          correcta: 0
        },
        {
          pregunta: "El superusuario en Linux es:",
          opciones: ["root", "admin", "su", "sudo"],
          correcta: 0
        },
        {
          pregunta: "Windows utiliza el sistema de archivos:",
          opciones: ["NTFS", "ext4", "HFS+", "ZFS"],
          correcta: 0
        },
        {
          pregunta: "Linux utiliza principalmente:",
          opciones: ["ext4", "NTFS", "FAT32", "exFAT"],
          correcta: 0
        },
        {
          pregunta: "Un daemon en Linux es:",
          opciones: ["Un proceso en segundo plano", "Un usuario", "Una carpeta", "Un comando"],
          correcta: 0
        },
        {
          pregunta: "La multitarea se refiere a:",
          opciones: ["Ejecutar varios procesos simultáneamente", "Un solo proceso", "Apagar el sistema", "Instalar software"],
          correcta: 0
        }
      ]
    },
    {
      nombre: "Redes de Computadores",
      preguntas: [
        {
          pregunta: "El modelo OSI tiene:",
          opciones: ["7 capas", "5 capas", "4 capas", "3 capas"],
          correcta: 0
        },
        {
          pregunta: "La capa de red del modelo OSI es la capa:",
          opciones: ["3", "2", "4", "1"],
          correcta: 0
        },
        {
          pregunta: "El protocolo IP opera en la capa:",
          opciones: ["Red", "Transporte", "Aplicación", "Enlace"],
          correcta: 0
        },
        {
          pregunta: "TCP proporciona:",
          opciones: ["Conexión fiable", "Conexión no fiable", "No es un protocolo", "Solo para UDP"],
          correcta: 0
        },
        {
          pregunta: "UDP es un protocolo:",
          opciones: ["No orientado a conexión", "Orientado a conexión", "De red", "De aplicación"],
          correcta: 0
        },
        {
          pregunta: "Una dirección IPv4 tiene:",
          opciones: ["32 bits", "64 bits", "128 bits", "16 bits"],
          correcta: 0
        },
        {
          pregunta: "Una dirección IPv6 tiene:",
          opciones: ["128 bits", "32 bits", "64 bits", "256 bits"],
          correcta: 0
        },
        {
          pregunta: "La máscara de subred /24 equivale a:",
          opciones: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
          correcta: 0
        },
        {
          pregunta: "El DNS resuelve:",
          opciones: ["Nombres de dominio a IPs", "IPs a MACs", "MACs a IPs", "Puertos"],
          correcta: 0
        },
        {
          pregunta: "El protocolo HTTP opera en el puerto:",
          opciones: ["80", "443", "21", "22"],
          correcta: 0
        },
        {
          pregunta: "El protocolo HTTPS opera en el puerto:",
          opciones: ["443", "80", "22", "21"],
          correcta: 0
        },
        {
          pregunta: "El protocolo FTP opera en los puertos:",
          opciones: ["20 y 21", "80 y 443", "22 y 23", "25 y 110"],
          correcta: 0
        },
        {
          pregunta: "SSH opera en el puerto:",
          opciones: ["22", "23", "21", "80"],
          correcta: 0
        },
        {
          pregunta: "Un switch opera en la capa:",
          opciones: ["Enlace de datos", "Red", "Transporte", "Aplicación"],
          correcta: 0
        },
        {
          pregunta: "Un router opera en la capa:",
          opciones: ["Red", "Enlace", "Transporte", "Física"],
          correcta: 0
        }
      ]
    },
    {
      nombre: "Bases de Datos",
      preguntas: [
        {
          pregunta: "Un SGBD es:",
          opciones: ["Sistema Gestor de Bases de Datos", "Sistema Gráfico de Datos", "Solo para SQL", "Un lenguaje"],
          correcta: 0
        },
        {
          pregunta: "SQL significa:",
          opciones: ["Structured Query Language", "System Query Language", "Standard Query Language", "Simple Query Language"],
          correcta: 0
        },
        {
          pregunta: "La instrucción SELECT se usa para:",
          opciones: ["Consultar datos", "Insertar datos", "Borrar datos", "Crear tablas"],
          correcta: 0
        },
        {
          pregunta: "La instrucción INSERT se usa para:",
          opciones: ["Insertar datos", "Consultar datos", "Actualizar datos", "Borrar tablas"],
          correcta: 0
        },
        {
          pregunta: "Una clave primaria debe ser:",
          opciones: ["Única y no nula", "Solo única", "Puede ser nula", "No importa"],
          correcta: 0
        },
        {
          pregunta: "Una clave foránea establece:",
          opciones: ["Relación entre tablas", "Clave primaria", "Índice", "Vista"],
          correcta: 0
        },
        {
          pregunta: "La normalización de bases de datos busca:",
          opciones: ["Eliminar redundancias", "Aumentar redundancias", "Borrar datos", "Nada específico"],
          correcta: 0
        },
        {
          pregunta: "Una transacción debe cumplir propiedades:",
          opciones: ["ACID", "BASE", "CRUD", "HTTP"],
          correcta: 0
        },
        {
          pregunta: "ACID significa:",
          opciones: ["Atomicity, Consistency, Isolation, Durability", "All, Create, Insert, Delete", "Ambas", "Ninguna"],
          correcta: 0
        },
        {
          pregunta: "Un índice en base de datos sirve para:",
          opciones: ["Acelerar consultas", "Ralentizar consultas", "Borrar datos", "Crear tablas"],
          correcta: 0
        },
        {
          pregunta: "NoSQL se refiere a bases de datos:",
          opciones: ["No relacionales", "Sin SQL", "Solo SQL", "Obsoletas"],
          correcta: 0
        },
        {
          pregunta: "MongoDB es una base de datos:",
          opciones: ["Orientada a documentos", "Relacional", "En memoria", "De grafos"],
          correcta: 0
        },
        {
          pregunta: "El comando JOIN en SQL sirve para:",
          opciones: ["Combinar datos de varias tablas", "Borrar datos", "Crear índices", "Nada"],
          correcta: 0
        },
        {
          pregunta: "Una vista en SQL es:",
          opciones: ["Una consulta guardada", "Una tabla física", "Un índice", "Un usuario"],
          correcta: 0
        },
        {
          pregunta: "El lenguaje DDL incluye:",
          opciones: ["CREATE, ALTER, DROP", "SELECT, INSERT, UPDATE", "GRANT, REVOKE", "Todas"],
          correcta: 0
        }
      ]
    },
    {
      nombre: "Programación y Desarrollo",
      preguntas: [
        {
          pregunta: "Un algoritmo es:",
          opciones: ["Secuencia finita de pasos para resolver un problema", "Un lenguaje de programación", "Un sistema operativo", "Una base de datos"],
          correcta: 0
        },
        {
          pregunta: "Las estructuras de control incluyen:",
          opciones: ["Secuencial, condicional e iterativa", "Solo secuencial", "Solo condicional", "No existen"],
          correcta: 0
        },
        {
          pregunta: "Un bucle while ejecuta:",
          opciones: ["Mientras la condición sea verdadera", "Una sola vez", "Siempre infinitamente", "Nunca"],
          correcta: 0
        },
        {
          pregunta: "La programación orientada a objetos se basa en:",
          opciones: ["Clases y objetos", "Solo funciones", "Solo procedimientos", "Nada específico"],
          correcta: 0
        },
        {
          pregunta: "Los pilares de la POO son:",
          opciones: ["Encapsulación, herencia y polimorfismo", "Solo encapsulación", "Solo herencia", "No hay pilares"],
          correcta: 0
        },
        {
          pregunta: "Un array es:",
          opciones: ["Estructura de datos indexada", "Un objeto", "Una función", "Un bucle"],
          correcta: 0
        },
        {
          pregunta: "Una pila (stack) funciona:",
          opciones: ["LIFO - Last In First Out", "FIFO - First In First Out", "Sin orden", "Aleatoriamente"],
          correcta: 0
        },
        {
          pregunta: "Una cola (queue) funciona:",
          opciones: ["FIFO - First In First Out", "LIFO - Last In First Out", "Sin orden", "Aleatoriamente"],
          correcta: 0
        },
        {
          pregunta: "Git es:",
          opciones: ["Sistema de control de versiones", "Un lenguaje de programación", "Una base de datos", "Un sistema operativo"],
          correcta: 0
        },
        {
          pregunta: "Un commit en Git representa:",
          opciones: ["Un punto en el historial del código", "Una rama", "Un conflicto", "Un error"],
          correcta: 0
        },
        {
          pregunta: "El testing unitario prueba:",
          opciones: ["Unidades individuales de código", "Todo el sistema", "La interfaz", "La base de datos"],
          correcta: 0
        },
        {
          pregunta: "La metodología ágil se caracteriza por:",
          opciones: ["Iteraciones cortas y feedback continuo", "Planificación rígida", "Sin reuniones", "Desarrollo en cascada"],
          correcta: 0
        },
        {
          pregunta: "Scrum es:",
          opciones: ["Un framework ágil", "Un lenguaje", "Una herramienta", "Un sistema operativo"],
          correcta: 0
        },
        {
          pregunta: "Un sprint en Scrum dura típicamente:",
          opciones: ["1-4 semanas", "6 meses", "1 año", "1 día"],
          correcta: 0
        },
        {
          pregunta: "DevOps busca:",
          opciones: ["Integración entre desarrollo y operaciones", "Solo desarrollo", "Solo operaciones", "Nada específico"],
          correcta: 0
        }
      ]
    }
  ]
};
