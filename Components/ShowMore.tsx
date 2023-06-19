"use client";

import {useRouter} from "next/navigation";
import {showMoreProps} from "@/types";
import CustomButton from "./CustomButton";
import {updateSearchParams} from "@/utils";

const ShowMore = ({pageNmber, isNext}: showMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNmber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          handleClick={handleNavigation}
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
        />
      )}
    </div>
  );
};

export default ShowMore;
