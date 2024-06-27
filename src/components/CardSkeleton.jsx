import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardSkeleton = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <Card className="sm:h-[245px] md:h-[345px]" key={i}>
          <CardHeader>
            <CardTitle style={{ overflow: "hidden", height: "200px" }}>
              <Skeleton className="w-[100%] h-[200px] rounded" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-[100%] h-[50px] rounded" />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardSkeleton;
