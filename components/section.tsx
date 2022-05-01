import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function Section({ children, delay = 0 }: Props) {
  return (
    <MotionDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </MotionDiv>
  );
}
