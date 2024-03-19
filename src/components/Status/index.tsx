import ButtonCheckbox from "./ButtonCheckbox";

const avaliableStatus: string[] = [
  "Member of the United Nations",
  "Independent",
];

const Status = () => {
  return (
    <section className="section">
      <h3>Status</h3>
      <div className="flex flex-col gap-1">
        {avaliableStatus.map((status, index) => (
          <ButtonCheckbox key={index} status={status} />
        ))}
      </div>
    </section>
  );
};

export default Status;
