import Multiselect from "multiselect-react-dropdown";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Form = () => {
  const data = [
    { name: "React Js", id: 1 },
    { name: "Next Js", id: 2 },
    { name: "Tailwind CSS", id: 3 },
    { name: "HTMl", id: 4 },
    { name: "CSS", id: 5 },
    { name: "Firebase", id: 6 },
    { name: "MongoDB", id: 7 },
    { name: "Mongoose", id: 8 },
    { name: "Node JS", id: 9 },
    { name: "JWT", id: 10 },
    { name: "Redux", id: 11 },
  ];

  const [options] = useState(data);
  const [selectedLists, setSelectedLists] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!selectedLists.length) {
      alert("Please select your skills");
    }
    console.log(selectedLists);
  };

  const onSelect = (selectedList, selectedItem) => {
    setSelectedLists(selectedList);
    // console.log(selectedLists);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedLists(selectedList);
    // console.log(selectedLists);
  };

  return (
    <div className="text-black">
      <div className="w-7/12 mx-auto py-4 my-10">
        {/* <div className="py-10 bg-white text-black">
          {skills.map((skill) => {
            return (
              <div key={skill.id}>
                <h1>{skill.name}</h1>
              </div>
            );
          })}
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>Please Fill your skills</p>
            <Multiselect
              options={options} // Options to display in the dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event
              // getSelectedItems={getSelectedItems}
              placeholder="Skills"
              // onSearch={onSearch}
              selectionLimit="10"
              // showCheckbox={true}
              displayValue="name" // Property name to display in the dropdown options
              style={{
                color: "black",
                backgroundColor: "white",
                marginTop: "10px",
              }}
            />
          </div>
          <div className="text-center py-2">
            <input
              className="  py-2 border  border-cyan-500 text-cyan-500 px-7 rounded font-medium  focus:outline-none cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300"
              value="Register New Recruiter"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
