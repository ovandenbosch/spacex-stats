import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

export default function Launches({data}) {
  

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />

      {data.launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </>
  );
}
