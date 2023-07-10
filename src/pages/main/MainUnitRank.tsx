import { RANK_UNIT_DATA } from "@/utils/DataClass";
import axios from "axios";
import { useEffect, useState } from "react";

interface RankCardProps {
  rank: number;
  unitName: string;
  mp: number
}

const RankCard = (props: RankCardProps) => {
  return (
    <div className="flex flex-row justify-evenly items-center w-full bg-orange-100 rounded-lg drop-shadow mt-1.5 mb-1.5 pt-2 pb-2">
      {
        props.rank === 1 ? 
        <h1 className="basis-1/5 text-3xl text-yellow-300 text-center font-bold">1</h1> :
        props.rank === 2 ?
        <h1 className="basis-1/5 text-3xl text-slate-500 text-center font-bold">2</h1> :
        props.rank === 3 ?
        <h1 className="basis-1/5 text-3xl text-amber-800 text-center font-bold">3</h1> :
        <h1 className="basis-1/5 text-3xl font-bold">{props.rank}</h1>
      }
      <h1 className="basis-3/5 text-3xl text-lime-800 text-center font-semibold">{props.unitName}</h1>
      <div className="basis-1/5 flex flex-col text-right mr-2">
        <p className="text-sm text-orange-600">mp</p>
        <p className="font-bold">{props.mp}</p>
      </div>
    </div>
  );
}

const UnitRank = () => {
  const req = axios.create();
  const [rankByUnit, setRankByUnit] = useState<Array<RANK_UNIT_DATA>>();

  useEffect(() => {
    req
      .get("/api/ranking/getRankByUnit")
      .then((res) => {
        setRankByUnit(res.data.RESULT_DATA.data);
        // console.log(res);
       // console.log("Rank By Unit Items Loaded");
      })
      .catch((err) => console.log(err));
  }, []);

  return (rankByUnit ?
    <div className="flex flex-col w-full pt-10 pr-5 pl-5">
      <p className="text-sm">우리 부대 더 강하게!</p>
      <h1 className="text-2xl font-bold text-orange-600">우리 부대 자격증 랭킹</h1>
      <RankCard rank={1} unitName={rankByUnit[0].name} mp={rankByUnit[0].mp} />
      <RankCard rank={2} unitName={rankByUnit[1].name} mp={rankByUnit[1].mp} />
      <RankCard rank={3} unitName={rankByUnit[2].name} mp={rankByUnit[2].mp} />
      <p className="text-sm text-orange-600 text-center underline mt-1">상위 3개 부대를 확인 할 수 있어요.</p>
    </div>
    :
    <></>
  );
}

export default UnitRank;