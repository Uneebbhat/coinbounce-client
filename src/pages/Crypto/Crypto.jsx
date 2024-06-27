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

const Crypto = () => {
  const { cryptoData, loading } = useGetCrypto();
  useChangeTitle("Coinbounce | Crypto | Get latest updates on crypto currency");

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
              {cryptoData &&
                cryptoData.map((data) => (
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
        </>
      )}
    </div>
  );
};

export default Crypto;
