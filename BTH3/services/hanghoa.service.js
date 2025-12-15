import { hanghoaRepository } from "../repositories/hanghoa.repository.js";
import { HangHoaDTO } from "../dtos/hanghoas/hanghoa.dto.js";
import { logger } from "../config/logger.js";

export const hanghoaService = {
  getAllhanghoas: async () => {
    logger.info("Service: Getting all hanghoas");
    const hanghoas = await hanghoaRepository.getAll();
    return hanghoas.map((u) => new HangHoaDTO(u));
  },

  gethanghoaByMaLoai: async (MaLoai) => {
    logger.info(`Service: Getting hanghoa by MaLoai ${MaLoai}`);
    const hanghoa = await hanghoaRepository.getByMaLoai(MaLoai);

    if (!hanghoa) {
      logger.warn(`Service Warning: hanghoa ${MaLoai} not found`);
      throw new Error("hanghoa not found");
    }

    return new HangHoaDTO(hanghoa);
  },
  gethanghoaByTenLoai: async (TenLoai) => {
    logger.info(`Service: Getting hanghoa by TenLoai ${TenLoai}`);
    const hanghoa = await hanghoaRepository.getByTenLoai(TenLoai);

    if (!hanghoa) {
      logger.warn(`Service Warning: hanghoa ${TenLoai} not found`);
      throw new Error("hanghoa not found");
    }

    return hanghoa.map(hanghoa => new HangHoaDTO(hanghoa));
  },

  getAllhanghoaSapHet: async () => {
    logger.info("Service: Getting all hanghoas sap het");
    const hanghoas = await hanghoaRepository.getAllSapHet();
    return hanghoas.map((u) => new HangHoaDTO(u));
  },
  getAllGiaBan: async () => {
    logger.info("Service: Getting all gia ban");
    return await hanghoaRepository.getAllGiaBan();
  },

  getGiaBanByMaHang: async (MaHang) => {
    logger.info(`Service: Getting giaban by MaHang ${MaHang}`);
    return await hanghoaRepository.getGiaBanByMaHang(MaHang);
  },


//   createhanghoa: async (dto) => {
//     logger.info(`Service: Creating new hanghoa ${dto.email}`);
//     const created = await hanghoaRepository.create(dto);
//     return new HangHoaDTO(created);
//   },

//   updatehanghoa: async (MaLoai, dto) => {
//     logger.info(`Service: Updating hanghoa ${MaLoai}`);

//     const existing = await hanghoaRepository.getByMaLoai(MaLoai);
//     if (!existing) {
//       logger.warn(`Service Warning: Cannot update. hanghoa ${MaLoai} not found`);
//       throw new Error("hanghoa not found");
//     }

//     const updated = await hanghoaRepository.update(MaLoai, dto);
//     return new HangHoaDTO(updated);
//   },

//   deletehanghoa: async (MaLoai) => {
//     logger.info(`Service: Deleting hanghoa ${MaLoai}`);

//     const existing = await hanghoaRepository.getByMaLoai(MaLoai);
//     if (!existing) {
//       logger.warn(`Service Warning: Cannot delete. hanghoa ${MaLoai} not found`);
//       throw new Error("hanghoa not found");
//     }

//     await hanghoaRepository.delete(MaLoai);
//     return { message: "hanghoa deleted successfully" };
//   },
};
