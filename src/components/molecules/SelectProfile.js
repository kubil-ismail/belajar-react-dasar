import React from "react";
import { Button } from "react-bootstrap";

function SelectProfile() {
  return (
    <>
      <PhotoProfile />
      <SelectImage />
    </>
  );
}

const PhotoProfile = () => (
  <div className="flex-center-horizontal">
    <img
      src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
      alt="profile"
      className="photo-profile"
    />
  </div>
);

const SelectImage = () => (
  <div className="flex-center-horizontal mt-4">
    <Button variant="outline-secondary" className="btn-rounded px-4">
      Select image
    </Button>
  </div>
);

export default SelectProfile;
