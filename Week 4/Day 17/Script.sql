create database penjualan;

use penjualan;

CREATE TABLE pemasok (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

-- edit column on barang
alter table barang
	modify nama varchar(255) not null unique;

CREATE TABLE barang (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL,
     harga DECIMAL NOT NULL,
     id_pemasok BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_pemasok) REFERENCES pemasok(id)
);

CREATE TABLE pelanggan (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE transaksi (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_barang BIGINT UNSIGNED NOT NULL,
    id_pelanggan BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_barang) REFERENCES barang(id),
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id),
    waktu DATETIME DEFAULT now() NOT NULL,
    jumlah int NOT NULL,
    total DECIMAL NOT NULL
)

-- select t.id, b.nama as nama_barang, p.nama as nama_pelanggan, b.harga,t.waktu, t.jumlah
-- , t.total from transaksi t
-- 
-- join barang b on t.id_barang = b.id
-- join pelanggan p on t.id_pelangan = p.id

INSERT INTO pelanggan(nama) VALUES 
	("Wawan"),
	("Firman"),
	("Ilham"),
	("Buffon"),
	("Del Piero"),
	("Ronaldo")
	
INSERT INTO pemasok(nama) VALUES 
	("Khay"),
	("Heru"),
	("Siti"),
	("Uci"),
	("Alex")
	
insert into barang(nama, harga, id_pemasok) values
	("Pepsodent A", 15000, 1),
	("Lifebuoy B", 6500, 2),
	("Head & Shoulders V", 20000, 4)
	
insert into transaksi (id_barang, id_pelanggan, jumlah, total) values
	(1,1,1, 15000),
	(2,2,2, 43000),
	(3,3,3, 100000)
	
	
	select * from pelanggan p
	
	select * from pemasok p
	
	select * from barang where nama = "Pepsodent"
	
	select * from transaksi t
	
	select * from pelanggan  where id=6

	select * from pemasok order by nama
	
	delete from transaksi where id = 6
	
	update pelanggan set nama = "cristiano" where id = 6

	select * from pelanggan limit 4
	
	select * from transaksi where id_pelanggan = 1 order by waktu desc;



select t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok ,  b.harga,t.waktu, t.jumlah
, t.total from transaksi t

join barang b on t.id_barang = b.id
join pelanggan p on t.id_pelanggan = p.id
join pemasok pem on b.id_pemasok = pem.id





