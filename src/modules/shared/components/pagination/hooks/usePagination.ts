import { useSearchParams } from "react-router-dom";
import { createEmptyArray } from "../../../utils/helpers";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../constants/pagination.constants";

export const usePagination = (totalCount: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("offset") ?? "1");
  const pageCount = Math.ceil(totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE);

  const handleNextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("offset", String(next));
    setSearchParams(searchParams);
  };
  const handlePreviousPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("offset", String(prev));
    setSearchParams(searchParams);
  };

  const handlePageClick = (page: number) => {
    searchParams.set("offset", String(page));
    setSearchParams(searchParams);
  };

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(currentPage, currentPage + 1);

  const pageNumbers: (number | "...")[] = [];

  if (pageCount < 5) {
    pageNumbers.push(...createEmptyArray(pageCount));
  } else {
    if (currentPage > 3) {
      pageNumbers.push(1, 2, "...");
    }

    // eslint-disable-next-line no-plusplus
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (currentPage < pageCount - 2) {
      pageNumbers.push("...", pageCount);
    }
  }

  return {
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    currentPage,
    pageCount,
    pageNumbers,
  };
};
