import { z } from "zod";

export const updateHangHoaSchema = z.object({
  MaLoai: z.string({ required_error: "Maloai is required" }).max(30),
  TenHang: z.string({ required_error: "TenHang is required" }).max(100),
  SoLuong: z.int()> 0,
  SoLuongCon: z.int()> 0
});

export function validateUpdateHangHoa(data) {
  return updateHangHoaSchema.parse(data);
}