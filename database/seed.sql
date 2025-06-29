INSERT INTO korisnik(
	idk, korime, sif, ime, prz, datrodj, drz, tipk)
	VALUES (1, 'korisnik', 'sifra', 'Ime', 'Prezime', '2002-10-07', 'SRB', 'Admin');

INSERT INTO igrac(
	idk)
	VALUES (1);

INSERT INTO tim(
	idt, nazt, datkt, ukp, budz, igrac_idk)
	VALUES (1, 'Tim', '2025-06-06', 0, 0, 1);

INSERT INTO runda(
	idr, datpoc, datz)
	VALUES (1, '2025-06-06', '2025-06-08');

INSERT INTO runda(
	idr, datpoc, datz)
	VALUES (2, '2025-06-10', '2025-06-12');

INSERT INTO runda(
	idr, datpoc, datz)
	VALUES (3, '2025-06-14', '2025-06-16');

INSERT INTO runda(
	idr, datpoc, datz)
	VALUES (4, '2025-06-18', '2025-06-20');

INSERT INTO runda(
	idr, datpoc, datz)
	VALUES (5, '2025-06-22', '2025-06-24');

INSERT INTO klub(
	idkl, nazkl, drzkl, kbiokl, strkl)
	VALUES (1, 'Buducnost VOLI', 'MNE', null, null);

INSERT INTO klub(
	idkl, nazkl, drzkl, kbiokl, strkl)
	VALUES (2, 'Crvena Zvezda Meridianbet', 'SRB', null, null);

INSERT INTO klub(
	idkl, nazkl, drzkl, kbiokl, strkl)
	VALUES (3, 'Partizan Mozzart Bet', 'CRO', null, null);

INSERT INTO klub(
	idkl, nazkl, drzkl, kbiokl, strkl)
	VALUES (4, 'Cedevita Olimpija', 'SLO', null, null);

INSERT INTO klub(
	idkl, nazkl, drzkl, kbiokl, strkl)
	VALUES (5, 'Igokea m:tel', 'RS', null, null);

INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES
    (1, 'Rasheed', 'Sulaimon', 1, 1, 0, 12.5),
    (2, 'McKinley', 'Wright', 1, 0, 0, 12.3),
    (3, 'Kenan', 'Kamenjas', 0, 0, 1, 11.8),
    (4, 'Yogi', 'Ferrell', 1, 0, 0, 11.4),
    (5, 'Nikola', 'Tanaskovic', 0, 1, 0, 9.5);

INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES
    (6, 'Filip', 'Petrusev', 0, 1, 1, 13.6),
    (7, 'Nemanja', 'Nedovic', 1, 0, 0, 10.0),
    (8, 'Nikola', 'Kalinic', 0, 1, 0, 9.6),
    (9, 'Ognjen', 'Dobric', 1, 1, 0, 8.4),
    (10, 'Milos', 'Teodosic', 1, 0, 0, 8.1);

INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES
    (11, 'Carlik', 'Jones', 1, 0, 0, 14.2),
    (12, 'Balsa', 'Koprivica', 0, 0, 1, 12.5),
    (13, 'Vanja', 'Marinkovic', 1, 1, 0, 10.8),
    (14, 'Uros', 'Mijailovic', 1, 0, 0, 9.5),
    (15, 'Mitar', 'Bosnjakovic', 0, 1, 0, 11.1);

INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES
    (16, 'Mirza', 'Begic', 0, 0, 1, 9.9),
    (17, 'Brynton', 'Lemar', 1, 0, 0, 9.6),
    (18, 'Aleksej', 'Nikolic', 1, 0, 0, 10.0),
    (19, 'Danilo', 'Tasic', 0, 1, 0, 5.4),
    (20, 'Jaka', 'Blazic', 1, 1, 0, 11.2);

INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES
    (21, 'Bryce', 'Jones', 1, 0, 0, 14.0),
    (22, 'Strahinja', 'Gavrilovic', 0, 1, 0, 11.8),
    (23, 'Vasilije', 'Pusica', 1, 0, 0, 10.3),
    (24, 'Vojin', 'Ilic', 0, 1, 0, 9.4), 
    (25, 'Sandro', 'Antunovic', 0, 0, 1, 10.6); 

INSERT INTO igra (datpr, kosarkas_idkos, klub_idkl) VALUES
    ('2018-08-15', 1, 1),
    ('2020-11-03', 2, 1),
    ('2019-02-21', 3, 1),
    ('2022-06-09', 4, 1),
    ('2015-10-27', 5, 1),

    ('2021-01-13', 6, 2),
    ('2018-03-30', 7, 2),
    ('2023-04-18', 8, 2),
    ('2016-12-07', 9, 2),
    ('2020-08-25', 10, 2),

    ('2014-09-02', 11, 3),
    ('2022-02-11', 12, 3),
    ('2019-06-14', 13, 3),
    ('2021-11-22', 14, 3),
    ('2018-05-06', 15, 3),

    ('2023-01-28', 16, 4),
    ('2015-04-09', 17, 4),
    ('2020-07-19', 18, 4),
    ('2016-01-31', 19, 4),
    ('2022-10-04', 20, 4),

    ('2017-12-19', 21, 5),
    ('2023-07-10', 22, 5),
    ('2019-09-27', 23, 5),
    ('2016-06-23', 24, 5),
    ('2021-08-01', 25, 5);

INSERT INTO utakmica (rbu, dativru, rezu, zav, runda_idr) VALUES
    (1, '2025-06-06', '85:78', 'F', 1),
    (2, '2025-06-06', '92:88', 'F', 1),
    (3, '2025-06-07', '80:90', 'F', 1),
    (4, '2025-06-07', '75:82', 'F', 1),
    (5, '2025-06-08', '88:91', 'F', 1);


