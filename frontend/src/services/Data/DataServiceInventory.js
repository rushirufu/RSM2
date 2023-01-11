// frontend\src\services\Data\DataServiceInventory.js
import http from "../http-server";

class DataServiceInventory {
  AllList() {
    return http.get("/inventory/list/");
  }
}
export default new DataServiceInventory();
