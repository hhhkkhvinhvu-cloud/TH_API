-- USE NodeAPI;

-- CREATE TABLE Users (
--     id INT PRIMARY KEY,
--     name NVARCHAR(100),
--     email VARCHAR(100),
--     phone VARCHAR(20)
-- );

-- INSERT INTO Users (id, name, email, phone) VALUES
-- (1, N'Haleemah Redfern', 'Email1@mail.com', '01111111'),
-- (2, N'Aya Bostock', 'Email2@mail.com', '02222222'),
-- (3, N'Sohail Perez', 'Email3@mail.com', ''),
-- (4, N'Merryn Peck', 'Email4@mail.com', '04444444'),
-- (5, N'Cairon Reynolds', 'Email5@mail.com', '');
CREATE DATABASE QLBANHANG
USE QLBANHANG
CREATE TABLE LoaiHang(
	MaLoai nvarchar(30)  PRIMARY KEY,
	TenLoai nvarchar(50) NOT NULL,
	MoTa nvarchar(50)
)
CREATE TABLE HangHoa(
     MaHang nvarchar(30) PRIMARY KEY,
     MaLoai nvarchar(30) not null,
     Tenhang nvarchar(50),
     SoLuong int default 10,
     SoLuongCon int default 1,
	 CONSTRAINT FR_loaihang_hanghoa FOREIGN KEY (MaLoai) REFERENCES LoaiHang(MaLoai)
)
CREATE TABLE GiaBan(
    MaGB nvarchar(30) PRIMARY KEY,
    MaHang nvarchar(30) not null,
    Gia int default 0,
    DVTinh nvarchar(30),
    NgayBD date DEFAULT (CURDATE()),
    NgayKT date DEFAULT (CURDATE() + INTERVAL 10 DAY),
    CONSTRAINT FR_hanghoa_giaban FOREIGN KEY (MaHang) REFERENCES HangHoa(MaHang)
);
INSERT INTO LoaiHang (MaLoai, TenLoai, MoTa) VALUES
('LH01', 'Đồ uống', 'Các loại nước uống'),
('LH02', 'Bánh kẹo', 'Đồ ngọt'),
('LH03', 'Gia vị', 'Gia vị nấu ăn');
INSERT INTO HangHoa (MaHang, MaLoai, TenHang, SoLuong, SoLuongCon) VALUES
('HH01', 'LH01', 'Coca Cola', 50, 30),
('HH02', 'LH02', 'Bánh Oreo', 40, 20),
('HH03', 'LH03', 'Muối Iod', 60, 55),
('HH04', 'LH01', 'Pepsi', 70, 50);
INSERT INTO GiaBan (MaGB, MaHang, Gia, DVTinh) VALUES
('GB01', 'HH01', 12000, 'Chai'),
('GB02', 'HH02', 15000, 'Hộp'),
('GB03', 'HH03', 8000,  'Gói'),
('GB04', 'HH04', 11000, 'Chai');



