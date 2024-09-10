"use client";
import { Button, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginateProps extends FlexProps {
  pages: number;
}

const Paginate = ({ pages, ...rest }: PaginateProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const paramsPage = Number(params.get("page") || 1);

  const handleNext = () => {
    if (Number(paramsPage) < pages) {
      params.set("page", String(paramsPage + 1));

      replace(`${pathname}?${params.toString()}`);

      return;
    }

    return;
  };

  const handlePrev = () => {
    if (Number(paramsPage) <= pages && Number(paramsPage) > 1) {
      params.set("page", String(paramsPage - 1));

      replace(`${pathname}?${params.toString()}`);

      return;
    }

    return;
  };

  const handleSetPage = (index: number) => {
    if (paramsPage && paramsPage <= pages) {
      params.set("page", String(index));

      replace(`${pathname}?${params.toString()}`);

      return;
    }

    return;
  };

  return (
    <Flex gap={2} {...rest}>
      <Button
        onClick={handlePrev}
        cursor="pointer"
        variant="outline"
        bg={paramsPage !== 1 ? "gray.500" : ""}
      >
        <Icon as={BiChevronLeft} />
      </Button>

      {Array.from(Array(pages)).map((_, index) => (
        <Button
          onClick={() => handleSetPage(index + 1)}
          key={index}
          variant="outline"
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        cursor="pointer"
        bg={paramsPage !== pages ? "gray.500" : ""}
      >
        <Icon as={BiChevronRight} />
      </Button>
    </Flex>
  );
};

export default Paginate;
