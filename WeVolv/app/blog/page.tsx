import { redirect } from "next/navigation";

const REDIRECT_URL = "https://portal.wevolvlife.com/blog";

export default function Blog() {
  redirect(REDIRECT_URL);
}