INSERT INTO utakmica (rbu, dativru, rezu, zav, runda_idr) VALUES
    (1, '2025-06-10', '77:85', 'F', 2),
    (2, '2025-06-10', '90:83', 'F', 2),
    (3, '2025-06-11', '95:80', 'F', 2),
    (4, '2025-06-11', '88:92', 'F', 2),
    (5, '2025-06-12', '79:87', 'F', 2);


INSERT INTO utakmica (rbu, dativru, rezu, zav, runda_idr) VALUES
    (1, '2025-06-14', '91:86', 'F', 3),
    (2, '2025-06-14', '84:90', 'F', 3),
    (3, '2025-06-15', '89:93', 'F', 3),
    (4, '2025-06-15', '87:79', 'F', 3),
    (5, '2025-06-16', '80:85', 'F', 3);


INSERT INTO utakmica (rbu, dativru, rezu, zav, runda_idr) VALUES
    (1, '2025-06-18', '88:84', 'F', 4),
    (2, '2025-06-18', '92:89', 'F', 4),
    (3, '2025-06-19', '81:90', 'F', 4),
    (4, '2025-06-19', '85:87', 'F', 4),
    (5, '2025-06-20', '90:91', 'F', 4);


INSERT INTO utakmica (rbu, dativru, rezu, zav, runda_idr) VALUES
    (1, '2025-06-22', '86:88', 'F', 5),
    (2, '2025-06-22', '90:85', 'F', 5),
    (3, '2025-06-23', '83:91', 'F', 5),
    (4, '2025-06-23', '87:80', 'F', 5),
    (5, '2025-06-24', '92:89', 'F', 5);

INSERT INTO se_nadmece VALUES (1, 1, 1, 1), (0, 1, 1, 2);
INSERT INTO se_nadmece VALUES (1, 2, 1, 3), (0, 2, 1, 4);
INSERT INTO se_nadmece VALUES (1, 3, 1, 5), (0, 3, 1, 1);
INSERT INTO se_nadmece VALUES (1, 4, 1, 2), (0, 4, 1, 3);
INSERT INTO se_nadmece VALUES (1, 5, 1, 4), (0, 5, 1, 5);

INSERT INTO se_nadmece VALUES (1, 1, 2, 1), (0, 1, 2, 3);
INSERT INTO se_nadmece VALUES (1, 2, 2, 2), (0, 2, 2, 4);
INSERT INTO se_nadmece VALUES (1, 3, 2, 5), (0, 3, 2, 2);
INSERT INTO se_nadmece VALUES (1, 4, 2, 3), (0, 4, 2, 5);
INSERT INTO se_nadmece VALUES (1, 5, 2, 4), (0, 5, 2, 1);

INSERT INTO se_nadmece VALUES (1, 1, 3, 1), (0, 1, 3, 4);
INSERT INTO se_nadmece VALUES (1, 2, 3, 2), (0, 2, 3, 5);
INSERT INTO se_nadmece VALUES (1, 3, 3, 3), (0, 3, 3, 1);
INSERT INTO se_nadmece VALUES (1, 4, 3, 4), (0, 4, 3, 2);
INSERT INTO se_nadmece VALUES (1, 5, 3, 5), (0, 5, 3, 3);

INSERT INTO se_nadmece VALUES (1, 1, 4, 1), (0, 1, 4, 5);
INSERT INTO se_nadmece VALUES (1, 2, 4, 2), (0, 2, 4, 1);
INSERT INTO se_nadmece VALUES (1, 3, 4, 3), (0, 3, 4, 2);
INSERT INTO se_nadmece VALUES (1, 4, 4, 4), (0, 4, 4, 3);
INSERT INTO se_nadmece VALUES (1, 5, 4, 5), (0, 5, 4, 4);

INSERT INTO se_nadmece VALUES (1, 1, 5, 1), (0, 1, 5, 2);
INSERT INTO se_nadmece VALUES (1, 2, 5, 3), (0, 2, 5, 4);
INSERT INTO se_nadmece VALUES (1, 3, 5, 5), (0, 3, 5, 1);
INSERT INTO se_nadmece VALUES (1, 4, 5, 2), (0, 4, 5, 3);
INSERT INTO se_nadmece VALUES (1, 5, 5, 4), (0, 5, 5, 5);

INSERT INTO se_takmici(tim_idt, runda_idr) VALUES 
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5);

INSERT INTO regrutuje(se_takmici_idt, se_takmici_idr, kosarkas_idkos) VALUES 
    (1, 1, 10),
    (1, 1, 17),
    (1, 1, 20),
    (1, 1, 24),
    (1, 1, 6);

INSERT INTO regrutuje(se_takmici_idt, se_takmici_idr, kosarkas_idkos) VALUES 
    (1, 2, 10),
    (1, 2, 4),
    (1, 2, 8),
    (1, 2, 24),
    (1, 2, 6);

INSERT INTO regrutuje(se_takmici_idt, se_takmici_idr, kosarkas_idkos) VALUES 
    (1, 3, 10),
    (1, 3, 4),
    (1, 3, 9),
    (1, 3, 1),
    (1, 3, 6);

INSERT INTO regrutuje(se_takmici_idt, se_takmici_idr, kosarkas_idkos) VALUES 
    (1, 4, 7),
    (1, 4, 4),
    (1, 4, 9),
    (1, 4, 1),
    (1, 4, 12);

INSERT INTO regrutuje(se_takmici_idt, se_takmici_idr, kosarkas_idkos) VALUES 
    (1, 5, 2),
    (1, 5, 4),
    (1, 5, 9),
    (1, 5, 6),
    (1, 5, 12);