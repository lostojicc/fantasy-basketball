create table admin (
    idk integer not null
);

alter table admin
    add constraint admin_pk primary key (idk);

create table igra (
    datpr date not null,
    kosarkas_idkos integer not null,
    klub_idkl integer not null
);

alter table igra
    add constraint igra_pk primary key (kosarkas_idkos, klub_idkl);

create table igrac (
    idk integer not null
);

alter table igrac
    add constraint igrac_pk primary key (idk);

create table ima_cijenu (
    runda_idr integer not null,
    kosarkas_idkos integer not null
);

alter table ima_cijenu
    add constraint ima_cijenu_pk primary key (runda_idr, kosarkas_idkos);

create table javna (
    idl integer not null,
    admin_idk integer not null
);

alter table javna
    add constraint javna_pk primary key (idl);

create table klub (
    idkl integer not null,
    nazkl varchar(40) not null,
    drzkl varchar(20) not null,
    kbiokl varchar(125),
    strkl varchar(30)
);

alter table klub
    add constraint klub_pk primary key (idkl);

create table korisnik (
    idk integer not null,
    korime varchar(30) not null,
    sif varchar(64) not null,
    ime varchar(100) not null,
    prz varchar(100) not null,
    datrodj date not null,
    drz varchar(20) not null,
    tipk varchar(5) not null
);

alter table korisnik
    add constraint ch_inh_korisnik check (tipk in ('Admin', 'Igrac'));

alter table korisnik
    add constraint korisnik_pk primary key (idk);

create table kosarkas (
    idkos integer not null,
    imekos varchar(20) not null,
    przkos varchar(20) not null,
    g char(1) not null,
    f char(1) not null,
    c char(1) not null,
    fpa float
);

alter table kosarkas
    add constraint kosarkas_pk primary key (idkos);

create table liga (
    idl integer not null,
    nazl varchar(20) not null,
    opisl varchar(125),
    datkl date not null,
    tipl varchar(8) not null
);

alter table liga
    add constraint ch_inh_liga check (tipl in ('Javna', 'Privatna'));

alter table liga
    add constraint liga_pk primary key (idl);

create table nagrada (
    idn integer not null,
    nazn varchar(20) not null,
    opisn varchar(125)
);

alter table nagrada
    add constraint nagrada_pk primary key (idn);

create table ostv_stat (
    igra_kosarkas_idkos integer not null,
    igra_klub_idkl integer not null,
    se_nadmece_rbu integer not null,
    se_nadmece_idr integer not null,
    se_nadmece_idkl integer not null,
    p integer,
    s integer,
    a integer,
    u integer,
    lg integer,
    b integer,
    pb integer,
    ps integer,
    f integer,
    psb integer,
    il integer
);

alter table ostv_stat
    add constraint ostv_stat_pk primary key (igra_kosarkas_idkos, igra_klub_idkl, se_nadmece_rbu, se_nadmece_idr, se_nadmece_idkl);

create table poruka (
    idpor integer not null,
    datsl date not null,
    korisnik_idk integer not null
);

alter table poruka
    add constraint poruka_pk primary key (idpor, korisnik_idk);

create table prima (
    korisnik_idk integer not null,
    poruka_idpor integer not null,
    poruka_idk integer not null
);

alter table prima
    add constraint prima_pk primary key (korisnik_idk, poruka_idpor, poruka_idk);

create table privatna (
    idl integer not null,
    sifrapl varchar(64) not null,
    igrac_idk integer not null
);

alter table privatna
    add constraint privatna_pk primary key (idl);

create table regrutuje (
    se_takmici_idt integer not null,
    se_takmici_idr integer not null,
    kosarkas_idkos integer not null
);

alter table regrutuje
    add constraint regrutuje_pk primary key (se_takmici_idt, se_takmici_idr, kosarkas_idkos);

create table relation_22 (
    ucestvuje_liga_idl integer not null,
    ucestvuje_tim_idt integer not null,
    nagrada_idn integer not null
);

alter table relation_22
    add constraint relation_22_pk primary key (ucestvuje_liga_idl, ucestvuje_tim_idt, nagrada_idn);

create table runda (
    idr integer not null,
    datpoc date not null,
    datz date not null
);

alter table runda
    add constraint runda_pk primary key (idr);

create table se_nadmece (
    domacin char(1) not null,
    utakmica_rbu integer not null,
    utakmica_runda_idr integer not null,
    klub_idkl integer not null
);

