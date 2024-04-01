import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";


enum Gender {
  MALE,
  FEMALE,
}
enum Fasting {
  YES,
  NO
}
export var guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  firstName: text("firstname"),
  lastName: text("lastname"),
  phone: text("phone"),
  email: text("email").unique(),
  gender: text("gender" ),
  fasting: text("fasting"),
  comment: text('comment'),
  status: text("status"),
  profession: text("profession"),
  
});
