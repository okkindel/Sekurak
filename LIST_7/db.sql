use zagor;

drop table users;
drop table przelewy;

CREATE TABLE users
(
id       smallint unsigned NOT NULL auto_increment,
email    text              NOT NULL,
password text              NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE przelewy
(
  id       smallint unsigned NOT NULL auto_increment,
  nadawca  text              NOT NULL,
  odbiorca text              NOT NULL,
  konto    text              NOT NULL,
  kwota    text              NOT NULL,
  data     text              NOT NULL,
  accepted bool              NOT NULL default FALSE,
  PRIMARY KEY (id)
);
