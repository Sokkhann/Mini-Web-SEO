import * as Yup from "yup";

// create two variable
// 1. store size image(validation for size of image before post)
// 2. store type of image(format image before post)
const FILE_SIZE = 1024 * 1024 * 2; // allow file max 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"]; // allow the kind of format file 

export const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
      desc: Yup.string().nullable(),
      price: Yup.number().required("Required"),
      quantity: Yup.number().required("Required"),
    fileIcon: Yup.mixed()
          .test("fileFormat", "Unsupported Format", (value: any) => {
              if (!value) {
                  return true;
              }
              return SUPPORTED_FORMATS.includes(value.type);
          })
          .test("fileSize", "File Size is too Large", (value: any) => {
              if (!value) {
                  true;
              }
              return value.size <= FILE_SIZE;
          }).required("Required"),
  
      fileProduct: Yup.mixed()
          .test("fileFormat", "Unsupported Format", (value: any) => {
              if (!value) {
                  return true;
              }
              return SUPPORTED_FORMATS.includes(value.type);
          })
          .test("fileSize", "File Size is too large", (value: any) => {
              if (!value) {
                  true;
              }
              return value.size <= FILE_SIZE;
          })
          .required("Required"),
  })