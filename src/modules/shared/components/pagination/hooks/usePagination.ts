import { useUrl } from "../../../hooks";
import { createEmptyArray } from "../../../utils/helpers";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../constants/pagination.constants";

export const usePagination = (totalCount: number) => {
  const { getParam, setParam } = useUrl();

  const currentPage = Number(getParam("offset") ?? "1");
  const pageCount = Math.ceil(totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE);

  const handleNextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setParam("offset", String(next));
  };
  const handlePreviousPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setParam("offset", String(prev));
  };

  const handlePageClick = (page: number) => {
    setParam("offset", String(page));
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
