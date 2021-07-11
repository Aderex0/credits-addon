// Components
import Button from "../reusables/Button";
import Loading from "../reusables/Loading";
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getLogsRequest, triggerSlider } from "../../redux/actions/credits.action";

const CreditsLog = () => {
  const dispatch = useDispatch();
  const organisation = useSelector((state) => state.credits.organisation);
  const log = useSelector((state) => state.credits.log);
  const loading = useSelector((state) => state.credits.loading);

  const logLength = log.length;

  useEffect(() => {
    if (organisation.id) dispatch(getLogsRequest({ organisationId: organisation.id }));
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="credits-log-container">
          {logLength > 0 ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Old credits</th>
                    <th>New credits</th>
                  </tr>
                </thead>
                <tbody>
                  {log.map((entry, i) => (
                    <tr key={i}>
                      <td>{entry.createdAt}</td>
                      <td>{entry.oldValue}</td>
                      <td>{entry.newValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h2>Log is empty</h2>
          )}
          <Button
            text="Back"
            btnColor="rgb(0, 62, 76)"
            onClick={() =>
              dispatch(
                triggerSlider({
                  add: false,
                  edit: false,
                  log: false,
                })
              )
            }
          />
        </div>
      )}
    </>
  );
};

export default CreditsLog;
