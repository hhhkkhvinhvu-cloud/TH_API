import { z } from "zod";

export const createHangHoaSchema = z.object({
  MaHang: z.number({ required_error: "MaHang is required" }),
  MaLoai: z.string({ required_error: "Maloai is required" }).max(30),
  TenHang: z.string({ required_error: "TenHang is required" }).max(100),
  SoLuong: z.int()> 0,
  SoLuongCon: z.int()> 0
});

export function validateCreateHangHoa(data) {
  return createHangHoaSchema.parse(data);
}