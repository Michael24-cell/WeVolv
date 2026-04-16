import { redirect } from "next/navigation";

const PORTAL_URL = "https://portal.wevolvlife.com";

export default function Portal() {
  redirect(PORTAL_URL);
}
