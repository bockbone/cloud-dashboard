import Ads from "./Ads";
import Card from "./Card";
import Categories from "./Categories";
import FileManager from "./FileManager";
import QuickAccess from "./QuickAccess";
import RecentUpload from "./RecentUpload";
import SharedFolder from "./SharedFolder";
import UsageStats from "./UsageStats";

function Mid() {
  return (
    <div className="flex flex-1">
      <div className="w-3/4">
        <Card />
        <QuickAccess />
        <div className="mx-10 mt-10 h-[380px] flex justify-between space-x-8">
          <RecentUpload />
          <FileManager />
          <Categories />
        </div>
      </div>
      <div className="w-1/4">
        <div className="my-10 mx-5 space-y-8">
          <UsageStats />
          <SharedFolder />
          <Ads />
        </div>
      </div>
    </div>
  );
}

export default Mid;
