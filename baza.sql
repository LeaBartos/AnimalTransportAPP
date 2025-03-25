
SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_ab6a6c_animaltransport SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_ab6a6c_animaltransport COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_ab6a6c_animaltransport SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO

drop table prijevozi;
drop table prijevoznici;
drop table narucitelji;

create table narucitelji (
	sifra int not null primary key identity(1,1),
	vrsta varchar (30) not null,
	ime varchar (50) not null,
	prezime varchar(50) not null,
	adresa varchar (50) not null,
	telefon varchar (15) not null,
	email varchar (100) not null
);

create table prijevoznici (
	sifra int not null primary key identity(1,1),
	naziv varchar (50) not null,
	oib char (11) not null,
	broj_licence varchar (20) not null,
	adresa varchar (50) not null,
	telefon varchar (15) not null,
	email varchar (100) not null
);

create table prijevozi (
	sifra int not null primary key identity(1,1),
	vrsta varchar (30) not null,
	polaziste varchar (70) not null,
	odrediste varchar (70) not null,
	datum datetime,
	vrsta_zivotinje varchar (50) not null,
	kolicina int not null,
	nacin_placanja varchar (50) not null,
	narucitelj int not null references narucitelji(sifra),
	prijevoznik int not null references prijevoznici(sifra)
);


-- 1
insert into narucitelji ( vrsta, ime, prezime, 
adresa, telefon, email ) values

( 'Fizička_osoba', 'Lea', 'Bartoš', 'Sjenjak_28', 
'0989701878', 'leabartos@gmail.com' );

-- 2
insert into narucitelji ( vrsta, ime, prezime, 
adresa, telefon, email ) values

( 'Pravna_osoba', 'Tara', 'Pijunović', 'Sjenjak_39', 
'0915664438', 'tara.pijunovic@gmail.com' );

-- 3
insert into narucitelji ( vrsta, ime, prezime, 
adresa, telefon, email ) values

( 'Fizička_osoba', 'Gordana', 'Vekić', 'Ljubljanska_98', 
'0916998820', 'gordana@gmail.com' );


-- 1
insert into prijevoznici ( naziv, oib, broj_licence, adresa, telefon, email ) values

( 'Pijunović_Company', '23665547859', 'HR16092240758', 'Ružina_32', '031573482', 'pijunovic@gmail.com');


-- 2
insert into prijevoznici ( naziv, oib, broj_licence, adresa, telefon, email ) values

( 'Grnja_Company', '25478860198', 'HR30213369854', 'Kombolova_32', '031120236', 'grnja@gmail.com');

-- 3
insert into prijevoznici ( naziv, oib, broj_licence, adresa, telefon, email ) values

( 'LiveAnimal_Company', '98785520147', 'HR63221456987', 'Lipa_154', '031900120', 'live.animal@gmail.com');



-- 1
insert into prijevozi ( vrsta, polaziste, odrediste, datum, 
vrsta_zivotinje, kolicina, nacin_placanja, 
narucitelj, prijevoznik ) values

( 'Automobil', 'Osijek', 'Dubrovnik', '2024-12-13', 
'Pas', 2, 'Plaćanje_putem_računa', 1, 2 );

-- 2
insert into prijevozi ( vrsta, polaziste, odrediste, datum, 
vrsta_zivotinje, kolicina, nacin_placanja, 
narucitelj, prijevoznik ) values

( 'Kombi', 'Osijek', 'Rijeka', '2024-12-13', 
'Mačka', 1, 'Gotovina', 2, 1 );

-- 3
insert into prijevozi ( vrsta, polaziste, odrediste, datum, 
vrsta_zivotinje, kolicina, nacin_placanja, 
narucitelj, prijevoznik ) values

( 'Kamion', 'Osijek', 'Zagreb', '2024-12-13', 
'Konj', 4, 'Kartica', 3, 3 );
