import React from "react";
import { useRouter } from "next/router";

export default function Pid() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <div>{pid}</div>
    </Layout>
  );
}
