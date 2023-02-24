import styles from "@/styles/Home.module.css";
import { Title } from "./Title";
import { Action } from "./Action";
import { useDisclosure } from "@chakra-ui/react";
import { PublishModal } from "./PublishModal";
import { useRef } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <main className={styles.main}>
        <Title />
        aaa
        <Action onOpen={onOpen} />
        <PublishModal key={new Date().toISOString()} {...{ isOpen, onClose }} />
      </main>
    </>
  );
}
