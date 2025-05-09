PGDMP  "    4                }            conexion-solidaria    17.4    17.4 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    17726    conexion-solidaria    DATABASE     z   CREATE DATABASE "conexion-solidaria" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
 $   DROP DATABASE "conexion-solidaria";
                     postgres    false                       1255    26593    actualizar_timestamp()    FUNCTION     �   CREATE FUNCTION public.actualizar_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
 -   DROP FUNCTION public.actualizar_timestamp();
       public               postgres    false                       1255    26594    insertar_perfil_usuario()    FUNCTION     ;  CREATE FUNCTION public.insertar_perfil_usuario() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  -- Insertar un nuevo registro en la tabla perfilusuario
  INSERT INTO perfilusuario (idusuario)
  VALUES (NEW.idusuario); -- Valores predeterminados (puedes ajustarlos si es necesario)
  
  RETURN NEW;
END;
$$;
 0   DROP FUNCTION public.insertar_perfil_usuario();
       public               postgres    false            �            1259    26595    amigos    TABLE     �   CREATE TABLE public.amigos (
    idamigo integer NOT NULL,
    idusuario1 integer NOT NULL,
    idusuario2 integer NOT NULL,
    fechasolicitud timestamp without time zone NOT NULL,
    estado text NOT NULL
);
    DROP TABLE public.amigos;
       public         heap r       postgres    false            �            1259    26600    amigos_idamigo_seq    SEQUENCE     �   CREATE SEQUENCE public.amigos_idamigo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.amigos_idamigo_seq;
       public               postgres    false    217            �           0    0    amigos_idamigo_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.amigos_idamigo_seq OWNED BY public.amigos.idamigo;
          public               postgres    false    218            �            1259    26601 
   categorias    TABLE     _   CREATE TABLE public.categorias (
    idcategoria integer NOT NULL,
    nombre text NOT NULL
);
    DROP TABLE public.categorias;
       public         heap r       postgres    false            �            1259    26606    categorias_idcategoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_idcategoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categorias_idcategoria_seq;
       public               postgres    false    219            �           0    0    categorias_idcategoria_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categorias_idcategoria_seq OWNED BY public.categorias.idcategoria;
          public               postgres    false    220            �            1259    26607    chats    TABLE     �   CREATE TABLE public.chats (
    idchat integer NOT NULL,
    idusuario1 integer NOT NULL,
    idusuario2 integer NOT NULL,
    fechacreacion timestamp without time zone NOT NULL
);
    DROP TABLE public.chats;
       public         heap r       postgres    false            �            1259    26610    chats_idchat_seq    SEQUENCE     �   CREATE SEQUENCE public.chats_idchat_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.chats_idchat_seq;
       public               postgres    false    221            �           0    0    chats_idchat_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.chats_idchat_seq OWNED BY public.chats.idchat;
          public               postgres    false    222            �            1259    26611    comentarios    TABLE       CREATE TABLE public.comentarios (
    idcomentario integer NOT NULL,
    idpost integer,
    idhistoria integer,
    idusuario integer NOT NULL,
    contenido text NOT NULL,
    fechacreacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.comentarios;
       public         heap r       postgres    false            �            1259    26617    comentarios_idcomentario_seq    SEQUENCE     �   CREATE SEQUENCE public.comentarios_idcomentario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.comentarios_idcomentario_seq;
       public               postgres    false    223            �           0    0    comentarios_idcomentario_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.comentarios_idcomentario_seq OWNED BY public.comentarios.idcomentario;
          public               postgres    false    224            �            1259    26618 	   favoritos    TABLE     �   CREATE TABLE public.favoritos (
    idfavorito integer NOT NULL,
    idrelacion integer NOT NULL,
    idusuario integer NOT NULL,
    fechaguardado timestamp without time zone NOT NULL,
    tipo text NOT NULL
);
    DROP TABLE public.favoritos;
       public         heap r       postgres    false            �            1259    26623    favoritos_idfavorito_seq    SEQUENCE     �   CREATE SEQUENCE public.favoritos_idfavorito_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.favoritos_idfavorito_seq;
       public               postgres    false    225            �           0    0    favoritos_idfavorito_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.favoritos_idfavorito_seq OWNED BY public.favoritos.idfavorito;
          public               postgres    false    226            �            1259    26624    grupos    TABLE     �   CREATE TABLE public.grupos (
    idgrupo integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text NOT NULL,
    idusuario integer NOT NULL,
    fechacreacion timestamp without time zone NOT NULL,
    imagen text NOT NULL
);
    DROP TABLE public.grupos;
       public         heap r       postgres    false            �            1259    26629    grupos_idgrupo_seq    SEQUENCE     �   CREATE SEQUENCE public.grupos_idgrupo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.grupos_idgrupo_seq;
       public               postgres    false    227            �           0    0    grupos_idgrupo_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.grupos_idgrupo_seq OWNED BY public.grupos.idgrupo;
          public               postgres    false    228            �            1259    26630 	   historias    TABLE     �   CREATE TABLE public.historias (
    idhistoria integer NOT NULL,
    titulo character varying(255) NOT NULL,
    contenido text NOT NULL,
    idusuario integer NOT NULL,
    fechacreacion timestamp without time zone NOT NULL,
    imagen text NOT NULL
);
    DROP TABLE public.historias;
       public         heap r       postgres    false            �            1259    26635    historias_idhistoria_seq    SEQUENCE     �   CREATE SEQUENCE public.historias_idhistoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.historias_idhistoria_seq;
       public               postgres    false    229            �           0    0    historias_idhistoria_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.historias_idhistoria_seq OWNED BY public.historias.idhistoria;
          public               postgres    false    230                        1259    26817    likes    TABLE     �   CREATE TABLE public.likes (
    idlike integer NOT NULL,
    idusuario integer NOT NULL,
    idpost integer NOT NULL,
    fecha_like date DEFAULT CURRENT_DATE,
    fechacreacion timestamp without time zone DEFAULT now()
);
    DROP TABLE public.likes;
       public         heap r       postgres    false            �            1259    26816    likes_idlike_seq    SEQUENCE     �   CREATE SEQUENCE public.likes_idlike_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.likes_idlike_seq;
       public               postgres    false    256            �           0    0    likes_idlike_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.likes_idlike_seq OWNED BY public.likes.idlike;
          public               postgres    false    255            �            1259    26640    mensajesprivados    TABLE     �   CREATE TABLE public.mensajesprivados (
    idmprivado integer NOT NULL,
    idchat integer NOT NULL,
    idusuario integer NOT NULL,
    contenido text NOT NULL,
    fechacreacion timestamp without time zone NOT NULL
);
 $   DROP TABLE public.mensajesprivados;
       public         heap r       postgres    false            �            1259    26645    mensajesprivados_idmprivado_seq    SEQUENCE     �   CREATE SEQUENCE public.mensajesprivados_idmprivado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.mensajesprivados_idmprivado_seq;
       public               postgres    false    231            �           0    0    mensajesprivados_idmprivado_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.mensajesprivados_idmprivado_seq OWNED BY public.mensajesprivados.idmprivado;
          public               postgres    false    232            �            1259    26646    miembrosgrupo    TABLE     �   CREATE TABLE public.miembrosgrupo (
    idmiembro integer NOT NULL,
    idgrupo integer NOT NULL,
    idusuario integer NOT NULL,
    rol character varying(50) NOT NULL,
    fechacreacion timestamp without time zone NOT NULL
);
 !   DROP TABLE public.miembrosgrupo;
       public         heap r       postgres    false            �            1259    26649    miembrosgrupo_idmiembro_seq    SEQUENCE     �   CREATE SEQUENCE public.miembrosgrupo_idmiembro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.miembrosgrupo_idmiembro_seq;
       public               postgres    false    233            �           0    0    miembrosgrupo_idmiembro_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.miembrosgrupo_idmiembro_seq OWNED BY public.miembrosgrupo.idmiembro;
          public               postgres    false    234            �            1259    26650    notificaciones    TABLE     �   CREATE TABLE public.notificaciones (
    idnotificaciones integer NOT NULL,
    idusuario integer NOT NULL,
    contenido text NOT NULL,
    leido boolean NOT NULL,
    fechacreacion timestamp without time zone NOT NULL
);
 "   DROP TABLE public.notificaciones;
       public         heap r       postgres    false            �            1259    26655 #   notificaciones_idnotificaciones_seq    SEQUENCE     �   CREATE SEQUENCE public.notificaciones_idnotificaciones_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.notificaciones_idnotificaciones_seq;
       public               postgres    false    235            �           0    0 #   notificaciones_idnotificaciones_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.notificaciones_idnotificaciones_seq OWNED BY public.notificaciones.idnotificaciones;
          public               postgres    false    236            �            1259    26656    perfilusuario    TABLE     �  CREATE TABLE public.perfilusuario (
    idperfilusuario integer NOT NULL,
    idusuario integer NOT NULL,
    direccion text,
    telefono character varying(20),
    urlusuario text DEFAULT 'https://firebasestorage.googleapis.com/v0/b/conexion-solidaria-8684b.firebasestorage.app/o/Perfil_Default.webp?alt=media&token=8a9ff342-2a8a-4ce8-aaa6-632a15a23086'::text,
    biografia text
);
 !   DROP TABLE public.perfilusuario;
       public         heap r       postgres    false            �            1259    26662 !   perfilusuario_idperfilusuario_seq    SEQUENCE     �   CREATE SEQUENCE public.perfilusuario_idperfilusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.perfilusuario_idperfilusuario_seq;
       public               postgres    false    237            �           0    0 !   perfilusuario_idperfilusuario_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.perfilusuario_idperfilusuario_seq OWNED BY public.perfilusuario.idperfilusuario;
          public               postgres    false    238            �            1259    26663    posts    TABLE     �   CREATE TABLE public.posts (
    idposts integer NOT NULL,
    contenido text,
    idusuario integer NOT NULL,
    fechacreacion timestamp without time zone NOT NULL,
    imagen text
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    26668    posts_idposts_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_idposts_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.posts_idposts_seq;
       public               postgres    false    239            �           0    0    posts_idposts_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.posts_idposts_seq OWNED BY public.posts.idposts;
          public               postgres    false    240            �            1259    26669 	   productos    TABLE     E  CREATE TABLE public.productos (
    idproducto integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text NOT NULL,
    precio numeric(10,2) NOT NULL,
    idcategoria integer NOT NULL,
    imagen text NOT NULL,
    idusuario integer NOT NULL,
    fechacreacion timestamp without time zone NOT NULL
);
    DROP TABLE public.productos;
       public         heap r       postgres    false            �            1259    26674    producto_idproducto_seq    SEQUENCE     �   CREATE SEQUENCE public.producto_idproducto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.producto_idproducto_seq;
       public               postgres    false    241            �           0    0    producto_idproducto_seq    SEQUENCE OWNED BY     T   ALTER SEQUENCE public.producto_idproducto_seq OWNED BY public.productos.idproducto;
          public               postgres    false    242            �            1259    26675    productoguardado    TABLE     �   CREATE TABLE public.productoguardado (
    idpguardado integer NOT NULL,
    idusuario integer NOT NULL,
    idproducto integer NOT NULL,
    fechaguardado timestamp without time zone NOT NULL
);
 $   DROP TABLE public.productoguardado;
       public         heap r       postgres    false            �            1259    26678     productoguardado_idpguardado_seq    SEQUENCE     �   CREATE SEQUENCE public.productoguardado_idpguardado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.productoguardado_idpguardado_seq;
       public               postgres    false    243            �           0    0     productoguardado_idpguardado_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.productoguardado_idpguardado_seq OWNED BY public.productoguardado.idpguardado;
          public               postgres    false    244            �            1259    26679    productos_idproducto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_idproducto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.productos_idproducto_seq;
       public               postgres    false    241                        0    0    productos_idproducto_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.productos_idproducto_seq OWNED BY public.productos.idproducto;
          public               postgres    false    245            �            1259    26680    usuario    TABLE     Z  CREATE TABLE public.usuario (
    idusuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    fecharegistro timestamp without time zone NOT NULL,
    rol character varying(50),
    estado character varying(50)
);
    DROP TABLE public.usuario;
       public         heap r       postgres    false            �            1259    26685    usuario_idusuario_seq    SEQUENCE     ~   CREATE SEQUENCE public.usuario_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.usuario_idusuario_seq;
       public               postgres    false            �            1259    26686    usuario_idusuario_seq1    SEQUENCE     �   CREATE SEQUENCE public.usuario_idusuario_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_idusuario_seq1;
       public               postgres    false    246                       0    0    usuario_idusuario_seq1    SEQUENCE OWNED BY     P   ALTER SEQUENCE public.usuario_idusuario_seq1 OWNED BY public.usuario.idusuario;
          public               postgres    false    248            �            1259    26687    usuarios    TABLE     v  CREATE TABLE public.usuarios (
    idusuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    fecharegistro timestamp without time zone DEFAULT now() NOT NULL,
    rol character varying(50),
    estado character varying(50),
    password character varying NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    26693    usuarios_idusuario_seq    SEQUENCE        CREATE SEQUENCE public.usuarios_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuarios_idusuario_seq;
       public               postgres    false    249                       0    0    usuarios_idusuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuarios_idusuario_seq OWNED BY public.usuarios.idusuario;
          public               postgres    false    250            �            1259    26694    usuarios_idusuario_seq1    SEQUENCE     �   ALTER TABLE public.usuarios ALTER COLUMN idusuario ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuarios_idusuario_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    249            �            1259    26695    v_grupos    VIEW     >  CREATE VIEW public.v_grupos AS
 SELECT gr.idgrupo,
    gr.nombre,
    gr.descripcion,
    gr.idusuario,
    gr.fechacreacion,
    gr.imagen,
    (((u.nombre)::text || ' '::text) || (u.apellido)::text) AS nombre_propietario
   FROM (public.grupos gr
     LEFT JOIN public.usuarios u ON ((gr.idusuario = u.idusuario)));
    DROP VIEW public.v_grupos;
       public       v       postgres    false    249    249    249    227    227    227    227    227    227            �            1259    26699    v_miembrosgrupos    VIEW     �   CREATE VIEW public.v_miembrosgrupos AS
 SELECT mg.idmiembro,
    mg.idgrupo,
    mg.idusuario,
    mg.rol,
    mg.fechacreacion,
    gr.nombre
   FROM (public.miembrosgrupo mg
     LEFT JOIN public.grupos gr ON ((gr.idgrupo = mg.idgrupo)));
 #   DROP VIEW public.v_miembrosgrupos;
       public       v       postgres    false    227    233    233    233    233    233    227                       1259    26836    v_post    VIEW     F  CREATE VIEW public.v_post AS
SELECT
    NULL::integer AS idpost,
    NULL::text AS contenido,
    NULL::timestamp without time zone AS fecha_post,
    NULL::text AS imagen,
    NULL::integer AS idautor,
    NULL::text AS autor,
    NULL::text AS urlusuario,
    NULL::bigint AS cantidad_likes,
    NULL::jsonb AS comentarios;
    DROP VIEW public.v_post;
       public       v       postgres    false                       1259    26842    v_productos    VIEW     �  CREATE VIEW public.v_productos AS
 SELECT pr.idproducto,
    pr.nombre,
    pr.descripcion,
    pr.precio,
    pr.idusuario AS idvendedor,
    (((us.nombre)::text || ' '::text) || (us.apellido)::text) AS nombrevendedor,
    ca.nombre AS categoria,
    pr.fechacreacion,
    pr.imagen
   FROM ((public.productos pr
     LEFT JOIN public.categorias ca ON ((pr.idcategoria = ca.idcategoria)))
     LEFT JOIN public.usuarios us ON ((pr.idusuario = us.idusuario)));
    DROP VIEW public.v_productos;
       public       v       postgres    false    249    219    219    241    241    241    241    241    241    241    241    249    249            �            1259    26775 
   v_usuarios    VIEW       CREATE VIEW public.v_usuarios AS
 SELECT pu.idperfilusuario,
    pu.direccion,
    pu.telefono,
    pu.urlusuario,
    pu.biografia,
    u.idusuario,
    u.nombre,
    u.apellido,
    u.email,
    u.fecharegistro,
    u.rol,
    u.estado,
    u.password,
    ( SELECT count(*) AS count
           FROM public.productos
          WHERE (productos.idusuario = u.idusuario)) AS productos_totales,
    ( SELECT count(*) AS count
           FROM public.posts
          WHERE (posts.idusuario = u.idusuario)) AS posts_totales,
    ( SELECT count(*) AS count
           FROM public.amigos
          WHERE ((amigos.idusuario1 = u.idusuario) OR (amigos.idusuario2 = u.idusuario))) AS amigos_totales
   FROM (public.perfilusuario pu
     JOIN public.usuarios u ON ((pu.idusuario = u.idusuario)));
    DROP VIEW public.v_usuarios;
       public       v       postgres    false    217    237    237    237    237    237    237    239    241    249    249    249    249    249    249    249    249    217            �           2604    26716    amigos idamigo    DEFAULT     p   ALTER TABLE ONLY public.amigos ALTER COLUMN idamigo SET DEFAULT nextval('public.amigos_idamigo_seq'::regclass);
 =   ALTER TABLE public.amigos ALTER COLUMN idamigo DROP DEFAULT;
       public               postgres    false    218    217            �           2604    26717    categorias idcategoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN idcategoria SET DEFAULT nextval('public.categorias_idcategoria_seq'::regclass);
 E   ALTER TABLE public.categorias ALTER COLUMN idcategoria DROP DEFAULT;
       public               postgres    false    220    219            �           2604    26718    chats idchat    DEFAULT     l   ALTER TABLE ONLY public.chats ALTER COLUMN idchat SET DEFAULT nextval('public.chats_idchat_seq'::regclass);
 ;   ALTER TABLE public.chats ALTER COLUMN idchat DROP DEFAULT;
       public               postgres    false    222    221            �           2604    26719    comentarios idcomentario    DEFAULT     �   ALTER TABLE ONLY public.comentarios ALTER COLUMN idcomentario SET DEFAULT nextval('public.comentarios_idcomentario_seq'::regclass);
 G   ALTER TABLE public.comentarios ALTER COLUMN idcomentario DROP DEFAULT;
       public               postgres    false    224    223            �           2604    26720    favoritos idfavorito    DEFAULT     |   ALTER TABLE ONLY public.favoritos ALTER COLUMN idfavorito SET DEFAULT nextval('public.favoritos_idfavorito_seq'::regclass);
 C   ALTER TABLE public.favoritos ALTER COLUMN idfavorito DROP DEFAULT;
       public               postgres    false    226    225            �           2604    26721    grupos idgrupo    DEFAULT     p   ALTER TABLE ONLY public.grupos ALTER COLUMN idgrupo SET DEFAULT nextval('public.grupos_idgrupo_seq'::regclass);
 =   ALTER TABLE public.grupos ALTER COLUMN idgrupo DROP DEFAULT;
       public               postgres    false    228    227            �           2604    26722    historias idhistoria    DEFAULT     |   ALTER TABLE ONLY public.historias ALTER COLUMN idhistoria SET DEFAULT nextval('public.historias_idhistoria_seq'::regclass);
 C   ALTER TABLE public.historias ALTER COLUMN idhistoria DROP DEFAULT;
       public               postgres    false    230    229                       2604    26820    likes idlike    DEFAULT     l   ALTER TABLE ONLY public.likes ALTER COLUMN idlike SET DEFAULT nextval('public.likes_idlike_seq'::regclass);
 ;   ALTER TABLE public.likes ALTER COLUMN idlike DROP DEFAULT;
       public               postgres    false    255    256    256            �           2604    26724    mensajesprivados idmprivado    DEFAULT     �   ALTER TABLE ONLY public.mensajesprivados ALTER COLUMN idmprivado SET DEFAULT nextval('public.mensajesprivados_idmprivado_seq'::regclass);
 J   ALTER TABLE public.mensajesprivados ALTER COLUMN idmprivado DROP DEFAULT;
       public               postgres    false    232    231            �           2604    26725    miembrosgrupo idmiembro    DEFAULT     �   ALTER TABLE ONLY public.miembrosgrupo ALTER COLUMN idmiembro SET DEFAULT nextval('public.miembrosgrupo_idmiembro_seq'::regclass);
 F   ALTER TABLE public.miembrosgrupo ALTER COLUMN idmiembro DROP DEFAULT;
       public               postgres    false    234    233            �           2604    26726    notificaciones idnotificaciones    DEFAULT     �   ALTER TABLE ONLY public.notificaciones ALTER COLUMN idnotificaciones SET DEFAULT nextval('public.notificaciones_idnotificaciones_seq'::regclass);
 N   ALTER TABLE public.notificaciones ALTER COLUMN idnotificaciones DROP DEFAULT;
       public               postgres    false    236    235            �           2604    26727    perfilusuario idperfilusuario    DEFAULT     �   ALTER TABLE ONLY public.perfilusuario ALTER COLUMN idperfilusuario SET DEFAULT nextval('public.perfilusuario_idperfilusuario_seq'::regclass);
 L   ALTER TABLE public.perfilusuario ALTER COLUMN idperfilusuario DROP DEFAULT;
       public               postgres    false    238    237            �           2604    26728    posts idposts    DEFAULT     n   ALTER TABLE ONLY public.posts ALTER COLUMN idposts SET DEFAULT nextval('public.posts_idposts_seq'::regclass);
 <   ALTER TABLE public.posts ALTER COLUMN idposts DROP DEFAULT;
       public               postgres    false    240    239            �           2604    26729    productoguardado idpguardado    DEFAULT     �   ALTER TABLE ONLY public.productoguardado ALTER COLUMN idpguardado SET DEFAULT nextval('public.productoguardado_idpguardado_seq'::regclass);
 K   ALTER TABLE public.productoguardado ALTER COLUMN idpguardado DROP DEFAULT;
       public               postgres    false    244    243            �           2604    26730    productos idproducto    DEFAULT     |   ALTER TABLE ONLY public.productos ALTER COLUMN idproducto SET DEFAULT nextval('public.productos_idproducto_seq'::regclass);
 C   ALTER TABLE public.productos ALTER COLUMN idproducto DROP DEFAULT;
       public               postgres    false    245    241            �           2604    26731    usuario idusuario    DEFAULT     w   ALTER TABLE ONLY public.usuario ALTER COLUMN idusuario SET DEFAULT nextval('public.usuario_idusuario_seq1'::regclass);
 @   ALTER TABLE public.usuario ALTER COLUMN idusuario DROP DEFAULT;
       public               postgres    false    248    246            �          0    26595    amigos 
   TABLE DATA           Y   COPY public.amigos (idamigo, idusuario1, idusuario2, fechasolicitud, estado) FROM stdin;
    public               postgres    false    217   ջ       �          0    26601 
   categorias 
   TABLE DATA           9   COPY public.categorias (idcategoria, nombre) FROM stdin;
    public               postgres    false    219   5�       �          0    26607    chats 
   TABLE DATA           N   COPY public.chats (idchat, idusuario1, idusuario2, fechacreacion) FROM stdin;
    public               postgres    false    221   ��       �          0    26611    comentarios 
   TABLE DATA           l   COPY public.comentarios (idcomentario, idpost, idhistoria, idusuario, contenido, fechacreacion) FROM stdin;
    public               postgres    false    223   ��       �          0    26618 	   favoritos 
   TABLE DATA           [   COPY public.favoritos (idfavorito, idrelacion, idusuario, fechaguardado, tipo) FROM stdin;
    public               postgres    false    225   Y�       �          0    26624    grupos 
   TABLE DATA           `   COPY public.grupos (idgrupo, nombre, descripcion, idusuario, fechacreacion, imagen) FROM stdin;
    public               postgres    false    227   v�       �          0    26630 	   historias 
   TABLE DATA           d   COPY public.historias (idhistoria, titulo, contenido, idusuario, fechacreacion, imagen) FROM stdin;
    public               postgres    false    229   ��       �          0    26817    likes 
   TABLE DATA           U   COPY public.likes (idlike, idusuario, idpost, fecha_like, fechacreacion) FROM stdin;
    public               postgres    false    256   ��       �          0    26640    mensajesprivados 
   TABLE DATA           c   COPY public.mensajesprivados (idmprivado, idchat, idusuario, contenido, fechacreacion) FROM stdin;
    public               postgres    false    231   	�       �          0    26646    miembrosgrupo 
   TABLE DATA           Z   COPY public.miembrosgrupo (idmiembro, idgrupo, idusuario, rol, fechacreacion) FROM stdin;
    public               postgres    false    233   ��       �          0    26650    notificaciones 
   TABLE DATA           f   COPY public.notificaciones (idnotificaciones, idusuario, contenido, leido, fechacreacion) FROM stdin;
    public               postgres    false    235   n�       �          0    26656    perfilusuario 
   TABLE DATA           o   COPY public.perfilusuario (idperfilusuario, idusuario, direccion, telefono, urlusuario, biografia) FROM stdin;
    public               postgres    false    237   ��       �          0    26663    posts 
   TABLE DATA           U   COPY public.posts (idposts, contenido, idusuario, fechacreacion, imagen) FROM stdin;
    public               postgres    false    239   e�       �          0    26675    productoguardado 
   TABLE DATA           ]   COPY public.productoguardado (idpguardado, idusuario, idproducto, fechaguardado) FROM stdin;
    public               postgres    false    243   ��       �          0    26669 	   productos 
   TABLE DATA           {   COPY public.productos (idproducto, nombre, descripcion, precio, idcategoria, imagen, idusuario, fechacreacion) FROM stdin;
    public               postgres    false    241   �       �          0    26680    usuario 
   TABLE DATA           k   COPY public.usuario (idusuario, nombre, apellido, email, password, fecharegistro, rol, estado) FROM stdin;
    public               postgres    false    246   t�       �          0    26687    usuarios 
   TABLE DATA           l   COPY public.usuarios (idusuario, nombre, apellido, email, fecharegistro, rol, estado, password) FROM stdin;
    public               postgres    false    249   ��                  0    0    amigos_idamigo_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.amigos_idamigo_seq', 6, true);
          public               postgres    false    218                       0    0    categorias_idcategoria_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categorias_idcategoria_seq', 9, true);
          public               postgres    false    220                       0    0    chats_idchat_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.chats_idchat_seq', 33, true);
          public               postgres    false    222                       0    0    comentarios_idcomentario_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.comentarios_idcomentario_seq', 2, true);
          public               postgres    false    224                       0    0    favoritos_idfavorito_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.favoritos_idfavorito_seq', 1, false);
          public               postgres    false    226                       0    0    grupos_idgrupo_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.grupos_idgrupo_seq', 12, true);
          public               postgres    false    228            	           0    0    historias_idhistoria_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.historias_idhistoria_seq', 1, false);
          public               postgres    false    230            
           0    0    likes_idlike_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.likes_idlike_seq', 10, true);
          public               postgres    false    255                       0    0    mensajesprivados_idmprivado_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.mensajesprivados_idmprivado_seq', 15, true);
          public               postgres    false    232                       0    0    miembrosgrupo_idmiembro_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.miembrosgrupo_idmiembro_seq', 10, true);
          public               postgres    false    234                       0    0 #   notificaciones_idnotificaciones_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.notificaciones_idnotificaciones_seq', 1, false);
          public               postgres    false    236                       0    0 !   perfilusuario_idperfilusuario_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.perfilusuario_idperfilusuario_seq', 6, true);
          public               postgres    false    238                       0    0    posts_idposts_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.posts_idposts_seq', 22, true);
          public               postgres    false    240                       0    0    producto_idproducto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.producto_idproducto_seq', 1, false);
          public               postgres    false    242                       0    0     productoguardado_idpguardado_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.productoguardado_idpguardado_seq', 1, false);
          public               postgres    false    244                       0    0    productos_idproducto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_idproducto_seq', 10, true);
          public               postgres    false    245                       0    0    usuario_idusuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_idusuario_seq', 1, false);
          public               postgres    false    247                       0    0    usuario_idusuario_seq1    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuario_idusuario_seq1', 1, false);
          public               postgres    false    248                       0    0    usuarios_idusuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_idusuario_seq', 1, false);
          public               postgres    false    250                       0    0    usuarios_idusuario_seq1    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_idusuario_seq1', 6, true);
          public               postgres    false    251                       2606    26733 )   categorias PK_b80cdb9e9701d200f917c8b2395 
   CONSTRAINT     r   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT "PK_b80cdb9e9701d200f917c8b2395" PRIMARY KEY (idcategoria);
 U   ALTER TABLE ONLY public.categorias DROP CONSTRAINT "PK_b80cdb9e9701d200f917c8b2395";
       public                 postgres    false    219            !           2606    26735 &   usuario PK_e85aae916115e08db303691af54 
   CONSTRAINT     m   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "PK_e85aae916115e08db303691af54" PRIMARY KEY (idusuario);
 R   ALTER TABLE ONLY public.usuario DROP CONSTRAINT "PK_e85aae916115e08db303691af54";
       public                 postgres    false    246            #           2606    26737 &   usuario UQ_2863682842e688ca198eb25c124 
   CONSTRAINT     d   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE (email);
 R   ALTER TABLE ONLY public.usuario DROP CONSTRAINT "UQ_2863682842e688ca198eb25c124";
       public                 postgres    false    246                       2606    26739    amigos amigos_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT amigos_pkey PRIMARY KEY (idamigo);
 <   ALTER TABLE ONLY public.amigos DROP CONSTRAINT amigos_pkey;
       public                 postgres    false    217            	           2606    26741    chats chats_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (idchat);
 :   ALTER TABLE ONLY public.chats DROP CONSTRAINT chats_pkey;
       public                 postgres    false    221                       2606    26743    comentarios comentarios_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (idcomentario);
 F   ALTER TABLE ONLY public.comentarios DROP CONSTRAINT comentarios_pkey;
       public                 postgres    false    223                       2606    26745    favoritos favoritos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_pkey PRIMARY KEY (idfavorito);
 B   ALTER TABLE ONLY public.favoritos DROP CONSTRAINT favoritos_pkey;
       public                 postgres    false    225                       2606    26747    grupos grupos_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.grupos
    ADD CONSTRAINT grupos_pkey PRIMARY KEY (idgrupo);
 <   ALTER TABLE ONLY public.grupos DROP CONSTRAINT grupos_pkey;
       public                 postgres    false    227                       2606    26749    historias historias_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.historias
    ADD CONSTRAINT historias_pkey PRIMARY KEY (idhistoria);
 B   ALTER TABLE ONLY public.historias DROP CONSTRAINT historias_pkey;
       public                 postgres    false    229            )           2606    26823    likes likes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (idlike);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_pkey;
       public                 postgres    false    256                       2606    26753 &   mensajesprivados mensajesprivados_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.mensajesprivados
    ADD CONSTRAINT mensajesprivados_pkey PRIMARY KEY (idmprivado);
 P   ALTER TABLE ONLY public.mensajesprivados DROP CONSTRAINT mensajesprivados_pkey;
       public                 postgres    false    231                       2606    26755     miembrosgrupo miembrosgrupo_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.miembrosgrupo
    ADD CONSTRAINT miembrosgrupo_pkey PRIMARY KEY (idmiembro);
 J   ALTER TABLE ONLY public.miembrosgrupo DROP CONSTRAINT miembrosgrupo_pkey;
       public                 postgres    false    233                       2606    26757 "   notificaciones notificaciones_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_pkey PRIMARY KEY (idnotificaciones);
 L   ALTER TABLE ONLY public.notificaciones DROP CONSTRAINT notificaciones_pkey;
       public                 postgres    false    235                       2606    26759     perfilusuario perfilusuario_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.perfilusuario
    ADD CONSTRAINT perfilusuario_pkey PRIMARY KEY (idperfilusuario);
 J   ALTER TABLE ONLY public.perfilusuario DROP CONSTRAINT perfilusuario_pkey;
       public                 postgres    false    237                       2606    26761    posts posts_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (idposts);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    239                       2606    26763    productos producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT producto_pkey PRIMARY KEY (idproducto);
 A   ALTER TABLE ONLY public.productos DROP CONSTRAINT producto_pkey;
       public                 postgres    false    241                       2606    26765 &   productoguardado productoguardado_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.productoguardado
    ADD CONSTRAINT productoguardado_pkey PRIMARY KEY (idpguardado);
 P   ALTER TABLE ONLY public.productoguardado DROP CONSTRAINT productoguardado_pkey;
       public                 postgres    false    243            +           2606    26825    likes unique_like 
   CONSTRAINT     Y   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT unique_like UNIQUE (idusuario, idpost);
 ;   ALTER TABLE ONLY public.likes DROP CONSTRAINT unique_like;
       public                 postgres    false    256    256            %           2606    26767    usuarios usuario_email_key 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_email_key UNIQUE (email);
 D   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_email_key;
       public                 postgres    false    249            '           2606    26769    usuarios usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (idusuario);
 ?   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    249            �           2618    26839    v_post _RETURN    RULE     �  CREATE OR REPLACE VIEW public.v_post AS
 SELECT p.idposts AS idpost,
    p.contenido,
    p.fechacreacion AS fecha_post,
    p.imagen,
    u.idusuario AS idautor,
    concat(u.nombre, ' ', u.apellido) AS autor,
    pu.urlusuario,
    count(l.idlike) AS cantidad_likes,
    jsonb_agg(jsonb_build_object('idcomentario', sub.idcomentario, 'contenido', sub.contenido, 'fecha_comentario', sub.fechacreacion, 'autor_comentario', sub.autor_comentario) ORDER BY sub.fechacreacion DESC) FILTER (WHERE (sub.idcomentario IS NOT NULL)) AS comentarios
   FROM ((((public.posts p
     LEFT JOIN public.usuarios u ON ((p.idusuario = u.idusuario)))
     LEFT JOIN public.perfilusuario pu ON ((pu.idusuario = u.idusuario)))
     LEFT JOIN public.likes l ON ((p.idposts = l.idpost)))
     LEFT JOIN LATERAL ( SELECT c.idcomentario,
            c.contenido,
            c.fechacreacion,
            concat(uc.nombre, ' ', uc.apellido) AS autor_comentario
           FROM (public.comentarios c
             LEFT JOIN public.usuarios uc ON ((c.idusuario = uc.idusuario)))
          WHERE (c.idpost = p.idposts)
          ORDER BY c.fechacreacion DESC) sub ON (true))
  GROUP BY p.idposts, u.idusuario, pu.urlusuario
  ORDER BY p.fechacreacion DESC;
 Q  CREATE OR REPLACE VIEW public.v_post AS
SELECT
    NULL::integer AS idpost,
    NULL::text AS contenido,
    NULL::timestamp without time zone AS fecha_post,
    NULL::text AS imagen,
    NULL::integer AS idautor,
    NULL::text AS autor,
    NULL::text AS urlusuario,
    NULL::bigint AS cantidad_likes,
    NULL::jsonb AS comentarios;
       public               postgres    false    249    249    249    223    237    4891    4903    256    256    223    223    223    237    239    239    223    239    239    239    257            .           2620    26771    usuarios actualizar_updated_at    TRIGGER     �   CREATE TRIGGER actualizar_updated_at BEFORE UPDATE ON public.usuarios FOR EACH ROW EXECUTE FUNCTION public.actualizar_timestamp();
 7   DROP TRIGGER actualizar_updated_at ON public.usuarios;
       public               postgres    false    249    259            /           2620    26772 (   usuarios trigger_insertar_perfil_usuario    TRIGGER     �   CREATE TRIGGER trigger_insertar_perfil_usuario AFTER INSERT ON public.usuarios FOR EACH ROW EXECUTE FUNCTION public.insertar_perfil_usuario();
 A   DROP TRIGGER trigger_insertar_perfil_usuario ON public.usuarios;
       public               postgres    false    249    260            ,           2606    26826    likes fk_post    FK CONSTRAINT     p   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT fk_post FOREIGN KEY (idpost) REFERENCES public.posts(idposts);
 7   ALTER TABLE ONLY public.likes DROP CONSTRAINT fk_post;
       public               postgres    false    256    4891    239            -           2606    26831    likes fk_usuario    FK CONSTRAINT     {   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT fk_usuario FOREIGN KEY (idusuario) REFERENCES public.usuarios(idusuario);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT fk_usuario;
       public               postgres    false    4903    256    249            �   P   x�m�1�0�N�Jʇ�,�vpi�tl�o~NJ T�R� �FVK�t�q�}ܝ���I�O/�g��j��ۅ��y�      �   E   x�3�t�IM.):�9/39�ˈ3(� �˄�#?=���*��4F�sYp��&%&&rY�\1z\\\ ��      �   b   x�}���!��3��_ �!E����Q�z�ɷ��D����:򁗲�F`��[�������9�W3�	nFl��Dt�AW9��4ig��P!F�f�@�+�      �   M   x�3�42���4����I�4202�50�52R00�26�21�33��0�2�+L,NAUhhejiel�gn`nlh�����  ��      �      x������ � �      �     x���KN�0�s
����N�*�*� q	6�d��rb���[.�)�,=�������jހsʰW��p�#�j��!�,�2-�T��(6�ڈuV˪�J����&�� =Rf񌚲���o(�Z�u��$鵚ފ��b� ��m���-m�/��fqڮ�"��I�&����S30z�k
�rfr�^ރ����}~���)�z�L��;�*3�3�rfvŞ���o�6S�u�w���a53yy_���:�#�A7u�t�ۖ3��-K��м)-      �      x������ � �      �   A   x�uʱ�0�����78�Y����.ҩB
�9<������e�����2�sfg�u�nS�<�      �   �   x��бn�0���~��N���!�Dʔ�C�J��\�#%"��8��uA�/�SX��?}���a��-)�q(��݂i��;&��k�ָ�LrT�R�B�4 ���G����V���Y��8|v�G%�\C'��Y��؞ZG�3`������6�����4��ó��m�m������gW��Is�ƨ�Dg��8�ި3���y&\/���c��f���      �   q   x��̱� F��p	w��b���M���?�����#Ch��]�y�^�a�s��̔&�Caq)sN�e`6����0��h�L��4�,�8j�+X��C�f�9k�k�e�      �      x������ � �      �   �   x����N� ����)\��@	�L�D7.��̶��m/�H)�����7 �ߞ�렃�����\��V��\��a���v\H,)-�0�"���σ�6�i�%�0��;��(��1g��+�>ķ'�x�U|ј0��Js�ۚ>h;:��^�:�f"��r�v=*}p
οc
�Z@g�A�6`��з�`��1���i�      �   y  x����N�0�u�l`g�3_�BB�l��سq�J5��'Tp�SR$$�l�k���"NU@�
�P$N�A	�����WM����s������~U5�yWI�r^�S�A6��j�&�vy#���ڸ����S-��6�qH�b�W�� l,���|{u��~�*����\��r�������8���b�8��T8��9��;c�ͨ���ʻ㪜���BuH��h��1U^3��P�D�8��ڟ��{QU�=b�������Jk��R/�z<Jm����6�&��ljA�Z���S�蔍�u�m�X�o�:�~Ò���t<�N���y\\.Dz��v��˔XE/ZH$���0�F ��9Er��;Y��_o��      �      x������ � �      �   Y  x���=s�0��Z�4�[y�i�3f������0+Y�s�<�����賍�Bų�cԆ�6L(-Gd�]�}�c��yK�j�{������h�+��?�},��2�+Բ�m3��N��3�k_zq'��[�nq/��Š�TByi�:����?\�|�|��?Ѳ�?�i��{yJ����V(�t
HM��Id�� Q@R|@=J?�����;���_���jg��-���S�t[v�+��/���<�h�W����&�$�����x����N ˹Ny��R�ɴQ�}{�qh��6ǧ�����l��3�$е��h	ZH-{���C	�Q��7[�Q�QYn��~��~���      �      x������ � �      �   E  x����n�0���``�uL$)R�QK�(R+�\+I�ة�O��t���GȋՀ:�		˒�'�����W&�9<af�BH�L�3�KT1�e��H#] g\���r�g�p}�h�����q7����k���Q��V���>%�}T�]��v��qRl>�b�D;̶��p�lP���6r�V�RZٗ�X���H�y�q_8��i��% ��LA�����j�M��6iC`�6D�TH�3��xQm�d���+:ą�\W�X��6ut"������c���=�;s�m�u}P�Fao��Yg���0�t`&c�a^�(���i�'��G�YRB�/5��9     