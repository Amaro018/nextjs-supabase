import sequelize from "@/utilities/sequelize";
import User from "./user";

(async () => {
  await sequelize.sync();
})();

export { User };
