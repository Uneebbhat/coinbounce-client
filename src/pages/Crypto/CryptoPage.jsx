import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetCrypto from "@/hooks/useGetCrypto";
import useChangeTitle from "@/hooks/useChangeTitle";
import TableSkeleton from "@/components/TableSkeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const CryptoPage = () => {
  const { cryptoData, loading } = useGetCrypto();
  useChangeTitle("Coinbounce | Crypto | Get latest updates on crypto currency");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(cryptoData.length / itemsPerPage);

  // Get current page data
  const currentData = cryptoData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="crypto-wrapper">
      {loading ? (
        <TableSkeleton />
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Coin Name</TableHead>
                <TableHead>Coin Symbol</TableHead>
                <TableHead>Coin Image</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>24h Price Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.symbol}</TableCell>
                  <TableCell>
                    <img src={data.image} width={30} alt="" />
                  </TableCell>
                  <TableCell
                    className="font-bold"
                    style={{
                      color: data.current_price < 0 ? "red" : "green",
                    }}
                  >
                    $ {data.current_price}
                  </TableCell>
                  <TableCell
                    className="font-bold"
                    style={{
                      color: data.price_change_24h < 0 ? "red" : "green",
                    }}
                  >
                    {data.price_change_24h}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="mt-4 mb-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={handlePrevious} />
              </PaginationItem>
              {[...Array(totalPages).keys()].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default CryptoPage;
