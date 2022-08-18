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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    cetagory character varying(255) NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: product_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_seq OWNER TO postgres;

--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: theme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.theme (
    id integer NOT NULL,
    theme_name character varying(255) NOT NULL
);


ALTER TABLE public.theme OWNER TO postgres;

--
-- Name: theme_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.theme_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.theme_id_seq OWNER TO postgres;

--
-- Name: theme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.theme_id_seq OWNED BY public.theme.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255),
    email character varying(70) NOT NULL,
    username character varying(30) NOT NULL,
    password character varying(20) NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: theme id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme ALTER COLUMN id SET DEFAULT nextval('public.theme_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category (id, cetagory) VALUES (1, 'Trading cards');
INSERT INTO public.category (id, cetagory) VALUES (2, 'Action figures');
INSERT INTO public.category (id, cetagory) VALUES (3, 'Plushies');
INSERT INTO public.category (id, cetagory) VALUES (4, 'Clothing');
INSERT INTO public.category (id, cetagory) VALUES (5, 'Manga');
INSERT INTO public.category (id, cetagory) VALUES (6, 'Light novels');
INSERT INTO public.category (id, cetagory) VALUES (7, 'Accessoires ');


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) VALUES (3, 'Doctor Strange action figure', 2, 9999, 2, '2022-08-17', 1, 'An action figure of Doctor Strange.', NULL, 8);
INSERT INTO public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) VALUES (4, 'Marvel mug', 2, 500, 7, '2022-08-17', 2, 'A mug with Marvel comic panels.', NULL, 8);
INSERT INTO public.product (id, product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) VALUES (5, 'One Piece volume 1 manga', 4, 1399, 5, '2022-08-17', 3, 'The first volume of the beloved manga One Piece.', NULL, 3);


--
-- Data for Name: theme; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.theme (id, theme_name) VALUES (1, 'Dragonball Z');
INSERT INTO public.theme (id, theme_name) VALUES (2, 'Naruto');
INSERT INTO public.theme (id, theme_name) VALUES (3, 'One piece');
INSERT INTO public.theme (id, theme_name) VALUES (4, 'Pokémon');
INSERT INTO public.theme (id, theme_name) VALUES (5, 'Hajime no Ippo');
INSERT INTO public.theme (id, theme_name) VALUES (6, 'Attack on titan');
INSERT INTO public.theme (id, theme_name) VALUES (7, 'DC');
INSERT INTO public.theme (id, theme_name) VALUES (8, 'Marvel');
INSERT INTO public.theme (id, theme_name) VALUES (9, 'Death note');
INSERT INTO public.theme (id, theme_name) VALUES (10, 'Black clover');
INSERT INTO public.theme (id, theme_name) VALUES (11, 'Chainsaw Man');
INSERT INTO public.theme (id, theme_name) VALUES (12, 'Jujutsu Kaisen');
INSERT INTO public.theme (id, theme_name) VALUES (13, 'Berserk');
INSERT INTO public.theme (id, theme_name) VALUES (14, 'Yakuza');
INSERT INTO public.theme (id, theme_name) VALUES (15, 'Elden ring');


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, firstname, lastname, email, username, password) VALUES (1, 'Besart', 'Elezi', 'besartelezi@becode.org', 'Bigbez', 'ilovebecode');
INSERT INTO public."user" (id, firstname, lastname, email, username, password) VALUES (2, 'Shiva', 'Mottaghi', 'shivamottaghi@becode.org', 'Shishi', 'ilovemyhusband');
INSERT INTO public."user" (id, firstname, lastname, email, username, password) VALUES (3, 'Jelle', 'Van de Poel', 'jellevdp@becode.org', 'Snelle Jelle', 'ihatefish');
INSERT INTO public."user" (id, firstname, lastname, email, username, password) VALUES (4, 'Lucas', 'Stocker', 'lucasstocker@becode.org', 'Gepoverlow', 'palomita');
INSERT INTO public."user" (id, firstname, lastname, email, username, password) VALUES (5, 'Pablo', 'Garcia Plaza', 'Pablogp@becode.org', 'Pgp', 'ilikemate');


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- Name: product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_seq', 6, false);


--
-- Name: theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.theme_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: theme theme_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme
    ADD CONSTRAINT theme_pk PRIMARY KEY (id);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: product_category_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX product_category_id_fk ON public.product USING btree (category_id);


--
-- Name: product_theme_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX product_theme_id_fk ON public.product USING btree (theme_id);


--
-- Name: product_user_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX product_user_id_fk ON public.product USING btree (user_id);


--
-- Name: product product_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fk FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: product product_theme_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_theme_id_fk FOREIGN KEY (theme_id) REFERENCES public.theme(id);


--
-- Name: product product_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_user_id_fk FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

