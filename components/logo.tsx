import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
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
          <Image src={logoPath} width={25} height={25} alt="logo" />
          <Text>Soheil Rasekh</Text>
        </LogoBox>
      </a>
    </Link>
  );
}
