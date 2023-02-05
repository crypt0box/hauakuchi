import styles from "@/styles/Home.module.css";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Heading as="h1" size="xl" my="4">
          めっちゃはやくちでしゃべりたい
        </Heading>
        <Text size="lg">早口になっちゃうくらい</Text>
        <Text size="lg">しゃべりたいことを投稿しよう</Text>
      </main>
    </>
  );
}
