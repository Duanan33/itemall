import { DB } from "../utils";
export default class HomeService {
  static findBanner() {
    return DB.query("select * from banner");
  }
}
