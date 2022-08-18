toc.dat                                                                                             0000600 0004000 0002000 00000022712 14277444371 0014460 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                           z           scrum_db    14.5    14.5 $                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         !           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         "           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         #           1262    16385    scrum_db    DATABASE     S   CREATE DATABASE scrum_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE scrum_db;
                lucas    false         า            1259    16407    category    TABLE     h   CREATE TABLE public.category (
    id integer NOT NULL,
    cetagory character varying(255) NOT NULL
);
    DROP TABLE public.category;
       public         heap    lucas    false         ั            1259    16406    category_id_seq    SEQUENCE        CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          lucas    false    210         $           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          lucas    false    209         ื            1259    16452    product_seq    SEQUENCE     t   CREATE SEQUENCE public.product_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.product_seq;
       public          lucas    false         ุ            1259    16453    product    TABLE       CREATE TABLE public.product (
    id integer DEFAULT nextval('public.product_seq'::regclass) NOT NULL,
    product_name character varying(255) NOT NULL,
    amount integer NOT NULL,
    price integer NOT NULL,
    category_id integer,
    post_date date NOT NULL,
    user_id integer,
    product_description character varying(255) DEFAULT NULL::character varying,
    image bytea,
    theme_id integer
);
    DROP TABLE public.product;
       public         heap    lucas    false    215         ิ            1259    16414    theme    TABLE     g   CREATE TABLE public.theme (
    id integer NOT NULL,
    theme_name character varying(255) NOT NULL
);
    DROP TABLE public.theme;
       public         heap    lucas    false         ำ            1259    16413    theme_id_seq    SEQUENCE        CREATE SEQUENCE public.theme_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.theme_id_seq;
       public          lucas    false    212         %           0    0    theme_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.theme_id_seq OWNED BY public.theme.id;
          public          lucas    false    211         ึ            1259    16421    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255),
    email character varying(70) NOT NULL,
    username character varying(30) NOT NULL,
    password character varying(20) NOT NULL
);
    DROP TABLE public."user";
       public         heap    lucas    false         ี            1259    16420    user_id_seq    SEQUENCE        CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          lucas    false    214         &           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          lucas    false    213         x           2604    16410    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          lucas    false    210    209    210         y           2604    16417    theme id    DEFAULT     d   ALTER TABLE ONLY public.theme ALTER COLUMN id SET DEFAULT nextval('public.theme_id_seq'::regclass);
 7   ALTER TABLE public.theme ALTER COLUMN id DROP DEFAULT;
       public          lucas    false    212    211    212         z           2604    16424    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          lucas    false    214    213    214                   0    16407    category 
   TABLE DATA           0   COPY public.category (id, cetagory) FROM stdin;
    public          lucas    false    210       3607.dat           0    16453    product 
   TABLE DATA              COPY public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) FROM stdin;
    public          lucas    false    216       3613.dat           0    16414    theme 
   TABLE DATA           /   COPY public.theme (id, theme_name) FROM stdin;
    public          lucas    false    212       3609.dat           0    16421    user 
   TABLE DATA           T   COPY public."user" (id, firstname, lastname, email, username, password) FROM stdin;
    public          lucas    false    214       3611.dat '           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public          lucas    false    209         (           0    0    product_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.product_seq', 6, false);
          public          lucas    false    215         )           0    0    theme_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.theme_id_seq', 1, false);
          public          lucas    false    211         *           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 1, true);
          public          lucas    false    213         ~           2606    16412    category category_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pk;
       public            lucas    false    210                    2606    16461    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            lucas    false    216                    2606    16419    theme theme_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.theme
    ADD CONSTRAINT theme_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.theme DROP CONSTRAINT theme_pk;
       public            lucas    false    212                    2606    16428    user user_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pk;
       public            lucas    false    214                    1259    16479    product_category_id_fk    INDEX     Q   CREATE INDEX product_category_id_fk ON public.product USING btree (category_id);
 *   DROP INDEX public.product_category_id_fk;
       public            lucas    false    216                    1259    16480    product_theme_id_fk    INDEX     K   CREATE INDEX product_theme_id_fk ON public.product USING btree (theme_id);
 '   DROP INDEX public.product_theme_id_fk;
       public            lucas    false    216                    1259    16478    product_user_id_fk    INDEX     I   CREATE INDEX product_user_id_fk ON public.product USING btree (user_id);
 &   DROP INDEX public.product_user_id_fk;
       public            lucas    false    216                    2606    16462    product product_category_id_fk    FK CONSTRAINT        ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fk FOREIGN KEY (category_id) REFERENCES public.category(id);
 H   ALTER TABLE ONLY public.product DROP CONSTRAINT product_category_id_fk;
       public          lucas    false    216    3454    210                    2606    16467    product product_theme_id_fk    FK CONSTRAINT     {   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_theme_id_fk FOREIGN KEY (theme_id) REFERENCES public.theme(id);
 E   ALTER TABLE ONLY public.product DROP CONSTRAINT product_theme_id_fk;
       public          lucas    false    212    216    3456                    2606    16472    product product_user_id_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_user_id_fk FOREIGN KEY (user_id) REFERENCES public."user"(id);
 D   ALTER TABLE ONLY public.product DROP CONSTRAINT product_user_id_fk;
       public          lucas    false    216    214    3458                                                              3607.dat                                                                                            0000600 0004000 0002000 00000000142 14277444371 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Trading cards
2	Action figures
3	Plushies
4	Clothing
5	Manga
6	Light novels
7	Accessoires 
\.


                                                                                                                                                                                                                                                                                                                                                                                                                              3613.dat                                                                                            0000600 0004000 0002000 00000000421 14277444371 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        3	Doctor Strange action figure	2	9999	2	2022-08-17	1	An action figure of Doctor Strange.	\N	8
4	Marvel mug	2	500	7	2022-08-17	2	A mug with Marvel comic panels.	\N	8
5	One Piece volume 1 manga	4	1399	5	2022-08-17	3	The first volume of the beloved manga One Piece.	\N	3
\.


                                                                                                                                                                                                                                               3609.dat                                                                                            0000600 0004000 0002000 00000000307 14277444371 0014270 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Dragonball Z
2	Naruto
3	One piece
4	Pokรฉmon
5	Hajime no Ippo
6	Attack on titan
7	DC
8	Marvel
9	Death note
10	Black clover
11	Chainsaw Man
12	Jujutsu Kaisen
13	Berserk
14	Yakuza
15	Elden ring
\.


                                                                                                                                                                                                                                                                                                                         3611.dat                                                                                            0000600 0004000 0002000 00000000457 14277444371 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Besart	Elezi	besartelezi@becode.org	Bigbez	ilovebecode
2	Shiva	Mottaghi	shivamottaghi@becode.org	Shishi	ilovemyhusband
3	Jelle	Van de Poel	jellevdp@becode.org	Snelle Jelle	ihatefish
4	Lucas	Stocker	lucasstocker@becode.org	Gepoverlow	palomita
5	Pablo	Garcia Plaza	Pablogp@becode.org	Pgp	ilikemate
\.


                                                                                                                                                                                                                 restore.sql                                                                                         0000600 0004000 0002000 00000017474 14277444371 0015416 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE scrum_db;
--
-- Name: scrum_db; Type: DATABASE; Schema: -; Owner: lucas
--

CREATE DATABASE scrum_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE scrum_db OWNER TO lucas;

\connect scrum_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: category; Type: TABLE; Schema: public; Owner: lucas
--

CREATE TABLE public.category (
    id integer NOT NULL,
    cetagory character varying(255) NOT NULL
);


ALTER TABLE public.category OWNER TO lucas;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: lucas
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO lucas;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lucas
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: product_seq; Type: SEQUENCE; Schema: public; Owner: lucas
--

CREATE SEQUENCE public.product_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_seq OWNER TO lucas;

--
-- Name: product; Type: TABLE; Schema: public; Owner: lucas
--

CREATE TABLE public.product (
    id integer DEFAULT nextval('public.product_seq'::regclass) NOT NULL,
    product_name character varying(255) NOT NULL,
    amount integer NOT NULL,
    price integer NOT NULL,
    category_id integer,
    post_date date NOT NULL,
    user_id integer,
    product_description character varying(255) DEFAULT NULL::character varying,
    image bytea,
    theme_id integer
);


ALTER TABLE public.product OWNER TO lucas;

--
-- Name: theme; Type: TABLE; Schema: public; Owner: lucas
--

CREATE TABLE public.theme (
    id integer NOT NULL,
    theme_name character varying(255) NOT NULL
);


ALTER TABLE public.theme OWNER TO lucas;

--
-- Name: theme_id_seq; Type: SEQUENCE; Schema: public; Owner: lucas
--

CREATE SEQUENCE public.theme_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.theme_id_seq OWNER TO lucas;

--
-- Name: theme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lucas
--

ALTER SEQUENCE public.theme_id_seq OWNED BY public.theme.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: lucas
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255),
    email character varying(70) NOT NULL,
    username character varying(30) NOT NULL,
    password character varying(20) NOT NULL
);


