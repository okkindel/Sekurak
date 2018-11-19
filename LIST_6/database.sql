use zagor;

drop table users;

CREATE TABLE users
(
  id       smallint unsigned NOT NULL auto_increment,
  email    text              NOT NULL, # A short summary of the article
  password text              NOT NULL, # A short summary of the article
  PRIMARY KEY (id)
);

drop table przelewy;

CREATE TABLE przelewy
(
  id       smallint unsigned NOT NULL auto_increment,
  nadawca  text              NOT NULL, # A short summary of the article
  odbiorca text              NOT NULL, # A short summary of the article
  konto    text              NOT NULL, # A short summary of the article
  kwota    text              NOT NULL, # A short summary of the article
  data     text              NOT NULL, # A short summary of the article
  PRIMARY KEY (id)
);
