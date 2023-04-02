import {
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type PrivacyPolicyModalProps = Omit<ModalProps, "children">;

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx={{ base: "4" }} py="30">
        <ModalCloseButton />
        <ModalBody overflowY="scroll" maxH="90vh">
          <h1 style={{ fontWeight: "bold" }}>プライバシーポリシー</h1>
          <p style={{ marginTop: "16px" }}>
            当サイトでは、サービス向上のため、Googleによるアクセス解析ツールGoogle
            Analyticsを使用しています。 Google
            Analyticsではデータの収集のためにCookie機能を使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
            <br />
            この機能はCookieを無効にすることで収集を拒否することができます。その場合、お使いのブラウザの設定をご確認ください。
            <br />
            この規約に関しての詳細は
            <Link
              color="blue.500"
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              isExternal
            >
              Google Analyticsサービス利用規約
            </Link>
            のページや
            <Link
              color="blue.500"
              href="https://policies.google.com/technologies/ads?hl=ja"
              isExternal
            >
              Googleポリシーと規約ページ
            </Link>
            をご覧ください。
          </p>
          <p style={{ marginTop: "16px" }}>
            その他、要望、バグ、疑問点などありましたら、お気軽に
            <Link
              color="blue.500"
              href="https://twitter.com/cryptooooon"
              isExternal
            >
              運営者のTwitter
            </Link>
            までご連絡ください。
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