alter table se_nadmece
    add constraint se_nadmece_pk primary key (utakmica_rbu, utakmica_runda_idr, klub_idkl);

create table se_takmici (
    tim_idt integer not null,
    runda_idr integer not null
);

alter table se_takmici
    add constraint se_takmici_pk primary key (tim_idt, runda_idr);

create table tim (
    idt integer not null,
    nazt varchar(24) not null,
    datkt date not null,
    ukp float not null,
    budz float not null,
    igrac_idk integer not null
);

alter table tim
    add constraint tim_pk primary key (idt);

create table ucestvuje (
    liga_idl integer not null,
    tim_idt integer not null
);

alter table ucestvuje
    add constraint ucestvuje_pk primary key (liga_idl, tim_idt);

create table utakmica (
    rbu integer not null,
    dativru date,
    rezu varchar(7),
    zav char(1) not null,
    runda_idr integer not null
);

alter table utakmica
    add constraint utakmica_pk primary key (rbu, runda_idr);

-- Foreign keys

alter table admin
    add constraint admin_korisnik_fk foreign key (idk) references korisnik(idk);

alter table igra
    add constraint igra_klub_fk foreign key (klub_idkl) references klub(idkl);

alter table igra
    add constraint igra_kosarkas_fk foreign key (kosarkas_idkos) references kosarkas(idkos);

alter table igrac
    add constraint igrac_korisnik_fk foreign key (idk) references korisnik(idk);

alter table ima_cijenu
    add constraint ima_cijenu_kosarkas_fk foreign key (kosarkas_idkos) references kosarkas(idkos);

alter table ima_cijenu
    add constraint ima_cijenu_runda_fk foreign key (runda_idr) references runda(idr);

alter table javna
    add constraint javna_admin_fk foreign key (admin_idk) references admin(idk);

alter table javna
    add constraint javna_liga_fk foreign key (idl) references liga(idl);

alter table ostv_stat
    add constraint ostv_stat_igra_fk foreign key (igra_kosarkas_idkos, igra_klub_idkl) references igra(kosarkas_idkos, klub_idkl);

alter table ostv_stat
    add constraint ostv_stat_se_nadmece_fk foreign key (se_nadmece_rbu, se_nadmece_idr, se_nadmece_idkl) references se_nadmece(utakmica_rbu, utakmica_runda_idr, klub_idkl);

alter table poruka
    add constraint poruka_korisnik_fk foreign key (korisnik_idk) references korisnik(idk);

alter table prima
    add constraint prima_korisnik_fk foreign key (korisnik_idk) references korisnik(idk);

alter table prima
    add constraint prima_poruka_fk foreign key (poruka_idpor, poruka_idk) references poruka(idpor, korisnik_idk);

alter table privatna
    add constraint privatna_igrac_fk foreign key (igrac_idk) references igrac(idk);

alter table privatna
    add constraint privatna_liga_fk foreign key (idl) references liga(idl);

alter table regrutuje
    add constraint regrutuje_kosarkas_fk foreign key (kosarkas_idkos) references kosarkas(idkos);

alter table regrutuje
    add constraint regrutuje_se_takmici_fk foreign key (se_takmici_idt, se_takmici_idr) references se_takmici(tim_idt, runda_idr);

alter table relation_22
    add constraint relation_22_nagrada_fk foreign key (nagrada_idn) references nagrada(idn);

alter table relation_22
    add constraint relation_22_ucestvuje_fk foreign key (ucestvuje_liga_idl, ucestvuje_tim_idt) references ucestvuje(liga_idl, tim_idt);

alter table se_nadmece
    add constraint se_nadmece_klub_fk foreign key (klub_idkl) references klub(idkl);

alter table se_nadmece
    add constraint se_nadmece_utakmica_fk foreign key (utakmica_rbu, utakmica_runda_idr) references utakmica(rbu, runda_idr);

alter table se_takmici
    add constraint se_takmici_runda_fk foreign key (runda_idr) references runda(idr);

alter table se_takmici
    add constraint se_takmici_tim_fk foreign key (tim_idt) references tim(idt);

alter table tim
    add constraint tim_igrac_fk foreign key (igrac_idk) references igrac(idk);

alter table ucestvuje
    add constraint ucestvuje_liga_fk foreign key (liga_idl) references liga(idl);

alter table ucestvuje
    add constraint ucestvuje_tim_fk foreign key (tim_idt) references tim(idt);

alter table utakmica
    add constraint utakmica_runda_fk foreign key (runda_idr) references runda(idr);