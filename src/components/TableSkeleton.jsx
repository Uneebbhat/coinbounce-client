import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableSkeleton = () => {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <Table key={i}>
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
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="w-[70px] h-[10px] rounded" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[70px] h-[10px] rounded" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-70px%] h-[10px] rounded" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[30px] h-[30px] rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[70px] h-[10px] rounded" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[70px] h-[10px] rounded" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </>
  );
};

export default TableSkeleton;
