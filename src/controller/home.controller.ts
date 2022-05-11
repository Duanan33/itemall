import { Result } from "./../utils/result";
import HomeService from "../service/home.service";

export default class HomeController {
  static async findRecommend(ctx: any) {
    const data = await HomeService.findBanner();
    ctx.body = Result.success(data);
  }
  static async findBanner(ctx: any) {
    const data = await HomeService.findBanner();
    ctx.body = Result.success(data);
  }
}
