// import { CreateHangHoaDTO } from "../dtos/hanghoa/create-hanghoa.dto.js";
// import { UpdateHangHoaDTO } from "../dtos/hanghoa/update-hanghoa.dto.js";
import { hanghoaService } from "../services/hanghoa.service.js";

// import { valMaLoaiateCreateHangHoa } from "../valMaLoaiators/hanghoas/create-hanghoa.valMaLoaiator.js";
// import { valMaLoaiateUpdateHangHoa } from "../valMaLoaiators/hanghoas/update-hanghoa.valMaLoaiator.js";

import { logger } from "../config/logger.js";

export const hanghoaController = {
  getAll: async (req, res) => {
    try {
      logger.info("Controller: GET /hanghoa");
      const hanghoa = await hanghoaService.getAllhanghoas();
      res.json(hanghoa);
    } catch (err) {
      logger.error("Controller Error: getAll failed", err);
      res.status(500).json({ message: err.message });
    }
  },

  getByMaLoai: async (req, res) => {
    const { MaLoai } = req.params;
    logger.info(`Controller: GET /hanghoas/ma-loai/${MaLoai}`);

    try {
      const hanghoa = await hanghoaService.gethanghoaByMaLoai(MaLoai);
      res.json(hanghoa);
    } catch (err) {
      logger.error(`Controller Error: getByMaLoai failed (${MaLoai})`, err);
      res.status(404).json({ message: err.message });
    }
  },
  getByTenLoai: async (req, res) => {
    const { TenLoai } = req.params;
    logger.info(`Controller: GET /hanghoas/ten-loai/${TenLoai}`);

    try {
      const hanghoa = await hanghoaService.gethanghoaByTenLoai(TenLoai);
      res.json(hanghoa);
    } catch (err) {
      logger.error(`Controller Error: getByTenLoai failed (${TenLoai})`, err);
      res.status(404).json({ message: err.message });
    }
  },

  getAllSapHet: async (req, res) => {
    try {
      logger.info("Controller: GET /hanghoa/sap-het");
      const hanghoa = await hanghoaService.getAllhanghoaSapHet();
      res.json(hanghoa);
    } catch (err) {
      logger.error("Controller Error: getAllSapHet failed", err);
      res.status(500).json({ message: err.message });
    }
  },
  getAllGiaBan: async (req, res) => {
  logger.info("Controller: GET /hanghoa/giaban");
  try {
    const data = await hanghoaService.getAllGiaBan();
    res.json(data);
  } catch (err) {
    logger.error("Controller Error: getAllGiaBan failed", err);
    res.status(500).json({ message: err.message });
  }
},

getGiaBanByMaHang: async (req, res) => {
  const { MaHang } = req.params;
  logger.info(`Controller: GET /hanghoa/giaban/${MaHang}`);

  try {
    const data = await hanghoaService.getGiaBanByMaHang(MaHang);
    res.json(data);
  } catch (err) {
    logger.error("Controller Error: getGiaBanByMaHang failed", err);
    res.status(404).json({ message: err.message });
  }
},

  


//   create: async (req, res) => {
//     try {
//       logger.info("Controller: POST /HangHoas");

//       // VALMaLoaiATE INPUT
//       const valMaLoaiData = valMaLoaiateCreateHangHoa(req.body);

//       // CREATE DTO
//       const dto = new CreateHangHoaDTO(valMaLoaiData);

//       const HangHoa = await HangHoaService.createHangHoa(dto);
//       res.status(201).json(HangHoa);
//     } catch (err) {
//       logger.error("Controller Error: create failed", err);
//       res.status(400).json({ message: err.message });
//     }
//   },

//   update: async (req, res) => {
//     const MaLoai = +req.params.MaLoai;
//     logger.info(`Controller: PUT /HangHoas/${MaLoai}`);

//     try {
//       // VALMaLoaiATE INPUT
//       const valMaLoaiData = valMaLoaiateUpdateHangHoa(req.body);

//       // CREATE DTO
//       const dto = new UpdateHangHoaDTO(valMaLoaiData);

//       const HangHoa = await HangHoaService.updateHangHoa(MaLoai, dto);
//       res.json(HangHoa);
//     } catch (err) {
//       logger.error(`Controller Error: update failed (${MaLoai})`, err);
//       res.status(400).json({ message: err.message });
//     }
//   },

//   delete: async (req, res) => {
//     const MaLoai = +req.params.MaLoai;
//     logger.info(`Controller: DELETE /HangHoas/${MaLoai}`);

//     try {
//       const result = await HangHoaService.deleteHangHoa(MaLoai);
//       res.json(result);
//     } catch (err) {
//       logger.error(`Controller Error: delete failed (${MaLoai})`, err);
//       res.status(404).json({ message: err.message });
//     }
//   },
};
