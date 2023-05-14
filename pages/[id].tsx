import { useRouter } from "next/router";

export default function GenericPage() {
  const router = useRouter();
  return <div>{router.asPath}</div>;
}
