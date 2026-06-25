import { v4 as uuid } from "uuid";

export function generateInviteToken() {
  return uuid();
}