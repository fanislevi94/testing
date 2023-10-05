import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import { useState } from "react";
import api from "../../pages/services/api";
function EditItem(props) {
  const { items } = props;

  const [isOpen, setIsOpen] = useState(false);
  var all = 0;

  const handleClick = (value) => {
    setIsOpen((isOpen) => !isOpen);
    var editableText = $("<textarea />").val("DESCRIPTION...");
    editableText.css("background-color", "rgb(87 83 78)");
    $("#" + value).replaceWith(editableText);
    $("#" + value).on("click", function () {
      editableText.hide();
      //alert("Handler for `click` called." + editableText.val());

      api.put(
        {
          id: value,
          description: editableText.val(),
        },
        "api/put"
      );

      window.location.href = process.env.uriEdit;
    });
  };

  return (
    <ul>
      <div className="flex flex-wrap gap-10 pl-40 pt-10">
        {items.map((data) => (
          <div className="text-center" key={data.id}>
            <Image
              src={data.imageUrl}
              width={400}
              height={600}
              alt="Picture of the author"
            />
            <li key={data.id}>
              <div className="pt-10 text-4xl text-white">{data.title}</div>
            </li>
            {console.log("data.id======>" + data.id)}
            <div className="text-white word " id={data.id}>
              {data.description}
              <div className="editClass"></div>
            </div>
            <div id={data.id}>
              <button
                onClick={(e) => handleClick(data.id)}
                className="bg-zinc-950"
              >
                EDIT/SAVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}
export default EditItem;
