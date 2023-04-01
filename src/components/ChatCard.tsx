import { MessageResponse } from "@/hooks/useFetchMessages";
import { Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

type ChatCardProps = {
  data: MessageResponse;
} & FlexProps;

export const ChatCard: React.FC<ChatCardProps> = ({ data, ...rest }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/" + data.id)}>
      <Flex gap="2" {...rest}>
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${data.icon}.svg`}
          alt={`感情アイコン_${data.icon}`}
          width={36}
          height={36}
        />
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${data.balloon}.svg`}
          alt={`チャットアイコン_${data.balloon}`}
          width={36}
          height={36}
          style={{
            transform: data.balloon === "1f5e8" ? "scale(-1, 1)" : "none",
          }}
        />
      </Flex>
    </button>
  );
};
