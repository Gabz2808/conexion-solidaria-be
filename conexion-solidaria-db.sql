--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: amigos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amigos (
    idamigo integer NOT NULL,
    idusuario1 integer,
    idusuario2 integer,
    estado character varying(50),
    fechasolicitud timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.amigos OWNER TO postgres;

--
-- Name: amigos_idamigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.amigos_idamigo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.amigos_idamigo_seq OWNER TO postgres;

--
-- Name: amigos_idamigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.amigos_idamigo_seq OWNED BY public.amigos.idamigo;


--
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    idcategoria integer NOT NULL,
    nombre character varying(100)
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_idcategoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categoria_idcategoria_seq OWNER TO postgres;

--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_idcategoria_seq OWNED BY public.categoria.idcategoria;


--
-- Name: chats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chats (
    idchat integer NOT NULL,
    idusuario1 integer,
    idusuario2 integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.chats OWNER TO postgres;

--
-- Name: chats_idchat_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chats_idchat_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chats_idchat_seq OWNER TO postgres;

--
-- Name: chats_idchat_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chats_idchat_seq OWNED BY public.chats.idchat;


--
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    idcomentario integer NOT NULL,
    idpost integer,
    idhistoria integer,
    idusuario integer,
    contenido text,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- Name: comentarios_idcomentario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarios_idcomentario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comentarios_idcomentario_seq OWNER TO postgres;

--
-- Name: comentarios_idcomentario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_idcomentario_seq OWNED BY public.comentarios.idcomentario;


--
-- Name: favoritos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favoritos (
    idfavorito integer NOT NULL,
    tipo character varying(50),
    idrelacion character varying(255),
    idusuario integer,
    fechaguardado timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.favoritos OWNER TO postgres;

--
-- Name: favoritos_idfavorito_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favoritos_idfavorito_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.favoritos_idfavorito_seq OWNER TO postgres;

--
-- Name: favoritos_idfavorito_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favoritos_idfavorito_seq OWNED BY public.favoritos.idfavorito;


--
-- Name: grupos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grupos (
    idgrupo integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text,
    idusuario integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    imagen text
);


ALTER TABLE public.grupos OWNER TO postgres;

--
-- Name: grupos_idgrupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grupos_idgrupo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.grupos_idgrupo_seq OWNER TO postgres;

--
-- Name: grupos_idgrupo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grupos_idgrupo_seq OWNED BY public.grupos.idgrupo;


--
-- Name: historias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historias (
    idhistoria integer NOT NULL,
    titulo character varying(255),
    contenido text,
    idusuario integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    estado character varying(50),
    imagen text
);


ALTER TABLE public.historias OWNER TO postgres;

--
-- Name: historias_idhistoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historias_idhistoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.historias_idhistoria_seq OWNER TO postgres;

--
-- Name: historias_idhistoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historias_idhistoria_seq OWNED BY public.historias.idhistoria;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.likes (
    idlike integer NOT NULL,
    idrelacion character varying(255),
    idusuario integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.likes OWNER TO postgres;

--
-- Name: likes_idlike_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.likes_idlike_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.likes_idlike_seq OWNER TO postgres;

--
-- Name: likes_idlike_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.likes_idlike_seq OWNED BY public.likes.idlike;


--
-- Name: mensajesprivados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mensajesprivados (
    idmprivado integer NOT NULL,
    idchat integer,
    idusuario integer,
    contenido text,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.mensajesprivados OWNER TO postgres;

--
-- Name: mensajesprivados_idmprivado_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mensajesprivados_idmprivado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mensajesprivados_idmprivado_seq OWNER TO postgres;

--
-- Name: mensajesprivados_idmprivado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mensajesprivados_idmprivado_seq OWNED BY public.mensajesprivados.idmprivado;


--
-- Name: miembrosgrupo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.miembrosgrupo (
    idmiembro integer NOT NULL,
    idgrupo integer,
    idusuario integer,
    rol character varying(50) DEFAULT 'miembro'::character varying,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.miembrosgrupo OWNER TO postgres;

--
-- Name: miembrosgrupo_idmiembro_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.miembrosgrupo_idmiembro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.miembrosgrupo_idmiembro_seq OWNER TO postgres;

--
-- Name: miembrosgrupo_idmiembro_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.miembrosgrupo_idmiembro_seq OWNED BY public.miembrosgrupo.idmiembro;


--
-- Name: notificaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notificaciones (
    idnotificaciones integer NOT NULL,
    idusuario integer,
    contenido text,
    leido boolean DEFAULT false,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.notificaciones OWNER TO postgres;

--
-- Name: notificaciones_idnotificaciones_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notificaciones_idnotificaciones_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notificaciones_idnotificaciones_seq OWNER TO postgres;

--
-- Name: notificaciones_idnotificaciones_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notificaciones_idnotificaciones_seq OWNED BY public.notificaciones.idnotificaciones;


--
-- Name: perfilusuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.perfilusuario (
    idperfilusuario integer NOT NULL,
    idusuario integer,
    direccion text,
    telefono character varying(20),
    urlusuario text,
    biografia text
);


ALTER TABLE public.perfilusuario OWNER TO postgres;

--
-- Name: perfilusuario_idperfilusuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.perfilusuario_idperfilusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.perfilusuario_idperfilusuario_seq OWNER TO postgres;

--
-- Name: perfilusuario_idperfilusuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.perfilusuario_idperfilusuario_seq OWNED BY public.perfilusuario.idperfilusuario;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    idposts integer NOT NULL,
    titulo character varying(255),
    contenido text,
    idusuario integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    imagen text
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_idposts_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_idposts_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_idposts_seq OWNER TO postgres;

--
-- Name: posts_idposts_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_idposts_seq OWNED BY public.posts.idposts;


--
-- Name: producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto (
    idproducto integer NOT NULL,
    nombre character varying(255),
    descripcion text,
    precio numeric(10,2),
    idcategoria integer,
    imagen text,
    idusuario integer,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.producto OWNER TO postgres;

--
-- Name: producto_idproducto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.producto_idproducto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.producto_idproducto_seq OWNER TO postgres;

--
-- Name: producto_idproducto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.producto_idproducto_seq OWNED BY public.producto.idproducto;


--
-- Name: productoguardado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productoguardado (
    idpguardado integer NOT NULL,
    idusuario integer,
    productoid integer,
    fechaguardado timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.productoguardado OWNER TO postgres;

--
-- Name: productoguardado_idpguardado_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productoguardado_idpguardado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.productoguardado_idpguardado_seq OWNER TO postgres;

--
-- Name: productoguardado_idpguardado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productoguardado_idpguardado_seq OWNED BY public.productoguardado.idpguardado;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    idusuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    fecharegistro timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    rol character varying(50),
    estado character varying(50)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_idusuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_idusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_idusuario_seq OWNER TO postgres;

--
-- Name: usuario_idusuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_idusuario_seq OWNED BY public.usuario.idusuario;


--
-- Name: amigos idamigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos ALTER COLUMN idamigo SET DEFAULT nextval('public.amigos_idamigo_seq'::regclass);


--
-- Name: categoria idcategoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN idcategoria SET DEFAULT nextval('public.categoria_idcategoria_seq'::regclass);


--
-- Name: chats idchat; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats ALTER COLUMN idchat SET DEFAULT nextval('public.chats_idchat_seq'::regclass);


--
-- Name: comentarios idcomentario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN idcomentario SET DEFAULT nextval('public.comentarios_idcomentario_seq'::regclass);


--
-- Name: favoritos idfavorito; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favoritos ALTER COLUMN idfavorito SET DEFAULT nextval('public.favoritos_idfavorito_seq'::regclass);


--
-- Name: grupos idgrupo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupos ALTER COLUMN idgrupo SET DEFAULT nextval('public.grupos_idgrupo_seq'::regclass);


--
-- Name: historias idhistoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historias ALTER COLUMN idhistoria SET DEFAULT nextval('public.historias_idhistoria_seq'::regclass);


--
-- Name: likes idlike; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes ALTER COLUMN idlike SET DEFAULT nextval('public.likes_idlike_seq'::regclass);


--
-- Name: mensajesprivados idmprivado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajesprivados ALTER COLUMN idmprivado SET DEFAULT nextval('public.mensajesprivados_idmprivado_seq'::regclass);


--
-- Name: miembrosgrupo idmiembro; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.miembrosgrupo ALTER COLUMN idmiembro SET DEFAULT nextval('public.miembrosgrupo_idmiembro_seq'::regclass);


--
-- Name: notificaciones idnotificaciones; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificaciones ALTER COLUMN idnotificaciones SET DEFAULT nextval('public.notificaciones_idnotificaciones_seq'::regclass);


--
-- Name: perfilusuario idperfilusuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfilusuario ALTER COLUMN idperfilusuario SET DEFAULT nextval('public.perfilusuario_idperfilusuario_seq'::regclass);


--
-- Name: posts idposts; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN idposts SET DEFAULT nextval('public.posts_idposts_seq'::regclass);


--
-- Name: producto idproducto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto ALTER COLUMN idproducto SET DEFAULT nextval('public.producto_idproducto_seq'::regclass);


--
-- Name: productoguardado idpguardado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productoguardado ALTER COLUMN idpguardado SET DEFAULT nextval('public.productoguardado_idpguardado_seq'::regclass);


--
-- Name: usuario idusuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN idusuario SET DEFAULT nextval('public.usuario_idusuario_seq'::regclass);


--
-- Data for Name: amigos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.amigos (idamigo, idusuario1, idusuario2, estado, fechasolicitud) FROM stdin;
47	21	22	Pendiente	2025-03-16 10:35:40.332356
48	25	22	Pendiente	2025-03-16 10:35:47.036427
49	23	21	Pendiente	2025-03-16 10:35:51.637464
50	24	25	Pendiente	2025-03-16 10:35:59.2896
51	22	23	Pendiente	2025-03-16 10:36:09.344201
\.


--
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (idcategoria, nombre) FROM stdin;
21	Electrónica
22	Ropa
23	Libros
24	Hogar
25	Deportes
\.


--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chats (idchat, idusuario1, idusuario2, fechacreacion) FROM stdin;
21	21	22	2025-03-16 10:36:53.418781
22	21	23	2025-03-16 10:36:53.418781
23	22	24	2025-03-16 10:36:53.418781
24	23	25	2025-03-16 10:36:53.418781
25	24	21	2025-03-16 10:36:53.418781
\.


--
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (idcomentario, idpost, idhistoria, idusuario, contenido, fechacreacion) FROM stdin;
1	1	\N	2	¡Qué buen viaje!	2025-03-16 10:26:33.277688
2	2	\N	3	Me encantó el libro.	2025-03-16 10:26:33.277688
3	3	\N	4	¡Qué partidazo!	2025-03-16 10:26:33.277688
4	4	\N	5	Excelente framework.	2025-03-16 10:26:33.277688
5	5	\N	1	Lindas fotos.	2025-03-16 10:26:33.277688
\.


--
-- Data for Name: favoritos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favoritos (idfavorito, tipo, idrelacion, idusuario, fechaguardado) FROM stdin;
\.


--
-- Data for Name: grupos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grupos (idgrupo, nombre, descripcion, idusuario, fechacreacion, imagen) FROM stdin;
1	Amigos del barrio	Grupo para los vecinos del barrio	1	2025-03-16 10:24:17.924943	\N
2	Club de lectura	Grupo para amantes de la lectura	2	2025-03-16 10:24:17.924943	\N
3	Equipo de fútbol	Grupo para jugadores y aficionados	3	2025-03-16 10:24:17.924943	\N
4	Desarrolladores web	Grupo para programadores web	4	2025-03-16 10:24:17.924943	\N
5	Amigos de la universidad	Grupo para exalumnos de la universidad	5	2025-03-16 10:24:17.924943	\N
6	Amigos del barrio	Grupo para los vecinos del barrio	1	2025-03-16 10:27:30.220546	\N
7	Club de lectura	Grupo para amantes de la lectura	2	2025-03-16 10:27:30.220546	\N
8	Equipo de fútbol	Grupo para jugadores y aficionados	3	2025-03-16 10:27:30.220546	\N
9	Desarrolladores web	Grupo para programadores web	4	2025-03-16 10:27:30.220546	\N
10	Amigos de la universidad	Grupo para exalumnos de la universidad	5	2025-03-16 10:27:30.220546	\N
\.


--
-- Data for Name: historias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historias (idhistoria, titulo, contenido, idusuario, fechacreacion, estado, imagen) FROM stdin;
1	Mi viaje a la playa	Unas vacaciones increíbles en la costa	1	2025-03-16 10:24:28.237704	publicado	playa.jpg
2	Nuevo libro favorito	Recomendación de una gran novela	2	2025-03-16 10:24:28.237704	publicado	libro2.jpg
3	Partido de fútbol emocionante	Crónica de un encuentro deportivo	3	2025-03-16 10:24:28.237704	publicado	futbol.jpg
4	Proyecto web terminado	Presentación de un nuevo sitio web	4	2025-03-16 10:24:28.237704	publicado	web.jpg
5	Reencuentro con amigos	Un momento especial con viejos amigos	5	2025-03-16 10:24:28.237704	publicado	amigos.jpg
6	Mi viaje a la playa	Unas vacaciones increíbles en la costa	1	2025-03-16 10:27:22.238885	publicado	playa.jpg
7	Nuevo libro favorito	Recomendación de una gran novela	2	2025-03-16 10:27:22.238885	publicado	libro2.jpg
8	Partido de fútbol emocionante	Crónica de un encuentro deportivo	3	2025-03-16 10:27:22.238885	publicado	futbol.jpg
9	Proyecto web terminado	Presentación de un nuevo sitio web	4	2025-03-16 10:27:22.238885	publicado	web.jpg
10	Reencuentro con amigos	Un momento especial con viejos amigos	5	2025-03-16 10:27:22.238885	publicado	amigos.jpg
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.likes (idlike, idrelacion, idusuario, fechacreacion) FROM stdin;
1	1	2	2025-03-16 10:27:12.936658
2	2	3	2025-03-16 10:27:12.936658
3	3	4	2025-03-16 10:27:12.936658
\.


--
-- Data for Name: mensajesprivados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mensajesprivados (idmprivado, idchat, idusuario, contenido, fechacreacion) FROM stdin;
6	1	1	Hola, ¿cómo estás?	2025-03-16 10:24:13.331105
7	1	2	¡Muy bien! ¿Y tú?	2025-03-16 10:24:13.331105
8	2	1	¿Qué tal el trabajo?	2025-03-16 10:24:13.331105
9	2	3	Bastante ocupado, pero bien.	2025-03-16 10:24:13.331105
10	3	2	¿Vamos por un café?	2025-03-16 10:24:13.331105
11	1	1	Hola, ¿cómo estás?	2025-03-16 10:27:37.154459
12	1	2	¡Muy bien! ¿Y tú?	2025-03-16 10:27:37.154459
13	2	1	¿Qué tal el trabajo?	2025-03-16 10:27:37.154459
14	2	3	Bastante ocupado, pero bien.	2025-03-16 10:27:37.154459
15	3	2	¿Vamos por un café?	2025-03-16 10:27:37.154459
\.


--
-- Data for Name: miembrosgrupo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.miembrosgrupo (idmiembro, idgrupo, idusuario, rol, fechacreacion) FROM stdin;
1	1	1	administrador	2025-03-16 10:24:23.682869
2	1	2	miembro	2025-03-16 10:24:23.682869
3	2	2	administrador	2025-03-16 10:24:23.682869
4	2	3	miembro	2025-03-16 10:24:23.682869
5	3	3	administrador	2025-03-16 10:24:23.682869
6	3	4	miembro	2025-03-16 10:24:23.682869
7	4	4	administrador	2025-03-16 10:24:23.682869
8	4	5	miembro	2025-03-16 10:24:23.682869
9	5	5	administrador	2025-03-16 10:24:23.682869
10	5	1	miembro	2025-03-16 10:24:23.682869
\.


--
-- Data for Name: notificaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notificaciones (idnotificaciones, idusuario, contenido, leido, fechacreacion) FROM stdin;
\.


--
-- Data for Name: perfilusuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.perfilusuario (idperfilusuario, idusuario, direccion, telefono, urlusuario, biografia) FROM stdin;
21	1	Calle 123, Ciudad	123456789	www.juanperez.com	Apasionado por la tecnología.
22	2	Avenida 456, Pueblo	987654321	www.mariagomez.com	Amante de los libros y la naturaleza.
23	3	Carrera 789, Villa	112233445	www.pedrorodriguez.com	Interesado en el deporte y la aventura.
24	4	Diagonal 101, Condado	556677889	www.analopez.com	Experto en marketing y redes sociales.
25	5	Transversal 112, Barrio	998877665	www.luismartinez.com	Aficionado a la música y el arte.
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (idposts, titulo, contenido, idusuario, fechacreacion, imagen) FROM stdin;
1	Consejos para viajar	Recomendaciones para tu próximo viaje	1	2025-03-16 10:26:26.981368	viaje.jpg
2	Reseña de libro	Opinión sobre una novela reciente	2	2025-03-16 10:26:26.981368	libro3.jpg
3	Goles del partido	Vídeo con los mejores momentos del encuentro	3	2025-03-16 10:26:26.981368	goles.jpg
4	Nuevo framework web	Anuncio de una nueva herramienta para desarrolladores	4	2025-03-16 10:26:26.981368	framework.jpg
5	Fotos del reencuentro	Galería de imágenes del evento	5	2025-03-16 10:26:26.981368	fotos.jpg
\.


--
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.producto (idproducto, nombre, descripcion, precio, idcategoria, imagen, idusuario, fechacreacion) FROM stdin;
21	Laptop Dell XPS 13	Ultrabook de 13 pulgadas	1200.00	1	laptop.jpg	1	2025-03-16 10:28:07.955981
22	Camiseta Nike Dri-FIT	Camiseta deportiva para hombre	35.00	2	camiseta.jpg	2	2025-03-16 10:28:07.955981
23	Libro "Cien años de soledad"	Novela de Gabriel García Márquez	20.00	3	libro.jpg	3	2025-03-16 10:28:07.955981
24	Sofa de cuero	Sofa de 3 plazas	800.00	4	sofa.jpg	4	2025-03-16 10:28:07.955981
25	Bicicleta de montaña	Bicicleta para todo terreno	500.00	5	bicicleta.jpg	5	2025-03-16 10:28:07.955981
\.


--
-- Data for Name: productoguardado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productoguardado (idpguardado, idusuario, productoid, fechaguardado) FROM stdin;
21	1	2	2025-03-16 10:28:02.915375
22	2	1	2025-03-16 10:28:02.915375
23	3	4	2025-03-16 10:28:02.915375
24	4	3	2025-03-16 10:28:02.915375
25	5	5	2025-03-16 10:28:02.915375
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (idusuario, nombre, apellido, email, password, fecharegistro, rol, estado) FROM stdin;
21	Juan	Pérez	juan.perez@example.com	password123	2025-03-16 10:28:39.458468	usuario	activo
22	María	Gómez	maria.gomez@example.com	password456	2025-03-16 10:28:39.458468	usuario	activo
23	Pedro	Rodríguez	pedro.rodriguez@example.com	password789	2025-03-16 10:28:39.458468	usuario	inactivo
24	Ana	López	ana.lopez@example.com	password101	2025-03-16 10:28:39.458468	administrador	activo
25	Luis	Martínez	luis.martinez@example.com	password112	2025-03-16 10:28:39.458468	usuario	activo
\.


--
-- Name: amigos_idamigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.amigos_idamigo_seq', 51, true);


--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_idcategoria_seq', 25, true);


--
-- Name: chats_idchat_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chats_idchat_seq', 25, true);


--
-- Name: comentarios_idcomentario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_idcomentario_seq', 5, true);


--
-- Name: favoritos_idfavorito_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favoritos_idfavorito_seq', 1, false);


--
-- Name: grupos_idgrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grupos_idgrupo_seq', 10, true);


--
-- Name: historias_idhistoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historias_idhistoria_seq', 10, true);


--
-- Name: likes_idlike_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.likes_idlike_seq', 3, true);


--
-- Name: mensajesprivados_idmprivado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mensajesprivados_idmprivado_seq', 15, true);


--
-- Name: miembrosgrupo_idmiembro_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.miembrosgrupo_idmiembro_seq', 10, true);


--
-- Name: notificaciones_idnotificaciones_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notificaciones_idnotificaciones_seq', 1, false);


--
-- Name: perfilusuario_idperfilusuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.perfilusuario_idperfilusuario_seq', 25, true);


--
-- Name: posts_idposts_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_idposts_seq', 5, true);


--
-- Name: producto_idproducto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.producto_idproducto_seq', 25, true);


--
-- Name: productoguardado_idpguardado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productoguardado_idpguardado_seq', 25, true);


--
-- Name: usuario_idusuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_idusuario_seq', 25, true);


--
-- Name: amigos amigos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT amigos_pkey PRIMARY KEY (idamigo);


--
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (idcategoria);


--
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (idchat);


--
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (idcomentario);


--
-- Name: favoritos favoritos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_pkey PRIMARY KEY (idfavorito);


--
-- Name: grupos grupos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupos
    ADD CONSTRAINT grupos_pkey PRIMARY KEY (idgrupo);


--
-- Name: historias historias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historias
    ADD CONSTRAINT historias_pkey PRIMARY KEY (idhistoria);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (idlike);


--
-- Name: mensajesprivados mensajesprivados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajesprivados
    ADD CONSTRAINT mensajesprivados_pkey PRIMARY KEY (idmprivado);


--
-- Name: miembrosgrupo miembrosgrupo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.miembrosgrupo
    ADD CONSTRAINT miembrosgrupo_pkey PRIMARY KEY (idmiembro);


--
-- Name: notificaciones notificaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_pkey PRIMARY KEY (idnotificaciones);


--
-- Name: perfilusuario perfilusuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfilusuario
    ADD CONSTRAINT perfilusuario_pkey PRIMARY KEY (idperfilusuario);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (idposts);


--
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (idproducto);


--
-- Name: productoguardado productoguardado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productoguardado
    ADD CONSTRAINT productoguardado_pkey PRIMARY KEY (idpguardado);


--
-- Name: usuario usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (idusuario);


--
-- Name: amigos amigos_idusuario1_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT amigos_idusuario1_fkey FOREIGN KEY (idusuario1) REFERENCES public.usuario(idusuario) ON DELETE CASCADE;


--
-- Name: amigos amigos_idusuario2_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT amigos_idusuario2_fkey FOREIGN KEY (idusuario2) REFERENCES public.usuario(idusuario) ON DELETE CASCADE;


--
-- Name: chats chats_idusuario1_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_idusuario1_fkey FOREIGN KEY (idusuario1) REFERENCES public.usuario(idusuario) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

