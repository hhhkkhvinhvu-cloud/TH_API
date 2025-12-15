import { pool } from "../config/database.js";
import { logger } from "../config/logger.js";

export const hanghoaRepository = {
  getAll: async () => {
    logger.info("Repository: Fetching all hanghoas");
    try {
      const db = await pool;
      const [rows] = await db.query("SELECT * FROM HangHoa");
      return rows;
    } catch (err) {
      logger.error("Repository Error: getAll failed", err);
      throw err;
    }
  },

  getByMaLoai: async (MaLoai) => {
    logger.info(`Repository: Fetching hanghoa with MaLoai ${MaLoai}`);
    try {
      const db = await pool;
      const [rows] = await db.query("SELECT * FROM HangHoa WHERE MaLoai = ?", [MaLoai]);
      return rows[0];
    } catch (err) {
      logger.error(`Repository Error: getByMaLoai failed for MaLoai ${MaLoai}`, err);
      throw err;
    }
  },
  getByTenLoai: async (TenLoai) => {
    logger.info(`Repository: Fetching hanghoa with TenLoai ${TenLoai}`);
    try {
      const db = await pool;
      const [rows] = await db.query(`
        SELECT * FROM HangHoa 
        INNER JOIN LoaiHang ON HangHoa.MaLoai = LoaiHang.MaLoai 
        WHERE TenLoai = ?`, [TenLoai]);
      return rows;
    } catch (err) {
      logger.error(`Repository Error: getByTenLoai failed for TenLoai ${TenLoai}`, err);
      throw err;
    }
  },

  getAllSapHet: async () => {
    logger.info("Repository: Fetching all hanghoas");
    try {
      const db = await pool;
      const [rows] = await db.query(`
        SELECT * FROM HangHoa
        WHERE SoLuongCon < 5`);
      return rows;
    } catch (err) {
      logger.error("Repository Error: getAllSapHet failed", err);
      throw err;
    }
  },
  getAllGiaBan: async () => {
  logger.info("Repository: Fetching all giaban");
  try {
    const db = await pool;
    const [rows] = await db.query(`
      SELECT 
        HangHoa.MaHang,
        HangHoa.TenHang,
        GiaBan.Gia,
        GiaBan.DVTinh,
        GiaBan.NgayBD,
        GiaBan.NgayKT
      FROM GiaBan
      INNER JOIN HangHoa ON GiaBan.MaHang = HangHoa.MaHang
    `);
    return rows;
  } catch (err) {
    logger.error("Repository Error: getAllGiaBan failed", err);
    throw err;
  }
},

getGiaBanByMaHang: async (MaHang) => {
  logger.info(`Repository: Fetching gia ban with MaHang ${MaHang}`);
  try {
    const db = await pool;
    const [rows] = await db.query(`
      SELECT 
        HangHoa.MaHang,
        HangHoa.TenHang,
        GiaBan.Gia,
        GiaBan.DVTinh,
        GiaBan.NgayBD,
        GiaBan.NgayKT
      FROM GiaBan
      INNER JOIN HangHoa ON GiaBan.MaHang = HangHoa.MaHang
      WHERE GiaBan.MaHang = ?
    `, [MaHang]);
    return rows;
  } catch (err) {
    logger.error("Repository Error: getGiaBanByMaHang failed", err);
    throw err;
  }
},


//   create: async ({ MaLoai, name, email, phone }) => {
//     logger.info(`Repository: Creating hanghoa ${email}`);
//     try {
//       const db = await pool;
//       await db.query(
//         "INSERT INTO hanghoas (MaLoai, name, email, phone) VALUES (?, ?, ?, ?)",
//         [MaLoai, name, email, phone]
//       );
//       return { MaLoai, name, email, phone };
//     } catch (err) {
//       logger.error("Repository Error: create failed", err);
//       throw err;
//     }
//   },

//   update: async (MaLoai, { name, email, phone }) => {
//     logger.info(`Repository: Updating hanghoa ${MaLoai}`);
//     try {
//       const db = await pool;
//       await db.query(
//         "UPDATE hanghoas SET name = ?, email = ?, phone = ? WHERE MaLoai = ?",
//         [name, email, phone, MaLoai]
//       );
//       return { MaLoai, name, email, phone };
//     } catch (err) {
//       logger.error(`Repository Error: update failed for MaLoai ${MaLoai}`, err);
//       throw err;
//     }
//   },

//   delete: async (MaLoai) => {
//     logger.info(`Repository: Deleting hanghoa ${MaLoai}`);
//     try {
//       const db = await pool;
//       await db.query("DELETE FROM hanghoas WHERE MaLoai = ?", [MaLoai]);
//       return true;
//     } catch (err) {
//       logger.error(`Repository Error: delete failed for MaLoai ${MaLoai}`, err);
//       throw err;
//     }
//   },
};
