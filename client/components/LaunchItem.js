import classNames from "classnames";
import Moment from "react-moment";
import Link from "next/link";

export default function LaunchItem({
  launch: { id, mission_name, launch_date_local, launch_success },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission: {id} -{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link href={`/launch/${id}`}>
            <a className="btn btn-secondary">Launch Details</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
