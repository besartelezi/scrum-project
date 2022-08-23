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
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    product_name character varying(255) NOT NULL,
    amount integer NOT NULL,
    price integer NOT NULL,
    category_id integer NOT NULL,
    post_date date NOT NULL,
    users_id integer NOT NULL,
    image bytea NOT NULL,
    theme_id integer NOT NULL,
    long_description character varying(400) NOT NULL,
    short_description character varying(50) NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


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
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    address character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: theme id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme ALTER COLUMN id SET DEFAULT nextval('public.theme_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


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
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--



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
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, firstname, lastname, email, username, password, address) VALUES (1, 'superUser', 'superUser', 'superUser', 'superUser', 'superUser', 'superUser');


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- Name: product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_seq', 9, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.theme_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: products products_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk PRIMARY KEY (id);


--
-- Name: products products_pk_2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk_2 UNIQUE (users_id);


--
-- Name: theme theme_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme
    ADD CONSTRAINT theme_pk PRIMARY KEY (id);


--
-- Name: products_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX products_id_uindex ON public.products USING btree (id);


--
-- Name: users_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_id_uindex ON public.users USING btree (id);


--
-- Name: products foreign_key_name; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT foreign_key_name FOREIGN KEY (theme_id) REFERENCES public.theme(id);


--
-- Name: products foreign_key_name2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT foreign_key_name2 FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: products products_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fk FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- PostgreSQL database dump complete
--

