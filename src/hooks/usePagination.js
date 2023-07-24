import { useMemo } from "react";

export const usePagination = (activePage, totalPages)=>{
    const range = useMemo(() => {
        const showedRange = (start,end)=>{
            let a = []
            if (start === 1) {
              a = [1,2,3,4]
            } else if (start >= end-1) {
              for (let index = end-2; index < end+1; index++) {
                a.push(index)}
            } else {for (let index = start; index < end+1; index++) {
              a.push(index)}}
            return a
          }
          if (totalPages>7){
            const start = Math.max(1,activePage - 1);
            const end = Math.min(totalPages-1,activePage + 1);
            let range = showedRange(start,end)
            const hasLeftEllipsis = start > 1;
            const hasRightEllipsis = end < totalPages - 1;
            if(hasLeftEllipsis && hasRightEllipsis){
              return ["PREV", "ELLIPSISLEFT", ...range, "ELLIPSISRIGHT", "NEXT"]
            }
            if(hasLeftEllipsis){
              return ["PREV","ELLIPSISLEFT", ...range, totalPages,"NEXT"]
            }
            if(hasRightEllipsis){
              return ["PREV",...range, "ELLIPSISRIGHT","NEXT"]
            }
          } else return showedRange(1,totalPages)
    }, [activePage,totalPages])
    return range
}