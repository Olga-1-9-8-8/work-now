import { useResponsiveContext } from "../../../responsive";
import {
  PaginationBase,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../ui/pagination/PaginationBase";
import { usePagination } from "../hooks/usePagination";

interface PaginationProps {
  totalCount: number;
}

export const Pagination = ({ totalCount }: PaginationProps) => {
  const isMobile = useResponsiveContext();

  const {
    handleNextPage,
    handlePageClick,
    handlePreviousPage,
    currentPage,
    pageCount,
    pageNumbers,
  } = usePagination(totalCount);

  if (pageCount <= 1) return null;

  return (
    <div>
      <PaginationBase>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
              title={isMobile ? "" : "Предыдущая"}
              className={`cursor-pointer ${isMobile && "p-0 pl-1"}`}
              size={isMobile ? "icon" : undefined}
            />
          </PaginationItem>
          {pageNumbers.map((page, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <PaginationItem key={index}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    onClick={() => handlePageClick(page)}
                    isActive={page === currentPage}
                    className={`cursor-pointer `}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              disabled={currentPage === pageCount}
              onClick={handleNextPage}
              title={isMobile ? "" : "Следующая"}
              size={isMobile ? "icon" : undefined}
              className={`cursor-pointer  ${isMobile && "p-0 pr-1"}`}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationBase>
    </div>
  );
};
