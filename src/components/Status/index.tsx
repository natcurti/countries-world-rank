import { SetStateAction } from "react";
import ButtonCheckbox from "./ButtonCheckbox";

const avaliableStatus: string[] = [
  "Member of the United Nations",
  "Independent",
];

export interface IStatus {
  filterStatus: string[];
  setFilterStatus: React.Dispatch<SetStateAction<string[]>>;
}

const Status = ({ filterStatus, setFilterStatus }: IStatus) => {
  return (
    <section className="section">
      <h3>Status</h3>
      <div className="flex flex-col gap-1">
        {avaliableStatus.map((status, index) => (
          <ButtonCheckbox
            key={index}
            status={status}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        ))}
      </div>
    </section>
  );
};

export default Status;