ALTER TABLE public."user" OWNER TO lucas;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: lucas
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO lucas;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lucas
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: theme id; Type: DEFAULT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.theme ALTER COLUMN id SET DEFAULT nextval('public.theme_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: lucas
--

COPY public.category (id, cetagory) FROM stdin;
\.
COPY public.category (id, cetagory) FROM '$$PATH$$/3607.dat';

--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: lucas
--

COPY public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) FROM stdin;
\.
COPY public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) FROM '$$PATH$$/3613.dat';

--
-- Data for Name: theme; Type: TABLE DATA; Schema: public; Owner: lucas
--

COPY public.theme (id, theme_name) FROM stdin;
\.
COPY public.theme (id, theme_name) FROM '$$PATH$$/3609.dat';

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: lucas
--

COPY public."user" (id, firstname, lastname, email, username, password) FROM stdin;
\.
COPY public."user" (id, firstname, lastname, email, username, password) FROM '$$PATH$$/3611.dat';

--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lucas
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- Name: product_seq; Type: SEQUENCE SET; Schema: public; Owner: lucas
--

SELECT pg_catalog.setval('public.product_seq', 6, false);


--
-- Name: theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lucas
--

SELECT pg_catalog.setval('public.theme_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lucas
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: theme theme_pk; Type: CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.theme
    ADD CONSTRAINT theme_pk PRIMARY KEY (id);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: product_category_id_fk; Type: INDEX; Schema: public; Owner: lucas
--

CREATE INDEX product_category_id_fk ON public.product USING btree (category_id);


--
-- Name: product_theme_id_fk; Type: INDEX; Schema: public; Owner: lucas
--

CREATE INDEX product_theme_id_fk ON public.product USING btree (theme_id);


--
-- Name: product_user_id_fk; Type: INDEX; Schema: public; Owner: lucas
--

CREATE INDEX product_user_id_fk ON public.product USING btree (user_id);


--
-- Name: product product_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fk FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: product product_theme_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_theme_id_fk FOREIGN KEY (theme_id) REFERENCES public.theme(id);


--
-- Name: product product_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: lucas
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_user_id_fk FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    