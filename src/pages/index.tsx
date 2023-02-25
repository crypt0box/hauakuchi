import styles from "@/styles/Home.module.css";
import { Title } from "./Title";
import { Action } from "./Action";
import { Box, useDisclosure } from "@chakra-ui/react";
import { PublishModal } from "./PublishModal";
import { useRef } from "react";
import { useFetchMessages } from "@/hooks/useFetchMessages";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { res } = useFetchMessages();
  console.log("🚀 ~ file: index.tsx:12 ~ Home ~ data:", res);
  return (
    <>
      <main className={styles.main}>
        <Title />
        <Box>{res && res.map((el) => <p key={el.id}>{el.message}</p>)}</Box>
        <Action onOpen={onOpen} />
        <PublishModal key={new Date().toISOString()} {...{ isOpen, onClose }} />
      </main>
    </>
  );
}
