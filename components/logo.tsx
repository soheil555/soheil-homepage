import Link from "next/link";
import Image from "next/image";
import { Text, Flex, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 30px;
  gap: 10px;

  img {
    transition: 100ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

export default function Logo() {
  const logoPath = `/images/logo${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoPath} width={35} height={35} alt="logo" />
          <Text>Soheil Rasekh</Text>
        </LogoBox>
      </a>
    </Link>
  );
}
