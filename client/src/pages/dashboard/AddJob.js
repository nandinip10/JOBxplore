import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValue,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearValue();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name: name, value: value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            labelText="status"
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            labelText="job type"
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>

            <button
              className="btn btn-block clear-btn"
              type="submit"
              onClick={handleClear}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
